class Snake {
  constructor({ width = 20, height = 20, direction = 'right' } = {}) {
    this.elements = []
    this.width = width;
    this.height = height;
    this.direction = direction;

    //蛇的身体 初始三节
    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'blue' },
      { x: 1, y: 2, color: 'blue' },
    ]
  }

  render(map) {
    this.remove()
    for (let i = 0; i < this.body.length; i++) {
      let object = this.body[i]
      let div = document.createElement('div')
      map.appendChild(div)
      this.elements.push(div)

      div.style.position = 'absolute'
      div.style.width = this.width + 'px'
      div.style.height = this.height + 'px'
      div.style.left = object.x * this.width + 'px'
      div.style.top = object.y * this.height + 'px'
      div.style.backgroundColor = object.color
    }
  }

  move(map, food) {
    for (let i = this.body.length - 1; i > 0; i-- ){
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }
    let head = this.body[0]
    switch (this.direction) {
      case 'right':
        head.x += 1
        break
      case 'left':
        head.x -= 1
        break
      case 'top':
        head.y -= 1
        break
      case 'bottom':
        head.y += 1
        break
    }

    let headX = head.x * this.width
    let headY = head.y * this.height

    if (headX === food.x && headY === food.y) {
      let last = this.body[this.body.length - 1]
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color
      })
      food.remove()
      food.render(map)
      this.render(map)
    }
  }
  remove() {
    for (let i = this.elements.length - 1; i >= 0; i--) {
      this.elements[i].parentNode.removeChild(this.elements[i])
      this.elements.splice(i,1)
    }
  }
}

export default Snake