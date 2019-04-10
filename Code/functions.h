typedef struct grid {
	int **matrix;
	int size;
} Sudoku;

typedef struct {
	int row;
	int col;
} Position;


Sudoku *createGrid(int n);
void printPuzzle(Sudoku *Puzzle);
int checkRow(Sudoku *Puzzle, int r, int x);
int checkColumn(Sudoku *Puzzle, int c, int x);
int checkBox(Sudoku *Puzzle, int r, int c, int x);
void fillDiagonal(Sudoku *Puzzle);
Position *findnextUnfilled(Sudoku *Puzzle);
int fillRemaining(Sudoku *Puzzle);
void removeVertices(Sudoku *Puzzle, int parameter);
Sudoku *copyPuzzle(Sudoku *Puzzle);
Sudoku *getCompletePuzzle(int n);
Sudoku *getIncompletePuzzle(Sudoku *CompletePuzzle);

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
