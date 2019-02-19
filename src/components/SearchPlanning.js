import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doFetchPlanning  } from '../actions/planning';
import { doSetFilter } from '../actions/filter';

const mapDispatchToProps = (dispatch) => ({
    onFetchPlanning: queryDate => dispatch(doFetchPlanning(queryDate)),
    onFilterSet: filter => dispatch(doSetFilter(filter)),
});

const applyQueryDateState = queryDate => () => ({
    queryDate
});

class SearchPlanning extends Component {
    constructor(props) {
        super(props);

        this.state = {
            queryDate: new Date().toISOString().substring(0,10),
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        this.props.onFetchPlanning(this.state.queryDate);
    }
    
    onDateChange(event) {
        const { value } = event.target;

        this.setState(applyQueryDateState(value));
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
                    value={this.state.queryDate}
                    onChange={this.onDateChange}
                />

                <label>Filtre:</label>
                <input
                    type="text"
                    value={this.state.filter}
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