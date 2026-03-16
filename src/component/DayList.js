import dummy from '../db/data.json';

export default function DayList() {
    console.log(dummy);
    return (
        <div>
            <ul className='list_day'>
                {dummy.days.map(day => (
                    <li>
                        Day {day.day}
                    </li>
                ))} 
            </ul>;
        </div>
    );
}