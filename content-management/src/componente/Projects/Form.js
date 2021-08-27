import { useState, useEffect } from "react";
import CreateProject from "./create";

const ProjectForm = () => {
    const [createToggle, setCreateToggle] = useState(false);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        console.log(clients);
    }, [clients]);
    
    const addClientToList = (newClient) => {
        setClients(
            (previous) => {
                return [newClient, ...previous];
            }
        );
    }
    const toggleCreateFrom = (bool) => {
        setCreateToggle(bool);
    }
    return (
        <div>
            {!createToggle && <button onClick={() => toggleCreateFrom(true)}> New Entry </button>}
            {createToggle && <button onClick={() => toggleCreateFrom(false)}> Close Form </button>}
            {createToggle && <CreateProject clients={clients} addClientToList={addClientToList}  />}
            
            {clients.length > 0 && clients.map((cl, i) => (
                <div key={i}>
                 <h1>{cl.name}</h1>
                 <h1>{cl.desc}</h1>
                 <h1>{cl.cate}</h1>
                 <h1>{cl.url}</h1>
                </div>
            
               ))}
            
        </div>
    )
};

export default ProjectForm;