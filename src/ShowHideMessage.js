import { useState } from "react";
function ShowHideMessage(){
    const[show, setShow]= useState(false);
    return(
        <div>
            <button onClick={() => setShow(!show)}>
                Show/Hide Message
            </button>
            {show && <p>Hello React</p>}
        </div>
    );
}
export default ShowHideMessage;