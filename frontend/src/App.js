import './App.css';
import Navbar from './components/navbar';
import Radio from './components/radio';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // const handleClick = async () => {
  //   await fetch("http://localhost:8080/", {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name: "hoge", email: "ok@sample.com" }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };
  return (
    <div className="App">
      <Navbar />
      {/* <button onClick={handleClick}>post</button> */}
      <main className="container">
        {/* <Counters /> */}
        <Radio />
      </main>
    </div>
  );
}

export default App;
