module.exports = async function($) {

  // For server side rendering
  const counter = new $.app.components.counter()

  return /* html */`
    <h1>Hello</h1>
    <p>This is a stateful component:</p>
    <div class="component">
      <div id="counter">${counter.template()}</div>
    </div>
    <script>
      ${$.app.components.counter}
      $['${counter.id}'] = new Counter({
        id: '${counter.id}',
        el: '#counter'
      })
    </script>

    <p>This is another one, not server side rendered:</p>
    <div class="component">
      <div id="mirror"></div>
    </div>
    <script>
      ${$.app.components.mirror}
      let mirror = new Mirror({ el: '#mirror' })
      $[mirror.id] = mirror
    </script>
  `
}
