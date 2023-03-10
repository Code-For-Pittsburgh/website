import React from 'react';
// import './mouseTrailer.module.css';

export default function MouseTrailer() {
    const [mousePosition, setMousePosition] = React.useState({
        x: null, 
        y: null
    });


    React.useEffect(() => {

        const blob = document.getElementById('blob');
        window.onpointermove = event => { 
            const { clientX, clientY } = event;
            blob.style.left = `${clientX}px`;
            blob.style.top = `${clientY}px`;
        }
        const rotate = setInterval(() => { blob.style.transform = 'rotate(90deg)';}, 100);

        function handle(e){
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            })
        }

        console.log(mousePosition);

        document.addEventListener('mousemove', handle);
        return() => document.removeEventListener('mousemove', handle);
    });

    

    return(
        <div id='blob' 
        style=
        {{background: "linear-gradient(purple, aquamarine)", opacity: 0.8, height:400, width: 550, position: absolute, left: 50, top: 50, translate: -50 -50, borderRadius: 50,zIndex: 100,filter: blur(150)}}>
        </div>
    );
}