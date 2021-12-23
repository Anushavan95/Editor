import React from "react";
import BlockProducts from "./BlockProducts";

export default function Main() {
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
                      <div className="slick-track"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <TextBoard /> */}
      <BlockProducts />
    </div>
  );
}
