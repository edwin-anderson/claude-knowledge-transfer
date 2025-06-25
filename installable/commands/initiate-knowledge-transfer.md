You are implementing a parallel sub-agent approach to knowledge transfer that preserves your main context by delegating file generation to fresh sub-agents. This approach uses only 2-4% of your context instead of 15-20%.

## Core Strategy: Context Transfer TO Sub-Agents

You will package your existing conversational context into structured packages and distribute them to 6 parallel sub-agents, each with fresh 200k token contexts. You never read the generated files, avoiding context pollution.

## Execution Steps

### 1. Create Knowledge Directory (0.5% context)
- Create `.claude-knowledge/` directory if it doesn't exist
- If files already exist, they will be overwritten with updated content

### 2. Package Context for Sub-Agents (1-2% context)

Create 6 context packages from your existing conversation knowledge. You're not analyzing or extracting - you're directly packaging what you already know:

**PROJECT_CONTEXT Package**:
```json
{
  "currentProblem": "[The specific problem you're solving]",
  "problemDetails": "[Detailed explanation from conversation]",
  "solutionApproach": "[Current approach being taken]",
  "criticalFiles": {
    "[path/to/file]": "[Why this file is important]"
  },
  "environment": {
    "development": "[Dev environment details]",
    "dependencies": "[Key dependencies and versions]",
    "configuration": "[Important config details]"
  },
  "testCommands": ["[Working test commands]"],
  "currentBlockers": ["[Specific blockers]"],
  "keyDecisions": ["[Important decisions made]"],
  "sessionMetadata": {
    "timestamp": "[Current timestamp]",
    "sessionContext": "[What you're working on]"
  }
}
```

**ARCHITECTURE Package**:
```json
{
  "systemType": "[System description from conversation]",
  "components": {
    "[Component Name]": "[Role and purpose]"
  },
  "dataFlows": ["[Data flow patterns]"],
  "dependencies": {
    "[library-name]": "[Why it's used]"
  },
  "integrationPoints": ["[External integrations]"],
  "technologyStack": ["[Technologies in use]"]
}
```

**PROGRESS_TRACKER Package**:
```json
{
  "completedTasks": [
    {
      "task": "[Task description]",
      "outcome": "[Result achieved]",
      "files": ["[Files modified]"],
      "timestamp": "[When completed]"
    }
  ],
  "currentTask": {
    "description": "[Current work]",
    "currentFile": "[File being worked on]",
    "currentLine": "[Specific location if applicable]",
    "status": "[Current status]"
  },
  "failedAttempts": [
    {
      "attempt": "[What was tried]",
      "reason": "[Why it failed]",
      "files": ["[Files involved]"]
    }
  ],
  "nextSteps": ["[Priority ordered next steps]"]
}
```

**IMPLEMENTATION_PLAN Package**:
```json
{
  "remainingWork": ["[Phases identified]"],
  "specificFiles": ["[Files needing modification]"],
  "testingStrategy": ["[Testing approach]"],
  "riskAssessment": ["[Identified risks]"],
  "timeline": ["[Timeline discussions]"],
  "dependencies": ["[Blocking dependencies]"]
}
```

**INVESTIGATION_FINDINGS Package**:
```json
{
  "workingSolutions": [
    {
      "solution": "[Working solution]",
      "codeSnippet": "[Code that works]",
      "context": "[When/where it works]"
    }
  ],
  "failedApproaches": [
    {
      "approach": "[Failed approach]",
      "reason": "[Specific failure]",
      "learnings": "[What was learned]"
    }
  ],
  "codebaseDiscoveries": ["[Important discoveries]"],
  "externalResources": ["[Helpful resources]"]
}
```

**REVIEW_FEEDBACK Package**:
```json
{
  "codeQuality": ["[Quality observations]"],
  "performanceIssues": ["[Performance concerns]"],
  "technicalDebt": ["[Identified debt]"],
  "securityConsiderations": ["[Security issues]"],
  "optimizationOpportunities": ["[Optimization ideas]"]
}
```

### 3. Launch Parallel Sub-Agents (0.5% context)

Create and execute all 6 sub-agent tasks simultaneously in a single response using the Task tool. Each task should use this template:

For PROJECT_CONTEXT.md:
- Description: "Generate PROJECT_CONTEXT.md"
- Prompt: Include the PROJECT_CONTEXT package and instructions to write comprehensive context based on the template at .claude/templates/claude-knowledge-transfer/PROJECT_CONTEXT.template.md

