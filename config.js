const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "enter session id",
MONGODB: process.env.MONGODB || "mongodb://mongo:GJyeHvVRytNLroiWrQnmdBGBbZSRAqFD@autorack.proxy.rlwy.net:58087",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "Thenu-MD",
BOT_NUMBER: process.env.BOT_NUMBER || "94757096717",
AUTO_AI: process.env.AUTO_AI || "true",

};
