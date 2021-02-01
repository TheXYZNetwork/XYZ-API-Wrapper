function onOpen() {
    var spreadsheet = SpreadsheetApp.getActive();
    var menuItems = [
        {
            name: "Documentation", 
            functionName: "displayDocumentation"
        },
        {
            name: "Credits", 
            functionName: "displayCredits"
        }
    ];
    spreadsheet.addMenu("XYZ API Wrapper", menuItems);
};

function displayDocumentation() {
    var ui = SpreadsheetApp.getUi();
    ui.alert("Documentation", "Link", ui.ButtonSet.OK);
};

function displayCredits() {
    var ui = SpreadsheetApp.getUi();
    ui.alert("Credits", "Author: Tomsci\nAuthors Website: https://tomsci.team\nLicence: ISC (Internet Systems Consortium)", ui.ButtonSet.OK);
};

function toTimeFormat(totalSeconds) {
    hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
};

function getUserServerInformation(argument, authorization, data, parsestart, parseend, server) {
    if(typeof server === "undefined") {
        if(typeof parseend === "undefined") {
            server = parsestart;
            parseend = null;
            parsestart = 0;
        } else {
            server = parseend;
            parseend = parsestart;
            parsestart = 0;
        };
    };

    if(!argument.match(/^765611[0-9]{11}$/)) {
        var url = `https://api.thexyznetwork.xyz/xsuitelink/discord/${argument}`;
        var options = {
            "method": "get",
            "contentType": "application/json",
            "headers": {
                "apikey": authorization
            }
        };
        
        var xsuitelinkResult = UrlFetchApp.fetch(url, options);
        var jsonxsuitelinkResult = JSON.parse(xsuitelinkResult.getContentText());
            
        argument = jsonxsuitelinkResult.result.steam;
    };

    if(data) {
        if(data.toLowerCase() === "rpname") {
            var url = `https://api.thexyznetwork.xyz/${server}/users/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var userResult = UrlFetchApp.fetch(url, options);
            var jsonuserResult = JSON.parse(userResult.getContentText());
            
            return jsonuserResult.result.rpname;
        } else if(data.toLowerCase() === "wallet") {
            var url = `https://api.thexyznetwork.xyz/${server}/users/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var userResult = UrlFetchApp.fetch(url, options);
            var jsonuserResult = JSON.parse(userResult.getContentText());
            
            return jsonuserResult.result.wallet;
        } else if(data.toLowerCase() === "usergroup") {
            var url = `https://api.thexyznetwork.xyz/${server}/xadmin/usergroup/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var usergroupResult = UrlFetchApp.fetch(url, options);
            var jsonusergroupResult = JSON.parse(usergroupResult.getContentText());
            
            return jsonusergroupResult.result.usergroup;
        } else if(data.toLowerCase() === "playtime") {
            var url = `https://api.thexyznetwork.xyz/${server}/playtime/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var playtimeResult = UrlFetchApp.fetch(url, options);
            var jsonplaytimeResult = JSON.parse(playtimeResult.getContentText());
            
            return toTimeFormat(jsonplaytimeResult.result.total);
        } else if(data.toLowerCase() === "lastplayed") {
            var url = `https://api.thexyznetwork.xyz/${server}/playtime/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var playtimeResult = UrlFetchApp.fetch(url, options);
            var jsonplaytimeResult = JSON.parse(playtimeResult.getContentText());
            
            return new Date(jsonplaytimeResult.result.last*1000);
        } else if(data.toLowerCase() === "badges") {
            var url = `https://api.thexyznetwork.xyz/${server}/badges/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var badgesResult = UrlFetchApp.fetch(url, options);
            var jsonbadgesResult = JSON.parse(badgesResult.getContentText());
            var badges = [];
            jsonbadgesResult.result.badges.forEach(badge => {
              badges.push(badge.badge);
            });

            if(badges.slice(parseInt(parsestart), parseInt(parseend)).length !== 0) {
                return badges.slice(parseInt(parsestart), parseInt(parseend));
            } else {
                return badges;
            };
        } else if(data.toLowerCase() === "punishments") {
            var url = `https://api.thexyznetwork.xyz/${server}/xadmin/punishments/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xadminpunishmentsResult = UrlFetchApp.fetch(url, options);
            var jsonxadminpunishmentsResult = JSON.parse(xadminpunishmentsResult.getContentText());
            var punishments = [];

            jsonxadminpunishmentsResult.result.punishments.forEach(punishment => {
                var punishmentinformation = [];
                punishmentinformation.push(punishment.admin);
                punishmentinformation.push(punishment.adminid);
                punishmentinformation.push(punishment.punishment);
                punishmentinformation.push(punishment.reason);
                if(punishment.length !== 0 && punishment.length !== -1) {
                    punishmentinformation.push(punishment.length);
                };
                punishmentinformation.push(new Date(punishment.created*1000));
                punishments.push(punishmentinformation);
            });

            if(punishments.slice(parseInt(parsestart), parseInt(parseend)).length !== 0) {
                return punishments.slice(parseInt(parsestart), parseInt(parseend));
            } else {
                return punishments;
            };
        } else if(data.toLowerCase() === "punishments-total") {
            var url = `https://api.thexyznetwork.xyz/${server}/xadmin/punishments/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xadminpunishmentsResult = UrlFetchApp.fetch(url, options);
            var jsonxadminpunishmentsResult = JSON.parse(xadminpunishmentsResult.getContentText());

            return jsonxadminpunishmentsResult.result.punishments.length;
        } else if(data.toLowerCase() === "warns") {
            var url = `https://api.thexyznetwork.xyz/${server}/xadmin/warns/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xadminwarnsResult = UrlFetchApp.fetch(url, options);
            var jsonxadminwarnsResult = JSON.parse(xadminwarnsResult.getContentText());
            var warns = [];

            jsonxadminwarnsResult.result.warns.forEach(warn => {
                var warninformation = [];
                warninformation.push(warn.admin);
                warninformation.push(warn.adminid);
                warninformation.push(warn.reason);
                warninformation.push(new Date(warn.time*1000));
                warns.push(warninformation);
            });

            if(warns.slice(parseInt(parsestart), parseInt(parseend)).length !== 0) {
                return warns.slice(parseInt(parsestart), parseInt(parseend));
            } else {
                return warns;
            };
        } else if(data.toLowerCase() === "warns-total") {
            var url = `https://api.thexyznetwork.xyz/${server}/xadmin/warns/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xadminwarnsResult = UrlFetchApp.fetch(url, options);
            var jsonxadminwarnsResult = JSON.parse(xadminwarnsResult.getContentText());

            return jsonxadminwarnsResult.result.warns.length;
        } else if(data.toLowerCase() === "bans") {
            var url = `https://api.thexyznetwork.xyz/${server}/xadmin/bans/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xadminbansResult = UrlFetchApp.fetch(url, options);
            var jsonxadminbansResult = JSON.parse(xadminbansResult.getContentText());
            var bans = [];

            jsonxadminbansResult.result.bans.forEach(ban => {
                var baninformation = [];
                baninformation.push(ban.admin);
                baninformation.push(ban.adminid);
                baninformation.push(ban.reason);
                baninformation.push(new Date(ban.start*1000));
                baninformation.push(new Date((ban.start+ban.end)*1000));
                bans.push(baninformation);
            });

            if(bans.slice(parseInt(parsestart), parseInt(parseend)).length !== 0) {
                return bans.slice(parseInt(parsestart), parseInt(parseend));
            } else {
                return bans;
            };
        } else if(data.toLowerCase() === "bans-total") {
            var url = `https://api.thexyznetwork.xyz/${server}/xadmin/bans/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xadminbansResult = UrlFetchApp.fetch(url, options);
            var jsonxadminbansResult = JSON.parse(xadminbansResult.getContentText());

            return jsonxadminbansResult.result.bans.length;
        };
    };
};

