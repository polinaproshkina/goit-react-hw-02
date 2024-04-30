import Description from './Description.jsx'
import Options from './Options.jsx'
import Feedback from './Feedback.jsx'
import Notification from './Notification.jsx'
import "modern-normalize"
import { useEffect, useState } from 'react'


export default function App() {

    const [clicks, setClicks] = useState(() => {
      const savedClicks = window.localStorage.getItem("saved-clicks");
      
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
      return {
       good: 0,
      neutral: 0,
      bad: 0
    };
  });

    useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  
  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
        [feedbackType]:clicks[feedbackType]+1
      })
  }


  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const resetBtn=()=>{
    setClicks({
      good: 0,
    neutral: 0,
    bad: 0
    })
  }

  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);


  return (
    <>
      <Description/>
      <Options onUpdate={updateFeedback} onReset={resetBtn} totalFeedbackValue={totalFeedback } />
      {totalFeedback < 1 ? (<Notification />) : (<Feedback value={clicks} totalValue={totalFeedback} positiveFeedbackValue={positiveFeedback} />)}
    </>
  )
}
