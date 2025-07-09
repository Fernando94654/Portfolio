import Image from "next/image"

export interface IconElementProps{
    icon: string
    name: string
}

const IconElement: React.FC<IconElementProps> = ({icon, name}) => {
    return(
        <div className="flex flex-col items-center justify-center pt-4 bg-black rounded-2xl h-56 min-h-56 w-64 min-w-64 m-5">
            <Image src={icon}  alt="Image" width={80} height={80} className="w-auto h-2/3 pt-1 "/>
            <h3 className="text-white text-2xl p-5">{name}</h3>
        </div>
    )
}
export default IconElement