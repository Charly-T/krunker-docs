### Ai Spawner

#### AI Name

`String input`

#### Visible

Determines if the object is rendered.

`Toggle switch`
`Default: ON`

#### Collidable

Determines if the player can collide with the object.

`Toggle switch`
`Default: ON`

#### Spin

`Range input (float)`
`Range: -20-20`
`Default: 0`

#### Spin Axis

`Dropdown`
`Default: Y`
```
Options:
Y
X
Z
```

#### Team

`Dropdown`
`Default: Default`
```
Options:
Default
Alpha
Bravo
Charlie
Delta
```

#### Model Scale

`Range input (float)`
`Range: 0.01-100`
`Default: 4`

#### Model Y Offset

`Range input (float)`
`Range: -100-100`
`Default: 0`

#### Model Direction

`Range input (float)`
`Range: 0-360`
`Default: 0`

#### Style > Texture > Force Transparency

Especially with custom textures, allows transparency for transparent pixels. Link textures automatically have this property enabled in the background.

`Toggle switch`
`Default: OFF`

#### Style > Texture > Frame Animation > Frame Count

`Range input (float)`
`Range: 0-100`
`Default: 0`

#### Style > Texture > Frame Animation > Frame Speed

`Range input (float)`
`Range: 0-10`
`Default: 0`

#### Style > Asset ID

`String input`

#### Style > Encoding

`Dropdown`
`Default: Default`
```
Options:
Default
sRGBEncoding
LinearEncoding
```

#### Style > Color

Base/diffuse color.

`Color input (hex)`
`Default: #FFFFFF`

#### Style > Opacity

Lowering this property allows translucence.

`Range input (float)`
`Range: 0-1`
`Default: 1`

#### Style > Texture Smoothing

`Toggle switch`
`Default: ON`

#### Style > Fog

Disabling allows an object to show through fog setting. Useful for background deco and luminescent objects.

`Toggle switch`
`Default: ON`

#### Style > AlphaTest

`Range input (float)`
`Range: 0-1`
`Default: 0`

#### Style > Render Side

Determines whether the side rendered is the outside (front/default), inside (back), or both (double).

`Dropdown`
`Default: Game Default`
```
Options:
Game Default
Front
Back
Double
```

#### Style > Bob Distance

`Range input (float)`
`Range: 0-10`
`Default: 0`

#### Style > Bob Speed

`Range input (float)`
`Range: 0-10`
`Default: 0`

#### Technical & Logic > Score

`Range input (float)`
`Range: 0-10000`
`Default: 0`

#### Technical & Logic > Single Use

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Destructible

Allows triggers to destroy this object. Disables some optimization, so using too many objects with this property enabled may be detrimental to performance.

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Start Destroyed

Does not spawn the object at the beginning of a game.

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Spawn Chance

Pair with **Destructible** and **Start Destroyed** to give objects a certain chance to spawn. As with other properties, 0% chance is actually 100%.

`Range input (float)`
`Range: 0-100`
`Default: 0`

#### Technical & Logic > Health

Once this amount of damage is incurred, the object will be destroyed. This is useful for interactive barriers and spleef-type maps.

`Range input (float)`
`Range: 0-50000`
`Default: 0`

#### Technical & Logic > Respawn > Timer (s)

After destroyed, will be recreated according to this time.

`Range input (float)`
`Range: 0-3600`
`Default: 0`

#### Technical & Logic > Respawn > Random

Random respawn time, very small range (under 10 seconds, exact range unknown).

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Hitbox > Width Mlt

`Range input (float)`
`Range: 0.1-10`
`Default: 1`

#### Technical & Logic > Hitbox > Height Mlt

`Range input (float)`
`Range: 0.1-20`
`Default: 1`

#### Technical & Logic > Hitbox > Crit Damage Mlt

`Range input (float)`
`Range: 0-5`
`Default: 0`

#### Technical & Logic > Behavior > Ignore When Stuck

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Behavior > Drift When Stuck

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Behavior > Invincible When Stuck

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Behavior > Friendly

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Behavior > Target Players

`Toggle switch`
`Default: ON`

#### Technical & Logic > Behavior > Target Other AI

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Behavior > Boss

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Behavior > Behavior Type

`Range input (float)`
`Range: 0-20`
`Default: 0`

#### Technical & Logic > Behavior > Chase Distance

`Range input (float)`
`Range: 0-2000`
`Default: 10`

#### Technical & Logic > Behavior > Roam Radius

`Range input (float)`
`Range: 0-500`
`Default: 0`

#### Technical & Logic > Behavior > Roam Time

