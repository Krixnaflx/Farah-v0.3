// © Author: Krixnaflx
// https://discord.gg/BWRS8VHFYr



const config = require('../config');
const emojis = require('../emojis.json');

class Logger {
    constructor() {
        this.logChannel = null;
    }

        setLogChannel(channel) {
        this.logChannel = channel;
    }

        async sendLog(logMessage) {
        if (!this.logChannel) return;

        try {
            await this.logChannel.send(logMessage);
        } catch (error) {
            console.error('Failed to send log to Discord channel:', error);
        }
    }

        consoleLog(type, message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${type}] ${message}`);
    }
}

const logger = new Logger();
module.exports = logger;

/**
 * Project: Farah
 * Author: Krixnaflx
 * Organization: Farah Development
 * GitHub: https://github.com/Krixnaflx
 * License: Custom
 * © 2026-30 Farah Development. All rights reserved.
 */