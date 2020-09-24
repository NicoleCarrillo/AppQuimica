import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: '#e7e7e7',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [componente, setComponent] = React.useState("");

  const handleChange = (event) => {
    setComponent(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Sistemas
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={componente}
          onChange={handleChange}
          label="Sistemas"
          InputProps={{
            classes: {
                input: classes.multilineColor
            }
        }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Acetona - Cloroformo</MenuItem>
          <MenuItem value={1}>Acetona - Metanol</MenuItem>
          <MenuItem value={1}>Acetona - Agua</MenuItem>
          <MenuItem value={2}>Tetracloruro de Carbono - Benceno</MenuItem>
          <MenuItem value={3}>Cloroformo - Metanol</MenuItem>
          <MenuItem value={4}>Etanol - Benceno</MenuItem>
          <MenuItem value={4}>Etanol - Agua</MenuItem>
          <MenuItem value={5}>Acetado de etilo - Etanol</MenuItem>
          <MenuItem value={8}>N-Hexano - Etanol</MenuItem>
          <MenuItem value={7}>Metanol - Benceno</MenuItem>
          <MenuItem value={7}>Metanol - Acetato de etilo</MenuItem>
          <MenuItem value={7}>Metanol - Agua</MenuItem>
          <MenuItem value={6}>Acetato de metilo - Metanol</MenuItem>
          <MenuItem value={9}>1-Propanol - Agua</MenuItem>
          <MenuItem value={10}>2-Propanol - Agua</MenuItem>
          <MenuItem value={11}>TetraHidroFurano - Agua</MenuItem>
          <MenuItem value={12}>Agua - Ácido acético</MenuItem>
          <MenuItem value={12}>Agua - 1-Butanol</MenuItem>
          <MenuItem value={12}>Agua - Ácido fórmico</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
