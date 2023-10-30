import React, {useState, useEffect} from 'react';

import Item from './Item.jsx';

const Collection = (props) => {

  const [collectionDisplay, setCollectionDisplay] = useState([]);

  const updateDisplay = () => {
    const newArray = [];
    const collection = props.collection;
    console.log(collection)
    const itemName = '1'
    for (let item in collection) {
      newArray.push(<Item itemName={props}/>)
    }
    setCollectionDisplay(newArray);
  }

  
  useEffect(() => {
    updateDisplay();
    
  }, [])

  return (
    <div className='collection-container'>
      <h5>{props.collectionName}</h5>
      {collectionDisplay}
    </div>
  ) 
}

export default Collection