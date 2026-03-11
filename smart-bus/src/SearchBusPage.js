import "./SearchBusPage.css";

import { FaUserCircle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaBus } from "react-icons/fa";

function SearchBusPage(){

return(

<div className="home-container">

{/* Header */}

<div className="top-bar">

<div className="profile">
<FaUserCircle size={22}/> CHALO
</div>

<div className="location">
<MdLocationOn/> Chennai Sec
</div>

</div>

{/* Search */}

<div className="search-box">
<IoSearch className="icon"/>
Find and track your bus
</div>

{/* Stop */}

<div className="stop-card">

<div className="stop-title">
<MdLocationOn/> Kumbakonam
</div>

<div className="bus-row">

<div>
<FaBus/> <b>340K</b>
<p>To Chennai KCBT</p>
</div>

<div className="time">
11:48 AM
</div>

</div>

</div>

</div>

)

}

export default SearchBusPage;