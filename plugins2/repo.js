const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*📍REPO LINK ❤️‍🔥👇*

🧚‍♀️◦https://github.com/darkhackersl/Thenu-MD/tree/main



*©THENU-MDッ*

`
await conn.sendMessage(from,{image:{url: `https://camo.githubusercontent.com/f422fd88a31ee2c27508625c26438835aab6142b99049ad790489a2c84be074d/68747470733a2f2f692e6962622e636f2f6b71447471774a2f5448454e552d4d442d75752e706e67`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})