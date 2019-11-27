import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
	return (
      <button 
			className={`square_${ props.cellType }`} 
			style={{ backgroundColor: props.bgColor }}>
        
      </button>
    );
}

function Dot(props) {
    return (
        <button className={`dot`}></button>
    );
}

function Line(props) {
    return (
        <button
            className={`line${props.lineType}`}
            onClick={() => props.onClick()}
            style={{ backgroundColor: props.bgColor }}
        >
                
        </button>
    ); 
} 

class Board extends React.Component {
    renderSquare(i,cellType, lines) {
		// salvo i legami dello specifico square con le sue lines
		// this.props.SquareLines è passato per riferimento ed è parte dello stato del Game
		if (lines !== undefined) {
			this.props.SquareLines.push({square: i, lines: lines})
		} 
		
        return <Square 
			cellType={cellType}
			bgColor={(i !== null) ? this.props.squares[i] : null}
		/>;
    }

    renderLine(lineType, i) {
        return <Line
            lineType={lineType}
            bgColor={(i !== null) ? this.props.lines[i] : null}
            onClick={() => this.props.onClick(i)}
        />;
    }

    renderDot() {
        return <Dot/>;
    }


  render() {
    return (
      <div>
            <div className="board-row">
                {this.renderSquare(undefined, '0000', [])}
                {this.renderSquare(undefined, '0000', [])}
                {this.renderSquare(0, '4422', [0,2])}
                {this.renderLine('V',0)}
                {this.renderSquare(1, '2422', [0,1,3])}
                {this.renderLine('V',1)}
                {this.renderSquare(2, '2442', [1,4])}
                {this.renderSquare(undefined, '0000', [])}
                {this.renderSquare(undefined, '0000', [])}
            </div>
            <div className="board-row">
                {this.renderLine('B')}
                {this.renderLine('B')}
                {this.renderLine('H',2)}
                {this.renderDot()}
                {this.renderLine('H',3)}
                {this.renderDot()}
                {this.renderLine('H',4)}
                {this.renderLine('B')}
                {this.renderLine('B')}
            </div>
            <div className="board-row">
                {this.renderSquare(undefined, '0000', [])}
                {this.renderSquare(3, '4422', [5,9])}
                {this.renderLine('V',5)}
                {this.renderSquare(4, '2222', [5,2,6,10])}
                {this.renderLine('V',6)}
                {this.renderSquare(5, '2222', [6,3,7,11])}
                {this.renderLine('V',7)}
                {this.renderSquare(6, '2222', [7,4,8,12])}
                {this.renderLine('V',8)}
                {this.renderSquare(7, '2442', [8,13])}
                {this.renderSquare(undefined, '0000', [])}
            </div>
            <div className="board-row">
                {this.renderLine('B')}
                {this.renderLine('H',9)}
                {this.renderDot()}
                {this.renderLine('H',10)}
                {this.renderDot()}
                {this.renderLine('H',11)}
                {this.renderDot()}
                {this.renderLine('H',12)}
                {this.renderDot()}
                {this.renderLine('H',13)}
                {this.renderLine('B')}
            </div>
            <div className="board-row">
                {this.renderSquare(8, '4422', [14,20])}
                {this.renderLine('V',14)}
                {this.renderSquare(9, '2222', [14,9,15,21])}
                {this.renderLine('V',15)}
                {this.renderSquare(10, '2222', [15,10,16,22])}
                {this.renderLine('V',16)}
                {this.renderSquare(11, '2222', [16,11,17,23])}
                {this.renderLine('V',17)}
                {this.renderSquare(12, '2222', [17,12,18,24])}
                {this.renderLine('V',18)}
                {this.renderSquare(13, '2222', [18,13,19,25])}
                {this.renderLine('V',19)}
                {this.renderSquare(14, '2442', [19,26])}
            </div>
            <div className="board-row">
                {this.renderLine('H',20)}
                {this.renderDot()}
                {this.renderLine('H',21)}
                {this.renderDot()}
                {this.renderLine('H',22)}
                {this.renderDot()}
                {this.renderLine('H',23)}
                {this.renderDot()}
                {this.renderLine('H',24)}
                {this.renderDot()}
                {this.renderLine('H',25)}
                {this.renderDot()}
                {this.renderLine('H',26)}
            </div>
            <div className="board-row">
                {this.renderSquare(15, '4222', [20,27,33])}
                {this.renderLine('V',27)}
                {this.renderSquare(16, '2222', [27,21,28,34])}
                {this.renderLine('V',28)}
                {this.renderSquare(17, '2222', [28,22,29,35])}
                {this.renderLine('V',29)}
                {this.renderSquare(18, '2222', [29,23,30,36])}
                {this.renderLine('V',30)}
                {this.renderSquare(19, '2222', [30,24,31,37])}
                {this.renderLine('V',31)}
                {this.renderSquare(20, '2222', [31,25,32,38])}
                {this.renderLine('V',32)}
                {this.renderSquare(21, '2242', [32,26,39])}
            </div>
            <div className="board-row">
                {this.renderLine('H',33)}
                {this.renderDot()}
                {this.renderLine('H',34)}
                {this.renderDot()}
                {this.renderLine('H',35)}
                {this.renderDot()}
                {this.renderLine('H',36)}
                {this.renderDot()}
                {this.renderLine('H',37)}
                {this.renderDot()}
                {this.renderLine('H',38)}
                {this.renderDot()}
                {this.renderLine('H',39)}
            </div>
            <div className="board-row">
                {this.renderSquare(22, '4224', [33,40])}
                {this.renderLine('V',40)}
                {this.renderSquare(23, '2222', [40,34,41,46])}
                {this.renderLine('V',41)}
                {this.renderSquare(24, '2222', [41,35,42,47])}
                {this.renderLine('V',42)}
                {this.renderSquare(25, '2222', [42,36,43,48])}
                {this.renderLine('V',43)}
                {this.renderSquare(26, '2222', [43,37,44,49])}
                {this.renderLine('V',44)}
                {this.renderSquare(27, '2222', [44,38,45,50])}
                {this.renderLine('V',45)}
                {this.renderSquare(28, '2244', [45,39])}
            </div>
            <div className="board-row">
                {this.renderLine('B')}
                {this.renderLine('H',46)}
                {this.renderDot()}
                {this.renderLine('H',47)}
                {this.renderDot()}
                {this.renderLine('H',48)}
                {this.renderDot()}
                {this.renderLine('H',49)}
                {this.renderDot()}
                {this.renderLine('H',50)}
                {this.renderLine('B')}
            </div>
            <div className="board-row">
                {this.renderSquare(undefined, '0000', [])}
                {this.renderSquare(29, '4224', [46,51])}
                {this.renderLine('V',51)}
                {this.renderSquare(30, '2222', [51,47,52,55])}
                {this.renderLine('V',52)}
                {this.renderSquare(31, '2222', [52,48,53,56])}
                {this.renderLine('V',53)}
                {this.renderSquare(32, '2222', [53,49,54,57])}
                {this.renderLine('V',54)}
                {this.renderSquare(33, '2244', [54,50])}
                {this.renderSquare(undefined, '0000', [])}
            </div>
            <div className="board-row">
                {this.renderLine('B')}
                {this.renderLine('B')}
                {this.renderLine('H',55)}
                {this.renderDot()}
                {this.renderLine('H',56)}
                {this.renderDot()}
                {this.renderLine('H',57)}
                {this.renderLine('B')}
                {this.renderLine('B')}
            </div>
            <div className="board-row">
                {this.renderSquare(undefined, '0000', [])}
                {this.renderSquare(undefined, '0000', [])}
                {this.renderSquare(34, '4224', [55,58])}
                {this.renderLine('V',58)}
                {this.renderSquare(35, '2224', [58,56,59])}
                {this.renderLine('V',59)}
                {this.renderSquare(36, '2244', [59,57])}
                {this.renderSquare(undefined, '0000', [])}
                {this.renderSquare(undefined, '0000', [])}
            </div>
      </div>
    );
  }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(37).fill('white'), lines: Array(60).fill('black'), xIsNext: [] }],
            stepNumber: 0,
            xIsNext: true,
			SquareLines: []
        };
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: this.state.history[step].xIsNext //(step % 2) === 0 
        });
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const lines = current.lines.slice();
		var NewXIsNext = !this.state.xIsNext;
		
        if (lines[i] !== 'black') return;
		
        lines[i] = this.state.xIsNext ? 'red' : 'blue';
		if (this.checkSquaresToClose(squares,lines,i)) {
			// mantieni il player
			NewXIsNext = this.state.xIsNext;
		}
		
        this.setState({
            history: history.concat([{ squares: squares, lines: lines, xIsNext: NewXIsNext }]),
            stepNumber: history.length,
            xIsNext: NewXIsNext
        });
    }
	
	SquaresOfLine(value) {
		
		for (var k = 0; k < value.lines.length; k++) {
			if (this === value.lines[k]) {
				return true;
			}
		}
		return false;
	}
	
	checkSquaresToClose (squares,lines,i) {
		// dato i vado a filtrare su SquareLines
		
		const filtered = this.state.SquareLines.filter(this.SquaresOfLine, i);
		var mantieniPlayer = false;
		
		for (var j = 0; j < filtered.length; j++) {
			var temp = filtered[j];
			var closeSquare = true;
			for (var k = 0; k < temp.lines.length; k++) {
				if (lines[temp.lines[k]] === 'black' ) {
					closeSquare = false;
				}
			}
			
			if (closeSquare) {
				squares[filtered[j].square] = (this.state.xIsNext ? 'red' : 'blue');
				mantieniPlayer = true;
			}
		}
		return mantieniPlayer;
	} 

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const finish = calculateFinish(current.squares);

        const moves = history.map((step, move) => {
			// disabilito la history
			if (move > 0) return;
			
            const desc = move ? 'Go to move #' + move : 'Restart';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        });

		var pointsRed = 0;
		history[history.length - 1].squares.map((step, move) => {
			if (step === 'red') pointsRed = pointsRed + 1;
        });
		
		var pointsBlue = 0;
		history[history.length - 1].squares.map((step, move) => {
			if (step === 'blue') pointsBlue = pointsBlue + 1;
        });

		let status;
        if (finish) {
            status = 'Finish!';
			if (pointsRed > pointsBlue) status += ' Red Win!';
			if (pointsBlue > pointsRed) status += ' Blue Win!';
        } else {
			status = 'Next player: ' + (this.state.xIsNext ? 'Red' : 'Blu');
        }

        return (
          <div className="game">
            <div className="game-board">
                    <Board
                        squares={current.squares}
                        lines={current.lines}
						SquareLines={this.state.SquareLines}
                        onClick={(i) => this.handleClick(i)}
                    />
            </div>
            <div className="game-info">
              <div>{status}</div>
			  <div>Red Points: {pointsRed}</div>
			  <div>Blue Points: {pointsBlue}</div>
              <ol>{moves}</ol>
            </div>
          </div>
        );
    }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateFinish(squares) {
	// quando tutti gli squares sono popolati con valore red o blue  
	for (var i = 0; i < squares.length; i++) {
		if (squares[i] === 'white')
			return false;
	}
	return true;
}
