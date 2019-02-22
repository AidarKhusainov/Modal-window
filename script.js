// Возможно реализация удалением и добавлением имени класса div'a
// А здесь модальное окно добавляется и удаляется из DOM после каждого клика

let modalContainer = 'Я модальное окно. Меня можно закрыть, кликнув в любое место, кроме меня.';

btn.onclick = () => {
    let wrapper = document.createElement('div');
    wrapper.className = 'modal-window';
    wrapper.id = 'modalWindow';
    wrapper.onclick = closeModalWindow;
    wrapper.innerHTML = `<div class="modal-window_wrapper">
                            <div class="modal-window_container">${modalContainer}</div>
                        </div>`;

    let container = document.getElementById('container');
    container.appendChild(wrapper);
};

function closeModalWindow(e) {
    if(e.target.className !== 'modal-window_container') {
        let modal = document.getElementById('modalWindow');
        modal.parentNode.removeChild(modal);
    }
}
