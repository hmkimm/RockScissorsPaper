const emojis = ["✌️", "✊", "🖐"]; // 순서대로 이모지 배열

let i = 0; // 현재 이모지의 인덱스
let timerId = 0; // setTimeout의 리턴값 저장용 변수

function animateEmoji() {
  let randomEmoji = Math.floor(Math.random(emojis) * 3);
  document.getElementById("emoji").textContent = emojis[randomEmoji]; // 현재 이모지 출력
  i = (i + 1) % 3;
  timerId = setTimeout(animateEmoji, 1000); // 0.2초마다 이모지 변경
}

animateEmoji(); // 애니메이션 시작

// 게임 결과
const $span = document.querySelector("span");
const $labels = document.querySelectorAll("label");
// let rsp = document.querySelector("p").innerText;
// rsp = "✌️";
let result = document.querySelector("p");

const rspGame = () => {
  $labels.forEach((el) => {
    el.addEventListener("click", (event) => {
      clearTimeout(timerId);

      const game = event.target.textContent;

      //내가 가위 냈을 때
      if (game == "가위") {
        switch (result.innerText) {
          case "🖐":
            $span.innerHTML = "이겼어요 🎉";
            break;

          case "✊":
            $span.innerHTML = "졌어요 😞";
            break;

          default:
            $span.innerHTML = "비겼어요 다시 한 번!";
            animateEmoji();
        }
      } else if (game == "바위") {
        switch (result.innerText) {
          case "🖐":
            $span.innerHTML = "졌어요 😞";
            break;

          case "✊":
            $span.innerHTML = "비겼어요 다시 한 번!";
            animateEmoji();
            break;

          default:
            $span.innerHTML = "이겼어요 🎉";
        }
      } else if (game == "보") {
        switch (result.innerText) {
          case "🖐":
            $span.innerHTML = "비겼어요 다시 한 번!";
            animateEmoji();
            break;

          case "✊":
            $span.innerHTML = "이겼어요 🎉";
            break;

          default:
            $span.innerHTML = "졌어요😞";
            break;
        }
      }
    });
  });
};
rspGame();

const restart = () => {
  const $btn = document.querySelector("button");
  $btn.addEventListener("click", animateEmoji);
  $btn.addEventListener("click", () => {
    $span.innerText = "결과는?";
  });
};

restart();
