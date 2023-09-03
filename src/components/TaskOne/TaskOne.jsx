/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom'
import taskStyle from './taskOne.module.css'
import video from '../assets/video/video.mp4'

export function TaskOne() {
  return (
    <div className={taskStyle.container}>
      <h2 className={taskStyle.name}>Задание 1</h2>
      <video className={taskStyle.video_responsive} src={video} width="800" height="400" controls />

      <Link to="/feature">Фича</Link>
    </div>
  )
}
