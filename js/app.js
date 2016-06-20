import React from 'react';
import Router from 'react-router';
import ReactDom from 'react-dom';
import {DefaultRoute,Link,Route,RouteHandler} from 'react-router';
import HelloHandler from './hello.js';
import {Grid,Row,Col,Breadcrumb} from 'react-bootstrap';
import Hello from './hello'

class App extends React.Component{
  render(){
    return(
      <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">
        Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="http://www.baidu.com">
        Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
        Data
        </Breadcrumb.Item>
      </Breadcrumb>
      <Grid>
        <Row>
          <Col md={4}>
            <h1>hello,world</h1>
          </Col>
          <Col md={8}>
            <h1>hello,webpack</h1>
          </Col>
          <Col md={12}>
            <Hello />
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('react')
)



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
