const emojis = ["✌️", "✊", "🖐"]; // 순서대로 이모지 배열

let i = 0; // 현재 이모지의 인덱스
let timerId = 0; // setTimeout의 리턴값 저장용 변수

function animateEmoji() {
  document.getElementById("emoji").textContent = emojis[i]; // 현재 이모지 출력
  i = (i + 1) % 3;
  timerId = setTimeout(animateEmoji, 1000); // 1초마다 이모지 변경
}
/**
 * 1 = 0 + 1 / 3
 * 2 = 1 + 1 / 3
 * 0 = 2 + 1 / 3
 * 1 = 0 + 1  / 3
 * 반복
 **/

animateEmoji(); // 애니메이션 시작

// setTimeout 실행 10초 후 애니메이션 종료, 순차적 실행, 비동기
// setTimeout(function () {
//   clearTimeout(timerId); // 타이머 종료
// }, 10000);

// 게임 결과
const $span = document.querySelector("span");
const $labels = document.querySelectorAll("label");
let rsp = document.querySelector("p").innerText;
rsp = 0;

$labels.forEach((el) => {
  el.addEventListener("click", (event) => {
    clearTimeout(timerId);
    rsp = emojis[i + 2];
    const game = event.target.textContent;
    console.log(game);
    if (game == "가위" && rsp == "🖐") {
      $span.innerHTML = "you win~~!";
    } else if (game == "가위" && emojis[1]) {
      $span.innerHTML = "이겼습니다!!";
    } else {
      $span.innerHTML = "아쉽지만 다음 기회에!";
    }

    //왜인지는 모르겠지만 switch 안됨
    //   switch (game) {
    //     case game == "가위" && rsp == "✌️":
    //       $span.innerHTML = "비겼습니다. 다시 도전!";
    //   }
  });
});
