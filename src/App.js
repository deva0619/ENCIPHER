import React from "react";

// 1. Hello React
function Hello() {
  return <h1>Hello React</h1>;
}

// 2. Welcome
function Welcome() {
  return <h1>Welcome to React Class</h1>;
}

// 3. Header
function Header({ message }) {
  return <h2>{message}</h2>;
}

// 4. Two JSX one parent
function Twojsx() {
  return (
    <div>
      <p>First child</p>
      <p>Second child</p>
    </div>
  );
}

// 5. Text
function Text() {
  return <p>My name is User.</p>;
}

// 6. Variable in JSX
function Name() {
  const name = "User";
  return <p>Hello {name}</p>;
}

// 7. Add
function Add() {
  return <p>{10 + 20}</p>;
}

// 8. Admin
function Admin() {
  const isAdmin = true;
  return <p>{isAdmin && "Admin User"}</p>;
}

// 9. Prop name
function User({ name }) {
  return <p>User Name: {name}</p>;
}

// 10. Two props
function Twovalues({ name, age }) {
  return <p>Name: {name}, Age: {age}</p>;
}

// 11. Title
function Title({ title }) {
  return <h1>{title}</h1>;
}

// 12. Button
function Button({ label }) {
  return <button>{label}</button>;
}

// 13. Boolean
function Login({ isLoggedIn }) {
  return <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>;
}

// 14. Object prop
function Details({ user }) {
  return (
    <p>
      Name: {user.name}, Email: {user.email}
    </p>
  );
}

// 16. Reuse
function Wish({ message }) {
  return <p>{message}</p>;
}

// 17. Card 
function Card({ title, description }) {
  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// 18. Parent - Child
function ChildOne({ data }) {
  return <p>First child: {data}</p>;
}

function ChildTwo({ data }) {
  return <p>Second child: {data}</p>;
}

// 19. Function prop 
function Childbtn({ click }) {
  return <button onClick={click}>Click Here</button>;
}

// 20. MAIN APP
function App() {
  const user = { name: "Deva", email: "deva@gmail.com" };

  const showMsg = () => {
    alert("Button Clicked");
  };

  return (
    <div>
      <Header message="Header Component" />
      <Hello />
      <Welcome />
      <Twojsx />
      <Text />
      <Name />
      <Add />
      <Admin />
      <User name="Deva" />
      <Twovalues name="Deva" age={21} />
      <Title title="React Props Demo" />
      <Button label="Submit" />
      <Login isLoggedIn={true} />
      <Details user={user} />
      <Wish message="Hello One" />
      <Wish message="Hello Two" />
      <Wish message="Hello Three" />
      <Card title="Card 1" description="First card" />
      <Card title="Card 2" description="Second card" />
      <ChildOne data="From Parent" />
      <ChildTwo data="From Parent" />
      <Childbtn click={showMsg} />
    </div>
  );
}

export default App;
