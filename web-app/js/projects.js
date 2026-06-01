// Project Registry
// Each project's HTML and logic lives in its own file under js/projects/

const projectInstructions = {
    // Project instructions moved to modular files under js/projects/
};


function toPascalCase(slug) {
    return slug.split(/[^a-zA-Z0-9]+/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
}

function getProjectHTML(projectName) {
    const fnName = 'get' + toPascalCase(projectName) + 'HTML';
    if (typeof window[fnName] === 'function') return window[fnName]();
    return `<div class="project-content"><p>Project '${projectName}' content not available.</p></div>`;
}

function getProjectInstructions(projectName) {
    // Modules may provide richer instructions; fall back to a simple hint.
    const fnName = 'get' + toPascalCase(projectName) + 'Instructions';
    if (typeof window[fnName] === 'function') return window[fnName]();
    return { title: projectName, steps: ['Open the project and follow on-screen instructions.'] };
}


function initializeProject(projectName) {

    const initializers = {
        'tic-tac-toe': 'initTicTacToe',
        'rock-paper-scissor': 'initRockPaperScissor',
        'dice-rolling': 'initDiceRolling',
        'coin-flip': 'initCoinFlip',
        'blackjack-21': 'initBlackjack',
        'number-guessing': 'initNumberGuessing',
        'hangman': 'initHangman',
        'word-scramble': 'initWordScramble',
        'flames': 'initFlames',
        'dots-boxes': 'initDotsBoxes',
        'emoji-memory': 'initEmojiMemoryGame',
        'fibonacci': 'initFibonacci',
        'binary-search': 'initBinarySearch',
        'bubble-sort': 'initBubbleSort',
        'progression-recognizer': 'initProgressionRecognizer',
        'pascal-triangle': 'initPascalTriangle',
        'armstrong': 'initArmstrong',
        'calculator': 'initCalculator',
        'collatz': 'initCollatz',
        'prime-analyzer': 'initPrimeAnalyzer',
        'projectile-motion': 'initProjectileMotion',
        'coordinate-polar-transform': 'initCoordinatePolarTransform',
        'derivative-calculator': 'initDerivativeCalculator',
        'morse-code': 'initMorseCode',
        'tower-of-hanoi': 'initTowerOfHanoi',
        'number-converter': 'initNumberConverter',
        'typing-speed-tester': 'initTypingSpeedTester',
        'snake-game': 'initSnakeGame',
        'password-forge': 'initPasswordForge',
        'spot-the-difference': 'initSpotTheDifference',
        'whack-a-mole': 'initWhackaMole',
        'flappy-game': 'initFlappyGame',
        'productive-pet': 'initProductivePet',
        'simon-says': 'initSimonSays',
        '2048-game': 'init2048Game',
        'color-palette': 'initColorPalette',
        'math-quiz': 'initMathQuiz',
        'resume-analyzer': 'initAIResumeAnalyzer',
        'caesar-cipher': 'initCaesarCipher'
    };

    const initializerName = initializers[projectName];
    if (initializerName && typeof window[initializerName] === 'function') {
        window[initializerName]();
    }
}
