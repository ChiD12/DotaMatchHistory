# dota2-web-api-wrapper

## Installation
  `npm install dota2-web-api`

## Usage

  **Get your Steam API Key [here](https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey)**
	
  ```javascript
  var Dota2API = require('dota2-web-api');
  
  var dota2API = new Dota2API('yourkey', 'en_us');
  ```
  
## Functions
  
  **Get Heroes** 
  
  ```javascript
  parameters - callback function that handles the result
  
  dota2API.getHeroes(function(res) {
    console.log(res);
  );
  ```
  
  **Get Hero Image**
  
  ```javascript
  parameters - npc_name = returned name of each object from getHeroes
  parameters - size     = size of the image ('sb.png', 'lg.png', 'full.png', 'vert.jpg')
  
  dota2API.getHeroImage('npm_dota_hero_abyssal_underlord', 'sb.png');
  ```
  
  **Get Game Items**
  
  ```javascript
  parameters - callback function that handles the result
  
  dota2API.getGameItems(function(res) {
    console.log(res);
  );
  ```
  
  **Get Item Image**
  
  ```javascript
  parameters - item_name = returned name of each object from getGameItems
  
  dota2API.getItemImage('item_glimmer_cape');
  ```
  
  **Get Match History**
  
  see more from this [link](https://wiki.teamfortress.com/wiki/WebAPI/GetMatchHistory)
  
  ```javascript
  parameters - options = options for the parameters
    availabe options
      hero_id: hero_id,
      game_mode: game_mode,
      skill: skill,
      account_id: account_id,
      matches_requested: matches_requested
      tournament_games_only: tournament_games_only
  parameters - callback function that handles the response
  
  var options = {
    hero_id: '',
    game_mode: '',
    skill: '',
    account_id: '176190315',
    matches_requested: '1',
    tournament_games_only: ''
  };
  
  dota2API.getMatchHistory(options, function(res) {
    console.log(res);
  });
  ```
  
  **Get Match Details**
  
  ```javascript
  parameters - match_id = DotA2 Match ID
  parameters - callback function that handles the response
  
  dota2API.getMatchDetails('3193699040', function(res) {
	  console.log(res);
  });
  ```
  
  **Get League Listing**
  
  ```javascript
  parameters - callback function that handles the response
  
  dota2API.getLeagueListing(function(res) {
    console.log(res);
  });
  ```
  
  **Get League Live Games**
  
  ```javascript
  parameters - callback function that handles the response
  
  dota2API.getLiveLeagueGames(function(res) {
    console.log(res);
  }
  ```
  
  
