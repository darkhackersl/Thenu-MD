const hrs = new Date().getHours({ timeZone: 'Asia/Colombo' })
const {cmd , commands} = require('../command')
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const util = require('util');
const axios = require('axios');


//---------------------------------------------------------------------------
cmd({
            pattern: "live",
            desc: "Show Live Time Of Pakistan",
            category: "fun",
	          filename: __filename,
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
var date = new Date().toLocaleDateString(get_localized_date)
var wish = ''
if (hrs < 12) wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅'
if (hrs >= 12 && hrs <= 16) wish = 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞'
if (hrs >= 16 && hrs <= 20) wish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥'
if (hrs >= 20 && hrs <= 24) wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙'
var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
const suhail= [777,0,100,500,1000,999,2021]
const q = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
        "orderMessage": {
           "itemCount" : suhail[Math.floor(8*Math.random())],
           "status": 1,
           "surface" : 1,
           "message": `❏ ${Config.botname} ➬ Whatsapp Bot BY Suhail SER`,
           "orderTitle": "alive",
           "sellerJid": '923184474176@s.whatsapp.net' 
        }
      }
}

let timenow =`
╭────────────────╮
│    *${wish}* 
│     *ᴛɪᴍᴇ* ⌚ ${time} ${am_pm}
│     *Date* 🎲   ${date} 
│  
╰────────────────╯
`
return await Void.sendMessage(citel.chat, { text:timenow }, { quoted : q } )
  
  
})

//---------------------------------------------------------------------------
cmd({
        pattern: "paste",
        desc: "create paste of text.",
        category: "tools",
        filename: __filename,
    },
    async(Void, citel,text) => {
 let a = citel.quoted ? citel.quoted.text : citel.text;
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=STAR-MD+Bot&author_name=Excel &content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)
    }
);
