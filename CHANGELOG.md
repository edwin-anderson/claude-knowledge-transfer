# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
