import React, {useState, useEffect} from 'react';

import Item from './Item.jsx';

const Collection = (props) => {

  const [collectionDisplay, setCollectionDisplay] = useState([]);

  const updateDisplay = () => {
    const newArray = [];
    const collectionObj = props.allItems[props.collectionName];

    // const itemName = '1'
    for (let itemName in collectionObj) {
      newArray.push(<Item key={itemName}itemName={itemName} itemData={collectionObj[itemName]} allItems={props.allItems}/>)
    }
    setCollectionDisplay(newArray);
  }

  
  useEffect(() => {
    updateDisplay();
    
  }, [])

  return (
    <div className='collection-container'>
      {/* <h5>{props.collectionName}</h5> */}
      {collectionDisplay}
    </div>
  ) 
}

export default Collection