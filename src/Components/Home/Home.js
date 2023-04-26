import Header from '../Header/Header';
import Tours from '../Tours/Tours';
import Footer from '../Footer/Footer';


function Home (props){


return(

<><Header/>
<Tours data={props.data}/>
<Footer/>
</>

);


}

export default Home;