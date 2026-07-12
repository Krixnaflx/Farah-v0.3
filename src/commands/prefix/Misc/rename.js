// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr

module.exports = {
    name: 'rename',
    description: 'Rename the current ticket',
    async execute(message, args) {
        const subcommand = require('../../hybrid/ticket/subcommands/rename');
        return subcommand.execute(message, args);
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