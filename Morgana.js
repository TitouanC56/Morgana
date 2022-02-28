const Discord = require('discord.js');
const client = new Discord.Client({
  intents: ["DIRECT_MESSAGES", "GUILDS", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING"],
  presence: {
    status: 'online',
    activity: {
      name: 'Persona 5 Strikers',
      type: 'PLAYING',
    }
  }
})
const token = "OTQ2NzU5NDQ2Mzc2MzUzODAz.YhjYcQ.5LFb-LvpaP_JcenrpeO_bDua3VU"

client.once('ready', () => {
  console.log("Félicitations, votre bot Discord a été correctement initialisé !");
});

client.on('messageCreate', message => {
  if (message.content === "$dm") {
    message.author.send("ça slide dans les dm ici ?");
  }
});

client.on("messageCreate", message => {
  if (message.content === "$morgana") {
    message.channel.send("Looking good Joker !\nhttps://c.tenor.com/HlgoDvceDTsAAAAC/morgana-persona5.gif")
  }
})

client.on("messageCreate", message => {
  if (message.mentions.has(client.user.id)&&message.author.id!=='946759446376353803') {
    message.channel.send("Tu veux quoi toi mon reuf?")
  }
})

function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

//const channele = client.channels.fetch("946902271571152986");
var bole = new Boolean;
bole=false

async function afficherDate() {
  while(true) 
  {
    await pause(1000);
    var cejour = new Date();
    //console.log("heure : "+cejour.getHours()+"\nminutes : "+cejour.getMinutes());


    if ((cejour.getHours()>=0) && (4>=cejour.getHours()) && bole == false){
      client.on("messageCreate", message => {
      if (message.author.id!=='946759446376353803')
          message.channel.send('GO TO SLEEP '+message.author.mentions+' !\nhttps://c.tenor.com/mNWqkyKcg60AAAAd/go-to-bed-calluna.gif')
          bole = true
      })
    } 
    if (cejour.getHours()==5 && cejour.getMinutes()==0 && cejour.getSeconds==0){
      bole = false
    }
}
}

afficherDate();



client.login(token);