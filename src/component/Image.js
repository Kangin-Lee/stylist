import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faHeart,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

const Image = ({ src, trend }) => {
  return (
    <div className="img-area">
      <div className="img-header">
        <div>
          <div className="circle-logo">
            <FontAwesomeIcon icon={faShirt} />
          </div>
          <div className="stylist">Stylist</div>
        </div>
        <div>
          <FontAwesomeIcon icon={faEllipsisVertical} className="three-dot" />
        </div>
      </div>

      <div className="img-img">
        <img width={340} src={src} />
      </div>

      <div className="img-btns">
        <div>
          <FontAwesomeIcon icon={faHeart} className="img-icon" />
          <FontAwesomeIcon icon={faComment} className="img-icon" />
          <FontAwesomeIcon icon={faPaperPlane} className="img-icon" />
        </div>
        <div>
          <FontAwesomeIcon icon={faBookmark} className="img-icon" />
        </div>
      </div>

      <div className="img-hashtag">
        {trend?.map((tag) => (
          <div>#{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default Image;
