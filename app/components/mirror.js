const Component = require(process.cwd() + '/lib/component.js')

module.exports = class Mirror extends Component {
  constructor(props = {}) {
    super(props)
    this.state.text = ''
    this.el.innerHTML = this.template()
  }

  handleChange(input) {
    this.setState({
      text: input.value.trim()
    })
  }

  template() {
    return `
      <input type="text" placeholder="Write something..." oninput="$['${this.id}'].handleChange(this)" value="${this.state.text}">
      <br>
      <output>${this.state.text}</output>
    `
  }

  // Override render to target changes
  render() {
    this.el.querySelector('output').innerHTML = this.state.text
  }
}
