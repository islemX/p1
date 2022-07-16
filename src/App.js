import './App.css';
import Profile from './profile/Profile'

function App() {
  const handleName = fullname => alert(fullname)
  return (
    <div className='App'>
      <Profile fullname={'BENAMOR ISLEM'} bio={'WEB DEVELOPER'} profession={'Student'} handleName={handleName}/>
      
    </div>
 ); }
 export default App;
