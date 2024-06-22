function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var meridiem = "AM";

    //将24小时时间转换为12小时时间并设置子午线
    if (hours >= 12) {
        meridiem = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }

    //在分钟和秒前填入0
    minutes = (minutes < 10 ? "0" : "") + minutes;

    //将小时转换为12小时格式，并确保半夜为12小时格式
    hours = (hours === 0) ? 12 : hours;

    //获取显示时间和周期的HTML元素
    var clockDiv = document.getElementById('rightside-clock');
    var periodDiv = document.getElementById('rightside-clock-period');
    clockDiv.innerText = hours + ":" + minutes;
    periodDiv.innerText = meridiem;
}

//每秒调用updateClock函数更新时钟
setInterval(updateClock, 1000);

//初始调用立即显示时钟
updateClock();