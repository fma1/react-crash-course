import React, { useEffect, useRef, useState } from 'react';
import './QuestionList.css';

// Note: Requires "Allow CORS" extension in Chrome
const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

const CORRECT = 'CORRECT';
const INCORRECT = 'INCORRECT';
const PARTIALLY_CORRECT = 'PARTIALLY_CORRECT';

export default function QuestionList() {
  // Write your code here.
  const questionsMapRef = useRef(null);
  const submissionsMapRef = useRef(null);
  const countMapRef = useRef(null);
  const [doneFetch, setDoneFetch] = useState(false);
  
  useEffect(() => {
    const questionLstPromise =
      fetch(QUESTIONS_API_BASE_URL)
        .then(res => res.json())
        .then(itemsAry => {
          console.log('itemsAry');
          console.log(itemsAry);
          const map = new Map();
          itemsAry.forEach(item => {
            const categoryAry = map.has(item.category) ? map.get(item.category) : [];
            categoryAry.push(item);
            map.set(item.category, categoryAry);
          });
          questionsMapRef.current = map;
          console.log('First promise');
          console.log(questionsMapRef);
        });
    const submissionLstPromise =
      fetch(SUBMISSIONS_API_BASE_URL)
        .then(res => res.json())
        .then(itemsAry => {
          const map = new Map();
          itemsAry.forEach(item => {
            map.set(item.questionId, item.status);
          });
          submissionsMapRef.current = map;
          console.log('Second promise');
          console.log(submissionsMapRef);
        });

    Promise.all([questionLstPromise, submissionLstPromise])
      .then(() => {
        const questionsMap = questionsMapRef.current;
        const submissionsMap = submissionsMapRef.current;
        const countMap = new Map();

        countMapRef.current = countMap;

        // Heavy processing should not be done in the render() method
        questionsMap.forEach((itemAry, category) => {
          const numQuestionsCompleted =
            itemAry.reduce((acc, curr) => {
              const itemStatus = submissionsMap.get(curr.id);
              return itemStatus === CORRECT ? acc + 1 : acc;
            }, 0);

          countMap.set(category, numQuestionsCompleted);
        });
        
        setDoneFetch(true);
      });
  }, []);
  
  return (
    <>
      {doneFetch ? 
        <div>
          { Array.from(questionsMapRef.current.keys()).map(category => {
            const itemsAry = questionsMapRef.current.get(category);
            return (
              <div className="category" key={category}>
                <h2>{category} - {countMapRef.current.get(category)} / {itemsAry.length}</h2>
                {itemsAry.map(item => 
                  <div className="question" key={item.id}>
                    {getStatusDiv({ item, submissionsMap: submissionsMapRef.current })}
                    <h3>{item.name}</h3>
                  </div>
                )}
              </div>
            );
          }) } 
        </div>
                    : <div>Loading...</div>}
    </>
  );
}

function getStatusDiv({ item, submissionsMap }) {
  const itemStatus = submissionsMap.get(item.id);

  if (itemStatus === CORRECT) {
    return <div key={item.name} className="status correct" />;
  } else if (itemStatus === PARTIALLY_CORRECT) {
    return <div key={item.name} className="status partially-correct" />;
  } else if (itemStatus === INCORRECT) {
    return <div key={item.name} className="status incorrect" />;
  } else {
    return <div key={item.name} className="status unattempted" />;
  }
}
