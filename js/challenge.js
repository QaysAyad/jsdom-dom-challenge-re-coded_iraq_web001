document.addEventListener('DOMContentLoaded', () => {
  // console.log("%c DOM is loaded", "color :purple")
  // 
  // const pageCounter = document.querySelector('#counter')
  // const pauseBtn = document.querySelector('#pause')
  // const incrementBtn = document.querySelector('#plus')
  // const decrementBtn = document.querySelector('#minus')
  // const heartBtn = document.querySelector('#heart')
  // const commentForm = document.querySelector('#comment-form')
  // const commentList = document.querySelector('#commentList')
  // const commentInput = document.querySelector('#comment-input')
  // let numbersList = document.querySelector('#likesList')
  // 
  // 
  // let iter = 0
  // let pause = false
  // let currentCount = 0
  // let selectedNumber = 0
  // let likes = 0
  // 
  // function counter() {
  //   if (pause) {
  //     return
  //   } else {
  //     currentCount = pageCounter.innerHTML = (iter++)
  //     setTimeout(counter, 1000)
  //   }
  // }
  // 
  // counter()
  // 
  // pauseBtn.addEventListener('click', event => {
  //   console.log(event)
  // 
  //   if (pause == false) {
  //     pause = true
  //     incrementBtn.disabled = true
  //     decrementBtn.disabled = true
  //     heartBtn.disabled = true
  //     pauseBtn.innerHTML = 'resume'
  //   } else if (pause == true) {
  //     pause = false
  //     incrementBtn.disabled = false
  //     decrementBtn.disabled = false
  //     heartBtn.disabled = false
  //     pauseBtn.innerHTML = 'pause'
  //     counter()
  //   }
  // })
  // 
  // incrementBtn.addEventListener('click', event => {
  //   console.log(event)
  // 
  //   iter = currentCount
  //   iter += 1
  //   pageCounter.innerHTML = iter
  // })
  // 
  // decrementBtn.addEventListener('click', event => {
  //   console.log(event)
  // 
  //   iter = currentCount
  //   iter -= 1
  //   pageCounter.innerHTML = iter
  // })
  // 
  // heartBtn.addEventListener('click', event => {
  //   console.log(event)
  //   let number = currentCount
  // 
  //   if (selectedNumber == number) {
  //     likes += 1
  //     numbersList.innerHTML += `<li> Number ${number} has ${likes} likes </li>`
  //   } else {
  //       selectedNumber = number
  //       likes = 0
  //       likes += 1
  //       numbersList.innerHTML += `<li> Number ${number} has ${likes} likes </li>`
  //   }
  // })
  // 
  // commentForm.addEventListener('submit', event => {
  //   event.preventDefault()
  //   debugger
  // 
  //   let li = commentInput.value
  //   commentList.innerHTML += `<li> ${li} </li>`
  // })




  let counter = document.getElementById("counter");
let pause = document.getElementById("pause");
let heart = document.getElementById("heart");
let likes = document.querySelector(".likes");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let submit = document.getElementById("submit")
let commentForm = document.getElementById("comment-form")

let timerIsOn = 0;
let t = setTimeout(timedCount, 1000);
var c = 0;


    function timedCount() {
        counter.innerHTML = `${c}`;
        c++;
        t = setTimeout(timedCount, 1000);
    };

    function stopCount() {
        clearTimeout(t);
        timerIsOn = 0;
    };

    function startCount() {
        if (!timerIsOn) {
          timerIsOn = 1;
          timedCount();
        }
      };

    pause.addEventListener("click", () => {
        if (pause.id == "pause"){
            stopCount ();
            disable();
            pause.id = "resume";
            pause.innerHTML = "resume";
        }
        else if (document.getElementById("resume")){
            startCount ();
            enable();
            pause.id = "pause";
            pause.innerHTML = "pause";
        }
    });

    heart.addEventListener("click", () => {
        para = document.createElement("p");
        const text = `${c} has a like.`;
        para.innerHTML = text;
        likes.appendChild(para);
    });

    function disable(){
        heart.disabled = true;
        plus.disabled = true;
        minus.disabled = true;
        submit.disabled = true;
        likes.disabled = true;
    };

    function enable(){
        heart.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
        submit.disabled = false;
        likes.disabled = false;
    };

    commentForm.addEventListener("submit", function(event){
        event.preventDefault();

        let comment = document.getElementById("comment-input");
        const newComment = document.createElement("li");

        newComment.innerHTML = comment.value;
        document.getElementById("list").appendChild(newComment);
      });
})
