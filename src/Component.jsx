import React, {useRef} from 'react'
import {useDrag} from 'react-dnd'
import {useDispatch, useSelector} from 'react-redux'
import {COMPONENT} from './Components/EditorBuilder/Config/constants'
import ContentEditableText from './Components/EditorBuilder/ComponentsEditor/ContentEditable'
import ImageUploadingApp from './Components/EditorBuilder/ComponentsEditor/ImageUploading'

import {
    selectTag,

} from './redux/mySlice'
import HyperLink from './Components/EditorBuilder/ComponentsEditor/HyperLink'


const style = {
    border: '1px dashed black',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    cursor: 'move',
}

const Component = ({data, components, path, layout}) => {
    const componentData = useSelector(selectTag)
    console.log(componentData, 'children')
    const ref = useRef(null)
    const [{isDragging}, drag] = useDrag({
        item: {type: COMPONENT, id: data.id, path},
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
    let selectedComponentData = componentData.map(item => {
        if (Object.values(item)[0].id === data.component.id) {
            return Object.values(item)[0];
        }
    })
    selectedComponentData = selectedComponentData[0];
    // const styles = {
    //   margin    : `${top}px  ${right}px ${bottom}px ${left}px`,
    //   padding   : `${P_top}px  ${P_right}px ${P_bottom}px ${P_left}px`,
    //   fontFamily: font,
    //   color     : color,
    // }
    console.log(selectedComponentData, 'SelectedComponentData')
    // Object.values(children)
    const component = components[data.id]

    switch (component.content) {
        case 'ImageUpload':
            return <ImageUploadingApp/>
        case 'Editor':
            return <ContentEditableText/>
        case 'Heading':
            let tagEntry = `<${selectedComponentData.tag}>Your Heading</${selectedComponentData.tag}>`
            return (
                <>
                     <div
                       id={selectedComponentData.id}
                       // style={styles}
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
            style={{...style, opacity}}
            className="component draggable"
        >
            <div>{/*{data.id}*/}</div>
            <div
                contentEditable={true}
                dangerouslySetInnerHTML={{__html: component.content}}
            />
        </div>
    )
}
export default Component
