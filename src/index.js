import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ElementContent extends React.Component {
    render() {
        return (<span>I love Javascript!</span>)
    }
}

class ListElement extends React.Component {
    render() {
        return (<li><ElementContent></ElementContent></li>)
    }
}

class List extends React.Component {
    render() {
        return (<ul>
            <ListElement />
            <ListElement />
        </ul>)
    }
}
class App extends React.Component {
    render() {
        return (<List></List>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
