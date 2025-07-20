const express = require('express');
const app = express();

app.use(express.json());

app.post('/erp/orders', (req, res) => {
  console.log('ERP Received:', req.body);
  res.status(200).json({ status: 'success', order_id: req.body.erp_order_id });
});

app.listen(4000, () => console.log('Mock ERP running on http://localhost:4000'));
