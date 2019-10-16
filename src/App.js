import React from 'react';
import './App.css';

//import quiz questions
let questionData = require('./quiz_questions.json');

// a subset of common english stop words from https://www.textfixer.com/tutorials/common-english-words.txt
const stopWords = [
  'do',
  'has',
  'will',
  'to',
  'from',
  'at',
  'of',
  'between',
  'the',
  'a',
  'an',
  'and',
  'but',
  'so',
  'for',
  'in',
  'was',
  '',
  'that',
  'is',
  'are',
  'as',
  'does',
  'on',
  'by',
  'it',
  'be',
  'with',
  'this',
  'than',
  'been',
  'its',
];


const analyzeQuestion = text => {
  const splitText = text
    .toLowerCase()
    // regular expression replaces extraneous characters
    .replace(/[.]/g, '')
    // split using spaces
    .split(' ')
    // filter stopWords
    .filter(word => !stopWords.includes(word));
  return splitText;
};

const percentCorrectRange = frequencyArray => {
  const result = {};
  frequencyArray.forEach(questionPercentCorrect => {
    const { text, percent_correct: percentCorrect } = questionPercentCorrect;
    const splitText = analyzeQuestion(text);
    splitText.forEach(textElement => {
      if (!result[textElement]) {
        if (percentCorrect * 100 > 50) {
          result[textElement] = {
            highScoreCount: 1,
            lowScoreCount: 0,
            totalWordFrequency: 1,
            percentageOfTotalQuestions: 1 / frequencyArray.length,
          };
          if (percentCorrect * 100 <= 50) {
            result[textElement] = {
              highScoreCount: 0,
              lowScoreCount: 1,
              totalWordFrequency: 1,
              percentageOfTotalQuestions: 1 / frequencyArray.length,
            };
          }
        }
      }
      if (result[textElement]) {
        if (percentCorrect * 100 > 50) {
          result[textElement].highScoreCount += 1;
          result[textElement].totalWordFrequency += 1;
          result[textElement].percentageOfTotalQuestions =
            result[textElement].totalWordFrequency / frequencyArray.length;
        }
        if (percentCorrect * 100 <= 50) {
          result[textElement].lowScoreCount += 1;
          result[textElement].totalWordFrequency += 1;
          result[textElement].percentageOfTotalQuestions =
            result[textElement].totalWordFrequency / frequencyArray.length;
        }
      }
    });
  });
  return result;
};

const formatAndSortData = (dataObject, sortType) => {
  if (
    sortType === 'totalWordFrequency' ||
    sortType === 'highScoreCount' ||
    sortType === 'lowScoreCount'
  ) {
    const keys = Object.keys(dataObject);
    const formatedDataArray = [];
    keys.forEach(w => {
      const { totalWordFrequency, lowScoreCount, highScoreCount } = dataObject[w];
      formatedDataArray.push({
        word: w,
        totalWordFrequency,
        highScoreCount,
        lowScoreCount,
      });
    });
    return formatedDataArray.sort((a, b) => b[sortType] - a[sortType]);
  }
  throw new Error(
    "Please enter sort type 'totalWordFrequency', 'highScoreCount', 'lowScoreCount'"
  );
};


const scoreData = percentCorrectRange(questionData);

const totalWordFrequency = formatAndSortData(scoreData, 'totalWordFrequency');
const highScore = formatAndSortData(scoreData, 'highScoreCount');
const lowScore = formatAndSortData(scoreData, 'lowScoreCount');

function App() {

  const questionRender = questionData.map(q => <li>{q.text}</li>);
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <h1>Newsela Code Walkthrough</h1>
        <h3>Sophie Miller, October 16, 2019</h3>


        {console.log('totalWordFrequency ', totalWordFrequency.slice(0, 9))}
        {console.log('highScoreCount ', highScore.slice(0, 9))}
        {console.log('lowScoreCount', lowScore.slice(0, 9))}
        <div className="container">
        <div className="row">
        <h4> Question Data Set </h4>
        <div className="questionList">
        <ol>
        {questionRender}
        </ol>
        </div>
        </div>
        </div>
        </div>
    </header>
  </div>
  );
}


export default App;
