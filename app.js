const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// NOTE: this is a simple health check endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

// NOTE: this is a simple hello world endpoint
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
