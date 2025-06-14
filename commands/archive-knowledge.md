Archive current knowledge base with timestamp for historical reference.

Use this command to preserve important session snapshots before major changes.

Please:

1. **Create archive directory**:
   - Create `.claude-knowledge/archive/[YYYY-MM-DD-HHMMSS]/`
   - Use current timestamp

2. **Copy all current knowledge files** to the archive:
   - All .md files
   - All .mermaid files
   - Preserve directory structure

3. **Create archive metadata**:
   Generate `.claude-knowledge/archive/[timestamp]/ARCHIVE_META.md` with:
   - Archive date and time
   - Reason for archiving (ask me if not specified)
   - Session summary
   - Key accomplishments
   - Whether this is a "milestone" archive

4. **Update archive index**:
   Update or create `.claude-knowledge/archive/INDEX.md` with:
   - List of all archives
   - Brief description of each
   - Mark "milestone" archives with ⭐

5. **Apply retention policy**:
   - Keep all milestone archives
   - Keep last 3 non-milestone archives
   - Remove older non-milestone archives
   - Show what was removed

6. **Provide summary**:
   - Archive location
   - What was preserved
   - Current archive count
   - Suggest next action

Common use cases:
- Before switching to a different problem
- After completing a major feature
- Before trying a risky approach
- When reaching a stable state
