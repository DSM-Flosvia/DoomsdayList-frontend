import { useState } from "react";
function Input() {
  const [text, setText] = useState("");
  return (
    <form>
      <input
        required
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
        // onClick={() => {
        //   alert(text);
        // }}
      ></input>
    </form>
  );
}

export default Input;