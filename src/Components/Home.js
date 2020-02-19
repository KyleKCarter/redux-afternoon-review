import React, {Component} from 'react';
import store from '../Redux/store'

class Home extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            list: reduxState.list
        }
    }

    render() {
        const {list} = this.state
        const mappedShows = list.map((val, index) => {
            console.log(val)
            return(
                <div key={index}>
                    <h2>{val.tvShow}</h2>
                    <h3>{val.mainCharacter}</h3>
                </div>
            )
        })
        return (
            <div>
                <h1>Fav Shows</h1>
                <main>
                    {mappedShows}
                </main>
            </div>
        )
    }
}

export default Home;