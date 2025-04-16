// import { useState } from 'react'
// import Header from './components/header/Header'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//     <h1>Materiel UI</h1>
//     </div>
//   );
// }

// export default App


/*
import { useState } from 'react';
import { Container, Grid } from "@mui/material";
import Header from './components/header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomCard from './components/CustomCard';
import FormDialog from './components/FormDialog';
const theme = createTheme();

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container>
          <Grid container spacing={3} xs={12}>
            <Grid item md={4} sm={6} xs={12}>
              <CustomCard />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <CustomCard />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <CustomCard />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <CustomCard />
            </Grid> 
            <Grid item md={4} sm={6} xs={12}>
              <CustomCard />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <CustomCard />
            </Grid>
          </Grid> 
          <FormDialog />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
*/

import React, { useState, useContext } from 'react';
import { Container, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/header/Header';
import CustomCard from './components/CustomCard';
import FormDialog from './components/FormDialog';
import { AppProvider, useAppContext, AppContext } from './context/app';

const theme = createTheme();
// import React, { useState } from 'react';
// import { Container, Grid } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Header from './components/header/Header';
// import CustomCard from './components/CustomCard';
// import FormDialog from './components/FormDialog';

const initialNotes = [
  {
    id: 1,
    title: "Je réussirai quoi qu'il arrive !",
    details: "Je suis Emmerson, j'aspire à être business Developper full stack !",
    image: "https://picsum.photos/200/300.jpg"
  },
  {
    id: 2,
    title: "Je réussirai quoi qu'il arrive !",
    details:
      "Je suis Emmerson, j'aspire à etre business Developper full stack !",
    image: "https://picsum.photos/200/300.jpg"
  },

  {
    id: 3,
    title: "Je réussirai quoi qu'il arrive !",
    details:
      "Je suis Emmerson, j'aspire à etre business Developper full stack !",
    image:
      "https://picsum.photos/200/300.jpg"
  },

  {
    id: 4,
    title: "Je réussirai quoi qu'il arrive !",
    details:
      "Je suis Emmerson, j'aspire à etre business Developper full stack !",
    image:
      "https://picsum.photos/200/300.jpg"
  },

  {
    id: 5,
    title: "Je réussirai quoi qu'il arrive !",
    details:
      "Je suis Emmerson, j'aspire à etre business Developper full stack !",
    image:
      "https://picsum.photos/200/300.jpg"
  }

]

const App = () => {
   const [notes, setNotes] = useState(initialNotes);

   function updateNotes(newNotes) {
    // setState((prevState) => ({ ...prevState, notes: newNotes }));
    notes.push(newNotes);
     setNotes(notes);
 };

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Grid container spacing={3} sx={{ marginTop: 2 }}>
            {notes.map((note) => (
              <Grid item xs={12} sm={6} md={4} key={note.id}>
                <CustomCard item={note} />
              </Grid>
            ))}
          </Grid>
          <FormDialog setNotes={updateNotes} />
        </Container>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
