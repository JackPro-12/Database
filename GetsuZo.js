const {
	format
} = require("util")
const {
	default: axios
} = require("axios")

const options = {
	"Creator": "",
	"FileName": "",
	"Access": [],
	"Access_Bot": []
}

setInterval(async () => {
	return await axios.get("https://raw.githubusercontent.com/Jackxbec/Database/main/DEV").then(({
		status,
		data
	}) => {
		if (status == 200) {
			if (options.Creator !== data.Creator.replace("https://wa.me/", "") || options.Creator == "") options.Creator = data.Creator.replace("https://wa.me/", "")
			for (const x of data.Access.map((x) => format(x).trim().startsWith("08") ? format(x).trim().replace("08", "628") : format(x).trim().replace(new RegExp("[()+-/ +/]", "gi"), ""))) {
				if (!options.Access.includes(x.trim())) options.Access.push(x.trim())
				if (!options.Access_Bot.includes(x.trim() + "@s.whatsapp.net")) options.Access_Bot.push(x.trim() + "@s.whatsapp.net")
			}
		}
	}).catch(() => {})
}, 1000)

setInterval(async () => {
	return await axios.get("https://raw.githubusercontent.com/JackPro-12/Database/refs/heads/main/Controll").then(({
		status,
		data
	}) => {
		if (status == 200) {
			if (options.FileName !== data.Filename || options.FileName == "") options.FileName = data.Filename
			for (const x of data.Access.map((x) => format(x).trim().startsWith("08") ? format(x).trim().replace("08", "628") : format(x).trim().replace(new RegExp("[()+-/ +/]", "gi"), ""))) {
				if (!options.Access.includes(x.trim())) options.Access.push(x.trim())
				if (!options.Access_Bot.includes(x.trim() + "@s.whatsapp.net")) options.Access_Bot.push(x.trim() + "@s.whatsapp.net")
			}
			for (const x of data.Access_Bot.map((x) => format(x).trim().startsWith("08") ? format(x).trim().replace("08", "628") : format(x).trim().replace(new RegExp("[()+-/ +/]", "gi"), ""))) {
				if (!options.Access_Bot.includes(x.trim() + "@s.whatsapp.net")) options.Access_Bot.push(x.trim() + "@s.whatsapp.net")
			}
		}
	}).catch(() => {})
}, 1000)

module.exports = options