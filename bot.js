const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "!";

Client.on('ready' , ()=>{
    console.log("Bot is online")
    Client.user.setActivity("Shaked Bot| !help")
    
 
      
    
})




Client.on ("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "Member");
    member.addRole (role);
})

Client.on ("guildMemberRemove", member => {
    
})

Client.on('message' , (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "hello")){
        message.channel.send("Hello, " + message.author + " how are you doing?");
       

    }
    if(message.content.startsWith(prefix + "invite")){
        message.channel.send(message.author + "זה הקישור לדיסקורד")
        
     
    
        
    }
    
    if(message.content.startsWith(prefix + "test")){
        let author = message.member;
        let role = message.guild.roles.find(`name`,"Mod");
        if(author.roles.has(role.id)){
            message.reply("יש לך גישות");
            return;
        }else{
            message.reply("אין לך גישות");
            return;
        }

    }

    if(message.content.startsWith(prefix + "delete")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
        let role = message.guild.roles.find('name', "Mod")
        if(author.roles.has(role.id)){
            if(!args[0]){
                message.delete();
                message.author.send("No argument given");
                return;
        }
        if(args[0] > 100){
            message.delete();
            message.author.send("maximum is 100 message at onec")
            return;
        }
        message.delete();
        message.channel.bulkDelete(args[0]);
        message.author.send({embed:{
            color: 0x28d62b,
            description: "done you deleted " + args[0] +  "messages"

        }})
        return;
        }
    }


    if(message.content.startsWith(prefix + "עוגייה")){
        message.channel.send(message.author + "your :cookie:")
        message.channel.send("you love cookie")
    }


 

 


    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Check PM");
        message.author.send("```זה הפקודות עזרה שלי```")
        message.author.send("```!invite```")
        message.author.send("```!hello```")
        message.author.send("```!test```")
        message.author.send("```!עוגייה```")


    
            
        
            
            
                         


        
    }

    if(message.content.startsWith(prefix + "8ball")){
        ballMessage = message.content.slice (9); // ! 8 b a l l [your message]
        number = 2;
        var random = Math.floor (Math.random() * (number -1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send('The 8ball says that"' + ballMessage + '"yes'); break;
            case 2: message.channel.send('The 8ball says that"' + ballMessage + '"no'); break; 
        }

        

    }



    


    
    




            
        

    


    

        
        
    




})


Client.login(process.env.BOT_TOKEN);
