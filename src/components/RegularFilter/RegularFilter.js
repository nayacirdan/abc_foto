import './RegularFilter.scss';

import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckboxList from './CheckboxList';

const RegularFilter = (props) => {
  const {title, checkboxesTitles} = props;
  return (
    <div className='regular-filter'>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className='filter-title'>{title}</h3>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CheckboxList titles={checkboxesTitles}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default RegularFilter;
