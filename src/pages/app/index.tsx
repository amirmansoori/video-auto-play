import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVideos } from '../../redux/slices/display/displaySlice'
import { RootState, AppDispatch } from '../../redux/store'
import Layout from '../../components/Layout'
import Video from '../../components/Video'

const App: React.FC = () => {
  const videosList = useSelector((state: RootState) => state.videos.videosList)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchVideos())
  }, [])

  return (
    <Layout>
      <div className="flex flex-col items-center gap-6">
        {videosList.map((item, index) => (
          <Video key={index} title={item?.attributes?.title} url={item.attributes.preview_src} />
        ))}
      </div>
    </Layout>
  )
}

export default App
