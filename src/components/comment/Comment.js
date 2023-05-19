import React from 'react';
import * as AiIcons from 'react-icons/ai';
import './comment_area.css';


// Kommentti pitää sisällään kirjoittajan, päivämäärän, tekstin sekä tykkäysten määrän.


function Comment(props) {
    const [currentLikes, setLikes] = React.useState(props.likes);
    const [currentUserHasLiked, setUserHasLiked] = React.useState(false);

    
    // Tykkäämistoiminto. Joko yhden alas tai ylös, riippuen onko jo tykännyt.
    const onClickLikeHandler= () => {
        if(currentUserHasLiked && currentLikes > 0) {
            setLikes(currentLikes - 1);
            setUserHasLiked(false);
            return;
        }

        if(!currentUserHasLiked) {
            setLikes(currentLikes + 1);
            setUserHasLiked(true);
            return;
        }
    }

    // määrittää, näytetäänkö tykkäysnappi painettuna vai ei
    const commentLikeButtonClass = currentUserHasLiked ? 'comment-like-button pressed' : 'comment-like-button'

    return (
        <>
            <div className = "comment-info-container">
                <div className = "author-container">
                    {props.authorText}
                    <br/> 
                    {props.date}
                </div>
                <div className = "comment-interact-container">
                    <button onClick = {onClickLikeHandler} className = {commentLikeButtonClass}>
                        { currentUserHasLiked && <span>
                            <AiIcons.AiFillHeart/>{currentLikes}
                        </span>}
                        { !currentUserHasLiked && <span>
                            <AiIcons.AiOutlineHeart/>{currentLikes}
                        </span>}
                    </button>
                    <button onClick = {props.onClickDeleteHandler} className = "comment-delete-button">
                        <span>
                            <AiIcons.AiFillDelete/>
                        </span>
                    </button>
                </div>
            </div>
            <div className = "comment-text-container">{props.commentText}</div> 
        </>
    );
  }
  
  export { Comment };
  