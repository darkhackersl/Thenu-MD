const {cmd , commands} = require('../command')
const { sck,sck1,cmd, getBuffer, tlang, prefix } = require('../lib')
 const Config = require('../config')
 const eco = require('discord-mongoose-economy')
 const ty = eco.connect(mongodb);
 /*
  cmd({
         pattern: "economy",
         desc: "daily gold.",
         category: "economy",
     },
     */
     //---------------------------------------------------------------------------
 cmd({
         pattern: "daily",
         desc: "daily gold.",
         category: "economy",
         filename: __filename,
         react: "💷"
     },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({ id: citel.chat,})) || (await new sck({ id: citel.chat,  }) .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦Economy* is not active in current group.");
         if (!citel.isGroup) return citel.reply(tlang().group);
	const daily  = await eco.daily(citel.sender, "secktor", 2000); //give 500 for daily, can be changed
	 if (daily.cd) { //cdL is already formatted cooldown Left
        return await  citel.reply(`🧧 You already claimed daily for today, come back in ${daily.cdL}🫡`)
	 } else {
	 citel.reply(`you claimed daily ${daily.amount} 🪙 for today🎉.`);   
	 }
 }
 )

 cmd({
         pattern: "resetwallet",
         desc: "reset wallet of quoted user.",
         category: "economy",
         filename: __filename,
         react: "💷"
     },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦Economy* is not active in current group.");
	 if(!isCreator) return citel.reply(tlang().owner)
        let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
	if(!users) return citel.reply('Please give me user.')
        const balance  = await eco.balance(users, "secktor")
        await eco.deduct(users, "secktor", balance.wallet);
        return await citel.reply(`⛩️ User: @${users.split('@')[0]} \n *🧧 @${users.split('@')[0]} lost all 🪙 in wallet.*\n_Now live with that poverty.🫡_`,{mentions:[users]})
 }
 )
    //---------------------------------------------------------------------------
 cmd({
    pattern: "capacity",
    desc: "update capacity.",
    category: "economy",
    filename: __filename,
        return citel.reply(`${mess3}\n\n*Small Win -->* _🪙${deduff}_`)
     }
     else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
        const give5 = eco.give(user, secktor, deduff*20);
        return citel.reply(`${mess4}\n\n_🎊 JackPot --> _🪙${deduff*20}_`)
     }
     else {
        return citel.reply(`Do you understand what you are doing?`)
     }

} else{
    return citel.reply('You don\'t have enough 💰amount in your👛 wallet.\n- Please don\'t provide 🤑amount.')
}
            }
            if ((f1 !== f2) && f2 !== f3){
               const deduct1 = await eco.deduct(user, secktor, 50);
                      citel.reply(`${mess1}\n\n*Big Lose -->* _🪙50_`)
            }
            else if ((f1 == f2) && f2 == f3){
               const give1 = await eco.give(user, secktor, 100);
                     citel.reply(`${mess2}\n*_Little Jackpot -->* _🪙100_`)
            }
            else if ((f1 == f2) && f2 !== f3){
               const give2 = await eco.give(user, secktor, 20);
                     citel.reply(`${mess3}\n*Small Win -->* _🪙20_`)
            }
            else if ((f1 !== f2) && f1 == f3){
               const deduct2 = await eco.deduct(user, secktor, 20);
                     citel.reply(`${mess5}\n\n*Small Lose -->* _🪙20_`)
            }
            else if ((f1 !== f2) && f2 == f3){
               const give4 = eco.give(user, secktor, 20);
                     citel.reply(`${mess3}\n\n*Small Win -->* _🪙20_`)
            }
            else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
               const give5 = eco.give(user, secktor, 1000);
                    citel.reply(`${mess4}\n\n_🎊 JackPot --> _🪙1000_`)
            }
            else {
                    citel.reply(`Do you understand what you are doing?`)
            }
         }
         else{
                citel.reply(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
         }
    }
)

