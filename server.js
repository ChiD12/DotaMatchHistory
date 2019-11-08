


var express = require('express');
var app = express();
var request = require('request');

var parsedHistory;




app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static('images/heroes'));
app.use(express.static('images/rank_icons'))
app.use(express.static('images/items'))




// key F2C9FD9CC580AD53F05CE07A97A895B1
// ex api call http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1?key=F2C9FD9CC580AD53F05CE07A97A895B1&account_id=76561198030931895
//http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/key=F2C9FD9CC580AD53F05CE07A97A895B1&account_id=76561198030931895



app.get("/", (req,res)=>{
    res.render("home");

});
 

app.get("/results", (req,res)=>{
    
    
    
    var query =  req.query.id;
    var url = `https://api.opendota.com/api/players/${query}/recentMatches`;

    var playerURL = `https://api.opendota.com/api/players/${query}`;

    //var playerURL = `https://api.opendota.com/api/players/${query}/recentMatches`;

    var parsedPlayerInfo;
    
    
    request(url, (error, response, body)=>{
        if(!error && response.statusCode === 200){
            parsedHistory = JSON.parse(body);
            //TODO pass the JSON to custom api which will return object with all info needed for that page
            
            getHero(parsedHistory);
            getTime(parsedHistory);
            var wl = getWin(parsedHistory);
            
            
            wl.winrate = (wl.wins / (wl.wins + wl.losses))*100;

            request(playerURL, (err, resp, body1)=>{
                
                if(!err && resp.statusCode === 200){
                    
                    parsedPlayerInfo = JSON.parse(body1);

                    console.log(parsedPlayerInfo.rank_tier);
                    
                    res.render("results", { id: parsedHistory, player: parsedPlayerInfo, wl: wl});
                    
                    
                }
                else{
                    console.log(err);
                    //TODO render different page
                }
            });
        }
        else{
            console.log(error);
            //TODO render different page
            
        }
    });

    
    
    
    


    //res.render("results", { id: req.query.id});
});

