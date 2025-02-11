//Window scroll

$(window).on("scroll", function(){

    var scrollTop = $(window).scrollTop();

    if(scrollTop >= 100){

        $('body').addClass('fixed-header');
    } else{

        $('body').removeClass('fixed-header')
    }
});

//Document Ready

$(document).ready(function (){

    //Typing animation

    new Typed('#type-it', {
        strings: ['Full Stack Developer', 'Full Stack Developer', 'Full Stack Developer'],
        typeSpeed: 100,
        loop: true
      });


});

$(document).ready(function () {
        // Generate CAPTCHA on page load
        let captchaResult = generateCaptcha();

        // Form submission handler
        $('#myForm').on('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            if (!validateForm()) {
                return; // Stop if validation fails
            }

            var formData = new FormData(this);
            formData.append('service_id', 'service_58nsy6s');
            formData.append('template_id', 'template_dhxnfvf');
            formData.append('user_id', 'MG5Tjjh3PrsIvRO9h');

            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
            })
                .done(function () {
                    alert('Your mail is sent!');
                    $('#myForm')[0].reset(); // Reset the form
                    captchaResult = generateCaptcha(); // Regenerate CAPTCHA
                })
                .fail(function (error) {
                    alert('Oops... ' + JSON.stringify(error));
                });
        });

        // Generate a CAPTCHA
        function generateCaptcha() {
            const a = Math.floor(Math.random() * 10);
            const b = Math.floor(Math.random() * 10);
            document.getElementById('captchaText').innerText = `${a} + ${b} = ?`;
            return a + b;
        }

        // Form validation
        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const captchaInput = document.getElementById('captchaInput').value.trim();
            const captchaError = document.getElementById('captchaError');

            // Reset error message
            captchaError.textContent = '';

            if (!name || !email || !message) {
                alert('All fields are required.');
                return false;
            }

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            if (parseInt(captchaInput) !== captchaResult) {
                captchaError.textContent = 'CAPTCHA validation failed. Please try again.';
                captchaResult = generateCaptcha(); // Regenerate CAPTCHA
                return false;
            }

            return true; // Validation passed
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });
    
 // Function to toggle map visibility
 function toggleMap() {
    const mapContainer = document.getElementById('map-container');
    if (mapContainer.style.display === 'none' || mapContainer.style.display === '') {
        mapContainer.style.display = 'block';
    } else {
        mapContainer.style.display = 'none';
    }
}