cmd({
    pattern: "slot",
    desc: "slot game.",
    category: "economy",
    filename: __filename,
    react: "💷"
},
async(Void, citel, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return citel.reply("*🚦Economy* is not active in current group.");
    const kg = 100
            const balance1  = await eco.balance(citel.sender, "secktor")
            if (kg > balance1.wallet) return citel.reply(`You are going to be spinning on your wallet, you need at least 🪙100`);
    var r_ban = new Array ();
    r_ban[0] =    "1 : 2 : 3"
    r_ban[1] = "1 : 2 : 3"
    r_ban[2] = "1 : 2 : 3"
    r_ban[3] = "4 : 3 : 3"
    r_ban[4] = "1 : 1 : 1"
    r_ban[5] = "5 : 2 : 5"
    r_ban[6] = "3 : 5 : 3"
    r_ban[7] = "1 : 3 : 6"
    r_ban[8] = "6 : 2 : 7"
    r_ban[9] = "1 : 6 : 3"
    r_ban[10]= "6 : 3 : 2"
    r_ban[11]= "5 : 5 : 6"
    r_ban[12]= "1 : 5 : 3"
    r_ban[13]= "4 : 1 : 7"
    r_ban[14]= "4 : 3 : 2"
    r_ban[15]= "4 : 3 : 2"
    r_ban[16]= "7 : 4 : 6"
    r_ban[17]= "6 : 5 : 1"
    r_ban[18]= "5 : 7 : 2"


    var p = Math.floor(19*Math.random())
    var q = Math.floor(19*Math.random())
    var r = Math.floor(19*Math.random())
    var i = (r_ban[p]);
    var j = (r_ban[q]);
    var k = (r_ban[r]);
    console.log(i+'\n'+j+'\n'+k)
    let t = i.split(':');
    let tt = j.split(':');
    let ttt = k.split(':');
    var lol;
    if(t[2]===tt[1] && tt[1]===ttt[0]) lol = true
    if(t[0]===tt[1] && tt[1]===ttt[2]) lol = true
    if(t[0]===tt[0] && tt[0]===ttt[0]) lol = true
    if(t[1]===tt[1] && tt[1]===ttt[1]) lol = true
    if(t[2]===tt[2] && tt[2] ===ttt[2]) lol = true
    if(t[0]===tt[1] && tt[1]===ttt[2]) lol = true
    if(t[2]===tt[1] && tt[1]===ttt[0]) lol = true
    if(t[0]===t[1] && t[0]===t[2]) lol = true
    if(tt[0]===tt[1] && tt[0]===tt[2]) lol = true
    if(ttt[0]===ttt[1] && ttt[0]===ttt[2]) lol = true
    if(t[0]===ttt[1] && t[0]===ttt[2]) lol = true
    if(lol){
        const deduff = Math.floor(Math.random() * 5000)
        const give2 = await eco.give(citel.sender, "secktor", deduff*2);
        let st = `🎰 Slot Machine Result\n     ${i}\n\n     ${j}\n\n     ${k}\n\nWow Jackpot🎊.`
        let str = st.replace(/1/g, `🔴`).replace(/2/g, `🔵`).replace(/3/g, `🟣`).replace(/4/g, `🟢`).replace(/5/g, `🟡`).replace(/6/g, `⚪️`).replace(/7/g, `⚫️`).replace(/:/g, `  `)
    return await citel.reply(str+`You got ${deduff*10} in your wallet.`)
    } else {
    const deduff = Math.floor(Math.random() * 300)
    const deduct1 = await eco.deduct(citel.sender, "secktor", deduff);
    let st = `\n🎰 Slot Machine Result\n     ${i}\n\n      ${j}\n\n      ${k}\n\nNot Jacpot📉 but lost `
            let str = st.replace(/1/g, `🔴`).replace(/2/g, `🔵`).replace(/3/g, `🟣`).replace(/4/g, `🟢`).replace(/5/g, `🟡`).replace(/6/g, `⚪️`).replace(/7/g, `⚫️`).replace(/:/g, `    `)
return await citel.reply(str+` ${deduff}.`)
}
}
) 
