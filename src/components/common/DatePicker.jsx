import Select from './Select';

const DatePicker = () => {
    return (
        <div className="flex gap-2">
            <Select className="flex-grow" />
            <Select className="flex-grow" />
            <Select className="flex-grow" />
        </div>
    )
}

export default DatePicker;