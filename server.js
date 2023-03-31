import express from 'express'

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  console.log({
    url: req.url,
    headers: req.headers,
    body: req.body
  })
  next()
})

app.get('/', (req, res) => {
  res.json({ status: 'OK' })
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
