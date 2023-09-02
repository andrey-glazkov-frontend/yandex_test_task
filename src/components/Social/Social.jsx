import { Link } from 'react-router-dom'
import git from '../assets/pictures/git.png'
import tg from '../assets/pictures/tg.png'
import socialStyle from './socialStyle.module.css'

export function Social() {
  return (
    <div className={socialStyle.container}>
      <Link to="/Path">
        <img src={git} className={socialStyle.git} alt="git" />
      </Link>
      <Link to="https://t.me/glazkov_andrey" target="_blank" rel="noopener noreferrer">
        <img src={tg} className={socialStyle.telega} alt="tg" />
      </Link>
    </div>
  )
}
