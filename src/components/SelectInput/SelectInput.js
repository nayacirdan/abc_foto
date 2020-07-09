import React from 'react';
import './SelectInput.scss';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function SelectInput ({ disabled }) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: 0,
      minWidth: 120,
      '& .MuiOutlinedInput-root': {
        width: 490
      },
      '& .MuiOutlinedInput-root ': {
        borderColor: '#51AD33'
      },
      '& .MuiFormControl-root': {
        margin: 0
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();
  const [address, setAddress] = React.useState('');

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={address}
          onChange={handleChange}
          disabled={disabled}
        >
          <MenuItem value="address1">Киев, Подольский, ул. Андреевская, 9а</MenuItem>
          <MenuItem value="address2">Киев, Печерский, Зверинецкая, 72</MenuItem>
          <MenuItem value="address3">Киев, Шевченковский, Семьи Хохловых, 8</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectInput;