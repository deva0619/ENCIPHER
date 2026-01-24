function LoginMessage(){
    const isLoggedIn=true;
    return(
        <h2>{isLoggedIn ? "Welcome user" : "Please Login"}</h2>
    );
}
export default LoginMessage;