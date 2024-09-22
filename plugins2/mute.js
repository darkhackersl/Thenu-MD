const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "mute",	
    alias: ["lock"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   
    
    if (!isGroup) return reply('This command can only be used in a group❗.')
        if (!isBotAdmins) return reply('PLEASE GIVE ADMIN TO *THENU - MD* ❗.')
        if (!isAdmins) return reply('YOU ARE NOT THE OWNER.. ❌.')
 

     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '🔒 GROUP IS CLOSED MY BOT OWNER' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*PLEASE GIVE ADMIN TO BOT.. ❗❗*')    
} 
})
