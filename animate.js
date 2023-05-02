const emojis = ["✌️", "✊", "🖐"]; // 순서대로 이모지 배열

let i = 0; // 현재 이모지의 인덱스
let timerId = 0; // setTimeout의 리턴값 저장용 변수

function animateEmoji() {
  document.getElementById("emoji").textContent = emojis[i]; // 현재 이모지 출력
  i = (i + 1) % 3;
  timerId = setTimeout(animateEmoji, 300); // 1초마다 이모지 변경
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
            $span.innerHTML = "이겼어유 🎉";
            break;

          case "✊":
            $span.innerHTML = "졌어유 😞";
            break;

          default:
            $span.innerHTML = "비겼어유 다시 한 번!";
            animateEmoji();
        }
      } else if (game == "바위") {
        switch (result.innerText) {
          case "🖐":
            $span.innerHTML = "졌어유 😞";
            break;

          case "✊":
            $span.innerHTML = "비겼어유 다시 한 번!";
            animateEmoji();
            break;

          default:
            $span.innerHTML = "이겼어유 🎉";
        }
      } else if (game == "보") {
        switch (result.innerText) {
          case "🖐":
            $span.innerHTML = "비겼어유 다시 한 번!";
            animateEmoji();
            break;

          case "✊":
            $span.innerHTML = "이겼어유 🎉";
            break;

          default:
            $span.innerHTML = "졌어유😞";
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
};

restart();
//클릭 이벤트 안에 if문으로 작성했는데, 9가지의 경우이기 때문에 if 한개와 8개의 else if로 구성을 해야됨
// if (game == "가위" && result.innerText === "🖐") {
//   console.log(result.innerHTML);
//   $span.innerHTML = "이겼어유!";
// } else if (game == "가위" && result.innerText === "✊") {
//   $span.innerHTML = "졌어유!!";
// } else if (game == "가위" && result.innerText === "✌️") {
//   $span.innerText = "비겼어유!";
//   console.log("왜 안돼");
// }

// //내가 바위 냈을 때
// if (game == "바위" && result.innerText === "🖐") {
//   console.log(result.innerHTML);
//   $span.innerHTML = "졌어유eee!";
//   console.log("뭐지");
// } else if (game == "바위" && result.innerText === "✊") {
//   $span.innerHTML = "비겼어유!!";
// } else if (game == "바위" && result.innerText === "✌️") {
//   console.log(result.innerText);
//   $span.innerHTML = "이겼어유!";
// }

// //내가 보 냈을 때
// if (game == "보" && result.innerText === "🖐") {
//   console.log(result.innerHTML);
//   $span.innerHTML = "비겼어유!";
// } else if (game == "보" && result.innerText === "✊") {
//   $span.innerHTML = "이겼어유!!";
// } else {
//   $span.innerHTML = "졌어유!";
// }
