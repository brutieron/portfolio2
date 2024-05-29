function toggleMenu() {
  var menu = document.getElementById("myNavMenu");
  menu.classList.toggle("responsive");
}

// Function to close menu
function closeMenu() {
  var menu = document.getElementById("myNavMenu");
  menu.classList.remove("responsive");
}

// Event delegation to close menu when clicking outside
document.addEventListener('click', function(event) {
  var menu = document.getElementById("myNavMenu");
  var menuBtn = document.getElementById("menuToggle");

  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove("responsive");
  }
});


var navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
      // Remove active class from all navigation links
      navLinks.forEach(function(link) {
          link.classList.remove('active-link');
      });
      // Add active class to the clicked navigation link
      this.classList.add('active-link');
  });
});

// Event listener for menu toggle button
document.getElementById("menuToggle").addEventListener("click", function() {
  toggleMenu();
});
// Event listener for menu toggle button
document.getElementById("menuToggle").addEventListener("click", function() {
  toggleMenu();
}); 

window.onscroll = function() {headerShadow()};
function headerShadow() {
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}


const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


sr.reveal('.project-box',{interval: 200})

sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})


const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  }  else {
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)


function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_sbvc3y9";
  const templateID = "template_78jzi4v";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}