import './App.css';

import { useState, useEffect } from "react";
import api  from "./utilities/API.js";
import Auth from "./componente/Auth";
import ProjectFrom from './componente/Projects/Form';



function App() {
  const [form, setForm] = useState(< ProjectFrom />);
  const [log, setLog] = useState(false);

  const auth = async (user, password) => {
    const { loggenIn = false, token } = await api.post("/auth/login", {
      user,
      password
    });
    localStorage.setItem("token", token);
    setLog(loggenIn);
  }

  const managementForm = (forms) => {
    switch (forms) {
      case "projects": {
        setForm(< ProjectFrom />);
        break;
      }
      case "offers": {
        setForm("OffersFrom");
        break;
      }
      case "emails": {
        setForm("emailsFrom");
        break;
      }
      default: {
         setForm(<ProjectFrom />);
        }
    }
  }
  return (
    <>
      {!log && <Auth login={auth} />}
      {log && 
      <section>
      <ul>
        <li><button onClick={() => managementForm("projects")}>Manage Projects</button></li>
        <li><button onClick={() => managementForm("offers")}>Manage Offers</button></li>
        <li><button onClick={() => managementForm("emails")}>Manage email</button></li>
          </ul>
          {form}
    </section>
    }
      
    </>
  );
}

export default App;
