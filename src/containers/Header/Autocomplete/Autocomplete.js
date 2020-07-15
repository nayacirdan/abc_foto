import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchBar = (props) => {
  const {
    className,
    options,
    id,
    getOptionLabel,
    onChangeAutocomplete,
    style,
    onChangeTextField,
    onFocus
  } = props;
  
  return (

    <div>
      <Autocomplete
        disableCloseOnSelect
        className={className}
        id={id}
        options={options}
        getOptionLabel={getOptionLabel}
        onChange={onChangeAutocomplete}

        style={style}
        renderInput={(params) => <TextField
          {...params}
          label="Поиск товаров"
          variant="outlined"
          onChange={onChangeTextField}
          onFocus={onFocus}
        />}
      />
    </div>
  );
};

export default SearchBar;
