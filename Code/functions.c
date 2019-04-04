#include <stdlib.h>
#include <stdio.h>
#include <time.h>

typedef struct {
	int row;
	int col;
} Position;

int **createGrid(int n)
{
	int **Grid = (int **)malloc(n * sizeof(int*));
	int i, j;
	for(i=0; i<n; i++)
	{
		Grid[i] = (int*)malloc(n * sizeof(int));
		for(j=0; j<n; j++)
			Grid[i][j] = 0;
	}
	return Grid;
}

void printGrid(int **Grid, int n)
{
	int i, j;
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
			if(Grid[i][j])
				printf("  %d   |", Grid[i][j]);
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

int checkRow(int **Grid, int n, int r, int x)
{
	int i;
	for(i=0; i<n; i++)
	{
		if(Grid[r][i] == x)
			return 0;
	}
	return 1;
}

int checkColumn(int **Grid, int n, int c, int x)
{
	int i;
	for(i=0; i<n; i++)
	{
		if(Grid[i][c] == x)
			return 0;
	}
	return 1;
}

int checkBox(int **Grid, int n, int r, int c, int x)
{
	int i, j;
	r = r - r%3;
	c = c - c%3;
	for(i=0; i<3; i++)
	{
		for(j=0; j<3; j++)
		{
			if(Grid[r+i][c+j]==x)
				return 0;
		}
	}
	return 1;
}

int checkValid(int **Grid, int n, int r, int c, int x)
{
	if(checkRow(Grid, n, r, x) && checkColumn(Grid, n, c, x) && checkBox(Grid, n, r, c, x))
		return 1;
	else
		return 0;
}

void fillDiagonal(int **Grid, int n)
{
	int i, j, val;
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
				Grid[i][j] = val + 1;
			}
		}
	}
}

Position* findnextUnfilled(int **Grid, int n)
{
	int i, j;
	Position *pos;
	for(i=0; i<n; i++)
	{
		for(j=0; j<n; j++)
		{
			if(!Grid[i][j])
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

int fillRemaining(int **Grid, int n)
{
	//printGrid(Grid, n);
	Position *pos = findnextUnfilled(Grid, n);
	if(pos==NULL)
		return 1;
	int row=pos->row, col=pos->col, x;
	for(x=1; x<=n; x++)
	{
		if(checkValid(Grid, n, row, col, x))
		{
			Grid[row][col] = x;
			if(fillRemaining(Grid, n))
				return 1;
			Grid[row][col] = 0;
		}
	}
	return 0;
}

void removeVertices(int **Grid, int n)
{
	int i,j,k;
	time_t t;
	srand((unsigned)time(&t));
	for(k=0; k<30; k++)
	{
		i = rand()%n;
		j = rand()%n;
		while(!Grid[i][j])
		{
			i = rand()%n;
			j = rand()%n;
		}
		Grid[i][j] = 0;
	}
}

void createPuzzle(int **Grid, int n)
{
	fillDiagonal(Grid, n);
	fillRemaining(Grid, n);
	removeVertices(Grid, n);
	printGrid(Grid, n);
	fillRemaining(Grid, n);
	printGrid(Grid, n);
}
