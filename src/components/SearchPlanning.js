import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { doFetchPlanningWithRefresh } from '../actions/planning';
import { doFetchPlanning } from '../actions/planning';
import { doSetFilter } from '../actions/filter';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const mapDispatchToProps = (dispatch) => ({
//    onFetchPlanning: queryDate => dispatch(doFetchPlanningWithRefresh(queryDate)),
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

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Grid container spacing={0}>
                    <Grid item xs={4} sm={2}>
                        <TextField
                            id="date-select"
                            label="Date"
                            className="textField"
                            type="date"
                            style={{ marginRight: 5 }}
                            value={this.state.queryDate}
                            onChange={this.onDateChange}
                        />
                    </Grid>

                    <Grid item xs={8} sm={4}>
                        <TextField
                            id="standard-search"
                            label="Filtre"
                            type="search"
                            className="textField"
                            style={{ width: '100%' }}
                            value={this.state.filter}
                            onChange={this.onSearchChange}
                        />
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(SearchPlanning);