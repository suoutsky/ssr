/*
 * @Description: Description
 * @Author: 清河
 * @Date: 2019-08-13 14:05:32
 * @LastEditTime: 2019-08-14 10:14:47
 * @LastEditors: 清河
 */
const createApp = require('/path/to/built-server-bundle.js')
const renderer = vueServerRenderer.createRenderer();
const { createBundleRenderer } = require('vue-server-renderer')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
})

server.get('*', (req, res) => {
  const context = { url: req.url }

  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  })
})