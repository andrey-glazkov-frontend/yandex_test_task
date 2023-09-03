/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import { useState, useEffect } from 'react'
import './snake-game.css'

export function Game() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }])
  const [food, setFood] = useState({ x: 5, y: 5 })
  const [direction, setDirection] = useState('right')
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const moveSnake = setInterval(() => {
      const newSnake = [...snake]
      const head = { x: newSnake[0].x, y: newSnake[0].y }

      switch (direction) {
        case 'up':
          head.y--
          break
        case 'down':
          head.y++
          break
        case 'left':
          head.x--
          break
        case 'right':
          head.x++
          break
        default:
          break
      }

      newSnake.unshift(head)
      newSnake.pop()
      setSnake(newSnake)
    }, 100)

    return () => clearInterval(moveSnake)
  }, [snake, direction])

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event
      if (key === 'ArrowUp' && direction !== 'down') {
        setDirection('up')
      } else if (key === 'ArrowDown' && direction !== 'up') {
        setDirection('down')
      } else if (key === 'ArrowLeft' && direction !== 'right') {
        setDirection('left')
      } else if (key === 'ArrowRight' && direction !== 'left') {
        setDirection('right')
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [direction])

  useEffect(() => {
    const checkCollision = () => {
      const head = snake[0]
      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
          setGameOver(true)
          break
        }
      }

      if (
        head.x < 0
          || head.x >= 20
          || head.y < 0
          || head.y >= 20
      ) {
        setGameOver(true)
      }

      if (head.x === food.x && head.y === food.y) {
        const newFood = {
          x: Math.floor(Math.random() * 20),
          y: Math.floor(Math.random() * 20),
        }
        setFood(newFood)

        const newSnake = [...snake]
        newSnake.push({})
        setSnake(newSnake)
      }
    }

    checkCollision()
  }, [snake, food])

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }])
    setFood({ x: 5, y: 5 })
    setDirection('right')
    setGameOver(false)
  }

  return (
    <div>
      <h1>Змейка</h1>
      <p>
        Что может показать возможности js?
      </p>
      <p>
        Как по мне, то что такое чудо можно сделать
        за пол часа говорит о многом)
      </p>

      <div className="game-board">
        {gameOver ? (
          <>
            <div className="game-over">Game Over</div>
            <button className="restart-button" onClick={restartGame}>
              Restart
            </button>
          </>
        ) : (
          <>
            {snake.map((segment, index) => (
              <div
                key={index}
                className="snake-segment"
                style={{ top: `${segment.y * 20}px`, left: `${segment.x * 20}px` }}
              />
            ))}
            <div
              className="food"
              style={{ top: `${food.y * 20}px`, left: `${food.x * 20}px` }}
            />
          </>
        )}
      </div>
    </div>
  )
}
