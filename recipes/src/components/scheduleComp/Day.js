import React from 'react';
import TimeFrame from './TimeFrame';

class Day extends React.Component {
  state = { frames: [], calories: 0 };

  componentDidMount() {
    this.setState({ frames: [] });
  }

  componentDidUpdate() {
    if (this.state.frames.length < this.props.numOfMeals) {
      this.setState({
        frames: [...this.state.frames, `${this.state.frames.length}`],
      });
    }
  }

  addCalories = (calories) => {
    this.setState({ calorioes: this.state.calories + calories });
  };

  renderFrames = () => {
    return this.state.frames.map((frameId) => {
      return (
        <TimeFrame id={frameId} key={frameId} addCalories={this.addCalories} />
      );
    });
  };

  render() {
    return (
      <div className='day-container'>
        day
        {this.renderFrames()}
        Calories: {this.state.calories}
      </div>
    );
  }
}

export default Day;
