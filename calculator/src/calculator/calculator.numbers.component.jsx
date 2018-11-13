import React from "react";
import Button from "./calculator.button.component";

export default () => {
  const buttons = () => {
    let allButtons = [];
    let buttonIndex = 1;
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
      let rowButtons = [];
      for (let buttonNumber = 1; buttonNumber <= 3; buttonNumber++) {
        rowButtons.push(<Button value={buttonIndex} />);
        buttonIndex++;
      }
      allButtons.push(<div className="row">{rowButtons}</div>);
    }
    return allButtons;
  };
  return buttons();
};
