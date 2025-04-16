/* import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { theme } from 'antd';

const StyledCardMedia = styled(theme) => ({

    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
    
    });
    
    

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment className={classes.fab}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
        </Fab>
      <Dialog
        maxWidth ="sm"
        fullWidth ={true}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle> Ajouter une note !</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pour ajouter de nouvelles notes, commencez par écrire ici !
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="text"
            label="Titre"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            multiline
            rows={4}
            required
            margin="dense"
            id="name"
            name="text"
            label="Details"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Retour</Button>
          <Button type="submit">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
 

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{
          position: 'fixed',
          bottom: 22,
          right: 55,
        }}
      >
        <AddIcon />
      </Fab>
      <Dialog
        maxWidth="sm"
        fullWidth={true}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Ajouter une note !</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pour ajouter de nouvelles notes, commencez par écrire ici !
          </DialogContentText>
          <TextField
            onChange={(e) => SetNote( ...note, title: e.target.value)}
            autoFocus
            required
            margin="dense"
            id="title"
            name="text"
            label="Titre"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(e) => SetNote( ...note, details, title: e.target.value)}
            autoFocus
            multiline
            rows={4}
            required
            margin="dense"
            id="details"
            name="text"
            label="Details"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Retour</Button>
          <Button onClick={handleSubmit} color="primary">Ajouter</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
} */


  import * as React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// Composant pour afficher une note
const CustomCard = ({ item, onDelete }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.details}</p>
      <Button onClick={() => onDelete(item.id)} color="secondary">Supprimer</Button>
    </div>
  );
};

export default function FormDialog({ onSubmit }) {
  const [open, setOpen] = React.useState(false);
  const [note, setNote] = React.useState({
    id: Date.now(),
    title: '',
    details: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (note.title.trim() && note.details.trim()) {
      onSubmit(note.title, note.details);
      setNote({ id: Date.now(), title: '', details: '' }); // Réinitialisation du formulaire
      setOpen(false);
    }
  };

  const handleDelete = (id) => {
    console.log(`Supprimer l'élément avec l'ID: ${id}`);
  };

  return (
    <React.Fragment>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{
          position: 'fixed',
          bottom: 22,
          right: 55,
        }}
      >
        <AddIcon />
      </Fab>
      <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Ajouter une note !</DialogTitle>
        <DialogContent>
          <DialogContentText>Pour ajouter de nouvelles notes, commencez par écrire ici !</DialogContentText>
          <TextField
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            value={note.title}
            autoFocus
            required
            margin="dense"
            id="title"
            name="title"
            label="Titre"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(e) => setNote({ ...note, details: e.target.value })}
            value={note.details}
            multiline
            rows={4}
            required
            margin="dense"
            id="details"
            name="details"
            label="Détails"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Retour</Button>
          <Button 
            onClick={() => {
              handleSubmit();
              handleDelete(note.id);
            }} 
            color="primary"
          >
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>

      {/* Affichage de la carte après ajout */}
      {note.title && note.details && <CustomCard item={note} onDelete={handleDelete} />}
    </React.Fragment>
  );
}