function getUserxSuiteInformation(argument, authorization, data) {
    if(!argument.match(/^765611[0-9]{11}$/)) {
        var url = `https://api.thexyznetwork.xyz/xsuitelink/discord/${argument}`;
        var options = {
            "method": "get",
            "contentType": "application/json",
            "headers": {
                "apikey": authorization
            }
        };
        
        var xsuitelinkResult = UrlFetchApp.fetch(url, options);
        var jsonxsuitelinkResult = JSON.parse(xsuitelinkResult.getContentText());
            
        argument = jsonxsuitelinkResult.result.steam;
    };

    if(data) {
        if(data.toLowerCase() === "name") {
            var url = `https://api.thexyznetwork.xyz/xsuite/profile/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xsuiteResult = UrlFetchApp.fetch(url, options);
            var jsonxsuiteResult = JSON.parse(xsuiteResult.getContentText());
            
            return jsonxsuiteResult.result.name;
        } else if(data.toLowerCase() === "avatar") {
            var url = `https://api.thexyznetwork.xyz/xsuite/profile/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xsuiteResult = UrlFetchApp.fetch(url, options);
            var jsonxsuiteResult = JSON.parse(xsuiteResult.getContentText());
            
            return jsonxsuiteResult.result.avatar;
        } else if(data.toLowerCase() === "background") {
            var url = `https://api.thexyznetwork.xyz/xsuite/profile/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xsuiteResult = UrlFetchApp.fetch(url, options);
            var jsonxsuiteResult = JSON.parse(xsuiteResult.getContentText());
            
            if(jsonxsuiteResult.result.background !== null) {
                return `https://imgur.com/${jsonxsuiteResult.result.background}`;
            };
        } else if(data.toLowerCase() === "bio") {
            var url = `https://api.thexyznetwork.xyz/xsuite/profile/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xsuiteResult = UrlFetchApp.fetch(url, options);
            var jsonxsuiteResult = JSON.parse(xsuiteResult.getContentText());
            
            return jsonxsuiteResult.result.bio;
        };
    };
};

function getUserxSuiteLinkInformation(argument, authorization, data) {
    if(!argument.match(/^765611[0-9]{11}$/)) {
        var url = `https://api.thexyznetwork.xyz/xsuitelink/discord/${argument}`;
        var options = {
            "method": "get",
            "contentType": "application/json",
            "headers": {
                "apikey": authorization
            }
        };
        
        var xsuitelinkResult = UrlFetchApp.fetch(url, options);
        var jsonxsuitelinkResult = JSON.parse(xsuitelinkResult.getContentText());
            
        argument = jsonxsuitelinkResult.result.steam;
    };

    if(data) {
        if(data.toLowerCase() === "discordusername") {
            var url = `https://api.thexyznetwork.xyz/xsuitelink/steam/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xsuitelinkResult = UrlFetchApp.fetch(url, options);
            var jsonxsuitelinkResult = JSON.parse(xsuitelinkResult.getContentText());
            
            return `${jsonxsuitelinkResult.result.username}#${jsonxsuitelinkResult.result.tag.toString().padStart(4, "0")}`;
        } else if(data.toLowerCase() === "discordid") {
            var url = `https://api.thexyznetwork.xyz/xsuitelink/steam/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xsuitelinkResult = UrlFetchApp.fetch(url, options);
            var jsonxsuitelinkResult = JSON.parse(xsuitelinkResult.getContentText());
            
            return jsonxsuitelinkResult.result.discord;
        } else if(data.toLowerCase() === "booster") {
            var url = `https://api.thexyznetwork.xyz/xsuitelink/steam/${argument}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var xsuitelinkResult = UrlFetchApp.fetch(url, options);
            var jsonxsuitelinkResult = JSON.parse(xsuitelinkResult.getContentText());
            
            return jsonxsuitelinkResult.result.booster;
        };
    };
};

