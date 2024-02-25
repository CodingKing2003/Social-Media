import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PageRender from './PageRender';

function App() {
  return (
    <BrowserRouter>
    <input type="checkbox" id='theme' />
    <div className="App">
      <div className="main">
      <Routes>
      <Route path='/:page' element={<PageRender />}  />
      <Route path='/:page/:id' element={<PageRender />}  />
      </Routes>
      </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
