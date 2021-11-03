function getNavbar(){
    return `<div id="navBar" >
    <ul>
        <li><a id="home" href="home.html">Home</a></li>
        <li><a id="today" href="todays_special.html">Today's Special</a></li>
        <li><a id="latest" href="latest.html">latest</a></li>
        <button id="searchBtn">Search</button>
        <input id="search" placeholder="Search Receipe"/>
    </ul>
    <h1 id="heading">Food App </h1>
    </div>

    <div id="container">

    </div>`
}

export default getNavbar;