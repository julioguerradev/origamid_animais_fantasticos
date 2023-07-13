export default function initDropdownMenu() {

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick)
    })
});





function handleClick(event) {
    event.preventDefault();
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () =>{
        this.classList.remove('active');
    });
}

function outsideClick(element, events,callback) {
    const html = document.documentElement;
    const outside = 'data-outside'

    if(!element.hasAttribute(outside)){
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOusideClick);
        })
        element.setAttribute(outside, '')
    }

    function handleOusideClick(event) {
        if(!element.contains(event.target)){
            element.removeAttribute(outside)
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOusideClick);
            })
            callback()
        }
    }
}

