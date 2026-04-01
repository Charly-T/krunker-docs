# 3.0.0 Essentials and presets
Default presets govern how your map will be played. They allow you to exert considerable control over player experience, including physics, team dynamics, and gunplay. High scores and other map storage operations require the host setting **Force Default Settings**, preventing abuse of unintended settings to cheat, especially in game modes like `bhop` (parkour) where player physics is essential to progress, and can make difficult tasks trivial. When **KR Rewards**, another host setting, is enabled (required for any usage of KR rewards), **Force Default Settings** is automatically switched on. Both of these are default settings, disabling **Game Settings** and **Advanced** tabs of **Custom Game Setup**.

## 3.1.0 Essentials

### 3.1.1 Name
Title of your map. It will appear in the top-left corner of the UI while in-game, and a hyperlink is available above the main navigation buttons when not focused in game.

`String input`
`Default: New Krunker Map`

### 3.1.2 Welcome msg
Chat message sent in blue directly to a user that joins (it is not sent to every user). It appears immediately upon joining a server, before the user joins the match.

`String input`
`Default: ""`

### 3.1.3 Mod URL & Select Mod
These allow you to force users to load a mod immediately upon joining your map. Mods allow many alterations of map visuals, UI, and player skins, and are central to many maps. In past versions of editor, third party hosting was required. This is no longer the case. Users may click the **Select Mod** button to navigate through mods hosted on Krunker's own servers. When selected, the URL of this mod will automatically populate the **Mod URL**. More information about modding can be found in section 7.

`String input and button`
`Default: ""`

### 3.1.4 Death height
Y-value at which players will immediately die. This is necessary in maps that are open to the void, and prevent infinite falls, allowing players to spawn back in. Value is inclusive; if a player rests at Y = 0 on a cube, and the **Death Height** is set to 0, the player will die. 

`Range input (integer)`
`Range: -1000 to 3000`

### 3.1.5 Force Old AO
Toggle switch for using old ambient occlusion. Ambient occlusion is essentially corner shading.

### 3.1.6 Minimap AssetID
String input for the asset ID of the minimap. Minimaps (when enabled) appear in the top left region of the map, below the timer, title, and publisher.

### 3.2.0 Game modes
All game modes listed are toggle switches enabling and disabling their usage during normal gameplay. These will be listed without tertiary numbering for convenience, as they all pertain to the same thing. Credit to the Fandom page for the starting point for many of these explanations. Missing ID values are due to removed modes **Carrier (ID: 30)**, **All or Nothing (ID: 31)**, **Mag Dump (ID: 32)**. These modes can still be tested, but they are removed from the preset options and cannot be hosted.

Prospective rotation maps (those that are used in normal public matches) should be made compatible with the following game modes: FFA, TDM, CTF, POINT, TDF, KC, GUN, DEPO, KRANK, DEPOFFA, SHRP, DOM.

#### Free For All (ID: 0) - FFA
Each player is on a team of their own, and the player with the most points wins. 

This game mode requires no special zones to function.

#### Team Deathmatch (ID: 1) - TDM
Players are placed onto two teams. When a player collects score by killing members of the opposite team, the reward is added to the cumulative score for their team. The team with the higher score wins. 

This game mode requires no special zones to function.

#### Hardpoint (ID: 2) - POINT
Two teams are given an objective to hold. Each player that remains in the objective zone (2.5.4) is given 10 score per 1.5 second. As with TDM, there a team-based score in addition to player score which determines the winning team. Unlike TDM, kills do not go towards this score, only points gained from staying inside the objective zone.

