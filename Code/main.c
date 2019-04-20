#include "functions.h"
#include <stdio.h>
#include <stdlib.h>
#define SIZE 9

int main()
{
	Sudoku *Puzzle = getCompletePuzzle(SIZE);
	char solved_path[100] = "../FrontEnd_PHP/Puzzle.txt";
	FILE *fp = fopen(solved_path, "w");
	fclose(fp);
	writePuzzle(Puzzle, solved_path);
	printPuzzle(Puzzle);
	FILE *fp1 = fopen(solved_path, "a");
	fprintf(fp1,"|||||||||");
	fclose(fp1);
	Sudoku *ToSolve = getIncompletePuzzle(Puzzle);
	writePuzzle(ToSolve,solved_path);
	printPuzzle(ToSolve);
}