For ARCHITECTURE.mermaid:
- Description: "Generate ARCHITECTURE.mermaid" 
- Prompt: Include the ARCHITECTURE package and instructions to create visual system diagram based on the template at .claude/templates/claude-knowledge-transfer/ARCHITECTURE.mermaid.template

For PROGRESS_TRACKER.md:
- Description: "Generate PROGRESS_TRACKER.md"
- Prompt: Include the PROGRESS_TRACKER package and instructions to document task progress based on the template at .claude/templates/claude-knowledge-transfer/PROGRESS_TRACKER.template.md

For IMPLEMENTATION_PLAN.md:
- Description: "Generate IMPLEMENTATION_PLAN.md"
- Prompt: Include the IMPLEMENTATION_PLAN package and instructions to outline remaining work based on the template at .claude/templates/claude-knowledge-transfer/IMPLEMENTATION_PLAN.template.md

For INVESTIGATION_FINDINGS.md:
- Description: "Generate INVESTIGATION_FINDINGS.md"
- Prompt: Include the INVESTIGATION_FINDINGS package and instructions to document solutions and learnings based on the template at .claude/templates/claude-knowledge-transfer/INVESTIGATION_FINDINGS.template.md

For REVIEW_FEEDBACK.md:
- Description: "Generate REVIEW_FEEDBACK.md"
- Prompt: Include the REVIEW_FEEDBACK package and instructions to capture quality observations based on the template at .claude/templates/claude-knowledge-transfer/REVIEW_FEEDBACK.template.md

Each task prompt should follow this structure:
```
You are a specialized knowledge transfer agent generating [FILENAME].

Context Package: [Include the appropriate JSON package here]

Template Location: .claude/templates/claude-knowledge-transfer/[FILENAME]

Your task:
1. Use the context package to understand the current project state
2. If template exists, follow its structure while filling with specific content
3. If no template, use standard structure for this knowledge type
4. Write comprehensive, project-specific content (not generic)
5. Save directly to .claude-knowledge/[FILENAME]
6. Return only: "✅ [FILENAME] completed"

Critical: Write detailed, actionable content based on the context package. Do not read other files or gather additional context.
```

**IMPORTANT**: Execute all 6 tasks in parallel by creating them all in a single tool use block. Do not execute them sequentially.

### 4. Handle Completions (0.5% context)

- Wait for all 6 completion confirmations
- Do NOT read or verify the generated files
- Trust that sub-agents completed their tasks

### 5. Setup Git Integration

Ensure `.gitignore` includes:
```
# Claude Knowledge Transfer temporary files
.claude-knowledge/tmp/
```

### 6. Provide Summary

Show the user (without reading files):
```
✅ Knowledge transfer completed using parallel sub-agents

📁 Created 6 knowledge files in .claude-knowledge/:
- PROJECT_CONTEXT.md - Current problem and solution approach
- ARCHITECTURE.mermaid - System architecture visualization  
- PROGRESS_TRACKER.md - Task completion and current status
- IMPLEMENTATION_PLAN.md - Remaining work phases
- INVESTIGATION_FINDINGS.md - Solutions and discoveries
- REVIEW_FEEDBACK.md - Code quality observations

💡 Context Usage: Only 2-4% (vs 15-20% traditional approach)

🚀 Next steps:
1. git add .claude-knowledge/
2. git commit -m "Knowledge snapshot: [description]"
3. Continue development - you have 96-97% context available!
4. After compaction: /project:retrieve-knowledge-transfer
```

## Key Principles

- **Never Read Generated Files**: Avoid context pollution
- **Direct Context Packaging**: Package what you know, don't analyze
- **Parallel Execution**: All 6 agents work simultaneously  
- **Fresh Contexts**: Each sub-agent gets clean 200k tokens
- **Minimal Reporting**: Only completion confirmations return

## Context Usage Breakdown

```
Main Agent Usage:
├── Directory setup (0.5%)
├── Context packaging (1-2%)
├── Sub-agent coordination (0.5%)
├── Completion handling (0.5%)
└── Total: 2.5-3.5%

Sub-Agents:
└── 6 × Fresh 200k contexts for comprehensive writing
```

This approach enables knowledge transfer even at 96-97% context capacity, giving you 16-17% more development time before needing to preserve context.