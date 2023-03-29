import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.js'
import categoryRoutes from './routes/category.js'
import participantsRoutes from './routes/participants.js'
import cors from 'cors'
dotenv.config()

const app = express()

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log('DB ERROR => ', err))

// middlewares
app.use(cors())
app.use(express.json())

// router middleware
app.use('/api', authRoutes)
app.use('/api', categoryRoutes)
app.use('/api', participantsRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`)
})
