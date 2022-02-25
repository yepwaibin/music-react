import styled from "styled-components";

export const ResidentSingerWrapper = styled.div`
  /* margin-top: 15px; */
  padding: 20px;
  .resident-singer-bottom {
    display: block;
    width: 210px;
    height: 31px;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 4px;
    color: #333;
    background-color: #fafafa;
    text-decoration: none;
    text-align: center;
    line-height: 31px;
    font-weight: bold;
    border: 1px solid #c3c3c3;
  }

  .singer-list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        margin: 8px 0 0 10px;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }

        .name {
          margin-top: 5px;
        }
      }
    }
  }
`;
