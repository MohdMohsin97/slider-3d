import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(10);
  return (
    <div className="container m-auto">
      <div className="banner w-full h-screen text-center overflow-hidden relative ]">
        <div
          className="slider absolute w-[200px] h-[250px] top-[10%] left-[calc(50%-100px)] animate-autorun z-[2]"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1000px)",
          }}
        >
          {[...Array(10).keys()].map((i) => {
            const angle = i * (360 / quantity);
            return (
              <div
                key={i + 1}
                className="item absolute inset-0"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(550px)`
                }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={`src/assets/images/dragon_${i + 1}.jpg`}
                  alt="dragon1"
                />
              </div>
            );
          })}
        </div>
        <div className="content absolute bottom-0 flex justify-between items-center w-full h-max pb-24 z-[1]">
          <h1 className="text-[16rem] text-[#25283B] font-ica-rubik  relative after:content-['CSS\0020ONLY'] after:absolute after:inset-0 after:z-[2] text-stroke after:text-transparent ">
            CSS ONLY
          </h1>
          <div className="author text-right absolute right-0 w-[250px] p-8">
            <h2 className="text-[3rem] font-bold">MOHD MOHSIN</h2>
            <p>Web Developer</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="model bg-[url(./src/assets/images/model.png)] w-full h-[100vh] absolute  bg-no-repeat   bg-top-center bg-130"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
