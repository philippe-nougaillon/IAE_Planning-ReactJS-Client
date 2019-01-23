import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchPlanning  } from '../actions/planning';

// import Button from './Button';

const applyQueryState = query => () => ({
    query
});

const mapDispatchToProps = (dispatch) => ({
    onFetchPlanning: query => dispatch(doFetchPlanning(query)),
})

class SearchPlanning extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '20190125',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const { query } = this.state;
        if (query) {
            this.props.onFetchPlanning(query);
            this.setState(applyQueryState(''));
        }
        event.preventDefault();
    }

    onChange(event) {
        const { value } = event.target;
        this.setState(applyQueryState(value));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="date"
                    value={this.state.query}
                    onChange={this.onChange}
                />
                <button type="submit">
                    Search
                </button>
            </form>

        );
    }

}

export default connect(
    null,
    mapDispatchToProps,
)(SearchPlanning);