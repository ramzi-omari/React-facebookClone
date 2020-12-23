import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header>
        
      </Header>

      {/* App body */}
      <div className="app_body">
        {/* Sidebare */}
        <Sidebar></Sidebar>
      {/* Feed */}
        <Feed></Feed>
      {/* Widget Iframe */}

      </div>

    </div>
  );
}

export default App;
