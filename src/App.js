import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    deletPersonHandler = (personIndex) => {
        const personsTemp = this.state.persons;
        personsTemp.splice(personIndex,1);
        this.setState({persons: personsTemp});
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 26}
            ]
        })
    }

    togglePersonsHndler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person,index) => {
                        return <Person
                            click = {() => this.deletPersonHandler(index)}
                            name ={person.name}
                            age = {person.age}
                        />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHndler}>toggle persons
                </button>
                {
                    persons
                }
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;