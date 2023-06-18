import React, { useState } from "react";


function App() {
  var [item, setItem] = useState("");
  var [task, setTask] = useState([]);
  const [done, setDone] = useState(false)

  function createItem(event) {
    event.preventDefault();
    setItem(event.target.value)
  }
  function createTask(event) {
    event.preventDefault();
    let id = 1
    if (task.length > 0) {
      id = task.length + 1
    }
    let taskdet = { id: id, desc: item }
    let newtask = [...task, taskdet]
    setTask(newtask)
  }
  

  function Card(props) {
    return <div className="card-outer">
      {props.id}
      {props.name}

    </div>

  }
  function createCard(task) {



    return <div className="card-outer">


      <ul>
        <input type="checkbox" />
        <li >

          <div className="eachList">

            <div class="row con">

              <div style={{ textDecoration: done ? "line-through" : null }} class="col-10 coln">

                <Card name={task.desc} id={task.id} />
              </div>
              <div class="col-2 coln">
                <button id="delbutton" onClick={() =>
                 {setDone(!done)}} className="del btn btn-primary btn-large">{done ? "Undo" : "Mark it done"}</button>
              </div>
            </div>
          </div>
        </li>
      </ul>

    </div>
  }

  return <div> <div className="title-box">
    <h1>TODO </h1>
    <h2>Total list items : {task.length}</h2>
  </div>
    <div className="list-box"></div>
    <div className="entry-box">
      <form>
        <label className="tex" for="todo">Type something to do</label><br></br>
        <input className="input-box tex" type="text" placeholder="Enter the task to add" onChange={createItem}></input>
        <button onClick={createTask}>Add</button>
      </form>
    </div>
    <div className="nest">

      {task.map(createCard)}


    </div>
  </div>



}


export default App;
