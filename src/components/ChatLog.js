// import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry'

const ChatLog = ({entries, updateLiked}) => {
    
    const getChatsJSX = (entries) => {
        return entries.map((chat) => {
            return(
                <ChatEntry
                    key={chat.id}
                    id={chat.id}
                    sender={chat.sender}
                    body={chat.body}
                    timeStamp={chat.timeStamp}
                    liked={chat.liked}
                    updateLiked={updateLiked}

                />
            )
        })
    }
    
    return (
        <ul>{getChatsJSX(entries)}</ul>
    );
};
ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
        })
    ).isRequired,
    updateLiked: PropTypes.func.isRequired
};

export default ChatLog;