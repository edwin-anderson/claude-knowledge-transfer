# Claude Knowledge Transfer System

A standardized, project-scoped solution for preserving context across Claude Code's automatic compaction at 95% capacity. This npm package automatically installs commands and templates into your project for seamless team collaboration.

## Overview

Claude Code automatically compacts its context when reaching 95% capacity, which can result in loss of important project context. This knowledge transfer system provides a project-scoped, standardized approach to:

- **Save** your context before compaction in a consistent 6-file format
- **Restore** your context after compaction with full continuity  
- **Verify** the restoration worked correctly
- **Archive** important milestones for future reference
- **Share** context consistency across your entire development team

## Quick Start

### Installation (Project-Scoped)

Install the system in any project using npx (no global installation needed):

```bash
# Install in your current project
npx claude-knowledge-transfer

# Or add to your project dependencies for team sharing
npm install --save-dev claude-knowledge-transfer
```

This automatically creates a `.claude/` directory in your project with:
- 4 Claude Code commands (accessible as `/project:command-name`)
- 6 standardized templates for consistent knowledge files
- Project configuration and quick start guide

### Basic Workflow

```bash
# 1. Save context before compaction (at ~90% capacity)
/project:initiate-knowledge-transfer

# 2. After compaction, restore context  
/project:retrieve-knowledge-transfer

# 3. Verify context was restored correctly
/project:check-context

# 4. Archive important milestones (optional)
/project:archive-knowledge
```

## Available Commands

Four essential project-scoped commands for complete context management:

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `/project:initiate-knowledge-transfer` | Create standardized context package | At ~90% capacity |
| `/project:retrieve-knowledge-transfer` | Restore context from package | After compaction |
| `/project:check-context` | Verify restoration worked | After retrieve |
| `/project:archive-knowledge` | Save milestone snapshots | Major breakthroughs |

## Standardized Knowledge Structure

The system always creates exactly these 6 files in `.claude-knowledge/`:

```
📁 .claude-knowledge/
├── 📄 PROJECT_CONTEXT.md           # Main project context and state
├── 📊 ARCHITECTURE.mermaid         # Visual system architecture
├── 📋 PROGRESS_TRACKER.md          # Task completion tracking
├── 📝 IMPLEMENTATION_PLAN.md       # Detailed implementation steps
├── 🔍 INVESTIGATION_FINDINGS.md    # Research results and findings
└── 👀 REVIEW_FEEDBACK.md           # Code review and optimization notes
```

### File Purposes

- **PROJECT_CONTEXT.md**: Session metadata, problem statement, critical files, environment setup, test commands, and current blockers
- **ARCHITECTURE.mermaid**: Visual system diagram showing components, data flow, and integration points
- **PROGRESS_TRACKER.md**: Completed tasks, current work, failed attempts, and next steps in priority order
- **IMPLEMENTATION_PLAN.md**: Remaining work phases, file modifications needed, testing strategy, and risk assessment
- **INVESTIGATION_FINDINGS.md**: Working solutions, failed approaches, codebase discoveries, and external resources
- **REVIEW_FEEDBACK.md**: Code quality observations, performance opportunities, technical debt, and security considerations

## Project Structure After Installation

```
📁 your-project/
├── 📁 .claude/
│   ├── 📁 commands/
│   │   ├── 📄 initiate-knowledge-transfer.md
│   │   ├── 📄 retrieve-knowledge-transfer.md
│   │   ├── 📄 check-context.md
│   │   └── 📄 archive-knowledge.md
│   ├── 📁 templates/
│   │   ├── 📄 PROJECT_CONTEXT.template.md
│   │   ├── 📊 ARCHITECTURE.mermaid.template
│   │   ├── 📋 PROGRESS_TRACKER.template.md
│   │   ├── 📝 IMPLEMENTATION_PLAN.template.md
│   │   ├── 🔍 INVESTIGATION_FINDINGS.template.md
│   │   └── 👀 REVIEW_FEEDBACK.template.md
│   ├── 📄 config.json
│   └── 📄 QUICK_START.md
├── 📁 .claude-knowledge/           # Created by first use
└── 📄 .gitignore                   # Updated automatically
```

## Template System

The system uses a two-tier template system for maximum flexibility:

1. **Project Defaults**: `.claude/templates/` (installed by npm package)
2. **Project Customizations**: `.claude-knowledge/templates/` (your customizations)

### Customizing Templates

To customize templates for your project:

```bash
# Copy default templates to customization directory
mkdir -p .claude-knowledge/templates
cp .claude/templates/* .claude-knowledge/templates/

# Edit templates for your project's specific needs
vim .claude-knowledge/templates/PROJECT_CONTEXT.template.md
```

