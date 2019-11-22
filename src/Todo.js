import React, {Component} from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                {/* TODO Modifier la tâche */}
                <button>Edit</button>
                {/* TODO Supprimer la tâche */}
                <button>X</button>
                {/* TODO Tâche à render */}
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todo;