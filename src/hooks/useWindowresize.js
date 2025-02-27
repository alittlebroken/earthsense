import { useLayoutEffect, useEffect, useState } from "react";

const useWindowResize = ({ width }) => {

    const [targetMatch, setTargetMatch] = useState(false);

    useLayoutEffect(() => {

        const updateSize = () => {
            console.log(window.innerWidth);
            if(window.innerWidth <= width){
                setTargetmatch(true);
            } else {
                setTargetMatch(false);
            }
        };

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);

    }, [width])

    return targetMatch;

};


export default useWindowResize;