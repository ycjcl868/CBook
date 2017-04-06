import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

import './less/index.less';


class App extends Component {
    render () {
      
        return (
          <div>
          Hello React Markdown
            <Button>Hello</Button>
            
             
          </div>
        );
    }
}

ReactDOM.render(
  (
    <App />
  ),
  document.getElementById('app')
);