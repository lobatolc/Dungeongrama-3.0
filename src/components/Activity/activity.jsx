import React, { useEffect} from 'react';

import { Container } from './activity.Styles';

function Activity({name, isInventory, drag, heightMaximus}, ...props) {

  const dragEvents = {
    onDragEnter :(e)=>{ e.preventDefault(e)},
    onDragStart:(e)=>{dragStart(e)},
    onDragLeave : (e)=>{e.preventDefault(e)},
    onDragOver :(e)=>{e.preventDefault(e)},
    onDrop :(e)=>{e.preventDefault(e)},
  }

  function dragStart(e){
    localStorage.removeItem("id");
    localStorage.setItem("id", e.target.getAttribute('id'));
  }

  return( 
    <Container 
      {...dragEvents} 
      id={name} 
      className={"act "+name} 
      heightMaximus={heightMaximus}
      isInventory={isInventory} 
      draggable={drag} 
      title="Atividade: representa uma determinada tarefa realizada pelo usuário ou pelo software.">
        <p>{name}</p>
    </Container>
  )}

export default Activity;