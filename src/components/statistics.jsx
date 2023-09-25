import Display from "./display";
const Statistics = (props) => {
  let all = props.good + props.bad + props.neutral;
  if (props.total > 0) {
    return (
      <>
        <h1>Statistics</h1>
        <h2>Good</h2>
        <Display counter={props.good} />
        <br />
        <h2>Neutral</h2>
        <Display counter={props.neutral} />
        <br />
        <h2>Bad</h2>
        <Display counter={props.bad} />
        <h2>All</h2>
        <Display counter={all} />
        <h2>Average</h2>
        <Display counter={(all / 3).toFixed(1)} />
        <h2>Positive Porcent</h2>
        <Display counter={((props.good * 100) / 3).toFixed(0) + "%"} />
      </>
    );
  } else {
    return <h1>There's no comments yet</h1>;
  }
};

export default Statistics;
