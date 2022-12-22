import covertDate from 'utils/format';

import {
  Card,
  Container,
  Title,
  Text,
  ContainerCard,
  ContainerImg,
} from './styles';

import { IPeriods } from 'utils/types';

const Periods = (props: { periods: IPeriods[] }) => {
  return (
    <>
      <h1 id="weather">Weather</h1>

      <Container id="container-cards">
        {props.periods.map((item) => {
          if (item.isDaytime) {
            return (
              <Card key={item.number} id={`card-${item.number}`}>
                <Title>
                  {item.name} - {covertDate(item.startTime)}
                </Title>
                <ContainerCard>
                  <img src={item.icon} alt={item.name} />
                  <ContainerImg>
                    <Text>
                      {item.temperature} {item.temperatureUnit}º
                    </Text>
                    <Text>
                      Wind {item.windSpeed} ({item.windDirection})
                    </Text>
                    <Text>{item.shortForecast}</Text>
                  </ContainerImg>
                </ContainerCard>
              </Card>
            );
          }
        })}
      </Container>
    </>
  );
};

export default Periods;
