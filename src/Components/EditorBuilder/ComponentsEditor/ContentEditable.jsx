import React, { useRef, useState } from 'react'
import ContentEditable             from 'react-contenteditable'
import { useSelector }             from 'react-redux'
import { selectTextEditorValue }   from '../../../redux/mySlice'



export default function ContentEditableText () {
  const textValue = useSelector(selectTextEditorValue)
  console.log(textValue.toString('html'), 'val')
  let contentEditable = useRef()
  const [html, setHtml] = useState('Please Your Text')

  const handleChange = (evt) => {
    setHtml(evt.target.value)
  }
  return (
    // <div
    // contentEditable={true}
    //   dangerouslySetInnerHTML={{
    //     __html: textValue.toString("html"),
    //   }}
    // ></div>

    <ContentEditable
      innerRef={contentEditable}
      html={textValue.toString('html')} // innerHTML of the editable div
      disabled={false} // use true to disable editing
      onChange={handleChange} // handle innerHTML change
      // Use a custom HTML tag (uses a div by default)
    />
    // <>poxos</>
  )
}