`Range input (float)`
`Range: 1000-10000`
`Default: 1000`

#### Technical & Logic > Behavior > Path Type

`Dropdown`
`Default: Loop`
```
Options:
Loop
Do Once
Ping Pong
Random
```

#### Technical & Logic > Behavior > Path Input

`String input`

#### Technical & Logic > Movement > Speed

`Range input (float)`
`Range: 0-10`
`Default: 1`

#### Technical & Logic > Movement > Turn Speed

`Range input (float)`
`Range: 0-30`
`Default: 1`

#### Technical & Logic > Movement > Gravity

`Range input (float)`
`Range: 0-1`
`Default: 1`

#### Technical & Logic > Movement > Velocity Movement

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Vision > Vision Distance

`Range input (float)`
`Range: 10-1000`
`Default: 120`

#### Technical & Logic > Vision > Xray Vision

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Melee > Can Melee

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Melee > Can Contact Hit

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Melee > Melee Dmg

`Range input (float)`
`Range: 1-200`
`Default: 10`

#### Technical & Logic > Melee > Melee Rate

`Range input (float)`
`Range: 200-10000`
`Default: 800`

#### Technical & Logic > Melee > Melee Range

`Range input (float)`
`Range: 10-100`
`Default: 10`

#### Technical & Logic > Melee > Melee Delay (ms)

`Range input (float)`
`Range: 0-5000`
`Default: 400`

#### Technical & Logic > Melee > Melee Shake

`Range input (float)`
`Range: 0-1`
`Default: 0`

#### Technical & Logic > Melee > Effect On Hit

`Dropdown`
`Default: None`
```
Options:
None
Boosted
Sleight of Hand
Rapid Fire
Siphon
Rooted
Dizzy
Poisoned
Jump Boost
Zapped
Strength
```

#### Technical & Logic > Shooting > Can Shoot

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Shooting > Firerate

`Range input (float)`
`Range: 200-10000`
`Default: 2000`

#### Technical & Logic > Shooting > Spread

`Range input (float)`
`Range: 0-1`
`Default: 0`

#### Technical & Logic > Shooting > Shot Break (ms)

`Range input (float)`
`Range: 0-5000`
`Default: 400`

#### Technical & Logic > Shooting > Offset Shot

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Shooting > Shot Arch Y

`Range input (float)`
`Range: -90-90`
`Default: 0`

#### Technical & Logic > Shooting > Shot Delay (ms)

`Range input (float)`
`Range: 0-5000`
`Default: 0`

#### Technical & Logic > Shooting > Shot Shake

`Range input (float)`
`Range: 0-1`
`Default: 0`

#### Technical & Logic > Shooting > Effect On Shot

`Dropdown`
`Default: None`
```
Options:
None
Boosted
Sleight of Hand
Rapid Fire
Siphon
Rooted
Dizzy
Poisoned
Jump Boost
Zapped
Strength
```

#### Technical & Logic > Shooting > Projectile > Projectile Asset

`String input`

#### Technical & Logic > Shooting > Projectile > Projectile Dmg

`Range input (float)`
`Range: 0-1000`
`Default: 100`

#### Technical & Logic > Shooting > Projectile > Projectile Speed

`Range input (float)`
`Range: 0-20`
`Default: 1`

#### Technical & Logic > Shooting > Projectile > Projectile Size

`Range input (float)`
`Range: 0.1-10`
`Default: 1`

#### Technical & Logic > Shooting > Projectile > Projectile Mesh Scale

`Range input (float)`
`Range: 0.01-10`
`Default: 1`

#### Technical & Logic > Shooting > Projectile > Projectile Spin

`Range input (float)`
`Range: 0-2`
`Default: 1`

#### Technical & Logic > Shooting > Projectile > Projectile Gravity

`Range input (float)`
`Range: -2-2`
`Default: 0`

#### Technical & Logic > Shooting > Projectile > Projectile Glow

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Shooting > Projectile > Projectile Transparency

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Shooting > Projectile > Explode

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Rewards > Skin Rewards

`String input`

#### Technical & Logic > Rewards > Reward Method

`Dropdown`
`Default: Auto`
```
Options:
Auto
Drop From AI
Drop on Node
```

#### Technical & Logic > Rewards > Reward Requirements

`Dropdown`
`Default: Player Active`
```
Options:
Player Active
Player Active & Damage
Player Killed
```

#### Technical & Logic > Rewards > Reward Node Id

`Range input (float)`
`Range: 0-1000`
`Default: 0`

#### Technical & Logic > Nametag > Level

`Range input (float)`
`Range: 0-999`
`Default: 0`

