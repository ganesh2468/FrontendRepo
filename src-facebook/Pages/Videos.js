import feed_image from './fb_feed_image.jpg';
const Videos=()=>{
    return(
        <>
        <div><br/><br/>
            <center><h3>Trending</h3></center>
        </div>
        <div>
        <center><img src={feed_image} alt="videos" className="fb_feed"/></center>
        </div>
        </>
    );
}
export default Videos;