import React, {Component} from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div>
                {/* TODO Modifier la tâche */}
                <button>Edit</button>
                {/* TODO Supprimer la tâche */}
                <button onClick={this.handleRemove}>X</button>

                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todo;