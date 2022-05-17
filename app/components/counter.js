const Component = require(process.cwd() + '/lib/component.js')

module.exports = class Counter extends Component {
  constructor(props = {}) {
    super(props)
    this.state.count = 0
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  template() {
    return `
      <div class="count">${this.state.count}</div>
      <button onclick="$['${this.id}'].handleClick()">Click</button>
    `
  }
}
