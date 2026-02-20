# Respira for WordPress Documentation

Official documentation for [Respira for WordPress](https://respira.press) - the WordPress MCP plugin that enables AI-assisted site editing with Cursor, Claude Code, and Windsurf.

## Live Documentation

📚 **[docs.respira.press](https://docs.respira.press)**

## About Respira for WordPress

Respira for WordPress is the only WordPress MCP with page builder support. It connects your AI coding assistant to your WordPress site for safe, natural-language editing.

### Key Features

- **11 Page Builder Support**: Divi, Elementor, Bricks, Oxygen, Gutenberg, WPBakery, Beaver Builder, Brizy, Visual Composer, Thrive Architect, Breakdance
- **Duplicate-First Safety**: AI edits copies, you approve before changes go live
- **60+ MCP Tools**: Complete WordPress management via AI
- **No SSH Required**: Works on any WordPress hosting
- **Built-in Analysis**: SEO, performance, Core Web Vitals, AEO

### Supported AI Tools

- [Cursor](https://cursor.com)
- [Claude Code](https://claude.ai)
- [Windsurf](https://codeium.com/windsurf)
- Any MCP-compatible AI assistant

## Documentation Structure

```
├── introduction.mdx      # Getting started guide
├── installation.mdx      # Plugin and MCP server installation
├── configuration.mdx     # AI assistant configuration
├── usage.mdx            # How to use Respira effectively
├── prompts.mdx          # Example prompts and workflows
├── api-reference.mdx    # Complete API endpoint reference
├── troubleshooting.mdx  # Common issues and solutions
├── mcp-install.mdx      # MCP install link generator
├── changelog.mdx        # Version history and releases
└── documentation.json   # Documentation site configuration
```

## Quick Start

### 1. Install the WordPress Plugin

Download from [respira.press/releases](https://respira.press/releases)

### 2. Generate an API Key

Go to **Respira → API Keys** in WordPress Admin

### 3. Run the Setup Wizard

```bash
npx @respira/wordpress-mcp-server --setup
```

### 4. Start Editing

Use natural language in your AI assistant:

```
List all pages on my WordPress site
```

## MCP Server

The MCP server is published on npm:

- **Package**: [@respira/wordpress-mcp-server](https://www.npmjs.com/package/@respira/wordpress-mcp-server)
- **Version**: 2.0.8

### CLI Options

```bash
npx @respira/wordpress-mcp-server --setup   # Interactive setup wizard
npx @respira/wordpress-mcp-server --list    # List configured sites
npx @respira/wordpress-mcp-server --test    # Test connection
npx @respira/wordpress-mcp-server --help    # Show help
```

## Documentation Hosting

This documentation is hosted on [Documentation.ai](https://documentation.ai) and published at [docs.respira.press](https://docs.respira.press).

## Contributing

For documentation improvements:

1. Edit the `.mdx` files in this repository
2. Push changes to trigger automatic deployment
3. Changes appear on docs.respira.press

## Links

- **Website**: [respira.press](https://respira.press)
- **Documentation**: [docs.respira.press](https://docs.respira.press)
- **npm Package**: [@respira/wordpress-mcp-server](https://www.npmjs.com/package/@respira/wordpress-mcp-server)
- **Support**: [word@respira.press](mailto:word@respira.press)

## License

Respira for WordPress is a commercial product. See [respira.press](https://respira.press) for licensing information.