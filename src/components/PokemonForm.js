import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onPokemonSubmit }) {

const [formData, setFormData] = useState({
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
})

const handleFormChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  onPokemonSubmit(formData)
  setFormData({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleFormChange} value={formData.name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleFormChange} value={formData.hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            value={formData.frontUrl}
            onChange={handleFormChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            value={formData.backUrl}
            onChange={handleFormChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
