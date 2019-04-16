#include "functions.h"
#include <stdio.h>
#include <stdlib.h>
#define SIZE 9

int main()
{
	Sudoku *Puzzle = getCompletePuzzle(SIZE);
	char solved_path[100] = "/home/siddarthv/DAA/Project/Code/solved_puzzle.txt";
	writePuzzle(Puzzle, solved_path);
	printPuzzle(Puzzle);
	Sudoku *ToSolve = getIncompletePuzzle(Puzzle);
	char unsolved_path[100] = "/home/siddarthv/DAA/Project/Code/unsolved_puzzle.txt";
	writePuzzle(ToSolve, unsolved_path);
	printPuzzle(ToSolve);
}
