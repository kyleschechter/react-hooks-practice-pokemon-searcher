import React, { useState } from "react";
import { Card, Form } from "semantic-ui-react";

function PokemonCard({ id, name, hp, spriteFront, spriteBack, onDeleteClick }) {
  const [image, setImage] = useState(true)

  const handleChangeImage = () => {
    setImage(!image)
  }
  const handleDeleteClick = () => {
    onDeleteClick(id)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleChangeImage} src={image ? spriteFront : spriteBack} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
          <Form.Button onClick={handleDeleteClick}>Delete</Form.Button>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
