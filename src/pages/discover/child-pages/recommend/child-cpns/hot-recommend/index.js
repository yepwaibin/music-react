import React, { memo, useEffect } from "react";

import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
import SongsCover from "@/components/songs-cover";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { RecommendWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreators";

const HotRecommend = memo(() => {
  const dispatch = useDispatch();

  const {hotRecommends} = useSelector((state) => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"]),
  }), shallowEqual);

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <RecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongsCover key={item.id} info={item}/>
        })}
      </div>
    </RecommendWrapper>
  );
});

export default HotRecommend;
