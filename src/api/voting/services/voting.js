'use strict';

/**
 * voting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::voting.voting');
