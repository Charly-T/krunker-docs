### Server Node

#### Tag

`String input`

#### Max Spread

`Range input (float)`
`Range: 0-50`
`Default: 0`

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

