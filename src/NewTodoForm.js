import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid() });
        this.setState(this.state = { task: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Nouvelle tâche</label>
                <input
                    type="text"
                    placeholder="nouvelle tâche"
                    id="task"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}>
                </input>
                <button>Ajouter une tâche</button>
            </form>
        )
    }
}

export default NewTodoForm;