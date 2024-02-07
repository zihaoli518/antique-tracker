
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import AddButton from './AddButton.jsx';
import Container from '@mui/material/Container';

import MainCollectionDisplay from "./MainCollectionDisplay.jsx";
import ViewOptions from './ViewOptions.jsx'

const MenuAndDisplayContainer = (props) => {

  console.log('inside MenuAndDisplayContainer', props.allItems)

  const [collectionDisplay, setCollectionDisplay] = useState([]);

  const [selectedSort, setSelectedSort] = useState('');


  // const updateDisplay = () => {
  //   const newArray = [];
  //   const collectionObj = props.allItems[props.collectionName];
  //   // const itemName = '1'
  //   for (let itemId in props.allItems) {
  //     let parent = props.allItems[itemId].parent;
  //     let displayCheck = props.allCollections[parent].display;
  //     console.log('TEST', itemId, props.allItems[itemId])
  //     if (displayCheck) newArray.push(<Item key={itemId} itemName={itemName} itemData={collectionObj[itemName]} allItems={props.allItems}/>)
  //   }
  //   setCollectionDisplay(newArray);
  // };

  useEffect(() => {
    // updateDisplay();
  }, []);

  return (
    <div className="menu-and-display-container">
    {/* <Container className="menu-and-display-container"> */}
   
      <div className="menu-top-container">
        <Button className="add-buttons">
          <AddButton
            allItems={props.allItems}
            createCollection={props.createCollection}
            displayText="manage"
            modal="collection"
          />
        </Button>
        <Button className="add-buttons">
          <AddButton
            allItems={props.allItems}
            setAllItems={props.setAllItems}
            createItem={props.createItem}
            displayText="add an item"
            modal="item"
          />
        </Button>
      </div>

      <div className="menu-left-and-main-display-container">
        <ViewOptions allItems={props.allItems} setAllItems={props.setAllItems} allCollections={props.allCollections} setAllCollections={props.setAllCollections} modifyCollections={props.modifyCollections}/>
        <MainCollectionDisplay allItems={props.allItems} setAllItems={props.setAllItems} allCollections={props.allCollections} setAllCollections={props.setAllCollections} modifyCollections={props.modifyCollections}/>
      </div>
    {/* </Container> */}

    </div>
  );
};

export default MenuAndDisplayContainer;
