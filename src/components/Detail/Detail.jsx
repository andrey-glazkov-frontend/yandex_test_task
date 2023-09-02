/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useState, useEffect } from 'react'
import newPhoto from '../assets/pictures/photo2.jpg'
import photo from '../assets/pictures/photo.jpg'
import styleDetail from './detail.module.css'

export function Detail() {
  const [currentImage, setCurrentImage] = useState(photo)

  const switchImage = () => {
    setCurrentImage(currentImage === photo ? newPhoto : photo)
  }

  useEffect(() => {
    const intervalId = setInterval(switchImage, 5000)

    return () => clearInterval(intervalId)
  }, [currentImage])

  return (
    <div className={styleDetail.detail_container}>
      <div className={styleDetail.image_container} tabIndex="0">
        <img src={photo} className={currentImage === photo ? styleDetail.fadeOut : ''} alt="Switchable" />
        <img src={newPhoto} className={currentImage === newPhoto ? styleDetail.fadeOut : ''} alt="Switchable" />
        <div className={styleDetail.overlay} onContextMenu={(e) => e.preventDefault()} />
      </div>

    </div>
  )
}
