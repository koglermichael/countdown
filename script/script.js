window.addEventListener("load", () => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date("Aug 27, 2020 15:00:00").getTime(),
    x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      if (distance < 0) {
        document.getElementById("days").innerText = '0';
        document.getElementById("hours").innerText = '0';
        document.getElementById("minutes").innerText = '0';
        document.getElementById("seconds").innerText = '0';

        clearInterval(x);
        document.getElementById("afterAll").innerText = 'Juhuuuu es ist Pause!!!';
      }
    }, second);
});
