function func() {
	var table = document.createElement('table');
	document.getElementById('puzzle').appendChild(table);
	var i, j;
	for (i=0; i<9; i++) {
		var row = document.createElement('tr');
		table.appendChild(row);
		for (j=0; j<9; j++) {
			var entry = document.createElement('th');
			entry.innerHTML = j+1;
			row.appendChild(entry);
			entry.style.border = '1px solid black';
			entry.style.padding = '1.5vw';
			if(i%3 == 2) {
				entry.style.borderBottomWidth = '2px';
			}
			if(j%3 == 2) {
				entry.style.borderRightWidth = '2px';
			}
			entry.id = 'entry';
		}
	}
	table.style.border = '2px solid black';
	table.style.borderCollapse = 'collapse';
	//console.log(table.style);
}