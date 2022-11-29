import React from "react";

const Menucard = ({ mData }) => {
  console.log(mData);
  return (
    <>
      {mData.map((currentElement) => {
        return (
          <>
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">1</span>
                  <span className="card-author subtle">Breakfast</span>
                  <h2 className="card-title">Maggi</h2>
                  <span className="card-description subtle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    neque magnam rerum corporis error natus molestias repellat
                    vero. Sunt laudantium doloribus, accusantium assumenda
                    ratione ipsum dolore debitis aliquid officia magni?
                  </span>
                  <div className="card-read">Read</div>
                </div>
                {/* <img src={images} alt="images" className='card-media'/> */}
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Menucard;
