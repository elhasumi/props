
import Profile from './Components/profile/Profile';
function App() {
  const user ={
    fullName: "Mohammed Elhasumi",
    bio: "I am from libya",
    profession: "Developer",
    image: "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",

  };
 
  return (
    <div className="App" style={{fontSize: "80px", textAlign: "center", color: "blue"}}> 
     <Profile user={user} />
    
    </div>
  );
}

export default App;
