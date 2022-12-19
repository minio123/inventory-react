import { useState, useEffect } from "react"
export default function ScreenSize() {
    const [windowDimenion, detectHW] = useState({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })

    const detectSize = () => {
      detectHW({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        if(windowDimenion.winWidth > 1199){
            document.getElementById('sidebar').style.left = '0%'
            document.getElementById('overlay').style.display = 'none'
        }else{
            document.getElementById('sidebar').style.left = '-100%'
        }
        console.log(windowDimenion.winWidth)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])

    const toggleMenu = () => {
        document.getElementById('sidebar').style.left = '-100%'
        document.getElementById('overlay').style.display = 'none'
    }

    return (
      <>
        <div className='overlay' id='overlay' onClick={toggleMenu}></div>
      </>
    )


  }


