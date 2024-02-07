import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useEffect, useState, useCallback } from 'react';





// keep items and collection structure separate 
// id system, what to do when items are deleted? 
// database operations? 
// recursively update menu 


function ViewOptions(props) {
  const [menuDisplay, setMenuDisplay] = useState([]);



  const [checked, setChecked] = useState({'Child 1': true, 'Child 2': false});
  const [open, setOpen] = useState({'Parent': true})


  const handleChangeCheck = (event, category) => {
    console.log('handleChangeCheck ', category);
    // props.modifyCollections([category], ['checked'], [event.target.checked]);
    // recursively checking if parent needs to be unchekced 
    function recursivelyReturnArray(category, array=[category]) {
      console.log('recursively...', category, props.allCollections[category])
      if (category ==='all' || props.allCollections[category].parent=='all') return array;
      const parentStr = props.allCollections[category].parent;
      const parentData = props.allCollections[parentStr];

      const areAllChildrenChecked = parentData.children.every(child => props.allCollections[child].checked===true);
      const areAllChildrenUnChecked = parentData.children.every(child => props.allCollections[child].checked===false);
      console.log(parentStr, parentData, areAllChildrenUnChecked)
      if (areAllChildrenChecked || areAllChildrenUnChecked) {
        array.push(parentStr);
        recursivelyReturnArray(parentData.parent, array)
      }
      return array
    }
    const needUpdate = recursivelyReturnArray(category);
    console.log('need update!', needUpdate)
     props.modifyCollections(needUpdate, ['checked'], [event.target.checked]);
    // else props.modifyCollections([category], ['checked'], [event.target.checked]);

  };

  const handleClickParent = (event, category) => {
    console.log('inside handleClick', category);
    const data = props.allCollections[category]
    const areAllChildrenChecked = data.children.every(child => props.allCollections[child].checked);
    const areSomeChildrenChecked = (data.children.some(child => props.allCollections[child].checked) && !areAllChildrenChecked);
    // return an array of categories to be unchecked
    function recursivelyReturnArray(category, array=[category]) {
      const data = props.allCollections[category];
      if (!data.children) return array;
      for (let child of data.children) {
        array.push(child);
        recursivelyReturnArray(child, array)
      }
      return array
    }
    const needUpdate = recursivelyReturnArray(category);
    // uncheck everything 
    if (areAllChildrenChecked) props.modifyCollections(needUpdate, ['checked'], [false]);
    else props.modifyCollections(needUpdate, ['checked'], [true]);

  };

  const toggleExpand = (category) => {
    console.log('inside toggleExpand, ', category, props.modifyCollections)
    props.modifyCollections([category], ['open'], [!props.allCollections[category].open]);
  }

  const generateMenu = () => {
    console.log('running generateMenu.....');
    const sortedKeys = Object.keys(props.allCollections).sort(
      (a, b) => props.allCollections[b].children?.length - props.allCollections[a].children?.length || 0
    );
    console.log(sortedKeys)
    const processed = {};

    // input - an array of keys of object of collections ------ output - an array of jsx elements 
    function recursivelyGenerate(array) {
      console.log('recursivelyGenerate....', array)
      let outputArray = [];

      for (let category of array) {
        if (processed[category]) continue;
        processed[category] = true; 
        const data = props.allCollections[category];
        console.log(category, data, data.open)
        // if last level - aka no children
        if (!data.children) {
          console.log('no children', props.allCollections)
          if (data.parent==='all') {
            outputArray.push(
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                  label={category}
                  control={<Checkbox checked={props.allCollections[category].checked} onChange={e => handleChangeCheck(e, category)} />}
                />
              </Box>
            )
          }
          else {
            outputArray.push(
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>

              <FormControlLabel
                label={category}
                control={<Checkbox  checked={props.allCollections[category].checked} onChange={e => handleChangeCheck(e, category)} />}
              />
              </Box>

            )
          }
        }
        // if has children, recursively call 
        else {
          const areAllChildrenChecked = data.children.every(child => props.allCollections[child].checked);
          const areSomeChildrenChecked = (data.children.some(child => props.allCollections[child].checked) && !areAllChildrenChecked);
          console.log('yes children, ', category, props.allCollections,areAllChildrenChecked)
          outputArray.push(
  
            <Container style={{ display: 'flex', alignItems: 'center' }} >
              <FormControlLabel
                onClick={(e) => handleClickParent(e, category)}
                label={category}
                control={
                  <Checkbox
                    checked={areAllChildrenChecked}
                    indeterminate={areSomeChildrenChecked}
                  />
                }
                />
                {props.allCollections[category].open ? <ExpandLess onClick={() => toggleExpand(category)}/> : <ExpandMore onClick={() => toggleExpand(category)}/>}
            </Container>
          )
          const childrenJSX = recursivelyGenerate(data.children); 
          outputArray.push (
            <Collapse in={props.allCollections[category].open} timeout="auto" unmountOnExit style={{ 'margin-left': '10%', 'position': 'relative' }}>
              {/* <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}></Box> */}
                {childrenJSX}
              {/* <Box /> */}
            </Collapse>
          );
        }
      }
      console.log('end of recursive, ', outputArray)
      return outputArray
    }
    const result = recursivelyGenerate(sortedKeys);

    setMenuDisplay(result);
    console.log('result', result);
    console.log(checked, open)
  }

  useEffect(() => {

    generateMenu();
    console.log('useEffect ', props.allCollections)
  }, [props.allCollections])



  return (
    <div className='view-options'>
      {/* <Container style={{ display: 'flex', alignItems: 'center' }} >
        <FormControlLabel
          onClick={() => handleClick('Parent')}
          label="Parent"
          control={
            <Checkbox
              checked={checked['Child 1']===true && checked['Child 2']===true}
              indeterminate={checked['Child 1'] !== checked['Child 2']}
            />
          }
          />
          {open['Parent'] ? <ExpandLess onClick={() => toggleExpand('Parent')}/> : <ExpandMore onClick={() => toggleExpand('Parent')}/>}
      </Container>

      <Collapse in={open['Parent']} timeout="auto" unmountOnExit style={{ 'margin-left': '10%', 'position' : 'relative'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Child 1"
          control={<Checkbox checked={checked['Child 1']} onChange={e => handleChange3(e, 'Child 1')} />}
        />
        <FormControlLabel
          label="Child 2"
          control={<Checkbox checked={checked['Child 2']} onChange={e => handleChange3(e, 'Child 2')} />}
        />
        </Box>
      </Collapse> */}

      
      {menuDisplay}
    </div>
  );
}

export default ViewOptions