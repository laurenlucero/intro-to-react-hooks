import React, { useState } from "react";
import { Button } from "@edx/paragon";

/* INSTRUCTIONS for useState
    Using the `useState` hook, create a button that increments a counter and displays the current button count

    BONUS:
      - Add a button that clears the count
*/

const StatefulButton = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div className="mb-5">
      <h2>useState</h2>
      <div className="py-3">I have been clicked {clicks} times!</div>
      <Button
        className="mr-2"
        variant="primary"
        onClick={() => setClicks((prevClicks) => prevClicks + 1)}
      >
        Click Me
      </Button>
      <Button variant="secondary" onClick={() => setClicks(0)}>
        Clear
      </Button>
    </div>
  );
};

export default StatefulButton;
