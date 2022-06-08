import NavBar from "./components/navbar/NavBar";
import GlobalStyle from "./global/globalStyle";
import Form from "./components/form/Form";
import PropertyInfo from "./components/propertyInfo/PropertyInfo";
function App() {

  // const callBackEnd = () => {
  //   fetch("http://localhost:5000/")
  //     .then(response => response.json())
  //     .then(data => console.log(data))

  // }


  // const callBackEndProperties = () => {
  //   fetch("http://localhost:5000/properties")
  //     .then(response => response.json())
  //     .then(data => console.log(data))

  // }



  return (

    <>
      <GlobalStyle></GlobalStyle>
      <NavBar></NavBar>
      <Form></Form>
      <PropertyInfo></PropertyInfo>
    </>
    // <>
    //   <button onClick={() => callBackEnd()}>click</button>
    //   <button onClick={() => callBackEndProperties()}>properties</button>
    // </>
  );
}

export default App;
