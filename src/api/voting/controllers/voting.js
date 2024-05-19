'use strict';

/**
 * voting controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::voting.voting');
