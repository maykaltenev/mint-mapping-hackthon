import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import './ScrollToTopBtn.css';

export default function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false);
    function toggleVisibility(){
        if(window.pageYOffset > 120) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(()=> {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="Scroll">
            <Fab color="primary" onClick={scrollToTop} className={isVisible ? "show" : "hide"}>
                <NavigationIcon />
            </Fab>
        </div>
    )
}