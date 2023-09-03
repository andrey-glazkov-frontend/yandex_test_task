import { NavLink } from 'react-router-dom'
import styleHeader from './header.module.css'

export function Header() {
  return (
    <div className={styleHeader.container}>
      <div className={styleHeader.nav}>
        <input type="checkbox" />
        <span />
        <span />
        <div className={styleHeader.menu}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active_link' : 'inactive-link')}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/secondTask"
              className={({ isActive }) => (isActive ? 'active_link' : 'inactive-link')}
            >
              Второе задание
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  )
}
