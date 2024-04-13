import React from 'react';
import Weather from './Components/Weather';
import Header from './Components/Header';

const App = () => {
    return (
        <div className='contain'>
            <Header />
            <Weather />
        </div>
    );
}

export default App;
