// stopWatch.js content

// define object
stopWatch = function(){
    let duration;
    let startTime;
    let stopTime;
    let running = false;
    let currentDate;
    
    this.start = function(){
        if (running==false) {
            currentDate = new Date();
            startTime = currentDate.getTime();
            console.log('Stop Watch started');
            running = true;
        } 
        else {
            console.log('Stop watch already running');
        }
    };


    this.stop = function(){
        if (running==true) {
            currentDate = new Date();
            stopTime = currentDate.getTime();
            diff = stopTime - startTime;
            // min = Math.floor(diff/60000);
            // sec = ((diff % 60000) / 1000).toFixed(0);
            // duration = min + ':' + ( sec < 10 ? '0' : '') + sec;
            duration = diff / 1000;
            console.log('Stop Watch stopped');
            console.log('duration: ' + duration);
            running=false;
        } else {
            console.log('Stop watching is not running');
        }
    };

    this.reset = function(){
        duration = 0;
        console.log('Stop watch resetted');
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            if (!running) {
                return duration;
            } else {
                console.log('Stop watch is running');
            };
        }
    });
}

const sw = new stopWatch();

console.log(sw.start());
