### Environment Zone

#### Environment > Sky

`Dropdown`
`Default: Solid`
```
Options:
Solid
Gradient
```

#### Environment > Ambient > Sound

`Dropdown`
`Default: Default`
```
Options:
Default
City
Desert
Market
Scary
Storm
Purgatory
Black Market
Tomb
Adventure
Sea
Facility
Spooky
Festive
```

#### Environment > Ambient > Custom Sound ID

`String input`
`Default: 0`

#### Environment > Ambient > Fade Time

`Range input (float)`
`Range: 0-10`
`Default: 0`

#### Environment > Ambient > Intensity

`Range input (float)`
`Range: 0.1-3`
`Default: 1`

#### Environment > Ambient > Color

`Color input (hex)`
`Default: #97a0a8`

#### Environment > Light > Color

`Color input (hex)`
`Default: #f2f8fc`

#### Environment > Light > Distance

`Range input (float)`
`Range: 10-5000`
`Default: 500`

#### Environment > Light > Intensity

`Range input (float)`
`Range: 0.1-3`
`Default: 1.3`

#### Environment > Light > Angle > X

`Range input (float)`
`Range: 0-360`
`Default: 90`

#### Environment > Light > Angle > Y

`Range input (float)`
`Range: 0-360`
`Default: 54`

#### Environment > Shadows > Resolution

`Range input (float)`
`Range: 128-4096`
`Default: 1024`

#### Environment > Shadows > Distance

`Range input (float)`
`Range: 128-4096`
`Default: 1200`

#### Environment > Weather > Fog > Color

`Color input (hex)`
`Default: #8d9aa0`

#### Environment > Weather > Fog > Distance

`Range input (float)`
`Range: 0-15000`
`Default: 2000`

#### Environment > Render > ToneMapping

`Dropdown`
`Default: NoToneMapping`
```
Options:
NoToneMapping
LinearToneMapping
ReinhardToneMapping
CineonToneMapping
ACESFilmicToneMapping
```

#### Environment > Render > ToneMapping Exposure

`Range input (float)`
`Range: 0-10`
`Default: 1`

#### Environment > Render > Output Encoding

`Dropdown`
`Default: Default`
```
Options:
Default
sRGBEncoding
LinearEncoding
```

#### Environment > Render > Physically Correct Lights

`Toggle switch`
`Default: OFF`

#### Color

`Color input (hex)`
`Default: #dce8ed`

#### Color > Top

`Color input (hex)`
`Default: #74a4b9`

#### Color > Middle

`Color input (hex)`
`Default: #dce8ed`

#### Color > Bottom

`Color input (hex)`
`Default: #dce8ed`

#### Cloud Texture

`Toggle switch`
`Default: OFF`

#### Emissive

`Color input (hex)`
`Default: #ffffff`

#### Emissive Asset ID

`String input`
`Default: 0`

#### Speed

`Range input (float)`
`Range: -20-20`
`Default: 0`

#### Axis

`Dropdown`
`Default: X`
```
Options:
X
Y
```

#### Asset ID

`String input`
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

