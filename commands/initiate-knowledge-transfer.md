You are helping the user create a standardized knowledge transfer package to preserve their project context before Claude Code's automatic compaction.

## Standardized File Structure

The command will always create exactly these 6 files in `.claude-knowledge/`:

```
📁 .claude-knowledge/
├── 📄 PROJECT_CONTEXT.md           # Main project context and state
├── 📊 ARCHITECTURE.mermaid         # Visual system architecture
├── 📋 PROGRESS_TRACKER.md          # Task completion tracking
├── 📝 IMPLEMENTATION_PLAN.md       # Detailed implementation steps
├── 🔍 INVESTIGATION_FINDINGS.md    # Research results and findings
└── 👀 REVIEW_FEEDBACK.md           # Code review and optimization notes
```

## Execution Steps

1. **Create Knowledge Directory**
   - Create `.claude-knowledge/` directory if it doesn't exist
   - This is where the 6 knowledge files will be stored (not templates)

2. **Check for Existing Knowledge Base**
   - If `.claude-knowledge/` exists with previous files, create backup:
     - Create `.claude-knowledge/archive/session-[YYYY-MM-DD-HHMMSS]/`
     - Copy all current files to the archive
   - Ask user: "Found existing knowledge base. Is this a continuation of the same problem or something new?"

3. **Generate All 6 Standard Files**

   For each file, check for templates in this order:
   1. `.claude/templates/claude-knowledge-transfer/[filename].template.md` (project templates from npm package)
   2. Built-in structure (fallback if no templates found)

   **Always create these exact files:**

   **📄 PROJECT_CONTEXT.md**
   - Session metadata (timestamp, problem identifier)
   - Current problem statement and solution approach
   - Critical files with exact paths and purposes
   - Environment setup (versions, dependencies, env vars)
   - Test commands that work
   - Current blockers and key decisions made

   **📊 ARCHITECTURE.mermaid**
   - System component diagram in Mermaid format
   - Data flow visualization
   - Key dependencies and integration points
   - Component relationships

   **📋 PROGRESS_TRACKER.md**
   - Completed tasks with specific outcomes
   - Current task in progress (exact file and line if applicable)
   - Failed attempts and reasons
   - Immediate next steps in priority order

   **📝 IMPLEMENTATION_PLAN.md**
   - Remaining work broken into phases
   - Specific files that need modification
   - Testing strategy and validation steps
   - Risk assessment and mitigation

   **🔍 INVESTIGATION_FINDINGS.md**
   - Working solutions with code snippets
   - Failed approaches and specific failure reasons
   - Important codebase discoveries
   - External resources and references

   **👀 REVIEW_FEEDBACK.md**
   - Code quality observations
   - Performance optimization opportunities
   - Technical debt identified
   - Security considerations and recommendations

4. **Populate Files with Current Context**
   - Analyze the current project state
   - Examine recent git commits, file changes, and test results
   - Interview user for missing context if needed
   - Fill templates with specific, actionable information

5. **Setup Git Integration**
   - Ensure `.gitignore` includes:
     ```
     .claude-knowledge/archive/
     .claude-knowledge/tmp/
     ```
   - Do NOT ignore the main `.claude-knowledge/` files - these should be committed

6. **Provide Summary**
   Show the user:
   ```
   ✅ Knowledge transfer package created with 6 standard files:
   
   📄 PROJECT_CONTEXT.md - [Brief description of current problem]
   📊 ARCHITECTURE.mermaid - [Brief description of system]
   📋 PROGRESS_TRACKER.md - [Current task status]
   📝 IMPLEMENTATION_PLAN.md - [Next X phases planned]
   🔍 INVESTIGATION_FINDINGS.md - [Key discoveries noted]
   👀 REVIEW_FEEDBACK.md - [Code quality notes]
   
   💡 Recommended next steps:
   1. git add .claude-knowledge/
   2. git commit -m "Knowledge snapshot: [brief description]"
   3. Continue development until compaction
   4. After compaction: /project:retrieve-knowledge-transfer
   ```

## Key Principles

- **Consistency**: Always create the same 6 files with the same names
- **Specificity**: Include exact file paths, line numbers, and commands
- **Completeness**: Capture both successes and failures for learning
- **Actionability**: Focus on what to do next, not just what was done
- **Template-driven**: Use templates from `templates/` folder when available

## Template Usage

When templates exist, use them as the structure and fill in the specific content. Templates are located in:
- `.claude/templates/claude-knowledge-transfer/[FILENAME].template.md` (project templates from npm package)

If no templates are found, the system uses built-in structure definitions.
