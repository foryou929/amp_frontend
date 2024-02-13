import Input from "../../../components/common/Input";
import Checkbox from "../../../components/common/Checkbox";
import DatePicker from "../../../components/common/DatePicker";
import Select from "../../../components/common/Select";
import Button from "../../../components/common/Button";
import Textarea from "../../../components/common/Textarea";

const Registration = () => {
    return (
        <div className="container">
            <h1 className="text-2xl font-bold">ユーザープロフィール</h1>
            <form>
                <section className="py-2">
                    <label className="py-0.5">ユーザー名</label>
                    <Input />
                </section>
                <section className="py-2">
                    <label className="py-0.5">種別</label>
                    <Select />
                </section>
                <section className="py-2">
                    <label className="py-0.5">エリア</label>
                    <Select />
                </section>
                <section className="py-2">
                    <label className="py-0.5">新有するスペース</label>
                    <Checkbox className="py-1" label={"車の窓"} />
                    <Checkbox className="py-1" label={"車の車体"} />
                    <Checkbox className="py-1" label={"自転車"} />
                    <Checkbox className="py-1" label={"バイク"} />
                    <Checkbox className="py-1" label={"徒歩バックパック等"} />
                    <Checkbox className="py-1" label={"一軒家"} />
                    <Checkbox className="py-1" label={"集合住宅"} />
                    <Checkbox className="py-1" label={"ノベルティーグッズの使用"} />
                    <Checkbox className="py-1" label={"工事現場"} />
                    <Checkbox className="py-1" label={"看板"} />
                    <Checkbox className="py-1" label={"WEB SNS"} />
                    <Checkbox className="py-1" label={"他"} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">生年月日</label>
                    <DatePicker />
                </section>
                <section className="py-2">
                    <label className="py-0.5">性別</label>
                    <Select />
                </section>
                <section className="py-2">
                    <label className="py-0.5">職業</label>
                    <Select />
                </section>
                <section className="py-2">
                    <label className="py-0.5">居住形態等</label>
                    <Select />
                </section>
                <section className="py-2">
                    <label className="py-0.5">主な移動手段</label>
                    <Checkbox className="py-1" label={"徒歩"} />
                    <Checkbox className="py-1" label={"車"} />
                    <Checkbox className="py-1" label={"バイク"} />
                    <Checkbox className="py-1" label={"その他"} />
                </section>
                <section className="py-2">
                    <label className="py-0.5">活動範囲と頻度</label>
                    <Textarea />
                </section>
                <section className="py-2">
                    <label className="py-0.5">フォロワー数の目安</label>
                    <Input />
                </section>
                <section className="py-2">
                    <label className="py-0.5">使用頻度</label>
                    <Select />
                </section>
                <section className="py-2">
                    <label className="py-0.5">自己紹介文</label>
                    <Textarea />
                </section>
                <section className="py-2">
                    <Button label={"保存"} className="w-full" />
                </section>
            </form>
        </div>
    )
}

export default Registration;