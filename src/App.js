import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header>
        
      </Header>

      {/* App body */}
      <div className="app__body">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Widgets></Widgets>

      </div>

    </div>
  );
}

export default App;
