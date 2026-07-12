


const path = require('path');
const fs = require('fs');

module.exports = {
    name: 'general',
    description: 'Show general commands',
    aliases: [],
    async execute(message, args) {
        if (!args || !args.length) {
            return require('../../lib/helpMenu').sendHelp('general', message);
        }
        const sub = args[0].toLowerCase();
        const subPath = path.join(__dirname, 'general', `${sub}.js`);
        if (fs.existsSync(subPath)) {
            return require(subPath).execute(message, args.slice(1));
        }
        return require('../../lib/helpMenu').sendHelp('general', message);
    }
};

/**
 * Project: Farah
* Author: Krixnaflx
 * Organization: Farah Devlopment
 * GitHub: https://github.com/Krixnaflx
 * License: Custom
 * © 2026 Farah Development. All rights reserved.
 */