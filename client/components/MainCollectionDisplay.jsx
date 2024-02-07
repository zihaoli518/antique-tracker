import React, {useState, useEffect} from 'react';

import Item from './Item.jsx';

const MainCollectionDisplay = (props) => {

  const [display, setDisplay] = useState([]);

  // const updateDisplay = () => {
  //   // const newArray = [];
  //   // const collectionObj = props.allItems[props.collectionName];

  //   // // const itemName = '1'
  //   // for (let itemName in collectionObj) {
  //   //   newArray.push(<Item key={itemName}itemName={itemName} itemData={collectionObj[itemName]} allItems={props.allItems}/>)
  //   // }
  //   // setCollectionDisplay(newArray);
  // }

  const updateDisplay = (collectionName, collection) => {
    // setAllItems({...allItems, collection: collection});
    // sync with localStorage
    console.log('inside updateCollection', props.allItems)

    const newMyCollectionDisplay = [];
    const allItems = props.allItems; 
    for (let [id, itemData] of Object.entries(allItems)) {
      // console.log(itemData, props.allCollections)
      let displayCheck = props.allCollections[itemData.parent].checked;
      if (displayCheck) newMyCollectionDisplay.push(<Item key={Math.random()} itemName={itemData.name} itemData={itemData}/>)
    }

    setDisplay(newMyCollectionDisplay);

    // syncLocalStorageWithState();
  }

  const syncLocalStorageWithState = () => {
    localStorage.setItem('antiqueTracker', JSON.stringify(props.allItems));
  }


  
  useEffect(() => {
    if (props.allItems) updateDisplay();
  }, [props.allItems, props.allCollections])

  return (
    <div className='main-collection-display-container'>
      {/* <h5>{props.collectionName}</h5> */}
      {display}
    </div>
  ) 
}

export default MainCollectionDisplay

