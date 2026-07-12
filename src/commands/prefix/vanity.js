


module.exports = {
    name: 'vanity',
    description: 'Show vanity roles commands',
    aliases: [],
    async execute(message, args) {
        if (!args || !args.length) {
            return require('../../lib/helpMenu').sendHelp('vanity', message);
        }
        const hybrid = require('../hybrid/vanityroles/vanityroles');
        if (hybrid && hybrid.execute) {
            return hybrid.execute(message, args);
        }
        return require('../../lib/helpMenu').sendHelp('vanity', message);
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