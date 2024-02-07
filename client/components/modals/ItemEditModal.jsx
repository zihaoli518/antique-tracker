import React, {useState, useEffect} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

const ItemEditModal = (props) => {
  // console.log('inside itemEditModal', props)

  const [category, setCategory] = useState('');
  

  return (
    <div className='item-edit-modal-container'>
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
            修改藏品信息
          </Typography>
          <TextField id="item-input-name" label="名称" variant="standard" />
          {/* <Autocomplete
            value={category}
            onChange={(event, newValue) => {
              setCategory(newValue);
            }}
            options={Object.keys(props.allItems)}
            renderInput={(params) => (
              <TextField {...params} label="收藏系列" />
            )}
          /> */}
          <TextField id="item-input-timePeriod" label="年代" variant="standard" />
          <TextField id="item-input-timeBought" label="入手日期" variant="standard" />
          <TextField id="item-input-priceIn" label="入手价" variant="standard" />
          <TextField id="item-input-priceMarket" label="市场价" variant="standard" />
          <Box >
            <Button variant="outlined" onClick={() => {createItemAndUpdateMyCollection()}}>
               确定
            </Button>
            <Button variant="outlined" onClick={() => {props.handleClose()}}>
              关闭
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  ); 
}

export default ItemEditModal