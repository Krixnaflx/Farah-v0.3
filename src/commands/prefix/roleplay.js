



const path = require('path');
const fs = require('fs');

module.exports = {
    name: 'roleplay',
    description: 'Show roleplay commands',
    aliases: ['rp'],
    async execute(message, args) {
        if (!args || !args.length) {
            return require('../../lib/helpMenu').sendHelp('roleplay', message);
        }
        const sub = args[0].toLowerCase();
        const subPath = path.join(__dirname, 'roleplay', `${sub}.js`);
        if (fs.existsSync(subPath)) {
            return require(subPath).execute(message, args.slice(1));
        }
        return require('../../lib/helpMenu').sendHelp('roleplay', message);
    }
};

/**
 * Project: Farah
 * Author: Krixnaflx
 * Organization: Farah Development
 * GitHub: https://github.com/Krixnaflx
 * License: Custom
 * © 2026-30 Farah Development. All rights reserved.
 */