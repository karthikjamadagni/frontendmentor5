import './App.css';
import images from '../assets/index.js';

const App = () => {
    return <>
    <div className="main__container">
        <div className="notifications__container">
            <div className="notification__header">
                <div className="notification__heading">
                    <div className='not'>Notifications</div>
                    <div className='three'>3</div>
                </div>
                <div className="mark__as__all__read">
                    Mark as all read
                </div>
            </div>
            <div className="notification__body">


                <div className="notifications">
                    <div className="notifications__left"><img src={images.avatar_mark_webber} alt="" /></div>
                    <div className="notifications__right">
                        <div className="upper__right__notification"><span className="commenters__name">Mark Webber</span> reacted to your recent post <span className='notification__event'>My first tournament today! </span><span className='red__dot'></span></div>
                        <div className="lower__right__notification__container">1m ago</div>
                    </div>
                </div>


                <div className="notifications">
                    <div className="notifications__left"><img src={images.avatar_angela_gray} alt="" /></div>
                    <div className="notifications__right">
                        <div className="upper__right__notification"><span className="commenters__name">Angela Gray</span> followed you <span className='red__dot'></span></div>
                        <div className="lower__right__notification__container">5m ago</div>
                    </div>
                </div>


                <div className="notifications">
                    <div className="notifications__left"><img src={images.avatar_jacob_thompson} alt="" /></div>
                    <div className="notifications__right">
                        <div className="upper__right__notification"><span className="commenters__name">Jacob Thompson</span> has joined your group <span className='notification__event'>Chess Club </span><span className='red__dot'></span></div>
                        <div className="lower__right__notification__container">1 day ago</div>
                    </div>
                </div>


                <div className="notifications">
                    <div className="notifications__left"><img src={images.avatar_rizky_hasanuddin} alt="" /></div>
                    <div className="notifications__right">
                        <div className="upper__right__notification"><span className="commenters__name">Rizky Hasanuddin</span> sent you a private message</div>
                        <div className="lower__right__notification__container">5 days ago</div>
                        <div className="lower__right__notification__comment">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game</div>
                    </div>
                </div>

                <div className="notifications">
                    <div className="notifications__left"><img src={images.avatar_kimberly_smith} alt="" /></div>
                    <div className="notifications__right">
                        <div className="upper__right__notification"><span className="commenters__name">Kimberly Smith</span> commented on your picture </div>
                        <div className="lower__right__notification__container">1 week ago</div>
                    </div>
                    <div className="chess__image"><img src={images.image_chess} alt="" /></div>
                </div>

                <div className="notifications">
                    <div className="notifications__left"><img src={images.avatar_nathan_peterson} alt="" /></div>
                    <div className="notifications__right">
                        <div className="upper__right__notification"><span className="commenters__name">Nathan Peterson</span> reacted to your recent post <span className='notification__event'>5 end-game stratagies to increase your win rate</span></div>
                        <div className="lower__right__notification__container">2 weeks ago</div>
                    </div>
                </div>


                <div className="notifications">
                    <div className="notifications__left"><img src={images.avatar_anna_kim} alt="" /></div>
                    <div className="notifications__right">
                        <div className="upper__right__notification"><span className="commenters__name">Anna Kim</span> left the group <span className='notification__event'>5 end-game stratagies to increase your win rate</span></div>
                        <div className="lower__right__notification__container">2 weeks ago</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
 
export default App;