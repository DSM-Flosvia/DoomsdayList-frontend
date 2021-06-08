import "./todolist.css";
import ListItem from "./listitem";
import { useState } from 'react';
function TodoIist() {
  const [list,setList]=useState([])
  const [listitem,setListitem]=useState()
  // fetch("https://api.thecatapi.com/v1/images/search", {
  //   method:"GET",
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // }).then((e) => {
  //  return(e.json())
  // } ).then((e) => {
  //   console.log(e)
  // })
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
            <ListItem item={e}/>
          )
        })}
      </div>
    </>
  );
}
export default TodoIist;