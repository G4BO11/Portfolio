const btn = document.getElementById("btnMover")
const ctn = document.getElementById("Contenedor")

btn.addEventListener('click', function handle() {
	ctn.classList.remove('-bottom-[100%]');
    ctn.classList.add('bottom-0');
});