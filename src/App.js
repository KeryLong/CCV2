import logo from './images/Logo.png';
import './client/stylesheets/App.css';
import 'fontsource-roboto';
import AppBar from './client/components/appBar';
import LogoGrid from './client/components/logoBanner';
import HomeMain from './client/components/HomeMain'


function App() {
  return (
    <div className="App">
      <AppBar />
      <LogoGrid />
      <HomeMain />
    <img src="/client/Images/Main.png" />
    </div>
  );
  
}
export default App;

