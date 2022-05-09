import React, { createContext, useState, useContext } from 'react';

const StageContext = createContext();

export default function StageProvider(props) {
  const [stageContext, setStageContext] = useState({
    id: 0
  });

  return (
    <StageContext.Provider value={{ stageContext, setStageContext }}>
      {props?.children}
    </StageContext.Provider>
  );
}

export function useStage() {
  const { stageContext, setStageContext } = useContext(StageContext);
  return { stageContext, setStageContext };
}
