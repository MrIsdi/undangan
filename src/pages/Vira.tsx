import { useState } from "react"
import bg from "../assets/bg.png"
import { useParams } from "react-router-dom"
import AboutVira from "./AboutVira"

export default function Vira(){
    const { name } = useParams()
    const [ up, setUp ] = useState("")
    const [ show, setShow ] = useState("hidden")

    const handleBtn = () =>{
        setUp("top-[-150%]")
        setShow("block")
    }
    return(
        <>
            <div className={`bg-cover bg-no-repeat bg-[rgba(0,0,0,1)] fixed w-full duration-500 top-0 ease-in-out transition-all ${up}`} style={{
                backgroundImage: `url("${bg}")`
            }}>
                <div className={`bg-gradient-to-b from-[#00000087] to-teal-800 h-screen`}>
                    <div className="flex flex-col items-center">
                        <h1 className="text-white md:text-4xl text-xl md:my-8 my-0 mt-16">You are invited to</h1>
                        <h1 className="font-['My_Soul'] md:text-7xl text-5xl text-white mb-8">Graduation Party</h1>
                        <h2 className="font-['My_Soul'] md:text-7xl text-5xl text-white mb-12">Of</h2>
                        <h3 className="text-white md:text-5xl text-3xl">Delvira Syafna, S. Si</h3>
                    </div>
                    <div className="text-white flex flex-col justify-center items-center my-12">
                        <p className="md:text-2xl text-base text-center">Dear you,</p>
                        <p className="mt-4 md:mb-8 mb-16 md:text-2xl text-base flex justify-center items-center md:w-[488px] md:px-0 px-12 h-[55px] rounded-[20px] bg-[rgba(10,1,1,0.20)] backdrop-blur-[5px] border-[2px] border-white">{name}</p>
                        <button onClick={handleBtn} className="w-[261px] h-[59px] bg-cover bg-no-repeat bg-[url(https://cdn.animaapp.com/projects/6560c42e4e4ddfb844c5cfc1/releases/6560c497b9e96f16e727a1ec/img/calendar.svg)]">Open Invitation</button>
                    </div>
                </div>
            </div>
            <AboutVira cls={show} />
        </>
    )
}