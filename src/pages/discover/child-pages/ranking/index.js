import React, { memo, useEffect } from 'react'

import {RankingWrapper, RankingLeftWrapper, RankingRightWrapper} from './style'
import RankingTop from './child-cpn/ranking-top'
import RankingTitle from './child-cpn/ranking-title'
import RankingList from './child-cpn/ranking-list'
import {useDispatch } from 'react-redux'
import { getTopListAction } from './store/actionCreator'
const Ranking = memo(() => {
    // redux
    const dispatch = useDispatch();

    // hooks
    useEffect(() => {
      dispatch(getTopListAction())
    }, [dispatch])
  return (
    <RankingWrapper className='wrap-v2'>
      <RankingLeftWrapper>
        <RankingTop />
      </RankingLeftWrapper>
      <RankingRightWrapper>
        <RankingTitle />
        <RankingList />
      </RankingRightWrapper>
    </RankingWrapper>
  )
})

export default Ranking
