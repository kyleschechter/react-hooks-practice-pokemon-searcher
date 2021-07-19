import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, spriteFront, spriteBack }) {
  const [image, setImage] = useState(true)

  const handleChangeImage = () => {
    setImage(!image)
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
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
