import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doFetchPlanning  } from '../actions/planning';
import { doSetFilter } from '../actions/filter';

// import Button from './Button';

const mapDispatchToProps = (dispatch) => ({
    onFetchPlanning: query => dispatch(doFetchPlanning(query)),
    onFilterSet: filter => dispatch(doSetFilter(filter)),
});

const applyQueryState = query => () => ({
    query
});

class SearchPlanning extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: new Date().toISOString().substring(0,10),
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSubmit(event) {
        const { query } = this.state;
        if (query) {
            this.props.onFetchPlanning(query);
        }
        event.preventDefault();
    }

    onChange(event) {
        const { value } = event.target;
        this.setState(applyQueryState(value));
    }

    onSearchChange(event) {
        this.props.onFilterSet(event.target.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                Date :
                <input 
                    type="date"
                    value={this.state.query}
                    onChange={this.onChange}
                />
                <button type="submit">
                    Planning !
                </button>
                <br />
                Filtre:
                <input
                    type="text"
                    onChange={this.onSearchChange}
                />
            </form>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(SearchPlanning);