/**
 * @Author : Blackzzc
 */

import express from 'express'
import portfinder from 'portfinder'
import fse from 'fs-extra'
import shell from 'shelljs'
import chalk from 'chalk'

export default function start() {
  let dist = 'dist'
  const server = express()
  portfinder.setBasePort(8081)
  fse.exists(dist, (exists) => {
    if (exists) {
      portfinder.getPort((err, port) => {
        server.listen(port)
        shell.echo(chalk.yellow(`the url is : http://localhost:${port}`))
        server.use('/libs/szmap/', express.static(dist))
        server.use(express.static('examples'))
      })
    } else {
      shell.echo(chalk.red(`please run build first`))
    }
  })
}
