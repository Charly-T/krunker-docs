const fs = require('fs');
const path = require('path');

// Allow taking JSON completely from a file provided as the first argument, or fallback to data.json
const inputFile = process.argv[2] || 'data.json';
let inputData = {};

try {
    const rawData = fs.readFileSync(path.resolve(__dirname, inputFile), 'utf8');
    inputData = JSON.parse(rawData);
} catch (error) {
    console.error(`Error reading or parsing ${inputFile}:`, error.message);
    process.exit(1);
}

// Prop descriptions extracted from section-2.md.
// Keys match the generated prop path without the root object name (e.g. "Style > Texture > Type").
// Empty string means the prop exists but has no written description yet.
const descriptions = {
    // --- Shared top-level props ---
    "Visible": "Determines if the object is rendered.",
    "Collidable": "Determines if the player can collide with the object.",
    "Complex Collisions": "Allows consideration of rotation and complex model shape in collision calculations. Consider that player movement is different when this property is enabled, and use of this setting is not performant. (See 1.3.4 and 1.3.5 for more information.)",
    "Bullet Collisions": "Determines if bullets interact with the object. **Collidable** must be enabled for this to have an effect.",
    "AI Collisions": "Determines if AI entities collide with the object. AI is discussed in section 8.",
    "Penetrable": "Determines how much damage reduction this object effects to fired bullets. If set to zero, bullets will not pass through. Knives and crossbow bolts are a different type of projectile and cannot penetrate regardless of this property. Requires bullet collisions.\n\nIf a bullet passes through an object with both **Bullet Collisions** and **Penetrable** set to something other than zero and hits another player, the bonus \"wallbang\" will be applied for a default of 25 extra score.",
    "Wall Jumpable": "Determines if players can walljump and wallgrind on an object.",
    "Can Grapple": "Determines if grapples can connect with an object. Requires **Bullet Collisions** to be ON. Grapple collisions align with the simple collision box and not complex collisions.",
    "Can Impulse": "Allows impulse weapons to propel players off an object.",
    "Border": "Borders extend 500 units above the cube's top side, and allow bullets, but not players, through. They are useful for preventing unwanted player access to odd places, and are extensively used in rotation (pub) maps. Be mindful that 500 units is not infinite and if you have differently-leveled borders, or other structures nearby, players can make their way over the borders. Borders do not rotate with normal object rotation, and complex collision usage will disable the border altogether.",
    "Show On Minimap": "Enables minimap visibility.",
    "Step Sound": "Selection for the sound the player makes while walking on the object.",
    "Dynamic": "Enables dynamic object movement. Dynamic object movement is discussed properly in section 9, dedicated to scripting.",
    "Direction": "Determines what direction the front of the ladder faces.",
    // --- Transform (position/rotation/size are direct object children in data.json) ---
    "Position": "Location of the object in Cartesian coordinates. Positive Y is in the up direction. X and Z location defines the *center* and the Y location defines the bottom.",
    "Rotation": "Rotation about each Cartesian axis. The Y rotation, for example, allows users to rotate an object laying on the XZ plane (a horizontal surface). Consider 1.3.4 and be mindful of using nonzero rotation with collidable objects.",
    "Size": "Scale of the object.",
    // --- Style > Texture ---
    "Style > Texture > Type": "Type of provided texture used. If a variant is selected, that variant's value will be used for subsequent type selections.",
    "Style > Texture > Variant": "Variant selection of a given type.",
    "Style > Texture > Asset ID": "",
    "Style > Texture > Stretch": "Makes the entire (diffuse) texture image stretch all the way across each face.",
    "Style > Texture > Scale": "",
    "Style > Texture > Force Transparency": "Especially with custom textures, allows transparency for transparent pixels. Link textures automatically have this property enabled in the background.",
    "Style > Texture > Rotation": "Rotation of the texture in degrees, regardless of whether **Anti-radians** is enabled.",
    "Style > Texture > Offset > X": "Allows alignment of the textures along the x and y axes.",
    "Style > Texture > Offset > Y": "",
    "Style > Texture > Movement > Speed": "How fast the texture moves along the object. Negative values reverse direction.",
    "Style > Texture > Movement > Axis": "Allows users to choose along what axis textures move along.",
    "Style > Texture > Frame Animation > Frame Count": "",
    "Style > Texture > Frame Animation > Frame Speed": "",
    // --- Style (siblings of texture in data.json) ---
    "Style > Encoding": "",
    "Style > Color": "Base/diffuse color.",
    "Style > Emissive": "Allows the object to self-illuminate.",
    "Style > Opacity": "Lowering this property allows translucence.",
    "Style > Shading": "Enables shading. Disable if a flat look is preferred.",
    "Style > Fog": "Disabling allows an object to show through fog setting. Useful for background deco and luminescent objects.",
    "Style > Render Side": "Determines whether the side rendered is the outside (front/default), inside (back), or both (double).",
    // --- Technical & Logic ---
    "Technical & Logic > Destructible": "Allows triggers to destroy this object. Disables some optimization, so using too many objects with this property enabled may be detrimental to performance.",
    "Technical & Logic > Start Destroyed": "Does not spawn the object at the beginning of a game.",
    "Technical & Logic > Spawn Chance": "Pair with **Destructible** and **Start Destroyed** to give objects a certain chance to spawn. As with other properties, 0% chance is actually 100%.",
    "Technical & Logic > Health": "Once this amount of damage is incurred, the object will be destroyed. This is useful for interactive barriers and spleef-type maps.",
    "Technical & Logic > Respawn > Timer (s)": "After destroyed, will be recreated according to this time.",
    "Technical & Logic > Respawn > Random": "Random respawn time, very small range (under 10 seconds, exact range unknown).",
    "Technical & Logic > Interface > ID": "Interface ID is used to identify dynamic objects and targets for trigger actions.",
    // --- Render Faces ---
    "Render Faces > Right": "",
    "Render Faces > Left": "",
    "Render Faces > Top": "",
    "Render Faces > Bottom": "",
    "Render Faces > Back": "",
    "Render Faces > Front": "",
};

