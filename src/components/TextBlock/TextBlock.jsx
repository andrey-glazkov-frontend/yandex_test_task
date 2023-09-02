import styles from './textBlockStyle.module.css'
import hand from '../assets/pictures/arm.png'
import { Social } from '../Social/Social'

export function TextBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <h1>
          Привет!
          {' '}
          <img src={hand} className={styles.hand} alt="hand" />
        </h1>
        <h2>Меня зовут Андрей, и я Frontend разработчик.</h2>
        <p>
          С самой школы меня интересовал мир разработки. Мне нравилось копаться в разных приложениях
          и играх, разбираться в том, как обычные буквы могут оживать
          на экране и создавать различные крутые штуки)
        </p>
        <p> Постепенно я начал создавать маленькие сайты и погружаться в разработку.</p>
      </div>
      <Social />
    </div>
  )
}
