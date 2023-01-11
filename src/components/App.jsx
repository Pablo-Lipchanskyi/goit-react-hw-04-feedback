import React from 'react';
import { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import css from 'components/app.module.css'

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad']
  const countTotalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = () => {
    return Math.round((good/countTotalFeedback) * 100)
  }
  const valueIncrement = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break
      case 'neutral':
        setNeutral(state => state + 1);
        break
      case 'bad':
        setBad(state => state + 1);
        break
      default:
        return
    }
  }

   return (
      <div className={css.div}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={valueIncrement}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positiveFeedbackPercentage() || 0}
          />
        </Section>
        </div>
    );
}

