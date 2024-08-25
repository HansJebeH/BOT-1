// Silahkan Ubah Sesuka Hati Jangan Hapus Tanda ' ' agar script tidak eror.

const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6281911317205']
global.name = 'Lins Official'
global.JEDA = 5000  // Ganti Sesuai Keinginan (5000ms = 5 detik) jadi jedanya 5 detik
global.namapush = ' PUSH By Lins ' // nama auto sv

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
/*
    Yt: @LinsOfficiall
    Ig: @rijalsavior
    wa: +6281911317205
© Lins Official
*/
// Jangan Jual Sc Ini Ya Guys