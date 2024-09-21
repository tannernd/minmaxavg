import { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { formSubmit } from "../js/index";

const ValuesForm = (props) => {
  const { setMinMaxAvg, setErrorMessage } = props;
  const [formValues, setFormValues] = useState({ values: "" });

  const handleChange = (e) => {
    const { value } = e.target;
    setFormValues({
      values: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    formSubmit(formValues).then((result) => {
      if (result.success) {
        setMinMaxAvg({
          valuesMath: result.valuesMath,
          valuesSort: result.valuesSort,
          valuesCustomSort: result.valuesCustomSort,
        });
      } else {
        setErrorMessage(result.msg);
      }
    });
  };

  return (
    <Row className="mb-5">
      <div className="mx-auto" style={{ width: "40rem" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="text-center">
            <Form.Label>Please enter the values separated by commas</Form.Label>
            <Form.Control
              className="mb-5"
              name="values"
              type="text"
              value={formValues.values}
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </div>
    </Row>
  );
};

export default ValuesForm;
