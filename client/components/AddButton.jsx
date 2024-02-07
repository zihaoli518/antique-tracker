import React, {useState, useEffect} from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import AddCollectionModal from './modals/AddCollectionModal.jsx';
import AddItemModal from './modals/AddItemModal.jsx'

const AddButton = (props) => {
  
 const [modalDisplay, setModalDisplay] = useState([]);

 const [open, setOpen] = useState(false);
 const handleOpen = (invokedBy) => {
   if (invokedBy === 'modal') return
   setOpen(true);
   console.log('handleOpen invoked', 'open: ', open)
 }

 const handleClose = () => {
   setOpen(false);
   console.log('handleClose invoked', 'open: ', open)
 }



  useEffect(() => {

  }, [])



  return (
    <div className='add-button-container' >
      <AddCircleIcon className='add-button-svg' onClick={() => handleOpen()}/>
      <h5 className='add-button-description'>{props.displayText}</h5>
      {props.modal==='collection' ?
        <AddCollectionModal allItems={props.allItems} createCollection={props.createCollection} open={open} handleClose={handleClose}/>
        :
        <AddItemModal allItems={props.allItems} setAllItems={props.setAllItems} createItem={props.createItem} open={open} handleClose={handleClose} />
      }
    </div>
  ) 
}

export default AddButton