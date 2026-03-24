### Krum Machine

#### Border

Borders extend 500 units above the cube's top side, and allow bullets, but not players, through. They are useful for preventing unwanted player access to odd places, and are extensively used in rotation (pub) maps. Be mindful that 500 units is not infinite and if you have differently-leveled borders, or other structures nearby, players can make their way over the borders. Borders do not rotate with normal object rotation, and complex collision usage will disable the border altogether.

`Toggle switch`
`Default: OFF`

#### Technical & Logic > Cost

`Range input (float)`
`Range: 1-50000`
`Default: 1`

#### Position

Location of the object in Cartesian coordinates. Positive Y is in the up direction. X and Z location defines the *center* and the Y location defines the bottom.

`Number input (float)`
`Default: 0, 0, 0`

#### Rotation

Rotation about each Cartesian axis. The Y rotation, for example, allows users to rotate an object laying on the XZ plane (a horizontal surface). Consider 1.3.4 and be mindful of using nonzero rotation with collidable objects.

`Number input (float)`
`Default: 0, 0, 0`

