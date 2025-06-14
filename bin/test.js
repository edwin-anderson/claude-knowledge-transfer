#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Test script to verify the claude-knowledge-transfer setup works correctly
 */

console.log('🧪 Testing Claude Knowledge Transfer Setup...\n');

// Create a temporary test directory
const testDir = path.join(__dirname, '..', 'test-project');
const originalCwd = process.cwd();

try {
  // Cleanup any existing test directory
  if (fs.existsSync(testDir)) {
    fs.rmSync(testDir, { recursive: true, force: true });
  }

  // Create test project
  fs.mkdirSync(testDir, { recursive: true });
  process.chdir(testDir);

  console.log('✅ Created test project directory');

  // Initialize a minimal package.json
  fs.writeFileSync('package.json', JSON.stringify({
    name: 'test-project',
    version: '1.0.0',
    description: 'Test project for claude-knowledge-transfer'
  }, null, 2));

  console.log('✅ Created test package.json');

  // Run the setup script
  const setupPath = path.join(__dirname, 'setup.js');
  execSync(`node ${setupPath}`, { stdio: 'inherit' });

  // Verify the expected structure was created
  const expectedPaths = [
    '.claude',
    '.claude/commands',
    '.claude/templates',
    '.claude/config.json',
    '.claude/QUICK_START.md',
    '.claude/commands/initiate-knowledge-transfer.md',
    '.claude/commands/retrieve-knowledge-transfer.md',
    '.claude/commands/check-context.md',
    '.claude/commands/archive-knowledge.md',
    '.claude/templates/PROJECT_CONTEXT.template.md',
    '.claude/templates/ARCHITECTURE.mermaid.template',
    '.claude/templates/PROGRESS_TRACKER.template.md',
    '.claude/templates/IMPLEMENTATION_PLAN.template.md',
    '.claude/templates/INVESTIGATION_FINDINGS.template.md',
    '.claude/templates/REVIEW_FEEDBACK.template.md'
  ];

  let allGood = true;
  expectedPaths.forEach(expectedPath => {
    if (fs.existsSync(expectedPath)) {
      console.log(`✅ ${expectedPath}`);
    } else {
      console.log(`❌ Missing: ${expectedPath}`);
      allGood = false;
    }
  });

  // Check .gitignore was updated
  if (fs.existsSync('.gitignore')) {
    const gitignoreContent = fs.readFileSync('.gitignore', 'utf8');
    if (gitignoreContent.includes('.claude-knowledge/archive/')) {
      console.log('✅ .gitignore updated correctly');
    } else {
      console.log('❌ .gitignore not updated correctly');
      allGood = false;
    }
  } else {
    console.log('✅ .gitignore created');
  }

  // Verify config.json content
  const config = JSON.parse(fs.readFileSync('.claude/config.json', 'utf8'));
  if (config.knowledgeTransfer && config.knowledgeTransfer.standardizedFiles.length === 6) {
    console.log('✅ Config file contains correct structure');
  } else {
    console.log('❌ Config file structure incorrect');
    allGood = false;
  }

  console.log('\n' + '='.repeat(50));
  if (allGood) {
    console.log('🎉 All tests passed! Setup script works correctly.');
  } else {
    console.log('❌ Some tests failed. Check the output above.');
    process.exit(1);
  }

} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
} finally {
  // Cleanup
  process.chdir(originalCwd);
  if (fs.existsSync(testDir)) {
    fs.rmSync(testDir, { recursive: true, force: true });
  }
  console.log('🧹 Cleaned up test directory');
}
