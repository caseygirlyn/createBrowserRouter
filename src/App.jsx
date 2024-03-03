import { Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import { projects } from './data.json';

console.log(projects);

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <h1>HomePage</h1>
      <ul>
        {
          projects.map((x) => (
            <li key={x.id}><Link to={x.slug}>{x.project}</Link></li>
          ))
        }
      </ul>
    </>
  )
}

export default App
