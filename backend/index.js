require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')

const port = process.env.PORT || 9000
const app = express()
// middleware
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))

const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token

  if (!token) {
    return res.status(401).send({ message: 'unauthorized access' })
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err)
      return res.status(401).send({ message: 'unauthorized access' })
    }
    req.user = decoded
    next()
  })
}

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.gsnwc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
async function run() {
  try {
    const db = client.db('SoftVanceTasks')
    const usersCollection = db.collection('users')
    const TaskCollection = db.collection('tasks')

    // save or update a user in db
    app.post('/users/:email', async (req, res) => {
      const email = req.params.email
      const query = { email }
      const user = req.body
      // check if user exists in db
      const isExist = await usersCollection.findOne(query)
      if (isExist) {
        return res.send(isExist)
      }
      const result = await usersCollection.insertOne({
        ...user,
       
        timestamp: Date.now(),
      })
      res.send(result)
    })

    // Generate jwt token
    app.post('/jwt', async (req, res) => {
      const email = req.body
      const token = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '365d',
      })
      res
        .cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        .send({ success: true })
    })
    // Logout
    app.get('/logout', async (req, res) => {
      try {
        res
          .clearCookie('token', {
            maxAge: 0,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
          })
          .send({ success: true })
      } catch (err) {
        res.status(500).send(err)
      }
    })

    // save a plant data in db
    app.post('/tasks', async (req, res) => {
      const plant = req.body
      const result = await TaskCollection.insertOne(plant)
      res.send(result)
    })

    // get all plants from db
    app.get('/tasks', async (req, res) => {
      const result = await TaskCollection.find().limit(20).toArray()
      res.send(result)
    })
// delet 
    app.delete('/tasks/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await TaskCollection.deleteOne(query)
      res.send(result)
    })
// single view
    app.get('/tasks/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await TaskCollection.findOne(query)
      res.send(result)
    })


    // Patch task category by ID
    app.patch('/task/:id', async (req, res) => {
      const { id } = req.params;
      const { category } = req.body;
    
      if (!ObjectId.isValid(id)) {
        return res.status(400).send('Invalid task ID');
      }
    
      try {
        const task = await TaskCollection.findOne({ _id: new ObjectId(id) });
    
        if (!task) {
          return res.status(404).send('Task not found');
        }
    
        if (task.category === category) {
          return res.status(400).send('This category is already set.');
        }
    
        const result = await TaskCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { category } }
        );
    
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send('Update failed');
      }
    });



    app.put('/tasks/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const { _id, ...taskData } = req.body; // _id বাদ দিয়ে বাকি ফিল্ড গুলো নিলাম
    
        const query = { _id: new ObjectId(id) };
        const updated = { $set: taskData };
        const options = { upsert: false }; // upsert true দিলে নতুন ডকুমেন্ট ইনসার্ট হয়ে যেতে পারে
    
        const result = await TaskCollection.updateOne(query, updated, options);
        console.log(result);
        res.send(result);
      } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).send({ message: 'Internal Server Error', error });
      }
    });
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Hello from softvance Task manager Server..')
})

app.listen(port, () => {
  console.log(`softvance is running on port ${port}`)
})