



module.exports = {
    name: 'giveaway',
    description: 'Show giveaway commands',
    aliases: ['gw'],
    async execute(message, args) {
        if (!args || !args.length) {
            return require('../../lib/helpMenu').sendHelp('giveaway', message);
        }
        const hybrid = require('../hybrid/giveaway/giveaway');
        if (hybrid && hybrid.execute) {
            return hybrid.execute(message, args);
        }
        return require('../../lib/helpMenu').sendHelp('giveaway', message);
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