The system automatically prioritizes your customizations over the defaults.

## Team Collaboration

### Sharing with Your Team

Since everything is project-scoped, sharing is automatic:

```bash
# Setup in your project
npx claude-knowledge-transfer
git add .claude/
git commit -m "Add Claude Knowledge Transfer system"
git push

# Team members get it automatically
git pull
# Commands are immediately available as /project:* commands
```

### Project Onboarding

New team members get instant access:

```bash
# New developer joins the project
git clone [your-repo]
cd [project]
/project:retrieve-knowledge-transfer
# Instantly understand current project state
```

## Daily Development Workflow

### Morning Routine
```bash
# Check current context status
claude
/project:check-context

# If context is unclear, restore it
/project:retrieve-knowledge-transfer
```

### During Development
```bash
# When Claude warns about approaching capacity (~90%)
/project:initiate-knowledge-transfer

# Continue working until compaction occurs...
```

### After Compaction
```bash
# Immediately restore your context
/project:retrieve-knowledge-transfer

# Verify everything looks correct
/project:check-context
```

### Major Milestones
```bash
# After completing significant features
/project:archive-knowledge
# Claude will ask if this is worth preserving as a milestone
```

## Git Integration

The knowledge files are designed to be committed with your code:

```bash
# Save knowledge with your code changes
/project:initiate-knowledge-transfer
git add .claude-knowledge/
git commit -m "Knowledge snapshot: implementing user authentication"
git push

# Team member can pull and restore context
git pull
/project:retrieve-knowledge-transfer
```

The system automatically updates your `.gitignore` to include:
```gitignore
# Claude Knowledge Transfer
.claude-knowledge/archive/
.claude-knowledge/tmp/
```

## Package.json Integration

For consistent team setup, add to your `package.json`:

```json
{
  "scripts": {
    "setup-claude": "npx claude-knowledge-transfer",
    "postinstall": "npx claude-knowledge-transfer"
  },
  "devDependencies": {
    "claude-knowledge-transfer": "^1.0.0"
  }
}
```

This ensures every `npm install` sets up the knowledge transfer system.

## Troubleshooting

### Commands Not Found?
```bash
# Re-run the setup
npx claude-knowledge-transfer

# Check .claude directory exists
ls -la .claude/
```

### Context Not Restored?
```bash
# First, verify what's available
/project:check-context

# If unclear, try retrieving again
/project:retrieve-knowledge-transfer
```

### Missing Knowledge Files?
```bash
# Check for archived sessions
ls -la .claude-knowledge/archive/

# Check git history
git log -- .claude-knowledge/

# Look for recent backups
find . -name "*.bak" -path "*/.claude-knowledge/*"
```

### Template Issues?
```bash
# Verify template locations
ls -la .claude/templates/
ls -la .claude-knowledge/templates/

# Check template syntax
head .claude/templates/PROJECT_CONTEXT.template.md
```

## Advanced Usage

### Multiple Projects
Each project gets its own independent setup:
```bash
cd project-a
npx claude-knowledge-transfer
# Commands work in project-a

cd ../project-b  
npx claude-knowledge-transfer
# Separate commands for project-b
```

### Custom Project Templates
Create project-specific template standards:
```bash
# In your project template repository
npx claude-knowledge-transfer
# Customize .claude/templates/ for your organization
# Include .claude/ in your project template
```

### CI/CD Integration
```yaml
# .github/workflows/setup.yml
- name: Setup Claude Knowledge Transfer
  run: npx claude-knowledge-transfer
```

## System Requirements

- **Node.js**: 12.0.0 or higher
- **Claude Code**: Any recent version
- **Git**: For version control and team sharing

## Best Practices

1. **Save Early**: Run knowledge transfer at ~90% capacity, not 95%
2. **Commit Everything**: Include both `.claude/` and `.claude-knowledge/` in git
3. **Team Consistency**: Customize templates for your project's specific needs
4. **Regular Verification**: Use check-context to ensure continuity
5. **Project-Scoped**: Always use `/project:` commands, not `/user:` commands

## Migration from User-Scoped

If you were using a user-scoped version:

```bash
# In each project
npx claude-knowledge-transfer

# Update command usage:
# /user:initiate-knowledge-transfer → /project:initiate-knowledge-transfer
# /user:retrieve-knowledge-transfer → /project:retrieve-knowledge-transfer
# /user:check-context → /project:check-context
# /user:archive-knowledge → /project:archive-knowledge
```

## Contributing

This system is designed to be simple and standardized. If you have suggestions for improvements, please ensure they maintain the core principle of consistency - always the same 6 files with the same purposes.

## License

MIT License - Use freely in personal and commercial projects.
