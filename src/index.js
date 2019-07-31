// import nesscessary libraries, files

class App extends React.Component {  
  render() {
    console.log('function render()- class App');
    return (
      <div>
        <h1>function render()- class App</h1>
        <About />
        <Contact />
        <Movies />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
