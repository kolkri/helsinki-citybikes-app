import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import allEndpoints from 'express-list-endpoints'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/helsinki-citybikes-tours'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())

app.use(express.json())

const BiketourSchema = new mongoose.Schema({
	departureTime: {
		type: String,
		required: true,
	},
	returnTime: {
		type: String,
		required: true,
	},
	departureStationId: {
		type: String,
		required: true,
	},
	departureStationName: {
		type: String,
		required: true,
	},
	returnStationId: {
		type: String,
		required: true,
	},
	returnStationName: {
		type: String,
		required: true,
	},
	coveredDistance: {
		type: Number,
		required: true,
	},
	duration: {
		type: Number,
		required: true,
	},
})


const Biketour = mongoose.model("Biketour", BiketourSchema)



app.get('/', (req, res) => {
	res.send(allEndpoints(app))
})

//ENDPOINT TO GET ALL THE BIKE TOURS
app.get('/biketours', async (req, res) => {
	try {
		//here validation
		const tours = await Biketour.find({}).limit(200).exec()
		res.status(201).json({ response: tours, success: true })
	} catch (error) {
		res.status(400).json({ response: error, success: false })
	}
})


//ENDPOINT TO POST A NEW TRIP
app.post('/newbiketour', async (req, res) => {
	const { departureTime, returnTime, departureStationId, departureStationName, returnStationId, returnStationName, coveredDistance, duration } = req.body
	try{
		const newBiketour = await new Biketour({
			departureTime,
			returnTime,  
			departureStationId,
			departureStationName,
			returnStationId,
			returnStationName,
			coveredDistance,
			duration,
		  }).save()
		  res.status(201).json({ response: newBiketour, success: true })
	} catch (error) {
		res.status(400).json({ response: error, success: false })
	}
})


app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})