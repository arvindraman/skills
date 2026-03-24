/**
 * Agentforce Care Plan Health Check — Document Generator Template
 *
 * This script generates a .docx Care Plan Health Check document using docx-js.
 * It is a TEMPLATE — Claude should read this file, then create a use-case-specific
 * version at /home/claude/careplan-gen.js by replacing the placeholder content
 * with details from the user's use case.
 *
 * Prerequisites: npm install -g docx
 * Usage: node careplan-gen.js
 * Output: /home/claude/careplan.docx
 * Validate: python scripts/office/validate.py /home/claude/careplan.docx
 */

const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, BorderStyle, WidthType,
  ShadingType, PageBreak, PageNumber, LevelFormat, TabStopType, TabStopPosition
} = require("docx");

// ══════════════════════════════════════════════════════════════
// COLOR PALETTE — Salesforce branded
// ══════════════════════════════════════════════════════════════
const BLUE_DARK  = "032D60";
const BLUE_MID   = "0B5CAB";
const BLUE_LIGHT = "D8EDFF";
const GREEN      = "2E844A";
const GREEN_LIGHT = "E3F5E8";
const ORANGE_LIGHT = "FFF3E0";
const GRAY_BORDER = "CCCCCC";
const WHITE      = "FFFFFF";

// ══════════════════════════════════════════════════════════════
// REUSABLE COMPONENTS
// ══════════════════════════════════════════════════════════════
const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: GRAY_BORDER };
const borders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };
const headerMargins = { top: 80, bottom: 80, left: 100, right: 100 };
const FULL_WIDTH = 9360; // US Letter with 1" margins

/** Table header cell */
function hCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: BLUE_DARK, type: ShadingType.CLEAR },
    margins: headerMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      alignment: AlignmentType.LEFT,
      children: [new TextRun({ text, bold: true, font: "Arial", size: 18, color: WHITE })],
    })],
  });
}

/** Table data cell */
function dCell(text, width, opts = {}) {
  const { bold, color, shading, fontSize } = opts;
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: shading ? { fill: shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      alignment: AlignmentType.LEFT,
      children: [new TextRun({
        text,
        font: "Arial",
        size: fontSize || 18,
        bold: bold || false,
        color: color || "000000",
      })],
    })],
  });
}

/** Blue-underlined section heading */
function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 360, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE_MID, space: 4 } },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 28, color: BLUE_DARK })],
  });
}

/** Sub-section heading */
function subHeading(text) {
  return new Paragraph({
    spacing: { before: 240, after: 80 },
    children: [new TextRun({ text, bold: true, font: "Arial", size: 22, color: BLUE_MID })],
  });
}

/** Body paragraph */
function bodyText(text, opts = {}) {
  return new Paragraph({
    spacing: { before: opts.spaceBefore || 80, after: opts.spaceAfter || 80 },
    children: [new TextRun({
      text, font: "Arial", size: 20,
      color: opts.color || "333333",
      italics: opts.italics || false,
    })],
  });
}

