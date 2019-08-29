/*
 * @Description: Description
 * @Author: 清河
 * @Date: 2019-08-13 10:50:59
 * @LastEditTime: 2019-08-13 11:37:31
 * @LastEditors: 清河
 */
const Vue = require('vue')
const server = require('express')()
const vueServerRenderer = require('vue-server-renderer');
const createApp = require('./app')
server.get('*', (req, res) => {
  const context = {
    title: 'hello',
  }
  const app = createApp(context);
  const renderer = vueServerRenderer.createRenderer({
    template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      console.log(err);
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
    console.log(html)
  })
})

server.listen(8080)