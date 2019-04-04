#include "functions.h"
#include <stdio.h>
#include <stdlib.h>
#define SIZE 9

int main()
{
	int **grid = createGrid(SIZE);
	createPuzzle(grid, SIZE);
}
