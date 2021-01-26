import React from 'react';

class BoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    updateDescription(e) {
        this.setState({ body: e.currentTarget.value })
    }

    updateTitle(e) {
        this.setState({ description: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                <h1>{this.props.formType}</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} onChange={this.updateTitle} />
                    <textarea value={this.state.description} onChange={this.updateDescription} />
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default BoardForm;