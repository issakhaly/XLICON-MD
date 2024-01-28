const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "221777873158"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'AFRICA/SENEGAL'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '221777873158' 
global.devs = '221777873158';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFBBM0pDY0xKZmNHWHRjc1VZaHNrbXNqcFBNSFM1UmJvTzQrK00rOFoxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaE0xTmsyemFJcnMwNU9jTXlycEEzaitvamgrdy8wc0I4Vi93bmdkY0FrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSnhEajBVczd5R1NpUnFRUk9hTlZMVUVUMld3aTFOSy9Pa3NVRFFmTjNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUWlrWTdVRWs2YlZNajg3OTVJc0RWKzMxYWFvZXdlcXhTT3NhRW52OFNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOVlZsNGJPenU2TUJNR1RKTVBoR3FrWFJaMHIwZ2hHZGIzQWpQanBLMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg0ZXdoeDNXbHByNnpialg1cDBlVUhJYmdkM2M1b2FtZURGbmFtMlc4Q2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR05hbk9GTUMrT0pXRGpKTmhLQlRiL3krZXlsd3NqTXJCbzkyNnFiMXoxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFBTcTlObzBQQjAwZkIvbVlSWnVwdnlDanc0aTQwNHVLY0x2RjN4WUR3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM0TkpWNUxISitaeW5VZUM1ZmU1MDZGR01yS0h2cjJpSFV1WU9FQUQ1Wlc5MzRuSlRYZGhscVpOZEFNVFJHYUlISXdndHNzLytVaEpuaVdtT2h1TmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6Im1JR29SUzF3T000UEtnV0JlaEthemZwVDdkNEhlT3kyRlBKUThLQi84STQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhZczRXLU9DU2JtMnVpeUpDRENxX2ciLCJwaG9uZUlkIjoiMTNkYTY3ODQtZTc0YS00Zjg5LTlkZjgtYWM3ZjIyMjRmZTYyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk3b1NScTlESDdTYmNIbis0UVlOUlZPRVZZQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwcEhpbjU2UytUcGxjODdXMXZYd0VGUDBiTEU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlhHSDU3MkUiLCJtZSI6eyJpZCI6IjIyMTc3Nzg3MzE1ODo1M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZ6b8J2eovCdmL/wnZ6b8J2elyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnZxa0lzQ0VJRFgyYTBHR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSWFWcDFqTlRiNjdyQ0hvR3RVNGhZeEpIQ1BSdjNvbG9JTVZZYVVDaWoxUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS1hXelVKNW50MzVsSCs1VlBJZGtRZlphZnZ5bVc5R25zYWRhN0lwQys3TkJLbmlxQVZud2NqSXIvcU8rak9ycHFGNTQ3dVRuNXcxSXZmTVBmT0ZwQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjFTUXhUaVZDTnhGT0JTUU1lSk9oN1pjSVpJaFJydmNVVXZpczVHcmVsZVF5K0IvdXdzYjRqeENIR1A0R0p1TGZRNVU4c3p3dzlyWm84ODdNQzd2b2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzc3ODczMTU4OjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNHbGFkWXpVMit1NndoNkJyVk9JV01TUndqMGI5NkphQ0RGV0dsQW9vOVUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDY0NTM4OTF9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'MEDMO,
  packname:  process.env.PACK_NAME || 'AKATSUKI,
   
  botname:   process.env.BOT_NAME === undefined ? "AKATSUKI" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MEDMO : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
