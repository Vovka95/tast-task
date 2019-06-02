function showError(container, errorMessage) {
  container.className = 'error form-group';
  let msgElem = document.createElement('span');
  msgElem.className = "error-message";
  msgElem.innerHTML = errorMessage;
  container.appendChild(msgElem);
}

function resetError(container) {
  container.className = 'form-group';
  if (container.lastChild.className == "error-message") {
    container.removeChild(container.lastChild);
 	}
}

function validate(form) {
  let elems = form.elements;

  resetError(elems.name.parentNode);
  if (!elems.name.value) {
    showError(elems.name.parentNode, ' Please put your name!');
  }

  resetError(elems.address.parentNode);
    if (!elems.address.value) {
      showError(elems.address.parentNode, ' Please put your addres!');
 	}

  resetError(elems.city.parentNode);
    if (!elems.city.value) {
      showError(elems.city.parentNode, ' Please put your city!');
   }

  resetError(elems.state.parentNode);
    if (!elems.state.value) {
    showError(elems.state.parentNode, ' Please put your state!');
  }

  resetError(elems.zipCode.parentNode);
    if (!elems.zipCode.value) {
      showError(elems.zipCode.parentNode, ' Please put your zip code!');
  }

}