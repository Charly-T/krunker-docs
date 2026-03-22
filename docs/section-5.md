# 5.0.0 Triggers
To address confusion over what works in test mode (which is considered more convenient) and what requires hosting, or even publishing, the team has added tags that reveal what may work in what circumstances. Do note, however, that an event working in test mode is not a guarantee that every *action* you pair it with works in test mode.

## 5.1.0 Trigger Events

### 5.1.1 onShoot
Fires when a player shoots the trigger object. Includes bolts, throwing melees. Does not include grappler and compressor.

`test-compatible`

### 5.1.2 onMelee
Fires when a player melees the trigger object. Includes fists/hands and knives (does not discriminate against non-bladed skins).

`test-compatible`

### 5.1.3 onDamage
Fires when the trigger is damaged in any way. Requires health of trigger to be greater than 0.

`test-compatible`

### 5.1.4 onEnterObject
Fires when a player enters the trigger. This trigger event will disable player and bullet collisions in-game automatically, ignoring properties explicitly in editor.

`test-compatible`

### 5.1.5 onDestroy
Fires when the trigger is destroyed. Destructible doesn't needs to be on if the method of destruction is through expending the health.

`test-compatible`

### 5.1.6 onRespawn
Fires when the trigger is respawned. This can be through built-in timer-related respawn, or respawning via another trigger.

`test-compatible`

### 5.1.7 onTimer
In seconds (while not destroyed) a repeating timer for actions. One can make use of "single use" or "destroy on use" properties to effect more control over when the trigger action is done. Fires when the trigger object's timer runs out.

`test-compatible`

NOTE: NO TARGET PLAYER (player-based actions are unusable). Partial sandbox compatibility depends on action.

### 5.1.8 onProjectile
Fires when the trigger is hit by a projectile. "Projectiles" include: thrown melee weapons, zapper prongs, and crossbow bolts.

`test-compatible`

### 5.1.9 onThrowingMelee
Fires when the trigger is hit by a thrown melee weapon.

`test-compatible`

### 5.1.10 onPunch
Fires when the trigger is punched. If the player is armed with a knife, melee attacks will have no effect.

`test-compatible`

NOTE: Event Value has no effect.

### 5.1.11 onHoldMouse
Fires repeatly when the player holds down the mouse. May lag a bit. This trigger event will disable player and bullet collisions in-game automatically, without affecting properties explicitly in editor.
Enables "Custom Message" in "Technical & logic"

`test-compatible`

NOTE: Event Value controls in seconds, how long one must hold the mouse down for.

### 5.1.12 onCollision
Fires when a player touches the trigger.

`test-compatible`

### 5.1.13 onStorageEquals
Fires when interface storage equals a specific value.

`test-compatible`

### 5.1.14 onStorageGreater
Fires when interface storage is greater than a specific value.

`test-compatible`

### 5.1.15 onStorageLesser
Fires when interface storage is less than a specific value.

`test-compatible`

### 5.1.16 onInteractKey
When the player is in range of the trigger, a popup will prompt them to press their interact key. This interact key can be set by the player, but it is G by default. Fires when a player presses that interact key.
Enables "Custom Message" in "Technical & logic"

`test-compatible`

### 5.1.17 onPlayerSpawn
Fires when a player is spawned both at start playing and after dying.

`host-only`

### 5.1.18 onPlayerKill
Fires when a player is killed. Fires when a player gets a kill.
TODO: when killed? or when kills?

`host-only`

### 5.1.19 onPlayerDie
Fires when a player dies; this considers other sources of death, like self-kills via explosive damage, or death by triggers, death zones, or by falling below the death height.

`host-only`

### 5.1.20 onNukeStart
Fires when a nuke (the streak reward) begins.

`host-only`

### 5.1.21 onNukeEnd
Fires when a nuke ends.

`host-only`

### 5.1.22 onExitObject
Fires when a player leaves the trigger. This trigger event will disable player and bullet collisions in-game automatically, ignoring properties explicitly in editor.

`test-compatible`

### 5.1.23 onCustomValEquals
Fires when any custom value equals a specific value.

`test-compatible`

### 5.1.24 onCustomValLesser
Fires when any custom value is less than a specific value.

`test-compatible`

### 5.1.25 onGameStart
Fires when a match starts.

`host-only`

### 5.1.26 onObjectiveSwitch
Fires when the objective changes in Hardpoint (POINT), Deposit (DEPO), Deposit FFA (DEPOFFA), or King of the Hill (KING).

`test-compatible`

### 5.1.27 onPlayerDamage
Fires when a player is damaged.

`test-compatible`

### 5.1.28 onCustomValGreater
Fires when any custom value is greater than a specific value.

`test-compatible`

### 5.1.29 onAIDeath
Fires when an AI dies. AI can't die on test play, so only triggers while hosting.

