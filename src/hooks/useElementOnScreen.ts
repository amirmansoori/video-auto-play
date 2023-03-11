import { useRef, useState, useEffect } from 'react'
type useElementOnScreenType = {
  root: Element | Document | null | undefined
  rootMargin: string
  threshold: number
}
const useElementOnScreen = (options: useElementOnScreenType) => {
  const containerRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const callBackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options)

    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [options, containerRef])

  return { containerRef, isVisible }
}

export default useElementOnScreen
