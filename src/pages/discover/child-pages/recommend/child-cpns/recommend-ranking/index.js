import React, { memo } from 'react'

import {RankingWrapper} from './style'
import ThemeHeaderRcm from "@/components/theme-header-rcm";

const RecommendRanking = memo(() => {
  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="榜单" />
    </RankingWrapper>
  )
})

export default RecommendRanking
