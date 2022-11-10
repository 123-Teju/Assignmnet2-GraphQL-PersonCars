import { Card } from 'antd';
import { currencyFormatter } from '../currency/Currencies';

const getStyles = () => ({
  card: {
    width: '100%',
    minWidth: '500px',
    border: '1px solid #ccc',
    textAlign: 'center',
  },
});

const InfoCar = ({ car }) => {
  const styles = getStyles();
  return (
    <Card key={car.id} style={styles.card} type="inner">
      {car.year} {car.make} {car.model} {'->'} {currencyFormatter(car.price)}
    </Card>
  );
};

export default InfoCar;
