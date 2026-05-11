# Research Patterns Source

This file contains extracted public-site references used to shape the landing page and AI-readable layer.

```json data
{
  "researchPatterns": [
    {
      "key": "proof-of-work",
      "label": "Proof of work beats resume-only claims",
      "source": "Fueler",
      "sourceUrl": "https://fueler.io/",
      "lesson": "A strong portfolio should show projects and outcomes instead of only listing credentials.",
      "useInThisProject": "Every GitHub project card states what it proves, and projects are grouped by value rather than chronology."
    },
    {
      "key": "now-page",
      "label": "Current focus is a useful public filter",
      "source": "Derek Sivers /now",
      "sourceUrl": "https://sive.rs/now2",
      "lesson": "A /now-style section tells people what the person is focused on and helps reduce mismatched requests.",
      "useInThisProject": "The hero and agent context include current focus areas: AI guardrails, content judgment, public proof of work, and small tools."
    },
    {
      "key": "digital-garden",
      "label": "Knowledge gardens reveal taste and mental models",
      "source": "Maggie Appleton",
      "sourceUrl": "https://maggieappleton.com/",
      "lesson": "Public notes, essays, and patterns make a person legible through how they think, not only what they ship.",
      "useInThisProject": "Writing evidence is treated as proof, especially posts that synthesize health, AI, reading, and practical automation."
    },
    {
      "key": "user-manual",
      "label": "A personal user manual lowers collaboration friction",
      "source": "Manual of Me",
      "sourceUrl": "https://www.manualof.me/",
      "lesson": "A working-with-me document can explain preferences, motivations, and collaboration style.",
      "useInThisProject": "The page includes a concise \"How to work with Peter\" section for human collaborators and AI agents."
    },
    {
      "key": "ai-readable",
      "label": "AI agents need curated, concise context",
      "source": "llms.txt proposal",
      "sourceUrl": "https://llmstxt.org/",
      "lesson": "A Markdown file at /llms.txt can give LLMs concise background, guidance, and links to deeper context.",
      "useInThisProject": "The repo ships llms.txt, agent-context.md, and JSON-LD so agents can understand the site without scraping navigation noise."
    },
    {
      "key": "profile-schema",
      "label": "Structured data should say what the page is about",
      "source": "Schema.org ProfilePage",
      "sourceUrl": "https://schema.org/ProfilePage",
      "lesson": "Profile pages can expose a Person entity and topics of expertise through machine-readable JSON-LD.",
      "useInThisProject": "The landing page embeds JSON-LD with Peter as Person, sameAs links, knowsAbout topics, and the ProfilePage entity."
    }
  ]
}
```
