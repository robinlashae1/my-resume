import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import ProfileColumn from './ProfileColumn';
import Experience from './Experience';
import Photo from './Photo';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProfileColumn/>
      <Experience/>
      <Photo/>
    </div>
  );
}

export default App;
