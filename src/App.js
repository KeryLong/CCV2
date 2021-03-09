import './client/stylesheets/App.css';
import 'fontsource-roboto';
import AppBar from './client/components/appBar';
import LogoGrid from './client/components/logoBanner';
import HomeMain from './client/components/HomeMain';
import HomeActionButtons from './client/components/Buttons'

function App() {
  return (
    <div className="App">
      <AppBar />
      <LogoGrid />
      <HomeMain />
      <HomeActionButtons />
    </div>
  );
  
}
export default App;

