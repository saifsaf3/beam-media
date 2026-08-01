"use client";

import { FormEvent, useState } from "react";

const businessTypes = ["Restaurant / food", "Retail / shop", "Local service", "Other"];
const goals = ["More footfall", "Launch something", "Build trust", "Post consistently"];
const timings = ["This month", "Next month", "Just exploring"];

const plans = [
  {
    name: "Starter",
    deliverable: "3 short-form videos",
    note: "A focused first shoot",
  },
  {
    name: "Content day",
    deliverable: "6 short-form videos",
    note: "A full bank of content",
  },
  {
    name: "Monthly",
    deliverable: "12 videos every month",
    note: "Consistent social presence",
  },
];

export function ProjectPlanner() {
  const [businessType, setBusinessType] = useState(businessTypes[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [plan, setPlan] = useState(plans[1]);
  const [timing, setTiming] = useState(timings[0]);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const brief = [
    "Hey Beam Media — I’ve built a project brief on your website.",
    "",
    `Name: ${name || "Not added yet"}`,
    `Business: ${business || "Not added yet"}`,
    `Business type: ${businessType}`,
    `Location: ${location || "Not added yet"}`,
    `Main goal: ${goal}`,
    `Content plan: ${plan.name} — ${plan.deliverable}`,
    `Ideal timing: ${timing}`,
    `Anything else: ${details || "Nothing else yet"}`,
    "",
    "Can we talk through the next step?",
  ].join("\n");

  const whatsappHref = `https://wa.me/447508182314?text=${encodeURIComponent(brief)}`;

  function sendBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="project-planner" id="plan" aria-labelledby="planner-title">
      <div className="planner-heading">
        <p>Build your project</p>
        <h2 id="planner-title">Your content plan.<br /><em>In 60 seconds.</em></h2>
        <p>
          Pick what sounds right. We&apos;ll turn it into a ready-to-send WhatsApp
          brief so the first chat starts with the useful stuff.
        </p>
        <div className="planner-promise">
          <span>01</span><p>No account</p>
          <span>02</span><p>No payment</p>
          <span>03</span><p>Direct to the founders</p>
        </div>
      </div>

      <form className="planner-form" onSubmit={sendBrief}>
        <fieldset>
          <legend><span>01</span> What kind of business?</legend>
          <div className="planner-choice-grid planner-choice-grid-four">
            {businessTypes.map((type) => (
              <button
                type="button"
                className={businessType === type ? "is-selected" : ""}
                aria-pressed={businessType === type}
                onClick={() => setBusinessType(type)}
                key={type}
              >
                {type}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend><span>02</span> What should the content do?</legend>
          <div className="planner-choice-grid planner-choice-grid-four">
            {goals.map((item) => (
              <button
                type="button"
                className={goal === item ? "is-selected" : ""}
                aria-pressed={goal === item}
                onClick={() => setGoal(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend><span>03</span> Choose a starting plan</legend>
          <div className="planner-plan-grid">
            {plans.map((item) => (
              <button
                type="button"
                className={plan.name === item.name ? "is-selected" : ""}
                aria-pressed={plan.name === item.name}
                onClick={() => setPlan(item)}
                key={item.name}
              >
                <small>{item.name}</small>
                <strong>{item.deliverable}</strong>
                <span>{item.note}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend><span>04</span> Add the basics</legend>
          <div className="planner-input-grid">
            <label>
              Your name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Business name
              <input
                value={business}
                onChange={(event) => setBusiness(event.target.value)}
                name="business"
                autoComplete="organization"
                placeholder="Your business"
                required
              />
            </label>
            <label>
              Location
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                name="location"
                autoComplete="address-level2"
                placeholder="e.g. Birmingham"
                required
              />
            </label>
            <label>
              Ideal timing
              <select value={timing} onChange={(event) => setTiming(event.target.value)} name="timing">
                {timings.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
          <label className="planner-details">
            Anything we should know? <span>Optional</span>
            <textarea
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              name="details"
              rows={3}
              placeholder="A product launch, a special dish, an idea you already have…"
            />
          </label>
        </fieldset>

        <div className="planner-summary" aria-live="polite">
          <div>
            <p>Your brief</p>
            <strong>{plan.deliverable}</strong>
            <span>{businessType} · {goal} · {timing}</span>
          </div>
          <div className="planner-summary-actions">
            <button type="submit">Send on WhatsApp <span aria-hidden="true">↗</span></button>
            <button type="button" onClick={copyBrief}>{copied ? "Brief copied" : "Copy brief"}</button>
          </div>
        </div>
      </form>
    </section>
  );
}
