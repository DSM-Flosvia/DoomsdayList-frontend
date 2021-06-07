import "./todolist.css";
import ListItem from "./listitem";
import { useState } from 'react';
function TodoIist() {
  const [list,setList]=useState([])
  const [listitem,setListitem]=useState()
  
  return (
    <>
      <header className="App-header">
        <p className="Letter-Size">ToDo List</p>
      </header>
      <div className="App-div">
        <div className="App-divtwo">
          <input className="push"
          required
          value={listitem}
          onChange={(e) => {
            setListitem(e.target.value);
          }}>
          </input>
          <a>/100</a>
          <button className="btn"onClick={(e) => {
            setList([...list,listitem]);
            console.log(list)
            setListitem("");
          }}>
            <p className="check">추가</p>
          </button>
        </div>
      </div>
      <div className="listcontaner">
        {list.map(function(e) {
          return (
            <ListItem />
          )
        })}
      </div>
    </>
  );
}
export default TodoIist;
