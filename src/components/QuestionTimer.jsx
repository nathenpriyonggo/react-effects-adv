import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]); 
    

    useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval( () => {
            setRemainingTime(prev => prev - 10)
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, []);
    

    return (
        <progress 
            id="question-time" 
            value={remainingTime} 
            max={timeout}
            className={mode}
        />
    )
}