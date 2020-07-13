import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxList = (props) => {
  const {titles} = props;
  debugger;
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (title) => () => {
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
        const labelId = `checkbox-list-label-${title}`;

        return (
          <div>
            <ListItem key={title} role={undefined} dense button onClick={handleToggle(title)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(title) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{'aria-labelledby': labelId, name: title}}
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