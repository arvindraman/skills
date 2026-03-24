---
name: agentforce-careplan
description: >
  Generate a polished Agentforce Care Plan Health Check document (.docx) that maps business value
  KPIs and technical health KPIs to a specific Agentforce use case. Use this skill whenever a user
  wants to create a care plan, health check, KPI tracker, success measurement plan, or ROI
  assessment for an Agentforce deployment. Also trigger when the user says "create a care plan",
  "build a health check", "set up KPIs for the agent", "how do we measure success", "track agent
  performance", "measure business value", or references monitoring, measuring, or evaluating an
  Agentforce agent after deployment. Trigger even if the user just asks "what KPIs should we track"
  in the context of an Agentforce use case — this skill provides the structured framework, not just
  a list. Always use this skill before generating any Care Plan Health Check output — do not build
  the document from scratch or from memory.
---

# Agentforce Care Plan Health Check Generator

This skill generates a professional, stakeholder-ready Care Plan Health Check document (.docx) for
an Agentforce deployment. The document measures both the business value and technical health of a
deployed agent using KPIs drawn from the Salesforce Service Agent KPI library.

## When to use this skill

Trigger this skill when:
- A user has identified an Agentforce use case and wants to establish success metrics
- A user asks to "create a care plan" or "build a health check" for their agent
- A user wants to measure the ROI or business impact of an Agentforce deployment
- A user asks "what KPIs should we track" for a Service Agent use case
- After the agentforce-prioritization or agentforce-worksheet skills have been used and the user
  wants the next step: measurable outcomes
- A user wants a document they can share with stakeholders to track agent performance over time

## Prerequisites

Before generating the care plan, you need enough context to select the right KPIs and write
meaningful targets. At minimum you need:

1. **The use case** — What does the agent do? (e.g., resolve order issues, process refunds)
2. **The audience** — Who interacts with the agent? (consumer, merchant, internal employee)
3. **The trigger moment** — What event starts the interaction?
4. **The agent's actions** — What can the agent do? (look up, verify, calculate, create, escalate)
5. **The agent's guardrails** — What should the agent NOT do? (thresholds, caps, escalation rules)
6. **Stakeholder goals** — Named executives and their FY targets (if available from a customer brief)

If the agentforce-worksheet skill has already been used in this conversation, extract items 1–5
from the worksheet output. If a customer brief is available, mine it for stakeholder names and goals.

## How to generate the Care Plan Health Check

### Step 1: Select KPIs

Read the KPI reference library at `references/service-agent-kpis.md` using the `view` tool. This
contains the canonical list of Service Agent KPIs with descriptions, metric types, source tools,
and suggested decision-maker audiences.

Select KPIs following these rules:

**Business Value KPIs (up to 5)**
- Choose KPIs with Metric Type = "Business Value" that directly measure the stated business goals
- Each KPI should measure a distinct impact area — no overlapping metrics
- KPIs should resonate with the stakeholders identified in the customer brief
- Always include Deflection Rate if the use case involves customer-facing support
- Always include at least one cost-related KPI (Cost per Contact, Cost to Serve, etc.)
- Always include at least one satisfaction KPI (CSAT, FCR, etc.)

**Technical Health KPIs (up to 5 per topic)**
- Choose KPIs that can be measured at the topic level to assess individual topic performance
- Include at least one volume metric (Topic Session Count), one quality metric (Deflection Rate
  or Quality Score), and one latency metric (Avg. Agent Latency or Avg. Time to Deflection)
- Group KPIs by agent Topic — each topic in the use case gets its own table
- Include Intent Quality or Intent Quantity when the agent handles multiple intents within a topic

**Guardrail KPIs (5–7)**
- Derive these from the agent's defined guardrails (from the worksheet or use case description)
- Each guardrail KPI should have a target of "0" (for violations) or "100%" (for compliance)
- Include at least one escalation-on-request metric and one threshold-violation metric

### Step 2: Determine financial impact references

For each Business Value KPI, provide an industry-referenced benchmark that translates the KPI
change into a dollar value or percentage impact. Read `references/financial-benchmarks.md` for
pre-researched benchmarks. Follow these rules:

