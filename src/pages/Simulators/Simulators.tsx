import React from 'react';
import {Header} from '~widgets/Header';
import {Navigation} from '~widgets/Navigation';
import {SimulatorCard} from '~shared/components/SimulatorCard';
import Simulator1Image from '~shared/assets/images/simulators/1.png';
import {Container} from '~shared/components/Container';

export const Simulators = () => {
  return (
    <>
      <Header />
      <Container>
        <SimulatorCard img={Simulator1Image} isActive isBuy price={4000} tokensToMin={60} />
        <SimulatorCard img={Simulator1Image} isActive isBuy={false} price={4000} tokensToMin={60} />
      </Container>
      <Navigation />
    </>
  );
};
