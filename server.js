const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

if(process.env.NODE_ENV === 'production') {
  console.log('Server running in Production');
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, error => {
  if(error) throw error
  console.log('Server running on port ' + port)
})

app.post('/payment', function(req, res) {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if(stripeErr) {
      res.status(500).send({ error: stripeErr})
    } else {
      res.status(200).send({ success: stripeRes})
    }
  })
})