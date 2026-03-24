### Sound Emitter

#### Sound > Type

`Dropdown`
`Default: nuke_0`
```
Options:
nuke_0
siren_0
explosion
fart_0
taunt_0
taunt_1
taunt_2
taunt_3
buy_0
buy_1
case_0
case_1
cheer_0
reward
store
tick_0
scare_0
cough_1
cough_2
taunt_4
ambient_1
ambient_2
ambient_3
ambient_4
ambient_5
ambient_6
ambient_7
ambient_8
beep_0
bo_plant
bo_diff
collect_1
bounce_0
headshot_0
hit_0
impact_0
jump_0
jump_1
land_0
punch_0
punch_1
slide_0
spray
step_0
step_1
step_2
whizz_0
whizz_1
gclick_0
pick_0
pick_1
build_0
break_wood
bhop_check
bhop_reset
gong_0
dragon_0
taunt_5
spray_1
stepwo_0
stepwo_1
stepwat_0
stepwat_1
stepsa_0
stepsa_1
stepsno_0
stepsno_1
stepsno_2
bounce_1
zap_0
jug_0
crit_0
melee_equip
scare_1
```

#### Sound > Asset ID

`String input`
`Default: 0`

#### Sound > Volume

`Range input (float)`
`Range: 0.05-2`
`Default: 1`

#### Sound > Rate

`Range input (float)`
`Range: 0.1-4`
`Default: 1`

#### Sound > Reference Distance

`Range input (float)`
`Range: 0-5000`
`Default: 0`

#### Sound > Distance Model

`Dropdown`
`Default: Inverse`
```
Options:
Inverse
Linear
Exponential
```

#### Sound > Roll-off

`Range input (float)`
`Range: 0-1`
`Default: 0`

#### Position

Location of the object in Cartesian coordinates. Positive Y is in the up direction. X and Z location defines the *center* and the Y location defines the bottom.

`Number input (float)`
`Default: 0, 0, 0`

#### Rotation

Rotation about each Cartesian axis. The Y rotation, for example, allows users to rotate an object laying on the XZ plane (a horizontal surface). Consider 1.3.4 and be mindful of using nonzero rotation with collidable objects.

`Number input (float)`
`Default: 0, 0, 0`

