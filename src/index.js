import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Button from "./components/button";
import Statistics from "./components/statistics";
const App = (props) => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const decreaseByOne = () => setCounter(counter - 1);

  const setToZero = () => setCounter(0);

  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);
  const [total, setTotal] = useState(0);

  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  const showRandomAnecdote = () => {
    let index = Math.floor(Math.random() * props.anecdotes.length);
    return props.anecdotes[index];
  };

  const [anecdote, setAnecdote] = useState(showRandomAnecdote);

  const [copy, setCopy] = useState({ ...points });
  const handleVote = () => {
    let key = anecdotes.indexOf(anecdote);
    copy[key] += 1;
    setCopy(copy);
  };

  return (
    <>
      <Header text={"Anecdote of the day"} />
      <br />
      <Button
        handleClick={() => setAnecdote(showRandomAnecdote)}
        text="Next Anecdote"
      />
      <Button handleClick={() => handleVote()} text="Vote" />
      <Header text={"give feedback"} />
      <Button
        handleClick={() => {
          setGoodCounter(goodCounter + 1);
          setTotal(total + 1);
        }}
        text="Good"
      />
      <Button
        handleClick={() => {
          setNeutralCounter(neutralCounter + 1);
          setTotal(total + 1);
        }}
        text="Neutral"
      />
      <Button
        handleClick={() => {
          setBadCounter(badCounter + 1);
          setTotal(total + 1);
        }}
        text="Bad"
      />
      <Statistics
        good={goodCounter}
        neutral={neutralCounter}
        bad={badCounter}
        total={total}
      />
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = createRoot(document.getElementById("root"));
root.render(<App anecdotes={anecdotes} />);
