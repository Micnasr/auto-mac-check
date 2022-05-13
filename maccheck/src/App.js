import Form from './components/Form';
import Card from './UI/Card';
import Pass from './components/Pass';

import { useState } from 'react';

function App() {
  
  const [updateInfo, setUpdateInfo] = useState('');

  const saveInfo = (enteredInfo) => {
    const infoData = {
      ...enteredInfo,
      id: Math.random().toString(),
    }
    
    setUpdateInfo(infoData);
  }

  
  return (
    <div>
      <Card>
        <Form onSaveData={saveInfo} />
      </Card>

      <Pass name={updateInfo.name} month={updateInfo.month} day={updateInfo.day} />
    </div>
    
  );
}

export default App;
