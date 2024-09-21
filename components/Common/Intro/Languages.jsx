import { Progress } from "antd"
import { useEffect, useState } from "react"
import { preconnect } from "react-dom"

const Languages = () => {
    const [french, setFrench] = useState(0)
    const [english, setEnglish] = useState(0)
    const [swahili, setSwahili] = useState(0)
    const [chinese, setChinese] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (french < 88) {
                setFrench(prevCount => prevCount + 1);
            }
            if (english < 92) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (swahili < 82) {
                setSwahili(prevCount => prevCount + 1);
            }
            if (chinese < 51) {
                setChinese(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [french, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row flex-wrap items-center justify-evenly ">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={french} size={75} />
                        <span className='text-xs font-bold text-Snow'>French</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor={'#1fdf64'} type="circle" percent={swahili} size={75} />
                        <span className="text-xs font-bold text-Snow">Swahili</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gep-y-2">
                        <Progress strokeColor={'#1fdf64'} type="circle" percent={chinese} size={75}/>
                        <span className="text-xs font-bold text-Snow"> Chinese</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages