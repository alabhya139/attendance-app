import React from "react";
import ApplicationPage from "./pages/ApplicationPage";
import ApplicantProvider from "./providers/ApplicantProvider";
import { Container } from "./styles";

function App() {
  return (
    <ApplicantProvider>
      <Container className="App">
        <ApplicationPage />
      </Container>
    </ApplicantProvider>
  );
}

export default App;
