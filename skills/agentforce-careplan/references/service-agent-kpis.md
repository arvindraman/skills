# Service Agent KPI Reference Library

This is the canonical list of KPIs for Agentforce Service Agents. Use this reference when
selecting KPIs for a Care Plan Health Check. KPIs are organized by source tool and tagged with
their metric type (Business Value or Technical Health) and suggested decision-maker audiences.

---

## Agent Analytics

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Total Sessions | Total volume of sessions initiated across all channels; baseline demand measure | Business Value | VP of Service Operations, Head of Digital Strategy |
| Engaged Sessions | Sessions where customer sends ≥1 message and agent responds; indicates active interaction | Business Value | AI Program Manager, Director of Customer Support |
| Deflected Sessions | Engaged sessions resolved without human transfer or abandonment | Business Value | CFO, COO, VP of Customer Success |
| Escalated Sessions | Engaged sessions transferred to a human agent | Technical Health | Call Center Manager, WFM Lead |
| Abandoned Sessions | Engaged sessions where user ends interaction or session times out before resolution | Technical Health | Head of CX, UX Research Lead |
| Avg. Time to Escalation (mins) | Avg. duration from engaged session start to human handoff | Technical Health | Service Delivery Manager, VP of Service |

## Agent Analytics — Overview

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Engagement Rate | % of total sessions that became engaged sessions | Technical Health | VP of Digital Strategy, Head of Self-Service |
| Escalation Rate | % of engaged sessions requiring human transfer | Technical Health | Director of Support Ops, VP of Customer Service |
| Deflection Rate | % of engaged sessions resolved by AI without human intervention | Business Value | CFO, CCO, VP of Service |
| Abandonment Rate | % of engaged sessions where user dropped off or timed out | Technical Health | Head of CX, UX Design Lead |
| Avg. Time to Deflection | Avg. time from engaged session start to successful resolution | Business Value, Technical Health | Service Delivery Manager, VP of Operations |

## Agent Analytics — Quality

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Topic Quality | Deflection and escalation rates per topic; measures per-subject effectiveness | Technical Health | Knowledge Management Lead, AI Content Strategist |
| Topic Session Counts | Volume of engaged sessions per topic/intent | Business Value | Product Manager, Service Designer, Resource Planner |

## Agentforce Optimization — Insights

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Total Sessions (STDM) | Baseline interaction volume via Session Tracing Data Model | Business Value | VP of Service Operations, Service Delivery Manager |
| Average Agent Latency | Time for reasoning engine to process input, retrieve data (RAG), and generate response | Technical Health | CTO, AI Architect, Lead Developer |
| Average Quality Score | LLM-assessed relevance and accuracy of agent responses (refreshed daily) | Technical Health | Head of CX, QA Director |
| Intent Quality | Accuracy of planner classifying requests into correct topics; minimizes misinterpretations | Technical Health | AI Program Manager, Content Strategist |
| Intent Quantity | Breadth and volume of unique intents identified; maps knowledge gaps | Technical Health | Knowledge Management Lead, Product Manager |

## C360 Semantic Model

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Escalated Cases | Cases flagged as "Escalated" in the model | Business Value | VP of Customer Support, Service Delivery Manager |
| Escalation Rate | % of all cases requiring higher-tier transfer; primary AI containment indicator | Business Value | CFO, CCO, Head of AI Strategy |
| Avg. Time to 1st Close | Avg. duration from case open to first "Closed" status | Business Value | Director of Support Ops, WFM Manager |
| Avg. Time to Close | Total avg. time to final resolution including reopens | Business Value | VP of Service, Business Process Owner |
| Total Cases | Aggregate count of unique cases across all channels in Customer 360 | Business Value | COO, Head of Digital Transformation |
| % First Contact Resolution (FCR) | Ratio of cases resolved in initial interaction without follow-ups | Business Value | VP of CX, Head of Self-Service |
| Open Cases | Real-time count of active non-closed cases (work backlog) | Business Value | Call Center Manager, Support Supervisor |

