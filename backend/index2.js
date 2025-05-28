const express = require('express')
const app = express()
const port = 4000

const tasks = {}

app.use(express.json())

app.get('/api/tasks', (req, res) => {    
        res.send(tasks)
})

app.post('/api/tasks', (req,res)=>{
    const requestBody = req.body
    tasks[requestBody.task_id] = {}
    tasks[requestBody.task_id].taskName = requestBody.task_name
    tasks[requestBody.task_id].status =  requestBody.status | "undone"

    res.send(tasks[requestBody.task_id])
})

app.delete('/api/tasks/:id', (req,res)=>{
    const task_id = req.params.id
    delete tasks[task_id]
    res.send("Delete Success")
})

app.get('/api/names', (req, res) => {    
        res.send(tasks)
})

app.post('/api/names', (req,res)=>{
    const requestBody = req.body
    names[requestBody.name_id] = {}
    names[requestBody.name_id].name = requestBody.name
    names[requestBody.name_id].age = requestBody.age

    res.send(names[requestBody.name_id])
})

app.delete('/api/names/:id', (req,res)=>{
    const name_id = req.params.id
    delete names[name_id]
    res.send("Delete Success")
})


app.listen(port, () => {
  console.log(`Todo app listening op port ${port} you can try local: http://localhost:${port}`)
  console.log('GET    ---   /api/tasks')
  console.log('POST   ---   /api/tasks')
  console.log('DELETE ---   /api/tasks')
  console.log('GET    ---   /api/names')
  console.log('POST   ---   /api/names')
  console.log('DELETE ---   /api/names')
})