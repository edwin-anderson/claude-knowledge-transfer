#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * Claude Knowledge Transfer Setup Script
 * Automatically installs commands and templates for project-scoped usage
 */

class ClaudeKnowledgeSetup {
  constructor() {
    this.projectRoot = process.cwd();
    this.packageRoot = __dirname.replace('/bin', '');
    this.claudeDir = path.join(this.projectRoot, '.claude');
    this.commandsDir = path.join(this.claudeDir, 'commands');
    this.templatesDir = path.join(this.claudeDir, 'templates');
  }

  log(message, type = 'info') {
    const prefix = {
      info: '🔧',
      success: '✅',
      warning: '⚠️',
      error: '❌'
    }[type];
    console.log(`${prefix} ${message}`);
  }

  ensureDirectoryExists(dir) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      this.log(`Created directory: ${path.relative(this.projectRoot, dir)}`);
    }
  }

  copyFiles(srcDir, destDir, description) {
    this.ensureDirectoryExists(destDir);
    
    const files = fs.readdirSync(path.join(this.packageRoot, srcDir));
    let copiedCount = 0;

    files.forEach(file => {
      const srcFile = path.join(this.packageRoot, srcDir, file);
      const destFile = path.join(destDir, file);
      
      if (fs.statSync(srcFile).isFile()) {
        fs.copyFileSync(srcFile, destFile);
        copiedCount++;
      }
    });

    this.log(`Installed ${copiedCount} ${description} to ${path.relative(this.projectRoot, destDir)}`);
    return copiedCount;
  }

  setupGitIgnore() {
    const gitignorePath = path.join(this.projectRoot, '.gitignore');
    const ignoreEntries = [
      '',
      '# Claude Knowledge Transfer',
      '.claude-knowledge/archive/',
      '.claude-knowledge/tmp/',
      ''
    ].join('\n');

    if (fs.existsSync(gitignorePath)) {
      const content = fs.readFileSync(gitignorePath, 'utf8');
      if (!content.includes('.claude-knowledge/archive/')) {
        fs.appendFileSync(gitignorePath, ignoreEntries);
        this.log('Added knowledge transfer entries to .gitignore');
      }
    } else {
      fs.writeFileSync(gitignorePath, ignoreEntries);
      this.log('Created .gitignore with knowledge transfer entries');
    }
  }

  createProjectConfig() {
    const configPath = path.join(this.claudeDir, 'config.json');
    const config = {
      knowledgeTransfer: {
        version: "1.0.2",
        standardizedFiles: [
          "PROJECT_CONTEXT.md",
          "ARCHITECTURE.mermaid", 
          "PROGRESS_TRACKER.md",
          "IMPLEMENTATION_PLAN.md",
          "INVESTIGATION_FINDINGS.md",
          "REVIEW_FEEDBACK.md"
        ],
        templatePath: ".claude/templates/claude-knowledge-transfer/"
      }
    };

    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    this.log('Created Claude configuration file');
  }

  createQuickStartGuide() {
    const guidePath = path.join(this.claudeDir, 'QUICK_START.md');
    const guide = `# Claude Knowledge Transfer - Quick Start

## Available Commands

Run these commands in Claude Code:

\`\`\`bash
# 1. Save context before compaction (at ~90% capacity)
/project:initiate-knowledge-transfer

# 2. After compaction, restore context  
/project:retrieve-knowledge-transfer

# 3. Verify context was restored correctly
/project:check-context

# 4. Archive important milestones (optional)
/project:archive-knowledge
\`\`\`

## How It Works

When you run \`/project:initiate-knowledge-transfer\`, it creates a \`.claude-knowledge/\` directory with these 6 files:

- 📄 \`PROJECT_CONTEXT.md\` - Main project context and state
- 📊 \`ARCHITECTURE.mermaid\` - Visual system architecture  
- 📋 \`PROGRESS_TRACKER.md\` - Task completion tracking
- 📝 \`IMPLEMENTATION_PLAN.md\` - Detailed implementation steps
- 🔍 \`INVESTIGATION_FINDINGS.md\` - Research results and findings
- 👀 \`REVIEW_FEEDBACK.md\` - Code review and optimization notes

## Template System

Templates are stored in \`.claude/templates/claude-knowledge-transfer/\` (installed by this package).

To customize templates for your project, you can edit them directly in \`.claude/templates/claude-knowledge-transfer/\`.

## Best Practices

1. **Save Early**: Run knowledge transfer at ~90% capacity, not 95%
2. **Commit Knowledge**: Include \`.claude-knowledge/\` in git commits
3. **Team Consistency**: Customize templates for your project's needs
4. **Regular Verification**: Use check-context to ensure continuity

For full documentation, see: README.md
`;

    fs.writeFileSync(guidePath, guide);
    this.log('Created quick start guide');
  }

  run() {
    this.log('Setting up Claude Knowledge Transfer for this project...', 'info');
    
    try {
      // Create .claude directory structure
      this.ensureDirectoryExists(this.claudeDir);
      
      // Copy commands and templates
      const commandCount = this.copyFiles('commands', this.commandsDir, 'commands');
      
      // Create templates subdirectory and copy claude-knowledge-transfer templates
      const claudeKnowledgeTemplatesDir = path.join(this.templatesDir, 'claude-knowledge-transfer');
      const templateCount = this.copyFiles('templates/claude-knowledge-transfer', claudeKnowledgeTemplatesDir, 'templates');
      
      // Setup project configuration
      this.setupGitIgnore();
      this.createProjectConfig();
      this.createQuickStartGuide();
      
      this.log('', 'info');
      this.log('🎉 Claude Knowledge Transfer setup complete!', 'success');
      this.log('', 'info');
      this.log(`📁 Installed ${commandCount} commands in .claude/commands/`);
      this.log(`📄 Installed ${templateCount} templates in .claude/templates/claude-knowledge-transfer/`);
      this.log('⚙️  Created project configuration and quick start guide');
      this.log('', 'info');
      this.log('Next steps:', 'info');
      this.log('1. Check .claude/QUICK_START.md for usage instructions');
      this.log('2. Commit the .claude/ directory to share with your team');
      this.log('3. Run /project:initiate-knowledge-transfer in Claude Code');
      this.log('', 'info');
      
    } catch (error) {
      this.log(`Setup failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run setup if called directly
if (require.main === module) {
  const setup = new ClaudeKnowledgeSetup();
  setup.run();
}

module.exports = ClaudeKnowledgeSetup;
