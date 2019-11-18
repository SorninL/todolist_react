import React, {Component} from 'react';

const List = props => (
    <ul>
        {
            //TODO PAS FINI
        }
    </ul>
);

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toPush: '',
            items: []
        };
    }

    onChange = e => {
        this.setState({term: e.target.value});
    };

    onSubmit = e => {
        this.setState({
            term: '',
            items: [...this.state.items, this.state.toPush]
        });
    };

    render() {
        return (
            <div>
                <form className="Todo" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                <List/>
            </div>
        )
    }
}
