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

// 게임 결과
const $span = document.querySelector("span");
const $labels = document.querySelectorAll("label");
let rsp = document.querySelector("p").innerText;
rsp = "✌️";
let result = document.querySelector("p");

$labels.forEach((el) => {
  el.addEventListener("click", (event) => {
    clearTimeout(timerId);

    const game = event.target.textContent;

    //내가 가위 냈을 때
    if (game == "가위" && result.innerText === "🖐") {
      console.log(result.innerHTML);
      $span.innerHTML = "이겼어유!";
    } else if (game == "가위" && result.innerText === "✊") {
      $span.innerHTML = "졌어유!!";
    } else {
      $span.innerHTML = "비겼어유!";
    }

    //내가 바위 냈을 때
    if (game == "바위" && result.innerText === "🖐") {
      console.log(result.innerHTML);
      $span.innerHTML = "졌어유!";
    } else if (game == "바위" && result.innerText === "✊") {
      $span.innerHTML = "비겼어유!!";
    } else {
      $span.innerHTML = "이겼어유!";
    }

    //내가 보 냈을 때
    if (game == "보" && result.innerText === "🖐") {
      console.log(result.innerHTML);
      $span.innerHTML = "비겼어유!";
    } else if (game == "보" && result.innerText === "✊") {
      $span.innerHTML = "이겼어유!!";
    } else {
      $span.innerHTML = "졌어유!";
    }
  });
});
