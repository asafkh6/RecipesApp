import React from 'react';
import Day from './Day';

class Schedule extends React.Component {
  render() {
    return (
      <div
        id={this.props.id}
        onDrop={this.drop}
        onDragOver={this.dragOver}
        className={this.props.className}
      >
        <div id='schedule-box'>
          <Day num='1' numOfMeals='3' />
          <Day num='1' numOfMeals='3' />
          <Day num='1' numOfMeals='3' />
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default Schedule;

/// Table:
{
  /* <table className='ui celled table'>
<thead>
  <tr>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Thuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
    <th>Friday</th>
    <th>Saturday</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>sss</th>
    <th></th>
    <th></th>
    <th>sss</th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
</tbody>
</table> */
}
