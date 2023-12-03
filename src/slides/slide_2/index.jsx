import React, { useRef, useEffect } from "react"
import styles from "./style.scss"

const Slide2 = () => {
  const scrollerBtn = useRef(null)
  const scrollingText = useRef(null)

  const handleTouchMove = (event) => {
    let touchmove = event.changedTouches[0].clientY
    if (touchmove > 290 && touchmove < 630) {
      let height = scrollingText.current.offsetHeight
      let shiftText = (touchmove - 290) / (540 / height)
      scrollerBtn.current.style.top = `${touchmove - 60}px`
      scrollingText.current.style.transform = `translateY(-${shiftText}px)`
    }
  }
  useEffect(() => {
    const btn = scrollerBtn.current
    btn.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    })
    return () => {
      btn.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      })
    }
  }, [])

  return (
    <div className={styles.slide}>
      <div className={styles.secondary_title}>текст сообщения</div>
      <div className={styles.scroll}></div>
      <div ref={scrollerBtn} className={styles.thumbnail}></div>

      <div className={styles.screen}></div>

      <div className={styles.content_field}>
        <div ref={scrollingText} className={styles.text_content}>
          <span className={styles.bold_text}>Lorem ipsum dolor sit amet,</span>
          consectetur adipisicing elit. Alias ea dolores minima maiores
          doloremque quod sint quisquam vitae blanditiis consectetur aperiam
          molestias, eaque cumque quibusdam non itaque beatae qui placeat
          voluptate expedita cupiditate! Omnis esse libero corporis explicabo,
          asperiores modi beatae provident eligendi ad, amet aperiam, quam
          labore doloremque architecto assumenda. Esse quae veniam optio nam. In
          cumque accusamus asperiores repellendus voluptate, labore impedit
          libero hic. Asperiores perferendis nostrum molestias ipsa quos
          obcaecati doloremque soluta. Impedit odit assumenda natus facilis
          beatae sit numquam mollitia consequuntur dolorum, explicabo officia
          iure repellendus fugiat quasi error asperiores aliquid illum,
          doloribus debitis fuga. Tempore, pariatur. Ab voluptatem neque illo
          laborum cumque quidem facilis asperiores, pariatur veniam culpa aut
          praesentium? Cumque accusantium nemo repellendus ex ea quae velit,
          minus sed porro explicabo debitis voluptatem suscipit doloremque
          veritatis perferendis aliquid et assumenda natus delectus atque quasi
          quam! Laudantium aut alias sed sunt incidunt fugit ullam eligendi
          optio laborum qui rem quis aspernatur, perspiciatis ipsum eum eveniet
          fugiat harum ducimus magnam doloribus delectus velit ex eos.
          Consectetur perspiciatis tempora officiis blanditiis impedit,
          excepturi explicabo a ab animi error quam esse, sequi laborum. Magnam
          eum quaerat laudantium eos temporibus, voluptatibus quam maxime quo.
          Ipsam adipisci eveniet ducimus. Dolorum. Laudantium aut alias sed sunt
          incidunt fugit ullam eligendi optio laborum qui rem quis aspernatur,
          perspiciatis ipsum eum eveniet fugiat harum ducimus magnam doloribus
          delectus velit ex eos. Consectetur perspiciatis tempora officiis
          blanditiis impedit, excepturi explicabo a ab animi error quam esse,
          sequi laborum. Magnam eum quaerat laudantium eos temporibus,
          voluptatibus quam maxime quo. Ipsam adipisci eveniet ducimus. Dolorum.
        </div>
      </div>
    </div>
  )
}

export default React.memo(Slide2)
