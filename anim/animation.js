const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const observerr = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('left');
        } else {
            entry.target.classList.remove('left');
        }
    });
});


const hiddenElementss = document.querySelectorAll('.right');

hiddenElementss.forEach((el) => observerr.observe(el));

const hiddenElementsss = document.querySelectorAll('.t_p');

hiddenElementsss.forEach((el) => observerr.observe(el));