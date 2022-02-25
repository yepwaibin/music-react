import styled from "styled-components";

export const ThemeHeaderSmallWrapper = styled.div`
  position: relative;
  height: 23px;
  border-bottom: 1px solid #ccc;
  color: #333;
  .left {
    position: absolute;
    left: 0;
    font-weight: bold;
  }
  .right {
    position: absolute;
    right: 0;
  }
`;
