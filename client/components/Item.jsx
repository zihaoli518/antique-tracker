import React, {useState, useEffect} from 'react';

// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ItemEditModal from './modals/ItemEditModal.jsx'

const Item = (props) => {

    // console.log('inside Item', props.itemData)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const itemName = props.itemName;
  const itemData = props.itemData;

  useEffect(() => {

  }, [])

  return (
    <Card className='item-card-container' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, width: 140}}
        image={itemData.url}
        title={itemName}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {itemName}
        </Typography>
        {/* <Typography gutterBottom variant="h5" component="div">
          {itemData.id}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          年代: {itemData.timePeriod}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          收购日期: {itemData.timeBought}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          入手价: {itemData.priceIn}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          市场价: {itemData.priceMarket}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => handleOpen()}>
          Update
        </Button>
        <ItemEditModal open={open} allItems={props.allItems} handleClose={handleClose}/>

        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
  );
}

export default Item