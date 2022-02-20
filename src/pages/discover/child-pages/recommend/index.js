import React, { memo } from 'react'

import TopBanner from './child-cpns/top-banner'
import {
  RecommendWraper,
} from "./style";

const Recommend = memo(() => {
  return (
    <RecommendWraper>
      <TopBanner />
    </RecommendWraper>
  )
})

export default Recommend
