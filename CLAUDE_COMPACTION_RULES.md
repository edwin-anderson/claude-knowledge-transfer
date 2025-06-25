# Claude Code Compaction Rules for Knowledge Transfer

**⚠️ CRITICAL: Copy this section to your project's CLAUDE.md file to get optimal performance from claude-knowledge-transfer.**

## Why This Matters

The claude-knowledge-transfer system uses a parallel sub-agent approach that should only consume 2-4% of context. However, without proper compaction rules, Claude Code may include sub-agent conversations during compaction, consuming 60-100x more context than intended and defeating the entire efficiency purpose.

## Instructions

Copy the following section and paste it into your project's `CLAUDE.md` file:

```markdown
## Compaction Instructions

When you are using compact, please:
- **EXCLUDE the .claude-knowledge/ directory entirely** - never read or include these files
- **EXCLUDE all sub-agent conversations and Task tool results** from knowledge transfer operations
- **Do not include any content from parallel sub-agent processing** in the compact summary
- Focus only on the main conversation thread, current code changes, and immediate work
- Ignore any Task tool outputs related to knowledge file generation
- The .claude-knowledge/ files are for post-compaction restoration only

This project uses claude-knowledge-transfer for context preservation. The .claude-knowledge/ files should ONLY be read during explicit restoration via `/project:retrieve-knowledge-transfer` command, never during compaction.
```

## Placement in CLAUDE.md

Add this section:
- **After** your project's important notes or configuration
- **Before** tool-specific sections like error monitoring
- In a prominent location where Claude will see it during compaction

## What This Prevents

Without these rules, compaction may include:
- ❌ Sub-agent conversation history (~300k tokens)
- ❌ Task tool outputs from knowledge generation
- ❌ Knowledge file contents during compaction
- ❌ Parallel processing work that should stay invisible

With these rules, compaction focuses only on:
- ✅ Main conversation thread
- ✅ Current code changes
- ✅ Immediate development work
- ✅ Maintains 2-4% context efficiency

## Verification

After adding these rules, your knowledge transfer should:
1. Use only 2-4% context during `/project:initiate-knowledge-transfer`
2. NOT include .claude-knowledge files in compact summaries
3. Maintain efficiency even after multiple compaction cycles
4. Only read knowledge files during `/project:retrieve-knowledge-transfer`

If you see knowledge files being read during compaction, check that these rules are properly added to your CLAUDE.md file.