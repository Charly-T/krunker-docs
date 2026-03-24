### Light Bar

#### Visible

Determines if the object is rendered.

`Toggle switch`
`Default: ON`

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

#### Style > Mimic Sprite

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

