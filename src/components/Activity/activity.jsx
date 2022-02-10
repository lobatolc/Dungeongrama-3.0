import React, { useEffect} from 'react';
import { useActivity } from '../../contexts/activitContext';
import { Container } from './activity.Styles';

function Activity({name, isInventory, index}, ...props) {
  const { activity, setActivity} = useActivity()
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
      className={"act"} 
      isInventory={isInventory} 
      draggable={true} 
      title="Atividade: representa uma determinada tarefa realizada pelo usuário ou pelo software.">
        <p>{name}</p>
    </Container>
  )}

export default Activity;