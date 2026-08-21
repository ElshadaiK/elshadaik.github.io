import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer @ Audible",
          "AI & Agentic Systems Builder",
          "Graduate CS Student @ Georgia Tech",
          "Technical Content Creator",
          "Product Builder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
        delay: 45,
      }}
    />
  );
}

export default Type;