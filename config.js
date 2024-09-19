const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fS40DIqK#_Lj_YJ68odlNNjwKAD_X7amjr8rS_fLmnxHDnSAddDg",
MONGODB: process.env.MONGODB || "enter mongodb url",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "Thenu-MD",
BOT_NUMBER: process.env.BOT_NUMBER || "923048179418",

};
