class CountdownTimer {
    
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
             restDays: document.querySelector(`${selector} [data-value="days"]`),
             restHours: document.querySelector(`${selector} [data-value="hours"]`),
             restMins: document.querySelector(`${selector} [data-value="mins"]`),
             restSecs: document.querySelector(`${selector} [data-value="secs"]`),
        };      
        this.restTime();
    };
    restTime() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            this.updateTime(deltaTime);
        }, 1000);
    };
    
    updateTime(time) {
        this.refs.restDays.innerHTML = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.refs.restHours.innerHTML = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.refs.restMins.innerHTML = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.refs.restSecs.innerHTML = pad(Math.floor((time % (1000 * 60)) / 1000));
    };   
};

function pad(value) {
  return String(value).padStart(2, '0');
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});