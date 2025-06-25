# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.5] - 2025-06-25

### Fixed
- **Critical**: Much stronger enforcement of restoration priority - Claude now refuses any task until restoration
- Improved search algorithm with explicit bash commands for finding .claude-knowledge
- Added clear "STOP" warnings and mandatory behavior rules
- Better handling when .claude-knowledge is at project root level
- More explicit instructions to prevent Claude from helping before restoration

### Changed
- Added "What NOT to Do" section with clear ❌ and ✅ indicators
- First message now immediately shows restoration is required
- Search uses more efficient bash commands (find, grep)
- Clearer PROJECT_ROOT variable usage throughout

## [2.0.4] - 2025-06-25

### Fixed
- README images now use absolute URLs for proper display on npm
- Screenshots are properly linked to GitHub repository

### Added
- Visual examples with screenshots in README

## [2.0.3] - 2025-06-25

### Fixed
- **Critical**: retrieve-knowledge-transfer now works from any subdirectory
- Improved project root discovery to handle both git and non-git projects
- Added robust directory traversal up to 10 parent levels
- Clear error messages when .claude-knowledge directory not found

### Changed
- Enhanced search algorithm with explicit implementation steps
- Added visual feedback (✅/❌) for search results
- Improved instructions for using absolute paths in file reads
- Made project root discovery independent of git

## [2.0.2] - 2025-06-25

### Fixed
- Retrieve-knowledge-transfer command now properly prioritizes restoration
- Prevents Claude from attempting previous tasks with incomplete context
- Ensures knowledge retrieval happens immediately after compaction

### Changed
- Added immediate priority statement at command start
- Enhanced execution steps with strict sequencing requirements
- Made summary and continuation conditional on full restoration
- Added "Retrieval First" as primary success factor

## [2.0.1] - 2025-06-25

### Fixed
- Help command now uses imperative instructions that Claude will execute
- Parallel execution now truly runs all 6 tasks simultaneously
- Removed duplicate ARCHITECTURE.mermaid task generation
- Added explicit instructions for parallel task execution

### Changed
- Restructured help-knowledge-transfer.md to be action-oriented
- Updated initiate-knowledge-transfer.md to ensure parallel execution in single response

## [2.0.0] - 2025-06-25

### Added
- **Revolutionary Parallel Sub-Agent Approach**: Knowledge transfer now uses only 2-4% context (down from 15-20%)
- **Late Execution Capability**: Can safely run at 96-97% capacity (up from 80%)
- **Help Command**: New `/project:help-knowledge-transfer` command for comprehensive usage guide
- **Parallel Processing**: All 6 knowledge files generated simultaneously using fresh sub-agent contexts
- **Context Isolation**: Main agent never reads generated files, preventing context pollution

### Changed
- **BREAKING**: Replaced sequential knowledge transfer with parallel sub-agent approach
- **BREAKING**: Removed archive-knowledge command and all archiving functionality
- **BREAKING**: Removed auto-archiving from initiate-knowledge-transfer
- Simplified .gitignore to only exclude temporary files
- Knowledge files are now simply overwritten when updated
- No more prompts about continuation vs new problem
- Reduced command count from 5 to 4

### Removed
- **BREAKING**: `/project:archive-knowledge` command completely removed
- Archive directory creation and management
- Retention policies and milestone archives
- Complex archive indexing system
- "Is this a continuation?" prompts

### Improved
- 75-80% reduction in context usage during knowledge transfer
- 16-17% more development time before needing knowledge transfer
- Cleaner `.claude-knowledge/` directory structure
- Simpler mental model - just save and restore
- Better alignment with git for version history

### Technical Details
- Main agent packages conversational context into structured JSON
- Each sub-agent receives domain-specific context package
- Sub-agents write comprehensive files using templates
- Git handles all version history naturally

## [1.1.0] - 2025-06-14

### Changed
- **BREAKING**: Restructured package for better organization
- Moved all installable content to `installable/` directory
- Used template system for config.json and QUICK_START.md generation
- **IMPORTANT**: System files now properly organized in `.claude/claude-knowledge-transfer/`
- Templates remain namespaced to `.claude/templates/claude-knowledge-transfer/`

### Added
- Clear separation between npm package files and installable content
- Template files for project configuration
- Better directory structure with logical grouping
- Organized package layout following npm best practices
- Namespace approach for both templates and system files
- Proper organization respecting the shared `.claude/` directory

### Fixed
- Template path consistency between setup script and actual installation
- Simplified setup script logic
- Cleaner project structure
- **CRITICAL**: No longer pollutes the shared `.claude/` directory root

### Note
All system files are properly namespaced to prevent conflicts:
- Templates: `.claude/templates/claude-knowledge-transfer/`
- System files: `.claude/claude-knowledge-transfer/`
- Commands: `.claude/commands/` (shared namespace)

This ensures the package is a good citizen of the Claude ecosystem.

## [1.0.2] - 2025-06-14

### Added
- Initial stable release
- Project-scoped Claude knowledge transfer system
- 4 essential commands for context management
- 6 standardized template files
- Automatic .gitignore setup
- Team collaboration features
