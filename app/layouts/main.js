const { Component, setup } = require(process.cwd() + '/index.js')

module.exports = async function($) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${$.app.views.head($)}
      <script>
        ${Component}
        (${setup})()
      </script>
    </head>
    <body>
      <main>${$.page.content}</main>
    </body>
    </html>
  `
}
