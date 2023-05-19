import React from 'react';
import { Comment } from './Comment.js'
import './comment_area.css';

/*
  Alue kommenttiominaisuudelle.
*/

function CommentArea() {
    const AUTHOR_TEXT_MAX_LENGTH = 12;
    const COMMENT_TEXT_MAX_LENGTH = 1000;
    
    // nykyinen inputtien pituus, alkaa nollasta
    const [currentCommentTextLength, setNewCommentTextLength] = React.useState(0);
    const [currentAuthorTextLength, setNewAuthorTextLength] = React.useState(0);

    // nykyiset inputit laatikoissa
    const [currentCommentText, setNewCommentText] = React.useState([]);
    const [currentAuthorText, setNewAuthorText] = React.useState([]);

    // statet sille, ovatko tekstit liian pitkiä tai tyhjiä => ei voida kommentoida, jos näin on
    const [authorTextTooLong, setAuthorTextTooLong] = React.useState(false);
    const [commentTextTooLong, setCommentTextTooLong] = React.useState(false);
    const [authorTextEmpty, setAuthorTextEmpty] = React.useState(false);
    const [commentTextEmpty, setCommentTextEmpty] = React.useState(false);

    // esimerkkisisältö kommenteille.
    const [comments, setComments] = React.useState([
     { commentText: "Hienoa, Kerttu. Löysin tänne, koska aloitin juuri etätyöt ja oireet tuntuvat jo muutaman viikon jälkeen. Täytyypä venytellä itsekin.", 
       authorText: "Simo", 
       likes: 2, 
       date: "14:15 16/5/2023",
       id: "14:15 16/5/2023240101845"
      },
     { commentText: "Minulla on ollut jatkuvia selkävaivoja etätyöni ansiosta. Muistan kuitenkin venytellä vähintään tunnin välein, mikä auttaa asiaan huomattavasti.", 
       authorText: "Kerttu", 
       likes: 21, 
       date: "5:40 14/5/2023",
       id: "5:40 14/5/202310402023"
     }
    ]);

    const onChangeCommentTextHandler = (event) => {
      setNewCommentText(event.target.value);
      setNewCommentTextLength(event.target.value.length);
    }

    const onChangeAuthorTextHandler = (event) => {
      setNewAuthorText(event.target.value);
      setNewAuthorTextLength(event.target.value.length);
    }

    function isCurrentAuthorTextTooLong() {
      if(currentAuthorTextLength > AUTHOR_TEXT_MAX_LENGTH) {
        return true;
      }
      return false;
    }

    function isCurrentCommentTextTooLong() {
      if(currentCommentTextLength > COMMENT_TEXT_MAX_LENGTH) {
        return true;
      }
      return false;
    }

    function isCurrentCommentTextEmpty() {
      if(currentCommentTextLength < 1) {
        return true;
      }
      return false;
    }

    function isCurrentAuthorTextEmpty() {
      if(currentAuthorTextLength < 1) {
        return true;
      }
      return false;
    }

    let updateCancelled = false;

    const onClickSubmitHandler = () => {
      if(isCurrentCommentTextTooLong() || isCurrentAuthorTextTooLong()) {
        // kommentointi peruttu
        if(isCurrentAuthorTextTooLong()) {
          setAuthorTextTooLong(true);
        } else {
          setAuthorTextTooLong(false);
        }
        if(isCurrentCommentTextTooLong()) {
          setCommentTextTooLong(true);
        } else {
          setCommentTextTooLong(false);
        }      
        updateCancelled = true;
      } else {
        setAuthorTextTooLong(false);
        setCommentTextTooLong(false);
      }

      if(isCurrentCommentTextEmpty() || isCurrentAuthorTextEmpty()) {
        // kommentointi peruttu
        if(isCurrentAuthorTextEmpty()) {
          setAuthorTextEmpty(true);
        } else {
          setAuthorTextEmpty(false);
        }

        if(isCurrentCommentTextEmpty()) {
          setCommentTextEmpty(true);
        } else {
          setCommentTextEmpty(false);
        }

        updateCancelled = true;
      } else {
        setAuthorTextEmpty(false);
        setCommentTextEmpty(false);
      }

      if(updateCancelled) {
        return;
      }

      const currentDate = new Date();
      const dateText = `${currentDate.getHours()}.${currentDate.getMinutes()} ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

      // uniikki tunniste kommenteille perustuen aikaan ja kirjoittajaan
      const commentId = dateText + `${currentDate.getSeconds()}${currentDate.getMilliseconds()}` + currentAuthorText;

      setComments((comments) => [{ commentText: currentCommentText, authorText: currentAuthorText, likes: 0, date: dateText, id: commentId }, ...comments]);
      
      setNewCommentTextLength(0);
      setNewAuthorTextLength(0);

      setNewCommentText([])
      setNewAuthorText([]);
    }

    // poista kommentti tietyllä tunnisteella
    const onClickDeleteHandler = (id) => {
        setComments((comments) => comments.filter(comment => comment.id !== id));
    }

    // luokat, joilla kommenttien pituustekstin väri muuttuu punaiseksi, jos se on liian pitkä
    const commentTextInfoClass = isCurrentCommentTextTooLong() ? "input-text-info warning" : "input-text-info";
    const authorTextInfoClass = isCurrentAuthorTextTooLong() ? "input-text-info warning" : "input-text-info";

    return(
      <div className = 'comment-area'>
          <span className ='input-area-title'>Kommentti</span>

          <textarea value={currentCommentText} onChange = {onChangeCommentTextHandler} className = 'comment-input-box' />

          <span className = {commentTextInfoClass}>
            {currentCommentTextLength} / {COMMENT_TEXT_MAX_LENGTH}
          </span>

          { commentTextTooLong && <span className="warning-message">Kommentti liian pitkä!</span>}
          { commentTextEmpty && <span className="warning-message">Aseta kommentti!</span>}

          <span className='input-area-title'>Nimimerkki</span>

          <span className={authorTextInfoClass}>
            {currentAuthorTextLength} / {AUTHOR_TEXT_MAX_LENGTH}
          </span>

          { authorTextTooLong && <span className="warning-message">Nimimerkki liian pitkä!</span>}
          { authorTextEmpty && <span className="warning-message">Aseta nimimerkki!</span>}
          
          <textarea value={currentAuthorText} onChange = {onChangeAuthorTextHandler} className = 'author-input-box' />

          <button onClick = {onClickSubmitHandler} className = "comment-button">Lähetä</button>

        <div className = 'comment-list'>
        {
          comments.map((comment) => (
            <div className = "comment-container" key={`${comment.id}`}>
              <Comment id={comment.id} commentText={comment.commentText} authorText={comment.authorText} likes={comment.likes} date={comment.date} onClickDeleteHandler={() => onClickDeleteHandler(comment.id)} />
            </div>
          ))
        }
        </div>
      </div>
    );
}

export { CommentArea }; 