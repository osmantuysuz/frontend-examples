let list = document.querySelectorAll(".component--feedback .labels li");
list.forEach((li) => {
  li.addEventListener("click", (evt) => {
    let target = evt.currentTarget;
    let messageBox = target.parentNode.nextElementSibling;
    let input = target.querySelector("input");

    if (messageBox.className === "labels-text") {
      messageBox = messageBox.nextElementSibling;
    }

    if (target.classList.contains("active")) {
      target.classList.remove("active");
      messageBox.classList.remove("active");
      input.checked = false;
    } else {
      input.checked = true;
      list.forEach((li) => li.classList.remove("active"));
      target.classList.add("active");
      messageBox.classList.add("active");
    }
  });
});

document.querySelectorAll(".close-btn").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let parent = e.currentTarget.parentNode;
    parent.classList.add('hide');
    //parent.parentNode.removeChild(parent);
    e.preventDefault();
  })
);
