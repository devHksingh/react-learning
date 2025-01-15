
import ReactDOM from 'react-dom/client';
import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';
import {is,reducer} from './Reducer.jsx';
import{createContext, useReducer} from 'react';

 export const UsersContext=createContext();

 const Start=()=>{
  const[state,dispatch]=useReducer(reducer,is);
  return(        
      <>
          <UsersContext.Provider value={{state,dispatch}}>
                  <App />
          </UsersContext.Provider>                      
      </>
  );
}
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Start />);