`host-only`

### 5.1.30 onAIDamage
Fires when an AI takes damage.

`test-compatible`

### 5.1.31 onAIHalfHealth
Fires when an AI reaches half health.

`test-compatible`

### 5.1.32 onAIKillPlayer
Fires when an AI kills a player.

`test-compatible`


## 5.2.0 Trigger Actions

### 5.2.1 Give Player Score
Adds the Action Value to the player's score, though if set to 0, the score will be incremented by 1. This is useful for target practice maps and bonus points that should not affect completion of a parkour maps, etc. If used for the latter, the best practice is generally to use conditionals (5.3.0). See the parkour guide's "bonus points" section for more information. Gives the player a specified amount of score.

`test-compatible`

### 5.2.2 Kill Player
Kills the player. This is generally used as a way to allow players to kill themselves without having death zones, which can easily be accidentally run into (so they can spectate), but is sometimes used for obstacles in shooting.

`test-compatible`

### 5.2.3 Respawn Player
Forces respawn. Can be used to override Auto Respawn setting in a conditional manner, instead of changing the map setting. Respawns the player.

`test-compatible`

### 5.2.4 Change Player Health
Modifies player health. This is the only way to change player health incrementally (rather than death) without use of scripting. Adjusts the player's health by a specified amount.

`test-compatible`

### 5.2.5 Destroy Interface
Destroys the target interface where Destructible is enabled.

`test-compatible`

### 5.2.6 Toggle Interface Gate
Toggles the target interface gate open or closed.

`test-compatible`

### 5.2.7 Change Interface Health
Changes the health of the target interface.

`test-compatible`

### 5.2.8 Teleport Player To Interface
Teleports the player to the target interface.

`test-compatible`

### 5.2.9 Change Interface Deposit Box Amount
Changes the deposit box amount of the target interface.

`test-compatible`

### 5.2.10 Kill Opposing Team
Kills all players on the opposing team.

`host-only`

### 5.2.11 Respawn Opposing Team
Respawns all players on the opposing team.

`host-only`

### 5.2.12 Respawn Destructible Interface
Respawns the target destroyed interface where Destructible is enabled.

`test-compatible`

### 5.2.13 Toggle Destructible Interface
Destroys or respawns an object where Destructible is enabled, depending on its current state. This is useful for times where the state is not known or set before this action will be used, like for a door where there is another button on the other side. Toggles the target destructible interface between destroyed and active.

`test-compatible`

### 5.2.14 Set Player Score
Sets the player's score to a specific value.

`test-compatible`

### 5.2.15 Broadcast Sound
Plays a sound for all players in the game.

`test-compatible`

### 5.2.16 Clear Player Loadout
Clears the player's weapon loadout.

`test-compatible`

### 5.2.17 Broadcast Message
Send message to everyone in chat. Sends a chat message to all players in the lobby.

`host-only`

### 5.2.18 Send Message
Send message only to the player in chat. Sends a chat message to the triggering player only.

`host-only`

### 5.2.19 Swap Player Team
Swaps the player to the opposing team.

`test-compatible`

### 5.2.20 Set Player Team
Sets the player to a specific team.

`test-compatible`

### 5.2.21 Round Time
Adjusts round time by the Action Value. The units are milliseconds and not seconds, therefore with the default range, users can only set it to change by 10 seconds each time. This can be expanded further by using JSON modification (10.0.0) or by using KS to modify round time (9.0.0) instead.

`test-compatible`

### 5.2.22 Reset Interface
Completely resets the target interface to its original state.

`test-compatible`

### 5.2.23 End Round
Ends the current game round.

`test-compatible`

### 5.2.24 Refill Player Knife
Refills the player's throwable knife.

`test-compatible`

### 5.2.25 Destroy Self
Destroys the trigger object itself if the trigger is Destructible.

`test-compatible`

### 5.2.26 Increase Interface Storage
Increases the target interface storage by a specified amount.

`test-compatible`

### 5.2.27 Decrease Interface Storage
Decreases the target interface storage by a specified amount.

`test-compatible`

### 5.2.28 Set Interface Storage
Sets the target interface storage to a specific value.

`test-compatible`

### 5.2.29 Reset Interface Storage
Resets the target interface storage to zero.

`test-compatible`

### 5.2.30 Broadcast Popup
Sends a popup message to all players in the lobby.

`test-compatible`

### 5.2.31 Send Popup
Sends a popup message to the triggering player only.

`test-compatible`

### 5.2.32 Jump Scare
Displays a jump scare effect to the player.

`test-compatible`

### 5.2.33 Reward KR
Rewards the player with a specified amount of KR.

`published-only`

### 5.2.34 Clear Player Checkpoints
Removes checkpoint locations for players. If the player dies, they will return to spawn. Clears all of the player's checkpoints.

