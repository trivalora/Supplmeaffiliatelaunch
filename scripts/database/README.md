# Database Scripts

DSLD (Dietary Supplement Label Database) setup and querying.

## Scripts

- **init-database.ts** - Initialize SQLite database
- **import-dsld-to-sqlite.ts** - Import DSLD data into database
- **query-dsld.ts** - Query DSLD database

## Usage

```bash
# Initialize database
npx tsx database/init-database.ts

# Import DSLD data
npx tsx database/import-dsld-to-sqlite.ts

# Query database
npx tsx database/query-dsld.ts <product_name>
```

## Database Location

The SQLite database is created at: `products.db`
