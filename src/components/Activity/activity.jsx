import React, { useEffect} from 'react';
import { useActivity } from '../../contexts/activitContext';
import { Container } from './activity.Styles';

function Activity({name, isInventory, index}, ...props) {
  const { activity, setActivity} = useActivity()
  const dragEvents = {
    onDragEnter :(e)=>{ e.preventDefault(e); },
    onDragStart:(e)=>{dragStart(e)},
    onDragLeave : (e)=>{e.preventDefault(e);},
    onDragOver :(e)=>{e.preventDefault(e);},
    onDrop :(e)=>{e.preventDefault(e); ;},
  }

  function dragEnter(e){
    e.preventDefault();
      localStorage.removeItem("id");
      localStorage.setItem("id", e.target.getAttribute('id'));
  }

  function dragStart(e){
    localStorage.removeItem("id");
    localStorage.setItem("id", e.target.getAttribute('id'));
  }

  return( 
    <Container {...dragEvents} id={name} className={" "+name+ " act"} isInventory={isInventory} draggable={true}>
        <p>{name}</p>
    </Container>
  )}

export default Activity;