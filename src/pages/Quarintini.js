import React from 'react'
import { Button } from '@material-ui/core';
import Header from '../components/header'
import Buttons from '../components/Buttons'
import GitHubIcon from "@material-ui/icons/GitHub"
import { IconButton } from "@material-ui/core"
import Slide from "@material-ui/core/Slide"

class Quarintini extends React.Component {
  render() {
    return(
<div className='drinkstop'>
<Header />
<Slide direction="up" in="true" timeout={1000}>
<h1 style={{textAlign: 'center'}}>Quarintini!</h1>
</Slide>
<div className='drinkspic'>
<Slide direction="up" in="true" timeout={1000}>
<img src='https://media.giphy.com/media/v3PpLOIiSR7RhDDDGv/giphy.gif
'></img>
</Slide>


</div>
<div className='drinksbutton'>
<Slide direction="up" in="true" timeout={1000}>
<IconButton href='https://github.com/grace-shopper-peeps/drinks'><GitHubIcon /></IconButton>
</Slide>
</div>
<br/>
<div className='drinkstext'>
<Slide direction="up" in="true" timeout={1000}>
  <p style={{width: '800px', height: '400px'}}>
    <div style={{border: 'solid black', backgroundColor: 'white'}}>
  Fully functional e-commerce website built in a team of 3 selling drinks built in a time limit of 7 days. Our team discussed a strategy to developing the database as well as things we would all like to see in the project. I Developed front-end components to display store’s inventory, users, orders, admins as well as creating ways to upgrade users status, create and delete orders, products and users. All of this was done using JavaScript, React, React Bootstrap, Stripe & Redux. Implemented back-end routes to maintain current inventory, orders, users and database using Redux, Express, & Sequelize
   </div>
   </p>

</Slide>
</div>
<Buttons />
</div>
    )
  }
}
export default Quarintini