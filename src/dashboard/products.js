import React, { Component } from 'react';

class Prodcuts extends Component {
state = {
    prodcutName : '',
    price : '',
    size : '',
    image :'',
    availableQuantity : '',
    properties : []
}
handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
        ...this.state,
        [evt.target.name] : value
    })
    console.log(this.state);
}
render(){
    return(
    <div>
        
    </div>
    );
}
}

export default Prodcuts;