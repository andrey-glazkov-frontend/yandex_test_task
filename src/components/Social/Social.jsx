import { Link } from 'react-router-dom'
import git from '../assets/pictures/git.png'
import tg from '../assets/pictures/tg.png'
import socialStyle from './socialStyle.module.css'

export function Social() {
  return (
    <div className={socialStyle.container}>
      <Link to="https://github.com/andrey-glazkov-frontend/yandex_test_task" target="_blank" rel="noopener noreferrer" title="Ссылка на текущий репозиторий" data-delay-show="0">
        <img src={git} className={socialStyle.git} alt="git" data-for="tooltip" />
      </Link>
      <Link to="https://t.me/glazkov_andrey" target="_blank" rel="noopener noreferrer">
        <img src={tg} className={socialStyle.telega} alt="tg" />
      </Link>
    </div>
  )
}
