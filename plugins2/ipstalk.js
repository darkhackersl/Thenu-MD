const config = require('../config')
const { cmd, commands } = require('../command')
const path = require('../Thenu_MD/autovoice.json')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


cmd({
    pattern: "ipstalk",
    alias: ["ipstalk","sip","searchip","ip-locator"],
    react: '🌐',
    category: "search",
    use: '.ipstalk 112.134.193.130',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Give Vaild IP ADRESS.*\n\nEX: .ipstalk 112.134.193.130 ")
if(!q.includes('.')) return reply(needus)
const IP = "IP :"
const ST = "STATUS :"
const CONTINENT = "CONTINENT :"
const COUNTRY = "COUNTRY :"
const COUNTRYCODE = "COUNTRYCODE :"
const REGIONNAME = "REGIONNAME :"
const CITY = "CITY :"
const ZIP = "ZIP :"
const CURRENCY = "CURRENCY :"
const ISP = "ISP :"
const MOBILE = "MOBILE :"
const PROXY = "PROXY :"
const r = await fetchJson('https://api.techniknews.net/ipgeo/' + q)
const wea = `[*THENU - MD - BOT*]

    *IP STALKER*
    
` +
'*🔴 ' + IP +'* ```' + q + '```\n' +
'*✅' + ST +'* ```' + r.status+ '```\n' +
    '*🌐' + CONTINENT +'* ```' + r.continent+ '```\n' +
    '*🗺' + COUNTRY +'* ```' + r.country+ '```\n' +
    '*🔢' + COUNTRYCODE +'* ```' + r.countryCode+ '```\n' +
    '*🌍' + REGIONNAME +'* ```' + r.regionName+ '```\n' +
    '*🚩' + CITY +'* ```' + r.city+ '```\n' +
    '*🏛' + ZIP +'* ```' + r.zip+ '```\n' +
    '*💸' + CURRENCY +'* ```' + r.currency+ '```\n' +
    '*📡' + ISP +'* ```' + r.isp+ '```\n' +
    '*🛡' + PROXY +'* ```' + r.proxy+ '```\n' +
    '*📱' + MOBILE +'* ```' + r.mobile+ '```\n\n'
    + "└───────────◉"
await conn.sendMessage(from , { text: wea}, { quoted: mek } )
}catch(e){
    console.log(e)
    reply(`${e}`)
  }
  })
