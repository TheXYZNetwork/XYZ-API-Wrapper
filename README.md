# XYZ API Wrapper
A script coded in google scripts for The XYZ Network API which will wrap and allow you to use all of The XYZ Network API endpoints and easily get information from the specified endpoint!

## Installation
Step 1: You will need to head to your Google Spreadsheet where you want to install the XYZ API Wrapper.

Step 2: Click the `Tools` button which is located on the navigation bar within the page.

Step 3: This will then proceed to open the `Tools` menu and you will need to click the button called `Script editor`.

Step 4: Once you have clicked on the button it will open a new tab which will be called Google App Scripts which is where the application will give you a starter function which `myFunction()`.

Step 5: Copy the XYZ API Wrapper script from [Github](https://github.com/TheXYZNetwork/XYZ-API-Wrapper/blob/google-script/index.gs) and proceed to paste the copied script into the Google App Scripts tab making sure to clear anything in the file like the starter function which is what the application will give you. You can delete the script by selecting all the current script (CONTROL + A) and deleting it (BACKSPACE | DELETE). Then make sure to press the `Save` button located on the navigation bar within the page.

Step 6: Now head back to your Google Spreadsheet tab and reload the page, if you have done this installation process correctly it should then show you the `XYZ API Wrapper` button which is located on the navigation bar within the page.

## Functions

### User Server Information:

#### Description
This function will request all different user XYZ Network API endpoints and get you the data you specified.

#### Get User Roleplay Name:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "rpname", "Server ID")
```

##### Result
```
User
```

#### Get User Wallet Amount:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "wallet", "Server ID")
```

##### Result
```
0
```

#### Get User Usergroup:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "usergroup", "Server ID")
```

##### Result
```
user
```

#### Get User Playtime:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "playtime", "Server ID")
```

##### Result
```
0
```

#### Get User Last Joined:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "lastjoined", "Server ID")
```

##### Result
```
01/02/2021
```

#### Get User Badges:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "badges", "Server ID")
```

##### Result
```
nolifer
steam
wiper
```

##### Parsing Options
| Title  | Type | Description |
| ------------- | ------------- | ------------- |
| Parse Start | Integer | Parses the amount specified from the start of the badges |
| Parse End | Integer | Parses the amount specified from the end of the badges |

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "badges", "Parse Start", "Parse End", "Server ID")
```

#### Get User Punishments:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "punishments", "Server ID")
```

##### Result
```
Admin    Admin ID    Punishment Type    Reason    Length    Timestamp
```

##### Parsing Options
| Title  | Type | Description |
| ------------- | ------------- | ------------- |
| Parse Start | Integer | Parses the amount specified from the start of the punishments |
| Parse End | Integer | Parses the amount specified from the end of the punishments |

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "punishments", "Parse Start", "Parse End", "Server ID")
```

#### Get User Punishment Total:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "punishment-total", "Server ID")
```

##### Result
```
0
```

#### Get User Warns:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "warns", "Server ID")
```

##### Result
```
Admin    Admin ID    Reason    Timestamp
```

##### Parsing Options
| Title  | Type | Description |
| ------------- | ------------- | ------------- |
| Parse Start | Integer | Parses the amount specified from the start of the warns |
| Parse End | Integer | Parses the amount specified from the end of the warns |

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "warns", "Parse Start", "Parse End", "Server ID")
```

#### Get User Warn Total:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "warn-total", "Server ID")
```

##### Result
```
0
```

#### Get User Bans:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "bans", "Server ID")
```

##### Result
```
Admin    Admin ID    Reason    Start    End
```

