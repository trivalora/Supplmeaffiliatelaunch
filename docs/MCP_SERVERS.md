# Model Context Protocol (MCP) Servers Configuration

**Last Updated:** December 2024  
**Location:** `~/.config/Code/User/mcp.json`

## Overview

This project uses Model Context Protocol (MCP) servers to provide GitHub Copilot with enhanced context and capabilities for development.

## Installed MCP Servers

### 1. **postgres-supabase** (Production Database)

**Purpose:** Direct access to production Supabase PostgreSQL database

**Configuration:**

```json
{
  "command": "mcp-server-postgres",
  "args": [
    "postgresql://postgres.rdraqlnxypwlhkhngyjk:pEkpoj-hovsif-4cofba@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
  ],
  "type": "stdio"
}
```

**Capabilities:**

- Query production database (schema: `api`)
- Access to 5 tables: supplements, products, retailers, prices, glossary_terms
- Read-only queries recommended
- Use for data exploration and API development

**Tables:**

- `api.supplements` (17 rows)
- `api.products` (1,691 rows)
- `api.retailers` (7 rows)
- `api.prices` (11,837 rows)
- `api.glossary_terms` (197 rows)

**Example Queries:**

```sql
-- List all supplements
SELECT * FROM api.supplements;

-- Search products
SELECT * FROM api.products WHERE name ILIKE '%vitamin d%';

-- Get glossary terms
SELECT slug, term, definition FROM api.glossary_terms LIMIT 10;
```

---

### 2. **postgres-retailer-prices** (Local Development)

**Purpose:** Local PostgreSQL database for price scraping development

**Configuration:**

```json
{
  "command": "mcp-server-postgres",
  "args": ["postgresql://roxyjune@localhost:5432/retailer_prices"],
  "type": "stdio"
}
```

**Capabilities:**

- Local development database
- Testing scraping scripts
- Price data staging before Supabase upload

---

### 3. **filesystem**

**Purpose:** Access to project files across multiple workspaces

**Configuration:**

```json
{
  "command": "mcp-server-filesystem",
  "args": [
    "/Users/roxyjune/Desktop/trivalora/retailer-price-scraping",
    "/Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch"
  ],
  "type": "stdio"
}
```

**Capabilities:**

- Read/write files in both workspaces
- File search across projects
- Directory listing and navigation
- Useful for coordinating between scraping and web app

**Directories:**

1. `retailer-price-scraping` - Python scripts for product data collection
2. `affiliate-launch` - Next.js web application (current project)

---

### 4. **github**

**Purpose:** GitHub API access for repository management

**Configuration:**

```json
{
  "command": "mcp-server-github",
  "args": [],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": ""
  },
  "type": "stdio"
}
```

**Capabilities:**

- Search GitHub repositories
- Read repository contents
- Create issues and PRs
- Manage branches
- Read code from external repositories

**Repository:**

- Owner: `trivalora`
- Repo: `Supplmeaffiliatelaunch`
- Branch: `main`

---

### 5. **pylance** (Python Language Support)

**Purpose:** Python code analysis and IntelliSense for migration scripts

**Configuration:**

```json
{
  "command": "npx",
  "args": ["-y", "@vscode/mcp-python-server"],
  "type": "stdio"
}
```

**Capabilities:**

- Python syntax checking
- Import analysis
- Code validation for scripts in `scripts/` directory
- Environment management
- Dependency detection

**Use Cases:**

- Validating migration scripts (`.mjs` files with Python logic)
- Analyzing data pipeline scripts
- Testing scraping utilities

---

## MCP Server Workflows

### Database Operations

**Query Supabase Production Data:**

```
Use postgres-supabase MCP to:
1. Explore database schema
2. Test API query logic
3. Validate data integrity
4. Debug production issues
```

**Local Development:**

```
Use postgres-retailer-prices MCP to:
1. Test scraping scripts locally
2. Stage data before upload
3. Develop new scrapers
```

### Cross-Workspace Development

**Coordinating Scraping & Web App:**

```
Use filesystem MCP to:
1. Check scraping output files
2. Validate CSV/JSON data
3. Copy utilities between projects
4. Update shared configuration
```

### Repository Management

**GitHub Operations:**

```
Use github MCP to:
1. Search for code patterns
2. Reference external libraries
3. Create deployment issues
4. Manage release branches
```

### Python Script Validation

**Script Analysis:**

