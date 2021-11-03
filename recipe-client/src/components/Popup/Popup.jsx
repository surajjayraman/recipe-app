import React from "react";
import Link from "@mui/material/Link";
import "./popup.css";

function Popup(props) {
  console.log("props from popup>>>>>>", props);
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Link
          className="close-btn"
          underline="none"
          onClick={() => props.setTrigger(false)}
        >
          X
        </Link>

        {props.children}

        {/* {Object.keys(data[item].recipe.ingredients).map((itm, idx) => (
          <Typography variant="body2" color="text.secondary" key={`${idx}`}>
            {`${data[item].recipe.ingredients[itm].text}`}
          </Typography>
        ))} */}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
