document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist84721063\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-sudoku_rules-cpp\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body px-0 blob-wrapper data type-c \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Returns a boolean which indicates whether any assigned entry<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> in the specified row matches the given number. <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">bool<\/span> <span class=\"pl-en\">used_in_row<\/span>(<span class=\"pl-k\">int<\/span> grid[DIM][DIM], <span class=\"pl-k\">int<\/span> row, <span class=\"pl-k\">int<\/span> num)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC4\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC5\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">for<\/span> (<span class=\"pl-k\">int<\/span> col = <span class=\"pl-c1\">0<\/span>; col &lt; DIM; col++)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC6\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">if<\/span> (grid[row][col] == num)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC7\" class=\"blob-code blob-code-inner js-file-line\">		{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC8\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">true<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC9\" class=\"blob-code blob-code-inner js-file-line\">		}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC10\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">false<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC11\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Returns a boolean which indicates whether any assigned entry<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> in the specified column matches the given number. <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">bool<\/span> <span class=\"pl-en\">used_in_col<\/span>(<span class=\"pl-k\">int<\/span> grid[DIM][DIM], <span class=\"pl-k\">int<\/span> col, <span class=\"pl-k\">int<\/span> num)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC16\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC17\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">for<\/span> (<span class=\"pl-k\">int<\/span> row = <span class=\"pl-c1\">0<\/span>; row &lt; DIM; row++)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC18\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">if<\/span> (grid[row][col] == num)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC19\" class=\"blob-code blob-code-inner js-file-line\">		{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC20\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">true<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC21\" class=\"blob-code blob-code-inner js-file-line\">		}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC22\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">false<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC23\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC25\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Returns a boolean which indicates whether any assigned entry<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC26\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> within the specified 3x3 box matches the given number. <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC27\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">bool<\/span> <span class=\"pl-en\">used_in_box<\/span>(<span class=\"pl-k\">int<\/span> grid[DIM][DIM], <span class=\"pl-k\">int<\/span> box_start_rpw, <span class=\"pl-k\">int<\/span> box_start_col, <span class=\"pl-k\">int<\/span> num)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC28\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC29\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">for<\/span> (<span class=\"pl-k\">int<\/span> row = <span class=\"pl-c1\">0<\/span>; row &lt; <span class=\"pl-c1\">3<\/span>; row++)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC30\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">for<\/span> (<span class=\"pl-k\">int<\/span> col = <span class=\"pl-c1\">0<\/span>; col &lt; <span class=\"pl-c1\">3<\/span>; col++)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC31\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-k\">if<\/span> (grid[row + box_start_rpw][col + box_start_col] == num) <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC32\" class=\"blob-code blob-code-inner js-file-line\">			{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC33\" class=\"blob-code blob-code-inner js-file-line\">				<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">true<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC34\" class=\"blob-code blob-code-inner js-file-line\">			}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC35\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">false<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC36\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC37\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC38\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Returns a boolean which indicates whether it will be legal to assign<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC39\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> num to the given row,col location.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC40\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">bool<\/span> <span class=\"pl-en\">is_safe<\/span>(<span class=\"pl-k\">int<\/span> grid[DIM][DIM], <span class=\"pl-k\">int<\/span> row, <span class=\"pl-k\">int<\/span> col, <span class=\"pl-k\">int<\/span> num)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC41\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC42\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Check if &#39;num&#39; is not already placed in current row,<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC43\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-c\"><span class=\"pl-c\">//<\/span> current column and current 3x3 box <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L44\" class=\"blob-num js-line-number\" data-line-number=\"44\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC44\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">return<\/span> !<span class=\"pl-c1\">used_in_row<\/span>(grid, row, num) &amp;&amp;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L45\" class=\"blob-num js-line-number\" data-line-number=\"45\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC45\" class=\"blob-code blob-code-inner js-file-line\">		!<span class=\"pl-c1\">used_in_col<\/span>(grid, col, num) &amp;&amp;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L46\" class=\"blob-num js-line-number\" data-line-number=\"46\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC46\" class=\"blob-code blob-code-inner js-file-line\">		!<span class=\"pl-c1\">used_in_box<\/span>(grid, row - row % <span class=\"pl-c1\">3<\/span>, col - col % <span class=\"pl-c1\">3<\/span>, num);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L47\" class=\"blob-num js-line-number\" data-line-number=\"47\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC47\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L48\" class=\"blob-num js-line-number\" data-line-number=\"48\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC48\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L49\" class=\"blob-num js-line-number\" data-line-number=\"49\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC49\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L50\" class=\"blob-num js-line-number\" data-line-number=\"50\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC50\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> Searches the grid to find an entry that is still unassigned. If<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L51\" class=\"blob-num js-line-number\" data-line-number=\"51\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC51\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> found, the reference parameters row, col will be set the location<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L52\" class=\"blob-num js-line-number\" data-line-number=\"52\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC52\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> that is unassigned, and true is returned. If no unassigned entries<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L53\" class=\"blob-num js-line-number\" data-line-number=\"53\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC53\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> remain, false is returned. <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L54\" class=\"blob-num js-line-number\" data-line-number=\"54\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC54\" class=\"blob-code blob-code-inner js-file-line\">std::pair&lt;<span class=\"pl-k\">int<\/span>, <span class=\"pl-k\">int<\/span>&gt; <span class=\"pl-en\">get_unassigned_location<\/span>(<span class=\"pl-k\">int<\/span> grid[DIM][DIM])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L55\" class=\"blob-num js-line-number\" data-line-number=\"55\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC55\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L56\" class=\"blob-num js-line-number\" data-line-number=\"56\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC56\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">for<\/span> (<span class=\"pl-k\">int<\/span> row = <span class=\"pl-c1\">0<\/span>; row &lt; DIM; row++)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L57\" class=\"blob-num js-line-number\" data-line-number=\"57\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC57\" class=\"blob-code blob-code-inner js-file-line\">		<span class=\"pl-k\">for<\/span> (<span class=\"pl-k\">int<\/span> col = <span class=\"pl-c1\">0<\/span>; col &lt; DIM; col++)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L58\" class=\"blob-num js-line-number\" data-line-number=\"58\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC58\" class=\"blob-code blob-code-inner js-file-line\">			<span class=\"pl-k\">if<\/span> (grid[row][col] == BLANK)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L59\" class=\"blob-num js-line-number\" data-line-number=\"59\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC59\" class=\"blob-code blob-code-inner js-file-line\">			{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L60\" class=\"blob-num js-line-number\" data-line-number=\"60\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC60\" class=\"blob-code blob-code-inner js-file-line\">				<span class=\"pl-k\">return<\/span> <span class=\"pl-c1\">std::make_pair<\/span>(row, col);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L61\" class=\"blob-num js-line-number\" data-line-number=\"61\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC61\" class=\"blob-code blob-code-inner js-file-line\">			}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L62\" class=\"blob-num js-line-number\" data-line-number=\"62\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC62\" class=\"blob-code blob-code-inner js-file-line\">	<span class=\"pl-k\">return<\/span> GRID_FULL;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-sudoku_rules-cpp-L63\" class=\"blob-num js-line-number\" data-line-number=\"63\"><\/td>\n        <td id=\"file-sudoku_rules-cpp-LC63\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/GeorgeSeif/54a78dcabe2c1effb4969d82a88be6c9/raw/f8783b825c8c86502b605c36561d6984336943b2/sudoku_rules.cpp\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/GeorgeSeif/54a78dcabe2c1effb4969d82a88be6c9#file-sudoku_rules-cpp\">sudoku_rules.cpp<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