function capitalize(str) {
    return str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

function processNode(name, node, path = []) {
    let md = '';
    const currentPath = [...path, capitalize(name)];
    
    // Check if it's a leaf node with "type"
    if (node && typeof node === 'object' && node.type) {
        // Strip the root object name from the header (e.g. "Cube > Visible" → "Visible")
        const propPath = currentPath.slice(1).join(' > ');
        md += `#### ${propPath}\n\n`;

        const description = descriptions[propPath];
        if (description) {
            md += `${description}\n\n`;
        }
        
        const defStr = node.default !== undefined 
            ? (typeof node.default === 'boolean' ? (node.default ? 'ON' : 'OFF') : node.default)
            : '';

        switch (node.type) {
            case 'checkbox':
                md += `\`Toggle switch\`\n${defStr !== '' ? `\`Default: ${defStr}\`\n` : ''}\n`;
                break;
            case 'number':
                if (node.min !== undefined && node.max !== undefined) {
                    md += `\`Range input (float)\`\n\`Range: ${node.min}-${node.max}\`\n${defStr !== '' ? `\`Default: ${defStr}\`\n` : ''}\n`;
                } else {
                    md += `\`Number input (float)\`\n${defStr !== '' ? `\`Default: ${defStr}\`\n` : ''}\n`;
                }
                break;
            case 'select':
                md += `\`Dropdown\`\n`;
                if (defStr !== '') {
                    md += `\`Default: ${defStr}\`\n`;
                } else if (node.options && node.options.length > 0) {
                    md += `\`Default: ${node.options[0]}\`\n`;
                }
                if (node.options && node.options.length > 0) {
                    md += `\`\`\`\nOptions:\n`;
                    node.options.forEach(opt => md += `${opt}\n`);
                    md += `\`\`\`\n`;
                }
                md += `\n`;
                break;
            case 'color':
                md += `\`Color input (hex)\`\n${defStr !== '' ? `\`Default: ${defStr}\`\n` : ''}\n`;
                break;
            case 'input':
                md += `\`String input\`\n${defStr !== '' ? `\`Default: ${defStr}\`\n` : ''}\n`;
                break;
            case 'vector3':
                md += `\`Number input (float)\`\n${defStr !== '' ? `\`Default: ${defStr}\`\n` : '\`Default: 0, 0, 0\`\n'}\n`;
                break;
            default:
                md += `\`${node.type}\`\n\n`;
                break;
        }
        return md;
    }
    
    // It's not a leaf, recurse
    if (path.length === 0) {
        // Root object (e.g. "Cube", "Ladder")
        md += `### ${capitalize(name)}\n\n`;
    } else {
        // Non-leaf group inside an object (e.g. "Style", "Style > Texture", "Technical & Logic")
        const groupPath = currentPath.slice(1).join(' > ');
        md += `#### ${groupPath}\n\n`;
    }
    
    for (const key in node) {
        // Always pass currentPath so nested props accumulate their full path
        md += processNode(key, node[key], currentPath);
    }
    
    return md;
}

function generateMarkdownFiles(data) {
    for (const rootKey in data) {
        const mdContent = processNode(rootKey, data[rootKey]);
        const fileName = `${rootKey}.md`;
        fs.writeFileSync(path.resolve(__dirname, fileName), mdContent, 'utf8');
        console.log(`Markdown generated to ${fileName}`);
    }
}

generateMarkdownFiles(inputData);
