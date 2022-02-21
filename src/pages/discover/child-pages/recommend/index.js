import React, { memo } from 'react'

import TopBanner from './child-cpns/top-banner'
import HotRecommend from './child-cpns/hot-recommend';
import RecommendRanking from './child-cpns/recommend-ranking'
import NewAlbum from './child-cpns/new-album';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

const Recommend = memo(() => {
  return (
    <RecommendWraper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  )
})

export default Recommend
