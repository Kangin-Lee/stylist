import React from "react";

const Colors = ({ userSelect }) => {
  console.log(userSelect);
  return (
    <div>
      <div className="userSelect-color">
        <div className={userSelect && userSelect.name}></div>
        <div className="userSelect-color-text">
          <h6>{userSelect && userSelect.name}</h6>
          <div className="userSelect-color-detailText">
            {userSelect && userSelect.text}
          </div>
        </div>
      </div>

      <div className="recommend-color">
        <div className={userSelect && userSelect.combination1}></div>
        <h6>{userSelect && userSelect.combination1}</h6>
        <div>
          <img width={300} src={userSelect && userSelect.combination1_img[0]} />
        </div>
      </div>
      <div>흰색</div>
    </div>
  );
};

export default Colors;
