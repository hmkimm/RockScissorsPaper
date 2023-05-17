const emojis = ["✌️", "✊", "🖐"]; // 순서대로 이모지 배열
const $btn = document.querySelector("button");

let i = 0; // 현재 이모지의 인덱스
let timerId; // setTimeout의 리턴값 저장용 변수

function animateEmoji() {
  document.getElementById("emoji").innerText = emojis[i]; // 현재 이모지 출력
  // i = parseInt(Math.random() * 3); //이렇게 하면 이모지 넘어갈 때 약간의 딜레이 발생
  i = (i + 1) % 3;
  timerId = setTimeout(animateEmoji, 200);
}
animateEmoji();

// 게임 결과 변수
const $span = document.querySelector("span");
const $labels = document.querySelectorAll("label");
const computerResult = document.querySelector("p");

// 게임 결과 구현
$labels.forEach((el) => {
  el.addEventListener("click", (e) => {
    clearTimeout(timerId);
    const clickResult = e.target.textContent;

    // 내가 가위 냈을 때
    if (clickResult == "가위") {
      switch (computerResult.innerText) {
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
    } else if (clickResult == "바위") {
      switch (computerResult.innerText) {
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
    } else if (clickResult == "보") {
      switch (computerResult.innerText) {
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

//FIXME: 첫 클릭 없이 다시 시작하면 무한 재생
let isBtnClicked = false;
let clickResult = 0

$labels.forEach((el) => {
  el.addEventListener("click", (e) => {
clickResult = e.target.textContent; 
console.log(clickResult);
  });
});

const restart = () => {
  $btn.addEventListener("click", () => {
    isBtnClicked = true; //클릭하면 clickResult를 true로 바꿈, 버튼 클릭 여부 알기 위해

  });

  if (clickResult == "" && isBtnClicked == false) {
    alert("게임을 먼저 수행하세요!");
  } else {
    animateEmoji();
    $span.innerText = "결과는?";
  }
};


$btn.addEventListener("click", restart);