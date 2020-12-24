import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import {useStateValue} from "./StateProvider"

function App() {
  const [{user}, dispatch] = useStateValue()
  
  return (
      // Data layer: wrap all the app using Context API - (by creating StateProvider & reducer & wrap <app> in index.js)
    <div className="app">
        {!user? (
        <Login></Login>
        ) : (
          <>
         <Header></Header>

          <div className="app__body">
            <Sidebar></Sidebar>
            <Feed></Feed>
            <Widgets></Widgets>

          </div>
          </>
        )}

    </div>
  );
}

export default App;
