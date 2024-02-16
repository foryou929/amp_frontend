const Registration = () => {
    return (
        <>
            <h1 className="text-2xl font-bold">プロジェクトを作成</h1>
            <form>
                <section className="my-4">
                    <h6>タイトル</h6>
                    <textarea type="text" className="w-full border border-ltgray"></textarea>
                </section>
                <section className="my-4">
                    <h6>金額</h6>
                    <input type="text" className="border border-ltgray" /> pt
                </section>
                <section className="my-4">
                    <h6>募集コンテンツ</h6>
                    <select className="w-full border border-ltgray">
                        <option default>ステッカー</option>
                    </select>
                </section>
                <section className="my-4">
                    <h6>スペース種別</h6>
                    <select className="w-full border border-ltgray">
                        <option default>車の窓</option>
                    </select>
                </section>
                <section className="my-4">
                    <h6>募集期間</h6>
                    <select className="w-full border border-ltgray">
                        <option default>1週間</option>
                    </select>
                </section>
                <section className="my-4">
                    <h6>エリア</h6>
                    <select className="w-full border border-ltgray">
                        <option default>東京都（23区内）</option>
                    </select>
                </section>
                <section className="my-4">
                    <h6>年代指定</h6>
                    <input type="radio" className="border border-ltgray" /> なし<br />
                    <input type="radio" className="border border-ltgray" /> あり<br />
                </section>
                <section className="my-4">
                    <h6>募集数</h6>
                    <input type="text" className="border border-ltgray" />人
                </section>
                <section className="my-4">
                    <h6>プロジェクト期間</h6>
                    <select className="w-full border border-ltgray">
                        <option default>3週間</option>
                    </select>
                </section>
                <section className="my-4">
                    <h6>コンテンツのサイズ等</h6>
                    <input type="text" className="w-full border border-ltgray" />
                </section>
                <section className="my-4">
                    <h6>説明文</h6>
                    <textarea className="w-full border border-ltgray">
                    </textarea>
                </section>
                <section className="my-4">
                    <h6>コンテンツ見本画像</h6>
                    <div className="flex">
                        <div className="flex-none w-[96px] h-[96px] relative justify-center">
                            <img src="{{ asset('img/no-image.png') }}" className="absolute left-[33px] top-[33px]" />
                            <span className="absolute bottom-2">画像を追加</span>
                        </div>
                    </div>
                </section>
                <section className="my-4">
                    <button className="w-full btn-primary">
                        プロジェクトを作成
                    </button>
                </section>
            </form>
        </>
    );
}

export default Registration;