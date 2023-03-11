import { useEffect } from 'react'
import useElementOnScreen from './../../hooks/useElementOnScreen'
import like from '../../icon/like.svg'
import share from '../../icon/share.svg'

type Props = { url: string; title: string }

const Video: React.FC<Props> = ({ url, title }) => {
  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  })

  useEffect(() => {
    if (isVisible) containerRef.current?.play()
    else containerRef.current?.pause()
  }, [isVisible])

  return (
    <div
      style={{ boxShadow: '0 2px 10px rgb(21 53 90 / 6%)' }}
      className={`flex w-full max-w-lg flex-col overflow-hidden rounded-lg border-4 border-solid border-gray-800 ${
        isVisible ? 'border-double' : ''
      }`}
    >
      <video
        ref={containerRef}
        autoPlay={false}
        muted={true}
        playsInline={true}
        loop
        controls={true}
        className={'w-full'}
      >
        <source type="video/mp4" src={url} />
      </video>

      <div className="border-sol flex cursor-pointer items-center justify-between border-b-2 border-b-gray-800 px-8 py-4 pb-0">
        <span>
          <img src={like} />
        </span>
        <span>
          <img src={share} />
        </span>
      </div>
      <div className="w-full px-8 py-2">
        <p className="rtl w-full text-right text-lg">{title}</p>
      </div>
    </div>
  )
}

export default Video
