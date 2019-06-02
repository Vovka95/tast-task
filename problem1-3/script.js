


function loadNode() {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'test.json');

	xhr.responseType = 'json';
	xhr.send();
	
	xhr.onload = function() {
		let arr = xhr.response;

		let value = findNode(arr, Number(getValue()));
		showNode(value);
	}
}

function getValue() {
	let value = document.getElementById('nodeId').value;
	document.getElementById('nodeId').value = null;
	return value;
}

function showNode(value) {
	let ul = document.getElementById('showNode');
	let li = document.createElement('li');

	li.innerHTML = value;

	ul.appendChild(li);
}

function findNode(arr, id) {
	for(let i = 0; i < arr.length; i++) {
  	let node = arr[i];
    if (node.id === id)	return `Found node: id = ${node.id}, label: ${node.lable}`;
    else if (node.child) {
      let found = findNode(node.child, id);
      if (found) return found;
    }
  }
}







