import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doFetchPlanning  } from '../actions/planning';
import { doSetFilter } from '../actions/filter';

import TextField from '@material-ui/core/TextField';

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

                <TextField
                    id="date-select"
                    label="Date"
                    className="textField"
                    type="date"
                    value={this.state.queryDate}
                    onChange={this.onDateChange}
                />


                <TextField
                    id="standard-search"
                    label="Filtre"
                    type="search"
                    className="textField"
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