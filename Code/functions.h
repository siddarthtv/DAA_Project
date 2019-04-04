int **createGrid(int n);
void printGrid(int **Grid, int n);
int checkRow(int **Grid, int n, int r, int x);
int checkColumn(int **Grid, int n, int c, int x);
int checkBox(int **Grid, int n, int r, int c, int x);
void fillDiagonal(int **Grid, int n);
int findnextUnfilled(int **Grid, int n, int *i, int *j);
int fillRemaining(int **Grid, int n);
void createPuzzle(int **Grid, int n);
void removeVertices(int **Grid, int n);

/*
Naive Solution:
1) Randomly take any number 1-9
2) Check if it is safe to put in the cell.(row , column and box)
3) If safe, place it and increment to next location and go to step 1.
4) If not safe, then without incrementing go to step 1.
5) Once matrix is fully filled, remove k no. of elements randomly to complete game.

Improved Solution:
1) Fill all the diagonal 3x3 matrices.
2) Fill recursively rest of the non-diagonal matrices.
   For every cell to be filled, we try all numbers until
   we find a safe number to be placed :
   Improved method:
		   Find row, col of an unassigned cell
			If there is none, return true
			For digits from 1 to 9
			a) If there is no conflict for digit at row, col
		  	assign digit to row, col and recursively try fill in rest of grid
			b) If recursion successful, return true
			c) Else, remove digit and try another
			If all digits have been tried and nothing worked, return false
3) Once matrix is fully filled, remove K elements
   randomly to complete game.
*/
