<html>
	<head>
		<title>Sudoku</title>
		<script type="text/javascript" src="./script.js"></script>
		<link rel="stylesheet" type="text/css" href="./style.css">
		<?php
			exec('../Code/a.exe');
			$solvedpath = 'Puzzle.txt';
			$myfile = fopen($solvedpath,'r') or die("Unable to Open file");
			$data=fread($myfile,filesize("Puzzle.txt"));
			fclose($myfile);
		?>
	</head>
	<script>
	<!--
					var data="<?php echo $data;?>";
					data=data.split("|||||||||");
					var solved=data[0];
					solved=solved.split(":::");
					var unsolved=data[1];
					//console.log(solved);
													function func()
													{
														var elements=document.querySelectorAll('td');
														for(var i=0;i<elements.length;i++)
														{
															elements[i].addEventListener("click",valueselected);
														}
														choices.style.display="none";
														unsolved=unsolved.split(":::");
														var table = document.createElement('table');
														var i, j;
														for (i=0; i<unsolved.length-1; i++)
														{
															var row = document.createElement('tr');
															table.appendChild(row);
															for (j=0; j<9; j++)
															{
																var entry = document.createElement('th');
																if(unsolved[i][j]=='0')
																	entry.innerHTML = ' ';
																else
																	entry.innerHTML = unsolved[i][j];
																entry.addEventListener("click",entryintotable);
																entry.className="entry";
																entry.id="entry"+i+j;
																row.appendChild(entry);
																entry.style.border = '1px solid black';
																entry.style.padding = '1.5vw';
																if(i%3 == 2)
																{
																	entry.style.borderBottomWidth = '2px';
																}
																if(j%3 == 2)
																{
																	entry.style.borderRightWidth = '2px';
																}

															}
														}
														table.style.border = '2px solid black';
														table.style.borderCollapse = 'collapse';
														document.getElementById('puzzle').appendChild(table);
														//console.log(table.style);
													}

													function entryintotable(event)
													{
															if(event.target.innerHTML==' ')
															{
																selectedbox=event.target.id;
																choices.style.display="block";

															}
															else
															{
																choices.style.display="none";
															}
													}
													function valueselected(event)
													{
														value=event.target.innerHTML;
														var valuetobeplaced=document.getElementById(selectedbox);
														row=selectedbox[5];
														col=selectedbox[6];
														if(value==solved[row][col])
														{
															valuetobeplaced.innerHTML=value;
															choices.style.display="none";
														}
														else
														{
															alert("WRONG ENTRY");
														}
													}
	-->
	</script>
	<body onload="func()">
		<div id="header">
			<h1>Sudoku</h1>
		</div>
		<div id="puzzle">
		</div>
		<br>
		<br>
		<div id="choices">
			<table  class="choice_table"style="border:1.5px solid black">
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
				</tr>
				<tr>
					<td>4</td>
					<td>5</td>
					<td>6</td>
				</tr>
				<tr>
					<td>7</td>
					<td>8</td>
					<td>9</td>
				</tr>
		</div>
	</body>
</html>
