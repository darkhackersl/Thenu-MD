const config = require('../config')
const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "lyrics",
    desc: "download songs.",
    category: "download",
    filename: __filename
},
      async (conn, mek, m, { from, reply }) => {
  try {
      // Fetch lyrics
      const lyricsResponse = await axios.get(
        `https://lyrics-api.replit.app/aryan?songName=${encodeURIComponent(songName)}`
      );
      const { lyrics, title, artist, image } = lyricsResponse.data;

      // Fetch song
      const searchResults = await yts(songName);
      if (!searchResults.videos.length) {
        api.sendMessage("❌ 𝗦𝗢𝗡𝗚 𝗡𝗢𝗧 𝗙𝗢𝗨𝗡𝗗\n\n❁ Sorry, song not found!", event.threadID, event.messageID);
        return;
      }

      const video = searchResults.videos[0];
      const videoUrl = video.url;
      const stream = ytdl(videoUrl, { filter: "audioonly" });
      const fileName = `music.mp3`;
      const filePath = path.join(__dirname, "tmp", fileName);

      stream.pipe(fs.createWriteStream(filePath));

      stream.on("response", () => {
        console.info("[DOWNLOADER]", "Starting download now!");
      });

      stream.on("info", (info) => {
        console.info("[DOWNLOADER]", `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
      });

      stream.on("end", async () => {
        const audioStream = fs.createReadStream(filePath);
        let message = `📌 𝗛𝗘𝗥𝗘 𝗜𝗦 𝗟𝗬𝗥𝗜𝗖𝗦\n\n🎧 𝗧𝗜𝗧𝗟𝗘\n➪ ${title}\n👑 𝗔𝗥𝗧𝗜𝗦𝗧 \n➪ ${artist} \n\n🎶 𝗟𝗬𝗥𝗜𝗖𝗦\n➪ ${lyrics}`;
        let attachment = await global.utils.getStreamFromURL(image);

        api.sendMessage({ body: message, attachment }, event.threadID, (err, info) => {
          let id = info.messageID;
          api.sendMessage({ attachment: audioStream }, event.threadID, () => {
            api.setMessageReaction("✅", id, () => {}, true);
          });
        });
      });
    } catch (e) {
        console.error("Error fetching LYRICS:", e);
        reply("Could not fetch LYRICS. Please try again later.");
    }
});