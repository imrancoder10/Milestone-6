const seconds = '94265';

const timeSetup = (seconds) => {
    //get hour and rest seconds
    if (seconds >= 2592000) {
        const months = parseInt(seconds / 2592000);
        const remainingSecond = seconds % 2592000;
        const days = parseInt(remainingSecond / 86400);
        const lastRemainingSecond = remainingSecond % 86400;
        const hour = parseInt(lastRemainingSecond / 3600);
        const atLastRemainingSecond = lastRemainingSecond % 3600;
        const minute = parseInt(atLastRemainingSecond / 60);
        const lastSecond = atLastRemainingSecond % 60;

        return `${months} months ${days} days ${hour} hrs ${minute} mins ${lastSecond} secs ago`;
    } 
    
    else if (seconds >= 86400) {
        const day = parseInt(seconds / 86400);
        // const hour = parseInt(seconds / 3600);
        let remainingSecond = seconds % 86400;
        let hour = parseInt(remainingSecond / 3600);
        let remainingSecond2 = remainingSecond % 3600;
        let minute = parseInt(remainingSecond2 / 60);
        let lastSecond = remainingSecond2 % 60;
        return `${day} days ${hour} hrs ${minute} mins ${lastSecond} secs ago`;

    } else {
        const hour = parseInt(seconds / 3600);
        let remainingSecond = seconds % 3600;
        let minute = parseInt(remainingSecond / 60);
        let lastSecond = remainingSecond % 60;
        return `${hour} hrs ${minute} mins ${lastSecond} secs ago`;
    }

}

const fullTime = timeSetup(2682665);

console.log(fullTime);