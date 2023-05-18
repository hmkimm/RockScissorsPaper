const emojis = ["✌️", "✊", "🖐"]; // 순서대로 이모지 배열
const $btn = document.querySelector("button");
let randomEmoji = document.querySelector(".ally-hidden");
let clickResult = 0;

let i = 0; // 현재 이모지의 인덱스
let timerId; // setTimeout의 리턴값 저장용 변수

function animateEmoji() {
  document.getElementById("emoji").innerText = emojis[i]; // 현재 이모지 출력
  // i = parseInt(Math.random() * 3); //이렇게 하면 이모지 넘어갈 때 약간의 딜레이 발생
  i = (i + 1) % 3;
  timerId = setTimeout(animateEmoji, 200); //0.2초 후에 다시 animateEmoji실행하므로 i값 업데이트 하며 계속 반복
}
animateEmoji();

// let randomCal = () => {
//   i = parseInt(Math.random() * 3);
//   randomEmoji.innerText = emojis[i];
// };
//TODO: 랜덤값이랑 내가 낸 결과랑 비교하면, 화면에 나오는 결과랑 달라서 사용자 혼란

// 게임 결과 변수
const $span = document.querySelector("span");
const $labels = document.querySelectorAll("label");
const computerResult = document.querySelector("#emoji");

// 게임 결과 구현
$labels.forEach((el) => {
  el.addEventListener("click", (e) => {
    clearTimeout(timerId);
    clickResult = e.target.textContent;

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
          $btn.classList.add("hidden");
          animateEmoji();
          break
      }
    } else if (clickResult == "바위") {
      switch (computerResult.innerText) {
        case "🖐":
          $span.innerHTML = "졌어요 😞";
          break;

        case "✊":
          $span.innerHTML = "비겼어요 다시 한 번!";
          $btn.classList.add("hidden");
          animateEmoji();
          break;

        default:
          $span.innerHTML = "이겼어요 🎉";
      }
    } else if (clickResult == "보") {
      switch (computerResult.innerText) {
        case "🖐":
          $span.innerHTML = "비겼어요 다시 한 번!";
          $btn.classList.add("hidden");
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

     else if ( $span.innerHTML == "비겼어요 다시 한 번!" && ($span.innerHTML == "이겼어요 🎉") || ($span.innerHTML == "졌어요 😞")) {
      $btn.classList.remove("hidden");
      console.log(3333);
    }

  });
});

//FIXME: 첫 클릭 없이 다시 시작하면 무한 재생!!
let isBtnClicked = false;

$labels.forEach((el) => {
  el.addEventListener("click", (e) => {
    clickResult = e.target.textContent;
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

let a = 10
if( a > 5) {
  console.log('true');
} else {
  console.log('false')
}
console.log('finish');