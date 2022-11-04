import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../styles/Main.css'

const Main = () => {
  const inputRef = useRef();

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <h3 className="text-light" >Rules</h3>
      <ol>
        <li>10 Questions</li>
        <li>Each question has 10 Points</li>
        <li>You should choose from 3 options</li>
      </ol>

      <form id="form">
        <input ref={inputRef} type="text" className="userid" placeholder="Username*" />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Main;
