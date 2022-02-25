import React, { memo } from 'react'

import TopBanner from './child-cpns/top-banner'
import HotRecommend from './child-cpns/hot-recommend';
import RecommendRanking from './child-cpns/recommend-ranking'
import NewAlbum from './child-cpns/new-album';
import UserLogin from './child-cpns/user-login'
import ResidentSinger from './child-cpns/resident-singer'
import HotRadio from './child-cpns/hot-radio';
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
        <RecommendRight>
          <UserLogin />
          <ResidentSinger />
          <HotRadio />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
})

export default Recommend
