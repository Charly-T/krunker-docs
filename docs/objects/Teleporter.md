### Teleporter

#### Direction

Determines what direction the front of the ladder faces.

`Range input (float)`
`Range: 0-3`
`Default: 0`

#### Force Direction

`Toggle switch`
`Default: OFF`

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

#### Technical & Logic > Node

`Dropdown`
`Default: Sending`
```
Options:
Sending
Receiving
Both
```

#### Technical & Logic > Channel

`Range input (float)`
`Range: 0-100`
`Default: 0`

#### Technical & Logic > Stop Momentum

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Use Active Checkpoint

`Toggle switch`
`Default: OFF`

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

