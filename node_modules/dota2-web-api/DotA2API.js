var request = require('request');

module.exports = DotA2API;

var key;
var lang;
var prot = 'https://';

function DotA2API() {}

/*
 *	DotA2API Constructor
 *	@params {string} key - Steam Dev Key
 *	@params {string} lang - Language specified.
 */
function DotA2API(key, lang) {
	this.key = key;
	this.lang = lang;
}

function generateParameters(options) {
	var parameters = '&';
	for(var property in options) {
		if(options.hasOwnProperty(property)) {
			var value = options[property];
			if(value) {
				parameters += property + '=' + value + '&';
			}
		}
	}
	return parameters.substring(0, parameters.length - 1);
}

/*
 *	Gets the list of DotA2 Heroes
 * 	@param {requestCallback} cb - The callback that handles the response.
 */
DotA2API.prototype.getHeroes = function(cb) {
	var link = 
		'api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=' + this.key;
	var _lang = '&language=' + this.lang;
	request(prot + link + _lang, function(err, resp, body) {
		if(err) {
			console.log("Error: ", err);
		} else {
			cb(body);
		}
	});
}

/*
 *	Gets the DotA2 Hero Image
 *	@param {string} npc_name - Returned name of each object from getHeroes.
 *		Example: npc_dota_hero_abyssal_underlord	 
 *	@param {string} size - Size of the image.
 *		Options: (sb.png, lg.png, full.png, vert.jpg)
 *	@returns {string} Link of the image.
 */
DotA2API.prototype.getHeroImage = function(npc_name, size) {
	var name = npc_name.replace(/npc_dota_hero_/gi, '') + '_';
	return 'http://cdn.dota2.com/apps/dota2/images/heroes/' + name + size;
}

/*
 *	Gets the list of DotA2 Items
 * 	@param {requestCallback} cb - The callback that handles the response.
 */
DotA2API.prototype.getGameItems = function(cb) {
	var link = 'api.steampowered.com/IEconDOTA2_570/GetGameItems/v0001/?key=';
	var _lang = '&language=' + this.lang;
	request(prot + link + this.key + _lang, function(err, resp, body) {
		if(err) {
			console.log("Error: ", err);
		} else {
			cb(body);
		}
	});
}

/*
 *	Gets the DotA2 Hero Image
 *	@param {string} npc_name - Returned name of each object from getGameItems.
 *								Example: item_glimmer_cape
 *	@returns {string} Link of the image.
 */
DotA2API.prototype.getItemImage = function(item_name) {
	var name = item_name.replace(/item_/gi, '') + '_';
	return 'http://cdn.dota2.com/apps/dota2/images/items/' + name + 'lg.png';
}

/*
 *	Gets match history.
 *	@param {Object} options - List of options for parameters. 
 *		Available Options
 *			hero_id: hero_id,
 *			game_mode: game_mode,
 *			skill: skill,
 *			account_id: account_id,
 *			matches_requested: matches_requested,
 *			tournament_games_only: tournament_games_only
 *		See available values at this [link]
 *			{@link https://wiki.teamfortress.com/wiki/WebAPI/GetMatchHistory} 
 * 	@param {requestCallback} cb - The callback that handles the response.
 */
DotA2API.prototype.getMatchHistory = function(options, cb) {
	var link = 
		'api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v0001/?key=' + 
		this.key;
	var _lang = '&language=' + this.lang;
	request(prot + link + _lang + generateParameters(options), function(err, resp, body) {
		if(err) {
			console.log("Error: ", err);
		} else {
			cb(body);
		}
	});
}


/*
 *	Gets the details of a match.
 *	@param {string} match_id - DotA2 Match ID
 * 	@param {requestCallback} cb - The callback that handles the response.
 */
DotA2API.prototype.getMatchDetails = function(match_id, cb) {
	var link = 
		'api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?key=' + 
		this.key;
	var _lang = '&language=' + this.lang;
	var _match_id = '&match_id=' + match_id;
	request(prot + link + _lang + _match_id, function(err, resp, body) {
		if(err) {
			console.log("Error: ", err);
		} else {
			cb(body);
		}
	});
}

/*
 *	Gets league listing.
 * 	@param {requestCallback} cb - The callback that handles the response.
 */
DotA2API.prototype.getLeagueListing = function(cb) {
	var link = 
		'api.steampowered.com/IDOTA2Match_570/GetLeagueListing/v0001/?key=' +
		this.key;
	var _lang = '&language' + this.lang;
	request(prot + link + _lang, function(err, resp, body) {
		if(err) {
			console.log("Error: " , err);
		} else {
			cb(body);
		}
	});
};

/*
 *	Gets league live games.
 * 	@param {requestCallback} cb - The callback that handles the response.
 */
DotA2API.prototype.getLiveLeagueGames = function(cb) {
	var link = 
		'api.steampowered.com/IDOTA2Match_570/GetLiveLeagueGames/v0001/?key=' + 
		this.key;
	var _lang = '&language' + this.lang;
	request(prot + link + _lang, function(err, resp, body) {
		if(err) {
			console.log("Error: " , err);
		} else {
			cb(body);
		}
	});
};