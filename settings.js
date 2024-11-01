

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Dgxeon" //ur yt chanel name
global.socialm = "GitHub: joker165" //ur github or insta name
global.location = "nigeria, lagos, abuja " //ur location

//new
global.botname = '𝐌𝐀𝐗𝐈-𝐌𝐃🍀' //ur bot name
global.ownernumber = ['2349064620494'] //ur owner number, dont add more than one
global.ownername = 'ᴸᵒʳᵈⲘⲁⲭⲓⲙⲟⲛ' //ur owner name
global.websitex = "‎https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W"
global.wagc = "‎https://whatsapp.com/channel/0029VaefL9g0gcfLITSc841W"
global.themeemoji = '🍀'
global.wm = "𝕃𝕆ℝ𝔻𝕄𝔸𝕏𝕀𝕄𝕆ℕ©"
global.botscript = 'https://github.com/Joker165/pussybot-MD15' //script link
global.packname = "ᴸᵒʳᵈⲘⲁⲭⲓⲙⲟⲛ"
global.author = "𝕀𝕋𝕊 𝕃𝕆ℝ𝔻 𝕄𝔸𝕏𝕀𝕄𝕆ℕ 2349064620494🍀"
global.creator = "2349064620494@s.whatsapp.net"
global.xprefix = ','
global.premium = ["2349064620494"] // Premium User

//channel id
global.xchannel = {
	jid: '120363297279563825@newsletter'
	}

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
