import React, { useRef, useEffect, useState, useCallback } from "react"
import styles from "./style.scss"

import bubble1 from "./assets/1.png"
import bubble2 from "./assets/2.png"
import bubble3 from "./assets/3.png"
import bubble4 from "./assets/4.png"
import bubble5 from "./assets/5.png"
import bubble6 from "./assets/6.png"
import bubble7 from "./assets/7.png"
import bubble8 from "./assets/8.png"

import bottle from "./assets/bottle.png"

const images = [
  {
    src: bubble1,
    class: styles.bubble1,
    style: {
      position: "absolute",
      width: "4%",
      top: "205px",
      left: "70px",
    },
  },
  {
    src: bubble2,
    class: styles.bubble2,
    style: {
      position: "absolute",
      width: "13%",
      top: "320px",
      left: "200px",
      zIndex: "39",
    },
  },
  {
    src: bubble3,
    class: styles.bubble3,
    style: {
      position: "absolute",
      width: "4.5%",
      top: "62px",
      left: "190px",
      zIndex: "41",
    },
  },
  {
    src: bubble4,
    class: styles.bubble4,
    style: {
      position: "absolute",
      width: "5%",
      bottom: "100px",
      left: "250px",
      zIndex: "39",
    },
  },
  {
    src: bubble5,
    class: styles.bubble5,
    style: {
      position: "absolute",
      width: "8%",
      top: "150px",
      left: "180px",
      zIndex: "41",
    },
  },
  {
    src: bubble6,
    class: styles.bubble6,
    style: {
      position: "absolute",
      width: "15%",
      bottom: "0px",
      left: "220px",
      zIndex: "41",
    },
  },
  {
    src: bubble7,
    class: styles.bubble7,
    style: {
      position: "absolute",
      width: "3%",
      bottom: "200px",
      left: "10px",
      zIndex: "41",
    },
  },
  {
    src: bubble8,
    class: styles.bubble8,
    style: {
      position: "absolute",
      width: "7%",
      bottom: "100px",
      left: "50px",
      zIndex: "41",
    },
  },
  {
    src: bottle,
    style: {
      position: "absolute",
      width: "100%",
      bottom: "0px",
      zIndex: "40",
    },
  },
]

const Slide3 = ({ isShow }) => {
  const btnRef = useRef(null)
  const closeRef = useRef(null)
  const mainRef = useRef(null)
  const modalRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const [showModal, setShowModal] = useState(false)
  const [firstPag, setfirstPag] = useState(true)

  if (showModal && !isShow) {
    setShowModal(false)
  }

  const handleOpenModal = useCallback(() => {
    setShowModal(true)
  }, [])
  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])
  const handlePagNext = useCallback(() => {
    setfirstPag(false)
  }, [])
  const handlePagPrev = useCallback(() => {
    setfirstPag(true)
  }, [])

  useEffect(() => {
    btnRef.current &&
      btnRef.current.addEventListener("touchstart", handleOpenModal)
    closeRef.current &&
      closeRef.current.addEventListener("touchstart", handleCloseModal)
    prevRef.current &&
      prevRef.current.addEventListener("touchstart", handlePagPrev)
    nextRef.current &&
      nextRef.current.addEventListener("touchstart", handlePagNext)
    return () => {
      btnRef.current &&
        btnRef.current.removeEventListener("touchstart", handleCloseModal)
      closeRef.current &&
        closeRef.current.removeEventListener("touchstart", handleCloseModal)
      prevRef.current &&
        prevRef.current.removeEventListener("touchstart", handlePagPrev)
      nextRef.current &&
        nextRef.current.removeEventListener("touchstart", handlePagNext)
    }
  }, [showModal])
  return (
    <div
      className={styles.slide}
      style={{ background: showModal ? "rgba(0,0,0,0.5)" : "" }}
    >
      <div
        className={styles.container}
        style={{ background: showModal ? "white" : "" }}
      >
        <div>
          <div className={styles.secondary_title}>
            {!showModal ? "ключевое сообщение" : "преимущества"}
          </div>
          <div className={styles.main_title}>
            brend
            <span className={styles.bold_text}>XY</span>
          </div>
        </div>
        <div className={styles.info}>
          {!showModal ? (
            <div ref={mainRef} className={styles.main_info}>
              <div className={styles.column_1}>
                <div className={styles.icon1}></div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam eos magnam.
              </div>
              <div className={styles.column_2}>
                <div className={styles.text2}>
                  <div className={styles.icon2}></div>
                  Lorem ipsum dolor sit.
                </div>
                <div ref={btnRef} className={styles.main_button}></div>
              </div>
            </div>
          ) : (
            <div ref={modalRef} className={styles.modal_info}>
              <div ref={closeRef} className={styles.exit}></div>
              <div
                style={{
                  display: firstPag ? "block" : "none",
                }}
              >
                <div>
                  01
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                  </p>
                </div>
                <div>
                  02
                  <p>Faucibus pulvinal elementum integer enim</p>
                </div>
                <div>
                  03
                  <p>Faucibus pulvinal elementum integer enim</p>
                </div>
              </div>
              <div
                style={{
                  display: !firstPag ? "block" : "none",
                }}
              >
                <div>
                  04
                  <p>Mi bibendum neque egestas congue quisque egestas diam</p>
                </div>
                <div>
                  05
                  <p>Venenati lectus magna fringilla urna</p>
                </div>
                <div>
                  06
                  <p>Venenati lectus magna fringilla urna</p>
                </div>
              </div>

              <div className={styles.modal_pag}>
                <div ref={prevRef} className={styles.prev}></div>
                <div
                  className={styles.pag_mark}
                  style={
                    firstPag
                      ? {
                          border: "2px solid #fc6da9",
                          backgroundColor: "#fc6da9",
                        }
                      : {
                          border: "2px solid black",
                          backgroundColor: "white",
                        }
                  }
                ></div>
                <div
                  className={styles.pag_mark}
                  style={
                    !firstPag
                      ? {
                          border: "2px solid #fc6da9",
                          backgroundColor: "#fc6da9",
                        }
                      : {
                          border: "2px solid black",
                          backgroundColor: "white",
                        }
                  }
                ></div>
                <div ref={nextRef} className={styles.next}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.modal}></div>
      {images.map((item, index) => (
        <img
          src={item.src}
          key={index}
          style={item.style}
          className={item.class || ""}
        ></img>
      ))}
    </div>
  )
}

export default React.memo(Slide3)
