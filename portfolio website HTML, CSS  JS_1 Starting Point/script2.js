document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((img, i) => {
        if (i === index) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    // Show the first image initially
    showImage(currentIndex);
  
    // Change image every 3 seconds
    setInterval(nextImage, 2000);
  });