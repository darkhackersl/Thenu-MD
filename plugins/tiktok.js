const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

//====your bot name=======
let cap = '🧚ᴍᴀᴅᴇ ʙʏ ᴍɪᴢᴜᴋɪ ᴍᴅ🧚'

// <========FETCH API URL========>
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();

cmd({
  pattern: "tiktok",
  react: "🗿",
  alias: ["tt"],
  desc: "download tt videos",
  category: "download",
  filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
      if (!q && !q.startsWith("https://")) return reply("give me tiktok url")
      //fetch data from api  
      let data = await fetchJson(`${baseUrl}/api/tiktokdl?url=${q}`)
      reply("📥*Downloading...*")
      //send video (wm,nwm)
      await conn.sendMessage(from, { video: { url: data.data.no_wm }, mimetype: "video/mp4", caption: `- NO-WATERMARK\n\n ${cap}` }, { quoted: mek })
      await conn.sendMessage(from, { video: { url: data.data.wm }, mimetype: "video/mp4", caption: `- WITH-WATERMARK \n\n ${cap}` }, { quoted: mek })  
      //send audio    
      await conn.sendMessage(from, { audio: { url: data.data.audio }, mimetype: "audio/mpeg" }, { quoted: mek })  
  } catch (e) {
      console.log(e)
      reply(`${e}`)
  }
})
