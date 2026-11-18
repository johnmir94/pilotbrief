# Pilotbrief

Use Pilotbrief to define what a pilot should prove and read the results against agreed targets. The summary distinguishes criteria that improved from criteria that met their targets. Each row can also capture who owns the measure and how it will be collected.

[Open the live demo](https://johnmir94.github.io/pilotbrief/)

## Run locally

Clone the repository or use **Code → Download ZIP** on GitHub. Open `index.html` in a modern browser. There’s no install, build step, or account required.

```sh
git clone https://github.com/johnmir94/pilotbrief.git
cd pilotbrief
```

## Sample workflow

1. Open **Time to assemble a review packet (hours)**. The sample moves from an eight-hour baseline to five hours against a four-hour target. That counts as an improvement and still falls short of the target.
2. Change **Observed** to `4`, keep **Lower is better**, and click **Save criterion**. Check how the **Criteria met** count changes.
3. Add a criterion with a baseline, target, and evidence owner. Leave **Observed** blank until you have a measurement.
4. Click **Download Markdown brief** to export the criteria and their outcomes.

## Workspace fields

| Field | What it captures |
| --- | --- |
| Baseline | Starting value, in the same units as the target and observed value |
| Target | Value the pilot must reach |
| Observed | Pilot result. Leave blank while measurement is pending |
| Direction | Higher is better or Lower is better |
| Evidence and owner | Measurement method, coverage, or responsible team |

## How it works

A higher-is-better criterion improves when the observed value exceeds the baseline and meets its target when it reaches or exceeds the target. A lower-is-better criterion improves when the observed value is below the baseline and meets its target when it reaches or falls below the target. Pending measurements stay in the criteria-tracked count and are excluded from the other two counts. All criteria count equally. The app supplies row-level results for the pilot team’s decision.

### Worked example

In the sample, assembling a review packet goes from eight hours to five, with a four-hour target. That is one improvement and zero targets met for that row. A result of four hours counts toward both. Use comparable units and measurement scope when entering the three values.

## Export and data handling

The Markdown brief contains summary counts, the recorded values and measurement direction for each saved criterion, evidence notes, and the outcome. Save pending edits before downloading.

Processing runs in the browser. The app has no backend and keeps edits in memory. Reloading reopens the fictional sample. Download the Markdown before closing the tab if you need a copy of your work.

## Files and checks

| File | Role |
| --- | --- |
| [`index.html`](index.html) | Workspace and controls |
| [`style.css`](style.css) | Responsive layout |
| [`data.js`](data.js) | Fictional seed data and field labels |
| [`app.js`](app.js) | Editing, validation, summaries, and Markdown export |

Run JavaScript syntax checks with Node.js. Use the sample workflow above for a manual check of editing, summary updates, and the export.

```sh
node --check app.js
node --check data.js
```

## Project context

The workflow reflects enterprise product marketing work that turns discovery into measurable outcomes and a structured pilot review. The sample is fictional and uses no internal employer materials or customer records.
