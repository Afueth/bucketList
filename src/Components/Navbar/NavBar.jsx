
import './NavBar.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
function NavBar() {


const handleMobileIconClick = () => 
  {
  console.log("Mobile Icon Clicked");
}
const handleNotificationIconClick = () =>
  {
  console.log("Notification Icon Clicked");
}
const handleHomeIconClick = () =>
  {
  console.log("Home Icon Clicked");
}
const handleSearchIconClick =()=>
  {
 console.log("Search Icon CLicked");
}
const handleAccountIconClick = () =>
  {
    console.log("Account Icon Clicked");
  }

  return (
    <div className='navbar'>
     <MovieIcon onClick={handleMobileIconClick}/>
     <CircleNotificationsIcon onClick={handleNotificationIconClick}/>
     <HomeIcon onClick={handleHomeIconClick}/>
     <SearchIcon onClick={handleSearchIconClick}/>
     <AccountCircleIcon onClick={handleAccountIconClick}/>
    </div>
   
  )
}

export default NavBar