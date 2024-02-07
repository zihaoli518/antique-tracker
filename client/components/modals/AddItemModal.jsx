import React, {useState, useEffect} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import Autocomplete from '@mui/material/Autocomplete';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddItemModal = (props) => {
  
  const [arrayOfCategories, setArrayOfCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [iconUrl, setIconUrl] = useState('');

  // const fetchImage = async () => {
  //   const prompt = 'cool ancient chinese artifact, a tea bowl that has dark paint and blue circular patterns';
  //   console.log('fetching.... prompt: ', prompt)

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Authorization": `Bearer ${OpenAIAPIKey}`,
  //       "Content-Type": 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "prompt": prompt,
  //       "n": 1,
  //       "size": "512x512"
  //     })
  //   }

  //   try {
  //     const response = await fetch('https://api.openai.com/v1/images/generations', options);
  //     const data = await response.json();
  //     console.log(data)
  //     setIconUrl(data.data[0].url)
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }



  const addItem = () => {
    const dataArray = ['']
    const newItemObj = {};
    for (let dataPoint of dataArray) newItemObj[dataPoint] = null;
    console.log(newItemObj)
    newItemObj['name'] = '123';
    console.log(newItemObj)
    console.log(newItemObj['name'])

    newItemObj['name'] = document.getElementById('item-input-name').value;
    newItemObj['collectionCategory'] = category;
    newItemObj['timePeriod'] = document.getElementById('item-input-timePeriod').value;
    newItemObj['timeBought'] = document.getElementById('item-input-timeBought').value;
    newItemObj['priceIn'] = document.getElementById('item-input-priceIn').value;
    newItemObj['priceMarket'] = document.getElementById('item-input-priceMarket').value;

    // determine id 
    const id = Object.keys(props.allItems).length + 1;
    props.createItem(id, newItemObj)
    console.log('end of createItemAndUpdateMyCollection');
  }

  const hardCoded = ['date acquired', ];
  const userSettings = []


    // useEffect(() => {
  //   setArrayOfCategories(Object.keys(props.allItems))
  // }, [Object.keys(props.allItems)])


  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => {
          props.handleClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Congrats on your new find!
          </Typography>
          <TextField id="item-input-name" label="name" variant="standard" />
          <CardMedia sx={{ height: '50%', width: '50%', borderColor: 'primary.main', borderWidth: 2, borderStyle: 'solid'}} image={iconUrl} />

          <Autocomplete
            value={category}
            onChange={(event, newValue) => {
              setCategory(newValue);
            }}
            options={Object.keys(props.allItems)}
            renderInput={(params) => <TextField {...params} label="收藏系列" />}
          />
          <TextField
            id="item-input-timePeriod"
            label="年代"
            variant="standard"
          />
          <TextField
            id="item-input-timeBought"
            label="入手日期"
            variant="standard"
          />
          <TextField
            id="item-input-priceIn"
            label="入手价"
            variant="standard"
          />
          <TextField
            id="item-input-priceMarket"
            label="市场价"
            variant="standard"
          />
          <Box>
            <Button
              variant="outlined"
              onClick={() => {
                addItem();
              }}
            >
              add
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                props.handleClose();
              }}
            >
              close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  ); 
}

export default AddItemModal