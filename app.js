const counter = document.getElementById("counter");
const add = document.getElementById("add");
const reset = document.getElementById("reset");
const sub = document.getElementById("sub");

let val = 0;

add.addEventListener("click", () => {
  if (add.click) {
    val++;
    counter.textContent = val;
  }
});

reset.addEventListener("click", () => {
  if (reset.click) {
    val = 0;
    counter.textContent = val;
  }
});

sub.addEventListener("click", () => {
  if (sub.click) {
    if (val === 0) {
      alert("value is already 0");
    } else {
      val--;
      counter.textContent = val;
    }
  }
});
