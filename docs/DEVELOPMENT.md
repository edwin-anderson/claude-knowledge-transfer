# Development Documentation

## Project Structure

This package follows a clear separation between npm package management and installable content:

- `installable/` - Everything that gets copied to user projects
- `bin/` - Installation and setup scripts
- Root level - Package metadata, documentation, and configuration

## Development Workflow

### Making Changes

1. **Commands**: Edit files in `installable/commands/`
2. **Templates**: Edit files in `installable/templates/`
3. **Setup Logic**: Edit `bin/setup.js`
4. **Documentation**: Edit `README.md` and other root-level docs

### Testing Changes

```bash
# Test the setup script locally
node bin/setup.js

# Test in a different directory
cd /tmp/test-project
npx /path/to/claude-knowledge-transfer

# Test after npm pack
npm pack
cd /tmp/test-project
npx claude-knowledge-transfer-1.1.0.tgz
```

### Release Process

1. Update version in `package.json`
2. Update version in `installable/docs/config.json.template`
3. Update `CHANGELOG.md`
4. Commit changes
5. Create git tag
6. Publish to npm

## Architecture

### Setup Script Flow

1. `index.js` - Entry point, calls setup
2. `bin/setup.js` - Main setup logic
3. Copies from `installable/` to `.claude/`
4. Creates customized config and docs from templates

### File Organization

```
installable/
├── commands/           # Claude Code commands
├── templates/          # Knowledge file templates  
└── docs/              # Project-specific documentation templates
```

### Template System

- Commands reference templates at `.claude/templates/`
- Templates are copied directly during installation
- No subdirectories or complex paths
- Users can edit templates directly after installation
