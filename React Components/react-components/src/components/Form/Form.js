import React, {ReactDOM} from "react";

export default class Form extends React.Component{
    constructor(props){

        console.log('Contructor')
        super(props)

        this.state = {
            counter: 0
        }
    }
    render(){
        console.log('RENDER')
        return <div>
                    <form>
                    <input value={this.state.counter} />
                    </form>
                </div>
    }
}