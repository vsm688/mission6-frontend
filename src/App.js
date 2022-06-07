

function App() {

  const callBackEnd = () => {
    fetch("http://localhost:5000/")
      .then(response => response.json())
      .then(data => console.log(data))

  }


  const callBackEndProperties = () => {
    fetch("http://localhost:5000/properties")
      .then(response => response.json())
      .then(data => console.log(data))

  }



  return (
    <>
      <button onClick={() => callBackEnd()}>click</button>
      <button onClick={() => callBackEndProperties()}>properties</button>
    </>
  );
}

export default App;
