// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr

module.exports = {
    name: 'close',
    description: 'Close the current ticket',
    async execute(message, args) {
        const subcommand = require('../../hybrid/ticket/subcommands/close');
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