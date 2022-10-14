import home from './homepage.jpg';
const Home=()=>{
    return(
        <>
        <div><br/><br/>
            <center><h3>Home Page</h3></center>
        </div>
        <div>
        <center><img src={home} alt="homepage" className="home" /></center>
        </div>
        </>
    );
}
export default Home;