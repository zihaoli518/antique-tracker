import React, {useState, useEffect} from 'react';

import Button from '@mui/material/Button';


import Collection from './components/Collection.jsx';
import Item from './components/Item.jsx';

import NavBar from './components/NavBar.jsx';
import AddButton from './components/AddButton.jsx';
import MainCollectionDisplay from './components/MainCollectionDisplay.jsx'

import './index.scss';
import MenuAndDisplayContainer from './components/MenuAndDisplayContainer.jsx';




const App = () => {
  
  const [initialLoad, setInitialLoad] = useState(true);
  const [allItems, setAllItems] = useState(false);
  const [allCollections, setAllCollections] = useState(false);

  const [allItemsDisplay, setallItemsDisplay] = useState([]);

  const setUpOnce = () => {
  //   const example = {
  //     "茶碗":{
  //       "天目1" : {id: '001', type: 'item', parent: '建盏', year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: ''},
  //       "兔毫盏2" : {year: 1021, timePeriod: 'song', timeBought: '10/2', priceIn: 5000, priceMarket: '$10000'},
  //       "曜变天目" : {year: 1291, timePeriod: 'song', timeBought: '10/2', priceIn: 300,priceMarket: '$99000'},
  //     },
  //     "书画":{
  //       "清明上河图" : {year: 832, timePeriod: 'tang', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000'},
  //       "梵高自画像" : {year: 1021, timePeriod: '宋', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000'},
  //       "杜甫签名" : {year: 1291, timePeriod: 'song', timeBought: '10/2', priceIn: 1000, priceMarket: '$99000'},
  //     },
  // }

    const test = {
      items: {
        1: {id: '1', type: 'item', name: '天目1', parent: 'bowls', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://www.guanfujianzhan.com/wp-content/uploads/2016/07/1468919729.jpg'},
        // 2: {id: '2', type: 'item', name: '天目1', parent: 'bowls', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://www.guanfujianzhan.com/wp-content/uploads/2016/07/1468919729.jpg'},
        // 3: {id: '3', type: 'item', name: '天目1', parent: 'bowls', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://www.guanfujianzhan.com/wp-content/uploads/2016/07/1468919729.jpg'},
        // 4: {id: '4', type: 'item', name: '天目1', parent: 'bowls', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://www.guanfujianzhan.com/wp-content/uploads/2016/07/1468919729.jpg'},
        // 5: {id: '5', type: 'item', name: '天目1', parent: 'bowls', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://www.guanfujianzhan.com/wp-content/uploads/2016/07/1468919729.jpg'},
        6: {id: '6', type: 'item', name: 'Mario', parent: 'ds games', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://media.gamestop.com/i/gamestop/10036906/New-Super-Mario-Bros.?$pdp$'},
        7: {id: '7', type: 'item', name: 'Nintendog', parent: 'ds games', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://m.media-amazon.com/images/I/718gu3UKEdS.jpg'},
        8: {id: '8', type: 'item', name: 'Pokemon Red', parent: 'ds games', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://archives.bulbagarden.net/media/upload/thumb/4/43/FireRed_EN_boxart.png/250px-FireRed_EN_boxart.png'},
        9: {id: '9', type: 'item', name: 'Zelda', parent: 'switch games', display: true, year: 832, timePeriod: '唐', timeBought: '10/2', priceIn: 1000, priceMarket: '$10000', forSale: false, private: false, dateAdded: '', url: 'https://m.media-amazon.com/images/I/81KGsbq8ekL._AC_UF1000,1000_QL80_.jpg'},

      },
      collections: {
        antique: {display: true, parent: 'all', children: ['bowls'], open: true},
        bowls: {display: true, parent: 'antique', children:['tianmu'], open: true, checked: true},
        tianmu: {display: true, parent: 'bowls', checked: true}, 
        games: {display: true, parent: 'all', children: ['ds games', 'switch games', 'pc games'], open: true},
        'ds games': {display: true, parent: 'games', checked: true},
        'switch games': {display: true, parent: 'games', checked: true},
        'pc games': {display: true, parent: 'games', checked: true}, 
        'swags': {display: true, parent: 'all', checked: true}
      }
    }
    localStorage.setItem('antiqueTracker', JSON.stringify(test))
  }
  // all arrays - example: modifyCollections(['games', 'bowls', 'antique'], ['open', 'checked'], [true, false])
  const modifyCollections = (category, attribute, value) => {
    const newState = {...allCollections}

    category.forEach(element => {
      for (let i=0; i<attribute.length; i++) {
          newState[element][attribute[i]] = value[i]
      }
    })
    console.log('in modifyCollections, ', category, attribute, value)
    setAllCollections(newState)
  }

  // const updateCollection = (collectionName, collection) => {
  //   // setallItems({...allItems, collection: collection});
  //   // sync with localStorage
  //   console.log('inside updateCollection', allItems)

  //   const newallItemsDisplay = [];
  //   for (let index in allItems) {
  //     console.log(item)
  //     const item = allItems[index]
  //     newallItemsDisplay.push(<Item key={Math.random()} itemName={item.name} itemData={item}/>)
  //   }

  //   setallItemsDisplay(newallItemsDisplay);

  //   syncLocalStorageWithState();
  // }

  const initialLoadFunc = () => {
    const localStorageParsed = JSON.parse(localStorage.getItem('antiqueTracker'));

    setAllItems(localStorageParsed.items);
    setAllCollections(localStorageParsed.collections);
    setInitialLoad(false);
  }

  setUpOnce()

  const syncLocalStorageWithState = () => {
    localStorage.setItem('antiqueTracker', JSON.stringify(allItems));
  }



  // const createCollection = (collectionName) => {
  //   const copyOfCollection = {...allItems};
  //   copyOfCollection[collectionName] = {};
  //   setallItems(copyOfCollection);
  // }

  const createItem = (itemId, itemObj) => {
    const copyOfAllItems = {...allItems};
    console.log('inside createItem')
    copyOfCollection[itemId] = itemObj;
    setAllItems(copyOfCollection);
  }


  useEffect(() => {
    if (initialLoad) initialLoadFunc();
    // updateCollection();
    console.log('in App', allItems)
  }, [allItems])

  // useEffect(() => {
  //   if (initialLoad) initialLoadFunc();
  //   // updateCollection();
  //   console.log('in App2', allItems)
  // }, [])


  return (        
    <div className='app-container'>
      <NavBar />
      {/* <PersonalCollectionPage /> */}

      <MenuAndDisplayContainer allItems={allItems} setAllItems={setAllItems} createItem={createItem} allCollections={allCollections} setAllCollections={setAllCollections} modifyCollections={modifyCollections}/>

      
    </div>
  ) 
}

export default App