## Service Insights — Agentforce Service Agents

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Total Sessions | Sum of all initiated interactions where Agentforce was first contact | Business Value | VP of Service Ops, Head of Digital Channels |
| Engaged Sessions | Sessions progressing beyond greeting with user input and resolution attempt | Business Value | Director of Customer Support, AI Program Manager |
| Deflected Sessions | Interactions resolved by AI without human transfer or case creation | Business Value | CFO, COO, VP of Customer Success |
| Service Rep. Hand-off Sessions | Sessions transferred to a live human representative | Technical Health | Contact Center Manager, WFM Lead |
| Abandoned Sessions | Sessions where customer disconnected or timed out after engaging | Technical Health | Head of CX, UX Research Lead |
| Engagement Rate | % of total sessions that became meaningful interactions | Technical Health | Marketing Director, Digital Engagement Lead |
| Deflection Rate | % of engaged sessions resolved autonomously; primary ROI metric | Business Value | CFO, CCO, VP of Service |
| Service Rep. Handoff Rate | % of engaged sessions requiring human intervention | Technical Health | Director of Support Training, Service Ops Lead |
| Abandon Rate | % of users dropping off mid-conversation; friction indicator | Technical Health | Head of CX, Product Manager |
| Avg. Time to Deflection (mins) | Avg. session duration from engagement to autonomous resolution | Business Value, Technical Health | Service Delivery Manager, VP of Operations |
| Avg. Time to Service Rep. Handoff (mins) | Avg. time AI spends before determining human is needed | Technical Health | Call Center Director, CX Strategist |
| Total Sessions Over Time | Chronological session volume; identifies peak demand and adoption trends | Business Value | VP of Service Ops, Workforce Planner |
| Engaged Sessions Over Time | Trend of meaningful interactions; shows active AI load | Business Value | Head of Digital Strategy, AI Program Manager |
| Agents by Session | Session volume breakdown across specific agents; enables A/B comparison | Business Value, Technical Health | Service IT Director, Lead AI Architect |
| Topics by Usage | Ranking of most-triggered topics; highlights dominant customer needs | Technical Health | Knowledge Management Lead, Content Strategist |
| Actions by Usage | Count of specific action executions (e.g., "Check Order Status") | Technical Health | Product Manager (Service), Automation Lead |
| Events by Event Log Type | Categorical view of system events (completions, errors, routing triggers) | Technical Health | Technical Support Lead, Salesforce Admin |
| Events Over Time | Time-series of system activity; identifies performance spikes or degradation | Technical Health | DevOps Lead, AI Reliability Engineer |

## Service Insights — Cases

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Total Cases | Total case volume across all channels | Business Value | VP of Service Ops, COO |
| Total Cases Closed | Cases reaching final "Closed" status; primary throughput indicator | Business Value | Service Delivery Manager, Call Center Lead |
| Total Escalated Cases | Cases requiring higher-tier intervention or breaching SLAs | Business Value | VP of Customer Success, QA Director |
| Avg Time to Close (Hrs) | Avg. duration from case open to final resolution including reopens | Business Value | CFO, Business Process Owner |
| Avg Time to First Close (Hrs) | Avg. time to first closed state; highlights initial handling efficiency | Business Value | Director of Support Ops, WFM Lead |
| % First Time Resolution | Cases resolved in single interaction without follow-up or reopen | Business Value | Head of CX, CCO |
| Cases by Priority | Breakdown by High/Medium/Low criticality | Business Value | Support Manager, Resource Planner |
| Case Volume by Origin | Breakdown by source (Email, Web, Phone, API) | Business Value | Head of Digital Strategy, Omni-Channel Lead |
| Case Volume Trendline | Time-series of case creation for staffing prediction | Business Value | Workforce Manager, VP of Operations |
| Cost | Calculated metric (Volume × Avg. Cost per Case); total service expenditure | Business Value | CFO, VP of Service, COO |

## Service Insights — Customer Satisfaction

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Avg CSAT from Surveys | Mean score from post-interaction surveys; overall service health pulse | Business Value | CCO, VP of CX |
| CSAT Trendline | Satisfaction scores over time; measures impact of new deployments | Business Value | Head of AI Strategy, Service Delivery Manager |
| CSAT by Case Origin | Satisfaction by entry point (Email, Phone, Web); reveals friction sources | Business Value | Omni-Channel Lead, Head of Digital Strategy |
| CSAT by Priority | Satisfaction by case urgency; ensures critical issues get quality resolution | Business Value | QA Director, Support Manager |
| CSAT by Channel | Satisfaction by platform (Chat, SMS); identifies most effective AI channels | Business Value | Product Manager (Service), Digital Engagement Lead |

## Service Insights — Knowledge Dashboard

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Total Article Views | Gross volume of Knowledge article opens; total self-service reach | Business Value | Knowledge Manager, Content Strategist |
| Cases Closed With Knowledge | Resolutions supported by a Knowledge article; validates content ROI | Business Value | CFO, VP of Customer Service |
| Case Attachment Rate | % of cases with an article attached; measures Knowledge leverage | Business Value | Director of Support Ops, Lead Admin |
| Avg. Handle Time Savings | Estimated resolution time reduction when Knowledge is used vs. not | Business Value | CFO, COO, Workforce Manager |

## Service Insights — Omni-Channel Dashboard

| KPI Name | Description | Metric Type | Decision-Makers |
|---|---|---|---|
| Total Work Items | Total work volume flowing into Omni-Channel from all sources | Business Value | VP of Service Ops, Workforce Planner |
| Avg. Wait Time (Sec) | Avg. time customer waits in queue before human connection; friction metric | Business Value | Head of CX, CCO |
| Avg. Handle Time (Min) | Avg. duration agent spends working an item from acceptance to completion | Business Value | CFO, Service Delivery Manager |
| Service Level | % of work items answered within target time frame | Business Value | VP of Customer Service, Operations Director |
| Cost to Serve | Total operational expense to resolve work items across all channels | Business Value | CFO, COO |
| Routing Effectiveness | Efficiency of assigning right work to right resource with minimal transfers | Business Value | AI Architect, Salesforce Admin |
