import { useState } from "react"
import { DateRange } from "react-date-range"

const Calendar = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ])

    return (
        <div className="container">
            <DateRange className="calendarStyle" onChange={(item) => setState([item.selection])} ranges={state} showSelectionPreview={false} editableDateInputs={false} showMonthAndYearPickers={false} showDateDisplay={false} rangeColors={['#ad1a55', '#ad1a55', '#000000']} direction="horizontal"/>
        </div>
    )
}

export default Calendar