/*import { Card, CardContent, Typography, CardActionArea, CardMedia, styled } from '@mui/material';

const StyledCardMedia = styled(CardMedia)({
  height: 158,
});

const CustomCard = () => {
  return (
    <Card>
      <CardActionArea>
        <StyledCardMedia
          image="https://t4.ftcdn.net/jpg/10/93/01/97/360_F_1093019701_mdXZbh3UOcY5fBXQxwLbg1m0pi4Hjp7b.jpg"
        />
        <CardContent>
          <Typography variant="h5">Test Title</Typography>
          <Typography variant="body2">Test Description</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard; */
import { Card, CardContent, Typography, CardActionArea, CardMedia, Container, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  '& img': {
    objectFit: 'cover'
  }
});

const CustomCard = ({ item }) => {
  return (
    <Container maxWidth="md"> 
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 2 }}>
        <CardActionArea> 
          <StyledCardMedia image={item.image} />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2">{item.details}</Typography>
          </CardContent>
        </CardActionArea>

        {/* Utilisation correcte de CardActions */}
        <CardActions>
          <Button size="small" color="primary">Partager</Button>
          <Button size="small" color="primary">Supprimer</Button>
        </CardActions>

      </Card>
    </Container>
  );
};

export default CustomCard;
