# Claude Knowledge Transfer - Simple Workflows

This document provides practical workflows for the 4 essential commands.

## Table of Contents

1. [Basic Daily Workflow](#basic-daily-workflow)
2. [Milestone Management](#milestone-management)
3. [Team Collaboration](#team-collaboration)
4. [Troubleshooting](#troubleshooting)

## Basic Daily Workflow

### Starting Your Day

```bash
# Open Claude Code
claude

# Check if you have existing context
/user:check-context

# If context is unclear or missing:
/user:retrieve-knowledge-transfer
```

### During Development

Claude will warn you when approaching capacity. When you see the warning:

```bash
# Save your context immediately
/user:initiate-knowledge-transfer

# Continue working until compaction happens...

# After compaction, restore:
/user:retrieve-knowledge-transfer

# Verify everything is restored:
/user:check-context
```

### End of Day

If you're close to capacity:
```bash
/user:initiate-knowledge-transfer
git add .claude-knowledge/
git commit -m "EOD: Knowledge snapshot"
```

## Milestone Management

### Completing a Major Feature

```bash
# After finishing important work
/user:archive-knowledge

# Claude will ask:
# "Is this a milestone archive? (major breakthrough/feature complete)"
# Answer: yes

# This preserves the state permanently
```

### Before Risky Changes

```bash
# Archive current stable state
/user:archive-knowledge
# Mark as milestone: yes

# Make risky changes...

# If things go wrong, you can restore from archive
```

## Team Collaboration

### Sharing Context with Team

```bash
# Person A: Save and share
/user:initiate-knowledge-transfer
git add .claude-knowledge/
git commit -m "Context: Implementing user authentication"
git push

# Person B: Receive and restore
git pull
claude
/user:retrieve-knowledge-transfer
/user:check-context
```

### Handoff Between Developers

```bash
# Developer finishing their part
/user:initiate-knowledge-transfer
# Add notes about current status in commit
git add .claude-knowledge/
git commit -m "Handoff: Auth system 80% complete, see PROGRESS_TRACKER.md"
git push

# Next developer
git pull
/user:retrieve-knowledge-transfer
# Check PROGRESS_TRACKER.md for where to continue
```

## Troubleshooting

### "Context unclear" after retrieve

```bash
# First, try retrieving again
/user:retrieve-knowledge-transfer

# Still unclear? Check for archives
ls -la .claude-knowledge/archive/

# Restore from a specific archive if needed
# (Claude will find and restore from archives)
```

### Knowledge files not found

```bash
# Check git history
git log -- .claude-knowledge/

# Restore from git
git checkout HEAD~1 -- .claude-knowledge/
/user:retrieve-knowledge-transfer
```

### Forgot to save before compaction

```bash
# Check if auto-save happened
ls -la .claude-knowledge/

# If not, check git history for last good state
git log --oneline -- .claude-knowledge/
```

## Best Practices

### 1. Save Early, Save Often
Don't wait until 95%. Save at 90% or even earlier for important work.

### 2. Use Descriptive Messages
When prompted for session descriptions, be specific:
- ❌ "working on stuff"  
- ✅ "implementing JWT authentication for user API"

### 3. Archive Strategically
Not every save needs to be an archive. Archive only:
- Major feature completions
- Before risky refactoring
- Stable states you might need to return to

### 4. Git Integration is Key
Always commit your `.claude-knowledge/` directory:
```bash
# Make it a habit
/user:initiate-knowledge-transfer && git add .claude-knowledge/ && git commit -m "Context: [what you're working on]"
```

## Quick Reference

| Situation | Command |
|-----------|---------|
| Starting work | `/user:check-context` |
| At 90% warning | `/user:initiate-knowledge-transfer` |
| After compaction | `/user:retrieve-knowledge-transfer` |
| Verify restoration | `/user:check-context` |
| Major milestone | `/user:archive-knowledge` |

## Emergency Commands

```bash
# "I'm lost and nothing makes sense"
/user:retrieve-knowledge-transfer
/user:check-context

# "I need to see what knowledge exists"
ls -la .claude-knowledge/
cat .claude-knowledge/PROJECT_CONTEXT.md

# "I need yesterday's context"
git checkout yesterday -- .claude-knowledge/
/user:retrieve-knowledge-transfer
```

Remember: These 4 commands handle everything you need. Keep it simple!
