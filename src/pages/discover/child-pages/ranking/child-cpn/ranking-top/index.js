import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { RankingTopWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import {
  changeCurrentIndex,
  getPlayListAction,
} from "../../store/actionCreator";

const RankingTop = memo(() => {
  const { topList, currentIndex } = useSelector(
    (state) => ({
      topList: state.getIn(["ranking", "topList"]),
      currentIndex: state.getIn(["ranking", "currentIndex"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const id = topList[currentIndex] && topList[currentIndex].id;
    console.log(id);
    if (!id) return;
    dispatch(getPlayListAction(id));
  }, [topList, dispatch, currentIndex]);

  const handleItemClick = (index) => {
    dispatch(changeCurrentIndex(index));
    const id = topList[currentIndex].id;
    dispatch(getPlayListAction(id));
  };

  return (
    <RankingTopWrapper>
      {topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => handleItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </RankingTopWrapper>
  );
});

export default RankingTop;
