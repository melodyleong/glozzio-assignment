document.addEventListener('DOMContentLoaded', function () {
    // carousel functionality
    const intervalTime = 4000;
    const nextButton = document.querySelector('.carousel-control-next');
    let slideInterval;

    function goToNextSlide() {
        nextButton.click(); // Simulate click for Bootstrap or similar library handling
    }

    function startSlideShow() {
        slideInterval = setInterval(goToNextSlide, intervalTime);
    }

    startSlideShow();

    //announcement bar functionality
    function closeAnnouncement() {
        document.getElementById('announcementBar').style.display = 'none';
    }

    //product expansion functionality
    var rose3Btn = document.getElementById('rose3');
var odette3Btn = document.getElementById('odette3');
var kiko3Btn = document.getElementById('kiko3');
// Get close button elements for each modal
var rose3Close = rose3Modal.querySelector('.close-button');
var odette3Close = odette3Modal.querySelector('.close-button');
var kiko3Close = kiko3Modal.querySelector('.close-button');
// Open the modal - Add event listeners to buttons
rose3Btn.onclick = function () {
    rose3Modal.style.display = "block";
}
odette3Btn.onclick = function () {
    odette3Modal.style.display = "block";
}
kiko3Btn.onclick = function () {
    kiko3Modal.style.display = "block";
}
// Close the modal - Add event listeners to close buttons
rose3Close.onclick = function () {
    rose3Modal.style.display = "none";
}
odette3Close.onclick = function () {
    odette3Modal.style.display = "none";
}
kiko3Close.onclick = function () {
    kiko3Modal.style.display = "none";
}




});