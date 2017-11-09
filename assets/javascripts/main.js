function openPlayer (e, width=900, height=680) {
	e.preventDefault();
	var playerWindow = window.open(e.target.href, 'WebcastPlayer', 'menubar=no,titlebar=no,toolbar=no,width='+width+',height='+height);
	playerWindow.focus();
}
