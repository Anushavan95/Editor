import { Button, TextField }             from '@mui/material'
import { Box }                           from '@mui/system'
import React, { useState }               from 'react'
import { useDispatch, useSelector }      from 'react-redux'
///import { selectHyperLink, setHyperLink } from '../../../redux/mySlice'



export default function HyperSettings () {
 /// const hyperLink = useSelector(selectHyperLink)
  const dispatch = useDispatch()
  const handleHyperChange = (event) => {
   ///dispatch(setHyperLink(event.target.value))
  }

  return (
    <Box className="input-settings">
      <TextField
        className="link"
        label="HyperLink"
        id="outlined-size-small"
        value={''}
        onChange={handleHyperChange}
        size="small"
      />
      <TextField
        className="link"
        label="HyperLink Name"
        id="outlined-size-small"
        size="small"
      />
      <Button variant="contained">handleSubmit</Button>
    </Box>
  )
}
