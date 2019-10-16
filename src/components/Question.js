import React from "react";

export default props => (
  <div className="myquestion">
    <hr />
    <div className="col-12 col-md-6 offset-md-3 pt-4">
          <table className="table table-sm table-striped table-hover m-auto">
            <thead>
              <tr>
              <th>Question</th>
              <th>Percent Correct</th>
              </tr>
            </thead>
            <tbody>
            <tr>
            <td>{props.block.text}</td>
            <td>{props.block.percent_correct}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
);
