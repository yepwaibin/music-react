import React, { memo } from 'react'

import { AlbumWrapper } from './style'
import {getSizeImage} from '@/utils/format-utils'

const AlbumCover = memo((props) => {
  const { info, size = "100px", width = "118px", bgp = "-570px"} = props
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image'>
        <img src={getSizeImage(info.picUrl, 150)} alt=""/>
        <a href='/todo' className='cover sprite_cover'> </a>
      </div>
      <div className='album-info'>
        <div className='name text-nowrap'>{info.name}</div>
        <div className='artist text-nowrap'>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover
