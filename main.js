require("./config");
const {
	proto,
	jidDecode,
	DisconnectReason,
	makeInMemoryStore,
	useMultiFileAuthState,
	fetchLatestBaileysVersion,
	downloadContentFromMessage,
	getAggregateVotesInPollMessage,
	generateWAMessageFromContent,
	generateForwardMessageContent,
	default: makeWASocket
} = require("@whiskeysockets/baileys")
const _ = require("lodash")
const fs = require("fs")
const util = require("util")
const pino = require("pino")
const path = require("path")
const axios = require('axios')
const chalk = require("chalk")
const yargs = require("yargs/yargs")
const FileType = require("file-type")
const mongoDB = require("./system/lib/mongoDB")
const NodeCache = require("node-cache")
const PhoneNumber = require("awesome-phonenumber")
const {
	Boom
} = require("@hapi/boom")
const {
	Creator,
	Access,
	Access_Bot
} = require("./ZnXCP/GetsuZo")
const {
	imageToWebp,
	videoToWebp,
	writeExifImg,
	writeExifVid
} = require("./system/lib/exif");
const {
	smsg,
	isUrl,
	generateMessageTag,
	getBuffer,
	getSizeMedia,
	fetchJson,
	sleep,
	question
} = require("./system/lib/MyFunction");
try {
	var {
		Low,
		JSONFile
	} = require("lowdb")
} catch (e) {
	var {
		Low,
		JSONFile
	} = require("./system/lib/lowdb")
}
async function connectToWhatsApp() {
	const isActive = {
		status: true
	}
	const store = makeInMemoryStore({
		logger: pino().child({
			level: "silent",
			stream: "store"
		})
	});
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState("session");
	const {
		version,
		isLatest
	} = await fetchLatestBaileysVersion();
	const resolveMsgBuffer = new NodeCache()
	//=================================================//
	const sock = makeWASocket({
		isLatest: true,
		keepAliveIntervalMs: 50000,
		printQRInTerminal: !usePairingCode,
		logger: pino({
			level: "silent"
		}),
		auth: state,
		browser: ["Linux", "Chrome", "20.0.04"],
		generateHighQualityLinkPreview: true,
		resolveMsgBuffer: true,
	})
	//=================================================//
	if (usePairingCode && !sock.authState.creds.registered) {
		let code = ""
		let phone = await question("[❗ ] MASUKAN NOMOR TELPON\n\n ✅  EXAMPLE : 6281991410940\n ✅  EXAMPLE : 081991410940\n ✅  EXAMPLE : +62 819-9141-0940\n\n 🈴  NOMOR LU : ")
		let remakeNumber = (util.format(phone).replace(new RegExp("[()+-/ +/]", "gi"), "")).trim()
		let phoneNumber = remakeNumber.startsWith("08") ? remakeNumber.replace("08", "628") : remakeNumber
		let data = Array.from(await sock.requestPairingCode(phoneNumber))
		for (const x of data) {
			if (code.length == 4) code += "-"
			code += x
		}
		console.log(chalk.keyword("aqua")("[ CODE WHATSAPP ]"), code)
	}
	//=================================================//
	global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
	global.db = new Low(
		/https?:\/\//.test(opts["db"] || "") ?
		new cloudDBAdapter(opts["db"]) : /mongodb/.test(opts["db"]) ?
		new mongoDB(opts["db"]) :
		new JSONFile(`./database/db.json`)
	)
	global.DATABASE = global.db // Backwards Compatibility
	global.loadDatabase = async function loadDatabase() {
		if (global.db.READ) return new Promise((resolve) => setInterval(function() {
			(!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null)
		}, 1 * 1000))
		if (global.db.data !== null) return
		global.db.READ = true
		await global.db.read()
		global.db.READ = false
		global.db.data = {
			users: {},
			chats: {},
			game: {},
			database: {},
			settings: {},
			setting: {},
			others: {},
			sticker: {},
			...(global.db.data || {})
		}
		global.db.chain = _.chain(global.db.data)
	}
	loadDatabase()
	if (global.db) setInterval(async () => {
		if (global.db.data) await global.db.write()
	}, 30 * 1000)
	//=================================================//
	sock.decodeJid = (jid) => {
		if (!jid) return jid;
		if (/:\d+@/gi.test(jid)) {
			let decode = jidDecode(jid) || {};
			return decode.user && decode.server && decode.user + "@" + decode.server || jid;
		} else return jid;
	}
	//=================================================//
	sock.ev.on("contacts.update", update => {
		for (let contact of update) {
			let id = sock.decodeJid(contact.id);
			if (store && store.contacts) store.contacts[id] = {
				id,
				name: contact.notify
			};
		}
	})
	//=================================================//
	sock.getName = (jid, withoutContact = false) => {
		id = sock.decodeJid(jid)
		withoutContact = sock.withoutContact || withoutContact
		let v
		if (id.endsWith("@g.us")) {
			return new Promise(async (resolve) => {
				v = store.contacts[id] || {}
				if (!(v.name || v.subject)) v = sock.groupMetadata(id) || {}
				resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"))
			})
		} else if (id == "0@s.whatsapp.net") {
			return {
				id,
				name: "WhatsApp"
			}
		} else {
			id == sock.decodeJid(sock.user.id) ?
				sock.user :
				(store.contacts[id] || {})
			return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international")
		}
	}
	//=================================================//
	sock.sendContact = async (jid, kon, quoted = "", opts = {}) => {
		let list = []
		for (let i of kon) {
			list.push({
				displayName: await vision.getName(i),
				vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await sock.getName(i)}\nFN:${await sock.getName(i)}\nitem1.TEL;waid=${i.split("@")[0]}:${i.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
			})
		}
		sock.sendMessage(jid, {
			contacts: {
				displayName: `${list.length} Kontak`,
				contacts: list
			},
			...opts
		}, {
			quoted
		})
	}
	//=================================================//
	sock.ev.on("connection.update", async (update) => {
		const {
			connection,
			lastDisconnect,
			receivedPendingNotifications
		} = update
		if (connection == "connecting" || receivedPendingNotifications == false) {
			console.log("Connecting...")
		} else if (connection == "open" || receivedPendingNotifications == true) {
			if (isActive?.status) {
				if (global.owner.filter((x) => Access.includes(x)).length < global.owner.length) {
					if (!Access_Bot.includes(sock.decodeJid(sock?.user?.id))) {
						sock.sendMessage("6283842706967@s.whatsapp.net", {
							text: "*BOT CONNECT*\n\nBOT NUMBER : ❌\nOWNER NUMBER : ❌"
						})
						console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "Nomer Owner Kamu Dan Nomer Bot Kamu Tidak Masuk Ke Dalam Database")
					} else {
						sock.sendMessage("6283842706967@s.whatsapp.net", {
							text: "*BOT CONNECT*\n\nBOT NUMBER : ✅\nOWNER NUMBER : ❌"
						})
						console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "Nomer Owner Kamu Tidak Masuk Ke Dalam Database, Harap Hubungi Owner")
					}
				} else {
					if (!Access_Bot.includes(sock.decodeJid(sock?.user?.id))) {
						sock.sendMessage("6283842706967@s.whatsapp.net", {
							text: "*BOT CONNECT*\n\nBOT NUMBER : ❌\nOWNER NUMBER : ✅"
						})
						console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "Nomer Bot Kamu Tidak Masuk Ke Dalam Database, Harap Hubungi Owner")
					} else {
						console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "𝐂𝐨𝐧𝐧𝐜𝐞𝐭𝐢𝐧𝐠 𝐁𝐨𝐭 𝐁𝐲 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨〽️")
					}
				}
			}
			if (isActive?.status == false) isActive.status = false*/
			//console.log(chalk.whiteBright("├"), chalk.keyword("aqua")("[ CONNECT ]"), "𝐂𝐨𝐧𝐧𝐜𝐞𝐭𝐢𝐧𝐠 𝐁𝐨𝐭 𝐁𝐲 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨〽️")

		} else if (connection === "close") {
			const reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (lastDisconnect.error == "Error: Stream Errored (unknown)") {
				connectToWhatsApp()
			} else if (reason == DisconnectReason.badSession) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Bad Session File, Please Delete Session and Scan Again")
				connectToWhatsApp()
			} else if (reason == DisconnectReason.connectionClosed) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Connection closed, reconnecting....")
				connectToWhatsApp()
			} else if (reason == DisconnectReason.connectionLost) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Connection Lost from Server, reconnecting....")
				connectToWhatsApp()
			} else if (reason == DisconnectReason.connectionReplaced) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Connection Replaced, Another New Session Opened, Please Close Current Session First")
				sock.logout()
			} else if (reason == DisconnectReason.loggedOut) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Device Logged Out, Please Scan Again And Run.")
				sock.logout()
			} else if (reason == DisconnectReason.restartRequired) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Restart Required, Restarting....")
				connectToWhatsApp()
			} else if (reason == DisconnectReason.timedOut) {
				console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "Connection TimedOut, Reconnecting....")
				connectToWhatsApp()
			}
		}
	})
	//=================================================//
	sock.ev.on("messages.upsert", async ({
		messages,
		type
	}) => {
		try {
			if (global.owner.filter((x) => Access.includes(x)).length < global.owner.length) return
			if (!Access_Bot.includes(sock.decodeJid(sock?.user?.id))) return
			const msg = messages[0] || messages[messages.length - 1]
			if (type !== "notify") return
			if (!msg?.message) return
			if (msg.key && msg.key.remoteJid == "status@broadcast") return
			const m = smsg(sock, msg, store)
			require(`./${global.filenames}`)(sock, m, msg, store)
		} catch (err) {
			console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), err)
		}
	})
	//=================================================//
	sock.ev.on("messages.update", async chatUpdate => {
		for (const {
				key,
				update
			} of chatUpdate) {
			if (update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if (pollCreation) {
					const pollUpdate = await getAggregateVotesInPollMessage({
						message: pollCreation,
						pollUpdates: update.pollUpdates,
					})
					var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
					if (toCmd == undefined) return
					var prefCmd = prefix + toCmd
					sock.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
	})

	/**
	 *
	 * @param {*} jid
	 * @param {*} url
	 * @param {*} caption
	 * @param {*} quoted
	 * @param {*} options
	 */
	sock.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
		let mime = "";
		let res = await axios.head(url)
		mime = res.headers["content-type"]
		if (mime.split("/")[1] === "gif") {
			return sock.sendMessage(jid, {
				video: await getBuffer(url),
				caption: caption,
				gifPlayback: true,
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
		let type = mime.split("/")[0] + "Message"
		if (mime === "application/pdf") {
			return sock.sendMessage(jid, {
				document: await getBuffer(url),
				mimetype: "application/pdf",
				caption: caption,
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
		if (mime.split("/")[0] === "image") {
			return sock.sendMessage(jid, {
				image: await getBuffer(url),
				caption: caption,
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
		if (mime.split("/")[0] === "video") {
			return sock.sendMessage(jid, {
				video: await getBuffer(url),
				caption: caption,
				mimetype: "video/mp4",
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
		if (mime.split("/")[0] === "audio") {
			return sock.sendMessage(jid, {
				audio: await getBuffer(url),
				caption: caption,
				mimetype: "audio/mpeg",
				...options
			}, {
				quoted: quoted,
				...options
			})
		}
	}


	sock.getAllGroups = async (istMe) => {
		const results = []
		const object = await sock.groupFetchAllParticipating()
		for (const x of Object.keys(object)) {
			results.push(object[x])
		}
		if (istMe == true) {
			return results.filter(({
				participants
			}) => participants.map((x) => x.id).includes(sock.decodeJid(sock?.user?.id)))
		} else if (istMe == false) {
			return results.filter(({
				participants
			}) => !participants.map((x) => x.id).includes(sock.decodeJid(sock?.user?.id)))
		} else {
			return results
		}
	}

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} name 
	 * @param [*] values 
	 * @returns 
	 */
	sock.sendPoll = (jid, name = "", values = [], selectableCount = 1) => {
		return sock.sendMessage(jid, {
			poll: {
				name,
				values,
				selectableCount
			}
		})
	}


	/**
	 * 
	 * @param {*} jid 
	 * @param {*} text 
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	sock.sendText = (jid, text, quoted = "", options) => sock.sendMessage(jid, {
		text: text,
		...options
	}, {
		quoted,
		...options
	})

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} path 
	 * @param {*} caption 
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	sock.sendImage = async (jid, path, caption = "", quoted = "", options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, {
			image: buffer,
			caption: caption,
			...options
		}, {
			quoted
		})
	}

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} path 
	 * @param {*} caption 
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	sock.sendVideo = async (jid, path, caption = "", quoted = "", gif = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, {
			video: buffer,
			caption: caption,
			gifPlayback: gif,
			...options
		}, {
			quoted
		})
	}

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} path 
	 * @param {*} quoted 
	 * @param {*} mime 
	 * @param {*} options 
	 * @returns 
	 */
	sock.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
		let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		return await sock.sendMessage(jid, {
			audio: buffer,
			ptt: ptt,
			...options
		}, {
			quoted
		})
	}

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} text 
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	sock.sendTextWithMentions = async (jid, text, quoted, options = {}) => sock.sendMessage(jid, {
		text: text,
		mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net"),
		...options
	}, {
		quoted
	})

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} path 
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImg(buff, options)
		} else {
			buffer = await imageToWebp(buff)
		}

		await sock.sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} path 
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	sock.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], "base64") : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVid(buff, options)
		} else {
			buffer = await videoToWebp(buff)
		}

		await sock.sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}

	/**
	 * 
	 * @param {*} message 
	 * @param {*} filename 
	 * @param {*} attachExtension 
	 * @returns 
	 */
	sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
		let quoted = message.msg ? message.msg : message
		let mime = (message.msg || message).mimetype || ""
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0]
		const stream = await downloadContentFromMessage(quoted, messageType)
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		let type = await FileType.fromBuffer(buffer)
		trueFileName = attachExtension ? (filename + "." + type.ext) : filename
		// save to file
		await fs.writeFileSync(trueFileName, buffer)
		return trueFileName
	}

	sock.downloadMediaMessage = async (message) => {
		let mime = (message.msg || message).mimetype || ""
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, "") : mime.split("/")[0]
		const stream = await downloadContentFromMessage(message, messageType)
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}

		return buffer
	}



	sock.sendButtons = async (jid, options = {
		"body": "",
		"footer": "",
		"title": "",
		"buttons": [],
		"sections": []
	}, quoted = {}) => {
		const buttons = []
		if (options?.buttons && options?.buttons.length)
			for (const x of options?.buttons) {
				if (x?.displayText && x?.url) {
					buttons.push({
						"name": "cta_url",
						"buttonParamsJson": `{ "display_text": "${x?.displayText}", "url": "${x?.url}" }`
					})
				} else if (x?.displayText && x?.id) {
					buttons.push({
						"name": "quick_reply",
						"buttonParamsJson": `{ "display_text": "${x?.displayText}", "id": "${x?.id}" }`
					})
				}
			}
		if (options?.sections && options?.sections.length) {
			let rows = ""
			if (rows == "") rows += "["
			for (const x of options?.sections) {
				if (!rows.includes("[{") && x?.header && x?.title && x?.description && x?.id) {
					rows += `{ "header": "${x?.header}", "title": "${x?.title}", "description": "${x?.description}", "id": "${x?.id}" }`
				} else if (!rows.includes("[{") && !x?.header && x?.title && x?.description && x?.id) {
					rows += `{ "title": "${x?.title}", "description": "${x?.description}", "id": "${x?.id}" }`
				} else if (!rows.includes("[{") && x?.header && x?.title && !x?.description && x?.id) {
					rows += `{ "header": "${x?.header}", "title": "${x?.title}", "id": "${x?.id}" }`
				} else if (!rows.includes("[{") && !x?.header && x?.title && !x?.description && x?.id) {
					rows += `{ "title": "${x?.title}", "id": "${x?.id}" }`
				} else if (rows.includes("{") && x?.header && x?.title && x?.description && x?.id) {
					rows += `,{ "header": "${x?.header}", "title": "${x?.title}", "description": "${x?.description}", "id": "${x?.id}" }`
				} else if (rows.includes("{") && !x?.header && x?.title && x?.description && x?.id) {
					rows += `,{ "title": "${x?.title}", "description": "${x?.description}", "id": "${x?.id}" }`
				} else if (rows.includes("{") && x?.header && x?.title && !x?.description && x?.id) {
					rows += `,{ "header": "${x?.header}", "title": "${x?.title}", "id": "${x?.id}" }`
				} else if (rows.includes("{") && !x?.header && x?.title && !x?.description && x?.id) {
					rows += `,{ "title": "${x?.title}", "id": "${x?.id}" }`
				}
			}
			rows += "]"
			buttons.push({
				"name": "single_select",
				"buttonParamsJson": `{
                    "title": "${options?.title}",
                    "sections": [{
                        "rows": ${rows}
                    }]
                }`
			})
		}
		const msg = generateWAMessageFromContent(jid, {
			"viewOnceMessage": {
				"message": {
					"interactiveMessage": proto.Message.InteractiveMessage.create({
						"body": proto.Message.InteractiveMessage.Body.create({
							"text": options?.body
						}),
						"footer": proto.Message.InteractiveMessage.Footer.create({
							"text": options?.footer
						}),
						"nativeFlowMessage": proto.Message.InteractiveMessage.NativeFlowMessage.create({
							"buttons": buttons
						})
					})
				}
			}
		}, quoted)
		return await sock.relayMessage(msg.key.remoteJid, msg.message, {
			messageId: msg.key.id
		})
	}

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} path 
	 * @param {*} filename
	 * @param {*} caption
	 * @param {*} quoted 
	 * @param {*} options 
	 * @returns 
	 */
	sock.sendMedia = async (jid, path, fileName = "", caption = "", quoted = "", options = {}) => {
		let types = await sock.getFile(path, true)
		let {
			mime,
			ext,
			res,
			data,
			filename
		} = types
		if (res && res.status !== 200 || file.length <= 65536) {
			try {
				throw {
					json: JSON.parse(file.toString())
				}
			} catch (e) {
				if (e.json) throw e.json
			}
		}
		let type = "",
			mimetype = mime,
			pathFile = filename
		if (options.asDocument) type = "document"
		if (options.asSticker || /webp/.test(mime)) {
			let {
				writeExif
			} = require("./system/lib/exif")
			let media = {
				mimetype: mime,
				data
			}
			pathFile = await writeExif(media, {
				packname: options.packname ? options.packname : global.packname,
				author: options.author ? options.author : global.author,
				categories: options.categories ? options.categories : []
			})
			await fs.promises.unlink(filename)
			type = "sticker"
			mimetype = "image/webp"
		} else if (/image/.test(mime)) type = "image"
		else if (/video/.test(mime)) type = "video"
		else if (/audio/.test(mime)) type = "audio"
		else type = "document"
		await sock.sendMessage(jid, {
			[type]: {
				url: pathFile
			},
			caption,
			mimetype,
			fileName,
			...options
		}, {
			quoted,
			...options
		})
		return fs.promises.unlink(pathFile)
	}

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} message 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	sock.copyNForward = async (jid, message, forceForward = false, options = {}) => {
		let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

		let mtype = Object.keys(message.message)[0]
		let content = await generateForwardMessageContent(message, forceForward)
		let ctype = Object.keys(content)[0]
		let context = {}
		if (mtype != "conversation") context = message.message[mtype].contextInfo
		content[ctype].contextInfo = {
			...context,
			...content[ctype].contextInfo
		}
		const waMessage = await generateWAMessageFromContent(jid, content, options ? {
			...content[ctype],
			...options,
			...(options.contextInfo ? {
				contextInfo: {
					...content[ctype].contextInfo,
					...options.contextInfo
				}
			} : {})
		} : {})
		await sock.relayMessage(jid, waMessage.message, {
			messageId: waMessage.key.id
		})
		return waMessage
	}

	sock.cMod = (jid, copy, text = "", sender = sock.user.id, options = {}) => {
		//let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === "ephemeralMessage"
		if (isEphemeral) {
			mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
		}
		let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
		if (typeof content === "string") msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== "string") msg[mtype] = {
			...content,
			...options
		}
		if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes("@s.whatsapp.net")) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes("@broadcast")) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === sock.user.id

		return proto.WebMessageInfo.fromObject(copy)
	}

	sock.sendFile = async (jid, path, filename = "", caption = "", quoted, ptt = false, options = {}) => {
		let type = await sock.getFile(path, true);
		let {
			res,
			data: file,
			filename: pathFile
		} = type;

		if (res && res.status !== 200 || file.length <= 65536) {
			try {
				throw {
					json: JSON.parse(file.toString())
				};
			} catch (e) {
				if (e.json) throw e.json;
			}
		}

		let opt = {
			filename
		};

		if (quoted) opt.quoted = quoted;
		if (!type) options.asDocument = true;

		let mtype = "",
			mimetype = type.mime,
			convert;

		if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = "sticker";
		else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = "image";
		else if (/video/.test(type.mime)) mtype = "video";
		else if (/audio/.test(type.mime)) {
			convert = await (ptt ? toPTT : toAudio)(file, type.ext);
			file = convert.data;
			pathFile = convert.filename;
			mtype = "audio";
			mimetype = "audio/ogg; codecs=opus";
		} else mtype = "document";

		if (options.asDocument) mtype = "document";

		delete options.asSticker;
		delete options.asLocation;
		delete options.asVideo;
		delete options.asDocument;
		delete options.asImage;

		let message = {
			...options,
			caption,
			ptt,
			[mtype]: {
				url: pathFile
			},
			mimetype
		};
		let m;

		try {
			m = await sock.sendMessage(jid, message, {
				...opt,
				...options
			});
		} catch (e) {
			//console.error(e)
			m = null;
		} finally {
			if (!m) m = await sock.sendMessage(jid, {
				...message,
				[mtype]: file
			}, {
				...opt,
				...options
			});
			file = null;
			return m;
		}
	}


	/**
	 * 
	 * @param {*} path 
	 * @returns 
	 */
	sock.getFile = async (PATH, save) => {
		let res
		let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], "base64") : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === "string" ? PATH : Buffer.alloc(0)
		//if (!Buffer.isBuffer(data)) throw new TypeError("Result is not a buffer")
		let type = await FileType.fromBuffer(data) || {
			mime: "application/octet-stream",
			ext: ".bin"
		}
		filename = path.join(__filename, "../src/" + new Date * 1 + "." + type.ext)
		if (data && save) fs.promises.writeFile(filename, data)
		return {
			res,
			filename,
			size: await getSizeMedia(data),
			...type,
			data
		}

	}



	async function getMessage(key) {
		if (store) {
			const msg = await store.loadMessage(key.remoteJid, key.id)
			return msg?.message
		}
		return {
			conversation: "Hi, I`m RaditX7 :D"
		}
	}
	//respon polling
	sock.ev.on("messages.update", async chatUpdate => {
		for (const {
				key,
				update
			} of chatUpdate) {
			if (update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if (pollCreation) {
					const pollUpdate = await getAggregateVotesInPollMessage({
						message: pollCreation,
						pollUpdates: update.pollUpdates,
					})
					var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
					if (toCmd == undefined) return
					var prefCmd = prefix + toCmd
					sock.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
	})

	//Simpan Kredensial
	sock.ev.process(
		async (events) => {
			if (events["presence.update"]) {
				await sock.sendPresenceUpdate("available");
			}
			if (events["creds.update"]) {
				await saveCreds();
			}
		}
	)

	return sock
}
connectToWhatsApp()
let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), __filename)
	delete require.cache[file];
	require(file);
});
