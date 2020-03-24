import React from 'react';
import Counter from './Components/Counter';
import './styles.css';

function App() {
  return (
    <div className="App">
      {/* We can destructure.. */}
      <Counter render={({counter, increase, decrease}) => {
        return (
          <>
            <h1>{counter}</h1>
            <button onClick={() => decrease(1)}>Decrement</button>
            <button onClick={() => increase(1)}>Increment</button>
          </>
        )
      }} />
      {/* ..or we can use like an object */}
      <Counter render={(api) => {
        return <h1 onClick={() => api.increase(1)}>{api.counter}</h1>
      }}>
        <p>I am a rotten child!</p>
      </Counter>
    </div>
  );
}

export default App;