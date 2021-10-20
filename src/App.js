//imports make resources available to this component 
import './App.css';
import Body from './Body/Body';
import Footer from './Footer/Footer'
import Header from './Header/Header'
// function named the same as file will be the component itself
function App() {
  //components return JSX (similar to HTML), which is what showen on the DOM
  return (
    //use "className" instrad of "class"
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
//make sure to export the component so it can be imported elsewhere 
export default App;
