import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const {notifications} = props;
    return(
        <div className="section">
            <div className="card z-depth-0 style-form">
                <div className="card-content">
                    <span className="card-title color"><b>Notifications</b></span>
                    <ul className="notifications color">
                        { notifications && notifications.map( notification => {
                            return(
                                <li key={notification.id}> 
                                    <span className="color"><b>{notification.user}</b></span>&nbsp;
                                    <span className="color">{notification.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(notification.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Notifications;