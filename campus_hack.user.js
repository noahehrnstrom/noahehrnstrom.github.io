function init() {
    document.getElementsByClassName("right")[2].appendChild(document.createElement("button"))
    document.getElementsByClassName("right")[2].children[4].id="fix-task"
    document.getElementsByClassName("right")[2].children[4].className="primary-btn btn"
    document.getElementsByClassName("right")[2].children[4].innerHTML = "Solve"

    $('#fix-task').click(function () {
        aNode.fillWithCorrectAnswer();
        aNode.setActive(1);
        document.getElementById("submit-answer").click()
        goToNextTask();
        setTimeout(init, 300);
    });
}

init();