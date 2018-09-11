import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import nl2br from 'react-newline-to-break';

class Experience extends Component {
  render() {

    var jd = this.props.jobDescription;
    var jd_line = nl2br(jd);
    console.log(jd_line);

    return(
      <Grid>
        <Cell col={2}>
          <h6 style={{marginTop:'0px', font:'Bold'}}>{this.props.firmName}</h6>
          <p>{this.props.startMonth + " " + this.props.startYear} - {this.props.endMonth + " " + this.props.endYear}</p>
        </Cell>
        <Cell col={10}>
          <h5 style={{marginTop:'0px'}}>{this.props.jobName}</h5>

          <div>{nl2br(this.props.jobDescription)}</div>
          <img src={this.props.gif} />
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
