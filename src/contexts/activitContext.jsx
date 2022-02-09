import React, { createContext, useState, useContext } from "react";

const ActivityContext = createContext();

export default function ActivityProvider(props) {
    const [activity, setActivity] = useState("Pular");

    return <ActivityContext.Provider value={{ activity, setActivity }}>{props?.children}</ActivityContext.Provider>;
}

export function useActivity() {
    const { activity, setActivity } = useContext(ActivityContext);
    return { activity, setActivity };
}