import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// HashRouter 带#的路由器
import './App.css';
import Login from './views/login/login';
import Admin from './views/admin/admin';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           hello, react~
//         </p>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return( <div className="App">
      <BrowserRouter>
        <Switch> {/* 只匹配其中一个 */}
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    </div> )
  }
}
export default App;
