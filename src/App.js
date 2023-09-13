import "./App.css";
import {Blog,Footer,Header,Posibility,WhatGPT3} from './containers';
import {Article,Brand,Cta,Feature,Navbar} from './components';
function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
