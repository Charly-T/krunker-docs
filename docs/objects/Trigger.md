### Trigger

#### Visible

Determines if the object is rendered.

`Toggle switch`
`Default: ON`

#### Player Collidable

`Toggle switch`
`Default: ON`

#### Bullet Collisions

Determines if bullets interact with the object. **Collidable** must be enabled for this to have an effect.

`Toggle switch`
`Default: ON`

#### AI Collisions

Determines if AI entities collide with the object. AI is discussed in section 8.

`Toggle switch`
`Default: ON`

#### Wall Jumpable

Determines if players can walljump and wallgrind on an object.

`Toggle switch`
`Default: ON`

#### Can Grapple

Determines if grapples can connect with an object. Requires **Bullet Collisions** to be ON. Grapple collisions align with the simple collision box and not complex collisions.

`Toggle switch`
`Default: ON`

#### Can Impulse

Allows impulse weapons to propel players off an object.

`Toggle switch`
`Default: ON`

#### Show On Minimap

Enables minimap visibility.

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
`Default: 1`

#### Step Sound

Selection for the sound the player makes while walking on the object.

`Dropdown`
`Default: Default`
```
Options:
Default
Wood
Water
Sand
Snow
```

#### Dynamic

Enables dynamic object movement. Dynamic object movement is discussed properly in section 9, dedicated to scripting.

`Toggle switch`
`Default: OFF`

#### Style > Texture > Type

Type of provided texture used. If a variant is selected, that variant's value will be used for subsequent type selections.

`Dropdown`
`Default: Stone`
```
Options:
Default
Stone
Dirt
Wood
Grid
Grey
Roof
Flag
Grass
Check
Lines
Brick
Link
Liquid
Grain
Fabric
Tile
Metal
Sand
Snow
```

#### Style > Texture > Variant

Variant selection of a given type.

`Dropdown`
`Default: Default`
```
Options:
Default
Classic
Light
Voxel
Pebbles
Cobble
Light Pebbles
Light Cobble
```

#### Style > Texture > Asset ID

`String input`
`Default: 0`

#### Style > Texture > Stretch

Makes the entire (diffuse) texture image stretch all the way across each face.

`Toggle switch`
`Default: OFF`

#### Style > Texture > Scale

`Range input (float)`
`Range: 0-10`
`Default: 0`

#### Style > Texture > Force Transparency

Especially with custom textures, allows transparency for transparent pixels. Link textures automatically have this property enabled in the background.

`Toggle switch`
`Default: OFF`

#### Style > Texture > Rotation

Rotation of the texture in degrees, regardless of whether **Anti-radians** is enabled.

`Range input (float)`
`Range: 0-360`
`Default: 0`

#### Style > Texture > Offset > X

Allows alignment of the textures along the x and y axes.

`Range input (float)`
`Range: 0-1`
`Default: 0`

#### Style > Texture > Offset > Y

`Range input (float)`
`Range: 0-1`
`Default: 0`

#### Style > Texture > Movement > Speed

How fast the texture moves along the object. Negative values reverse direction.

`Range input (float)`
`Range: -20-20`
`Default: 0`

#### Style > Texture > Movement > Axis

Allows users to choose along what axis textures move along.

`Dropdown`
`Default: X`
```
Options:
X
Y
```

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

#### Style > Emissive

Allows the object to self-illuminate.

`Color input (hex)`
`Default: #000000`

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

#### Style > Cast Shadows

`Toggle switch`
`Default: ON`

#### Style > Receive Shadows

`Toggle switch`
`Default: ON`

#### Style > Force Render

`Toggle switch`
`Default: OFF`

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

#### Technical & Logic > Single Use

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Once Per Player

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

#### Technical & Logic > Destroy On Use

`Toggle switch`
`Default: OFF`

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

#### Technical & Logic > Trigger Event > Event

`Dropdown`
`Default: onShoot`
```
Options:
onShoot
onMelee
onDamage
onEnterObject
onDestroy
onRespawn
onTimer
onProjectile
onThrowingMelee
onPunch
onHoldMouse
onCollision
onStorageEquals
onStorageGreater
onStorageLesser
onInteractKey
onPlayerSpawn
onPlayerKill
onPlayerDie
onNukeStart
onNukeEnd
onExitObject
onCustomValEquals
onCustomValLesser
onGameStart
onObjectiveSwitch
onPlayerDamage
onCustomValGreater
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

#### Technical & Logic > Script #

`String input`

#### Render Faces > Right

`Toggle switch`
`Default: ON`

#### Render Faces > Left

`Toggle switch`
`Default: ON`

#### Render Faces > Top

`Toggle switch`
`Default: ON`

#### Render Faces > Bottom

`Toggle switch`
`Default: ON`

#### Render Faces > Back

`Toggle switch`
`Default: ON`

#### Render Faces > Front

`Toggle switch`
`Default: ON`

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

