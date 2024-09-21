import { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import Header from "../components/Header";
import ValuesForm from "../components/ValuesForm";
import MinMaxAvgCard from "../components/MinMaxAvgCard";

const Home = (props) => {
  const [minMaxAvg, setMinMaxAvg] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const cards = [
    {
      title: "Using Math Functions",
      values: minMaxAvg.hasOwnProperty("valuesMath")
        ? minMaxAvg.valuesMath
        : "",
    },
    {
      title: "Using Array Sort",
      values: minMaxAvg.hasOwnProperty("valuesSort")
        ? minMaxAvg.valuesSort
        : "",
    },
    {
      title: "Using Array Custom Sort Algorithm",
      values: minMaxAvg.hasOwnProperty("valuesCustomSort")
        ? minMaxAvg.valuesCustomSort
        : "",
    },
    ,
  ];

  useEffect(() => {
    cards[0].values = minMaxAvg.valuesMath;
    cards[1].values = minMaxAvg.valuesSort;
    cards[2].values = minMaxAvg.valuesCustomSort;
  }, [minMaxAvg]);

  useEffect(() => {
    if (errorMessage !== "") {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [errorMessage]);

  return (
    <Container>
      <Header />
      {showError && (
        <Alert
          className="text-center mx-auto"
          style={{ width: "40rem" }}
          variant={"danger"}
        >
          {errorMessage}
        </Alert>
      )}
      <ValuesForm
        setMinMaxAvg={setMinMaxAvg}
        setErrorMessage={setErrorMessage}
      />
      {cards.map((card, key) => {
        return (
          <MinMaxAvgCard
            key={key}
            title={card.title}
            values={card.values.hasOwnProperty("min") ? card.values : ""}
          />
        );
      })}
    </Container>
  );
};

export default Home;
