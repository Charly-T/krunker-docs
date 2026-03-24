### Cylinder

#### Visible

Determines if the object is rendered.

`Toggle switch`
`Default: ON`

#### Collidable

Determines if the player can collide with the object.

`Toggle switch`
`Default: ON`

#### Complex Collisions

Allows consideration of rotation and complex model shape in collision calculations. Consider that player movement is different when this property is enabled, and use of this setting is not performant. (See 1.3.4 and 1.3.5 for more information.)

`Toggle switch`
`Default: OFF`

#### Bullet Collisions

Determines if bullets interact with the object. **Collidable** must be enabled for this to have an effect.

`Toggle switch`
`Default: ON`

#### AI Collisions

Determines if AI entities collide with the object. AI is discussed in section 8.

`Toggle switch`
`Default: ON`

#### Penetrable

Determines how much damage reduction this object effects to fired bullets. If set to zero, bullets will not pass through. Knives and crossbow bolts are a different type of projectile and cannot penetrate regardless of this property. Requires bullet collisions.

If a bullet passes through an object with both **Bullet Collisions** and **Penetrable** set to something other than zero and hits another player, the bonus "wallbang" will be applied for a default of 25 extra score.

`Range input (float)`
`Range: 0-1`
`Default: 0`

#### Spin

`Range input (float)`
`Range: -20-20`
`Default: 0`

#### Open Ended

`Toggle switch`
`Default: OFF`

#### Radius Top

`Range input (float)`
`Range: 0-1`
`Default: 1`

#### Radius Bottom

`Range input (float)`
`Range: 0-1`
`Default: 1`

#### Sides

`Range input (float)`
`Range: 3-64`
`Default: 12`

#### Theta Start

`Range input (float)`
`Range: 0-360`
`Default: 0`

#### Theta Length

`Range input (float)`
`Range: 0.1-360`
`Default: 360`

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

#### Size

Scale of the object.

`Number input (float)`
`Default: 0, 0, 0`

