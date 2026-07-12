
module.exports = {
    name: 'botprofile',
    description: 'Show bot profile commands',
    aliases: [],
    async execute(message, args) {
        if (!args || !args.length) {
            return require('../../lib/helpMenu').sendHelp('botprofile', message);
        }
        return require('../../lib/helpMenu').sendHelp('botprofile', message);
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