const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar-top");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
};

document.addEventListener("scroll", () => {
    console.log("Scroll Height: ", scrollContainer().scrollHeight);
    console.log("Client Height: ", scrollContainer().clientHeight);

    const scrolledPercentage =
        (scrollContainer().scrollTop /
            (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
        100;
});

backToTopButton.addEventListener("click", goToTop);

function checkFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
}

var result = checkFileExist("./legal");

if (result == true) {} else {
    window.location = ('./login.php');
};
