import React from 'react';
import ReactDom from 'react-dom';
import {DefaultRoute,Link,Route,RouteHandler,Router,hashHistory} from 'react-router';
import HelloHandler from './hello.js';
import {Grid,Row,Col,Breadcrumb} from 'react-bootstrap';
import Hello from './hello'

class App extends React.Component{
  render(){
    return(
      <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/#">
        首页
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/#/haha">
        haha
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
        Data
        </Breadcrumb.Item>
      </Breadcrumb>
      <Grid>
        <Row>
          <Col md={4}>
            <h1>这是首页!!!</h1>
            <h5>react router测试!!!</h5>
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

class Haha extends React.Component{
  render() {
    return (
      <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/#">
        首页
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/#/haha">
        haha
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
        Data
        </Breadcrumb.Item>
      </Breadcrumb>
      <Grid>
        <Row>
          <Col md={4}>
            <h1>hahahaahahaha,react-router</h1>
            <h5>碉堡了！！！！</h5>
          </Col>
          <Col md={8}>
            <h1>hello,react-router</h1>
          </Col>
          <Col md={12}>
            <Hello />
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/haha" component={Haha} />
  </Router>
),
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
