const modalElemento = document.querySelector('.modal-overlay')

const Modal = {
	open(){
		modalElemento.classList.add('active')
		},
	close(){
		modalElemento.classList.remove('active')
	}
}


