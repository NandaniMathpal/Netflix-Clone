let faqBoxes = document.querySelectorAll('.faqbox');

faqBoxes.forEach((box) => {
    let answer = box.querySelector('.answer');
    let icon = box.querySelector('.icon i');

    box.addEventListener('click', (e) => {

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            answer.style.display = "block";
            icon.style.transform = "rotate(45deg)";
        }
    });
});
