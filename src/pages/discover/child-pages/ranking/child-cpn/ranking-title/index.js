import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import SongOperationBar from "@/components/song-operation-bar";

import { RankingTitleWrapper } from "./style";
import { formatMonthDay } from "@/utils/format-utils";

const RankingTitle = memo(() => {
  const { topInfo = {} } = useSelector(
    (state) => ({
      topInfo: state.getIn(["ranking", "playList"]),
    }),
    shallowEqual
  );

  return (
    <RankingTitleWrapper>
      <div className="image">
        <img src={topInfo.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
          <div className="update-f">（{"每日更新:TODO"}）</div>
        </div>
        <SongOperationBar
          favorTitle={`(${topInfo.subscribedCount})`}
          shareTitle={`(${topInfo.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${topInfo.commentCount})`}
        />
      </div>
    </RankingTitleWrapper>
  );
});

export default RankingTitle;
