import React from 'react'

export default function StudentStatus(props) {
    const status = props.score >= 7 ? 'Pass' : 'Fail'

    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                <strong>{props.name}</strong> got
                <strong> {props.score} </strong> and
                <strong> {status} </strong></p>
        </div>)
}