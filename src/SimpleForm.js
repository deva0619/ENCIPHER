import { useState } from "react";
function SimpleForm(){
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(username===""){
            setError("Username is required");
        }
        else{
            setError("");
            alert("Form Submitted");
        }
    };
    return(
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Submit</button>
          {error && <p style={{ color:"red"}}>{error}</p>}  
        </form>
    );
}
export default SimpleForm;