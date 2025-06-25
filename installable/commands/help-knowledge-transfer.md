Display the following comprehensive help information for the Claude Knowledge Transfer system to the user:

```
📚 CLAUDE KNOWLEDGE TRANSFER - HELP

A revolutionary system for preserving context across Claude Code's automatic compaction.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 AVAILABLE COMMANDS

/project:help-knowledge-transfer     - Show this help message
/project:initiate-knowledge-transfer - Save context before compaction (2-4% usage)
/project:retrieve-knowledge-transfer - Restore context after compaction
/project:check-context               - Verify context restoration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 QUICK START WORKFLOW

1. When you see context warning (~96% capacity):
   /project:initiate-knowledge-transfer

2. After auto-compaction occurs:
   /project:retrieve-knowledge-transfer

3. Verify restoration worked:
   /project:check-context

4. Continue exactly where you left off!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 REVOLUTIONARY PARALLEL APPROACH

Traditional Method (Sequential):
  • Used 15-20% of context
  • Required execution at 80% capacity
  • Read files back causing pollution
  • Sequential file generation

NEW Parallel Method (Default):
  • Uses only 2-4% of context ✨
  • Safe even at 96-97% capacity ✨
  • Never reads files (no pollution) ✨
  • Generates all 6 files simultaneously ✨
  • Each sub-agent gets fresh 200k tokens ✨

This means 16-17% MORE development time before needing to transfer!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📁 KNOWLEDGE FILE STRUCTURE

The system creates exactly 6 files in .claude-knowledge/:

📄 PROJECT_CONTEXT.md        - Problem, environment, blockers
📊 ARCHITECTURE.mermaid      - Visual system design
📋 PROGRESS_TRACKER.md       - Tasks completed/in-progress
📝 IMPLEMENTATION_PLAN.md    - Future work roadmap
🔍 INVESTIGATION_FINDINGS.md - Solutions and learnings
👀 REVIEW_FEEDBACK.md        - Quality and optimization notes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 COMMAND DETAILS

➤ /project:initiate-knowledge-transfer
  Purpose: Saves your entire project context before auto-compaction
  When: At ~96% capacity (you'll see a warning)
  What: Creates 6 knowledge files using parallel sub-agents
  Usage: Just run the command - no parameters needed

➤ /project:retrieve-knowledge-transfer
  Purpose: Restores your project context after compaction
  When: First thing after Claude Code restarts
  What: Reads all 6 files and restores complete understanding
  Usage: Run immediately after compaction

➤ /project:check-context
  Purpose: Quick verification of context understanding
  When: To confirm Claude understands the project state
  What: Shows current problem, tasks, and next steps
  Usage: Run anytime to verify context

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 BEST PRACTICES

1. Trust the Process - Sub-agents handle everything automatically
2. Commit Knowledge - Include .claude-knowledge/ in git
3. Customize Templates - Edit .claude/templates/claude-knowledge-transfer/
4. Stay Calm at 95% - You can safely continue to 96-97%
5. Let Git Handle History - All versions tracked automatically

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❓ TROUBLESHOOTING

No knowledge base found?
  → Run /project:initiate-knowledge-transfer first
  → Check parent directories for .claude-knowledge/

Context seems incomplete?
  → Run /project:check-context to verify
  → Check git history: git log -- .claude-knowledge/

Commands not found?
  → Ensure you ran: npx claude-knowledge-transfer
  → Check .claude/commands/ directory exists

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 MORE INFORMATION

• Documentation: README.md in project root
• Quick Start: .claude/claude-knowledge-transfer/QUICK_START.md
• Templates: .claude/templates/claude-knowledge-transfer/
• Configuration: .claude/claude-knowledge-transfer/config.json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remember: The goal is to make context management TRANSPARENT so you can focus on coding!
```