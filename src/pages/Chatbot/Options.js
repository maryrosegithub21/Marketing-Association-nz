import React from "react";

const Options = (props) => {
  const options = [
    { text: "Option 1", handler: props.actionProvider.handleOption1, id: 1 },
    { text: "Option 2", handler: props.actionProvider.handleOption2, id: 2 },
    { text: "Option 3", handler: props.actionProvider.handleOption3, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <li key={option.id} onClick={option.handler}>
      {option.text}
    </li>
  ));

  return <ul>{optionsMarkup}</ul>;
};

export default Options;
