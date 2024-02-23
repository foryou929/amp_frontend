const Summary = ({ project }) => {
    return (
        <div className="mt-8 rounded-xl p-4 bg-[#F8F9FA]">
            <h2 className="text-xl font-bold">プロジェクト概要</h2>
            <div className="flex items-center">
                <div className="w-[96px] h-[96px]">

                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <p className="font-bold">{project.points}pt / 1日~</p>
                </div>
            </div>
            <h3 className="text-xl font-bold mt-4">説明</h3>
            <p>{project.description}</p>
            <h2 className="text-xl font-bold mt-4">プロジェクト詳細</h2>
            <ul className="mt-2">
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">募集コンテンツ</p>
                    <p className="w-1/2">{project.recruitment_content}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">スペース種別</p>
                    <p className="w-1/2">{project.space_type}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">エリア</p>
                    <p className="w-1/2">{project.area}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">価格</p>
                    <p className="w-1/2">{project.points}pt</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">年代指定</p>
                    <p className="w-1/2">{project.year_designation}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">募集数</p>
                    <p className="w-1/2">{project.recruitment_number}人</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">提案数</p>
                    <p className="w-1/2"></p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">コンテンツサイズ</p>
                    <p className="w-1/2">{project.content_size}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">募集期間</p>
                    <p className="w-1/2">{project.recruitment_period}</p>
                </li>
                <li className="border-b border-[#DEE2E6] px-2 py-3 flex">
                    <p className="w-1/2">プロジェクト期間</p>
                    <p className="w-1/2">{project.project_period}</p>
                </li>
            </ul>
        </div>
    )
}

export default Summary;