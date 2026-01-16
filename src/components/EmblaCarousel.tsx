import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { images } from '@/assets/images'

type PropType = {
  slides: (keyof typeof images)[]  // Array of image keys like 'img1', 'img2'
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props

  // Initialize Embla Carousel with Fade and Autoplay plugins
  const [emblaRef, emblaApi] = useEmblaCarousel({ duration: 150 }, [Fade(), Autoplay({
      delay: 4000,// fade transition: 200ms (default is ~25)
    })])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  // Dot and prev/next buttons handlers
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla relative">
      {/* Embla Carousel Container */}
      <div ref={emblaRef} className="relative overflow-hidden">
        <div className="flex transition-all duration-300 ease-in-out">
          {/* Map through slides and display images */}
          {slides.map((key, index) => (
            <div className="flex-shrink-0 w-full p-2" key={index}>
              <img
                className="aspect-square object-cover object-top rounded-2xl shadow-lg"
                src={images[key]} // Accessing images using keys from the slides array
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      {/* <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute -left-4 h-5 w-5 text-white bg-blue-800 bg-opacity-70 p-1.5 rounded-full"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute -right-4 h-5 w-5 text-white bg-blue-800 bg-opacity-70 p-1.5 rounded-full"
        />
      </div> */}

      {/* Dots Navigation */}
      {/* <div className="absolute -bottom-3  left-0 right-0 flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex
                ? 'bg-blue-500'
                : 'bg-gray-500 opacity-50 hover:opacity-75'
            }`}
          />
        ))}
      </div> */}
    </div>
  )
}

export default EmblaCarousel


// import React, { useCallback, useEffect, useRef } from 'react'
// import {
//   EmblaCarouselType,
//   EmblaEventType,
//   EmblaOptionsType
// } from 'embla-carousel'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
// import { images } from '@/assets/images'

// const TWEEN_FACTOR_BASE = 0.2

// type PropType = {
//   slides: (keyof typeof images)[]
//   options?: EmblaOptionsType
// }

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { slides, options } = props
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { ...options, loop: false },
//     [Autoplay({ delay: 3000 })] // Auto-slide every 3 seconds
//   )

//   const tweenFactor = useRef(0)
//   const tweenNodes = useRef<HTMLElement[]>([])

//   const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
//     // Ensure emblaApi is initialized and slide nodes exist before trying to access them
//     if (emblaApi) {
//       tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
//         return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
//       }).filter((node) => node !== null) // Filter out null values if any
//     }
//   }, [])

//   const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
//     tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
//   }, [])

//   const tweenParallax = useCallback(
//     (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
//       if (!emblaApi) return

//       const engine = emblaApi.internalEngine()
//       const scrollProgress = emblaApi.scrollProgress()
//       const slidesInView = emblaApi.slidesInView()
//       const isScrollEvent = eventName === 'scroll'

//       emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
//         let diffToTarget = scrollSnap - scrollProgress
//         const slidesInSnap = engine.slideRegistry[snapIndex]

//         slidesInSnap.forEach((slideIndex) => {
//           if (isScrollEvent && !slidesInView.includes(slideIndex)) return

//           // Safely access tweenNode
//           const tweenNode = tweenNodes.current[slideIndex]
//           if (tweenNode) {
//             const translate = diffToTarget * (-1 * tweenFactor.current) * 100
//             tweenNode.style.transform = `translateX(${translate}%)`
//           }
//         })
//       })
//     },
//     []
//   )

//   useEffect(() => {
//     if (!emblaApi) return

//     setTweenNodes(emblaApi)
//     setTweenFactor(emblaApi)
//     tweenParallax(emblaApi)

//     emblaApi
//       .on('reInit', setTweenNodes)
//       .on('reInit', setTweenFactor)
//       .on('reInit', tweenParallax)
//       .on('scroll', tweenParallax)
//       .on('slideFocus', tweenParallax)
//   }, [emblaApi, tweenParallax])

//   return (
//     <div className="embla relative">
//       {/* Embla Carousel Container */}
//       <div ref={emblaRef} className="relative overflow-hidden">
//         <div className="flex transition-all duration-300 ease-in-out">
//           {/* Map through slides and display images */}
//           {slides.map((key, index) => (
//             <div className="flex-shrink-0 w-full p-2" key={index}>
//               <img
//                 className="aspect-square object-cover object-top rounded-2xl shadow-lg"
//                 src={images[key]} // Accessing images using keys from the slides array
//                 alt={`Slide ${index}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EmblaCarousel

