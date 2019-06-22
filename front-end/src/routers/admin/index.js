import React from 'react'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height: 500,
    margin: 'auto',
    width: 450,
    [theme.breakpoints.up(500 + theme.spacing(6))]: {
      width: 500,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
});

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      showPassword: false,
      password: '',
      email: '',
      error: '',
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    const { login } = this.props;
    const { password, email } = this.state;
    login({
      email,
      password,
    })
  }

  render() {
    const { classes } = this.props;
    return (
        <React.Fragment>
          <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh' }}
          >
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h4" align="center" style={{ paddingTop: 40 }}>
                  Bengkala Tourism
                </Typography>
                <Typography variant="h6" style={{ paddingTop: 40 }}>
                  Username
                </Typography>
                <TextField
                    placeholder="Username"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                />
                <Typography variant="h6" style={{ paddingTop: 20 }}>
                  Password
                </Typography>
                <TextField
                    placeholder="Password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type={'password'}
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                />
                <Grid container justify="flex-end">
                  <Typography variant="body2">
                    <NavLink to="/forgot-password">Forgot Password?</NavLink>
                  </Typography>
                </Grid>
                <Grid container justify="center" style={{ paddingTop: 20 }}>
                  <Button
                      variant="contained"
                      className={classes.button}
                      component={Link}
                      to="/"
                  >
                    Cancel
                  </Button>
                  <Button
                      variant="contained"
                      className={classes.button}
                      onClick={this.submit}
                  >
                    Sign In
                  </Button>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="body2" color="error">
                    { this.state.error }
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>

    )
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin);
