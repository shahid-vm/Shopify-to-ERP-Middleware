# Shopify to ERP Middleware

## How to Run
1. Clone repo
2. Set `.env` values
3. Run mock ERP server: `node mock-erp.js`
4. Run middleware: `node index.js`
5. Hit `http://localhost:3000/sync-orders` to sync

## Sample Output
```json
{
  "erp_order_id": 123456789,
  "customer_name": "John Doe",
  "items": [{ "title": "Cream", "quantity": 2, "price": "12.99" }],
  "total": "25.98",
  "status": "paid"
}
