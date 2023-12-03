import React, { useRef, useEffect, useState, useCallback } from "react"
import styles from "./style.scss"

import sperm1 from "./assets/sperm1.png"
import sperm2 from "./assets/sperm2.png"
import sperm3 from "./assets/sperm3.png"
import sperm4 from "./assets/sperm4.png"
import sperm5 from "./assets/sperm5.png"

import header from "./assets/global.png"
import footer from "./assets/footer.png"

import Slide1 from "../slides/slide_1"
import Slide2 from "../slides/slide_2"
import Slide3 from "../slides/slide_3"

const images = [
  {
    src: sperm1,
    style: {
      position: "absolute",
      opacity: "1",
      width: "1100px",
      top: "200px",
      left: "1524px",
      transition: "all 2s ease-out",
    },
  },
  {
    src: sperm2,
    style: {
      position: "absolute",
      opacity: "1",
      width: "1000px",
      top: "120px",
      left: "1560px",
      transition: "all 2s ease-out 0.5s",
    },
  },
  {
    src: sperm3,
    style: {
      position: "absolute",
      width: "1100px",
      top: "20px",
      left: "1520px",
      transition: "all 2s ease-out 1s",
    },
  },
  {
    src: sperm4,
    style: {
      position: "absolute",
      opacity: "0",
      width: "1024px",
      top: "440px",
      left: "1650px",
      transition: "all 2s ease-out 0.5s",
    },
  },
  {
    src: sperm5,
    style: {
      position: "absolute",
      opacity: "0",
      width: "1000px",
      top: "420px",
      left: "1830px",
      transition: "all 2s ease-out 1s",
    },
  },
]

const MainField = () => {
  const ref = useRef(null)
  const btnRef = useRef(null)
  const { current } = useRef(document)
  const [isSecond, setIsSecond] = useState(false)
  const [isThird, setThird] = useState(false)

  const shiftMain = useCallback((x) => {
    if (ref) {
      setIsSecond(() => {
        return x == 1024 ? true : false
      })
      setThird(() => {
        return x == 2048 ? true : false
      })
      ref.current.style.transform = `translateX(-${x}px)`
    }
  }, [])

  const width = 1024
  let currentscreen = 0

  let touchStart = 0
  let touchEnd = 0

  const checkDirection = () => {
    if (touchStart - touchEnd > 100) {
      if (currentscreen != 2) {
        currentscreen += 1
        shiftMain(width * currentscreen)
      }
    }

    if (touchEnd - touchStart > 100) {
      if (currentscreen != 0) {
        currentscreen -= 1
        shiftMain(width * currentscreen)
      }
    }

    touchStart = 0
    touchEnd = 0
  }

  const handleTouchStart = useCallback((event) => {
    event.preventDefault()
    touchStart = event.changedTouches[0].screenX
  }, [])

  const handleTouchEnd = useCallback((event) => {
    event.preventDefault()
    touchEnd = event.changedTouches[0].screenX
    checkDirection()
  }, [])

  const handleHomeClick = useCallback((event) => {
    event.preventDefault()
    currentscreen = 0
    shiftMain(0)
  }, [])

  useEffect(() => {
    current.addEventListener("touchstart", handleTouchStart, { passive: false })
    current.addEventListener("touchend", handleTouchEnd, { passive: false })
    btnRef.current.addEventListener("touchstart", handleHomeClick)

    return () => {
      current.removeEventListener("touchstart", handleTouchStart, {
        passive: false,
      })
      current.removeEventListener("touchend", handleTouchEnd, {
        passive: false,
      })
      btnRef.current.removeEventListener("touchstart", handleHomeClick)
    }
  }, [])

  return (
    <div className={styles.content}>
      <div ref={ref} className={styles.slider_container}>
        {images.map((item, index) => (
          <img
            className={styles.anim_sperm}
            key={index}
            src={item.src}
            style={{
              ...item.style,
              opacity: isSecond ? "1" : "0",
              transform: isSecond ? "translate(-100px, -100px)" : "",
            }}
          ></img>
        ))}
        <Slide1 shiftMain={shiftMain}></Slide1>
        <Slide2></Slide2>
        <Slide3 isShow={isThird}></Slide3>
      </div>

      <img ref={btnRef} className={styles.header} src={header} />
      <img className={styles.footer} src={footer} />
    </div>
  )
}

export default MainField
