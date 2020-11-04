import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import margules from "../clases/margules";
import obj from "../clases/metodos";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "#e7e7e7",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [componente, setComponent] = React.useState("0");

  const handleChange = (event) => {
    setComponent(event.target.value);
    var x = event.target.value;
    switch (x) {
      case 1:
        console.log(obj.orquestador(0,"acetona","cloroformo","","")); //! ESTO LO DEJAMOS ASI O LO MODIFICAMOS?????
        console.log(margules.acetonaCloroformo);
        break;
      case 2:
        console.log(obj.orquestador(0,"acetona","metanol","",""));
        console.log(margules.acetonaMetanol);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Sistemas</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="menu"
          value={componente}
          onChange={handleChange}
          label="Sistemas"
          inputProps={{
            classes: {
              input: classes.multilineColor,
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Acetona - Cloroformo</MenuItem>
          <MenuItem value={2}>Acetona - Metanol</MenuItem>
          <MenuItem value={3}>Acetona - Agua</MenuItem>
          <MenuItem value={4}>Tetracloruro de Carbono - Benceno</MenuItem>
          <MenuItem value={5}>Cloroformo - Metanol</MenuItem>
          <MenuItem value={6}>Etanol - Benceno</MenuItem>
          <MenuItem value={7}>Etanol - Agua</MenuItem>
          <MenuItem value={8}>Acetado de etilo - Etanol</MenuItem>
          <MenuItem value={9}>N-Hexano - Etanol</MenuItem>
          <MenuItem value={10}>Metanol - Benceno</MenuItem>
          <MenuItem value={11}>Metanol - Acetato de etilo</MenuItem>
          <MenuItem value={12}>Metanol - Agua</MenuItem>
          <MenuItem value={13}>Acetato de metilo - Metanol</MenuItem>
          <MenuItem value={14}>1-Propanol - Agua</MenuItem>
          <MenuItem value={15}>2-Propanol - Agua</MenuItem>
          <MenuItem value={16}>TetraHidroFurano - Agua</MenuItem>
          <MenuItem value={17}>Agua - Ácido acético</MenuItem>
          <MenuItem value={18}>Agua - 1-Butanol</MenuItem>
          <MenuItem value={19}>Agua - Ácido fórmico</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
