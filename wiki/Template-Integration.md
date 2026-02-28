# [Tool] + Respira Integration

**One-line summary:** [What this integration enables]

**Difficulty:** Beginner / Intermediate / Advanced

**Prerequisites:**
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## What This Integration Does

[Explain the workflow enabled by combining these tools]

**Example use case:**
[Real-world scenario where this is useful]

## Setup

### 1. Install Required Tools

**[Tool Name]:**
```bash
[Installation command]
```

**Respira:**
See [official installation docs](https://respira.press/docs)

### 2. Configure MCP Servers

**For [Tool]:**

```json
{
  "mcpServers": {
    "[tool-name]": {
      "command": "[command]",
      "args": ["[args]"],
      "env": {
        "API_KEY": "YOUR_API_KEY"
      }
    }
  }
}
```

**For Respira:**

```json
{
  "mcpServers": {
    "respira-wordpress": {
      "command": "npx",
      "args": ["-y", "@respira/wordpress-mcp-server"],
      "env": {
        "WORDPRESS_SITE_URL": "https://yoursite.com",
        "WORDPRESS_API_KEY": "respira_your_key"
      }
    }
  }
}
```

### 3. Test Connection

```bash
[Test commands]
```

Expected output:
```
[What success looks like]
```

## Workflow Examples

### Example 1: [Workflow Name]

**Scenario:** [What you're trying to accomplish]

**Prompt:**
```
[The actual prompt that orchestrates both tools]
```

**What happens:**
1. [Tool 1] does: [action]
2. [Tool 2] does: [action]
3. Result: [outcome]

### Example 2: [Another Workflow]

[Same structure as Example 1]

## Prompt Recipes

### Recipe 1: [Use Case]

```
[Copy-paste ready prompt]
```

**Use when:** [Scenario]

### Recipe 2: [Use Case]

```
[Copy-paste ready prompt]
```

**Use when:** [Scenario]

## Gotchas

**Issue:** [Common problem]
**Solution:** [How to avoid/fix]

**Issue:** [Another problem]
**Solution:** [Another fix]

## Real Examples

### Case Study 1: [Brief Title]

**Goal:** [What they wanted to achieve]
**Setup:** [Tools used]
**Result:** [Outcome]
**Time saved:** [Estimate]

[Link to full case study if available]

## Advanced Patterns

**For power users:**

[More complex orchestration examples]

## Related

- [Official docs for Tool]
- [Official docs for Respira](https://respira.press)
- [Related wiki page]
- [Relevant discussion](https://github.com/webmyc/community/discussions)

## Contributors

- [@username] - created (date)
- [@username] - added examples (date)

---

**Got another use case?** Edit this page and add it.
