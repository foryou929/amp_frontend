import Header from "./Header";
import ModeSwitch from "../components/ModeSwitch"

const Home = () => {
    return (
        <>
            <Header>
                <ModeSwitch
                    label1={
                        <div>
                            <p className="text-sm font-bold text-center">USER</p>
                            <p className="text-xs text-center">MODE</p>
                        </div>
                    }
                    label2={
                        <div>
                            <p className="text-sm font-bold text-center">PR ORDER</p>
                            <p className="text-xs text-center">MODE</p>
                        </div>
                    }
                />
            </Header>
            <div className="container">
                <div className="w-full flex bg-gray-200 p-2">
                    <div className="bg-white w-2/3 p-2 flex">
                        <div className="w-4/12">
                            <p>獲得済み</p>
                            <p>2,500 pt</p>
                        </div>
                        <div className="w-3/12">
                            <a>出⾦依頼</a>
                        </div>
                        <div className="w-5/12">
                            <p>
                                <span>進⾏中</span>
                                <span><a>進⾏中⼀覧へ </a></span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-200 w-1/3 p-2">
                        <div className="w-full flex">
                            <div className="w-3/4">進捗報告等</div>
                            <div className="w-1/4"><a>2件</a></div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-3/4">未読メッセージ</div>
                            <div className="w-1/4"><a>2件</a></div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex p-2">
                    <div className="w-2/5">
                        <span></span>
                        <span className="text-xs font-bold">
                            多くのPRスペースを 追加して報酬を得よう
                        </span>
                    </div>
                    <div className="w-2/5">
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>募集PRスペース・仕事の種類</option>
                            <option value="1">⾞</option>
                            <option value="2">家</option>
                            <option value="3">看板</option>
                            <option value="4">商品使⽤・レビュー等</option>
                        </select>
                    </div>
                    <div className="w-1/5 flex justify-center items-center">
                        <button className="rounded-xl border border-[#333333] px-2 py-1 text-sm">
                            作成
                        </button>
                    </div>
                </div>
                <div className="w-full flex gap-2">
                    <div className="w-1/5 flex flex-col gap-1">
                        <select className="w-full py-0 border border-[#E3E3E8] rounded-md">
                            <option selected>国</option>
                        </select>
                        <select className="w-full py-0 border border-[#E3E3E8] rounded-md">
                            <option selected>都道府県</option>
                        </select>
                    </div>
                    <div className="w-4/5">
                        <input type="checkbox" id="search-mode-toggle" className="toggle-checkbox" />
                        <label htmlFor="search-mode-toggle" className="toggle-label flex-none">
                            <span className="toggle-search-category text-sm text-center">
                                種類・カテゴリで探す
                            </span>
                            <span className="toggle-search-pr text-sm text-center">
                                PR場所で探す
                            </span>
                        </label>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll">
                    <div className="w-full flex justify-between items-end">
                        <p className="ml-4 font-bold text-lg">おすすめプロジェクト</p>
                        <a className="text-sm">すべて⾒る</a>
                    </div>
                    <div className="flex">
                        <div className="p-2">
                            <div className="w-40 h-32">
                                <img src="w-full" />
                            </div>
                            <p>募集期間〜●●⽉●●⽇</p>
                            <div className="w-full flex justify-between items-end">
                                <p className="text-md font-bold">150 pt</p>
                                <p className="text-sm">残り●●件</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll">
                    <div className="w-full flex justify-between items-end">
                        <p className="ml-4 font-bold text-lg">ステッカー・シール</p>
                        <a className="text-sm">すべて⾒る</a>
                    </div>
                    <div className="flex">
                        <div className="p-2">
                            <div className="w-40 h-32">
                                <img src="w-full" />
                            </div>
                            <p>募集期間〜●●⽉●●⽇</p>
                            <div className="w-full flex justify-between items-end">
                                <p className="text-md font-bold">150 pt</p>
                                <p className="text-sm">残り●●件</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-x-scroll pb-8">
                    <div className="w-full flex justify-between items-end">
                        <p className="ml-4 font-bold text-lg">ステッカー・シール </p>
                        <a className="text-sm">すべて⾒る</a>
                    </div>
                    <div className="flex">
                        <div className="p-2">
                            <div className="w-40 h-32">
                                <img src="w-full" />
                            </div>
                            <p>募集期間〜●●⽉●●⽇</p>
                            <div className="w-full flex justify-between items-end">
                                <p className="text-md font-bold">150 pt</p>
                                <p className="text-sm">残り●●件</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;