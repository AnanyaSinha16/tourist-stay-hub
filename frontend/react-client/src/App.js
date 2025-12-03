import React from 'react';

export default function App(){
  return (
    <div style={{fontFamily:'sans-serif', padding:20}}>
      <h1>Tourist Stay Hub - React Skeleton</h1>
      <p>This is a minimal frontend skeleton. Connect to backend services at:</p>
      <ul>
        <li>Auth: http://localhost:8081/health</li>
        <li>Hotel: http://localhost:8082/health</li>
        <li>Booking: http://localhost:8083/health</li>
      </ul>
    </div>
  )
}
