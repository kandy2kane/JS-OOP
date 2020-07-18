// stopWatch.js content

// define object
stopWatch = function(){
    this.duration;
    let startTime;
    let stopTime;
    
    this.start = function(){
        let currentDate = new Date();
        startTime = currentDate.getTime();
        console.log('Stop Watch started');
    };

    this.stop = function(){
        let currentDate = new Date();
        stopTime = currentDate.getTime();
        diff = stopTime - startTime;
        min = Math.floor(diff/60000);
        sec = ((diff % 60000) / 1000).toFixed(0);
        this.duration = min + ':' + ( sec < 10 ? '0' : '') + sec;
        console.log('Stop Watch stopped');
        console.log('duration: ' + this.duration);
    };

    this.reset = function(){
        this.duration = 0;
        console.log('Stop watch resetted');
    };
}

const sw = new stopWatch();

console.log(sw.start());
