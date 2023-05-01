/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a
          key="website"
          href="https://www.portalescolastart.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          STARTech
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
