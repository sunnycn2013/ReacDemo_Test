import { Component } from 'react';

export default class Counter extends Component {


    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,counter: 42};
     
        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
      }
  

      handleClick(){
        this.setState({counter: ++this.state.counter})
    }

    render() {
        return (
            <>
                <div>
                    <h2 className="counter">{this.state.counter}</h2>
                    
                    <button className="counter-button" onClick={this.handleClick}>
                        Click
                    </button>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}
