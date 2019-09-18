var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");

app.use(express.static("public"));




// key F2C9FD9CC580AD53F05CE07A97A895B1
// ex api call http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1?key=F2C9FD9CC580AD53F05CE07A97A895B1&account_id=76561198030931895



app.get("/", (req,res)=>{
    res.render("home");

});


app.get("/results", (req,res)=>{
    
    var query =  req.query.id;
    var url = `https://api.opendota.com/api/players/${query}/recentMatches`;

    
    
    request(url, (error, response, body)=>{
        if(!error && response.statusCode === 200){
            var parsed = JSON.parse(body);
            //TODO pass the JSON to custom api which will return object with all info needed for that page
            res.render("results", { id: parsed});
        }
        else{
            console.log(error);
            //TODO render different page
            
        }
    })
    //res.render("results", { id: req.query.id});
});

app.get("/match", (req,res) =>{
    var mid = (req.query.mid);

    var url = `https://api.opendota.com/api/matches/${mid}`;
    
    request(url, (error, response, body)=>{
        if(!error && response.statusCode === 200){
            var parsed = JSON.parse(body);
            
            res.render("match", { pid: parsed.players});
        }
        else{
            console.log(error);
            console.log(response.statusCode);
        }
    })

});

app.listen(3000, () =>{
    console.log("Server has started!");
});
