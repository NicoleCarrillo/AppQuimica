import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [componente, setComponent] = React.useState('');

  const handleChange = (event) => {
    setComponent(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Componente 1</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={componente}
          onChange={handleChange}
          label="Componente 1 "
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Acetona</MenuItem>
          <MenuItem value={2}>Tetracloruro de Carbono</MenuItem>
          <MenuItem value={3}>Cloroformo</MenuItem>
          <MenuItem value={4}>Etanol</MenuItem>
          <MenuItem value={5}>Acetado de etilo</MenuItem>
          <MenuItem value={6}>Acetato de metilo</MenuItem>
          <MenuItem value={7}>Metanol</MenuItem>
          <MenuItem value={8}>N-Hexano</MenuItem>
          <MenuItem value={9}>1-Propanol</MenuItem>
          <MenuItem value={10}>2-Propanol</MenuItem>
          <MenuItem value={11}>TetraHidroFurano</MenuItem>
          <MenuItem value={12}>Agua</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
