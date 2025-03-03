const express = require('express')
const app = express()
const port = 4000
const host = "0.0.0.0"

const tasks = {}

app.use(express.json())

app.get('/tasks', (req, res) => {    
        res.send(tasks)
})

app.post('/tasks', (req,res)=>{
    const requestBody = req.body
    tasks[requestBody.task_id] = {}
    tasks[requestBody.task_id].taskName = requestBody.task_name
    tasks[requestBody.task_id].status = "undone"

    res.send(tasks[requestBody.task_id])
})

app.delete('/tasks/:id', (req,res)=>{
    const task_id = req.params.id
    delete tasks[task_id]
    res.send({})
})


app.listen(port, host, () => {
  console.log(`Todo app listening at http://${host}:${port}`)
  console.log('GET    ---   /tasks')
  console.log('POST   ---   /tasks')
  console.log('DELETE ---   /tasks')
})