- Always present financial impact as a **range**, never a single point estimate
- If a source provides a single value, adjust to a range using the value +/- 10%
- Cite the source (study name, publisher, year) for each benchmark
- Frame impact as "cost optimization" or "savings" — never as "return on investment"

### Step 3: Build the document

Read the document generation script at `scripts/generate-careplan.js` and use it as the base.
The script uses `docx-js` (npm package `docx`) and produces a .docx file with the following
structure:

**Page 1 — Use case summary & stakeholders**
- Use case title and subtitle
- "When (moment)" statement describing the trigger
- Bulleted list of desired agent actions (5–7 items)
- Stakeholder table with Name, Title, and FY Goal columns (3–5 stakeholders)

**Page 2 — Business value assessment**
- KPI table with columns: KPI Name | Target Value | Source | Initial Value | Current Value |
  Change (Δ) | Status
- Initial Value, Current Value, Change, and Status columns are left BLANK for the customer to
  fill in after deployment
- Status legend explaining "On Track" vs "Needs Review"
- Business Value Impact Measures table mapping each KPI to a financial impact range with source
- Total Business Value Overview: 2–3 sentence summary of the primary financial returns expected,
  citing referenced benchmarks

**Page 3 — Technical health assessment**
- Topic Performance Evaluation: One KPI table per agent Topic, each with 5 KPIs
- Guardrail Performance Evaluation: One table with 5–7 guardrail KPIs
- All measurement columns left blank for post-deployment tracking
- Explanatory note that guardrail violations require immediate investigation

### Step 4: Generate and validate

1. Install docx if not already available: `npm list -g docx || npm install -g docx`
2. Create the generation script at `/home/claude/careplan-gen.js` by adapting
   `scripts/generate-careplan.js` with the use-case-specific content from Steps 1–2
3. Run: `node /home/claude/careplan-gen.js`
4. Validate: `python scripts/office/validate.py /home/claude/careplan.docx`
5. Copy to outputs: `cp /home/claude/careplan.docx /mnt/user-data/outputs/agentforce-care-plan-health-check.docx`
6. Present to user with `present_files`

If multiple care plans are generated in the same conversation, use descriptive filenames like
`care-plan-refund-agent.docx`, `care-plan-onboarding-agent.docx`, etc.

## Document design standards

The Care Plan Health Check follows these formatting conventions:

- **Font**: Arial throughout (universally supported in Word)
- **Color palette**: Salesforce blue (#032D60 dark, #0B5CAB mid, #1B96FF bright, #D8EDFF light),
  green (#2E844A) for "On Track" status, orange (#FE9339) for "Needs Review" status
- **Table headers**: Dark blue (#032D60) background with white text, 9pt bold
- **Section headings**: 14pt bold dark blue with a blue underline border
- **Sub-headings**: 11pt bold mid-blue
- **Body text**: 10pt dark gray (#333333)
- **Page size**: US Letter (8.5" × 11") with 1" margins
- **Header**: "Agentforce Care Plan Health Check" left-aligned, customer name right-aligned
- **Footer**: "Confidential — [Customer] x Salesforce" left, page number right

## Quality checklist

Before outputting, verify:
- [ ] Business Value KPIs: exactly 5, each measuring a distinct impact area
- [ ] Technical Health KPIs: 5 per topic, grouped by topic name
- [ ] Guardrail KPIs: 5–7, derived from the agent's actual guardrails
- [ ] Financial benchmarks: every Business Value KPI has a referenced impact range
- [ ] All measurement columns (Initial, Current, Change, Status) are blank
- [ ] Stakeholder table includes 3–5 names with titles and FY goals
- [ ] Total Business Value Overview is 2–3 sentences citing referenced benchmarks
- [ ] Document passes `validate.py` with no errors

## Tone and style

- Professional and stakeholder-ready — this is a document that goes to C-suite
- Concrete targets with units (e.g., "<3 min", "≥70%", "$2.70–$5.60")
- Financial impact framed as cost optimization, never ROI
- Active voice throughout
- Use "agent" to refer to the Agentforce AI agent; "human agent" or "service rep" for people
