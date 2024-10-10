import { useState,useEffect } from "react";
function useWindowsize(){
    const [windowsize,setWindowsize]=useState({
        width:undefined,
        height:undefined
    });

    useEffect(()=>{
        const handleresize=()=>{
            setWindowsize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }

        handleresize();

        window.addEventListener('resize',handleresize);

        return ()=>window.removeEventListener('resize',handleresize);
    },[])

return windowsize.width;
}

export default useWindowsize;