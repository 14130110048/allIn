import Food from "./food.js";
import Snake from "./snake.js";

class Game {
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.map = map
    this.timeId = null
  }

  start() {
    this.food.render(this.map)
    this.snake.render(this.map)
    this.runSnake()
    this.bindKey()
  }

  runSnake() {
    this.timeId = setInterval(() => {
      this.snake.move(this.map, this.food)
      let mapX = this.map.offsetWidth / this.snake.width
      let mapY = this.map.offsetHeight / this.snake.height
      let headX = this.snake.body[0].x
      let headY = this.snake.body[0].y
      if (headX < 0 || headX >= mapX || headY < 0 || headY > mapY) {
        alert('失败啦！')
        clearInterval(this.timeId)
        return
      }
      this.snake.render(this.map)
    }, 150)
  }
  
  //绑定键盘按键事件
  bindKey() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37:
          this.snake.direction = 'left'
          break
        case 38:
          this.snake.direction = 'top'
          break
        case 39:
          this.snake.direction = 'right'
          break
        case 40:
          this.snake.direction = 'bottom'
          break
      }
    })
  }
}

export default Game