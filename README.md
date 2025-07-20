# Shopify to ERP Middleware
**Step 1**: Create a Shopify Partner Account (if not already)
Go to https://partners.shopify.com
Sign in or create a Partner account
Create a development store under “Stores” (if you don’t have a live store)

Step 2: Create a Private App (for testing)
Login to your Shopify Admin Panel of your development store.
Navigate to:
Settings → Apps and sales channels → Develop apps
Click “Create an app”
Give it a name, e.g., ERP Sync App, and click Create app

**Step 3**: Configure Admin API Access
Click "Configure Admin API scopes"

Enable the following permissions:
read_orders
read_customers
read_products (optional)

**Click Save**

**Step 4:** Install the App
Once permissions are saved, click Install app in the top-right corner.
After installing, you’ll see:
Admin API Access Token (copy this, shown only once)
API Key
API Secret Key

**Step 5:** Fill in .env File in Backend

SHOPIFY_API_KEY=your_api_key_here
SHOPIFY_API_SECRET=your_secret_key_here
SHOPIFY_ACCESS_TOKEN=your_access_token_here
SHOPIFY_STORE_DOMAIN=yourstore.myshopify.com
ERP_API_URL=http://localhost:4000/erp/orders

** Replace:**
your_api_key_here: From the app screen

your_secret_key_here: From the app screen

your_access_token_here: From Admin API Access Token

yourstore.myshopify.com: Your development store domain, e.g., myteststore123.myshopify.com

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
