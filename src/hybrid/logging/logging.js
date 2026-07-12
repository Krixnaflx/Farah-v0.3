// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr



const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('logging')
        .setDescription('Manage server logging settings')
        .addSubcommand(subcommand =>
            subcommand
                .setName('setup')
                .setDescription('Setup logging channels for different events')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('reset')
                .setDescription('Reset all logging settings')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('config')
                .setDescription('View current logging configuration')
        ),

    name: 'logging',
    aliases: ['logs', 'log'],
    description: 'Manage server logging settings',

    async execute(interactionOrMessage, args = []) {
        const isSlash = interactionOrMessage.isCommand?.();
        let subcommand;

        if (isSlash) {
            subcommand = interactionOrMessage.options.getSubcommand();
        } else {
            subcommand = args[0]?.toLowerCase();
            args = args.slice(1);
        }

        if (!subcommand || !['setup', 'reset', 'config'].includes(subcommand)) {
            return require('../../lib/helpMenu').sendHelp('logging', interactionOrMessage);
        }

        const subcommandFile = require(`./subcommands/${subcommand}`);
        return subcommandFile.execute(interactionOrMessage, args);
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