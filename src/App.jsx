import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Confirm from "./components/Confirm";

function App() {
  const [state,setState] = useState({rating:0,submitted:false})
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let data = formData.get("rating")
    setState({rating:data > 0 ? data : 1, submitted: true})
}
  return (
    <>
      {!state.submitted ? <Form handleSubmit={handleSubmit} /> : <Confirm state={state} />}
      
    </>
  );
}

export default App;
