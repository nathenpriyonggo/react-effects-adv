import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log('Setting timouet');
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [onTimeout, timeout]); 
    

    useEffect(() => {
        console.log('Setting interval');
        const interval = setInterval(() => {
            setRemainingTime(prev => prev - 10)
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);
    

    return (
        <progress id="question-time" value={remainingTime} max={timeout}/>
    )
}