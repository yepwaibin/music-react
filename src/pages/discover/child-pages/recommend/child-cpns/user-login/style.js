import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  height: 126px;
  padding-top: 0;
  background-position: 0 0;
  .user_login_top {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
  }

  .user_login_bottom {
    display: block;
    margin: 0 auto;
    background-position: 0 -195px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    line-height: 31px;
    width: 100px;
    height: 31px;
    text-decoration: none;

    :hover {
      background-position: -110px -195px;
    }
  }
`;
