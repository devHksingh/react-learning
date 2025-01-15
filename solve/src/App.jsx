import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Input from './Input';
import Home from './Home';
import Show from './Show';
// import Manu from './manu';
const App=()=>{
    return(
        <BrowserRouter>
            <h1>task</h1>
            <hr />
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/input">Input</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/show">Show</Link>
            <hr />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/input" element={<Input />} />
                <Route path="/show" element={<Show />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;