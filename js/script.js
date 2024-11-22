const form = document.getElementById('form');
const nameInput = document.getElementById('name');

form.addEventListener('submit' , (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const mensage = 'Olá, me chamo ' + name + ', vim pela landing page. Pode me ajudar?';

  const whatsappUrl = 'https://api.whatsapp.com/send?phone=+5549999167404&text='+ mensage;

  window.open(whatsappUrl, '_blank');

})