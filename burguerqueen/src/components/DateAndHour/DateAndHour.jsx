import React from 'react'

function DateAndHour() {
    const todaysDate = Date.now();
    const today = new Date(todaysDate);
    /* console.log(today); */
    return (
        <div>today.toDateString();</div>
    )
}

export default DateAndHour