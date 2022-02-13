import React, { useEffect, useState } from 'react'
import { useSelector }                from 'react-redux'
///import { selectHyperLink }            from '../../../redux/mySlice'



export default function HyperLink (props) {
  // const link = useSelector(selectHyperLink);
  const [hyper, setHyper] = useState([])
  const handleClick = (...args) => {
    // console.log("item", args);
  }
  // const arr = [
  //   { name: "item-1", id: 0, key: "nm" },
  //   { name: "item-2", id: 1, key: "nm1" },
  //   { name: "item-3", id: 2, key: "nm2" }
  // ];
  const myFoo = () => {
    [...props.layout].map((row) => {
      return [...row.children].map((column) => {
        return [column.children].map((col) => {
          return setHyper(col)
        })
      })
    })
  }
  useEffect(() => {
    myFoo()
  }, [myFoo])
  // console.log(hyper[hyper.length - 1], "hyperlal");
  return (
    <div>
      {hyper.map((item, index) => {
        return <li onClick={() => handleClick(item.id, item)}>{item.id}</li>
      })}
      {/* {(function (handleClick, props) {
        return [...props.layout].map((itemRow, indexRow) => {
          return [...itemRow.children].map((itemColumn) => {
            return [...itemColumn.children].map((item, index) => {
              switch (item.component.content) {
                case "HyperText":
                  return (
                    <>
                      <p
                        key={index}
                        // href={item.link}
                        onClick={() =>
                          handleClick(itemRow.id, itemColumn.id, item)
                        }
                      >
                        I T E M {item.id}, {index + 1}
                      </p>
                    </>
                  );

                default:
                  return null;
              }
            });
          });
        });
      })(handleClick, props)} */}
    </div>
  )
}
