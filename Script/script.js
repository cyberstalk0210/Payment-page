///Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');

        options.forEach(option => { 
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;

                select.classlist.remove('select-clicked');

                caret.classlist.remove('caret-rotate');

                menu.classlist.remove('menu-open');

                options.forEach(option => {
                    option.classlist.remove('active');
                });
                option.classlist.add('active');
            });
        });
    });
});

let animation = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/ceab9b3f-9e77-4914-8984-ce409de1bfc8/EMB4weli4r.json'
    // or this 
    // path: 'https://lottie.host/10ad4ebc-e75d-445a-a263-d3e857dfecce/xhZLOBb1XE.json'
    // lottie file path
})
