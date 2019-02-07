import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doFetchPlanning  } from '../actions/planning';
import { doSetFilter } from '../actions/filter';

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

        this.onDateChange = this.onDateChange.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        this.props.onFetchPlanning(this.state.query);
    }
    
    onDateChange(event) {
        const { value } = event.target;
    
        this.setState(applyQueryState(value));
        this.props.onFetchPlanning(value);
    }

    onSearchChange(event) {
        this.props.onFilterSet(event.target.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Date:</label>
                <input 
                    type="date"
                    value={this.state.query}
                    onChange={this.onDateChange}
                />

                <label>Filtre:</label>
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