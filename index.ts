import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean
}

axios.get(url).then(result =>{
  const todo = result.data as Todo
  const {id, title, completed} = todo
  console.log(`
  The todo with an ID of : ${id}
  and Title of : ${title}
  is Completed ${completed}
  `)
}).catch(err => console.log(err))