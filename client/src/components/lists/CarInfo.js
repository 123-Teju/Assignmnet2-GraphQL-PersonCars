import { List } from 'antd';
import DetailPageCar from '../listitems/InfoCar';

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const CarInfo = ({ cars }) => {
  const styles = getStyles();
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={cars}
      renderItem={(car) => (
        <List.Item key={car.id}>
          <DetailPageCar car={car} />
        </List.Item>
      )}
      style={styles.list}
    />
  );
};

export default CarInfo;
