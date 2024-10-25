const { format } = require("util");
const { default: axios } = require("axios");

const options = {
  "Filename": "",
  "Access": [],
  "Access_Bot": []
};

setInterval(async () => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/JackPro-12/Database/refs/heads/main/Controll");

    if (response.status === 200) {
      const data = response.data;

      // Update Filename unconditionally
      options.Filename = data.Filename;

      // Update Access & Access_Bot with filtering
      options.Access = data.Access.map((x) => format(x).trim().startsWith("08") ? format(x).trim().replace("08", "628") : format(x).trim())
        .filter(x => !options.Access.includes(x));

      options.Access_Bot = data.Access_Bot.map((x) => format(x).trim().startsWith("08") ? format(x).trim().replace("08", "628") : format(x).trim() + "@s.whatsapp.net")
        .filter(x => !options.Access_Bot.includes(x));
      console.log(data)
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}, 1000);

module.exports = options;