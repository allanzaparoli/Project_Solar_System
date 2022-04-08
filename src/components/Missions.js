import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((element) => (
          <MissionCard
            key={ element.name }
            name={ element.name }
            country={ element.country }
            destination={ element.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
