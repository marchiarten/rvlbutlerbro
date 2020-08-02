const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = "-butler";

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Commands Menu')
	
	.setAuthor('RVL Butler Bro', 'https://img.favpng.com/5/9/24/person-icon-png-vector-png-favpng-zshKXEcrBDx2SZrqXmaL94b3s.jpg')
	.setDescription('All drinks courtesy of RVL house.')
	.setThumbnail('https://img.favpng.com/5/9/24/person-icon-png-vector-png-favpng-zshKXEcrBDx2SZrqXmaL94b3s.jpg')
    .setImage("https://i.ibb.co/XXLSPvC/butlermenu.png")

	.setTimestamp()
	.setFooter('By Ten', 'https://img.favpng.com/5/9/24/person-icon-png-vector-png-favpng-zshKXEcrBDx2SZrqXmaL94b3s.jpg');

const responseObject = {
    "Butler": "Would you like a cup of coffee or tea?",
    "Coffee please": "Right away. https://acegif.com/wp-content/gifs/coffee-34.gif",
    "Tea please": "Of course. https://thumbs.gfycat.com/FarPerkyDrafthorse-small.gif",
    "Thank you, Butler": "My pleasure. Have a great day.",
    "Beer please": "Please enjoy. https://thumbs.gfycat.com/LikableMarriedArizonaalligatorlizard-small.gif",
    "Cheers!": "Cheers! https://media1.tenor.com/images/bc545a1e5a13d4c04f4fe73fd2ccb3ae/tenor.gif?itemid=5579802",
    "Hot chocolate please": "Do be careful, it's hot. https://i.pinimg.com/originals/f2/ca/a8/f2caa8a899298d7d318eaeff94d6881f.gif",
    "Thanks Butler": "Most welcome!",
    "Wine please": "The finest. https://thumbs.gfycat.com/EntireShockingAustraliansilkyterrier-size_restricted.gif",
    "Whiskey please": "On the house. https://images.summitmedia-digital.com/sap/images/whisky.gif",
    "Something good please!": "I hope this is to your taste. https://media1.tenor.com/images/4a6e5632592a753d5ddd4ecef30357e6/tenor.gif?itemid=3558432",
    "Coffee with rum please!": "Absolutely. https://media1.tenor.com/images/e4d44e29e3fe89c745bea83f7dd78f3e/tenor.gif?itemid=11243204",
    "Ice-cream with rum please!": "Definitely not for children. https://i.pinimg.com/originals/7b/29/ab/7b29ab46321969bfd0490b7c86798820.jpg",
    "Butler, I'm going offline. -Ten": "Then I shall take my leave as well and come back tomorrow. Please take care, everyone.",
    "Tequila please!": "With lime. https://d19umc0waopkcu.cloudfront.net/media/catalog/product/cache/1/small_image/570x/9df78eab33525d08d6e5fb8d27136e95/8/2/828-00-505_cantinero-tequila-tasting-set-with-serving-tray-shot-glasses-9-pieces.jpg",
    "Margarita?": "Fine taste! https://www.kegworks.com/wp/wp-content/uploads/2019/04/32672840837_b631f1b98f_k-copy-400x600.jpg",
    "Milkshake!": "...a song by Red Velvet. Nice choice! https://i.gifer.com/8CgA.gif",
    "Blue Lemonade!": "Pop pop pop! ;) https://jamiegeller.com/.image/t_share/MTY1NTI1MDQxMTY0NTI2NjE5/blue-lemonadejpg.jpg",
    "Irene Soju Special please": "all hail Queen Irene. https://i.pinimg.com/originals/04/d1/4b/04d14b92f6140fccc500f60e8db5698e.gif",
    "Hello Butler": "Greetings!",
    "Hi Butler": "Good day!"
  };
 
client.on("message", (message) => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    if(message.author.bot) return;

    if(responseObject[message.content]) {
      message.channel.send(responseObject[message.content]);
    }
    else if(message.content === "Butler, options please"){
        message.channel.send( new Discord.MessageEmbed(exampleEmbed));
    }


});


client.login("config.token");