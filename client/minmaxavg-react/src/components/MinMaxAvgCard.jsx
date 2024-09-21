import { Row, Card } from "react-bootstrap";

const MinMaxAvgCard = (props) => {
  const { title } = props;
  const { values = { min: "", max: "", avg: "", time: "" } } = props;

  return (
    <Row>
      <Card className="mx-auto mb-5" style={{ width: "40rem" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <div>
            Min: <span className="ms-3">{values.min}</span>
          </div>
          <div>
            Max: <span className="ms-3">{values.max}</span>
          </div>
          <div>
            Avg: <span className="ms-3">{values.avg}</span>
          </div>
          <div>
            Time in ms: <span className="ms-3">{values.time}</span>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default MinMaxAvgCard;
