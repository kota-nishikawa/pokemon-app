import React, { useState } from 'react';
import "./Card.css";
import Modal from '../Modal';

export const Card = ({pokemon }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleCard (openFlag){

    setIsOpen(setIsOpen)

    }
  return (
    <>
    <div className="card"  onClick={() => handleCard(true)}>
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardType">
        <div>タイプ</div>
        {pokemon.types.map((type)=> {
            return <div key={type.type.name}>
              <span className='typeName'>{type.type.name}</span>
            </div>
        })}

      </div>
      <div className="classInfo">
        <div className="cardData">
          <p className="title">重さ：{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">アビリティ：{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>モーダルの中身</p>
      </Modal>
      </>
  )
}


