



module.exports = {
    name: 'reactionroles',
    description: 'Show reaction roles commands',
    aliases: ['rr'],
    async execute(message, args) {
        if (!args || !args.length) {
            return require('../../lib/helpMenu').sendHelp('reactionroles', message);
        }
        const hybrid = require('../hybrid/reactionroles/reactionroles');
        if (hybrid && hybrid.execute) {
            return hybrid.execute(message, args);
        }
        return require('../../lib/helpMenu').sendHelp('reactionroles', message);
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