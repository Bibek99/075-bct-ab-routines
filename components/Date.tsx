import React from 'react'
import classname from 'classname'
import moment from 'moment'

interface IDate {
    day: number
    type: "primary" | "secondary"
}

const Date: React.FC<IDate> = ({
    day,
    type
}) => {
    const today = moment().format()
    console.log(today)
  return (
    <div>
        <span className={classname("text-9xl", type === "primary" ? "text-teal-500" : "")}>{day}</span>
    </div>
  )
}

export default Date