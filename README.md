# Boss-Level AI Mastery - Prompt Engineering Masterclass

A comprehensive Bangla-language course on advanced prompt engineering, AI agents, and production-ready AI systems.

## Features

- **27+ Modules** covering everything from LLM fundamentals to production deployment
- **Interactive Components** including tokenizers, model comparisons, and RAG pipelines  
- **Bangla Language Content** with professional English technical terms
- **Modern UI** built with React, TypeScript, and Tailwind CSS
- **Production-Ready Architecture** following best practices

## Technologies Used

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **Icons**: Lucide React
- **Code Highlighting**: Prism.js

## Course Structure

### Phase 1: Foundation - How AI "Thinks"
- LLM internals (tokenization, temperature, context windows)
- Model selection (Claude, GPT, Gemini, Local LLMs)
- Token economy and cost optimization

### Phase 2: Advanced Prompting
- Zero-shot to few-shot prompting
- Structured prompting (XML, Markdown)
- System prompt architecture
- Reasoning engineering
- Output engineering (JSON, structured data)

### Phase 3: AI Coding Agents
- Tool mastery (Cursor, Claude Code, Copilot)
- Specification-driven development
- Vibe coding vs production coding

### Phase 4: Multi-Agent Systems & RAG
- Agent design patterns (ReAct, Reflection, Planning)
- Memory and context engineering
- RAG implementation
- Function calling and tool use
- LangGraph and CrewAI

### Phase 5: Production Pipeline
- DSPy and prompt programming
- Evaluation and testing
- Observability and security

### Phase 6: Real-World Projects
- No-code automation
- Multimodal AI
- End-to-end production workflows

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages (manual)
npm run deploy
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions:

1. **Automatic Deployment**: Push to `main` branch triggers automatic build and deployment
2. **Manual Deployment**: Use `npm run deploy` for local deployment
3. **Live Site**: Available at `https://[username].github.io/prompt_engineering_masterclass/`

### GitHub Pages Setup

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. Enable "Read and write permissions" for Actions in repository settings
4. Push to main branch to trigger deployment

## Project Structure

```
src/
  components/
    layout/          # Header, Sidebar, Dashboard
    modules/         # Module content display
    interactive/     # Interactive learning components
  data/
    curriculum.ts    # Course content and structure
```

## Contributing

This is a learning platform project. Feel free to submit issues and enhancement requests!

## License

ISC
