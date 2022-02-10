import React, { useEffect }                      from 'react'
import { useDispatch, useSelector }              from 'react-redux'
import { selectZegaProducts, zegaProductsAsync } from '../../../redux/mySlice'

import BlockProducts from './BlockProducts'



export default function Main () {
  const dispatch = useDispatch()
  const stateZegaProducts = useSelector(selectZegaProducts)

  useEffect(() => {
    dispatch(zegaProductsAsync())
  }, [])

  return (
    <div className="site__body">
      <div>
        <div className="block-slideshow block-slideshow--layout--full">
          <div>
            <div>
              <div className="block-slideshow__body">
                <div className="slick-prevent-click">
                  <div className="slick-slider slick-initialized">
                    <div className="slick-list">
                      <div className="slick-track"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlockProducts stateZegaProducts={stateZegaProducts}/>
    </div>
  )
}
