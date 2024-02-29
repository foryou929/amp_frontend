import { useEffect, useState } from 'react';
import Select from './Select';

const DatePicker = ({ name, value, onChange }) => {

    const [year, setYear] = useState(2001);
    const [month, setMonth] = useState(1);
    const [day, setDay] = useState(1);

    useEffect(() => {
        if (typeof value == 'string') {
            const arr = value.split("-");
            if (arr.length == 3) {
                setYear(Number(arr[0]));
                setMonth(Number(arr[1]));
                setDay(Number(arr[2]));
            }
        }
    }, [value])

    return (
        <div className="flex gap-2">
            <Select className="flex-grow" value={year} options={Array.from({ length: 200 }, (_, index) => ({ value: 1900 + index, label: 1900 + index }))} onChange={(e) => {
                setYear(e.target.value)
                onChange({ name, value: `${e.target.value}-${month}-${day}` });
            }} />
            <Select className="flex-grow" value={month} options={Array.from({ length: 12 }, (_, index) => ({ value: 1 + index, label: 1 + index }))} onChange={(e) => {
                setMonth(e.target.value)
                onChange({ name, value: `${year}-${e.target.value}-${day}` });
            }} />
            <Select className="flex-grow" value={day} options={Array.from({ length: new Date(year, month, 0).getDate() }, (_, index) => ({ value: 1 + index, label: 1 + index }))} onChange={(e) => {
                setDay(e.target.value)
                onChange({ name, value: `${year}-${month}-${e.target.value}` });
            }} />
        </div>
    )
}

export default DatePicker;