#!/usr/bin/env node

/**
 * Claude Knowledge Transfer System
 * Main entry point for the npm package
 */

const ClaudeKnowledgeSetup = require('./bin/setup.js');

// If called directly (e.g., via npx), run the setup
if (require.main === module) {
  const setup = new ClaudeKnowledgeSetup();
  setup.run();
}

module.exports = ClaudeKnowledgeSetup;
