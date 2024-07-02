document.addEventListener('DOMContentLoaded', function () {
    // carousel functionality
    const intervalTime = 4000;
    const nextButton = document.querySelector('.carousel-control-next');
    let slideInterval;

    function goToNextSlide() {
        nextButton.click();
    }

    function startSlideShow() {
        slideInterval = setInterval(goToNextSlide, intervalTime);
    }

    startSlideShow();

    //announcement bar functionality
    function closeAnnouncement() {
        document.getElementById('announcementBar').style.display = 'none';
    }

});