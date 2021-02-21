import './App.css';
import Newcomponent from './component/Newcomponent';

function App() {
  return (
    <div className="App">
     <h1>ProStars</h1>
     <table>
     <th>
        <td>Picture</td>
        <td>Name</td>
        <td>Popularity</td>
        <td>Action</td>
     </th>
     <tr><Newcomponent/></tr>
     </table>
    </div>
  );
}

export default App;
