import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import env from './settings';
import { useNavigate } from 'react-router-dom';

function Todo() {
    const [toDoList, setToDo] = useState([]);
  const [task, setTask] = useState("");
  let navigate = useNavigate()
  useEffect(async () => {
    fetchTaskList()
  }, [])

  let fetchTaskList = async () => {
    try {
      let toDoListData = await axios.get(`${env.api}/list-all-todo`,{
        headers : {
          "Authorization" : window.localStorage.getItem("app_token")
        }
      });
      setToDo([...toDoListData.data])
    } catch (error) {
      console.log(error)
    }
  }

  let handleCreateTask = async () => {
    try {
      let postData = await axios.post(`${env.api}/create-task`, { message: task },{
        headers : {
          "Authorization" : window.localStorage.getItem("app_token")
        }
      })
      fetchTaskList()
      setTask("")
    } catch (error) {
      alert(error)
    }
  }

  let handleCHange = async (e, id) => {
    try {
      let updateData = await axios.put(`${env.api}/update-task/${id}`, { status: e.target.checked },{
        headers : {
          "Authorization" : window.localStorage.getItem("app_token")
        }
      });
      fetchTaskList()
    } catch (error) {
      alert(error)
    }
  }

  let handleDelete = async (id) => {
    try {
      await axios.delete(`${env.api}/delete-task/${id}`,{
        headers : {
          "Authorization" : window.localStorage.getItem("app_token")
        }
      });
      fetchTaskList()
    } catch (error) {
      alert(error)
    }
  }
    return (
        <div className="container">
          <button className="btn btn-primary" onClick={() => {
          window.localStorage.removeItem("app_token");
          navigate.push("/login")
        }}>Logout</button>
      <div className="row">
        <h2>To Do</h2>
        
        <div className="col-lg-12">
          <div class="input-group mb-3">
            <input type="text" class="form-control" value={task} onChange={e => setTask(e.target.value)} placeholder="Task..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button onClick={handleCreateTask} class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
        </div>
        <div className="col-lg-12">
          <ul class="list-group">
            {
              toDoList.map((item) => {
                return <li class="list-group-item justify-content-between align-items-center">
                  <input class="form-check-input me-1" checked={item.status} type="checkbox" value="" aria-label="..." onChange={(e) => handleCHange(e, item._id)} />
                  <span style={{ textDecoration: item.status ? "line-through" : "" }}>{item.message}</span>
                  <span class="badge bg-primary ml-4" onClick={() => handleDelete(item._id)}>X</span>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Todo