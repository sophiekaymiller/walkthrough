import React from "react";
// import Question from "./components/Question";


export default block => {
  return React.createElement(
    () =>   <div className="myquestion">

        <div>
        <p></p>
        </div>
        <div className="col-12">
            <table className="table">
              <tr>
                <th>Question</th>
                <th>Percent Correct</th>
              </tr>
              <tr>
              <td scope = "row">{block.question}</td>
              <td scope= "row">{block.percent_correct}</td>
              </tr>

        </table>
        </div>
      </div>

  );
};
