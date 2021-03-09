import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Trash from '../images/trash.jpg';
import Find from '../images/find.jpg';
import Volunteer from '../images/cc.jpg';
import Sponsor from '../images/sponsor.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const HomeActionButtons = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing} id="HomeButtonGrid">
          {[0].map((value) => (
            <Grid key={value} item id="homeButtonContainer">
              <img src={Trash} id="buttonImg" alt="start a clean up"/>
                <Typography id="HomeActionLink"> Start a clean up</Typography>
            </Grid>
          ))}
          {[1].map((value) => (
            <Grid key={value} item id="homeButtonContainer">
             <img src={Find} id="buttonImg" alt="Find a cleanup"/>
                <Typography id="HomeActionLink"> Find a clean up</Typography>
            </Grid>
          ))}
           {[2].map((value) => (
            <Grid key={value} item id="homeButtonContainer">
             <img src={Volunteer} id="buttonImg" alt="Volunteer for a cleanup"/>
                <Typography id="HomeActionLink"> Volunteer for a clean up</Typography>
            </Grid>
          ))}
             {[3].map((value) => (
            <Grid key={value} item id="homeButtonContainer">
             <img src={Sponsor} id="buttonImg" alt="Sponsor a cleanup"/>
                <Typography id="HomeActionLink"> Sponsor a clean up</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
  
}
export default HomeActionButtons