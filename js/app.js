import React from 'react';
import Router from 'react-router';
import ReactDom from 'react-dom';
import {DefaultRoute,Link,Route,RouteHandler} from 'react-router';
import HelloHandler from './hello.js';
// class App extends React.Component({
//   render() {
//     return (
//       <div className="nav">
//         <Link to="app" className="homelink">Home</Link>
//         <Link to="hello" className="hellolink">Say Hello</Link>
//         {/* hahahah*/}
//         <RouteHandler />
//       </div>
//     );
//   }
// });
//
// let routes=(
//   <Route name="app" path='/' handler={App}>
//     <Route name="hello" path="/hello" handler={HelloHandler} />
//   </Route>
// );
//
// Router.run(routes,function(Handler){
//   React.render(
//     <Handler />,
//     document.body
//   )
// })
class App extends React.Component{
  render(){
    return(
      <div>hahah</div>
    )
  }
}

ReactDom.render(
  <App />,
  document.body
)
