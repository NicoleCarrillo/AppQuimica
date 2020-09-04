import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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
        <InputLabel id="demo-simple-select-outlined-label">Componente 2</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={componente}
          onChange={handleChange}
          label="Component 2 "
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Cloroformo</MenuItem>
          <MenuItem value={2}>Metanol</MenuItem>
          <MenuItem value={3}>Agua</MenuItem>
          <MenuItem value={4}>Benceno</MenuItem>
          <MenuItem value={5}>Etanol</MenuItem>
          <MenuItem value={6}>Acetato de etilo</MenuItem>
          <MenuItem value={7}>Ácido Acêtico</MenuItem>
          <MenuItem value={8}>1-Butanol</MenuItem>
          <MenuItem value={9}>Ácido Fórmico</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
