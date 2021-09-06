import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { View, Modal, Button, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
//import NavBar from './components/NavBar'
import { RFPercentage } from "react-native-responsive-fontsize";



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
  container: {
    flex: 1,
    padding: 20,
  },

  typography: {
    fontFamily: [
      'Roboto'
    ],
    h1: {
      fontSize: RFPercentage(1.7),
    },
    h2: {
      fontSize: RFPercentage(2),
      fontWeight: 1000,
    },

    h3: {
      fontSize: RFPercentage(2),
      lineHeight: '2rem',
    },

    h4: {
      fontWeight: 600,
      fontSize: RFPercentage(3),
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
  Space5: {
    marginTop: "5rem"
  },
  Space2: {
    marginTop: "2.5rem",
  },
  Space1: {
    marginTop: "1.5rem",
  },
  Space0: {
    marginTop: "0.5rem"
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


  const [Modal1, setModal1] = useState(false);
  const [Modal2, setModal2] = useState(false);
  const [Modal3, setModal3] = useState(false);
  const [Modal4, setModal4] = useState(false);
  const [Modal5, setModal5] = useState(false);
  const [Modal6, setModal6] = useState(false);
  const [Modal7, setModal7] = useState(false);
  const [Modal8, setModal8] = useState(false);
  const [Modal9, setModal9] = useState(false);


  const [shouldShow, setShouldShow] = useState(false);

  return (
    <div className="App">

      <ThemeProvider theme={theme}>

        <div className={classes.wrapper}>




          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => setShouldShow(!shouldShow)}
            >
              <Typography variant="h4" className={classes.Space5} color="primary">
                Jideok Soan
              </Typography>
            </TouchableOpacity>
            {shouldShow ? (
              <><Typography variant="h1" className={classes.Space0} color="primary">
                Undergraduate student at University of Rochester, class of 2023, pursuing a major in Computer Science B.S.
              </Typography><Typography variant="h1" className={classes.Space0} color="primary">
                  Currently working as an undergraduate research assistant for semantic overlap research and teaching assistant for Database Systems at University of Rochester
                </Typography></>
            ) : null}

          </View>





          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              marginTop: "1.5rem",
              marginBottom: "0.5rem"

            }}
          />



          <Typography variant="h2" className={classes.Space0, classes.left} color="primary">
            EDUCATION
          </Typography>
          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal1(true) }}>
              <Typography variant="h3" color="primary">
                Unviersity of Rochester
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal1}
          >
            <Button title="BACK" onPress={() => { setModal1(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  University of Rochester
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  Computer Science, B.S, University of Rochester
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Aug 2017 - Anticipated May 2023]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Cumulative GPA 3.82/4.00, Major GPA 3.88/4.00
                </Typography>
              </View>
            </View>
          </Modal>


          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              marginTop: "1.5rem",
              marginBottom: "0.5rem"

            }}
          />

          <Typography variant="h2" className={classes.Space0, classes.left} color="primary">
            EXPERIENCE
          </Typography>

          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal2(true) }}>
              <Typography variant="h3" className={classes.Space1} color="primary">
                Semantic Overlap Research
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal2}
          >
            <Button title="BACK" onPress={() => { setModal2(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  Semantic Overlap Research, University of Rochester
                </Typography>
                <Typography variant="h2" className={classes.Space2} color="primary">
                  Research Assistant
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [May 2021 - Present]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Used C++ to implement an algorithm that resolves the semantic overlap search problem and finds the
                  tables that have high semantic overlap
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Used Python to preprocess the Web Data Commons dataset for the experiment and build visualized
                  performance benchmarks
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • A paper will be published soon
                </Typography>
              </View>
            </View>
          </Modal>

          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal3(true) }}>
              <Typography variant="h3" className={classes.Space1} color="primary">
                Database Systems Teaching Assistant
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal3}
          >
            <Button title="BACK" onPress={() => { setModal3(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  Database Systems, University of Rochester
                </Typography>
                <Typography variant="h2" className={classes.Space2} color="primary">
                  Teaching Assistant
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Aug 2021 - Present]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Worked as an undergraduate teaching assistant for Database systems course at the University of Rochester. Led
                  help sessions for the students covering specific topics: general database systems, SQL, and MySQL.
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Held office hours with students to review materials on the course, answer
                  questions, and provide assistance on assignments/projects
                </Typography>
              </View>
            </View>
          </Modal>


          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal4(true) }}>
              <Typography variant="h3" className={classes.Space1} color="primary">
                Korean Augmentation to the United States Army (KATUSA)
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal4}
          >
            <Button title="BACK" onPress={() => { setModal4(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  Korean Augmentation to the United States Army (KATUSA)
                </Typography>
                <Typography variant="h3" color="primary">
                  Sustainment Brigade, 2nd Infantry Division, 8th US Army
                </Typography>
                <Typography variant="h2" className={classes.Space2} color="primary">
                  Brigade Equal Opportunity Leader
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Mar 2019 - Dec 2019]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Served as an Equal Opportunity Leader for the Brigade, dealt with racism, sexism, and all human rights issues
                  within the Brigade.
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Provided over 3000 newly arrived 8th Army Soldiers with EO and treatment of persons training to
                  ensure the importance of EO in the community.
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Assisted in the planning, resourcing, and synchronization of all 2nd Infantry Division special/ethnic observances
                </Typography>

                <Typography variant="h2" className={classes.Space2} color="primary">
                  Sergeant / Brigade Senior KATUSA
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Jan 2020 - Oct 2020]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Served as Senior Sergeant KATUSA for the Brigade, Led and managed KATUSA Soldiers through several field exercises to accomplish the Brigade missions..
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Actively communicated with US and ROK Army Commanders as a military diplomat to improve the unit
                  cohesion
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  •Received "The Army Achievement Medal" from Major General Gilland for dedication and service
                </Typography>
              </View>
            </View>
          </Modal>


          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal5(true) }}>
              <Typography variant="h3" className={classes.Space1} color="primary">
                EF International Academy
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal5}
          >
            <Button title="BACK" onPress={() => { setModal5(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  Education First International Academy, Hong Kong
                </Typography>
                <Typography variant="h2" className={classes.Space2} color="primary">
                  Data Analyst
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Jun 2016 - Jul 2017]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Worked at EF International Academy at HongKong office as an international researcher / data analyst.
                  Collected the data regarding the educational system in Korea and analyzed the data.
                </Typography>
              </View>
            </View>
          </Modal>


          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              marginTop: "1.5rem",
              marginBottom: "0.5rem"

            }}
          />
          <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
            PROJECTS
          </Typography>

          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal6(true) }}>
              <Typography variant="h3" className={classes.Space1} color="primary">
                Customer Database System
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal6}
          >
            <Button title="BACK" onPress={() => { setModal6(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  Customer Database System
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Jan 2021 - Jun 2021]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Used GraphQL and React Native to design and developed the database system and to manage customer
                  information and services for Gwangwu.inc, a medical device provider.
                </Typography>
              </View>
            </View>
          </Modal>

          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal7(true) }}>
              <Typography variant="h3" className={classes.Space1} color="primary">
                University of Rochester Research and Innovation Grant
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal7}
          >
            <Button title="BACK" onPress={() => { setModal7(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  University of Rochester Research and Innovation Grant
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Jan 2021 - Jun 2021]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Given an opportunity to manage the individual research project from the university. Current research attempt
                  was to build the disease widespread model in the fictional future case of zombie widespread.
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Applied influenza spread dynamics model with recurrences to build the regression model with Python.
                </Typography>
              </View>
            </View>
          </Modal>

          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal8(true) }}>
              <Typography variant="h3" className={classes.Space1} color="primary">
                Youtube Trending Video Analysis
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal8}
          >
            <Button title="BACK" onPress={() => { setModal8(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  Youtube Trending Video Analysis
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Jan 2021 - May 2021]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • Used Python and RStudio to analyze and discover the difference in viewership style in trending
                  YouTube video statistics and built various regression models to predict and estimate future video
                  trends
                </Typography>
              </View>
            </View>
          </Modal>

          <View classNmae={classes.wrapper}>
            <TouchableOpacity onPress={() => { setModal9(true) }}>
              <Typography variant="h3" className={classes.Space1} color="primary">
                Image Search Engine
              </Typography>
            </TouchableOpacity>
          </View>

          <Modal
            transparent={true}
            visible={Modal9}
          >
            <Button title="BACK" onPress={() => { setModal9(false) }} />
            <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
              <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 100, flex: 1 }}>
                <Typography variant="h2" className={classes.Space2, classes.left} color="primary">
                  Image Search Engine
                </Typography>
                <Typography variant="h1" className={classes.space2} color="primary">
                  [Jan 2021 - May 2021]
                </Typography>
                <Typography variant="h3" className={classes.Space2} color="primary">
                  • A research paper for International Baccalaureate. Applied the concept of fractal and self-replication to
                  build an algorithm for image search engine based on google image search system.
                </Typography>
              </View>
            </View>
          </Modal>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              marginTop: "1.5rem",
              marginBottom: "0.5rem"

            }}
          />
          <Typography variant="h3" className={classes.Space2} color="primary">
            jsoan.dev99@gmail.com <a href="https://www.linkedin.com/in/jideok-soan-ba3a71219/" >Linkedin</a>
          </Typography>

        </div>

      </ThemeProvider >
    </div >
  );
}

export default App;