##### Parsing Options
| Title  | Type | Description |
| ------------- | ------------- | ------------- |
| Parse Start | Integer | Parses the amount specified from the start of the bans |
| Parse End | Integer | Parses the amount specified from the end of the bans |

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "bans", "Parse Start", "Parse End", "Server ID")
```

#### Get User Ban Total:

##### Request
```
=getUserServerInformation("SteamID64 / Discord ID", "XYZ API Key", "ban-total", "Server ID")
```

##### Result
```
0
```

### User xSuite Information:

#### Description
This function will request the xSuite XYZ Network API endpoints and get you the data you specified.

#### Get User Name:

##### Request
```
=getUserxSuiteInformation("SteamID64 / Discord ID", "XYZ API Key", "name")
```

##### Result
```
User
```

#### Get User Avatar:

##### Request
```
=getUserxSuiteInformation("SteamID64 / Discord ID", "XYZ API Key", "avatar")
```

##### Result
```
https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg
```

#### Get User Background:

##### Request
```
=getUserxSuiteInformation("SteamID64 / Discord ID", "XYZ API Key", "background")
```

##### Result
```
https://imgur.com/0000000
```

#### Get User Bio:

##### Request
```
=getUserxSuiteInformation("SteamID64 / Discord ID", "XYZ API Key", "bio")
```

##### Result
```
This is my bio!
```

### User xSuite Link Information:

#### Description
This function will request the xSuite Link XYZ Network API endpoints and get you the data you specified.

#### Get User Discord Username:

##### Request
```
=getUserxSuiteLinkInformation("SteamID64 / Discord ID", "XYZ API Key", "discordusername")
```

##### Result
```
User#0000
```

#### Get User Discord ID:

##### Request
```
=getUserxSuiteLinkInformation("SteamID64 / Discord ID", "XYZ API Key", "discordid")
```

##### Result
```
000000000000000000
```

#### Get User Booster Status:

##### Request
```
=getUserxSuiteLinkInformation("SteamID64 / Discord ID", "XYZ API Key", "booster")
```

##### Result
```
false
```

### User Job Tracker Information:

#### Description
This function will request the job tracker XYZ Network API endpoints and get you the data you specified.

#### Get User Job Playtime:

##### Request
```
=getUserJobTrackerInformation("SteamID64 / Discord ID", "Job ID", "XYZ API Key", "playtime", "Days", "Server ID")
```

##### Result
```
0
```

#### Get User Job Last Played:

##### Request
```
=getUserJobTrackerInformation("SteamID64 / Discord ID", "Job ID", "XYZ API Key", "lastplayed", "Days", "Server ID")
```

##### Result
```
01/02/2021
```

### Whitelist Information:

#### Description
This function will request the whitelist XYZ Network API endpoints and get you the data you specified.

#### Get Whitelist Users:

##### Request
```
=getWhitelistInformation("Job ID", "XYZ API Key", "users", "Server ID")
```

##### Result
```
00000000000000000
```

##### Parsing Options
| Title  | Type | Description |
| ------------- | ------------- | ------------- |
| Parse Start | Integer | Parses the amount specified from the start of the whitelists |
| Parse End | Integer | Parses the amount specified from the end of the whitelists |

##### Request
```
=getWhitelistInformation("Job ID", "XYZ API Key", "users", "Parse Start", "Parse End", "Server ID")
```

#### Get Whitelist Total:

##### Request
```
=getWhitelistInformation("Job ID", "XYZ API Key", "total", "Server ID")
```

##### Result
```
0
```

#### Statistics Information:

#### Description
This function will request the statistics XYZ Network API endpoints and get you the data you specified.

#### Get Users Total:

##### Request
```
=getStatisticsInformation("XYZ API Key", "users-total")
```

##### Result
```
0
```

#### Get Users Recently:

##### Request
```
=getStatisticsInformation("XYZ API Key", "users-recently")
```

##### Result
```
0
```

#### Get Users Today:

##### Request
```
=getStatisticsInformation("XYZ API Key", "users-today")
```

##### Result
```
0
```

#### Get Playtime Total:

##### Request
```
=getStatisticsInformation("XYZ API Key", "playtime-total")
```

##### Result
```
0
```

#### Get Steam Total:

##### Request
```
=getStatisticsInformation("XYZ API Key", "steam-total")
```

##### Result
```
0
```

#### Get Discord Total:

##### Request
```
=getStatisticsInformation("XYZ API Key", "discord-total")
```

##### Result
```
0
```

## Licence
[ISC License](https://github.com/TheXYZNetwork/XYZ-API-Wrapper/blob/google-script/LICENSE)
