import React, {useState, useEffect} from 'react';

// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = (props) => {

  const [collectionDisplay, setCollectionDisplay] = useState([]);

  const updateDisplay = () => {

  }

  useEffect(() => {

  }, [])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.guanfujianzhan.com/wp-content/uploads/2016/07/1468919729.jpg"
        title={props.itemName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          曜变天目
        </Typography>
        <Typography variant="body2" color="text.secondary">
          曜变天目很厉害
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Item