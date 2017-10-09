function changeBg() {
    const sideBarMenuLis = document.querySelectorAll('.side_bar_menu>li');
    console.log(sideBarMenuLis);
    for(let i = 0; i < sideBarMenuLis.length; i++){
        sideBarMenuLis[i].addEventListener('click', handler);
    }

    function handler({target}) {
        if(target.tagName=='SPAN' || target.tagName=='DIV'){
            for(let i = 0; i < sideBarMenuLis.length; i++){
                if(sideBarMenuLis[i].classList.contains('menu_elem_active')){
                    sideBarMenuLis[i].classList.remove('menu_elem_active')

                }
                this.classList.add('menu_elem_active');
    }
        }
    }
}
changeBg();

function toggle(activeEl) {
    const clickable = document.querySelector(`.${activeEl}`);
    clickable.addEventListener('click', handl);
    function handl(e) {
        clickable.nextElementSibling.classList.toggle('opened');
    }
}

toggle('has_sub_menu');
toggle('has_sub_menu_2');

