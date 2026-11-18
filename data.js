window.project = {
  "name": "Pilotbrief",
  "tag": "Enterprise pilot planning",
  "title": "Define what a pilot has to prove.",
  "desc": "Turn a discovery call into a measurable pilot. Compare the target with the baseline, document evidence, and export the decision brief.",
  "labels": [
    "Improvement",
    "Criteria met",
    "Criteria tracked"
  ],
  "fields": [
    [
      "Success criterion",
      "claim"
    ],
    [
      "Baseline",
      "baseline"
    ],
    [
      "Target",
      "target"
    ],
    [
      "Observed",
      "observed"
    ],
    [
      "Direction",
      "direction"
    ],
    [
      "Evidence and owner",
      "notes"
    ]
  ],
  "sample": [
    {
      "claim": "Time to assemble a review packet (hours)",
      "baseline": 8,
      "target": 4,
      "observed": 5,
      "direction": "Lower is better",
      "notes": "Governance operations · Compare median time across five matched reviews."
    },
    {
      "claim": "Model records with complete ownership metadata (%)",
      "baseline": 60,
      "target": 95,
      "observed": 97,
      "direction": "Higher is better",
      "notes": "Model inventory lead · Compare the same 50 records before and after the pilot."
    },
    {
      "claim": "Open high-priority actions older than 30 days",
      "baseline": 16,
      "target": 8,
      "observed": 7,
      "direction": "Lower is better",
      "notes": "Risk program manager · Check the same portfolio and document any changes in scope."
    }
  ],
  "readme": "Inspired by John Miranda’s enterprise AI product marketing and technical-to-commercial translation experience. The fictional pilot shows how discovery gets translated into success criteria, an evidence plan, and a rollout decision."
};
