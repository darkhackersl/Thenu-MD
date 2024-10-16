const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EBAxHC7D#03YiwkXqf3-C_CQoHFpetJiwrlZO6iAIVPPSfdfIZdI",
MONGODB: process.env.MONGODB || "mongodb://mongo:asvGZtHAxUOpWinxxNpCuOyLzcsqVMMi@junction.proxy.rlwy.net:31271",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "Thenu-MD",
BOT_NUMBER: process.env.BOT_NUMBER || "94767096711",
AUTO_AI: process.env.AUTO_AI || "false",
LANG: process.env.LANG || "SI"

};
