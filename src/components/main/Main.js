import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import TableRow from './../table-row/TableRow';
import "./Main.css";

const styles = () => ({
  root: {
    width: '100%',
    marginTop: '10px'
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    const data = JSON.parse(this.props.data);
    return (
      <Paper className={classes.root}>
        {
          data.map((row, index) => 
            index === data.length - 1 ?
              <div key={row.date}>
                <TableRow row={row} place="last" />
              </div>
              :
              index === 0 ?
                <div key={row.date}>
                  <TableRow row={row} place="first" />
                  <Divider style={{backgroundColor: '#beb2b2'}}/>
                </div>
                :
                <div key={row.date}>
                  <TableRow row={row} place="" />
                  <Divider style={{backgroundColor: '#beb2b2'}}/>
                </div>
          )
        }
      </Paper>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Main);
