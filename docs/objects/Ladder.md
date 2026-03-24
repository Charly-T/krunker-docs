### Ladder

#### Visible

Determines if the object is rendered.

`Toggle switch`
`Default: ON`

#### Collidable

Determines if the player can collide with the object.

`Toggle switch`
`Default: ON`

#### Direction

Determines what direction the front of the ladder faces.

`Range input (float)`
`Range: 0-3`
`Default: 0`

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

#### Style > Texture > Type

Type of provided texture used. If a variant is selected, that variant's value will be used for subsequent type selections.

`Dropdown`
`Default: Wood`
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
Classic Alt
Modern
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

#### Style > Shading

Enables shading. Disable if a flat look is preferred.

`Toggle switch`
`Default: ON`

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

