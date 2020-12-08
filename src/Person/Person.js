import React from "react";
const person = (props) => {
  return (
    <div>
      <p>
        Hello its me {props.name} . I am {props.age} years old !!!!. 
      <span>{props.children}</span>

      </p>
    </div>
  );
};

export default person;
