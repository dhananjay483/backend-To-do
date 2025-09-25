import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send({ success: true, message: 'server is running' })
})
// post a data

app.listen(port, () => {
    console.log(`Server is running:localhost:${port}`)
})
