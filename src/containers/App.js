import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    }

    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            }).then(users => {
                this.setState({
                    robots: users,
                    searchField: ""
                });
            });
    }

    onSearchChange = (event) => {
        const { value } = event.target;
        this.setState({
            searchField: value
        })
    }

    render() {

        const { robots, searchField } = this.state

        const filteredBots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })


        return !robots.length ?
            <h1>Loading Robofriends...</h1>
            : (
                <div className="tc">
                    <h1 className="f1">ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}
                    />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredBots} />
                        </ErrorBoundary>
                    </Scroll>

                </div>
            );

    }
}

export default App;