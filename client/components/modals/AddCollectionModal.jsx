import React, {useState, useEffect} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


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

const AddCollectionModal = (props) => {
  
 const [modalDisplay, setModalDisplay] = useState([]);



  return (
    <div>
      <Modal
        open={props.open} 
        onClose={() => {props.handleClose()}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            请输入一个新的收藏系列 （比如：“瓷器”）
          </Typography>
          <TextField id="standard-basic" label="收藏系列" variant="standard" />
          <Button variant="outlined" onClick={() => {props.handleClose()}}>关闭</Button>
        </Box>
      </Modal>
    </div>
  ) 
}

export default AddCollectionModal