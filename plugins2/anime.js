const axios = require('axios');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions')


cmd({
    pattern: "animegirl",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "👧",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👧 *Random Anime Girl Image* 👧\n>  ❯❯ THENU-ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➣' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});
//
cmd({
    pattern: "poke",
    category: "fun",
    use: '<quote|reply|tag>',
},
async(Void, citel) => {
    var bite = await fetchJson(`https://api.waifu.pics/sfw/poke`);
    const response = await axios.get(bite.url, {
        responseType: "arraybuffer",
    });
    const buffer = Buffer.from(response.data, "utf-8");
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
    let gif = await GIFBufferToVideoBuffer(buffer);
    if (users) {
        let cap = `@${citel.sender.split("@")[0]} poked to @${users.split("@")[0]} `;
        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
    } else {
        let cap = `@${citel.sender.split("@")[0]} poked to everyone. `;
        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
    }
}
)
//-----------------------------------------------------------------------
cmd({
    pattern: "hug",
    category: "fun",
    use: '<quote|reply|tag>',
},
async(Void, citel) => {
    var bite = await fetchJson(`https://api.waifu.pics/sfw/hug`);
    const response = await axios.get(bite.url, {
        responseType: "arraybuffer",
    });
    const buffer = Buffer.from(response.data, "utf-8");
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
    let gif = await GIFBufferToVideoBuffer(buffer);
    if (users) {
        let cap = `@${citel.sender.split("@")[0]} hug to @${users.split("@")[0]} `;
        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
    } else {
        let cap = `@${citel.sender.split("@")[0]} huged to everyone. `;
        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
    }
}
)
//-----------------------------------------------------------------------
cmd({
    pattern: "hold",
    category: "fun",
    use: '<quote|reply|tag>',
},
async(Void, citel) => {
    var bite = await fetchJson(`https://api.waifu.pics/sfw/handhold`);
    const response = await axios.get(bite.url, {
        responseType: "arraybuffer",
    });
    const buffer = Buffer.from(response.data, "utf-8");
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
    let gif = await GIFBufferToVideoBuffer(buffer);
    if (users) {
        let cap = `@${citel.sender.split("@")[0]} hold hand of @${users.split("@")[0]} `;
        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
    } else {
        let cap = `@${citel.sender.split("@")[0]} holed to everyone. `;
        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
    }
}
) 
//-----------------------------------------------------------------------
cmd({
    pattern: "hifi",
    category: "fun",
    use: '<quote|reply|tag>',
},
async(Void, citel) => {
    var bite = await fetchJson(`https://api.waifu.pics/sfw/highfive`);
    const response = await axios.get(bite.url, {
        responseType: "arraybuffer",
    });
    const buffer = Buffer.from(response.data, "utf-8");
    let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
    let gif = await GIFBufferToVideoBuffer(buffer);
    if (users) {
        let cap = `@${citel.sender.split("@")[0]} highfive with @${users.split("@")[0]} `;
        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [users, citel.sender], caption: cap }, { quoted: citel });
    } else {
        let cap = `@${citel.sender.split("@")[0]} highfived with everyone. `;
        Void.sendMessage(citel.chat, { video: gif, gifPlayback: true, mentions: [citel.sender], caption: cap }, { quoted: citel });
    }
}
)
//-----------------------------------------------------------------------
cmd({
pattern: "waifu",
desc: "To get Waifu Random Pics",
category: "fun",
filename: __filename
},

async(Void, citel, text) => {

 let name1 = text.split("|")[0] || ''
let name2 = text.split("|")[1] || `1`
let cap = text.split("|")[1] ? '': '---Waifu Pics Here---'

for (let i = 0; i < name2; i++)
{
let response;
if(name1 == 'nsfw'){ response = await fetch("https://api.waifu.pics/nsfw/waifu");    }
else  { response = await fetch("https://api.waifu.pics/sfw/waifu");  }

const nekodds = await response.json();
let buttonMessages = {
image: { url: nekodds.url, },
caption: cap,
headerType: 1,
};
await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}

})
//-----------------------------------------------------------------------
cmd({
pattern: "naruto",
desc: "To get Naruto Random Videos",
category: "fun",
filename: __filename
},
async(Void, citel,text) =>
{
let res=await axios.get("https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Naruto.json")
let url =  res.data.result[Math.floor(Math.random() * res.data.result.length)];
return await Void.sendMessage(citel.chat,{video :{url : url } , caption: Config.caption }, { quoted: citel })
})
//-----------------------------------------------------------------------
cmd({
pattern: "neko",
category: "fun",
desc: "Sends a Neko Image in chat",
filename: __filename
},
async(Void, citel, text) => {
let name1 = text.split("|")[0] || ''
let name2 = text.split("|")[1] || `1`
let cap = text.split("|")[1] ? '': "Here we go😊!!!!"

for (let i = 0; i < name2; i++)
{
let response;
if(name1 == 'nsfw'){ response = await fetch("https://waifu.pics/api/nsfw/neko");    }
else  { response = await fetch("https://waifu.pics/api/sfw/neko");  }

const nekodds = await response.json();
let buttonMessages = {
image: { url: nekodds.url, },
caption: cap,
headerType: 1,
};
await Void.sendMessage(citel.chat, buttonMessages, { quoted: citel })
}

})
//-----------------------------------------------------------------------
cmd({
pattern: "foxgirl",
category: "fun",
desc: "Sends image of Fox Girl in current chat.",
filename: __filename
},
async(Void, citel, text) => 
{
let  waifuddfg = await axios.get(`https://nekos.life/api/v2/img/fox_girl`);
await Void.sendMessage(citel.chat, {image: { url: waifuddfg.data.url } }, { quoted: citel })
})
//-----------------------------------------------------------------------
cmd({
pattern: "animenews",
category: "fun" ,
desc: "Sends Anime News in chat",
filename: __filename
},
async(Void, citel, text) => {
let qq = [
    "Anime News Today",
    "New Anime",
    "Uocoming Anime News",
    "New Anime Info",
    "Whats news in Anime",
    "Anime Series",
    "Manga News today",
    "Anime New News",
    "Anime News today",
];
let q1 = qq[Math.floor(Math.random() * qq.length)];
//&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com
let URL1 = `https://newsapi.org/v2/everything?q=${q1}&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8`;
const response = await axios.get(URL1);
let result = await response;
result = result.data.articles;
result.map(async(r, idx) => {
    Void.sendMessage(
        citel.chat, {
            image: { url: r.urlToImage },
            caption: `*Title🔰:* ${r.title}\n\n*Content🧩:* ${r.content}\n*Author📌:* ${r.author}\n*Source♦️:* ${r.source.name}\n*Created On☘️:* ${r.publishedAt}\n*More on✨:* ${r.url}\n\n*Powered by ${tlang().title}*`,
        }, {
            quoted: citel,
        }

    );
});


}
)
//-----------------------------------------------------------------------
cmd({
pattern: "loli",
category: "fun",
filename: __filename,
desc: "Sends image of loli in current chat."
},
async(Void, citel, text) => {
waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
var wbutss = [{
buttonId: `${prefix}loli`,
buttonText: { displayText: `Next Loli✨` },
type: 1,
}, ];

await Void.sendMessage(citel.chat, {image: { url: waifud.data.url }}, {quoted: citel})
}
)