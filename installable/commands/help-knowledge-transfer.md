Display comprehensive help information for the Claude Knowledge Transfer system.

## Available Commands

Show the user these project-scoped commands:

```
📚 Claude Knowledge Transfer Commands:

/project:help-knowledge-transfer     - Show this help message
/project:initiate-knowledge-transfer - Save context before compaction (2-4% usage)
/project:retrieve-knowledge-transfer - Restore context after compaction
/project:check-context               - Verify context restoration
```

## Command Details

Provide detailed information for each command:

### 📦 /project:initiate-knowledge-transfer
**Purpose**: Saves your entire project context before Claude Code auto-compacts at 95%
**When to use**: When you see the context warning (can safely run at 96-97% capacity!)
**What it does**:
- Creates `.claude-knowledge/` directory
- Generates 6 standardized knowledge files using parallel sub-agents
- Uses only 2-4% of your context (revolutionary parallel approach)
- Archives existing knowledge if present

**Example**:
```
/project:initiate-knowledge-transfer
```

### 📥 /project:retrieve-knowledge-transfer  
**Purpose**: Restores your project context after auto-compaction
**When to use**: First thing after Claude Code compacts/restarts
**What it does**:
- Reads all 6 knowledge files in optimal order
- Restores complete project understanding
- Verifies environment matches saved state
- Offers smart continuation options

**Example**:
```
/project:retrieve-knowledge-transfer
```

### ✅ /project:check-context
**Purpose**: Quick verification of context understanding
**When to use**: To confirm Claude understands the project state
**What it does**:
- Summarizes current problem and approach
- Shows active task and next steps
- Lists test commands and critical files
- Indicates if full restoration needed

**Example**:
```
/project:check-context
```


## Knowledge File Structure

Explain the 6 standardized files created:

```
📁 .claude-knowledge/
├── 📄 PROJECT_CONTEXT.md        - Problem, environment, blockers
├── 📊 ARCHITECTURE.mermaid      - Visual system design
├── 📋 PROGRESS_TRACKER.md       - Tasks completed/in-progress
├── 📝 IMPLEMENTATION_PLAN.md    - Future work roadmap
├── 🔍 INVESTIGATION_FINDINGS.md - Solutions and learnings
└── 👀 REVIEW_FEEDBACK.md        - Quality and optimization notes
```

## Quick Start Workflow

Show the typical usage pattern:

```bash
# 1. When you see context warning (~96% capacity)
/project:initiate-knowledge-transfer

# 2. After auto-compaction occurs
/project:retrieve-knowledge-transfer

# 3. Verify restoration worked
/project:check-context

# 4. Continue exactly where you left off!
```

## 🚀 Revolutionary Parallel Approach

Highlight the key innovation:

**Traditional Approach** (Sequential):
- Used 15-20% of context
- Required execution at 80% capacity
- Read files back causing pollution
- Sequential file generation

**New Parallel Approach** (Default):
- Uses only 2-4% of context
- Safe even at 96-97% capacity  
- Never reads files (no pollution)
- Generates all 6 files simultaneously
- Each sub-agent gets fresh 200k tokens

This means **16-17% more development time** before needing to transfer!

## Best Practices

1. **Trust the Process**: Sub-agents handle everything - no need to verify
2. **Commit Knowledge**: Include `.claude-knowledge/` in git for team sharing
3. **Customize Templates**: Edit `.claude/templates/claude-knowledge-transfer/`
4. **Stay Calm at 95%**: You can safely continue to 96-97% before transferring
5. **Let Git Handle History**: Knowledge files are tracked in git automatically

## Troubleshooting

**No knowledge base found**:
- Run `/project:initiate-knowledge-transfer` first
- Check parent directories for `.claude-knowledge/`
- Check if directory was renamed or moved

**Context seems incomplete after restore**:
- Run `/project:check-context` to verify
- Check git history: `git log -- .claude-knowledge/`
- Restore from git history if needed

**Commands not found**:
- Ensure you ran `npx claude-knowledge-transfer`
- Check `.claude/commands/` directory exists
- Commands are project-scoped (use `/project:` prefix)

## Additional Resources

- 📖 Full documentation: See README.md in project root
- 🚀 Quick start: `.claude/claude-knowledge-transfer/QUICK_START.md`
- 📝 Templates: `.claude/templates/claude-knowledge-transfer/`
- 🔧 Configuration: `.claude/claude-knowledge-transfer/config.json`

## Need More Help?

- The commands are self-documenting - just run them!
- Each command provides clear feedback and next steps
- Templates include helpful comments and structure

Remember: The goal is to make context management **transparent** so you can focus on coding!