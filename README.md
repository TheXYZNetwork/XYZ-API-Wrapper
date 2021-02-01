# XYZ API Wrapper
An npm package coded in javascript for The XYZ Network API which will wrap and allow you to use all of The XYZ Network API endpoints and easily get information from the specified endpoint!

## Installation
```
npm install xyz-api-wrapper
```

## Requiring Package
```
const xyz = require("xyz-api-wrapper");
```

## Functions

### Set Authorization:

#### Description
This function will set the authorization key for all the requests below this piece of code.

#### Request
```
xyz.setAuthorization("XYZ API Key");
```

### Set Server:

#### Description
This function will set the server for all the requests below this piece of code.

#### Request
```
xyz.setServer("Server ID");
```

### Get User Full Information:

#### Description
This function will request all the XYZ Network API endpoints and get all the specified user information.

#### Request
```
xyz.getUserFullInformation("SteamID64 / Discord ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    user: {
        rpname: 'User',
        wallet: 0,
        usergroup: 'user',
        total: 0,
        last: 0000000000,
        badges: [
            {
                badge: 'nolifer',
                progress: '0',
                complete: 'true'
            },
            {
                badge: 'steam',
                progress: '0',
                complete: 'true'
            },
            {
                badge: 'wiper',
                progress: '0',
                complete: 'true'
            }
        ]
    },
    xsuite: {
        name: 'User',
        avatar: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
        background: 'https://imgur.com/0000000',
        bio: 'This is my bio!'
    },
    xsuitelink: {
        steam: '00000000000000000',
        discord: '000000000000000000',
        username: 'User',
        tag: '0000',
        booster: false
    },
    xadmin: { 
        punishments: [
            {
                adminid: '00000000000000000',
                admin: 'Admin',
                punishment: 'Mute',
                reason: 'No reason given',
                length: 0,
                created: 0000000000
            }
        ],
        warns: [
            {
                adminid: '00000000000000000',
                admin: 'Admin',
                reason: 'No reason given',
                time: 0000000000
            }
        ],
        bans: [
            {
                adminid: '00000000000000000',
                admin: 'Admin',
                reason: 'No reason given',
                start: 0000000000,
                end: 0000000000
            }
        ]
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User Information:

#### Description
This function will request the DarkRP XYZ Network API endpoint and get the specified user's darkrp information.

#### Request
```
xyz.getUserInformation("SteamID64 / Discord ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    user: {
        rpname: 'User',
        wallet: 0
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get Usergroup Information:

#### Description
This function will request the xAdmin usergroup XYZ Network API endpoint and get the specified users usergroup.

#### Request
```
xyz.getUsergroupInformation("SteamID64 / Discord ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    user: {
        usergroup: 'user'
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User Playtime Information:

#### Description
This function will request the playtime XYZ Network API endpoint and get the specified user's playtime information.

#### Request
```
xyz.getPlaytimeInformation("SteamID64 / Discord ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    user: {
        total: 0,
        last: 0000000000
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User Badges Information:

#### Description
This function will request the badges XYZ Network API endpoint and get the specified user's badges.

#### Request
```
xyz.getUserBadgesInformation("SteamID64 / Discord ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    user: {
        badges: [
            {
                badge: 'nolifer',
                progress: '0',
                complete: 'true'
            },
            {
                badge: 'steam',
                progress: '0',
                complete: 'true'
            },
            {
                badge: 'wiper',
                progress: '0',
                complete: 'true'
            }
        ]
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User Punishment Information:

#### Description
This function will request the xAdmin punishments XYZ Network API endpoint and get the specified user's punishments.

#### Request
```
xyz.getUserPunishmentInformation("SteamID64 / Discord ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    xadmin: { 
        punishments: [
            {
                adminid: '00000000000000000',
                admin: 'Admin',
                punishment: 'Mute',
                reason: 'No reason given',
                length: 0,
                created: 0000000000
            }
        ]
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User Warns Information:

#### Description
This function will request the xAdmin warns XYZ Network API endpoint and get the specified user's warns.

#### Request
```
xyz.getUserWarnsInformation("SteamID64 / Discord ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    xadmin: { 
        warns: [
            {
                adminid: '00000000000000000',
                admin: 'Admin',
                reason: 'No reason given',
                time: 0000000000
            }
        ]
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User Bans Information:

#### Description
This function will request the xAdmin bans XYZ Network API endpoint and get the specified user's bans.

#### Request
```
xyz.getUserBansInformation("SteamID64 / Discord ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    xadmin: { 
        bans: [
            {
                adminid: '00000000000000000',
                admin: 'Admin',
                reason: 'No reason given',
                start: 0000000000,
                end: 0000000000
            }
        ]
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User xSuite Information:

#### Description
This function will request the xSuite XYZ Network API endpoint and get the specified user's xsuite information.

#### Request
```
xyz.getUserxSuiteInformation("SteamID64 / Discord ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    xsuite: {
        name: 'User',
        avatar: 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg',
        background: 'https://imgur.com/0000000',
        bio: 'This is my bio!'
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User xSuite Link Information:

#### Description
This function will request the xSuite Link XYZ Network API endpoint and get the specified user's xsuite link information.

#### Request
```
xyz.getUserxSuiteLinkInformation("SteamID64 / Discord ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    xsuitelink: {
        steam: '00000000000000000',
        discord: '000000000000000000',
        username: 'User',
        tag: '0000',
        booster: false
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get User Job Tracker Information:

#### Description
This function will request the job tracker XYZ Network API endpoint and get the specified user's job tracker information.

#### Request
```
xyz.getUserJobTrackerInformation("SteamID64 / Discord ID", "Department ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    jobtracker: {
        entries: [
            {
                join: 0000000000,
                leave: 0000000000,
                job: 'Citizen'
            }
        ]
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get Whitelist Users Information:

#### Description
This function will request the whitelist XYZ Network API endpoint and get the specified job users.

#### Request
```
xyz.getWhitelistUsersInformation("Job ID", "Server ID", "XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    whitelists: {
        users: [
            '00000000000000000'
        ]
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

### Get Statistics Information:

#### Description
This function will request the statistics XYZ Network API endpoint and get the statistics.

#### Request
```
xyz.getStatisticsInformation("XYZ API Key").then(result => {
    console.log(result);
});
```

#### Result
```
{
    statistics: {
        all_players: '0',
        recent_players: '0',
        today_players: '0',
        total_discord: '0',
        total_playtime: '0000000000',
        total_steam: '0'
    },
    header: {
        slowdownlimit: '1000',
        slowdownremaining: '1000',
        slowdownreset: '0000000000'
    }
}
```

## Licence
[ISC License](https://github.com/TheXYZNetwork/XYZ-API-Wrapper/blob/master/LICENSE)
