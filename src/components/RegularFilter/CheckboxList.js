import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {useDispatch, useSelector} from 'react-redux';
import {addToFilterString} from '../../store/actions/actions';

const CheckboxList = (props) => {
  const dispatch = useDispatch();
  const currentFilterString = useSelector(state => state.filters.locationFilters);
  const {titles, filterParam} = props;
  debugger;
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (title, filterParam, isChecked) => () => {
    console.log(filterParam);
    console.log('++++++++++++++++++', isChecked);
    dispatch(addToFilterString(filterParam, title, currentFilterString));
    const currentIndex = checked.indexOf(title);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(title);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      {titles.map((title) => {
        debugger;
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