#### Technical & Logic > Nametag > Health Scale

`Range input (float)`
`Range: 0-10`
`Default: 1`

#### Technical & Logic > Trigger Event > Can Trigger

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Trigger Event > Event

`Dropdown`
`Default: onAIDeath`
```
Options:
onAIDeath
onAIDamage
onAIHalfHealth
onAIKillPlayer
```

#### Technical & Logic > Trigger Event > Event Value

`Range input (float)`
`Range: 0-10000`
`Default: 0`

#### Technical & Logic > Trigger Actions > Action Chance (%)

`Range input (float)`
`Range: 0-100`
`Default: 0`

#### Technical & Logic > Trigger Actions > Action 0 > Action

`Dropdown`
`Default: Give Player Score`
```
Options:
Give Player Score
Kill Player
Respawn Player
Change Player Health
Destroy Interface
Toggle Interface Gate
Change Interface Health
Teleport Player To Interface
Change Interface Deposit Box Amount
Kill Opposing Team
Respawn Opposing Team
Respawn Destructible Interface
Toggle Destructible Interface
Set Player Score
Broadcast Sound
Clear Player Loadout
Broadcast Message
Send Message
Swap Player Team
Set Player Team
Round Time
Reset Interface
End Round
Refill Player Knife
Destroy Self
Increase Interface Storage
Decrease Interface Storage
Set Interface Storage
Reset Interface Storage
Broadcast Popup
Send Popup
Jump Scare
Reward KR
Clear Player Checkpoints
Send Sound
Explosion
Spawn AI
Set Player Value
Inc/Dec Player Value
Play Animation
Teleport Player to Path Node
Teleport Destructible Interface to Path Node
Reset Destructible Interface Position
Set Interface Trigger Value
Inc/Dec Interface Trigger Value
Set Trigger Value (Self)
Inc/Dec Trigger Value (Self)
Change Class
Set Interface Deposit Box Amount
Save Data
Change Primary Weapon
Change Secondary Weapon
Set Global Value
Change Global Value
Stop Sound
Show/Hide GUI Element (All)
Show/Hide GUI Element (Player)
Load Data
Custom Action
Change Ambient Sound
Play Animation (Self)
Give Effect
Give Random Effect
Play Video Ad
Force AI Target
Mode Specific
```

#### Technical & Logic > Trigger Actions > Action 0 > Value Type

`Dropdown`
`Default: Input Value`
```
Options:
Input Value
Trigger Value
Player Value
Global Value
```

#### Technical & Logic > Trigger Actions > Action 0 > Action Value

`Range input (float)`
`Range: -10000-10000`
`Default: 0`

#### Technical & Logic > Trigger Actions > Action 0 > Delay

`Range input (float)`
`Range: 0-60`
`Default: 0`

#### Technical & Logic > Trigger Actions > Action 0 > Condition > Condition

`Dropdown`
`Default: None`
```
Options:
None
Player Value
Current Class
Trigger Value
Player Count
Global Value
Player has Account
Player has Premium
Player is Verified
Player is Partner
Player Level
Player Inventory Value
Custom Action
```

#### Technical & Logic > Interface > ID

Interface ID is used to identify dynamic objects and targets for trigger actions.

`Range input (float)`
`Range: 0-2000`
`Default: 0`

#### Technical & Logic > Interface > Target

`Range input (float)`
`Range: 0-2000`
`Default: 0`

#### Sound > Death Sound ID

`String input`
`Default: 0`

#### Sound > Idle Sound ID

`String input`
`Default: 0`

#### Sound > Shoot Sound ID

`String input`
`Default: 0`

#### Sound > Shoot-Hit Sound ID

`String input`
`Default: 0`

#### Sound > Melee Sound ID

`String input`
`Default: 0`

#### Sound > Melee-Hit Sound ID

`String input`
`Default: 0`

#### Sound > Agro Sound ID

`String input`
`Default: 0`

#### Animations > Animation Speed

`Range input (float)`
`Range: 0.01-10`
`Default: 1`

#### Animations > Start Animation

`String input`

#### Position

Location of the object in Cartesian coordinates. Positive Y is in the up direction. X and Z location defines the *center* and the Y location defines the bottom.

`Number input (float)`
`Default: 0, 0, 0`

#### Rotation

Rotation about each Cartesian axis. The Y rotation, for example, allows users to rotate an object laying on the XZ plane (a horizontal surface). Consider 1.3.4 and be mindful of using nonzero rotation with collidable objects.

`Number input (float)`
`Default: 0, 0, 0`

#### Size

Scale of the object.

`Number input (float)`
`Default: 0, 0, 0`

