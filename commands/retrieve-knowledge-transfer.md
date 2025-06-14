You are helping the user restore their project context from a standardized knowledge transfer package after Claude Code's automatic compaction.

## Expected File Structure

The system expects exactly these 6 files in `.claude-knowledge/`:

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

1. **Verify Knowledge Base Exists**
   - Check for `.claude-knowledge/` directory in current project
   - If not found, check these alternative locations:
     - `./archive/.claude-knowledge/`
     - Parent directories up to 2 levels
   - If still not found, tell user: "No knowledge base found. Run `/project:initiate-knowledge-transfer` first."
   - List all 6 expected knowledge files with their last modified times

2. **Restore Core Context** 
   Read the files in this specific order for optimal context restoration:

   **a) PROJECT_CONTEXT.md** (Read First - Essential Foundation)
   - Understand the main problem being solved
   - Identify all critical file paths and their purposes  
   - Note all test commands and environment requirements
   - Focus on the "Current Blockers" section
   - Extract session metadata and problem identifier

   **b) PROGRESS_TRACKER.md** (Read Second - Current State)
   - Identify the current "In Progress" task
   - Understand what was last completed successfully
   - Note the immediate next steps in priority order
   - Review any failed attempts to avoid repetition

   **c) ARCHITECTURE.mermaid** (Read Third - System Understanding)
   - Load the system architecture diagram
   - Understand component relationships and data flow
   - Identify key integration points and dependencies
   - Generate visual representation if tools are available

3. **Load Implementation Details**
   Read these files to understand the work plan:

   **d) IMPLEMENTATION_PLAN.md** (Read Fourth - Future Work)
   - Review remaining work phases
   - Identify specific files that need modification
   - Understand testing strategy and validation steps
   - Note risk assessments and mitigation plans

   **e) INVESTIGATION_FINDINGS.md** (Read Fifth - Learning Context)
   - Focus on "Working Solutions" first
   - Review failed approaches to avoid repeating mistakes
   - Note critical discoveries about the codebase
   - Reference external resources and documentation

   **f) REVIEW_FEEDBACK.md** (Read Last - Quality Context)
   - Review code quality observations
   - Note performance optimization opportunities
   - Understand technical debt and security considerations
   - Plan quality improvements

4. **Verify Current Environment State**
   - Run `git status` to check for uncommitted changes
   - Run `git branch --show-current` to verify branch
   - Execute the primary test command from PROJECT_CONTEXT.md
   - Check if the files mentioned as "in progress" still exist
   - Verify environment setup matches requirements

5. **Load Active Work Context**
   - Read the specific file mentioned as "in progress" in PROGRESS_TRACKER.md
   - If line number is specified, focus on that area
   - Load any test files mentioned in the context
   - Check for new files created since knowledge was saved
   - Compare current state with expected state

6. **Handle Missing or Corrupted Files**
   If any of the 6 standard files are missing:
   - Check `.claude-knowledge/archive/` for recent backups
   - Try `git log -- .claude-knowledge/` to find previous versions
   - Look for files with `.bak` extension
   - Report which files are missing and what context may be lost

7. **Provide Comprehensive Restoration Summary**
   
   Present a clear status using this exact format:

   ```
   📋 CONTEXT RESTORATION COMPLETE
   
   ✅ **Problem**: [One sentence description of what we're solving]
   📍 **Current Position**: [Specific task and file we're working on]  
   🎯 **Next Action**: [Exact next step to take]
   ⚠️ **Blockers**: [Any issues to be aware of]
   🔧 **Test Command**: [Command to verify progress]
   🏗️ **Architecture**: [Brief system overview]
   📊 **Progress**: [X/Y tasks completed, current phase]
   
   📁 **Critical Files**:
   - [file1]: [purpose]
   - [file2]: [purpose]
   
   🔍 **Key Findings**:
   - [finding1]
   - [finding2]
   ```

8. **Offer Smart Continuation Options**
   
   Ask: "Context restored successfully. What would you like to do next?"
   
   **Smart suggestions based on PROGRESS_TRACKER.md:**
   - a) Continue with '[specific next task from PROGRESS_TRACKER]'
   - b) Re-run test '[test command]' to verify current state  
   - c) Review current implementation in [specific file]
   - d) Address blocker: '[specific blocker from PROJECT_CONTEXT]'
   - e) Start next phase: '[next phase from IMPLEMENTATION_PLAN]'

## Critical Success Factors

- **Immediate Understanding**: After restoration, demonstrate clear understanding by stating the main problem, approach, and next step
- **Specific Context**: Always reference exact file paths, line numbers, and commands
- **Continuity**: Seamlessly pick up where the previous session left off
- **Verification**: Confirm the restored context matches the actual current state

## Template Integration

The system reads from templates located in:
- `.claude-knowledge/templates/[FILENAME].template.md` (user custom templates - optional)
- `.claude/templates/[FILENAME].template.md` (project defaults from npm package)

When restoring, understand the template structure to interpret the content correctly.

## Error Recovery

If restoration fails or context seems incomplete:
1. Check for archived sessions in `.claude-knowledge/archive/`
2. Try restoring from the most recent archive
3. Ask user to clarify any missing context
4. Suggest running `/project:initiate-knowledge-transfer` to create fresh context