function getUserJobTrackerInformation(argument, job, authorization, data, days, server) {
    if(typeof server === "undefined") {
        server = days;
        days = null;
    };
    if(!argument.match(/^765611[0-9]{11}$/)) {
        var url = `https://api.thexyznetwork.xyz/xsuitelink/discord/${argument}`;
        var options = {
            "method": "get",
            "contentType": "application/json",
            "headers": {
                "apikey": authorization
            }
        };
        
        var xsuitelinkResult = UrlFetchApp.fetch(url, options);
        var jsonxsuitelinkResult = JSON.parse(xsuitelinkResult.getContentText());
            
        argument = jsonxsuitelinkResult.result.steam;
    };

    if(data) {
        if(data.toLowerCase().startsWith("playtime")) {
            var days;
            if(days === null) {
                days = (7 * 24 * 60 * 60 * 1000);
            } else {
                days = (parseInt(days) * 24 * 60 * 60 * 1000);
            };
            var url = `https://api.thexyznetwork.xyz/${server}/jobtracker/${argument}/${job}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var userjobtrackerResult = UrlFetchApp.fetch(url, options);
            var jsonuserjobtrackerResult = JSON.parse(userjobtrackerResult.getContentText());

            var time = 0;
            jsonuserjobtrackerResult.result.entries.forEach(entry => {
                if(entry.leave * 1000 > (Date.now()-days)) {
                    time = time + (entry.leave - entry.join);
                };
            });
            return toTimeFormat(time);
        } else if(data.toLowerCase() === "lastplayed") {
            var url = `https://api.thexyznetwork.xyz/${server}/jobtracker/${argument}/${job}`;
            var options = {
                "method": "get",
                "contentType": "application/json",
                "headers": {
                    "apikey": authorization
                }
            };
            
            var userjobtrackerResult = UrlFetchApp.fetch(url, options);
            var jsonuserjobtrackerResult = JSON.parse(userjobtrackerResult.getContentText());

            if(jsonuserjobtrackerResult.result.entries[0].leave !== null) {
                return new Date(jsonuserjobtrackerResult.result.entries[0].leave*1000);
            } else {
                return new Date();
            };
        };
    };
};

