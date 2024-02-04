import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Submenu from './components/Submenu';

function App() {
  return (
    <div className="App bg-blue-500 w-[100vw] h-screen text-white overflow-x-hidden">
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu/>
    </div>
  );
}

export default App;
