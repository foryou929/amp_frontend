const Profile = () => {
    return (
        <>
            <h1 className="text-2xl font-bold">マイページ</h1>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">ポイント</h2>
                <div className="bg-secondary rounded-lg p-6 flex justify-between items-center my-2">
                    <p className="text-xl text-blue">
                        20,000pt
                    </p>
                    <button className="btn-primary">
                        1234
                    </button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <ul className="max-w-md divide-y divide-gray-200 border-t border-b border-gray-200 my-2">
                    <li className="p-4 pr-8">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="w-full flex gap-2 items-center">
                                    <div className="px-1 py-2 bg-orange rounded-md font-bold text-white">
                                        1234
                                    </div>
                                    <p>
                                        1234
                                    </p>
                                </div>
                                <p className="text-blue text-lg font-bold">
                                    1234
                                </p>
                                <p className="font-bold">
                                    200pt/1~
                                </p>
                                <p text="text-gray-400">
                                    1234
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <img className="w-2 h-4 text-gray" src="{{ asset('img/line-angle-right-icon.svg') }}" />
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="p-4">
                    <button className="btn-primary w-full">
                        1234
                    </button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <ul className="max-w-md divide-y divide-gray-200 border-t border-b border-gray-200 my-2">
                    <li className="p-4 pr-8">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="w-full flex gap-2 items-center">
                                    <div className="px-1 py-2 bg-orange rounded-md font-bold text-white">
                                        1234
                                    </div>
                                    <p>
                                        1234
                                    </p>
                                </div>
                                <p className="text-blue text-lg font-bold">
                                    1234
                                </p>
                                <p className="font-bold">
                                    200pt/1~
                                </p>
                                <p text="text-gray-400">
                                    1234
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <img className="w-2 h-4 text-gray" src="{{ asset('img/line-angle-right-icon.svg') }}" />
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="p-4">
                    <button className="btn-primary w-full">
                        1234
                    </button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <ul className="max-w-md divide-y divide-gray-200 border-t border-b border-gray-200 my-2">
                    <li className="p-4 pr-8">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="w-full flex gap-2 items-center">
                                    <div className="px-1 py-2 bg-orange rounded-md font-bold text-white">
                                        1234
                                    </div>
                                    <p>
                                        1234
                                    </p>
                                </div>
                                <p className="text-blue text-lg font-bold">
                                    1234
                                </p>
                                <p className="font-bold">
                                    200pt/1~
                                </p>
                                <p text="text-gray-400">
                                    1234
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <img className="w-2 h-4 text-gray" src="{{ asset('img/line-angle-right-icon.svg') }}" />
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="p-4">
                    <button className="btn-primary w-full">
                        1234
                    </button>
                </div>
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <img className="w-8 h-8" src="123" />
            </div>
            <div className="w-full my-4">
                <h2 className="text-xl font-bold">進行中のプロジェクト</h2>
                <p>1234</p>
                <p>1234</p>
                <div className="w-full">
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">123123</h3>
                        <p>12341234</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">123123</h3>
                        <p>12341234</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">123123</h3>
                        <p>12341234</p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-lg font-bold my-2">123123</h3>
                        <a href="https://anesup.com">https://anesup.com</a>
                    </div>
                    <div className="p-4">
                        <button className="btn-primary w-full">
                            1234
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;