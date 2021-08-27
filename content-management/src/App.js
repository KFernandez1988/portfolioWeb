import './App.css';

import { useState } from "react";
import ProjectFrom from './componente/Projects/Form';

function App() {
  const [form, setForm] = useState(< ProjectFrom />);
  
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
      <section>
        <ul>
          <li><button onClick={() => managementForm("projects")}>Manage Projects</button></li>
          <li><button onClick={() => managementForm("offers")}>Manage Offers</button></li>
          <li><button onClick={() => managementForm("emails")}>Manage email</button></li>
        </ul>
      </section>
      {form}
    </>
  );
}

export default App;
