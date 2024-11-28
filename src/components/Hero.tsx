import React from "react";

function Hero() {
  return (
    <div className="relative h-screen  w-screen overflow-x-hidden">
      <div>
        <div>
          <h1>A Love To Adore</h1>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   h-50 w-50">
          <img src="/images/alovetoadore-3.jpg" />
        </div>
        <div className="absolute bottom-0 right-2">
          <h1>
            precious
            <br></br>and
            <br></br>ore
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
