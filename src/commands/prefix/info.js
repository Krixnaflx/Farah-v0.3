


const path = require('path');
const fs = require('fs');

module.exports = {
    name: 'info',
    description: 'Show information commands',
    aliases: ['information'],
    async execute(message, args) {
        if (!args || !args.length) {
            return require('../../lib/helpMenu').sendHelp('info', message);
        }
        const sub = args[0].toLowerCase();
        const subPath = path.join(__dirname, 'information', `${sub}.js`);
        if (fs.existsSync(subPath)) {
            return require(subPath).execute(message, args.slice(1));
        }
        return require('../../lib/helpMenu').sendHelp('info', message);
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