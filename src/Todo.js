import React, {Component} from 'react';

class Todo extends Component {

    state = {
        element: '',
        titre: '',
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
            titre: '',
            element: '',
            items: [...this.state.items, {titre: this.state.titre}, {element: this.state.element}],

        })
    }

    renderTodo = () => {
        return this.state.items.map((item, index) => {
            return (

                <div className='card mb-3' key={index}>
                    <div className='card-title'>
                        <h4>{item.titre}
                            <i className="fas fa-times"
                               style={{cursor: 'pointer', color: 'red', float: 'right'}}>
                            </i>
                        </h4>
                        <p className='card-text'>
                             {item.element}
                        </p>
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
                                       name="titre"
                                       onChange={this.onChange}
                                       value={this.state.titre}
                                />
                                <label htmlFor="element"> element </label>
                                <input type="text"
                                       className='form-control form-control-lg'
                                       style={{height: '150px'}}
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