import React, { memo } from "react";

import { ThemeHeaderSmallWrapper } from "./style";

const ThemeHeaderSmall = memo((props) => {
  const { title, more } = props;
  return (
    <ThemeHeaderSmallWrapper>
      <span className="left">{title}</span>
      {more && <a href="/todo" className="right">
        {more} &gt;
      </a>}
    </ThemeHeaderSmallWrapper>
  );
});

export default ThemeHeaderSmall;
