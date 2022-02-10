import React, { useRef }            from 'react'
import { useDrag }                  from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { COMPONENT }                from './Components/EditorBuilder/Config/constants'
import ContentEditableText          from './Components/EditorBuilder/ComponentsEditor/ContentEditable'
import ImageUploadingApp            from './Components/EditorBuilder/ComponentsEditor/ImageUploading'

import {
  _id,
  selectColor,
  selectFontFamily, selectID,
  selectMarginBottom,
  selectMarginLeft,
  selectMarginObj,
  selectMarginRight,
  selectMarginTop,
  selectPaddingBottom,
  selectPaddingLeft,
  selectPaddingRight,
  selectPaddingTop,
  selectTag,
  setTab,
}                from './redux/mySlice'
import HyperLink from './Components/EditorBuilder/ComponentsEditor/HyperLink'



const style = {
  border         : '1px dashed black',
  padding        : '0.5rem 1rem',
  backgroundColor: 'white',
  cursor         : 'move',
}

const Component = ({ data, components, path, layout }) => {
  const margin = useSelector(selectMarginObj)
  const _id = useSelector(selectID)
  const top = useSelector(selectMarginTop)
  const right = useSelector(selectMarginRight)
  const bottom = useSelector(selectMarginBottom)
  const left = useSelector(selectMarginLeft)
  const color = useSelector(selectColor)
  const font = useSelector(selectFontFamily)
  const P_top = useSelector(selectPaddingTop)
  const P_right = useSelector(selectPaddingRight)
  const P_bottom = useSelector(selectPaddingBottom)
  const P_left = useSelector(selectPaddingLeft)
  const dispatch = useDispatch()
  const tag = useSelector(selectTag)
  const ref = useRef(null)
  const [{ isDragging }, drag] = useDrag({
    item   : { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const handleClick = (e) => {
    console.log(e.target)
  }
  const opacity = isDragging ? 0 : 1
  // console.log('poxos')
  drag(ref)
  const styles = {
    margin    : `${top}px  ${right}px ${bottom}px ${left}px`,
    padding   : `${P_top}px  ${P_right}px ${P_bottom}px ${P_left}px`,
    fontFamily: font,
    color     : color,
  }
  const component = components[data.id]
  let tagEntry = `<${tag}>Your Heading</${tag}>`
  switch (component.content) {
    case 'ImageUpload':
      return <ImageUploadingApp/>
    case 'Editor':
      return <ContentEditableText/>
    case 'Heading':
      return (
        <>
          {_id}
          <div
            id={_id}
            style={styles}
            onClick={handleClick}
            contentEditable={true}
            dangerouslySetInnerHTML={{
              __html: tagEntry,
            }}
          />
        </>
      )
    case 'HyperLink':
      return <HyperLink layout={layout}/>
    default:
      break
  }

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="component draggable"
    >
      <div>{/*{data.id}*/}</div>
      <div
        contentEditable={true}
        dangerouslySetInnerHTML={{ __html: component.content }}
      />
    </div>
  )
}
export default Component
