import { Link } from 'react-router-dom'
import styleHeader from './header.module.css'

export function Header() {
  return (
    <div className={styleHeader.container}>

      <div className={styleHeader.nav}>
        <input type="checkbox" />
        <span />
        <span />
        <div className={styleHeader.menu}>
          <li><Link to="/Path">1</Link></li>
          <li><Link to="/Path">2</Link></li>
        </div>
      </div>
    </div>
  )
}
