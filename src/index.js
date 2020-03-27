import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import chalk from 'chalk'

import routes from './routes'

import './database'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(chalk.cyan(`\nABC DA CONSTRUÇÃO \\{^_^}/`))
  console.log(chalk.cyan(`listening on port ${process.env.PORT}! \n`))
})
