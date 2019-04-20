#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#include "functions.h"

Sudoku *createGrid(int n)
{
	Sudoku *Puzzle = (Sudoku*)malloc(sizeof(Sudoku));
	Puzzle->matrix = (int **)malloc(n * sizeof(int*));
	Puzzle->size = n;
	int i, j;
	for(i=0; i<n; i++)
	{
		Puzzle->matrix[i] = (int*)malloc(n * sizeof(int));
		for(j=0; j<n; j++)
			Puzzle->matrix[i][j] = 0;
	}
	return Puzzle;
}

void printPuzzle(Sudoku *Puzzle)
{
	int i, j;
	int n = Puzzle->size;
	for(i=0; i<n; i++)
		printf("_______");
	printf("_____");
	printf("\n");
	int r=1, c=1;
	for(i=0; i<n; i++)
	{
		printf("|");
		for(j=0; j<n; j++)
		{
			printf("|      ");
			if(c%3 == 0 && c!=0)
				printf("|");
			c++;
		}
		printf("|\n");
		printf("||");
		for(j=0; j<n; j++)
		{
			if(Puzzle->matrix[i][j])
				printf("  %d   |", Puzzle->matrix[i][j]);
			else
				printf("      |");
			if(c%3==0 && c!=0)
				printf("|");
			c++;
		}
		printf("\n");
		printf("|");
		for(j=0; j<n; j++)
		{
			printf("|______");
			if(c%3==0 && c!=0)
				printf("|");
			c++;
		}
		printf("|\n");
		if(r%3 == 0)
		{
			printf("|");
			for(j=0; j<n; j++)
			{
				printf("|______");
				if(c%3==0 && c!=0)
					printf("|");
				c++;
			}
			printf("|\n");
		}
		r++;
	}
}

int checkRow(Sudoku *Puzzle, int r, int x)
{
	int i;
	int n = Puzzle->size;
	for(i=0; i<n; i++)
	{
		if(Puzzle->matrix[r][i] == x)
			return 0;
	}
	return 1;
}

int checkColumn(Sudoku *Puzzle, int c, int x)
{
	int i;
	int n = Puzzle->size;
	for(i=0; i<n; i++)
	{
		if(Puzzle->matrix[i][c] == x)
			return 0;
	}
	return 1;
}

int checkBox(Sudoku *Puzzle, int r, int c, int x)
{
	int i, j;
	r = r - r%3;
	c = c - c%3;
	for(i=0; i<3; i++)
	{
		for(j=0; j<3; j++)
		{
			if(Puzzle->matrix[r+i][c+j]==x)
				return 0;
		}
	}
	return 1;
}

int checkValid(Sudoku *Puzzle, int r, int c, int x)
{
	if(checkRow(Puzzle, r, x) && checkColumn(Puzzle, c, x) && checkBox(Puzzle, r, c, x))
		return 1;
	else
		return 0;
}

void fillDiagonal(Sudoku *Puzzle)
{
	int i, j, val;
	int n = Puzzle->size;
	int temp_arr[n];
	time_t t;
	for(i=0; i<n; i++)
		temp_arr[i] = 0;
	srand((unsigned)time(&t));
	for(i=0; i<n; i++)
	{
		for(j=0; j<n; j++)
		{
			if(i==j)
			{
				val = rand()%n;
				while(temp_arr[val])
					val = rand()%n;
				temp_arr[val] = 1;
				Puzzle->matrix[i][j] = val + 1;
			}
		}
	}
}

Position* findnextUnfilled(Sudoku *Puzzle)
{
	int i, j;
	int n = Puzzle->size;
	Position *pos;
	for(i=0; i<n; i++)
	{
		for(j=0; j<n; j++)
		{
			if(!Puzzle->matrix[i][j])
			{
				pos = (Position*)malloc(sizeof(Position));
				pos->row = i;
				pos->col = j;
				return pos;
			}
		}
	}
	return NULL;
}

int fillRemaining(Sudoku *Puzzle)
{
	Position *pos = findnextUnfilled(Puzzle);
	int n = Puzzle->size;
	if(pos==NULL)
		return 1;
	int row=pos->row, col=pos->col, x;
	for(x=1; x<=n; x++)
	{
		if(checkValid(Puzzle, row, col, x))
		{
			Puzzle->matrix[row][col] = x;
			if(fillRemaining(Puzzle))
				return 1;
			Puzzle->matrix[row][col] = 0;
		}
	}
	return 0;
}

void removeVertices(Sudoku *Puzzle, int parameter)
{
	int i,j,k;
	int n = Puzzle->size;
	time_t t;
	srand((unsigned)time(&t));
	for(k=0; k<parameter; k++)
	{
		i = rand()%n;
		j = rand()%n;
		while(!Puzzle->matrix[i][j])
		{
			i = rand()%n;
			j = rand()%n;
		}
		Puzzle->matrix[i][j] = 0;
	}
}

Sudoku* copyPuzzle(Sudoku *Puzzle)
{
	int i, j;
	int n = Puzzle->size;
	Sudoku *Copy = createGrid(n);
	Copy->size = n;
	for(i=0; i<n; i++)
	{
		for(j=0; j<n; j++)
		{
			Copy->matrix[i][j] = Puzzle->matrix[i][j];
		}
	}
	return Copy;
}

Sudoku *getCompletePuzzle(int n)
{
	Sudoku *Puzzle = createGrid(n);
	fillDiagonal(Puzzle);
	fillRemaining(Puzzle);
	//printPuzzle(Puzzle);
	return Puzzle;
}

Sudoku *getIncompletePuzzle(Sudoku *CompletePuzzle)
{
	Sudoku *IncompletePuzzle = copyPuzzle(CompletePuzzle);
	removeVertices(IncompletePuzzle, 30);
	//printPuzzle(IncompletePuzzle);
	return IncompletePuzzle;
}

void writePuzzle(Sudoku *Puzzle, char *path)
{
	FILE *fp = fopen(path, "a");
	int i,j;
	int n = Puzzle->size;
	for(i=0; i<n; i++)
	{
		for(j=0; j<n; j++)
			{
				fprintf(fp, "%d", Puzzle->matrix[i][j]);
			}
		fprintf(fp, ":::");
	}
	fclose(fp);
}
