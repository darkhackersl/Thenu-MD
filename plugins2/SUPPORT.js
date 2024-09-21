const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "👨‍🚀",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*⚒️ THENU - MD Support Channels⚒️*

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029Vak0Ebt1iUxTjVI85J2A

> ❯❯ ◦•●◉✿ 𝗧𝗵𝗲𝗻𝘂 𝗠𝗗 ✿◉●•◦ ➣`



}catch(e){

console.log(e)

reply(`${e}`)

}

})