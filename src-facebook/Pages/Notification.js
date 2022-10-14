import notify from './fb_notification.jpg';
const Notification=()=>{
    return(
        <>
        <div><br/><br/>
            <center><h3>You have got a notification</h3></center>
        </div>
        <div>
        <center><img src={notify} alt="notification page" className="notify" /></center>
        </div>
        </>
    );
}
export default Notification;