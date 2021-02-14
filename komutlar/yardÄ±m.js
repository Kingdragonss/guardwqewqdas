const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`ukqzn YouTube Guard Bot`)
.setDescription(`


<a:hydratk:798145168758669332>  **=**  \`g!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
<a:hydratk:798145168758669332> **=**  \`g!küfür-engel\`:  **Küfür Engel Aç/Kapat**
<a:hydratk:798145168758669332> **=**  \`g!reklam-engel\` :  **Reklam Engel Aç/Kapat**
<a:hydratk:798145168758669332> **=**  \`g!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
<a:hydratk:798145168758669332> **=**  \`g!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
<a:hydratk:798145168758669332> **=**  \`g!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
<a:hydratk:798145168758669332> **=**  \`g!istatistik\`:  **Botun İstatistiklerini Atar**
<a:hydratk:798145168758669332> **=**  \`g!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
<a:hydratk:798145168758669332> **=**  \`g!ping\`:  **Pinginizi Ölçüp Atar**
<a:hydratk:798145168758669332> **=**  \`g!avatar\`:  **Avatarınızı Atar**

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};