`test-compatible`

### 5.2.35 Send Sound
Plays a sound for the triggering player only.

`test-compatible`

### 5.2.36 Explosion
Creates an explosion at the trigger object's position.

`test-compatible`

### 5.2.37 Spawn AI
Spawns AI bots at their configured positions.

`test-compatible`

### 5.2.38 Set Player Value
Sets the triggering player value to a specific number.

`test-compatible`

### 5.2.39 Inc/Dec Player Value
Increases or decreases the triggering player value by a specified amount.

`test-compatible`

### 5.2.40 Play Animation
Plays a specified animation on AIs or interface objects.

`test-compatible`

### 5.2.41 Teleport Player to Path Node
Teleports the player to a specified path node.

`test-compatible`

### 5.2.42 Teleport Destructible Interface to Path Node
Teleports the target destructible interface to a specified path node.

`test-compatible`

### 5.2.43 Reset Destructible Interface Position
Resets the destructible interface to its original position.

`test-compatible`

### 5.2.44 Set Interface Trigger Value
Sets a custom value on the target interface trigger.

`test-compatible`

### 5.2.45 Inc/Dec Interface Trigger Value
Increases or decreases a custom value on the target interface trigger.

`test-compatible`

### 5.2.46 Set Trigger Value (Self)
Sets a custom value on the trigger object itself.

`test-compatible`

### 5.2.47 Inc/Dec Trigger Value (Self)
Increases or decreases a custom value on the trigger object itself.

`test-compatible`

### 5.2.48 Change Class
Changes the player's class.

`test-compatible`

### 5.2.49 Set Interface Deposit Box Amount
Sets the deposit box amount of the target interface.

`test-compatible`

### 5.2.50 Save Data
Saves player data to persistent storage.

`test-compatible`

### 5.2.51 Change Primary Weapon
Changes the player's primary weapon.

`test-compatible`

### 5.2.52 Change Secondary Weapon
Changes the player's secondary weapon.

`test-compatible`

### 5.2.53 Set Global Value
Sets a global value visible to the entire lobby.

`test-compatible`

### 5.2.54 Change Global Value
Changes a global value visible to the entire lobby.

`test-compatible`

### 5.2.55 Stop Sound
Stops a currently playing sound.

`test-compatible`

### 5.2.56 Show/Hide GUI Element (All)
Shows or hides a GUI element for all players.

`test-compatible`

### 5.2.57 Show/Hide GUI Element (Player)
Shows or hides a GUI element for the triggering player only.

`test-compatible`

### 5.2.58 Load Data
Loads the player's saved data from persistent storage.

`test-compatible`

### 5.2.59 Custom Action
Executes a custom KrunkScript action with optional parameters.

`host-only`

### 5.2.60 Change Ambient Sound
Changes the game's ambient sound.

`test-compatible`

### 5.2.61 Play Animation (Self)
Plays a custom animation on the trigger object itself.

`test-compatible`

### 5.2.62 Give Effect
Gives the player a selected status effect.

`test-compatible`

### 5.2.63 Give Random Effect
Gives the player a random status effect.

`test-compatible`

### 5.2.64 Play Video Ad
Plays a full-screen video ad for the player.

`host-only`

### 5.2.65 Force AI Target
Forces all AI to target the trigger object's position.

`test-compatible`

### 5.2.66 Mode Specific
Executes a game mode-specific trigger action.

NOTE: Can't make it work on sandbox.


## 5.3.0 Trigger Conditions

### 5.3.1 None
No condition required for the action to execute.

`test-compatible`

### 5.3.2 Player Value
Requires a specific player value (you can set the player value using triggers) for the action to be executed.

`test-compatible`

### 5.3.3 Current Class
Requires the player to be using a specific class.

`test-compatible`

### 5.3.4 Trigger Value
Requires the trigger value (you can set the trigger value using triggers) to be a certain amount for the trigger to be executed.

`test-compatible`

### 5.3.5 Player Count
Requires a specific player count to be met.

`test-compatible`

### 5.3.6 Global Value
Requires a specific global value (you can set the global value using triggers) to be met.

`test-compatible`

### 5.3.7 Player has Account
Requires the player to have a registered Krunker account.

`host-only`

### 5.3.8 Player has Premium
Requires the player to be subscribed to Krunker Premium.

`host-only`

### 5.3.9 Player is Verified
Requires the player to have verification status.

`host-only`

### 5.3.10 Player is Partner
Requires the player to have partner status.

`host-only`

### 5.3.11 Player Level
Requires the player to be at a specific level.

`test-compatible`

### 5.3.12 Player Inventory Value
Requires the player's inventory value to meet a condition.

`test-compatible`

### 5.3.13 Custom Action
Calls a custom KrunkScript function to check the condition.

`host-only`
