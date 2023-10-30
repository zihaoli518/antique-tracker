import React, {useState, useEffect} from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import Collection from './components/Collection.jsx';

import './index.scss';


const App = () => {
  
  const [myCollection, setMyCollection] = useState({
    "茶碗":{
      "天目1" : {year: 832, dynasty: 'tang', price: '$10000'},
      "兔毫盏2" : {year: 1021, dynasty: 'song', price: '$10000'},
      "曜变天目" : {year: 1291, dynasty: 'song', price: '$99000'},

    }
});
  const [myCollectionDisplay, setMyCollectionDisplay] = useState([]);

  const updateCollection = (collectionName, collection) => {
    // setMyCollection({...myCollection, collection: collection});

    const newMyCollectionDisplay = [];
    for (let collection in myCollection) {
      newMyCollectionDisplay.push(<Collection collectionName={collection} collection={myCollection[collection]}/>)
    }

    setMyCollectionDisplay(newMyCollectionDisplay)
  }

  // const createCollection = (collectionName) => {
  //   const copyOfCollection = {...myCollection};
  //   copyOfCollection[collectionName] = {};
  //   setMyCollection(copyOfCollection);
  // }





  useEffect(() => {
    updateCollection();
  }, [myCollection])



  return (
    <div className='app-container'>
      <h5>welcome!</h5>
      <AddCircleIcon onClick={() => {createCollection('瓷器')}}/>

      <h5>your collection: </h5>
      {myCollectionDisplay}

    </div>
  ) 
}

export default App