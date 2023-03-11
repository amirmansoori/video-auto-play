import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVideos } from '../../redux/slices/display/displaySlice'
import { RootState, AppDispatch } from '../../redux/store'

export default function App() {
  const videosList = useSelector((state: RootState) => state.videos.videosList)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchVideos())
  }, [])

  return (
    <div>
      {videosList.map((item, index) => (
        <div key={index}>{item?.attributes.title}</div>
      ))}
    </div>
  )
}
