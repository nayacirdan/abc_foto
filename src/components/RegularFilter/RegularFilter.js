import './RegularFilter.scss';

import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckboxList from './CheckboxList';
import {useSelector} from 'react-redux';

const RegularFilter = (props) => {
  const {title, checkboxesTitles, filterParam} = props;
  const queriesObj = useSelector(state => state.filters.queriesObj);
  let checkedFilterItems = null;
  if (Object.prototype.hasOwnProperty.call(queriesObj, filterParam)) {
    checkedFilterItems = queriesObj[filterParam];
  }

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
          <CheckboxList titles={checkboxesTitles} filterParam={filterParam} checkedFilterItems={checkedFilterItems}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default RegularFilter;
