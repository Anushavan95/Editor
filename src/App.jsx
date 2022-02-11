import Home                 from './Components/EditorBuilder/Home'
import { DndProvider }      from 'react-dnd'
import Backend              from 'react-dnd-html5-backend'
import './styles.css'
import React                from 'react'
import Header               from './Components/ZegaTheme/Header/Header'
import Main                 from './Components/ZegaTheme/Main/Main'
import './Components/zegaTheme.css'
import Tabs                 from './Tabs'
import { SIDEBAR_ITEMS }    from './Components/EditorBuilder/Config/constants'
import SideBarItem          from './SideBarItem'
import { Box }              from '@mui/system'
import { Grid, Typography } from '@mui/material'
import Accordion            from '@mui/material/Accordion'
import AccordionSummary     from '@mui/material/AccordionSummary'
import AccordionDetails     from '@mui/material/AccordionDetails'
import ExpandMoreIcon       from '@mui/icons-material/ExpandMore'



export default function App () {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Grid>
          <Box sx={{ display: 'flex' }}>
            <Box className="sideBar">
              <Typography variant="h4" className="editor-title">
                Editor
              </Typography>

              <Tabs>
                <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                  className="panel-1"
                >
                  <div className="paneli-border-fms">
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                      expandIcon={<ExpandMoreIcon/>}
                    >
                      <Typography
                        variant="h4"
                        className="title-component-sidebar"
                      >
                        Text
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Typography>
                      <Box className="elements-parent-box">
                        {Object.values(SIDEBAR_ITEMS.slice(0, 3)).map(
                          (sideBarItem, index) => (
                            <SideBarItem
                              key={sideBarItem.id}
                              data={sideBarItem}
                            />
                          ),
                        )}
                      </Box>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                  className="panel-2"
                >
                  <div className="paneli-border-fms">
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                      expandIcon={<ExpandMoreIcon/>}
                    >
                      <Typography
                        variant="h4"
                        className="title-component-sidebar"
                      >
                        Image/ImageLink
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Box className="elements-parent-box">
                      {Object.values(SIDEBAR_ITEMS.slice(3, 6)).map(
                        (sideBarItem, index) => (
                          <SideBarItem
                            key={sideBarItem.id}
                            data={sideBarItem}
                          />
                        ),
                      )}
                    </Box>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                  className="panel-2"
                >
                  <div className="paneli-border-fms">
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                      expandIcon={<ExpandMoreIcon/>}
                    >
                      <Typography
                        variant="h4"
                        className="title-component-sidebar"
                      >
                        Image/ImageLink
                      </Typography>
                    </AccordionSummary>
                  </div>
                  <AccordionDetails>
                    <Box className="elements-parent-box">
                      {Object.values(SIDEBAR_ITEMS.slice(3, 6)).map(
                        (sideBarItem, index) => (
                          <SideBarItem
                            key={sideBarItem.id}
                            data={sideBarItem}
                          />
                        ),
                      )}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Tabs>
            </Box>

            <Box className="parent">
              <Header/>
              <Main/>
            </Box>
            {/* </iframe> */}
          </Box>
        </Grid>
        <div className="MuiBox-root css-k008qs builder-part-fms">
          <div className="sideBar MuiBox-root css-0"/>
          <div className="parent MuiBox-root css-0">
            <Home/>
          </div>
        </div>
      </DndProvider>
    </div>
  )
}
