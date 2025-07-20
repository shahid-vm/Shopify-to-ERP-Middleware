const express = require('express');
const cors = require('cors');
const { getOrders } = require('./services/shopifyService');
const { sendToERP } = require('./services/erpService');
const logger = require('./utils/logger.js');

const app = express();
app.use(cors());
app.use(express.json());

let syncedOrders = [];

app.get('/sync-orders', async (req, res) => {
  try {
    const orders = await getOrders();
    const results = [];

    for (const order of orders) {
      const response = await sendToERP(order);
      results.push(order);
    }

    syncedOrders = results;
    res.status(200).json({ message: 'Orders synced', orders: results });
  } catch (err) {
    logger.error(err.message);
    res.status(500).json({ error: 'Sync failed' });
  }
});

app.get('/synced-orders', (req, res) => {
  res.json(syncedOrders);
});

app.listen(5000, () => {
  console.log('Middleware running on http://localhost:5000');
});
  