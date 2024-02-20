import Avatar from "./Avatar";

const ProjectItem = (props) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex-grow flex gap-4 items-start">
                <div className="flex-grow-0 w-12">
                    <Avatar src={props.img} />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                    <div className="w-full flex gap-2 items-center">
                        {props.status ? <div className="px-1 py-2 bg-[#F08E1B] rounded-md font-bold text-white">{props.status}</div> : <></>}
                        {props.date ? <p>{props.date}</p> : <></>}
                    </div>
                    <p className="text-[#00146E] text-lg font-bold mt-1">{props.title}</p>
                    {props.subtitle ? <p className="mt-1">{props.subtitle}</p> : <></>}
                    <p className="font-bold text-sm mt-1">{props.point}</p>
                    <p className="text-gray-400 text-sm mt-1">{props.type}</p>
                </div>
            </div>
            <div className="flex-grow-0">
                <img className="w-2 h-4 text-gray" src="/img/line-angle-right-icon.svg" />
            </div>
        </div>
    )
}

export default ProjectItem;