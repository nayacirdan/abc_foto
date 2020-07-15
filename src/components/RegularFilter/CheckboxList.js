import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {useSelector} from 'react-redux';
import {addFilterQuery, deleteFilterQuery} from '../../utils/utils';
import querystring from 'query-string';
import {useLocation, useHistory} from 'react-router';

const CheckboxList = (props) => {
  const location = useLocation();
  const history = useHistory();

  const {titles, filterParam} = props;
  const [checked, setChecked] = React.useState([]);

  const queryFiltersObj = useSelector(state => state.filters.queriesObj);

  const handleToggle = (title, filterParam, isChecked) => () => {
    let newQueryObj = null;
    if (!isChecked) {
      newQueryObj = addFilterQuery(queryFiltersObj, filterParam, title);
    } else {
      newQueryObj = deleteFilterQuery(queryFiltersObj, filterParam, title);
    }

    if (queryFiltersObj.startPage) {
      newQueryObj = deleteFilterQuery(newQueryObj, 'startPage', queryFiltersObj.startPage);
    }
    const newQueryStr = querystring.stringify(newQueryObj, {arrayFormat: 'comma'});

    const currentIndex = checked.indexOf(title);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(title);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);

    history.push(`${location.pathname}?${newQueryStr}`);
  };

  return (
    <List>
      {titles.map((title) => {
        const techTitle = title.trim();
        const labelId = `checkbox-list-label-${techTitle}`;
        const isChecked = checked.indexOf(techTitle) !== -1;
        return (
          <div>
            <ListItem key={techTitle}
              role={undefined}
              dense
              button
              onClick={handleToggle(techTitle, filterParam, isChecked)}
              filterParam={filterParam}
              isChecked={isChecked}
            >
              <ListItemIcon filterParam={filterParam}>
                <Checkbox
                  edge="start"
                  checked={isChecked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{'aria-labelledby': labelId, name: techTitle, checked: true, filterParam: filterParam}}
                  value='checkboXXX..'
                  filterParam={filterParam}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={title}/>

            </ListItem>
          </div>
        );
      })}
    </List>
  );
};
export default CheckboxList;