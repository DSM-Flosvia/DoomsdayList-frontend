import "./todolist.css";
import ListItem from "./listitem";
import { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.76.184:8000",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function TodoIist() {
  const [list, setList] = useState([]);
  const [listitem, setListitem] = useState();

  async function getTodoList() {
    const { data } = await client.get("/list/");
    console.log(data);
  }

  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <>
      <header className="App-header">
        <p className="Letter-Size">ToDo List</p>
      </header>
      <div className="App-div">
        <div className="App-divtwo">
          <input
            className="push"
            required
            value={listitem}
            onChange={(e) => {
              setListitem(e.target.value);
            }}
          ></input>

          <button
            className="btn"
            onClick={(e) => {
              setList([...list, listitem]);
              console.log(list);
              setListitem("");
            }}
          >
            <p className="check">추가</p>
          </button>
        </div>
      </div>
      <div className="listcontaner">
        {list.map(function (e) {
          return <ListItem item={e} />;
        })}
      </div>
    </>
  );
}
export default TodoIist;