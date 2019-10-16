# Example Code
**October 16, 2019**
### Sophie Miller




## Newsela Prompt
We'd like your analysis of the following question: What words or phrases appear more frequently in questions that students tend to do poorly on, and what appear more frequently in questions that students do well on?

It's acceptable to define "questions students did poorly/well on" as questions with percent correct values of less than 50% or greater than 50%, respectively. There may be other approaches or cutoff values that yield different results.


### Process
1. Initialize JSON Data
2. Analyze Questions and split into individual words  with 'analyzeQuestion' function

  - Cleanse Question Data of extraneous characters
  - Split Questions into words (splitText)
  - Compare stop words with splitText and remove splitText
  - return set of words


3. Get range of percent correct with function percentCorrectRange
  - for each question, get the percent correct
  - for each question, get splitText
  - evaluate if word is associated with lowScore or highScore, add to respective lowScoreCount or highScoreCount array


4. Format each word into data array containing word and it's statistics (`totalWordFrequency, highScoreCount, lowScoreCount`)

5. Return arrays to console

### Front end
Render index page with Questions


## Results
**totalWordFrequency**
1. {word: "sentence", totalWordFrequency: 2871, highScoreCount: 1975, lowScoreCount: 896}
2. {word: "following", totalWordFrequency: 2547, highScoreCount: 1707, lowScoreCount: 840}
3. {word: "which", totalWordFrequency: 2537, highScoreCount: 1640, lowScoreCount: 897}
4. {word: "select", totalWordFrequency: 2333, highScoreCount: 1414, lowScoreCount: 919}
5. {word: "article", totalWordFrequency: 2224, highScoreCount: 1220, lowScoreCount: 1004}
6. {word: "what", totalWordFrequency: 1994, highScoreCount: 1470, lowScoreCount: 524}
7. {word: "paragraph", totalWordFrequency: 1908, highScoreCount: 1074, lowScoreCount: 834}
8. {word: "read", totalWordFrequency: 1472, highScoreCount: 1012, lowScoreCount: 460}
9. {word: "best", totalWordFrequency: 1326, highScoreCount: 754, lowScoreCount: 572}

**highScoreCount**
1. {word: "sentence", totalWordFrequency: 2871, highScoreCount: 1975, lowScoreCount: 896}
2. {word: "following", totalWordFrequency: 2547, highScoreCount: 1707, lowScoreCount: 840}
3. {word: "which", totalWordFrequency: 2537, highScoreCount: 1640, lowScoreCount: 897}
4. {word: "what", totalWordFrequency: 1994, highScoreCount: 1470, lowScoreCount: 524}
5. {word: "select", totalWordFrequency: 2333, highScoreCount: 1414, lowScoreCount: 919}
6. {word: "article", totalWordFrequency: 2224, highScoreCount: 1220, lowScoreCount: 1004}
7. {word: "paragraph", totalWordFrequency: 1908, highScoreCount: 1074, lowScoreCount: 834}
8. {word: "read", totalWordFrequency: 1472, highScoreCount: 1012, lowScoreCount: 460}
9. {word: "word", totalWordFrequency: 1089, highScoreCount: 818, lowScoreCount: 271}

**lowScoreCount**


1. {word: "article", totalWordFrequency: 2224, highScoreCount: 1220, lowScoreCount: 1004}
2. {word: "select", totalWordFrequency: 2333, highScoreCount: 1414, lowScoreCount: 919}
3. {word: "which", totalWordFrequency: 2537, highScoreCount: 1640, lowScoreCount: 897}
4. {word: "sentence", totalWordFrequency: 2871, highScoreCount: 1975, lowScoreCount: 896}
5. {word: "following", totalWordFrequency: 2547, highScoreCount: 1707, lowScoreCount: 840}
6. {word: "paragraph", totalWordFrequency: 1908, highScoreCount: 1074, lowScoreCount: 834}
7. {word: "best", totalWordFrequency: 1326, highScoreCount: 754, lowScoreCount: 572}
8. {word: "what", totalWordFrequency: 1994, highScoreCount: 1470, lowScoreCount: 524}
9. {word: "read", totalWordFrequency: 1472, highScoreCount: 1012, lowScoreCount: 460}`


## Build and Test Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
