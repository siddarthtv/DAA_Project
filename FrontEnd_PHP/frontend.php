<html>
	<head>
		<title>Sudoku</title>
		<script type="text/javascript" src="./script.js"></script>
		<link rel="stylesheet" type="text/css" href="./style.css">
		<?php
			exec('/home/siddarthv/DAA/Project/Code/program.exe');
			//echo "<script>console.log('".$out."');</script>";
			$solvedpath = '/home/siddarthv/DAA/Project/Code/solved_puzzle.txt';
			$myfile = fopen($solvedpath,'r');
			echo "<script>complete = []</script>";
			while(!feof($myfile)) {
				$data = fgets($myfile);
				echo "<script>complete.push(String(".$data."))</script>";
			}
			fclose($myfile);
			$unsolvedpath = '/home/siddarthv/DAA/Project/Code/unsolved_puzzle.txt';
			$myfile = fopen($unsolvedpath,'r');
			echo "<script>incomplete = []</script>";
			while(!feof($myfile)) {
				$data = fgets($myfile);
				echo "<script>incomplete.push(String(".$data."))</script>";
			}
			fclose($myfile);
		?>
	</head>

	<body onload="func()">
		<div id="header">
			<h1>Sudoku</h1>
		</div>

		<div id="puzzle">
		</div>
	</body>
</html>
