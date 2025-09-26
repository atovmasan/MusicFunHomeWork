import songs from "./modules/songs.js"
import { showPlaylist } from "./modules/display.js"
import * as player from "./modules/player.js"
import { showSong } from "./modules/display.js"
import { changeTheme } from "./styles/theme.js"

console.log("🎶 Добро пожаловать в музыкальный плеер!")
 
// Показываем весь плейлист
showPlaylist(songs)
 
// Включаем первую песню
showSong(songs[0])
player.showSong(songs[0])
player.play()
 
// Пауза
player.pause()
 
// Включаем вторую песню
showSong(songs[1])
player.showSong(songs[1])
player.play()
 
// Останавливаем
player.stop()
changeTheme()