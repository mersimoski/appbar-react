import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from "@material-ui/core/Checkbox"
import { FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'

import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles"
import { orange, green } from '@material-ui/core/colors';

import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'
import Container from "@material-ui/core/Container"

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root:{
    border:0,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
    background: "linear-gradient(45deg, #FE6888, #FF8E53)",
    marginBottom: 15,
  }
})

const theme = createMuiTheme({
  typography:{
    h3:{
      fontSize:36,
    }
  },
})

function ButtonStyle(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Button</Button>

}


function CheckboxExample(){
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel 
      control={
        <Checkbox 
          icon={<SaveIcon/>}
          checkedIcon={<SaveIcon/>}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputPros ={{
            'aria-label': "secondary checkbox"
          }}
        />}
        label="Checkbox"
      />
      
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variation="h6">
                  MUI Themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </ToolBar>
            </AppBar>

            <Typography variant="h3" component="div">
              Welcome to App Bar
            </Typography>

            <Typography variant="subtitle1">
              Learning MUI
            </Typography>

            <ButtonStyle/>

            <Grid container justify="center" spacing={2}>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper style={{height:75, width:"100%"}} />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper style={{height:75, width:"100%"}} />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Paper style={{height:75, width:"100%"}} />
              </Grid>
            </Grid>
            
            <CheckboxExample/>

            <ButtonGroup variant="contained" color="primary">
            <Button
                onClick={()=>alert("Saved")}
                startIcon={<SaveIcon />}
            >
                  Save
              </Button>

              <Button
                onClick={()=>alert("Deleted")}
                startIcon={<DeleteIcon />}
              >
                  Discard
              </Button>
            </ButtonGroup>

          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
