"use client";

import { useMemo, useState } from "react";

const businessTypes = ["Restaurant / food", "Retail / shop", "Local service", "Personal brand"] as const;
type BusinessType = (typeof businessTypes)[number];

const goalOptions = [
  {
    label: "Get more customers",
    title: "Footfall content",
    copy: "Make it obvious why someone should choose you today — with real people, your strongest offer and a reason to visit.",
    plan: "Content day · 6 videos",
    outcome: "A week of ready-to-post videos",
    ideas: {
      "Restaurant / food": ["The dish worth leaving the house for", "What a first visit feels like", "This week’s special, served properly"],
      "Retail / shop": ["The item people keep coming back for", "What you can get in-store today", "A quick walk-through that saves shoppers time"],
      "Local service": ["The problem you solve in 20 seconds", "A real customer question, answered", "Why people choose you locally"],
      "Personal brand": ["The one thing people get wrong about your work", "A useful tip your customers can use today", "The story behind what you do"],
    },
  },
  {
    label: "Launch something",
    title: "Launch kit",
    copy: "Build anticipation, reveal the big thing and give people a clear next step — all from one focused shoot.",
    plan: "Starter shoot · 3 videos",
    outcome: "A teaser-to-launch content sequence",
    ideas: {
      "Restaurant / food": ["A teaser without giving it all away", "The first reveal of the new dish or menu", "The launch-day invitation"],
      "Retail / shop": ["A quick ‘something new is coming’ tease", "The product reveal people can zoom into", "The first customer reaction"],
      "Local service": ["The problem your new offer solves", "What the new service actually looks like", "Who it is perfect for"],
      "Personal brand": ["The behind-the-scenes build-up", "The reveal in your own words", "A direct call for people to get involved"],
    },
  },
  {
    label: "Look more premium",
    title: "Brand polish",
    copy: "Give your business a sharper first impression with close-ups, detail and personality that feel intentional — never overdone.",
    plan: "Content day · 6 videos",
    outcome: "A stronger visual identity online",
    ideas: {
      "Restaurant / food": ["Cinematic detail from kitchen to table", "Your signature dish in close-up", "The people and craft behind the food"],
      "Retail / shop": ["A clean product detail reel", "A polished store walk-through", "Your best-selling range, styled simply"],
      "Local service": ["The care behind the work", "A premium before-and-after moment", "Meet the person clients trust"],
      "Personal brand": ["A founder film with purpose", "Your process, made visual", "A high-quality introduction to your world"],
    },
  },
  {
    label: "Stay consistent",
    title: "Monthly rhythm",
    copy: "Stop scrambling for posts. Build a repeatable content bank around real moments, offers, people and the seasons ahead.",
    plan: "Monthly · 12 videos",
    outcome: "A reliable content rhythm every month",
    ideas: {
      "Restaurant / food": ["A dish of the week", "A customer favourite explained", "A kitchen moment people do not usually see"],
      "Retail / shop": ["What just landed in-store", "A product recommendation of the week", "A quick staff pick"],
      "Local service": ["A weekly practical tip", "A common question, answered", "A before-and-after from the week"],
      "Personal brand": ["A sharp opinion or insight", "A behind-the-scenes day", "A story from your work that teaches something"],
    },
  },
];

export function GoalFinder() {
  const [businessType, setBusinessType] = useState<BusinessType>(businessTypes[0]);
  const [activeGoal, setActiveGoal] = useState(goalOptions[0]);
  const ideas = useMemo(() => activeGoal.ideas[businessType], [activeGoal, businessType]);

  return (
    <section className="goal-finder" aria-labelledby="goal-finder-title">
      <div className="goal-finder-intro">
        <p>Not sure where to start?</p>
        <h2 id="goal-finder-title">Choose your goal.<br /><em>See the move.</em></h2>
        <p>Answer two quick questions and get a practical first content plan — built for a real local business, not marketing waffle.</p>
        <div className="goal-finder-promise">
          <span>01</span><p>Tailored to your business</p>
          <span>02</span><p>Three ideas to start with</p>
          <span>03</span><p>Ready to turn into a brief</p>
        </div>
      </div>

      <div className="goal-finder-tool">
        <fieldset className="goal-finder-step">
          <legend><span>01</span> What kind of business are you?</legend>
          <div className="goal-finder-businesses">
            {businessTypes.map((type) => (
              <button
                type="button"
                key={type}
                className={businessType === type ? "is-selected" : ""}
                aria-pressed={businessType === type}
                onClick={() => setBusinessType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="goal-finder-step">
          <legend><span>02</span> What needs to happen next?</legend>
          <div className="goal-finder-options">
            {goalOptions.map((goal, index) => (
              <button
                type="button"
                key={goal.label}
                className={activeGoal.label === goal.label ? "is-selected" : ""}
                aria-pressed={activeGoal.label === goal.label}
                onClick={() => setActiveGoal(goal)}
              >
                <span>0{index + 1}</span>
                {goal.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="goal-finder-result" aria-live="polite">
          <p>Your {businessType.toLowerCase()} plan</p>
          <h3>{activeGoal.title}</h3>
          <p>{activeGoal.copy}</p>

          <div className="goal-finder-facts">
            <div><span>Best fit</span><strong>{activeGoal.plan}</strong></div>
            <div><span>You&apos;ll get</span><strong>{activeGoal.outcome}</strong></div>
          </div>

          <div className="goal-finder-ideas">
            <p>First three videos to make</p>
            <ol>
              {ideas.map((idea, index) => <li key={idea}><span>0{index + 1}</span>{idea}</li>)}
            </ol>
          </div>

          <a href="#plan">Turn this into a brief <span aria-hidden="true">↘</span></a>
        </div>
      </div>
    </section>
  );
}
