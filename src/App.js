import React from 'react';
import ReactDOM from 'react-dom';
import Components from "./components.js";
import wordCloud from "./assets/wordcloud.svg";
import './App.css';

//import quiz questions
let jsonData = require('./quiz_questions.json');

const filterWords = [
  'do',
  'has',
  'will',
  'to',
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


const analyzeQuestion = question => {
  const splitText = question
    .toLowerCase()
    // regular expression replaces extraneous characters
    .replace(/[.]/g, '')
    .split(' ')
    .filter(word => !filterWords.includes(word));
  return splitText;
};

const percentCorrectRange = arrOfobj => {
  const result = {};
  arrOfobj.forEach(questionPercentCorrect => {
    const { question, percent_correct: percentCorrect } = questionPercentCorrect;
    const splitText = analyzeQuestion(question);
    splitText.forEach(elementText => {
      if (!result[elementText]) {
        if (percentCorrect * 100 > 50) {
          result[elementText] = {
            highScoreCount: 1,
            lowScoreCount: 0,
            totalWordFrequency: 1,
            percentageOfTotalQuestions: 1 / arrOfobj.length,
          };
          if (percentCorrect * 100 <= 50) {
            result[elementText] = {
              highScoreCount: 0,
              lowScoreCount: 1,
              totalWordFrequency: 1,
              percentageOfTotalQuestions: 1 / arrOfobj.length,
            };
          }
        }
      }
      if (result[elementText]) {
        if (percentCorrect * 100 > 50) {
          result[elementText].highScoreCount += 1;
          result[elementText].totalWordFrequency += 1;
          result[elementText].percentageOfTotalQuestions =
            result[elementText].totalWordFrequency / arrOfobj.length;
        }
        if (percentCorrect * 100 <= 50) {
          result[elementText].lowScoreCount += 1;
          result[elementText].totalWordFrequency += 1;
          result[elementText].percentageOfTotalQuestions =
            result[elementText].totalWordFrequency / arrOfobj.length;
        }
      }
    });
  });
  return result;
};

const formatAndSortData = (dataObj, sortByStr) => {
  if (
    sortByStr === 'totalWordFrequency' ||
    sortByStr === 'highScoreCount' ||
    sortByStr === 'lowScoreCount'
  ) {
    const keys = Object.keys(dataObj);
    const formatedDataArray = [];
    keys.forEach(w => {
      const { totalWordFrequency, lowScoreCount, highScoreCount } = dataObj[w];
      formatedDataArray.push({
        word: w,
        totalWordFrequency,
        highScoreCount,
        lowScoreCount,
      });
    });
    return formatedDataArray.sort((a, b) => b[sortByStr] - a[sortByStr]);
  }
  throw new Error(
    "Please enter type to sort by 'totalWordFrequency', 'highScoreCount', 'lowScoreCount'"
  );
};


const scoreData = percentCorrectRange(jsonData);
const totalWordFrequency = formatAndSortData(scoreData, 'totalWordFrequency');
const highScore = formatAndSortData(scoreData, 'highScoreCount');
const lowScore = formatAndSortData(scoreData, 'lowScoreCount');

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <div className="jumbotron">
        <h1 className="jumbotron-header">Newsela Code Walkthrough</h1>
        </div>

        {console.log('totalWordFrequency ', totalWordFrequency.slice(0, 9))}
        {console.log('highScoreCount ', highScore.slice(0, 9))}

        {lowScore.word[0]}
        {console.log('lowScoreCount', lowScore.slice(0, 9))}




      <table className="table">
        <tr>
        <th>Question</th>
        <th>Percent Correct</th>
        </tr>
        <tr>
          <td>{jsonData.map(block => block.question)}</td>
          <td>{jsonData.map(block => block.percent_correct)}</td>
        </tr>
      </table>

    </header>
  </div>


  );
}


export default App;
