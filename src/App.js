import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import TableComponent from './components/TableComponent'
import Header from './components/Header'
import SectionHeader from './components/SectionHeader'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="tableContainer">
      <SectionHeader />
        <TableComponent />
      </div>
    </div>
  );
}

export default App;
