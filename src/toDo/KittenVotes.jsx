import React, { useState } from "react";
import { Card, Button, CardGrid } from "@edx/paragon";

/* INSTRUCTIONS for useState
    Using the `useState` hook, create a buttons that increment each kitten's vote count
    Display the vote counts.
    Remember that useState can be called more than once!

    BONUS:
      - Add a button that clears the count
      - Display the total number of votes
*/

const KittenVotes = () => {
  const [meowserClicks, setMeowserClicks] = useState(0);
  const [princessClicks, setPrincessClicks] = useState(0);

  const clearAll = () => {
    setMeowserClicks(0);
    setPrincessClicks(0);
  };

  return (
    <>
      <h1>useState</h1>
      {/* Display vote counts here */}
      <div className="py-3">Meowser was clicked {meowserClicks} times!</div>
      <div className="py-3">
        Princess Purr was clicked {princessClicks} times!
      </div>
      <div className="py-3">Total votes: {meowserClicks + princessClicks}</div>
      <Button variant="secondary" onClick={clearAll}>
        Clear
      </Button>
      <CardGrid>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="http://placekitten.com/200/300" />
          <Card.Body>
            <Card.Title>Meowser</Card.Title>
            <Card.Text>Vote for Meowser!</Card.Text>
            {/* Meowser button here */}
            <Button
              className="mr-2"
              variant="primary"
              onClick={() =>
                setMeowserClicks((meowserClicks) => meowserClicks + 1)
              }
            >
              Click Me
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="http://placekitten.com/200/299" />
          <Card.Body>
            <Card.Title>Princess Purr</Card.Title>
            <Card.Text>Vote for Princess Purr!</Card.Text>
            {/* Princess Purr button here */}
            <Button
              className="mr-2"
              variant="primary"
              onClick={() =>
                setPrincessClicks((princessClicks) => princessClicks + 1)
              }
            >
              Click Me
            </Button>
          </Card.Body>
        </Card>
      </CardGrid>
    </>
  );
};

export default KittenVotes;
