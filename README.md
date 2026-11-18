# Pilotbrief

**Enterprise product marketing and pilot design**

Pilotbrief helps a product marketer turn discovery into measurable pilot criteria. Record the baseline, target, observed result, and measurement owner for each criterion, then export a brief for the pilot review.

[Open the live demo](https://johnmir94.github.io/pilotbrief/)

## Why I built it

I built this around a familiar enterprise product marketing task: translating a buyer’s operational problem into an outcome the buying team can measure and discuss.

## Try the sample

1. Open **Time to assemble a review packet (hours)**. The sample moves from an eight-hour baseline to five hours against a four-hour target. That counts as an improvement and still falls short of the target.
2. Change **Observed** to `4`, keep **Lower is better**, and click **Save criterion**. Check how the **Criteria met** count changes.
3. Add a criterion with a baseline, target, and evidence owner. Leave **Observed** blank until you have a measurement.
4. Click **Download Markdown brief** to export the criteria and their outcomes.

The scores summarize the thresholds you enter. The rollout decision belongs to the pilot team.

## Run locally

Download the repository ZIP or clone it, then open `index.html` in a modern browser.

```sh
git clone https://github.com/johnmir94/pilotbrief.git
cd pilotbrief
```

The app uses HTML, CSS, and JavaScript and runs entirely in the browser without an account or backend. Sample data is fictional. Edits stay in the current tab, so download the Markdown before reloading or closing it.

## Source files

| File | Role |
| --- | --- |
| `index.html` | Workspace layout and controls |
| `style.css` | Responsive styling |
| `data.js` | Fictional sample workspace |
| `app.js` | Editing, validation, summaries, and Markdown export |
