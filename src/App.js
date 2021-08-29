import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { View } from 'react-native'
//import NavBar from './components/NavBar'
import './App.css';
//changes to imports 


const theme = createTheme({
  palette: {
    primary: {
      main: "#2b2929",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h2: {
      fontSize: 20,
      lineHeight: '2rem',
      fontWeight: 1000,
    },

    h3: {
      fontSize: 20,
      lineHeight: '2rem',
    },
    
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },


  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  Space2: {
    marginTop: "5rem"
  },
  Space1: {
    marginTop: "2.5rem",
  },
  Space0: {
    marginTop: "1.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  left: {
    display: "flex",
    alignItems: "left",

  }

})


function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.Space2} color="primary">
            Jideok Soan
          </Typography>
          <Typography variant="h3" className={classes.Space0} color="primary">
            jsoan.dev99@gmail.com <a href="https://www.linkedin.com/in/jideok-soan-ba3a71219/" >Linkedin</a>
          </Typography>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Typography variant="h2" className={classes.Space0, classes.left} color="primary">
            EDUCATION
          </Typography>
          <Typography variant="h3"  color="primary">
          Computer Science, B.S, University of Rochester
          </Typography>
          
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Typography variant="h2" className={classes.Space0, classes.left} color="primary">
            EXPERIENCE
          </Typography>

          <Typography variant="h3"  color="primary">
          Semantic Overlap Research
          </Typography>
          
          <Typography variant="h3"  color="primary">
          Database Systems Teaching Assistant
          </Typography>
          <Typography variant="h3"  color="primary">
          Korean Augmentation to the United States Army (KATUSA) 
          </Typography>
          <Typography variant="h3"  color="primary">
          EF international Academy Internship
          </Typography>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <Typography variant="h2" className={classes.Space0, classes.left} color="primary">
            PROJECTS
          </Typography>

          <Typography variant="h3"  color="primary">
          Customer Database System
          </Typography>
          <Typography variant="h3"  color="primary">
          University of Rochester Research and Innovation Grant
          </Typography>
          <Typography variant="h3"  color="primary">
          Youtube Trending Video Analysis
          </Typography>
          <Typography variant="h3"  color="primary">
          Image search engine
          </Typography>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />

        </div>




      </ThemeProvider>
    </div>
  );
}

export default App;