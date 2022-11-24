import { Component } from 'react';
import MyTabsComponent from './MyTabsComponent';

export default class TslTemplate extends Component {
    constructor(props) {
        super(props);
      }
  
      handleClick(){
    }

    render() {
        return (
        <div>
            <h2 className="counter">Template</h2>
            <MyTabsComponent/>
        </div>
        );
    }
}
