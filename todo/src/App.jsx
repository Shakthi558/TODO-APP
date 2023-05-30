import React, { useState } from "react";


function App() {
  var [item, setItem] = useState("");
  var [task, setTask] = useState([]);
  const [done,setDone] = useState(false)
 
  function createItem(event) {
    event.preventDefault();
    setItem(event.target.value)
  }
  function createTask(event) {
    event.preventDefault();

    setTask(cur => [...cur, item])
  }



  function Card(props) {
    return <div className="card-outer">
      
          {props.name}
    
    </div>

  }
  function createCard(li) {
   
   
    
    return <div className="card-outer">

      
      <ul>
        <li >
          <div className="eachList">
          <div class="row con">
            <div style={{textDecoration : done ? "line-through":null}} class="col-10 coln">
          <Card name={li} />
          </div>
          <div class="col-2 coln">
            <button id="delbutton" onClick={()=>setDone(!done)} className="del">{done?"Undo":"Mark it done"}</button>
          </div>
          </div>
          </div>
        </li>
      </ul>
    
    </div>
  }

  return <div> <div className="title-box">
    <h1>TODO </h1></div>
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
