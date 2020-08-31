window.addEventListener("load", () => {
  startCountdown.addEventListener("click", () => {
    document.getElementById("countdown").style.display = "flex";
    document.getElementById("setCountdown").style.display = "none";

    const uebText = document.querySelector('#uebText').value;
    const colorUeb = document.getElementById('uebColor').value;

    const countdownTime = document.querySelector('input[type="datetime-local"]');
    const countdownColor = document.getElementById('countdownColor').value;

    const afterText = document.querySelector('#afterText').value;
    const afterColor = document.getElementById('afterColor').value;
    
    const backgroundWhile = document.getElementById('colorWhileCountdown').value;

    const backgroundAfter = document.getElementById('colorAfterCountdown').value;


    if (countdownTime.value != null) {
      countDown(countdownTime, countdownColor, uebText, colorUeb, afterText, afterColor, backgroundWhile, backgroundAfter);
      
    }
  });

  function countDown(countdownTime, countdownColor, uebText, colorUeb, afterText, afterColor, backgroundWhile, backgroundAfter) {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      let ueb = document.getElementById('uebCountdown')
      ueb.innerText = uebText; 
      ueb.style.color = colorUeb;
      document.body.style.backgroundColor = backgroundWhile;
      listUL.style.color = countdownColor;


    // console.log(countdownTime.value);

    let countDown = new Date(countdownTime.value).getTime(),
      x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
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
          document.getElementById("days").innerText = "0";
          document.getElementById("hours").innerText = "0";
          document.getElementById("minutes").innerText = "0";
          document.getElementById("seconds").innerText = "0";

          let after = document.getElementById('afterCountdown');
          after.innerText = afterText;
          after.style.color = afterColor;
          
          document.body.style.backgroundColor = backgroundAfter;

          clearInterval(x);
          // document.getElementById("afterCountdown").innerText = ;
        }
      }, second);
  }
});
