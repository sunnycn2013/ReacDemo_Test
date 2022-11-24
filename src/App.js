import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
import Counter from './Compent/Counter'
import TslTemplate from './Compent/TslTemplate'
/* 
   这小结的内容主要是引入 Redirect 组件，用于作为找不到路由时的默认匹配项
   也就是我们常常看到的，进入某个网页后，往往会有一个默认选中的功能页面或者其他主页面
   
*/
export default class App extends Component {


    render() {
        return (
            <div>
                <div className="row">
                    <Header/>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 
                            使用Link标签代替 a 标签，这一步是用于实现第一步：浏览器URL的变更
                            */}
                            <MyNavLink to="/about">About</MyNavLink><br/>
                            <MyNavLink to="/home">Home</MyNavLink><br/>
                            <MyNavLink to="/counter">Counter</MyNavLink><br/>
                            <MyNavLink to="/tslTemplate">TslTemplate</MyNavLink>

                            
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                <Route  path="/about" component={About}/>
                                <Route  path="/home" component={Home}/>
                                <Route  path="/counter" component={Counter}/>
                                <Route  path="/tslTemplate" component={TslTemplate}/>

                                <Redirect to="/about" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// import logo from './logo.svg';
// import './App.css';
// import MyTabsComponent from './Compent/MyTabsComponent';
// import Autocomplete from './Compent/Autocomplete';
// import TestCompent from './Compent/TestCompent';

// function Url(props) {
// 	return <h1>网站地址：{props.url}</h1>;
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Url url="www.baidu.com"></Url>
//         {/* <MyTabsComponent children={{'aa':'active'}}/> */}
//         {/* <Autocomplete/> */}
//         <TestCompent/>
//       </header>
//     </div>
//   );
// }

// export default App;
