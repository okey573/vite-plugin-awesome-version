import * as path from 'node:path'
import * as fs from 'node:fs'

import colors from 'picocolors'

import template from './template.js'
import date2version from './date2version.js'
import merge from './merge.js'

export default function (options) {
  const opts = merge(options)
  const { hash, defaultAssets } = opts

  const cwd = process.cwd()
  const assetsDir = hash === true ? date2version() : defaultAssets
  let outDir

  return {
    name: 'awesome-version',
    enforce: 'post',

    /**
     * 修改打包的 assetsDir 配置
     */
    config (conf) {
      outDir = conf.build.outDir || 'dist'
      return {
        build: {
          assetsDir,
          emptyOutDir: false
        }
      }
    },

    /**
     * 1、原本的 index.html 重命名
     * 2、生成新的 index.html
     */
    closeBundle () {
      const originHtml = path.resolve(path.resolve(cwd, outDir), `index.html`)
      const assetsHtml = path.resolve(path.resolve(cwd, outDir), `index.${assetsDir}.html`)
      fs.renameSync(originHtml, assetsHtml)
      fs.writeFileSync(originHtml, template(opts))
      console.log(colors.blue('入口文件：'), colors.bgGreen(colors.bold(colors.cyan(`index.${assetsDir}.html`))))
    }
  }
}
