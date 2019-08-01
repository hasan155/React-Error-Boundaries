import React, { Component } from 'react'
import FRInput from "./FRInput";

export default class FRP extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }

    clickHandler =  () => {
        this.inputRef.current.fucus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Fucus Input</button>
            </div>
        )
    }
}
