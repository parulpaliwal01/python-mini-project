def print_board(board, n):
    for row in board:
        print(" ".join("♛" if col else "⬜" for col in row))
    print()

def is_safe(board, row, col, n):
    # Check column
    for i in range(row):
        if board[i][col]:
            return False
    # Check upper-left diagonal
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j]:
            return False
    # Check upper-right diagonal
    for i, j in zip(range(row, -1, -1), range(col, n)):
        if board[i][j]:
            return False
    return True

def solve(board, row, n, solutions):
    if row == n:
        solutions.append([r[:] for r in board])
        return
    for col in range(n):
        if is_safe(board, row, col, n):
            board[row][col] = 1
            solve(board, row + 1, n, solutions)
            board[row][col] = 0

def main():
    n = int(input("Enter board size (n): "))
    board = [[0]*n for _ in range(n)]
    solutions = []
    solve(board, 0, n, solutions)

    print(f"Total solutions for {n}-Queens: {len(solutions)}\n")
    for sol in solutions:
        print_board(sol, n)

if __name__ == "__main__":
    main()
