import React from "react";
import Numbers from "./calculator.numbers.component";
import Display from "./calculator.display.component";

export default () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-2">
          <Display />
          <Numbers />
        </div>
      </div>
    </div>
  );
};
