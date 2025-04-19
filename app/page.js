'use client'
import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const res = await axios('http://localhost:3000/api');
    setTodos(res.data.todos)
  }

  const deleteTodo = async (_id) => {
    const res = await axios.delete('/api', {
      params: {
        _id: _id
      }
    })

    fetchTodos()
    toast.success(res.data.message)
  }

  const completeTodo = async (_id) => {
    const res = await axios.put('/api', {}, {
      params: {
        _id: _id
      }
    })
    fetchTodos()
    toast.success(res.data.message)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(form => ({ ...form, [name]: value }))
    console.log(formData)
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      //api code

      const response = await axios.post('/api', formData)

      toast.success(response.data.message)
      setFormData({
        title: '',
        description: ''
      })

      fetchTodos()


    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <>
      <ToastContainer theme="dark" />

      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter title" className="px-3 py-2 border-2 w-full rounded-md" />
        <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Enter description" className="px-3 py-2 border-2 w-full rounded-md"></textarea>

        <button type="submit" className="bg-orange-600 py-3 px-11 text-white font-semibold cursor-pointer">Add Todo</button>

      </form>

      {/* table */}




      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((todo, i) => (
                <Todo key={i} todo={todo} i={i} deleteTodo={deleteTodo} completeTodo={completeTodo} />
              ))
            }
          </tbody>
        </table>
      </div>


    </>
  );
}
