import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

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
        this.props.createTodo({ ...this.state, id: uuid(), completed:false});
        this.setState({ task: "" });
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                
                <input
                    type="text"
                    placeholder="entrez ici une nouvelle tâche"
                    id="task"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}>
                </input>
                <button><i class="fas fa-plus"></i></button>
            </form>
        );
    }
}

export default NewTodoForm;