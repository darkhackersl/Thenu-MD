const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/vLr3s62/9230af94-e390-4873-9502-33167e8a4b79.jpg' },
    { key: 'ALIVE_MSG', value: '👨‍💻 Hello ${pushname}*\n⚡𝗛𝗘𝗟𝗟𝗢𝗪 ┇ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ⚡\n\n*💗 Nice to meat you*\n*► 𝚑𝚢ｉａｍ ＡＬＩＶＥ ｏｎｗ👾*\n\n*🔖We welcome the new arrivals of the digital world_►*\n\n*❯ Welcome THENU md whatsapp bot you can download video songs and various videos through this bot. THENU - md owner is THENULA PANAPITI.. It also gives you the ability to solve the new revolution in technology and technology problems and there is great potential here. This technology is also related to AI.*\n\n> *➣ ᴏᴡɴᴇʀ : THENU-ᴍᴅ*\n> *➣ ᴜᴘ ᴛɪᴍᴇ : 2 ʜᴏᴜʀꜱ 1 ᴍɪɴɪᴛꜱ*\n> *➣ ʀᴀᴍ ᴜꜱᴇɢᴇ : 167/1024ᴍʙ*\n> *➣ ᴠᴇʀꜱɪᴏɴ : 1.0.0 v*\n> 2024 new version\n\n*┇Always smile and life will be beautiful💗*' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
    { key: 'MODE', value: 'private' },
    { key: 'AUTO_VOICE', value: 'false' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'false' },
    { key: 'AUTO_AI', value: 'true' },



];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
