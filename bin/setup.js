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
    this.packageRoot = path.join(__dirname, '..');
    this.installableRoot = path.join(this.packageRoot, 'installable');
    this.claudeDir = path.join(this.projectRoot, '.claude');
    this.commandsDir = path.join(this.claudeDir, 'commands');
    this.templatesDir = path.join(this.claudeDir, 'templates');
    this.systemDir = path.join(this.claudeDir, 'claude-knowledge-transfer');
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
    
    const sourcePath = path.join(this.installableRoot, srcDir);
    const files = fs.readdirSync(sourcePath);
    let copiedCount = 0;

    files.forEach(file => {
      const srcFile = path.join(sourcePath, file);
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
    const configPath = path.join(this.systemDir, 'config.json');
    const templatePath = path.join(this.installableRoot, 'docs', 'config.json.template');
    
    // Ensure our system directory exists
    this.ensureDirectoryExists(this.systemDir);
    
    // Read template and customize for this project
    const template = fs.readFileSync(templatePath, 'utf8');
    const config = JSON.parse(template);
    
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    this.log('Created Claude Knowledge Transfer configuration file');
  }

  createQuickStartGuide() {
    const guidePath = path.join(this.systemDir, 'QUICK_START.md');
    const templatePath = path.join(this.installableRoot, 'docs', 'QUICK_START.md.template');
    
    // Copy template content
    const guide = fs.readFileSync(templatePath, 'utf8');
    
    fs.writeFileSync(guidePath, guide);
    this.log('Created Claude Knowledge Transfer quick start guide');
  }

  run() {
    this.log('Setting up Claude Knowledge Transfer for this project...', 'info');
    
    try {
      // Create .claude directory structure
      this.ensureDirectoryExists(this.claudeDir);
      
      // Copy commands and templates with namespace
      const commandCount = this.copyFiles('commands', this.commandsDir, 'commands');
      const claudeKnowledgeTemplatesDir = path.join(this.templatesDir, 'claude-knowledge-transfer');
      const templateCount = this.copyFiles('templates', claudeKnowledgeTemplatesDir, 'templates');
      
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
      this.log('1. Check .claude/claude-knowledge-transfer/QUICK_START.md for usage instructions');
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
