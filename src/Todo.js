import React, {Component} from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                {/* Edit the task */}
                <button>Edit</button>
                {/* Supprimer la tâche */}
                <button>X</button>
                {/* Tâche à render */}
                <li>this.props.task</li>
            </div>
        )
    }
}

export default Todo;