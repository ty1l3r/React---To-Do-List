import React, {Component} from 'react';

class Todo extends Component {

    state = {
        element: '',
        items: []
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = (e) => {
        /*Javascript Thing*/
        e.preventDefault();
        /* spread operator*/
        this.setState({
            element: '',
            items: [...this.state.items, {element: this.state.element}],

        })
    }

    renderTodo = () => {
        return this.state.items.map((item, index) => {
            return (

                <div className='card mb-3' key={index}>
                    <div className='card-title ml-3 mt-3'>
                        <h4> {item.element}
                            <i className='fas fa-times'
                               style={{cursor: 'pointer', color: 'red', float: 'right'}}>
                            </i>
                        </h4>
                    </div>
                </div>
            )
        })
    }

    render() {

        return (
            <React.Fragment>
                <div className='card my-3'>
                    <div className='card-header'>Ajouter une tâche</div>
                    <div className='card-body'>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="element"> Titre </label>
                                <input type="text"
                                       className='form-control form-control-lg'
                                       style={{width: '500px'}}
                                       name="element"
                                       onChange={this.onChange}
                                       value={this.state.element}
                                />
                            </div>
                            <button className='btn btn-primary btn-block'>
                                Add
                            </button>
                        </form>

                    </div>
                </div>
                {this.renderTodo()}
            </React.Fragment>
        );
    }
}

export default Todo;