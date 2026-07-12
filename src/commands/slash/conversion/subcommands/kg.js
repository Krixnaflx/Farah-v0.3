// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr



const {
  ContainerBuilder,
  TextDisplayBuilder,
  SeparatorBuilder,
  SeparatorSpacingSize,
  MessageFlags,
} = require('discord.js');
const emojis = require('../../../../emojis.json');

module.exports = {
  name: 'kg',
  description: 'Convert kilograms to pounds',
  
  async execute(interaction) {
    const kilograms = interaction.options.getNumber('kilograms');
    
    if (kilograms < 0) {
      const container = new ContainerBuilder().setAccentColor(0x2B2D31)
        .addTextDisplayComponents(
          new TextDisplayBuilder().setContent(`${emojis.error} Kilograms cannot be negative!`)
        );
      return interaction.reply({ 
        components: [container], 
        flags: MessageFlags.IsPersistent | MessageFlags.IsComponentsV2,
        ephemeral: true
      });
    }

    const pounds = kilograms * 2.20462262185;
    
    const container = new ContainerBuilder().setAccentColor(0x2B2D31)
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(`**Kilograms to Pounds**`)
      )
      .addSeparatorComponents(
        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true)
      )
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          `${emojis.arrow} **${kilograms} kg** = **${pounds.toFixed(2)} lb**`
        )
      );

    return interaction.reply({
      components: [container],
      flags: MessageFlags.IsPersistent | MessageFlags.IsComponentsV2
    });
  },
};

/**
 * Project: Farah
 * Author: Krixnaflx
 * Organization: Farah Development
 * GitHub: https://github.com/Krixnaflx
 * License: Custom
 * © 2026-30 Farah Development. All rights reserved.
 */