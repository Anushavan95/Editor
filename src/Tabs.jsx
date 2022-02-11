import React, { useState } from 'react'
import Box                 from '@mui/material/Box'
import Tab                 from '@mui/material/Tab'
import TabContext          from '@mui/lab/TabContext'
import TabList             from '@mui/lab/TabList'
import TabPanel            from '@mui/lab/TabPanel'
import RichTextEditor      from 'react-rte'
import {
  selectAddedImages,
  selectComponentEntry, selectedContent,
  selectTab, selectTag,
  /// selectTextEditorValue,
  setComponent,
  setEditorTextValue,
  setTab,
} from './redux/mySlice'
import { useSelector }     from 'react-redux'
import { useDispatch }     from 'react-redux'
import { Button }          from '@mui/material'
import BasicSelect         from './TagSelect'
import MarginStyles        from './Components/EditorBuilder/MarginStyles'
import PaddingStyles       from './Components/EditorBuilder/PaddingStyles'
import HyperSettings       from './Components/EditorBuilder/ComponentsEditor/HyperSettings'
import SelectFontFamily    from './SelectFontFamily'
import ColorChange         from './ColorChange'
import AlignMent           from './AlignMent'



function Tabs (props) {
  const value = useSelector(selectTab)

  const dispatch = useDispatch()
  const imag = useSelector(selectAddedImages)
  //const valueText = useSelector(selectTextEditorValue)
  const selComponent = useSelector(selectTag)
  const content = useSelector(selectedContent)
  let selectedComponentData = selComponent.map(item => {
    if (Object.values(item)[0].id === content) {
      return Object.values(item)[0];
    }
  })
  selectedComponentData = selectedComponentData[0];
  const handleChange = (event, newValue) => {
    dispatch(setTab(newValue))
  }
  console.log(props,'propsprops')
  console.log(selectedComponentData,'value')
  const onChange = (valueText) => {
    dispatch(setEditorTextValue(valueText))
  }
  console.log(content,'1111111111111111')
  // const handleSave = () => {
  //   let obj3 = valueText.toString('html')
  //   // console.log(obj3, "333");
  //   if (valueText.length !== 0) {
  //     const requestOptions = {
  //       method : 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body   : JSON.stringify({
  //         data: {
  //           component_id: 1,
  //           text        : `${obj3}`,
  //         },
  //       }),
  //     }
  //
  //     fetch('https://test.zegashop.com/api/set', requestOptions).then(
  //       (response) => response.json(),
  //     )
  //     // console.log(valueText);
  //   } else {
  //     console.log('text null')
  //   }
  // }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: 'divider' }}
          className="tab-box"
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label={<span className="tabs-text-fms">Elements</span>}
              value="1"
              className="tab-label"
            />
            <Tab
              label={<span className="tabs-text-fms">Styles</span>}
              value="2"
              className="tab-label"
            />
          </TabList>
        </Box>
        <TabPanel value="1" className="components-tab">
          {props.children}
        </TabPanel>
        <TabPanel value="2">
          {
            content && (function (selectedComponentData,   onChange) {
              console.log(selectedComponentData, 'selComponent')
              let contentType = false;
              if(selectedComponentData){
                contentType = selectedComponentData.content
              }
              switch (contentType) {
                case 'Editor':
                  // return <RichTextEditor value={valueText} onChange={onChange}/>
                case 'Heading':
                  return (
                      <>
                        <BasicSelect/>
                        <MarginStyles content={content} selectedComponentData={selectedComponentData}/>
                        <PaddingStyles/>
                        <SelectFontFamily/>
                        <ColorChange/>
                        <AlignMent/>
                      </>
                  )
                case 'HyperLink':
                  return <HyperSettings/>
                case 'button':
                  return (
                      <Button
                          style={{ marginTop: '150px' }}
                          variant="contained"
                          /// onClick={}
                      >
                        handleSave
                      </Button>
                  )
                default:
                  return null
              }
            })(selectedComponentData,   onChange)
          }

        </TabPanel>
      </TabContext>
    </Box>
  )
}


export default Tabs
