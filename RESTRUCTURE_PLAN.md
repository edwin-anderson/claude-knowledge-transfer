# Claude Knowledge Transfer - Restructure Plan

## Current Problems
1. Package files mixed with installable content
2. Unclear separation between npm package and project files
3. Template structure doesn't match what setup.js expects
4. Missing clear organization of what gets copied vs what stays in package

## Proposed New Structure

```
claude-knowledge-transfer/                    # NPM Package Root
├── 📦 Package Management
│   ├── package.json                         # NPM package definition
│   ├── README.md                            # Package documentation
│   ├── CHANGELOG.md                         # Version history
│   └── LICENSE                              # MIT license
│
├── 🔧 Installation Scripts  
│   └── bin/
│       ├── setup.js                         # Main installation script
│       └── test.js                          # Package testing
│
├── 📁 installable/                          # Everything that gets copied to projects
│   ├── commands/                            # Claude Code commands
│   │   ├── initiate-knowledge-transfer.md
│   │   ├── retrieve-knowledge-transfer.md
│   │   ├── check-context.md
│   │   └── archive-knowledge.md
│   │
│   ├── templates/                           # Template files  
│   │   ├── PROJECT_CONTEXT.template.md
│   │   ├── ARCHITECTURE.mermaid.template
│   │   ├── PROGRESS_TRACKER.template.md
│   │   ├── IMPLEMENTATION_PLAN.template.md
│   │   ├── INVESTIGATION_FINDINGS.template.md
│   │   └── REVIEW_FEEDBACK.template.md
│   │
│   └── docs/                               # Project-specific docs
│       ├── QUICK_START.md.template         # Gets customized per project
│       └── config.json.template            # Gets customized per project
│
├── 🧪 Development & Testing
│   ├── test/                               # Package tests
│   ├── examples/                           # Example projects
│   └── docs/                              # Development documentation
│
└── 📋 Documentation  
    ├── WORKFLOWS.md                        # Workflow documentation
    └── SUMMARY.md                          # Project summary
```

## Installation Target Structure (What gets created in projects)

```
your-project/
├── 📁 .claude/                             # Claude Code configuration
│   ├── commands/                           # Project-scoped commands
│   │   ├── initiate-knowledge-transfer.md
│   │   ├── retrieve-knowledge-transfer.md  
│   │   ├── check-context.md
│   │   └── archive-knowledge.md
│   │
│   ├── templates/                          # Template files
│   │   ├── PROJECT_CONTEXT.template.md
│   │   ├── ARCHITECTURE.mermaid.template
│   │   ├── PROGRESS_TRACKER.template.md
│   │   ├── IMPLEMENTATION_PLAN.template.md
│   │   ├── INVESTIGATION_FINDINGS.template.md
│   │   └── REVIEW_FEEDBACK.template.md
│   │
│   ├── config.json                         # Claude configuration
│   └── QUICK_START.md                      # Project-specific guide
│
└── 📁 .claude-knowledge/                   # Created on first use
    ├── PROJECT_CONTEXT.md                  # Current session files
    ├── ARCHITECTURE.mermaid
    ├── PROGRESS_TRACKER.md
    ├── IMPLEMENTATION_PLAN.md
    ├── INVESTIGATION_FINDINGS.md
    ├── REVIEW_FEEDBACK.md
    ├── archive/                            # Archived sessions
    └── tmp/                                # Temporary files
```

## Key Improvements

1. **Clear Separation**: `installable/` directory contains only what gets copied to projects
2. **Logical Grouping**: Package management, installation scripts, and installable content are clearly separated
3. **Template Consistency**: Templates are directly in `installable/templates/` matching the installation path
4. **Simplified Setup**: Setup script just copies from `installable/` to `.claude/`
5. **Better Package Structure**: Standard npm package layout with clear purposes
6. **Future Expansion**: Room for tests, examples, and additional documentation

## Migration Steps

1. Create new `installable/` directory structure
2. Move current `commands/` and `templates/` into `installable/`
3. Update `setup.js` to copy from `installable/` instead of package root
4. Move package docs to root level
5. Update `package.json` files array to point to new structure
6. Test installation in a sample project
