import React from "react";

function CrouselComp(props) {
  return (
    <>
      <div>
        <h3
          style={{
            height: "300px",
            background: `url(${props.item.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></h3>
      </div>
    </>
  );
}

export default CrouselComp;
