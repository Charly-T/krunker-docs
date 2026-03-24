### Christmastree

#### Visible

Determines if the object is rendered.

`Toggle switch`
`Default: ON`

#### Collidable

Determines if the player can collide with the object.

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

#### Model Scale

`Range input (float)`
`Range: 0.01-100`
`Default: 2`

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

#### Style > Shading

Enables shading. Disable if a flat look is preferred.

`Toggle switch`
`Default: ON`

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

#### Technical & Logic > Interface > ID

Interface ID is used to identify dynamic objects and targets for trigger actions.

`Range input (float)`
`Range: 0-2000`
`Default: 0`

#### Position

Location of the object in Cartesian coordinates. Positive Y is in the up direction. X and Z location defines the *center* and the Y location defines the bottom.

`Number input (float)`
`Default: 0, 0, 0`

#### Rotation

Rotation about each Cartesian axis. The Y rotation, for example, allows users to rotate an object laying on the XZ plane (a horizontal surface). Consider 1.3.4 and be mindful of using nonzero rotation with collidable objects.

`Number input (float)`
`Default: 0, 0, 0`