#### Capture the Flag (ID: 3) - CTF
Added in [v0.9.99997](https://krunkerio.fandom.com/wiki/Change_Log#v0.0.99997 "Change Log"), Capture The Flag is a team-based game mode where the objective is to steal the enemy team's flag from their flag base, and take it to your team's flag base. You won't be able to capture the opposite's flag at your flag base if your team's flag is stolen by an enemy. If you kill an enemy that has your team's flag, it will stay in place until you or your teammates touch it, and then it will teleport back to its flag base. You can earn special points in this game mode for picking and capturing the opposite's flag, returning your team's flag to its flag base, and snatching your team's flag by killing the enemy with it. Flags that are outside their flag base for 45 seconds will reset itself.

Up to 6 flags. Neutral flag is disregarded.

#### Parkour (ID: 4) - BHOP
This is a diverse game mode, with many applications. The standard BHOP map allows players to complete sequential movement challenges to collect points from score zones (2.5.2). Other common uses of BHOP mode include general movement gameplay (like jumps) around otherwise PvP maps, run style games (Lava_run, Flood_Escape), and time-trial racing gameplay. The advantage for BHOP, is that there is no set win condition if the time is set to 0. A chat message is sent through chat when a player collects all points. If the time is not set to 0, the player with the most points will win, like in other modes.

#### Hide & Seek (ID: 5) - HIDE
Added in [v0.9.9993](https://krunkerio.fandom.com/wiki/Change_Log#v0.9.9993 "Change Log"), Hide & Seek is a team-based game mode. Everyone starts the match as hiders, but once the 10-second countdown runs up, one randomly chosen player becomes a seeker, and their screen is blacked out for 45 seconds to give the hiders a headstart. Any extra players who join the round afterwards are also seekers. As soon as a hiding player is found (or if a hider kills him/herself), they join the seeker too. To win, seekers have to find everybody and hiders have to keep themselves from being found by the seekers by the timer ends.

#### Infected (ID: 6) - INFECT
Added in [v0.9.9994](https://krunkerio.fandom.com/wiki/Change_Log#v0.9.9994 "Change Log"), Infected is a team-based game mode that is similar to Hide & Seek, and the infected function is identical to the seekers. However, instead of one player being chosen randomly after the first 10 seconds of the match, the amount of infected players varies. In games with 5 or less people only one player will be chosen. 5 or more player games will have two infected, and 16 player games will have 3 infected.) The difference is that the humans can now shoot back, rather than just hide. (Though it's not unusual for someone who hid through the whole match to be the only surviving human.) Of course, as soon as an infected kills a human (or if a human kills him/herself), they die and are reborn as an infected, while the infected won't stop respawning no matter how much the humans shoot at them. All of the Infected are always "reborn" as a [Runner](https://krunkerio.fandom.com/wiki/Runner "Runner") class.

#### Race (ID: 7) - RACE
Added in [v0.9.99998](https://krunkerio.fandom.com/wiki/Change_Log#v0.9.99998 "Change Log"), it is a game mode that is much like Parkour, which is intended to be played with Runners only. Here, however, there's no time limit, and the first player to get to all the scorezones wins. Also, the race doesn't officially start until the first 10 seconds of the match elapse. Until that happens, the players are boosted backwards if they attempt to start early. This is so that the players who connected to the server first don't get an immediate advantage. The race mode has a special timer that starts once the first 10 seconds of the match elapse. It continues to count time (in minutes, seconds, and milliseconds,) until a player reaches all the scorezones. Once this happens, a warning timer shows up on the screen that says: Race ending in 10. From there, 10 seconds will count down and those who do not reach all the scorezones in that time did not finish (DNF). After these 10 seconds, the match ends.

#### Last Man Standing (ID: 8) - LMS
This game mode was added in [v1.4.6](https://krunkerio.fandom.com/wiki/Change_Log#v1.4.6 "Change Log") to replace the now removed comp game mode. Like its name suggests, the last player alive wins the match, and players do not regenerate health. This game mode is usually used for battle royale games.

**NOTE:** OVERRIDES TIME SETTINGS

#### Simon Says (ID: 9) - 
This game mode was added in the [v1.2.7](https://krunkerio.fandom.com/wiki/Change_Log#v1.2.7 "Change Log"). In this mode, the host of the custom game becomes "Simon" (every round). Simon receives  5000 HP like the boss in boss hunt. The purpose of this mode is to simulate the game of Simon Says in krunker. (Simon, in this case, the host will tell the other players to do a specific action, for example, jumping up and down while crouching.) If Simon feels like a player has not made a good enough effort in performing his specified action he/she can kill the player. (It is recommended that you have lives on so if a player makes enough mistakes he/she is out of the game.)

#### Gun Game (ID: 10) - GUN

#### Prop Hunt (ID: 11) - PROP
This game mode is similar to hide and seek, with some added quirks. It was added in [v1.5.7](https://krunkerio.fandom.com/wiki/Change_Log#v1.5.7 "Change Log"). There are two teams, the seekers and the props. The seekers' screens are blacked out at the beginning for 30 seconds, allowing the props (similar to the hiders in hide and seek) to hide and blend in with other props. The difference between hiders and props is that props are actual props (crates, teddy bears etc.) Props spawn as crates but can change their prop by double clicking while facing the prop they want to change into. The seekers must kill the props by shooting/slashing at them, but each time they shoot a false prop not housing a player and their ammo depletes, they take 10 damage. The seekers commit suicide when they reach 0 HP. If all the props are found and killed the seekers win but if the props are not found before the timer elapses, or if all seekers die, the props win.

#### Boss Hunt (ID: 12) - BOSS
Was added in the [v0.9.99997](https://krunkerio.fandom.com/wiki/Change_Log#v0.9.99997 "Change Log"). Here, once the countdown at the start of the match elapses, one player is randomly selected by the game as the boss. The boss receives 5000 HP and all other players try to kill him/her before the round ends. The boss hunt mode was removed in [v1.4.6](https://krunkerio.fandom.com/wiki/Change_Log#v1.4.6 "Change Log") and added back in [v1.7.4](https://krunkerio.fandom.com/wiki/Change_Log#v1.7.4 "Change Log").

#### Classic FFA (ID: 13) - 
Added in [v2.6.8](https://krunkerio.fandom.com/wiki/Change_Log_V2#v2.6.8 "Change Log V2") as a custom game mode and became a party game mode in [v3.7.4](https://krunkerio.fandom.com/wiki/Change_Log_V3#v3.7.4 "Change Log V3"), Sharp Shooter is an FFA-based game mode with a twist that all players will be equipped with a random weapon every 20 seconds. As of [v3.8.1](https://krunkerio.fandom.com/wiki/Change_Log_V3#v3.8.1 "Change Log V3"), there is also a [Perks](https://krunkerio.fandom.com/wiki/Perks "Perks") system in Sharp Shooter that gives you extra speed, reload time, and fire rate according to your killstreak.

#### Deposit (ID: 14)
Added in [v5.5.2](https://krunkerio.fandom.com/wiki/Change_Log_v5#5.5.2 "Change Log v5"), Deposit FFA is a variation of Deposit, where instead of teams, it's Free for All. Points work the same, a coin claim is**5 points**, and depositing grants **75** points each. the limit on coins you can hold at once is currently **20**.

#### Stalker (ID: 15)
Special Halloween Game Mode for the spooks. In this mode, the map becomes dark and fog is ramped up, greatly decreasing visibility. One player is selected as the "stalker", whom have some special abilities;

- Can go invisible when standing still for two seconds
- Extremely fast (higher movement speeds)
- Can jump much higher than the player
- Has 400 HP which only regenerates if the Stalker kills a player
- Can use only a Combat Knife, which can one-shot any class.
- When they kill a player, a jumpscare will appear on the player's screen

#### King of the Hill (ID: 16) - KING
Hardpoint, as a free for all.

#### One in the Chamber (ID: 17) - OITC
Player are given a gun with 1 bullet and can one hit kill, as well as use their melee weapon. Each kill awards you another bullet. Players only have 3 lives and 10 HP, and the player with the highest score wins.

#### Trade (ID: 18) - TRADE
Like BHOP, everyone is on the same team. In-game trading is enabled, allowing players level 10 and above to exchange items. 

#### Kill Confirmed (ID: 19) - KC
Added in [v2.5.2](https://krunkerio.fandom.com/wiki/Change_Log_V2#2.5.2 "Change Log V2"), Kill Confirmed is a team-based game mode where each killed player drops a token with the "K" symbol on it and others can collect it. Claiming a blue token gives 25 points to the claimer, while denying a red token (claiming a teammate's token) offers 10 points. The winner is the team with the most blue tokens collected.

#### Defuse (ID: 20)
Added in [v2.5.9](https://krunkerio.fandom.com/wiki/Change_Log_V2#v2.5.9 "Change Log V2"), defuse is essentially search and destroy. The attacker must destroy 1 of the 2 objectives (named A or B) by detonating the bomb, or eliminating the defending team. Meanwhile the other team has to defend by either running the clock down, or eliminating the attacking team.

#### Sharp Shooter (ID: 21)
Added in [v2.6.8](https://krunkerio.fandom.com/wiki/Change_Log_V2#v2.6.8 "Change Log V2") as a custom game mode and became a party game mode in [v3.7.4](https://krunkerio.fandom.com/wiki/Change_Log_V3#v3.7.4 "Change Log V3"), Sharp Shooter is an FFA-based game mode with a twist that all players will be equipped with a random weapon every 20 seconds. As of [v3.8.1](https://krunkerio.fandom.com/wiki/Change_Log_V3#v3.8.1 "Change Log V3"), there is also a [Perks](https://krunkerio.fandom.com/wiki/Perks "Perks") system in Sharp Shooter that gives you extra speed, reload time, and fire rate according to your killstreak.

#### Traitor (ID: 22)

#### Raid (ID: 23)

#### Blitz (ID: 24)


#### Domination (ID: 25) - DOM
Added in [v4.0.7](https://krunkerio.fandom.com/wiki/Change_Log_V4#4.0.7 "Change Log V4"), Domination is a team-based game mode where you secure the objective zones. There are 3 zones on the map, zones **A**, **B**, and **C**. The objective is to capture any of the 3 zones, and hold them down as long as possible. To secure a zone, players in the same team must stand in the highlighted zone for 10 seconds. You will see a progress bar indicating the progress of securing the zone and a chat message when you successfully secured it. The more players from the same team securing a zone at the same time, the faster the progress completes. If players from both teams are contesting the same zone, the progress will remain in a contested state. Neither of both team gains progress from the same zone until the contesting ends. If all team members leave the zone before it is captured, capture progress resets. Players who successfully secured any zone earn 200 points, and 10 objective points are added to their team's score every 1.5 seconds. This game mode is currently not available on all rotation maps.

#### Squad Deathmatch (ID: 26)


#### Kranked FFA (ID: 27) - KRANK
Added in [v5.0.7](https://krunkerio.fandom.com/wiki/Change_Log_v5#v5.0.7 "Change Log v5"), Kranked is a variant of Free for All where once you kill an enemy, a 15-second timer will be activated. If you fail to kill another player before the timer runs out, you will explode and die. During the countdown (being "Kranked"), players will have a 25% speed boost, 35% reload speed boost, and 15% fire rate boost.

#### Team Defender (ID: 28) - TDF

#### Deposit FFA (ID: 29) - DEPOFFA
Added in [v5.5.2](https://krunkerio.fandom.com/wiki/Change_Log_v5#5.5.2 "Change Log v5"), Deposit FFA is a variation of Deposit, where instead of teams, it's Free for All. Points work the same, a coin claim is **5 points**, and depositing grants **75** points each. the limit on coins you can hold at once is currently **20**.

#### Chaos Snipers (ID: 33) - CHS
A variant of FFA, Chaos Snipers restricts class to Hunter (with a sniper rifle) and significantly boosts speed and jump height. It also enables multidirectional sliding. 

This game mode requires no special zones to function.

#### Bighead FFA (ID: 34)

### 3.3.0 Server Preset

#### 3.3.1 Server Size

##### Players
Player maximum. Generally, set this to 20, unless it's a specialized game type that requires fewer players. This maximum can be overridden with the 40 player host setting, though this is quite expensive and is seldom done. Regardless of maximum, guest-hosted lobbies are limited to 6 players, normal users 10 (unless using 40 player), premium users 16, and verified users 20.

`Range input (integer)`
`Range: 1-20`
`Default: 2`

##### Min Players
Minimum player count required to start a game. Prior to that, all players will be on the same team, unable to damage one another, and unable to destroy triggers and other destructible objects. Once this player count is reached, players will be reset to spawn points. If the selection is set to 0 or 1, the game will automatically start.

`Range input (integer)`
`Range: 0-20`
`Default: 0`

#### 3.3.2 Timers

##### Minutes
Minutes in the round. If this is set to 0, the game will run indefinitely. This is usually used for parkour (BHOP) or other custom modes.

`Range input (integer)`
`Range: 0-60`
`Default: 4`

##### Warmup
Minutes for the warmup period. This warmup period allows people to get their bearings and explore the map with no consequences. If set to 0, there is no warmup.

`Range input (float)`
`Range: 0-4`
`Default: 0`

##### Rounds
Rounds per match.

`Range input (integer)`
`Range: 1-10`
`Default: 1`

##### Intermission (s)
Time between rounds (in seconds).

`Range input (integer)`
`Range: 5-120`
`Default: 30`

##### Auto Respawn
Time before forced respawn (in seconds). As with many other selections, setting this to 0 disables the feature altogether. This is automatically enabled in Kranked FFA (see 3.2.0) and set to 10 seconds. Be aware that using this setting effectively removes the ability for users to meaningfully spectate, making it harder to identify hackers and explore the map.

`Range input (integer)`
`Range: 0-15`
`Default: 0`

#### 3.3.3 Health and Lives

##### Lives
Number of times a player can die before disabling respawn for the rest of the match. If set to 0, there is no limit on deaths and players can respawn continuously.

`Range input (integer)`
`Range: 0-10`
`Default: 0`

##### Health Multiplier
Multiplies every health pool. This can be used to quickly provide everyone with extra challenge or extra forgiveness.

`Range input (float)`
`Range: 0.1-3`
`Default: 1`

##### Health Regen
Enables health regeneration. Users may disable this to get a hardcore experience for horror maps where every bit of damage matters.

`Toggle switch`
`Default: ON`

#### 3.3.4 Score & Rewards

##### Score Limit
Limit on the score that can be acquired by players. When they are at the maximum, they will not be able to collect points.

`Range input (integer)`
`Range: 0-10000`
`Default: 0`

##### Keep Team Score
No clue whatsoever.

`Toggle switch`
`Default: OFF`

##### Kill Rewards
Whether kills grant score. Rarely turned off.

`Toggle switch`
`Default: ON`

##### No Assists
Disables assist reward.

`Toggle switch`
`Default: OFF`

#### 3.3.5 Mode Settings

##### Objective Time
Time (in minutes) before the next objective is activated. Relevant to Hardpoint (POINT), King of the Hill (KING), Deposit (DEPO), and Deposit FFA (DEPOFFA).

`Range input (float)`
`Range: 0.1-10`
`Default: 1`

##### Force Mode Classes
Disabling allegedly prevents modes from forcing users into designated classes. This has not worked. Formal statement of purpose is unavailable.

`Toggle switch`
`Default: ON`

##### Log Time (Race/Bhop)
Enables parkour and race mode speedrun timers in the UI.

`Toggle switch`
`Default: ON`

##### Last Checkpoint Time Rewind (Race/Bhop)
When the player presses their "last checkpoint" button (by default, this is n), this setting allows the clock to be set back to the time they first made it to the checkpoint.

`Toggle switch`
`Default: OFF`

#### 3.3.6 World Physics

##### Gravity
Multiplier for the gravitational acceleration. If set to 0, there will be no gravity.

`Range input (float)`
`Range: 0-2`
`Default: 1`

##### Time Scale
Multiplier for time scale. Does not affect timer, just game physics. 

**NOTE:** When the value is 1.3 or higher, `Input failed 4` errors may occur, along with extreme rubberbanding.

`Range input (float)`
`Range: 0.1-1.5`
`Default: 1`

##### Fall Damage
Multiplier for fall damage. Generally unfeasible (despite being functional), primarily due to the low maximum fall speed (0.3 KSU / tick) and the maximum fall damage multiplier. The low fall speed means that velocity is not a good discriminant between players falling relatively short distances and extremely long distances. If the fall speed is 0.3 KSU / tick, at a **Fall Damage** value of 10, a player will take 30 points of damage. 

`Range input (float)`
`Range: 0-10`
`Default: 0`

##### Fall Damage Thresh
Minimum damage at which fall damage will be considered. This is compared to the pre-multiplier 

`Range input (float)`
`Range: 0-10`
`Default: 0`

##### Bullet Drop
Enables gravity effect on bullets. The effects are fairly minor with sniper.

`Toggle switch`
`Default: OFF`

#### 3.3.7 Jumping

##### Jump Force
Multiplier for jump velocity. Disabling jumping entirely requires changes in the **Class Config** section.

`Range input (float)`
`Range: 0.1-3`
`Default: 1`

##### Wall Jump Power
Multiplier for wall jump velocity. Wall jumping parameters can be changed more finely in the **Class Config** section. Setting to 0 disables walljump entirely for all classes.

`Range input (float)`
`Range: 0-2`
`Default: 1`

##### Auto Jump
Enables repeated jumping by holding down the jump button rather than requiring a press for every jump.

`Toggle switch`
`Default: OFF`

#### 3.3.8 Movement

##### Fixed Movement
Caps movement speed at 200 and attempts to equalize experience across FPS. May feel a bit sluggish, especially for high FPS (120+) players.

`Toggle switch`
`Default: OFF`

##### Slide Time
How long the player can slide, in seconds.

`Range input (float)`
`Range: 1-5`
`Default: 1`

##### Slide Speed
`Range input (float)`
`Range: 0-2`
`Default: 1`

##### Strafe Speed 
`Range input (float)`
`Range: 1-2`
`Default: 1.2`

##### Sliding
Enables the sliding mechanic. If turned off, crouching will quickly decelerate the player and offer no speed benefits.

`Toggle switch`
`Default: ON`

##### Air Strafe
Enables strafing in the air. Strafing is a technique wherein a user presses two non-contradictory directional keys (WA, WD) allowing them to change direction mid-air.

`Toggle switch`
`Default: OFF`

#### 3.3.9 Gameplay Logic

##### Weapon Impulse
Multiplier for weapon impulse; by default, impulse weapons include compressor, shotgun, and rocket launcher. Any weapon can be given impulse in the weapon settings.

`Range input (float)`
`Range: 0-3`
`Default: 1`

##### Fire Rate
Multiplier for the time between shots. The higher this value is, the *slower* firing is.

`Range input (float)`
`Range: 0.5-2`
`Default: 1`

##### Reload Speed
Multiplier for the time to reload. The higher this value is, the *slower* reloading is.

`Range input (float)`
`Range: 0.5-2`
`Default: 1`

##### Headshots Only
Allows damage only for headshots.

`Toggle switch`
`Default: OFF`

##### No Secondaries
Disables secondaries (pistol, etc.)

`Toggle switch`
`Default: OFF`

##### Throwable Melees
Enables throwing for knives. Disable if you want a classic melee experience.

`Toggle switch`
`Default: ON`

##### Chargable Weapons
Enables weapon charging. Disable for classic crossbow experience. Turning this off *does not disable chargeable weapons*, like knives, bows, etc. It only disables the charge time, allowing them to fire/be thrown instantaneously.

**NOTE:** This is the only known typo in the editor.

`Toggle switch`
`Default: ON`

#### 3.3.10 Collisions

##### Hitbox Padding
Deprecated, use **Hurtbox Scale** (3.3.11) instead.

`Range input (float)`
`Range: -2-2`
`Default: 0.6`

#### 3.3.11 Hitboxes

##### Hurtbox Scale
Scale of the hitbox for players regarding bullets and projectiles.

`Range input (float)`
`Range: 1-2`
`Default: 1`

#### 3.3.12 Other

##### Disable Streaks
Removes streak messages and rewards (such as nuke, bombardment, etc.).

`Toggle switch`
`Default: OFF`

##### Disable Borders
Overrides all borders and allows players to pass over and walk on border-enabled objects.

`Toggle switch`
`Default: OFF`

##### Spectating
Enables spectate mode, where players can freely move about a map without affecting it. There are no collisions and players in spectate mode may lock onto another player. For maps where danger and exploration are the objective, it is better to turn this setting off. Regardless of the setting, certain modes like Prop Hunt (PROP) will force players into spectate once they have expended all of their lives.

`Toggle switch`
`Default: ON`

##### 3rd Person
Enables third person view. Typically used for trade maps. Third person must be enabled for the player to be rendered, otherwise it is just the player's arms.

`Toggle switch`
`Default: OFF`

##### Hide Nametags (Enemies)
Hides enemy nametags. This can make spotting enemies difficult.

`Toggle switch`
`Default: OFF`

##### Hide Nametags (Allies)
Hides nametags of players on the same team.

`Toggle switch`
`Default: OFF`

##### Kill Cams
Enables a victim's camera flying towards and zooming in on the player that killed them. Disable this for maps where this would be immersion breaking or reveal sniping locations.

`Toggle switch`
`Default: ON`

##### Allow Anonymous
When disabled, prevents verified players from using Anonymous mode.

`Toggle switch`
`Default: ON`

##### Stop Head Clipping
Generally disables head clipping, where a player forces their hitbox through an object above them, usually by crouching and releasing while close enough to the object to be inside of it once at full height. **This setting is not recommended**, because it often exchanges head clipping for the far more severe floor clipping, which can result in falling out of the map. Critical areas can instead be double lined with objects, to ensure that a collision is made with the standing player after the clip.

`Toggle switch`
`Default: OFF`

##### Webhook
**Available for competitive servers only.** Not compatible with default Discord webhook agent. This is theorized to be due to the lack of embed information. Cloudflare Workers can run a logger that will receive the payloads. Visualizations are not provided. Sample payload (courtesy BluZed):

```
{"type":"match_end","teams":[{"team":1,"name":"Alpha","score":1},{"team":2,"name":"Bravo","score":0}],"winner":1,"date":"2026-02-07T03:15:25.227Z","duration":118677,"map":"Sandstorm","players":[{"name":"Guest_2","kills":1,"deaths":0,"assists":0,"score":135,"objective_score":10,"damage_done":168.1,"headshots":0,"accuracy":60,"team":1},{"name":"Guest_1","kills":0,"deaths":1,"assists":0,"score":0,"objective_score":0,"damage_done":0,"headshots":0,"accuracy":0,"team":2}],"events":[{"type":"kill","time":78864,"round":1,"killer":"Guest_2","victim":"Guest_1","weapon":1,"headshot":true,"wallbang":false,"killer_pos":{"x":207.45159876526225,"y":33,"z":-82.45},"victim_pos":{"x":220.44336636484584,"y":33,"z":-113.4284106854064}}]}
```

`String input`
`Default: ""`

##### Minimaps
Enables minimaps for navigation. Requires minimap file.

`Toggle switch`
`Default: ON`

#### 3.3.13 Teams

##### Select Team
Allows user-selected teams, as with competitive.

`Toggle switch`
`Default: OFF`

##### Friendly Fire
Allows players on the same team to damage one another.

`Toggle switch`
`Default: OFF`

##### Alpha Team Name
`String input`
`Default: Alpha`

##### Bravo Team Name
`String input`
`Default: Bravo`

##### Charlie Team Name
`String input`
`Default: Charlie`

##### Delta Team Name
`String input`
`Default: Delta`

##### Echo Team Name
`String input`
`Default: Echo`

##### Alpha Team Damage
`Range input (float)`
`Range: 0-2`
`Default: 1`

##### Bravo Team Damage
`Range input (float)`
`Range: 0-2`
`Default: 1`

##### Charlie Team Damage
`Range input (float)`
`Range: 0-2`
`Default: 1`

##### Delta Team Damage
`Range input (float)`
`Range: 0-2`
`Default: 1`

##### Echo Team Damage
`Range input (float)`
`Range: 0-2`
`Default: 1`
