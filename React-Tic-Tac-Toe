import React from 'react';
import ReactDOM from 'react-dom';

const INITIAL_BOARD = [null, null, null, null, null, null, null, null, null];

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function getWinner(b) {
  const lines = [
    // horizontal
    [b[0], b[1], b[2]],
    [b[3], b[4], b[5]],
    [b[6], b[7], b[8]],

    // vertical
    [b[0], b[3], b[6]],
    [b[1], b[4], b[7]],
    [b[2], b[5], b[8]],

    // diagonal
    [b[0], b[4], b[8]],
    [b[2], b[4], b[6]],
  ]
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line[0] !== null && line[0] === line[1] && line[1] === line[2]) {
      return line[0];
    }
  }
  return 'None';
}

class Square extends React.Component {
  onClick = () => {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <div
        className="square"
        style={squareStyle}
        onClick={this.onClick}>
        {this.props.fill}
      </div>
    );
  }
}

class Board extends React.Component {
  state = {
    turn: 'X',
    board: INITIAL_BOARD
  }

  onClick = (index) => {
    if (this.state.board[index] !== null) {
      // this square already filled out
      return;
    }
    const nextBoard = [...this.state.board];
    nextBoard[index] = this.state.turn;
    this.setState({
      board: nextBoard,
      turn: this.state.turn === 'X' ? 'O' : 'X'
    })
  }

  reset = () => {
    this.setState({
      board: INITIAL_BOARD
    })
  }

  render() {
    const { board, turn } = this.state;

    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>Next player: {turn}</div>
        <div className="winner" style={instructionsStyle}>Winner: {getWinner(board)}</div>
        <button style={buttonStyle} onClick={this.reset}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square fill={board[0]} index={0} onClick={this.onClick} />
            <Square fill={board[1]} index={1} onClick={this.onClick} />
            <Square fill={board[2]} index={2} onClick={this.onClick} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square fill={board[3]} index={3} onClick={this.onClick} />
            <Square fill={board[4]} index={4} onClick={this.onClick} />
            <Square fill={board[5]} index={5} onClick={this.onClick} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square fill={board[6]} index={6} onClick={this.onClick} />
            <Square fill={board[7]} index={7} onClick={this.onClick} />
            <Square fill={board[8]} index={8} onClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
