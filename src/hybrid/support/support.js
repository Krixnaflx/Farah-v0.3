// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr



const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Get the support server invite link'),

    name: 'support',
    aliases: [],
    description: 'Get the support server invite link',

    async execute(interactionOrMessage) {
        const config = require('../../config');
        return interactionOrMessage.reply(config.SUPPORT_SERVER);
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