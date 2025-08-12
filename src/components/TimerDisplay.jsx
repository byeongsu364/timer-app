import React from 'react'

const TimerDisplay = ({ time, status }) => {
    return (
        <div>
            <div className="timer-display">
                <h2>{time}</h2>
                <p className={`timer-status 
                    ${status === '실행중' ? 'running' : 
                    status === '일시정지' ? 'pause' : 
                    'reset'}`}
                >
                    {status}
                </p>
            </div>
        </div>
    )
}

export default TimerDisplay