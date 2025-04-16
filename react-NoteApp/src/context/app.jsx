import React, { createContext, useContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

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
// Create a provider component
export const AppProvider = ({ children }) => {
    const [notes, setNotes] = useState(initialNotes);

    // updateNotes | addNote
    const updateNotes = (newNotes) => {
       // setState((prevState) => ({ ...prevState, notes: newNotes }));
       notes.push(newNotes);
        setNotes(notes);
    };

    return (
        <AppContext.Provider value={{ notes, updateNotes }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};