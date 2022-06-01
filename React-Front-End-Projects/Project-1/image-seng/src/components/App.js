import React from "react";
import axios from "axios";
import SearchInput from "./Searchinput";
import ImageList from "./imageList";


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { images: [] }

        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit (entry){
     const response =  await axios.get(`https://pixabay.com/api/?key=27411360-66f748905f48a73857a7af397&q=${entry}&image_type=photo`)
        console.log(response.data.hits)
        this.setState ({images: response.data.hits})
    }

    render () {
    return(
        <div className="ui container" style={{marginTop: '30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <div style={{marginTop: '20px'}}><ImageList images = {this.state.images}/></div>
        </div>
    )
}
}

export default App;