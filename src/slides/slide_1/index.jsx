import React, { useEffect, useRef, useCallback } from "react"
import styles from "./style.scss"

import static_img1 from "./assets/static_1.png"
import static_img2 from "./assets/static_2.png"
import static_img3 from "./assets/static_3.png"
import static_img4 from "./assets/pink_sperm.png"
import static_img5 from "./assets/pink_sperm_1.png"
import bakti_1 from "./assets/bakti_1.png"
import bakti_2 from "./assets/bakti_2.png"
import bakti_3 from "./assets/bakti_3.png"
import bakti_4 from "./assets/bakti_4.png"

const images = [
  {
    src: static_img1,
    style: {
      position: "absolute",
      width: "120px",
      height: "100px",
      top: "70px",
      left: "0px",
    },
  },
  {
    src: static_img2,
    style: {
      position: "absolute",
      width: "56px",
      height: "56px",
      top: "26px",
      right: "26px",
    },
  },
  {
    src: static_img3,
    style: {
      position: "absolute",
      width: "90px",
      height: "80px",
      bottom: "45px",
      left: "330px",
    },
  },
  {
    src: static_img4,
    style: {
      position: "absolute",
      width: "260px",
      height: "160px",
      bottom: "10px",
      left: "0px",
    },
  },
  {
    src: static_img5,
    style: {
      position: "absolute",
      width: "610px",
      height: "100px",
      top: "124px",
      right: "0px",
      zIndex: "10",
    },
  },
  {
    src: bakti_1,
    class: styles.left_bakti,
    style: {
      position: "absolute",
      width: "60px",
      height: "60px",
      bottom: "190px",
      left: "20px",
    },
  },
  {
    src: bakti_2,
    class: styles.center_bakti,
    style: {
      position: "absolute",
      width: "100px",
      height: "100px",
      top: "200px",
      right: "66px",
      zIndex: "10",
    },
  },
  {
    src: bakti_3,
    class: styles.top_bakti,
    style: {
      position: "absolute",
      width: "70px",
      height: "70px",
      top: "50px",
      right: "220px",
      zIndex: "5",
    },
  },
  {
    src: bakti_4,
    class: styles.bottom_bakti,
    style: {
      position: "absolute",
      width: "220px",
      height: "120px",
      bottom: "0px",
      right: "250px",
      zIndex: "10",
    },
  },
]

const Slide1 = ({ shiftMain }) => {
  const btnRef = useRef(null)

  const handleNext = useCallback(() => {
    shiftMain(1024)
  }, [])

  useEffect(() => {
    btnRef.current.addEventListener("touchstart", handleNext)
    return () => {
      btnRef.current.removeEventListener("touchstart", handleNext)
    }
  }, [])
  return (
    <div className={styles.slide}>
      <div className={styles.secondary_title}>Привет,</div>
      <div className={styles.main_title}>
        <div>
          Это
          <span className={styles.bold_text}> не</span>
        </div>
        <div>коммерческое</div>
        <div>задание</div>
      </div>
      <div ref={btnRef} className={styles.main_button}></div>
      {images.map((item, index) => (
        <img
          key={index}
          src={item.src}
          style={item.style}
          className={item.class || ""}
        ></img>
      ))}
    </div>
  )
}

export default React.memo(Slide1)
