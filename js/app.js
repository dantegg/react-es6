import React from 'react';
import ReactDom from 'react-dom';
import {createHashHistory} from 'history'
import {DefaultRoute,Link,Route,RouteHandler,Router,hashHistory,browserHistory,useRouterHistory} from 'react-router';
import HelloHandler from './hello.js';
import {Grid,Row,Col,Breadcrumb} from 'react-bootstrap';
import Hello from './hello'
import Repos from './repos'
import HelloSecond from './hellowSecond'

//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
//const appHistory = useRouterHistory(createHashHistory)();

class App extends React.Component{
  render(){
    return(
      <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/index/repos">
        首页
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/index/hello">
        haha
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/index/hello/second'>haha的二级目录</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
        Data
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/test">
          go to test
        </Breadcrumb.Item>
      </Breadcrumb>
      <Grid>
        <Row>
          <Col md={4}>
            <h1>这是首页!!!先加载了首页啊啊啊啊!!!</h1>
            <h5>react router测试!!!</h5>
          </Col>
          <Col md={8}>
            <h5>点击面包屑导航会使得下面加载repos.js和hello.js中的组件！！！</h5>
          </Col>
          <Col md={12}>
          {this.props.children}
          </Col>
        </Row>
      </Grid>

      </div>
    )
  }
}

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/index" component={App}>
      <Route path="repos" component={Repos} />
      <Route path="hello" component={Hello}>
         <Route path="second" component={HelloSecond} />
      </Route>
    </Route>

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
