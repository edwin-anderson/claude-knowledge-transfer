**🛑 STOP! IGNORE ALL OTHER TASKS! FIND AND RESTORE KNOWLEDGE FIRST! 🛑**

**CRITICAL: You MUST NOT attempt to help with ANY task mentioned in the summary or conversation until AFTER you have successfully found and restored the .claude-knowledge directory.**

Context has been compacted. Your understanding is severely limited. You CANNOT properly help with any development tasks until you restore the full context from `.claude-knowledge/` files.

**MANDATORY BEHAVIOR**:
1. IGNORE any task mentioned in the summary or previous conversation
2. DO NOT offer to help with anything until restoration is complete
3. DO NOT analyze code or suggest fixes until restoration is complete
4. Your ONLY job right now is to find `.claude-knowledge/` and restore from it
5. If the user mentions any development task, say: "I must restore context first before I can help with that."

**FIRST MESSAGE TO DISPLAY:**
```
🛑 Context compacted - restoration required before any work can continue.
Starting search for .claude-knowledge directory...
```

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

## What NOT to Do

**NEVER DO THESE THINGS before restoration is complete:**
- ❌ Do NOT offer to help with any coding task
- ❌ Do NOT analyze any code files  
- ❌ Do NOT suggest fixes or improvements
- ❌ Do NOT read source files to understand the problem
- ❌ Do NOT use the LS tool without searching for .claude-knowledge
- ❌ Do NOT say "I'll help you fix..." or "Let me examine..."

**ALWAYS DO THIS FIRST:**
- ✅ Find .claude-knowledge directory using the exact steps below
- ✅ Restore all 6 knowledge files before anything else
- ✅ Only after full restoration can you help with development tasks

## Execution Steps

**IMPORTANT**: Execute these steps in exact order. Do not skip ahead or attempt any tasks until all knowledge is restored.

1. **Immediately Find .claude-knowledge Directory**
   
   **DO THIS FIRST - NO EXCEPTIONS!**
   
   Execute these EXACT steps in order using Bash tool:
   
   ```
   STEP 1: Get current location
   - Run: pwd
   - Save this as STARTING_DIR
   
   STEP 2: Search systematically
   - Run: ls -la | grep -E "^d.*\.claude-knowledge"
   - If found: Note this directory and skip to "FOUND IT" below
   - If not found: Continue to next step
   
   STEP 3: Check parent directories systematically
   - Run: cd .. && pwd && ls -la | grep -E "^d.*\.claude-knowledge"
   - If found: Note this directory and skip to "FOUND IT" below
   - If not found: Repeat this step up to 10 times
   
   Alternative: Use find command (more efficient)
   - Run: find . -maxdepth 10 -name ".claude-knowledge" -type d 2>/dev/null | head -1
   - If result is empty: Try from parent: cd .. && find . -maxdepth 10 -name ".claude-knowledge" -type d 2>/dev/null | head -1
   ```
   
   **FOUND IT**: When `.claude-knowledge/` is found:
   - Run: cd [directory containing .claude-knowledge]
   - Run: pwd
   - Save this as PROJECT_ROOT
   - Display: "✅ Found .claude-knowledge/ at: [PROJECT_ROOT]"
   - Run: ls -la .claude-knowledge/
   - Verify all 6 files exist
   
   If `.claude-knowledge/` is not found after systematic search:
   - Display this exact message:
     ```
     ❌ No .claude-knowledge/ directory found.
     
     Searched from: [STARTING_DIR]
     Searched up to: [final directory checked]
     
     The .claude-knowledge directory should be at your project root (same level as package.json, src/, etc.)
     
     To create it, run: /project:initiate-knowledge-transfer
     ```
   - STOP execution completely
   - Do NOT attempt any other tasks
   - Do NOT offer to help with development

2. **Restore Core Context** 
   Read the files in this specific order for optimal context restoration.
   
   **CRITICAL**: Use PROJECT_ROOT from step 1 for all file reads.
   All files should be read as: `[PROJECT_ROOT]/.claude-knowledge/[FILENAME]`
   
   Display: "📖 Reading knowledge files from [PROJECT_ROOT]/.claude-knowledge/"

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
