// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr

const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  MessageFlags
} = require('discord.js');
const { createSession, buildBuilderMessage } = require('../../../lib/containerBuilderState');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('container')
    .setDescription('Build a fully customizable Components V2 container and send it to a channel')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .setDMPermission(false),

  async execute(interaction) {
    if (!interaction.guild) {
      return interaction.reply({
        content: 'This command can only be used inside a server.',
        flags: MessageFlags.Ephemeral
      });
    }

    const session = createSession(interaction.user.id, interaction.guild.id);
    const payload = buildBuilderMessage(session);

    await interaction.reply(payload);
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