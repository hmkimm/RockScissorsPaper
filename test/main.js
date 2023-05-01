const $btn = document.querySelectorAll("button");

$btn.forEach((el) => {
  el.addEventListener("click", (event) => {
    const game = event.target.textContent;
    if (game == "가위") {
      console.log("가위를 냈습니다.");
    } else if (game == "바위") {
      console.log(game);
    } else {
      console.log(game);
    }
  });
});
arr = ["🤞", "✊", "🖐"];

let stop = setInterval(() => {
  for (i = 0; i < 3; i++) {
    console.log(arr[i]);
    clearInterval(stop);
  }
}, 3000);

let stop1 = setInterval(() => {
  console.log(arr[0]);

  console.log(arr[1]);

  console.log(arr[2]);
  clearInterval(stop1);
}, 1000);
// clearInterval(stop);

//컴퓨터 계산
