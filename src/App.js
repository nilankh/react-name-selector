import './App.css';
import { useEffect, useState } from 'react';
import NameDisplay from './components/NameDisplay';
import SelectedNameList from './components/SelectedNameList';
import { AppContainer } from './components/AppDisplay';

const namesArray = [
  "Sophia", "Jackson", "Olivia", "Liam", "Emma",
  "Noah", "Ava", "Lucas", "Isabella", "Oliver",
  "Mia", "Ethan", "Amelia", "Aiden", "Harper",
  "Elijah", "Evelyn", "James", "Charlotte", "Benjamin",
  "Abigail", "William", "Emily", "Alexander", "Madison",
  "Michael", "Elizabeth", "Mason", "Sofia", "Logan",
  "Avery", "Matthew", "Ella", "Daniel", "Scarlett",
  "Henry", "Grace", "Joseph", "Lily", "Samuel",
  "Chloe", "David", "Victoria", "Carter", "Riley",
  "Wyatt", "Aria", "Jayden", "Zoey", "Gabriel"
  ]


function App() {
  const [remainingNames, setRemainingNames] = useState([...namesArray.slice(1)]);
  const [currentName, setCurrentName] = useState(namesArray[0])
  const [selectedNames, setSelectedNames] = useState([]);
  const [maybeNames, setMaybeNames] = useState([]);
  



  const handleYes = () => {
    setSelectedNames([...selectedNames, currentName]);
    setRemainingNames(remainingNames.slice(1));
    
   setCurrentName(remainingNames[0])
  };
  const handleNo = () => {
    setCurrentName(remainingNames[0])
    setRemainingNames(remainingNames.slice(1));
  };
  const handleMaybe = () => {
    setCurrentName(remainingNames[0])
    setMaybeNames([...maybeNames, currentName]);
    setRemainingNames([...remainingNames.slice(1), currentName]);
  };

  return (
    <AppContainer>
      <h1>Select a Name</h1>
      <div>
        {/* {namesArray.map((i) => <NameDisplay name={i}/>)} */}
        <NameDisplay 
           name = {currentName}
            onYes = {handleYes}
          onNo = {handleNo}
          onMaybe = {handleMaybe}
        /> 
        <SelectedNameList names = {selectedNames} />
      </div>
    </AppContainer>
  );
}

export default App;
