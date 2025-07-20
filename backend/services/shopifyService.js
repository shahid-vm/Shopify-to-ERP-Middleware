const axios = require('axios');
require('dotenv').config();

const shopify = axios.create({
  baseURL: `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2025-07`,
  headers: {
    'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
});

async function getOrders() {
  try {
    const res = await shopify.get('/orders.json?status=any&limit=20');
    return res.data.orders.map(order => ({
      erp_order_id: order.id,
      customer_name: `${order.customer?.first_name ?? ''} ${order.customer?.last_name ?? ''}`,
      items: order.line_items.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      total: order.total_price,
      status: order.financial_status,
    }));
  } catch (err) {
    console.error('Error fetching orders:', err.message);
    return [];
  }
}

module.exports = { getOrders };
