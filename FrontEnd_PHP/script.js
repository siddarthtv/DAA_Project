function func() {
	incomplete.pop()
	complete.pop()
	for (i=0; i<9; i++) {
		while(incomplete[i].length < 9) {
			incomplete[i] = "0".concat('',incomplete[i]);
		}
	}
	console.log(incomplete);
	console.log(complete);
	var table = document.createElement('table');
	document.getElementById('puzzle').appendChild(table);
	var i, j;
	for (i=0; i<9; i++) {
		var row = document.createElement('tr');
		table.appendChild(row);
		for (j=0; j<9; j++) {
			var entry = document.createElement('th');
			if(incomplete[i][j]=='0')
				entry.innerHTML = ' ';
			else
				entry.innerHTML = incomplete[i][j];
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