```
Use pylance MCP to:
1. Validate migration scripts
2. Check import dependencies
3. Analyze Python utilities
4. Debug script errors
```

---

## Setup Instructions

### Initial Setup

1. **Install MCP Servers:**

```bash
# PostgreSQL server
npm install -g mcp-server-postgres

# Filesystem server
npm install -g mcp-server-filesystem

# GitHub server
npm install -g mcp-server-github

# Pylance server (auto-installed via npx)
```

2. **Configure in VS Code:**

   - Location: `~/.config/Code/User/mcp.json` (macOS/Linux)
   - Location: `%APPDATA%/Code/User/mcp.json` (Windows)

3. **Restart VS Code:**
   - Reload window to activate MCP servers
   - Check GitHub Copilot status

### Verification

**Test PostgreSQL Connection:**

```bash
# Test Supabase connection
psql "postgresql://postgres.rdraqlnxypwlhkhngyjk:pEkpoj-hovsif-4cofba@aws-0-us-east-1.pooler.supabase.com:6543/postgres"

# Run test query
SELECT count(*) FROM api.supplements;
```

**Test Filesystem Access:**

```bash
# Verify directories exist
ls /Users/roxyjune/Desktop/trivalora/retailer-price-scraping
ls /Users/roxyjune/Desktop/trivalora/suppl/affiliate-launch
```

**Test GitHub Access:**

```bash
# Verify GitHub token (if configured)
curl -H "Authorization: token YOUR_TOKEN" https://api.github.com/user
```

---

## Security Considerations

### Credentials in MCP Config

**⚠️ IMPORTANT:** MCP config file contains sensitive credentials:

- Supabase database password
- GitHub personal access token (if configured)

**Best Practices:**

1. **Never commit** `mcp.json` to version control
2. **Use environment variables** where possible (future enhancement)
3. **Rotate credentials** if exposed
4. **Limit database permissions** (read-only for MCP access recommended)

### Database Access

**Supabase Connection:**

- Uses connection pooler (port 6543)
- Service role key has full access (use carefully)
- Prefer read-only queries via MCP
- Use Supabase dashboard for writes

**Recommended:**

```sql
-- ✅ SAFE - Read-only queries
SELECT * FROM api.glossary_terms WHERE slug = 'rct';

-- ⚠️ CAUTION - Writes (prefer Supabase dashboard)
INSERT INTO api.glossary_terms (...) VALUES (...);

-- ❌ DANGER - Never drop/truncate via MCP
DROP TABLE api.glossary_terms;  -- DON'T DO THIS!
```

---

## Troubleshooting

### MCP Server Not Loading

**Symptoms:**

- Copilot doesn't have enhanced context
- Database queries don't work
- File operations limited

**Solutions:**

1. Check `mcp.json` syntax (valid JSON)
2. Verify server commands are installed
3. Restart VS Code
4. Check VS Code Developer Tools console

### PostgreSQL Connection Errors

**Symptoms:**

- "Connection refused"
- "Authentication failed"
- "Database does not exist"

**Solutions:**

1. Verify connection string
2. Check network connectivity
3. Confirm database is running
4. Test credentials manually

### Filesystem Access Issues

**Symptoms:**

- "Permission denied"
- "Directory not found"

**Solutions:**

1. Verify paths are absolute
2. Check directory permissions
3. Ensure directories exist
4. Restart VS Code

---

## Future Enhancements

### Planned Additions

1. **Environment Variable Support:**

   ```json
   {
     "args": ["${env:DATABASE_URL}"]
   }
   ```

2. **Additional MCP Servers:**

   - `mcp-server-supabase` - Dedicated Supabase MCP (when available)
   - `mcp-server-vercel` - Deployment management
   - `mcp-server-sentry` - Error tracking integration

3. **Custom MCP Server:**
   - Supplement-specific context
   - DSLD database queries
   - Product recommendation logic

### Configuration Management

**Goal:** Sync MCP config across team members

**Options:**

1. Shared `.vscode/mcp.json` in project (without credentials)
2. Setup script to generate personal MCP config
3. Documentation for team onboarding

---

## References

- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [MCP Server PostgreSQL](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres)
- [MCP Server Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)
- [MCP Server GitHub](https://github.com/modelcontextprotocol/servers/tree/main/src/github)
- [VS Code MCP Python Server](https://github.com/microsoft/vscode-python-tools-extension-template)

---

**Maintained By:** Suppl.me Development Team  
**Support:** Check GitHub Copilot documentation or project docs
