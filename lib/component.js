module.exports = class Component {
  constructor(props = {}) {
    this.id = props.id || ('x' + Math.random()).replace('.', '')
    this.state = {}
    if (typeof document != 'undefined') {
      this.el = document.querySelector(props.el)
    }
  }

  setState(obj) {
    this.state = { ...this.state, ...obj }
    this.render()
  }

  render() {
    this.el.innerHTML = this.template()
  }
}
