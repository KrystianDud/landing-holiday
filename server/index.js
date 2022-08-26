const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/submit', (req, res) => {
    const form = req.body;

    console.log(form)

    res.status(200).send({ message: 'Submission Received successfully!' })
})