import {useEffect, useRef} from 'react';
// import '@components/mouseTrailer/mouseTrailer.module.css';

export default function MouseTrailer() {
    const blobRef = useRef();
    let style = {
        // background: "linearGradient(purple, aquamarine)",
        // background: "blue",
        opacity: ".91",
        height: "250px",
        width: "300px",
        position: "fixed",
        left: "500px",
        top: "500px",
        zIndex: "999999999999999999",
        borderRadius: "50%",
        animation: "rotation 20s infinite linear",
        filter: "blur(125px)",
        translate: '-50% -50%',
        pointerEvents: "none",
    }  



    // if the mouse moves, find the position and update the position ref
    useEffect(() => {

        document.addEventListener("mousemove", (event) => {
          const { clientX, clientY } = event;
    
          const mouseX = clientX;
          const mouseY = clientY;

          const blob = document.getElementById('blob');
        //   document.getElementById('blob').style.left = `${clientX}px`
        //   document.getElementById('blob').style.top = `${clientY}px`

        blob.style.left = `${clientX}px`
        blob.style.top = `${clientY}px`

          console.log('mouseX: ' + mouseX + ' mouseY: ' + mouseY);
          console.log('blobX: ' + blob.style.left + ' mouseY: ' + blob.style.top);


        // myStyle['left'] = mouseX==null ? "500px" : `${mouseX}px` 
        // myStyle['top'] = mouseX==null ? "500px" : `${mouseY}px` 
        });

        return () => {};
      }, []);

    

    return(
        // <div id='blob' style={{myStyle}} ref={blobRef}></div>
        <div id='blob' style={style} ref={blobRef} className="bg-gradient-to-r from-green-400 to-purple-500"></div>
    );

}