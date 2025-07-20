const axios = require('axios');
const logger = require('../utils/logger');
require('dotenv').config();

async function sendToERP(order) {
  try {
    const res = await axios.post(process.env.ERP_API_URL, order);
    logger.info(`Order ${order.erp_order_id} sent to ERP`);
    return res.data;
  } catch (err) {
    logger.error(`Error sending to ERP: ${err.message}`);
    throw err;
  }
}

module.exports = { sendToERP };
