var question = document.getElementsByClassName("question");
var i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}
