const superAgent = require("superagent");

let authorizationKey;
let serverKey;

function setAuthorization(authorization) {
    authorizationKey = authorization;
};

function setServer(server) {
    serverKey = server;
};

async function getUserFullInformation(user, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let userResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/users/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        let usergroupResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/xadmin/usergroup/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        let userplaytimeResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/playtime/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        let userbadgesResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/badges/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        let xadminpunishmentsResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/xadmin/punishments/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        let xadminwarnsResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/xadmin/warns/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        let xadminbansResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/xadmin/bans/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        let xsuiteResult = await superAgent.get(`https://api.thexyznetwork.xyz/xsuite/profile/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        let xsuitelinkResult = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/steam/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        if(xsuiteResult.body.result["background"]) {
            xsuitelinkResult.body.result["background"] = `https://imgur.com/${xsuiteResult.body.result["background"]}`;
        };

        if(xsuitelinkResult.body.result["tag"]) {
            xsuitelinkResult.body.result["tag"] = xsuitelinkResult.body.result["tag"].toString().padStart(4, "0");
        };

        let result = {
            "user": Object.assign({}, userResult.body.result, usergroupResult.body.result, userplaytimeResult.body.result, userbadgesResult.body.result),
            "xsuite": xsuiteResult.body.result,
            "xsuitelink": xsuitelinkResult.body.result,
            "xadmin": Object.assign({}, xadminpunishmentsResult.body.result, xadminwarnsResult.body.result, xadminbansResult.body.result),
            "header": {"slowdownlimit": xsuitelinkResult.header["x-slowdown-limit"], "slowdownremaining": xsuitelinkResult.header["x-slowdown-remaining"], "slowdownreset": xsuitelinkResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUserInformation(user, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let userResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/users/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        let result = {
            "user": userResult.body.result,
            "header": {"slowdownlimit": userResult.header["x-slowdown-limit"], "slowdownremaining": userResult.header["x-slowdown-remaining"], "slowdownreset": userResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUsergroupInformation(user, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let usergroupResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/xadmin/usergroup/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        let result = {
            "user": usergroupResult.body.result,
            "header": {"slowdownlimit": usergroupResult.header["x-slowdown-limit"], "slowdownremaining": usergroupResult.header["x-slowdown-remaining"], "slowdownreset": usergroupResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUserPlaytimeInformation(user, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let userplaytimeResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/playtime/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        let result = {
            "user": userplaytimeResult.body.result,
            "header": {"slowdownlimit": userplaytimeResult.header["x-slowdown-limit"], "slowdownremaining": userplaytimeResult.header["x-slowdown-remaining"], "slowdownreset": userplaytimeResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUserBadgesInformation(user, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let userbadgesResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/badges/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        let result = {
            "user": userbadgesResult.body.result,
            "header": {"slowdownlimit": userbadgesResult.header["x-slowdown-limit"], "slowdownremaining": userbadgesResult.header["x-slowdown-remaining"], "slowdownreset": userbadgesResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUserPunishmentInformation(user, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let xadminpunishmentsResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/xadmin/punishments/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        
        let result = {
            "xadmin": xadminpunishmentsResult.body.result,
            "header": {"slowdownlimit": xadminpunishmentsResult.header["x-slowdown-limit"], "slowdownremaining": xadminpunishmentsResult.header["x-slowdown-remaining"], "slowdownreset": xadminpunishmentsResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUserWarnsInformation(user, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let xadminwarnsResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/xadmin/warns/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        
        let result = {
            "xadmin":  xadminwarnsResult.body.result,
            "header": {"slowdownlimit": xadminwarnsResult.header["x-slowdown-limit"], "slowdownremaining": xadminwarnsResult.header["x-slowdown-remaining"], "slowdownreset": xadminwarnsResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUserBansInformation(user, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let xadminbansResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/xadmin/bans/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        
        let result = {
            "xadmin": xadminbansResult.body.result,
            "header": {"slowdownlimit": xadminbansResult.header["x-slowdown-limit"], "slowdownremaining": xadminbansResult.header["x-slowdown-remaining"], "slowdownreset": xadminbansResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUserxSuiteInformation(user, authorization) {
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let xsuiteResult = await superAgent.get(`https://api.thexyznetwork.xyz/xsuite/profile/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        if(xsuiteResult.body.result["background"]) {
            xsuiteResult.body.result["background"] = `https://imgur.com/${xsuitelinkResult.body.result["background"]}`;
        };

        let result = {
            "xsuite": xsuiteResult.body.result,
            "header": {"slowdownlimit": xsuiteResult.header["x-slowdown-limit"], "slowdownremaining": xsuiteResult.header["x-slowdown-remaining"], "slowdownreset": xsuiteResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getUserxSuiteLinkInformation(user, authorization) {
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let xsuitelinkResult = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/steam/${user}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        let result = {
            "xsuite": xsuitelinkResult.body.result,
            "header": {"slowdownlimit": xsuitelinkResult.header["x-slowdown-limit"], "slowdownremaining": xsuitelinkResult.header["x-slowdown-remaining"], "slowdownreset": xsuitelinkResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};


async function getUserJobTrackerInformation(user, job, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };
    if(!user.match(/^765611[0-9]{11}$/)) {
        try {
            let result = await superAgent.get(`https://api.thexyznetwork.xyz/xsuitelink/discord/${user}`).set("apikey", authorization).catch(error => {
                console.log(error.stack);
            });
            user = result.body.result.steam;
        } catch(error) {
            console.log(error);
        };
    };

    try {
        let jobtrackerResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/jobtracker/${user}/${job}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });
        
        let result = {
            "jobtracker": jobtrackerResult.body.result,
            "header": {"slowdownlimit": jobtrackerResult.header["x-slowdown-limit"], "slowdownremaining": jobtrackerResult.header["x-slowdown-remaining"], "slowdownreset": jobtrackerResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getWhitelistUsersInformation(job, server, authorization) {
    if(!server) {
        if(serverKey.length !== 0) {
            server = serverKey;
        };
    };
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };

    try {
        let whitelistResult = await superAgent.get(`https://api.thexyznetwork.xyz/${server}/whitelists/${job}`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        let result = {
            "whitelists": whitelistResult.body.result,
            "header": {"slowdownlimit": whitelistResult.header["x-slowdown-limit"], "slowdownremaining": whitelistResult.header["x-slowdown-remaining"], "slowdownreset": whitelistResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

async function getStatisticsInformation(authorization) {
    if(!authorization) {
        if(authorizationKey.length !== 0) {
            authorization = authorizationKey;
        };
    };

    try {
        let statisticsResult = await superAgent.get(`https://api.thexyznetwork.xyz/stats`).set("apikey", authorization).catch(error => {
            console.log(error.stack);
        });

        let result = {
            "statistics": statisticsResult.body.result,
            "header": {"slowdownlimit": statisticsResult.header["x-slowdown-limit"], "slowdownremaining": statisticsResult.header["x-slowdown-remaining"], "slowdownreset": statisticsResult.header["x-slowdown-reset"]}
        };

        return result;
    } catch(error) {
        console.log(error);
    };
};

module.exports = {
    setAuthorization: setAuthorization,
    setServer: setServer,
    getUserFullInformation: getUserFullInformation,
    getUserInformation: getUserInformation,
    getUsergroupInformation: getUsergroupInformation,
    getUserPlaytimeInformation: getUserPlaytimeInformation,
    getUserBadgesInformation: getUserBadgesInformation,
    getUserPunishmentInformation: getUserPunishmentInformation,
    getUserWarnsInformation: getUserWarnsInformation,
    getUserBansInformation: getUserBansInformation,
    getUserxSuiteInformation: getUserxSuiteInformation,
    getUserxSuiteLinkInformation: getUserxSuiteLinkInformation,
    getUserJobTrackerInformation: getUserJobTrackerInformation,
    getWhitelistUsersInformation: getWhitelistUsersInformation,
    getStatisticsInformation: getStatisticsInformation
};