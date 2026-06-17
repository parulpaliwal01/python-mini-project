import unittest
import subprocess
import os
import sys

SEED = 42


class TestNumberGuessing(unittest.TestCase):
    def setUp(self):
        self.script_path = os.path.abspath(os.path.join(
            os.path.dirname(__file__), "..",
            "games", "Number-Guessing-Game", "Number-Guessing-Game.py"
        ))

    def run_script(self, inputs):
        input_data = "\n".join(inputs) + "\n"
        result = subprocess.run(
            [sys.executable, self.script_path, str(SEED)],
            input=input_data,
            text=True,
            capture_output=True,
            encoding='utf-8',
            timeout=10
        )
        return result.stdout

    def test_game_win(self):
        output = self.run_script(["1", "82", "n"])
        self.assertIn("Correct! You guessed the number.", output)

    def test_game_lose(self):
        output = self.run_script(["3", "1", "2", "3", "4", "5", "n"])
        self.assertIn("Out of attempts.", output)

    def test_game_invalid_inputs(self):
        output = self.run_script(["1", "abc", "150", "82", "n"])
        self.assertIn("Invalid input.", output)
        self.assertIn("Enter a number between 1 and 100.", output)
        self.assertIn("Correct! You guessed the number.", output)


if __name__ == "__main__":
    unittest.main()