function getWhitelistInformation(argument, authorization, data, parsestart, parseend, server) {
    if(typeof server === "undefined") {
        if(typeof parseend === "undefined") {
            server = parsestart;
            parseend = null;
            parsestart = 0;
        } else {
            server = parseend;
            parseend = parsestart;
            parsestart = 0;
        };
    };

    var url = `https://api.thexyznetwork.xyz/${server}/whitelists/${argument}`;
    var options = {
        "method": "get",
        "contentType": "application/json",
        "headers": {
            "apikey": authorization
        }
    };

    var whitelistResult = UrlFetchApp.fetch(url, options);
    var jsonwhitelistResult = JSON.parse(whitelistResult.getContentText());

    if(data) {
        if(data.toLowerCase() === "users") {
            if(jsonwhitelistResult.result.users.slice(parseInt(parsestart), parseInt(parseend)).length !== 0) {
                return jsonwhitelistResult.result.users.slice(parseInt(parsestart), parseInt(parseend));
            } else {
                return jsonwhitelistResult.result.users;
            };
        } else if(data.toLowerCase() === "total") {
            return jsonwhitelistResult.result.users.length;
        };
    };
};

function getStatisticsInformation(authorization, data) {
    var url = `https://api.thexyznetwork.xyz/stats`;
    var options = {
        "method": "get",
        "contentType": "application/json",
        "headers": {
            "apikey": authorization
        }
    };

    var statisticsResult = UrlFetchApp.fetch(url, options);
    var jsonstatisticsResult = JSON.parse(statisticsResult.getContentText());

    if(data) {
        if(data.toLowerCase().startsWith("players-total")) {
            return jsonstatisticsResult.result.all_players;
        } else if(data.toLowerCase() === "players-recently") {
            return jsonstatisticsResult.result.recent_players;
        } else if(data.toLowerCase() === "players-today") {
            return jsonstatisticsResult.result.today_players;
        } else if(data.toLowerCase() === "playtime-total") {
            return toTimeFormat(jsonstatisticsResult.result.total_playtime);
        } else if(data.toLowerCase() === "steam-total") {
            return jsonstatisticsResult.result.total_steam;
        } else if(data.toLowerCase() === "discord-total") {
            return jsonstatisticsResult.result.total_discord;
        };
    };
};