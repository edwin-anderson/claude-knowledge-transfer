**IMMEDIATE PRIORITY: Restore full project context from knowledge files.**

Context has been compacted. Your current understanding is limited to a summary. Full context restoration from `.claude-knowledge/` files is required before attempting any project tasks.

**Critical Instructions**:
1. Do NOT attempt to continue any previous tasks until knowledge retrieval is complete
2. Current context is incomplete - full restoration will enable proper task continuation
3. Proceed directly to knowledge file retrieval without any other actions
4. All task suggestions or continuations must wait until after restoration

You are restoring project context from a standardized knowledge transfer package after Claude Code's automatic compaction. The knowledge files contain the complete context needed to continue work effectively.

**Note**: The parallel sub-agent approach (default) uses only 2-4% context to generate these files, allowing knowledge transfer even at 96-97% capacity. The files themselves are identical regardless of generation method.

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

**IMPORTANT**: Execute these steps in exact order. Do not skip ahead or attempt any tasks until all knowledge is restored.

1. **Immediately Verify Knowledge Base Exists**
   
   Execute this exact search algorithm using the LS tool:
   
   ```
   SEARCH ALGORITHM:
   1. Use LS tool to check current directory for .claude-knowledge/
   2. If not found:
      - Save current directory path with `pwd`
      - Use LS tool on parent directory (../)
      - Continue checking parent directories up to 10 levels
   3. When .claude-knowledge/ is found:
      - Note the absolute path where it was found
      - That directory is the project root
   ```
   
   Implementation steps:
   - Start: Check current directory with LS tool for `.claude-knowledge/`
   - If not found: Check `../` with LS tool
   - If not found: Check `../../` with LS tool
   - Continue up to 10 parent levels (`../../../../../../../../../../`)
   - Stop immediately when `.claude-knowledge/` is found
   
   If `.claude-knowledge/` is not found after checking 10 parent levels:
   - Display: "❌ No .claude-knowledge/ directory found in current project hierarchy."
   - Show: "Searched from [starting directory] up to [final directory checked]"
   - Tell user: "Run `/project:initiate-knowledge-transfer` first to create knowledge base."
   - STOP execution here
   
   If `.claude-knowledge/` is found:
   - Display: "✅ Found .claude-knowledge/ at: [absolute path]"
   - All subsequent file reads should use this discovered path
   - List all 6 expected knowledge files with their existence status
   - Proceed immediately to step 2

2. **Restore Core Context** 
   Read the files in this specific order for optimal context restoration.
   
   **CRITICAL**: Use the absolute path discovered in step 1 for all file reads.
   For example, if `.claude-knowledge/` was found at `/path/to/project/.claude-knowledge/`,
   then read files as `/path/to/project/.claude-knowledge/PROJECT_CONTEXT.md`

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
   
   **Only after all files are read and context is fully restored**, present a clear status using this exact format:

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
   
   **Only after displaying the restoration summary**, ask: "Context restored successfully. What would you like to do next?"
   
   **Smart suggestions based on PROGRESS_TRACKER.md:**
   - a) Continue with '[specific next task from PROGRESS_TRACKER]'
   - b) Re-run test '[test command]' to verify current state  
   - c) Review current implementation in [specific file]
   - d) Address blocker: '[specific blocker from PROJECT_CONTEXT]'
   - e) Start next phase: '[next phase from IMPLEMENTATION_PLAN]'

## Critical Success Factors

- **Retrieval First**: Never attempt any project tasks before completing full knowledge restoration
- **Immediate Understanding**: After restoration, demonstrate clear understanding by stating the main problem, approach, and next step
- **Specific Context**: Always reference exact file paths, line numbers, and commands
- **Continuity**: Seamlessly pick up where the previous session left off only AFTER restoration
- **Verification**: Confirm the restored context matches the actual current state

## Template Integration

The system reads from templates located in:
- `.claude/templates/claude-knowledge-transfer/[FILENAME].template.md` (project templates from npm package)

When restoring, understand the template structure to interpret the content correctly.

## Error Recovery

If restoration fails or context seems incomplete:
1. Check for archived sessions in `.claude-knowledge/archive/`
2. Try restoring from the most recent archive
3. Ask user to clarify any missing context
4. Suggest running `/project:initiate-knowledge-transfer` to create fresh context
