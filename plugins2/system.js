const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    alias: ["status","botInfo"],
    desc: "Check uptime , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `┌────────────────────
├ ⏰ Uptime:-  ${runtime(process.uptime())}
├ 📟 Ram usage:-  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ Platform:-  ${os.hostname()}
├ 👨‍💻 Owners:- Thenula Panapiti
├ 📢 Prefix:-  ${config.PREFIX}
├ 🚀 CPU Speed: ${cpuInfo.speed} GHz
├ ⚙️ CPU Brand:* ${cpuInfo.brand}
├ 🖥️ CPU Manufacturer: ${cpuInfo.manufacturer}
├ 📅 Date: ${date}
├ 🕰️ Time: ${time} 
├ 🌍 Server Time Zone: ${timezone}\n${sensitiveData.systemosrq}
├ 🧬 Version:- 1.0.0
└───────────────────── ` 
  return reply(`${status}`)
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
