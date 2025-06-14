#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

/**
 * Basic test script for Claude Knowledge Transfer package
 */

class PackageTest {
  constructor() {
    this.packageRoot = path.join(__dirname, '..');
    this.testDir = path.join(os.tmpdir(), 'claude-knowledge-test-' + Date.now());
  }

  log(message, type = 'info') {
    const prefix = {
      info: '🔧',
      success: '✅',
      error: '❌',
      test: '🧪'
    }[type];
    console.log(`${prefix} ${message}`);
  }

  async runTest() {
    try {
      this.log('Starting Claude Knowledge Transfer package test', 'test');
      
      // Create test directory
      fs.mkdirSync(this.testDir, { recursive: true });
      this.log(`Created test directory: ${this.testDir}`);
      
      // Change to test directory
      process.chdir(this.testDir);
      this.log(`Changed to test directory`);
      
      // Create a simple package.json for the test project
      const packageJson = {
        name: 'test-project',
        version: '1.0.0',
        description: 'Test project for Claude Knowledge Transfer'
      };
      fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
      
      // Run the setup script
      const setupScript = path.join(this.packageRoot, 'bin', 'setup.js');
      execSync(`node "${setupScript}"`, { stdio: 'inherit' });
      
      // Verify installation
      this.verifyInstallation();
      
      this.log('All tests passed!', 'success');
      
    } catch (error) {
      this.log(`Test failed: ${error.message}`, 'error');
      process.exit(1);
    } finally {
      // Cleanup
      if (fs.existsSync(this.testDir)) {
        fs.rmSync(this.testDir, { recursive: true, force: true });
        this.log(`Cleaned up test directory`);
      }
    }
  }

  verifyInstallation() {
    const requiredFiles = [
      '.claude/commands/initiate-knowledge-transfer.md',
      '.claude/commands/retrieve-knowledge-transfer.md',
      '.claude/commands/check-context.md',
      '.claude/commands/archive-knowledge.md',
      '.claude/templates/claude-knowledge-transfer/PROJECT_CONTEXT.template.md',
      '.claude/templates/claude-knowledge-transfer/ARCHITECTURE.mermaid.template',
      '.claude/templates/claude-knowledge-transfer/PROGRESS_TRACKER.template.md',
      '.claude/templates/claude-knowledge-transfer/IMPLEMENTATION_PLAN.template.md',
      '.claude/templates/claude-knowledge-transfer/INVESTIGATION_FINDINGS.template.md',
      '.claude/templates/claude-knowledge-transfer/REVIEW_FEEDBACK.template.md',
      '.claude/claude-knowledge-transfer/config.json',
      '.claude/claude-knowledge-transfer/QUICK_START.md',
      '.gitignore'
    ];

    for (const file of requiredFiles) {
      if (!fs.existsSync(file)) {
        throw new Error(`Required file not found: ${file}`);
      }
      this.log(`✓ Found ${file}`);
    }

    // Verify config.json content
    const config = JSON.parse(fs.readFileSync('.claude/claude-knowledge-transfer/config.json', 'utf8'));
    if (!config.knowledgeTransfer || config.knowledgeTransfer.version !== '1.1.0') {
      throw new Error('Invalid config.json content');
    }
    if (config.knowledgeTransfer.templatePath !== '.claude/templates/claude-knowledge-transfer/') {
      throw new Error('Invalid template path in config.json');
    }
    this.log('✓ Config.json has correct structure, version, and template path');

    // Verify .gitignore was updated
    const gitignore = fs.readFileSync('.gitignore', 'utf8');
    if (!gitignore.includes('.claude-knowledge/archive/')) {
      throw new Error('.gitignore was not properly updated');
    }
    this.log('✓ .gitignore properly updated');

    this.log('Installation verification completed', 'success');
  }
}

// Run test if called directly
if (require.main === module) {
  const test = new PackageTest();
  test.runTest();
}

module.exports = PackageTest;
