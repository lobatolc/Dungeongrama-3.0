import React, { useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import { Container } from './activityContainer.Styles';
import Activity from '../../../components/Activity/activity';


function ActivityContainer({area, id, index, acts}, ...props) {
    const [isEmpty, setIsEmpty] = useState(true);


    return <Container 
            id={id} 
            className=' actContainer' 
            area={area} 
            onDragEnter={(e)=>{e.preventDefault(); ; console.log('onDragEnter222')}}
            onDragOver={(e)=>{e.preventDefault(); ; console.log('onDragOver222')}}
            onDrop={(e)=>{e.preventDefault(); ; console.log('onDrop2222')}}
            >
     
    </Container>;
}

export default ActivityContainer;