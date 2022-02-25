import React, { memo, useEffect } from 'react'

import {RankingWrapper} from './style'
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators';
import TopRanking from '@/components/top-ranking';

const RecommendRanking = memo(() => {
  const {topUpList, topNewList, topOriginList} = useSelector((state) => ({
    topUpList: state.getIn(['recommend', 'topUpList']),
    topNewList: state.getIn(['recommend', 'topNewList']),
    topOriginList: state.getIn(['recommend', 'topOriginList'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch])
  
  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className='tops'>
        <TopRanking info={topUpList} />
        <TopRanking info={topNewList} />
        <TopRanking info={topOriginList} />
      </div>
    </RankingWrapper>
  )
})

export default RecommendRanking
