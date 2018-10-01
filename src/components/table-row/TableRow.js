import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Usa from './../../assets/flags/usa.png';
import France from './../../assets/flags/france.png';
import NL from './../../assets/flags/netherlands.png';
import Spain24 from './../../assets/flags/spain24.png';

const styles = () => ({
  root: {
    width: '100%',
    marginTop: '10px'
  },
  checked: {},
  sizeIcon: {
    fontSize: 20
  },
  expandedSummary: {
    minHeight: '48px',
    maxHeight: '48px',
    alignItems: 'center',
    transition: 'none'
  },
  summaryContent: {
    transition: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: '0px'
  },
  summaryClass: {
    minHeight: '48px',
    padding: '0px'
  },
  detailsDefault: {
    padding: '0px 0px 0px 40px'
  },
  expandedPanel: {
    margin: '0px'
  },
  expansionPanel: {
    boxShadow: 'none',
    transition: 'none',
    borderBottom: '1px solid rgba(104, 104, 104, 0.5)',
  },
  expansionPanel2: {
    boxShadow: 'none',
    transition: 'none',
    // backgroundColor: 'red',
  },
  expansionPanelDetails: {
    width: '100%',
    padding: '0px'
  },
  caseContainer: {
    width: '100%'
  },
  mainDiv: {
    padding: '20px 20px 30px 20px'
  },
  chevron: {
    fontSize: '20px'
  },
  apple: {
    padding: '0px',
  },
});

const expandedSummaryDefault = {
  minHeight: '40px',
  maxHeight: '40px',
};

class TableRow extends Component {
  render() {
    return (
      <div className="table">
        <ExpansionPanel
          classes={{ expanded: this.props.classes.expandedPanel }}
          className={this.props.classes.expansionPanel2}
        >
          <ExpansionPanelSummary
            classes={{
              root: this.props.classes.summaryClass,
              expanded: this.props.classes.expandedSummary,
              content: this.props.classes.summaryContent
            }}
            style={expandedSummaryDefault}
            expandIcon={<ExpandMoreIcon />}
          >
            {
              this.props.place === "first" ?
                <div className="row-title-container first">
                  <div className="row-title">
                    {this.props.row.date}
                  </div>
                </div>
                :
                this.props.place === "last" ?
                  <div className="row-title-container last">
                    <div className="row-title">
                    {this.props.row.date}
                  </div>
                  </div>
                  :
                  <div className="row-title-container">
                    <div className="row-title">
                      {this.props.row.date}
                    </div>
                  </div>
            }
          </ExpansionPanelSummary>
              <div>
                <Divider />
                <ExpansionPanelDetails
                  classes={{
                    root: this.props.classes.apple
                  }}
                >
                  <div
                    className={
                      classNames(
                        this.props.classes.caseContainer,
                      )
                    }
                  >
                    <div className="row-content">
                        <div className="section">
                          <div className="box">
                            <div className="title">
                              <img src={Spain24} className="icon-title" />
                              Spanish
                            </div>
                            <Divider />
                            <div className="content">
                              <div className="element">
                                <div className="language">
                                  <img src={Usa} className="icon" />
                                  English:
                                </div>
                                <div className="xp">
                                  200xp
                                </div>
                              </div>
                              <div className="element">
                                <div className="language">
                                  <img src={France} className="icon" />
                                  French:
                                </div>
                                <div className="xp">
                                  300xp
                                </div>
                              </div>
                              <div className="element">
                                <div className="language">
                                  <img src={NL} className="icon" />
                                  Dutch:
                                </div>
                                <div className="xp">
                                  10xp
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="section">
                          <div className="box">
                            <div className="title">
                              <img src={Spain24} className="icon-title" />
                              Spanish
                            </div>
                            <Divider />
                            <div className="content">
                              <div className="element">
                                <div className="language">
                                  <img src={Usa} className="icon" />
                                  English:
                                </div>
                                <div className="xp">
                                  200xp
                                </div>
                              </div>
                              <div className="element">
                                <div className="language">
                                  <img src={France} className="icon" />
                                  French:
                                </div>
                                <div className="xp">
                                  300xp
                                </div>
                              </div>
                              <div className="element">
                                <div className="language">
                                  <img src={NL} className="icon" />
                                  Dutch:
                                </div>
                                <div className="xp">
                                  10xp
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="section">
                          <div className="box">
                            <div className="title">
                              <img src={Spain24} className="icon-title" />
                              Spanish
                            </div>
                            <Divider />
                            <div className="content">
                              <div className="element">
                                <div className="language">
                                  <img src={Usa} className="icon" />
                                  English:
                                </div>
                                <div className="xp">
                                  200xp
                                </div>
                              </div>
                              <div className="element">
                                <div className="language">
                                  <img src={France} className="icon" />
                                  French:
                                </div>
                                <div className="xp">
                                  300xp
                                </div>
                              </div>
                              <div className="element">
                                <div className="language">
                                  <img src={NL} className="icon" />
                                  Dutch:
                                </div>
                                <div className="xp">
                                  10xp
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="section">
                          <div className="box">
                            <div className="title">
                              <img src={Spain24} className="icon-title" />
                              Spanish
                            </div>
                            <Divider />
                            <div className="content">
                              <div className="element">
                                <div className="language">
                                  <img src={Usa} className="icon" />
                                  English:
                                </div>
                                <div className="xp">
                                  200xp
                                </div>
                              </div>
                              <div className="element">
                                <div className="language">
                                  <img src={France} className="icon" />
                                  French:
                                </div>
                                <div className="xp">
                                  300xp
                                </div>
                              </div>
                              <div className="element">
                                <div className="language">
                                  <img src={NL} className="icon" />
                                  Dutch:
                                </div>
                                <div className="xp">
                                  10xp
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </ExpansionPanelDetails>
              </div>
          }
        </ExpansionPanel>
      </div>
    );
  }
}

TableRow.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TableRow);
