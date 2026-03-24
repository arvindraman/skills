---
name: agentforce-worksheet
description: >
  Generate a polished, filled-out Agentforce Use Case Framework worksheet from a use case
  description. Use this skill whenever the user provides an Agentforce use case scenario, customer
  story, or use case brief and wants a completed Use Case Framework sheet — the Salesforce-branded
  visual that includes When/I Want/So That, KPIs, Audience, Data Sources, Actions, Guardrails, and
  Channels. Also trigger when the user says "fill out the worksheet", "create a use case framework",
  "build the framework sheet", "generate the Agentforce worksheet", or references the Use Case
  Framework template. This skill produces a downloadable, presentation-ready HTML artifact styled
  to match the official Salesforce Agentforce blue template. Always use this skill before generating
  any Use Case Framework output — do not build the HTML from scratch or from memory.
---

# Agentforce Use Case Framework Worksheet Generator

This skill generates a polished, Salesforce-branded Use Case Framework worksheet as an HTML
artifact. It takes a use case description (a customer scenario, brief, or pain point) and produces
a fully filled-out framework covering all seven sections.

## When to Use This Skill

Trigger this skill when:
- A user provides an Agentforce use case and wants the framework sheet filled out
- A user asks to "fill out the worksheet" or "create the use case framework"
- A user shares a customer scenario or brief and expects a structured deliverable
- A user references the Use Case Framework template (the blue Salesforce card layout)
- After the agentforce-prioritization skill has scored a use case and the user wants the worksheet

## Prerequisites

Before generating the worksheet, you need enough information to fill all seven sections. If the
use case description is thin, ask clarifying questions first. At minimum you need:

1. **Who is the user / persona?** (name, role, context)
2. **What is the trigger moment?** (what event or frustration starts the interaction)
3. **What should the agent do?** (the action — verify, look up, process, recommend, etc.)
4. **What is the desired outcome?** (the goal — faster resolution, less effort, cost savings)
5. **What data is involved?** (where it lives, what systems)
6. **What should the agent NOT do?** (boundaries, thresholds, escalation triggers)

Extract as much as possible from the user's input before asking follow-ups. If a customer brief
or scenario is provided, mine it for details — names, products, channels, pain points, business
context — and infer reasonable defaults for anything missing.

## How to Generate the Worksheet

### Step 1: Analyze the Use Case

Parse the use case and identify:

| Section | What to Extract |
|---|---|
| **When (moment)** | The trigger event — when does the user reach for the agent? |
| **I Want (action)** | The agent's core action — what does it do for the user? |
| **So That (goal)** | The business/user outcome — why does this matter? |
| **KPIs** | 4–6 measurable indicators tied to the goal (resolution time, deflection rate, CSAT, cost per case, etc.) |
| **Audience** | Who interacts with the agent — role, channel, authentication status |
| **Data Sources** | What data the agent reads — CRM records, order data, knowledge base, policies, etc. |
| **Actions** | What the agent can do — look up, verify, calculate, create, update, escalate |
| **Guardrails** | What the agent must NOT do — thresholds, prohibited actions, escalation rules |
| **Channels** | Where the agent is deployed — web chat, mobile app, portal, Slack, email, etc. |

### Step 2: Build the HTML Artifact

Read the HTML template at `references/template.html` (use the `view` tool). This is the
canonical template — always use it as the base. Do NOT write HTML from scratch.

Fill in the template by replacing the placeholder content in each section with the use case
details from Step 1. Follow these rules:

- **Use Case Statement**: Write in first person from the user's perspective for "I Want" and
  "So That". Write "When" as a third-person moment description.
- **KPIs**: Include 4–6 KPIs. Each gets an emoji icon and a short description. Include
  targets in parentheses where reasonable (e.g., "target: <2 min").
- **Audience**: 4–6 bullet items describing who uses the agent.
- **Data Sources**: 5–7 bullet items listing specific data objects/systems.
- **Actions**: 5–7 bullet items listing concrete agent capabilities.
- **Guardrails**: 5–7 bullet items. Start each with "Do NOT" where appropriate. Include at
  least one confirmation step and one escalation trigger.
- **Channels**: 3–5 bullet items. Mark the primary channel. Include escalation path.

### Step 3: Add the Persona Banner

If the use case includes a named persona (like "Priya"), include the persona banner at the top
with their name, context, and a quoted pain statement. If no persona is named, omit the banner.

### Step 4: Add the Quadrant Badge

If the agentforce-prioritization skill has already scored this use case, include the quadrant
badge in the header:
- 🟩 Very Suitable (green badge)
- 🟧 Potentially Suitable (orange badge)
- 🟨 Maybe Suitable (yellow badge)
- 🟥 Not Suitable (red badge)

If no scoring has been done, omit the badge or default to a neutral "Pending Assessment" label.

### Step 5: Output the File

1. Create the filled HTML file at `/home/claude/use-case-framework.html`
2. Copy to `/mnt/user-data/outputs/use-case-framework.html`
3. Use `present_files` to share with the user

If multiple use cases are being generated in the same conversation, use descriptive filenames
like `use-case-framework-refund.html`, `use-case-framework-onboarding.html`, etc.

## Quality Checklist

Before outputting, verify:
- [ ] All 7 sections are filled (no blank placeholders)
- [ ] KPIs are measurable and tied to the stated goal
- [ ] Guardrails include at least one "escalate to human" rule
- [ ] Channels include an escalation path
- [ ] Actions are concrete and bounded (not vague like "help the customer")
- [ ] Data Sources reference specific objects, not just "Salesforce data"
- [ ] The persona quote (if present) reflects real user frustration from the brief

## Tone and Style

- Professional but accessible — this is a stakeholder-facing deliverable
- Concrete and specific — avoid generic filler like "improve customer experience"
- First person for "I Want" and "So That" — the user is the speaker
- Imperative for Guardrails — "Do NOT process refund without verification"
- Active voice throughout