/** Builds a KPI table from column widths, header labels, and row data */
function kpiTable(colWidths, headers, rows) {
  return new Table({
    width: { size: FULL_WIDTH, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [
      new TableRow({ children: headers.map((h, i) => hCell(h, colWidths[i])) }),
      ...rows.map(row =>
        new TableRow({
          children: row.map((cell, i) => {
            const isStatus = headers[i] === "Status";
            let shading, color;
            if (isStatus && cell === "On Track") { shading = GREEN_LIGHT; color = GREEN; }
            else if (isStatus && cell === "Needs Review") { shading = ORANGE_LIGHT; color = "B45309"; }
            return dCell(cell, colWidths[i], { bold: i === 0 || isStatus, shading, color });
          }),
        })
      ),
    ],
  });
}

// ══════════════════════════════════════════════════════════════
// PLACEHOLDER CONTENT — Replace everything below with use-case-specific data
// ══════════════════════════════════════════════════════════════

// Replace these with the actual use case details:
const CUSTOMER_NAME = "{{CUSTOMER_NAME}}";
const USE_CASE_TITLE = "{{USE_CASE_TITLE}}";
const WHEN_STATEMENT = "{{WHEN_STATEMENT}}";

const AGENT_ACTIONS = [
  "{{ACTION_1}}",
  "{{ACTION_2}}",
  "{{ACTION_3}}",
  "{{ACTION_4}}",
  "{{ACTION_5}}",
  "{{ACTION_6}}",
];

const STAKEHOLDERS = [
  // [Name, Title, FY Goal]
  ["{{NAME_1}}", "{{TITLE_1}}", "{{GOAL_1}}"],
  ["{{NAME_2}}", "{{TITLE_2}}", "{{GOAL_2}}"],
  ["{{NAME_3}}", "{{TITLE_3}}", "{{GOAL_3}}"],
];

// Business Value KPIs: [KPI Name, Target, Source]
const BIZ_KPIS = [
  ["{{BIZ_KPI_1}}", "{{TARGET_1}}", "{{SOURCE_1}}"],
  ["{{BIZ_KPI_2}}", "{{TARGET_2}}", "{{SOURCE_2}}"],
  ["{{BIZ_KPI_3}}", "{{TARGET_3}}", "{{SOURCE_3}}"],
  ["{{BIZ_KPI_4}}", "{{TARGET_4}}", "{{SOURCE_4}}"],
  ["{{BIZ_KPI_5}}", "{{TARGET_5}}", "{{SOURCE_5}}"],
];

// Financial Impact: [KPI, Impact Description, Source]
const FINANCIAL_IMPACTS = [
  ["{{KPI}}", "{{IMPACT_DESCRIPTION}}", "{{SOURCE}}"],
];

const TOTAL_VALUE_OVERVIEW = "{{2-3 sentence overview citing benchmarks}}";

// Topic KPIs: { topicName: [[KPI Name, Target, Source], ...] }
const TOPIC_KPIS = {
  "{{TOPIC_1}}": [
    ["{{KPI}}", "{{TARGET}}", "{{SOURCE}}"],
  ],
  "{{TOPIC_2}}": [
    ["{{KPI}}", "{{TARGET}}", "{{SOURCE}}"],
  ],
};

// Guardrail KPIs: [Guardrail, Target, Source]
const GUARDRAIL_KPIS = [
  ["{{GUARDRAIL_1}}", "0", "{{SOURCE}}"],
  ["{{GUARDRAIL_2}}", "0", "{{SOURCE}}"],
];

// ══════════════════════════════════════════════════════════════
// DOCUMENT ASSEMBLY
// ══════════════════════════════════════════════════════════════

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 20 } } },
  },
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          spacing: { after: 80 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BLUE_MID, space: 6 } },
          children: [
            new TextRun({ text: "Agentforce Care Plan Health Check", font: "Arial", size: 16, color: BLUE_MID, bold: true }),
            new TextRun({ text: `\t${CUSTOMER_NAME} \u2014 ${USE_CASE_TITLE}`, font: "Arial", size: 16, color: "666666" }),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: GRAY_BORDER, space: 4 } },
          children: [
            new TextRun({ text: `Confidential \u2014 ${CUSTOMER_NAME} x Salesforce`, font: "Arial", size: 14, color: "999999" }),
            new TextRun({ text: "\tPage ", font: "Arial", size: 14, color: "999999" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 14, color: "999999" }),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
        })],
      }),
    },
    children: [
      // ── TITLE ──
      new Paragraph({ spacing: { after: 40 },
        children: [new TextRun({ text: "Agentforce Care Plan Health Check", font: "Arial", size: 40, bold: true, color: BLUE_DARK })] }),
      new Paragraph({ spacing: { after: 200 },
        children: [new TextRun({ text: `${USE_CASE_TITLE} \u2014 ${CUSTOMER_NAME}`, font: "Arial", size: 24, color: BLUE_MID })] }),

      // ── USE CASE SUMMARY ──
      sectionHeading("Use case summary"),
      subHeading("When (moment)"),
      bodyText(WHEN_STATEMENT),

      subHeading("Desired agent actions"),
      ...AGENT_ACTIONS.map(a => new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { before: 40, after: 40 },
        children: [new TextRun({ text: a, font: "Arial", size: 20 })],
      })),

      subHeading("Key stakeholders"),
      new Table({
        width: { size: FULL_WIDTH, type: WidthType.DXA },
        columnWidths: [2800, 2600, 3960],
        rows: [
          new TableRow({ children: [hCell("Stakeholder", 2800), hCell("Title", 2600), hCell("FY Goal", 3960)] }),
          ...STAKEHOLDERS.map(([name, title, goal]) =>
            new TableRow({ children: [dCell(name, 2800, { bold: true }), dCell(title, 2600), dCell(goal, 3960)] })
          ),
        ],
      }),

      // ── PAGE 2: BUSINESS VALUE ──
      new Paragraph({ children: [new PageBreak()] }),
      sectionHeading("Business value assessment"),
      bodyText("The below business KPIs are aligned with the desired outcome from deploying this agent. By assessing their value before and after agent deployment, we can begin to measure the financial return of the Agentforce solution."),

      new Paragraph({ spacing: { before: 160, after: 80 } }),
      kpiTable(
        [2100, 1200, 1600, 1100, 1100, 1060, 1200],
        ["KPI Name", "Target", "Source", "Initial", "Current", "Change (\u0394)", "Status"],
        BIZ_KPIS.map(([name, target, source]) => [name, target, source, "", "", "", ""])
      ),

      bodyText("Status: \u201COn Track\u201D indicates that the KPI has met the target OR is having a positive financial impact. A status of \u201CNeeds Review\u201D indicates that the KPI is off target and that the financial impact needs investigation.", { italics: true, spaceBefore: 120, spaceAfter: 200 }),

      subHeading("Business value impact measures"),
      bodyText("The following industry-standard benchmarks translate changes in the business value KPIs above into estimated cost savings or revenue impact. All values are presented as ranges to account for variability."),

      new Paragraph({ spacing: { before: 120, after: 40 } }),
      new Table({
        width: { size: FULL_WIDTH, type: WidthType.DXA },
        columnWidths: [2400, 4560, 2400],
        rows: [
          new TableRow({ children: [hCell("KPI", 2400), hCell("Estimated Financial Impact", 4560), hCell("Source", 2400)] }),
          ...FINANCIAL_IMPACTS.map(([kpi, impact, source]) =>
            new TableRow({ children: [dCell(kpi, 2400, { bold: true }), dCell(impact, 4560), dCell(source, 2400)] })
          ),
        ],
      }),

      subHeading("Total business value overview"),
      bodyText(TOTAL_VALUE_OVERVIEW),

      // ── PAGE 3: TECHNICAL HEALTH ──
      new Paragraph({ children: [new PageBreak()] }),
      sectionHeading("Technical health assessment"),

      subHeading("Topic performance evaluation"),
      bodyText("This section evaluates the technical execution of the Agent\u2019s specific Topics. By monitoring how effectively the Agent triggers the correct Topic and completes the associated Actions, we can isolate high-performing capabilities from those requiring further refinement or additional knowledge grounding."),

      // Generate one table per topic
      ...Object.entries(TOPIC_KPIS).flatMap(([topicName, kpis]) => [
        new Paragraph({ spacing: { before: 200, after: 40 } }),
        bodyText(`Topic: ${topicName}`, { color: BLUE_DARK }),
        kpiTable(
          [2100, 1200, 1600, 1100, 1100, 1060, 1200],
          ["KPI Name", "Target", "Source", "Initial", "Current", "Change (\u0394)", "Status"],
          kpis.map(([name, target, source]) => [name, target, source, "", "", "", ""])
        ),
      ]),

      // Guardrails
      new Paragraph({ spacing: { before: 280 } }),
      subHeading("Guardrail performance evaluation"),
      bodyText("This section audits the Agent\u2019s adherence to defined operational boundaries and safety protocols. By monitoring guardrail triggers and policy violations, we ensure the Agent remains within its intended functional scope and maintains data privacy and brand integrity standards."),

      new Paragraph({ spacing: { before: 120, after: 40 } }),
      kpiTable(
        [2600, 1100, 1600, 1100, 1100, 960, 900],
        ["Guardrail KPI", "Target", "Source", "Initial", "Current", "Change (\u0394)", "Status"],
        GUARDRAIL_KPIS.map(([name, target, source]) => [name, target, source, "", "", "", ""])
      ),

      bodyText("A guardrail KPI with a non-zero value in the \u201CCurrent\u201D column requires immediate investigation. Any breach of defined guardrails should be treated as a critical defect and escalated to the platform team for topic or action reconfiguration.", { italics: true, spaceBefore: 120 }),
    ],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/careplan.docx", buffer);
  console.log("Done: careplan.docx created");
});