app.get("/match", (req,res) =>{
    var mid = (req.query.mid);

    var url = `https://api.opendota.com/api/matches/${mid}`;
    
    request(url, (error, response, body)=>{
        if(!error && response.statusCode === 200){
            var parsed = JSON.parse(body);
            
            getHero(parsed.players);
            getItem(parsed.players);

            res.render("match", { players: parsed.players, matchStats: parsed});
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







function getHero(parsed){
    for(var i=0; i< parsed.length; i++){
         var pid = parsed[i].hero_id;
         parsed[i].hero_id = getHeroObj(pid);
    }
    //console.log(parsed);
}


function getHeroObj(hid){
    var heroes = [
        {
            "name": "antimage",
            "id": 1,
            "localized_name": "Anti-Mage"
        },
        {
            "name": "axe",
            "id": 2,
            "localized_name": "Axe"
        },
        {
            "name": "bane",
            "id": 3,
            "localized_name": "Bane"
        },
        {
            "name": "bloodseeker",
            "id": 4,
            "localized_name": "Bloodseeker"
        },
        {
            "name": "crystal_maiden",
            "id": 5,
            "localized_name": "Crystal Maiden"
        },
        {
            "name": "drow_ranger",
            "id": 6,
            "localized_name": "Drow Ranger"
        },
        {
            "name": "earthshaker",
            "id": 7,
            "localized_name": "Earthshaker"
        },
        {
            "name": "juggernaut",
            "id": 8,
            "localized_name": "Juggernaut"
        },
        {
            "name": "mirana",
            "id": 9,
            "localized_name": "Mirana"
        },
        {
            "name": "nevermore",
            "id": 11,
            "localized_name": "Shadow Fiend"
        },
        {
            "name": "morphling",
            "id": 10,
            "localized_name": "Morphling"
        },
        {
            "name": "phantom_lancer",
            "id": 12,
            "localized_name": "Phantom Lancer"
        },
        {
            "name": "puck",
            "id": 13,
            "localized_name": "Puck"
        },
        {
            "name": "pudge",
            "id": 14,
            "localized_name": "Pudge"
        },
        {
            "name": "razor",
            "id": 15,
            "localized_name": "Razor"
        },
        {
            "name": "sand_king",
            "id": 16,
            "localized_name": "Sand King"
        },
        {
            "name": "storm_spirit",
            "id": 17,
            "localized_name": "Storm Spirit"
        },
        {
            "name": "sven",
            "id": 18,
            "localized_name": "Sven"
        },
        {
            "name": "tiny",
            "id": 19,
            "localized_name": "Tiny"
        },
        {
            "name": "vengefulspirit",
            "id": 20,
            "localized_name": "Vengeful Spirit"
        },
        {
            "name": "windrunner",
            "id": 21,
            "localized_name": "Windranger"
        },
        {
            "name": "zuus",
            "id": 22,
            "localized_name": "Zeus"
        },
        {
            "name": "kunkka",
            "id": 23,
            "localized_name": "Kunkka"
        },
        {
            "name": "lina",
            "id": 25,
            "localized_name": "Lina"
        },
        {
            "name": "lich",
            "id": 31,
            "localized_name": "Lich"
        },
        {
            "name": "lion",
            "id": 26,
            "localized_name": "Lion"
        },
        {
            "name": "shadow_shaman",
            "id": 27,
            "localized_name": "Shadow Shaman"
        },
        {
            "name": "slardar",
            "id": 28,
            "localized_name": "Slardar"
        },
        {
            "name": "tidehunter",
            "id": 29,
            "localized_name": "Tidehunter"
        },
        {
            "name": "witch_doctor",
            "id": 30,
            "localized_name": "Witch Doctor"
        },
        {
            "name": "riki",
            "id": 32,
            "localized_name": "Riki"
        },
        {
            "name": "enigma",
            "id": 33,
            "localized_name": "Enigma"
        },
        {
            "name": "tinker",
            "id": 34,
            "localized_name": "Tinker"
        },
        {
            "name": "sniper",
            "id": 35,
            "localized_name": "Sniper"
        },
        {
            "name": "necrolyte",
            "id": 36,
            "localized_name": "Necrophos"
        },
        {
            "name": "warlock",
            "id": 37,
            "localized_name": "Warlock"
        },
        {
            "name": "beastmaster",
            "id": 38,
            "localized_name": "Beastmaster"
        },
        {
            "name": "queenofpain",
            "id": 39,
            "localized_name": "Queen of Pain"
        },
        {
            "name": "venomancer",
            "id": 40,
            "localized_name": "Venomancer"
        },
        {
            "name": "faceless_void",
            "id": 41,
            "localized_name": "Faceless Void"
        },
        {
            "name": "skeleton_king",
            "id": 42,
            "localized_name": "Skeleton King"
        },
        {
            "name": "death_prophet",
            "id": 43,
            "localized_name": "Death Prophet"
        },
        {
            "name": "phantom_assassin",
            "id": 44,
            "localized_name": "Phantom Assassin"
        },
        {
            "name": "pugna",
            "id": 45,
            "localized_name": "Pugna"
        },
        {
            "name": "templar_assassin",
            "id": 46,
            "localized_name": "Templar Assassin"
        },
        {
            "name": "viper",
            "id": 47,
            "localized_name": "Viper"
        },
        {
            "name": "luna",
            "id": 48,
            "localized_name": "Luna"
        },
        {
            "name": "dragon_knight",
            "id": 49,
            "localized_name": "Dragon Knight"
        },
        {
            "name": "dazzle",
            "id": 50,
            "localized_name": "Dazzle"
        },
        {
            "name": "rattletrap",
            "id": 51,
            "localized_name": "Clockwerk"
        },
        {
            "name": "leshrac",
            "id": 52,
            "localized_name": "Leshrac"
        },
        {
            "name": "furion",
            "id": 53,
            "localized_name": "Nature's Prophet"
        },
        {
            "name": "life_stealer",
            "id": 54,
            "localized_name": "Lifestealer"
        },
        {
            "name": "dark_seer",
            "id": 55,
            "localized_name": "Dark Seer"
        },
        {
            "name": "clinkz",
            "id": 56,
            "localized_name": "Clinkz"
        },
        {
            "name": "omniknight",
            "id": 57,
            "localized_name": "Omniknight"
        },
        {
            "name": "enchantress",
            "id": 58,
            "localized_name": "Enchantress"
        },
        {
            "name": "huskar",
            "id": 59,
            "localized_name": "Huskar"
        },
        {
            "name": "night_stalker",
            "id": 60,
            "localized_name": "Night Stalker"
        },
        {
            "name": "broodmother",
            "id": 61,
            "localized_name": "Broodmother"
        },
        {
            "name": "bounty_hunter",
            "id": 62,
            "localized_name": "Bounty Hunter"
        },
        {
            "name": "weaver",
            "id": 63,
            "localized_name": "Weaver"
        },
        {
            "name": "jakiro",
            "id": 64,
            "localized_name": "Jakiro"
        },
        {
            "name": "batrider",
            "id": 65,
            "localized_name": "Batrider"
        },
        {
            "name": "chen",
            "id": 66,
            "localized_name": "Chen"
        },
        {
            "name": "spectre",
            "id": 67,
            "localized_name": "Spectre"
        },
        {
            "name": "doom_bringer",
            "id": 69,
            "localized_name": "Doom"
        },
        {
            "name": "ancient_apparition",
            "id": 68,
            "localized_name": "Ancient Apparition"
        },
        {
            "name": "ursa",
            "id": 70,
            "localized_name": "Ursa"
        },
        {
            "name": "spirit_breaker",
            "id": 71,
            "localized_name": "Spirit Breaker"
        },
        {
            "name": "gyrocopter",
            "id": 72,
            "localized_name": "Gyrocopter"
        },
        {
            "name": "alchemist",
            "id": 73,
            "localized_name": "Alchemist"
        },
        {
            "name": "invoker",
            "id": 74,
            "localized_name": "Invoker"
        },
        {
            "name": "silencer",
            "id": 75,
            "localized_name": "Silencer"
        },
        {
            "name": "obsidian_destroyer",
            "id": 76,
            "localized_name": "Outworld Devourer"
        },
        {
            "name": "lycan",
            "id": 77,
            "localized_name": "Lycanthrope"
        },
        {
            "name": "brewmaster",
            "id": 78,
            "localized_name": "Brewmaster"
        },
        {
            "name": "shadow_demon",
            "id": 79,
            "localized_name": "Shadow Demon"
        },
        {
            "name": "lone_druid",
            "id": 80,
            "localized_name": "Lone Druid"
        },
        {
            "name": "chaos_knight",
            "id": 81,
            "localized_name": "Chaos Knight"
        },
        {
            "name": "meepo",
            "id": 82,
            "localized_name": "Meepo"
        },
        {
            "name": "treant",
            "id": 83,
            "localized_name": "Treant Protector"
        },
        {
            "name": "ogre_magi",
            "id": 84,
            "localized_name": "Ogre Magi"
        },
        {
            "name": "undying",
            "id": 85,
            "localized_name": "Undying"
        },
        {
            "name": "rubick",
            "id": 86,
            "localized_name": "Rubick"
        },
        {
            "name": "disruptor",
            "id": 87,
            "localized_name": "Disruptor"
        },
        {
            "name": "nyx_assassin",
            "id": 88,
            "localized_name": "Nyx Assassin"
        },
        {
            "name": "naga_siren",
            "id": 89,
            "localized_name": "Naga Siren"
        },
        {
            "name": "keeper_of_the_light",
            "id": 90,
            "localized_name": "Keeper of the Light"
        },
        {
            "name": "wisp",
            "id": 91,
            "localized_name": "Wisp"
        },
        {
            "name": "visage",
            "id": 92,
            "localized_name": "Visage"
        },
        {
            "name": "slark",
            "id": 93,
            "localized_name": "Slark"
        },
        {
            "name": "medusa",
            "id": 94,
            "localized_name": "Medusa"
        },
        {
            "name": "troll_warlord",
            "id": 95,
            "localized_name": "Troll Warlord"
        },
        {
            "name": "centaur",
            "id": 96,
            "localized_name": "Centaur Warrunner"
        },
        {
            "name": "magnataur",
            "id": 97,
            "localized_name": "Magnus"
        },
        {
            "name": "shredder",
            "id": 98,
            "localized_name": "Timbersaw"
        },
        {
            "name": "bristleback",
            "id": 99,
            "localized_name": "Bristleback"
        },
        {
            "name": "tusk",
            "id": 100,
            "localized_name": "Tusk"
        },
        {
            "name": "skywrath_mage",
            "id": 101,
            "localized_name": "Skywrath Mage"
        },
        {
            "name": "abaddon",
            "id": 102,
            "localized_name": "Abaddon"
        },
        {
            "name": "elder_titan",
            "id": 103,
            "localized_name": "Elder Titan"
        },
        {
            "name": "legion_commander",
            "id": 104,
            "localized_name": "Legion Commander"
        },
        {
            "name": "ember_spirit",
            "id": 106,
            "localized_name": "Ember Spirit"
        },
        {
            "name": "earth_spirit",
            "id": 107,
            "localized_name": "Earth Spirit"
        },
        {
            "name": "abyssal_underlord",
            "id": 108,
            "localized_name": "Abyssal Underlord"
        },
        {
            "name": "terrorblade",
            "id": 109,
            "localized_name": "Terrorblade"
        },
        {
            "name": "phoenix",
            "id": 110,
            "localized_name": "Phoenix"
        },
        {
            "name": "techies",
            "id": 105,
            "localized_name": "Techies"
        },
        {
            "name": "oracle",
            "id": 111,
            "localized_name": "Oracle"
        },
        {
            "name": "winter_wyvern",
            "id": 112,
            "localized_name": "Winter Wyvern"
        },
        {
            "name": "arc_warden",
            "id": 113,
            "localized_name": "Arc Warden"
        },
        {
            "name": "abyssal_underlord",
            "id": 114,
            "localized_name": "Underlord"
        },
        {
            "name": "monkey_king",
            "id": 115,
            "localized_name": "Monkey King"
        },
        {
            "name": "dark_willow",
            "id": 116,
            "localized_name": "Dark Willow"
        },
        {
            "name": "pangolier",
            "id": 120,
            "localized_name": "Pangolier"
        },
        {
            "name": "grimstroke",
            "id": 118,
            "localized_name": "Grimstroke"
        },
        {
            "name": "mars",
            "id": 119,
            "localized_name": "Mars"
        }
    ];

    var selectedHero;
    for(var i=0; i< heroes.length; i++){
        if (hid === heroes[i].id){
            return heroes[i];
        }
    }
    return "default"
}

function getItem(parsed){
    for(var i=0; i< parsed.length; i++){
         parsed[i].item_0 = getItemObj(parsed[i].item_0);
         parsed[i].item_1 = getItemObj(parsed[i].item_1);
         parsed[i].item_2 = getItemObj(parsed[i].item_2);
         parsed[i].item_3 = getItemObj(parsed[i].item_3);
         parsed[i].item_4 = getItemObj(parsed[i].item_4);
         parsed[i].item_5 = getItemObj(parsed[i].item_5);
    }
    //console.log(parsed);
}

function getItemObj(iid){
    
        var items = [
          {
            "id": 0,
            "name": "Default_item"
          },
          {
            "id": 1,
            "name": "Blink_Dagger"
          },
          {
            "id": 2,
            "name": "blades_of_attack"
          },
          {
            "id": 3,
            "name": "broadsword"
          },
          {
            "id": 4,
            "name": "chainmail"
          },
          {
            "id": 5,
            "name": "claymore"
          },
          {
            "id": 6,
            "name": "helm_of_iron_will"
          },
          {
            "id": 7,
            "name": "javelin"
          },
          {
            "id": 8,
            "name": "mithril_hammer"
          },
          {
            "id": 9,
            "name": "platemail"
          },
          {
            "id": 10,
            "name": "quarterstaff"
          },
          {
            "id": 11,
            "name": "quelling_blade"
          },
          {
            "id": 12,
            "name": "ring_of_protection"
          },
          {
            "id": 182,
            "name": "stout_shield"
          },
          {
            "id": 13,
            "name": "gauntlets"
          },
          {
            "id": 14,
            "name": "slippers"
          },
          {
            "id": 15,
            "name": "mantle"
          },
          {
            "id": 16,
            "name": "branches"
          },
          {
            "id": 17,
            "name": "belt_of_strength"
          },
          {
            "id": 18,
            "name": "boots_of_elves"
          },
          {
            "id": 19,
            "name": "robe"
          },
          {
            "id": 20,
            "name": "circlet"
          },
          {
            "id": 21,
            "name": "ogre_axe"
          },
          {
            "id": 22,
            "name": "blade_of_alacrity"
          },
          {
            "id": 23,
            "name": "staff_of_wizardry"
          },
          {
            "id": 24,
            "name": "ultimate_orb"
          },
          {
            "id": 25,
            "name": "gloves"
          },
          {
            "id": 26,
            "name": "lifesteal"
          },
          {
            "id": 27,
            "name": "ring_of_regen"
          },
          {
            "id": 28,
            "name": "sobi_mask"
          },
          {
            "id": 29,
            "name": "Boots_of_Speed"
          },
          {
            "id": 30,
            "name": "Gem_of_True_Sight"
          },
          {
            "id": 31,
            "name": "cloak"
          },
          {
            "id": 32,
            "name": "talisman_of_evasion"
          },
          {
            "id": 33,
            "name": "cheese"
          },
          {
            "id": 34,
            "name": "magic_stick"
          },
          {
            "id": 35,
            "name": "recipe_magic_wand"
          },
          {
            "id": 36,
            "name": "magic_wand"
          },
          {
            "id": 37,
            "name": "ghost"
          },
          {
            "id": 38,
            "name": "clarity"
          },
          {
            "id": 39,
            "name": "flask"
          },
          {
            "id": 40,
            "name": "Dust_of_Appearance"
          },
          {
            "id": 41,
            "name": "bottle"
          },
          {
            "id": 42,
            "name": "ward_observer"
          },
          {
            "id": 43,
            "name": "Sentry_Ward"
          },
          {
            "id": 44,
            "name": "tango"
          },
          {
            "id": 45,
            "name": "courier"
          },
          {
            "id": 46,
            "name": "tpscroll"
          },
          {
            "id": 47,
            "name": "recipe_travel_boots"
          },
          {
            "id": 48,
            "name": "Boots_of_Travel_1"
          },
          {
            "id": 49,
            "name": "recipe_phase_boots"
          },
          {
            "id": 50,
            "name": "phase_boots"
          },
          {
            "id": 51,
            "name": "demon_edge"
          },
          {
            "id": 52,
            "name": "Eaglesong"
          },
          {
            "id": 53,
            "name": "reaver"
          },
          {
            "id": 54,
            "name": "relic"
          },
          {
            "id": 55,
            "name": "hyperstone"
          },
          {
            "id": 56,
            "name": "ring_of_health"
          },
          {
            "id": 57,
            "name": "void_stone"
          },
          {
            "id": 58,
            "name": "mystic_staff"
          },
          {
            "id": 59,
            "name": "energy_booster"
          },
          {
            "id": 60,
            "name": "point_booster"
          },
          {
            "id": 61,
            "name": "vitality_booster"
          },
          {
            "id": 62,
            "name": "recipe_power_treads"
          },
          {
            "id": 63,
            "name": "power_treads"
          },
          {
            "id": 64,
            "name": "recipe_hand_of_midas"
          },
          {
            "id": 65,
            "name": "hand_of_midas"
          },
          {
            "id": 66,
            "name": "recipe_oblivion_staff"
          },
          {
            "id": 67,
            "name": "oblivion_staff"
          },
          {
            "id": 68,
            "name": "recipe_pers"
          },
          {
            "id": 69,
            "name": "pers"
          },
          {
            "id": 70,
            "name": "recipe_poor_mans_shield"
          },
          {
            "id": 71,
            "name": "poor_mans_shield"
          },
          {
            "id": 72,
            "name": "recipe_bracer"
          },
          {
            "id": 73,
            "name": "bracer"
          },
          {
            "id": 74,
            "name": "recipe_wraith_band"
          },
          {
            "id": 75,
            "name": "wraith_band"
          },
          {
            "id": 76,
            "name": "recipe_null_talisman"
          },
          {
            "id": 77,
            "name": "null_talisman"
          },
          {
            "id": 78,
            "name": "recipe_mekansm"
          },
          {
            "id": 79,
            "name": "mekansm"
          },
          {
            "id": 80,
            "name": "recipe_vladmir"
          },
          {
            "id": 81,
            "name": "vladmir"
          },
          {
            "id": 84,
            "name": "flying_courier"
          },
          {
            "id": 85,
            "name": "recipe_buckler"
          },
          {
            "id": 86,
            "name": "buckler"
          },
          {
            "id": 87,
            "name": "recipe_ring_of_basilius"
          },
          {
            "id": 88,
            "name": "Ring_of_Basilius_(Active)"
          },
          {
            "id": 89,
            "name": "recipe_pipe"
          },
          {
            "id": 90,
            "name": "Pipe_of_Insight"
          },
          {
            "id": 91,
            "name": "recipe_urn_of_shadows"
          },
          {
            "id": 92,
            "name": "urn_of_shadows"
          },
          {
            "id": 93,
            "name": "recipe_headdress"
          },
          {
            "id": 94,
            "name": "headdress"
          },
          {
            "id": 95,
            "name": "recipe_sheepstick"
          },
          {
            "id": 96,
            "name": "sheepstick"
          },
          {
            "id": 97,
            "name": "recipe_orchid"
          },
          {
            "id": 98,
            "name": "orchid"
          },
          {
            "id": 99,
            "name": "recipe_cyclone"
          },
          {
            "id": 100,
            "name": "Eul's_Scepter_of_Divinity"
          },
          {
            "id": 101,
            "name": "recipe_force_staff"
          },
          {
            "id": 102,
            "name": "force_staff"
          },
          {
            "id": 103,
            "name": "recipe_dagon"
          },
          {
            "id": 197,
            "name": "recipe_dagon_2"
          },
          {
            "id": 198,
            "name": "recipe_dagon_3"
          },
          {
            "id": 199,
            "name": "recipe_dagon_4"
          },
          {
            "id": 200,
            "name": "recipe_dagon_5"
          },
          {
            "id": 104,
            "name": "dagon"
          },
          {
            "id": 201,
            "name": "dagon_2"
          },
          {
            "id": 202,
            "name": "dagon_3"
          },
          {
            "id": 203,
            "name": "dagon_4"
          },
          {
            "id": 204,
            "name": "dagon_5"
          },
          {
            "id": 105,
            "name": "recipe_necronomicon"
          },
          {
            "id": 191,
            "name": "recipe_necronomicon_2"
          },
          {
            "id": 192,
            "name": "recipe_necronomicon_3"
          },
          {
            "id": 106,
            "name": "necronomicon"
          },
          {
            "id": 193,
            "name": "necronomicon_2"
          },
          {
            "id": 194,
            "name": "necronomicon_3"
          },
          {
            "id": 107,
            "name": "recipe_ultimate_scepter"
          },
          {
            "id": 108,
            "name": "Aghanim's_Scepter"
          },
          {
            "id": 109,
            "name": "recipe_refresher"
          },
          {
            "id": 110,
            "name": "refresher"
          },
          {
            "id": 111,
            "name": "recipe_assault"
          },
          {
            "id": 112,
            "name": "assault"
          },
          {
            "id": 113,
            "name": "recipe_heart"
          },
          {
            "id": 114,
            "name": "heart"
          },
          {
            "id": 115,
            "name": "recipe_black_king_bar"
          },
          {
            "id": 116,
            "name": "black_king_bar"
          },
          {
            "id": 117,
            "name": "aegis"
          },
          {
            "id": 118,
            "name": "recipe_shivas_guard"
          },
          {
            "id": 119,
            "name": "Shiva's_Guard"
          },
          {
            "id": 120,
            "name": "recipe_bloodstone"
          },
          {
            "id": 121,
            "name": "bloodstone"
          },
          {
            "id": 122,
            "name": "recipe_sphere"
          },
          {
            "id": 123,
            "name": "sphere"
          },
          {
            "id": 124,
            "name": "recipe_vanguard"
          },
          {
            "id": 125,
            "name": "vanguard"
          },
          {
            "id": 126,
            "name": "recipe_blade_mail"
          },
          {
            "id": 127,
            "name": "blade_mail"
          },
          {
            "id": 128,
            "name": "recipe_soul_booster"
          },
          {
            "id": 129,
            "name": "soul_booster"
          },
          {
            "id": 130,
            "name": "recipe_hood_of_defiance"
          },
          {
            "id": 131,
            "name": "hood_of_defiance"
          },
          {
            "id": 132,
            "name": "recipe_rapier"
          },
          {
            "id": 133,
            "name": "rapier"
          },
          {
            "id": 134,
            "name": "recipe_monkey_king_bar"
          },
          {
            "id": 135,
            "name": "monkey_king_bar"
          },
          {
            "id": 136,
            "name": "recipe_radiance"
          },
          {
            "id": 137,
            "name": "radiance"
          },
          {
            "id": 138,
            "name": "recipe_butterfly"
          },
          {
            "id": 139,
            "name": "butterfly"
          },
          {
            "id": 140,
            "name": "recipe_greater_crit"
          },
          {
            "id": 141,
            "name": "greater_crit"
          },
          {
            "id": 142,
            "name": "recipe_basher"
          },
          {
            "id": 143,
            "name": "basher"
          },
          {
            "id": 144,
            "name": "recipe_bfury"
          },
          {
            "id": 145,
            "name": "bfury"
          },
          {
            "id": 146,
            "name": "recipe_manta"
          },
          {
            "id": 147,
            "name": "manta"
          },
          {
            "id": 148,
            "name": "recipe_lesser_crit"
          },
          {
            "id": 149,
            "name": "lesser_crit"
          },
          {
            "id": 150,
            "name": "recipe_armlet"
          },
          {
            "id": 151,
            "name": "armlet"
          },
          {
            "id": 183,
            "name": "recipe_invis_sword"
          },
          {
            "id": 152,
            "name": "invis_sword"
          },
          {
            "id": 153,
            "name": "recipe_sange_and_yasha"
          },
          {
            "id": 154,
            "name": "sange_and_yasha"
          },
          {
            "id": 155,
            "name": "recipe_satanic"
          },
          {
            "id": 156,
            "name": "satanic"
          },
          {
            "id": 157,
            "name": "recipe_mjollnir"
          },
          {
            "id": 158,
            "name": "mjollnir"
          },
          {
            "id": 159,
            "name": "recipe_skadi"
          },
          {
            "id": 160,
            "name": "skadi"
          },
          {
            "id": 161,
            "name": "recipe_sange"
          },
          {
            "id": 162,
            "name": "sange"
          },
          {
            "id": 163,
            "name": "recipe_helm_of_the_dominator"
          },
          {
            "id": 164,
            "name": "helm_of_the_dominator"
          },
          {
            "id": 165,
            "name": "recipe_maelstrom"
          },
          {
            "id": 166,
            "name": "maelstrom"
          },
          {
            "id": 167,
            "name": "recipe_desolator"
          },
          {
            "id": 168,
            "name": "desolator"
          },
          {
            "id": 169,
            "name": "recipe_yasha"
          },
          {
            "id": 170,
            "name": "yasha"
          },
          {
            "id": 171,
            "name": "recipe_mask_of_madness"
          },
          {
            "id": 172,
            "name": "mask_of_madness"
          },
          {
            "id": 173,
            "name": "recipe_diffusal_blade"
          },
          {
            "id": 195,
            "name": "recipe_diffusal_blade_2"
          },
          {
            "id": 174,
            "name": "diffusal_blade"
          },
          {
            "id": 196,
            "name": "diffusal_blade_2"
          },
          {
            "id": 175,
            "name": "recipe_ethereal_blade"
          },
          {
            "id": 176,
            "name": "ethereal_blade"
          },
          {
            "id": 177,
            "name": "recipe_soul_ring"
          },
          {
            "id": 178,
            "name": "soul_ring"
          },
          {
            "id": 179,
            "name": "recipe_arcane_boots"
          },
          {
            "id": 180,
            "name": "arcane_boots"
          },
          {
            "id": 181,
            "name": "orb_of_venom"
          },
          {
            "id": 184,
            "name": "recipe_ancient_janggo"
          },
          {
            "id": 185,
            "name": "ancient_janggo"
          },
          {
            "id": 186,
            "name": "recipe_medallion_of_courage"
          },
          {
            "id": 187,
            "name": "medallion_of_courage"
          },
          {
            "id": 188,
            "name": "smoke_of_deceit"
          },
          {
            "id": 189,
            "name": "recipe_veil_of_discord"
          },
          {
            "id": 190,
            "name": "veil_of_discord"
          },
          {
            "id": 205,
            "name": "recipe_rod_of_atos"
          },
          {
            "id": 206,
            "name": "rod_of_atos"
          },
          {
            "id": 207,
            "name": "recipe_abyssal_blade"
          },
          {
            "id": 208,
            "name": "abyssal_blade"
          },
          {
            "id": 209,
            "name": "recipe_heavens_halberd"
          },
          {
            "id": 210,
            "name": "Heaven's_Halberd"
          },
          {
            "id": 211,
            "name": "recipe_ring_of_aquila"
          },
          {
            "id": 212,
            "name": "ring_of_aquila"
          },
          {
            "id": 213,
            "name": "recipe_tranquil_boots"
          },
          {
            "id": 214,
            "name": "Tranquil_Boots_(Active)"
          },
          {
            "id": 215,
            "name": "shadow_amulet"
          },
          {
            "id": 216,
            "name": "enchanted_mango"
          },
          {
            "id": 218,
            "name": "Observer_and_Sentry_Wards_1"
          },
          {
            "id": 220,
            "name": "travel_boots_2"
          },
          {
            "id": 226,
            "name": "lotus_orb"
          },
          {
            "id": 229,
            "name": "solar_crest"
          },
          {
            "id": 231,
            "name": "guardian_greaves"
          },
          {
            "id": 235,
            "name": "octarine_core"
          },
          {
            "id": 247,
            "name": "moon_shard"
          },
          {
            "id": 249,
            "name": "silver_edge"
          },
          {
            "id": 254,
            "name": "glimmer_cape"
          },
          {
            "id": 267,
            "name": "Spirit_Vessel"
          },
          {
            "id": 1000,
            "name": "halloween_candy_corn"
          },
          {
            "id": 1001,
            "name": "mystery_hook"
          },
          {
            "id": 1002,
            "name": "mystery_arrow"
          },
          {
            "id": 1003,
            "name": "mystery_missile"
          },
          {
            "id": 1004,
            "name": "mystery_toss"
          },
          {
            "id": 1005,
            "name": "mystery_vacuum"
          },
          {
            "id": 1006,
            "name": "halloween_rapier"
          },
          {
            "id": 1007,
            "name": "greevil_whistle"
          },
          {
            "id": 1008,
            "name": "greevil_whistle_toggle"
          },
          {
            "id": 1009,
            "name": "present"
          },
          {
            "id": 1010,
            "name": "winter_stocking"
          },
          {
            "id": 1011,
            "name": "winter_skates"
          },
          {
            "id": 1012,
            "name": "winter_cake"
          },
          {
            "id": 1013,
            "name": "winter_cookie"
          },
          {
            "id": 1014,
            "name": "winter_coco"
          },
          {
            "id": 1015,
            "name": "winter_ham"
          },
          {
            "id": 1016,
            "name": "winter_kringle"
          },
          {
            "id": 1017,
            "name": "winter_mushroom"
          },
          {
            "id": 1018,
            "name": "winter_greevil_treat"
          },
          {
            "id": 1019,
            "name": "winter_greevil_garbage"
          },
          {
            "id": 1020,
            "name": "winter_greevil_chewy"
          },
          {
            "id": 241,
            "name": "tango_single"
          },
          {
            "id": 242,
            "name": "crimson_guard"
          },
          {
            "id": 238,
            "name": "recipe_iron_talon"
          },
          {
            "id": 239,
            "name": "iron_talon"
          },
          {
            "id": 233,
            "name": "recipe_aether_lens"
          },
          {
            "id": 232,
            "name": "aether_lens"
          },
          {
            "id": 234,
            "name": "recipe_dragon_lance"
          },
          {
            "id": 236,
            "name": "dragon_lance"
          },
          {
            "id": 237,
            "name": "faerie_fire"
          },
          {
            "id": 244,
            "name": "wind_lace"
          },
          {
            "id": 245,
            "name": "recipe_bloodthorn"
          },
          {
            "id": 250,
            "name": "bloodthorn"
          },
          {
            "id": 251,
            "name": "recipe_echo_sabre"
          },
          {
            "id": 252,
            "name": "echo_sabre"
          },
          {
            "id": 257,
            "name": "tome_of_knowledge"
          },
          {
            "id": 262,
            "name": "recipe_hurricane_pike"
          },
          {
            "id": 263,
            "name": "hurricane_pike"
          },
          {
            "id": 240,
            "name": "blight_stone"
          },
          {
            "id": 265,
            "name": "infused_raindrop"
          }
        ]
        for(var i=0; i< items.length; i++){
          if (iid === items[i].id){
              return items[i];
          }
      }
      return "default"
}

function getTime(parsed){
    var now = new Date();
    var gameTime;
    for(var i=0; i< parsed.length; i++){
        gameTime = parsed[i].start_time;
        var gameTimeInt = parseInt(gameTime,10); 
        //var elapsedTime = now.getTime() - gameTimeInt*1000;
    
        //now.setTime(elapsedTime);
        var gDate = new Date(gameTime*1000);
        var monthNum = gDate.getMonth() +1;
        
        
        var dateS =  gDate.getUTCFullYear() + "-" + monthNum + "-" + gDate.getUTCDate();
        //console.log(gDate.toString());

        parsed[i].start_time = dateS;


        // var x = new Date(gameTimeInt*1000); // or if you have milliseconds, use that instead
        // var y = new Date(now.getTime());
        // var z = new Date(elapsedTime);
        // z;
        // // returns "Wed Jan 21 1970 06:49:15 GMT-0600 (CST)"
        // // now compare this with epoch
        // var epoch = new Date('1970-01-01 00:00:00-0600');
        // var diff_years = z.getYear() - epoch.getYear();
        // var diff_month = z.getMonth() - epoch.getMonth();
        // var diff_days = z.getDate() - epoch.getDate();
        // var diff_hours = z.getHours() - epoch.getHours();
        // var diff_minutes = z.getMinutes() - epoch.getMinutes();

        //console.log("years: " + diff_years + " months: " + diff_month + " days: " + diff_days + " hours: " + diff_hours + " minutes: " + diff_minutes);
        }



    
}

function getWin(parsed){
    
    var wl = { wins: 0,
        losses:0,
        winrate: 0}

    for(var i = 0;i< parsed.length; i++){
        var pos = parsed[i].player_slot;
        var team;
        var playerWin;
        if(pos < 128){
            team = "radiant";
        }else{
            team = "dire";
        }
        var radiWin = parsed[i].radiant_win;
        //console.log(radiWin);
        if(radiWin && team === "radiant"){
            playerWin = "Won Match";
        }else if(radiWin && team === "dire"){
            playerWin = "Lost Match";
        }else if(!radiWin && team === "radiant"){
            playerWin = "Lost Match";
        }else if(!radiWin && team === "dire"){
            playerWin = "Won Match";
        }

        if (playerWin === "Won Match"){
            wl.wins++;
        }else if(playerWin === "Lost Match"){
            wl.losses++;
        }
        
        
        parsed[i].radiant_win = playerWin;
        //console.log("team: " + team + " radiwin: " + radiWin + " playerwin: " +playerWin);
    }
    return wl;
}


    

