var express = require('express');
var app = express();
var request = require('request');

app.set("view engine", "ejs");

// key F2C9FD9CC580AD53F05CE07A97A895B1
// ex api call http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1?key=F2C9FD9CC580AD53F05CE07A97A895B1&account_id=76561198030931895



app.get("/", (req,res)=>{
    res.render("home");



});

app.get("/results", (req,res)=>{
    
    var query =  req.query.id;
    var url = `https://api.opendota.com/api/players/${query}/matches`;
    
    request(url, (error, response, body)=>{
        if(!error && response.statusCode === 200){
            var parsed = JSON.parse(body);
            
            res.render("results", { id: parsed});
        }
        else{
            console.log(error);
        }
    })
    
    //res.render("results", { id: req.query.id});
    

});

app.listen(3000, () =>{
    console.log("Server as started!");
});
//some changes
//some other changes