import { useState, useEffect } from 'react';


type StateProps = {
    name: string,
    framePaths: Array<string>,
}

function State({ name, framePaths }: StateProps) {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [currFrame, setCurrFrame] = useState<number>(0);

    // pre-loads all the images
    useEffect(() => {
        for(let i = 0; i < framePaths.length; i++) {
            const img = new Image();
            img.src = framePaths[i];
        }
    }, [framePaths])

    // cycles the images when hovering over a state
    useEffect(() => {
        if (!isHovering) return;
        const timer = setInterval(() => {
            setCurrFrame(prev => (prev + 1) % framePaths.length);
        }, 100);
        return () => clearInterval(timer);
    }, [isHovering, framePaths.length]);

    return (
        <img
            src={framePaths[currFrame]}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            alt={`rough outline of ${name}`}
        />
    );
}

export default State;