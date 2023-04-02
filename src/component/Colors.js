import React, { useState } from "react";

const Colors = ({ userSelect }) => {
  let combinationColor = userSelect && userSelect.combination;
  let combinationImg = userSelect && userSelect.img;
  const recommendStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "15px",
  };
  return (
    <div>
      <div className="userSelect-color">
        <div id="color" className={userSelect && userSelect.name}>
          {userSelect && userSelect.name}
        </div>
        <div className="userSelect-color-text">
          <div className="userSelect-color-detailText">
            <div>{userSelect && userSelect.text}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="recommend-color">
          {userSelect &&
            combinationColor.map((color) => (
              <div className="recommend-img">
                <div className={color}></div>
                <div style={recommendStyle}>{color}</div>
                <img
                  className="recommend-imgs"
                  width={200}
                  src={
                    combinationImg[
                      (userSelect && combinationColor).indexOf(color)
                    ]
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
