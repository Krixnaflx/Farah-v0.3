// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr



const botLogger = require('../lib/botLogger');

module.exports = {
    name: 'guildDelete',

    async execute(guild, client) {
        botLogger.logGuildLeave(guild, client).catch(() => {});
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