import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {

    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;
    
        const globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: 400 * 2,
          height: 400 * 2,
          phi: 0,
          theta: 0.3,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 47000,
          mapBrightness: 12,
          mapBaseBrightness: 0.17,
          baseColor: [0.9, 0.9, 0.9],
          opacity: 1,
          markerColor: [0.4, 0.1, 1],
          glowColor: [1, 1, 1],
          markers: [
            // longitude latitude
            { location: [40.4406, -79.9959], size: 0.1 },
          ],
          onRender: (state) => {
            // Called on every animation frame.
            // `state` will be an empty object, return updated params.
            state.phi = phi;
            phi += 0.002;
          }
        });
    
        return () => {
          globe.destroy();
        };
      }, []);

    return(
        <canvas
        ref={canvasRef}
        style={{zIndex: -100, top: "92%", left: "50%", margin: "50px 0px", translate: "-50% -50%", position: "absolute", width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
         />    
      );
}