import React, {useRef} from 'react'
import {useDrag} from 'react-dnd'
import {useDispatch, useSelector} from 'react-redux'
import {COMPONENT} from './Components/EditorBuilder/Config/constants'
import ContentEditableText from './Components/EditorBuilder/ComponentsEditor/ContentEditable'
import ImageUploadingApp from './Components/EditorBuilder/ComponentsEditor/ImageUploading'

import {
    selectTag, setSelectedContent,

} from './redux/mySlice'
import HyperLink from './Components/EditorBuilder/ComponentsEditor/HyperLink'


const style = {
    border: '1px dashed black',
    padding: '0.5rem 1rem',
    backgroundColor: 'white',
    cursor: 'move',
}

const Component = ({data, componentData, components, path, layout}) => {
    const dispatch = useDispatch();


    const ref = useRef(null)
    const [{isDragging}, drag] = useDrag({
        item: {type: COMPONENT, id: data.id, path},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const handleClick = (id) => {
        console.log(id)
    //  console.log(e.target.id,'idididid')
        dispatch(setSelectedContent(id));
        // console.log(e.target)
    }
    const opacity = isDragging ? 0 : 1
    drag(ref)
    // const styles = {
    //   margin    : `${top}px  ${right}px ${bottom}px ${left}px`,
    //   padding   : `${P_top}px  ${P_right}px ${P_bottom}px ${P_left}px`,
    //   fontFamily: font,
    //   color     : color,
    // }

    // Object.values(children)
    const component = components[data.id]
    /// console.log(selectedComponentData,'selectedComponentData')
    if (componentData) {
        switch (componentData.content) {

            case 'ImageUpload':
                return <ImageUploadingApp/>
            case 'Editor':
                return <ContentEditableText/>
            case 'Heading':
                let tagEntry = `<${componentData.tag}>Your Heading</${componentData.tag}>`
                return (
                    <>
                        <div
                            id={componentData.id}
                            // style={styles}
                            onClick={(event) => handleClick(componentData.id)}
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

    }else{
        return <></>
    }

    // return (
    //     <div
    //         ref={ref}
    //         style={{...style, opacity}}
    //         className="component draggable"
    //     >
    //         <div>{/*{data.id}*/}</div>
    //         <div
    //             contentEditable={true}
    //             dangerouslySetInnerHTML={{__html: component.content}}
    //         />
    //     </div>
    // )
}
export default Component
