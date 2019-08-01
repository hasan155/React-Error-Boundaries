import React, { Component } from 'react';
import Test from "./Components/Test";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Test heroName="Batman"/>
      </ErrorBoundary>

      <ErrorBoundary>
        <Test heroName="Supperman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Test heroName="joker" />
      </ErrorBoundary>  
    </div>
  );
}
export default App;