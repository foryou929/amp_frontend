import { useEffect, useState } from 'react';
import Select from './Select';

const DatePicker = ({ name, defaultDate, onChange }) => {

    const [year, setYear] = useState(defaultDate?.getFullYear() || 2001);
    const [month, setMonth] = useState(defaultDate?.getMonth() || 1);
    const [day, setDay] = useState(defaultDate?.getDate() || 1);
    useEffect(() => {
        if (onChange)
            onChange({ name, value: new Date(year, month - 1, day) });
    }, [year, month, day])
    return (
        <div className="flex gap-2">
            <Select className="flex-grow" value={year} options={Array.from({ length: 200 }, (_, index) => ({ value: 1900 + index, label: 1900 + index }))} onChange={(e) => setYear(e.target.value)} />
            <Select className="flex-grow" value={month} options={Array.from({ length: 12 }, (_, index) => ({ value: 1 + index, label: 1 + index }))} onChange={(e) => setMonth(e.target.value)} />
            <Select className="flex-grow" value={day} options={Array.from({ length: new Date(year, month, 0).getDate() }, (_, index) => ({ value: 1 + index, label: 1 + index }))} onChange={(e) => setDay(e.target.value)} />
        </div>
    )
}

export default DatePicker;