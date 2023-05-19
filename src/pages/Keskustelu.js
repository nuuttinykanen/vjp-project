import React from 'react';
import { CommentArea } from '../components/comment/CommentArea';
import './page.css';

function Etusivu() {
  return (
    <div className='etusivu'>
      <h1 className = 'title'>Keskustelu</h1>
      <div className = 'text'>
        <span className ='text-content'>
        Jaa tässä kokemuksesi jatkuvan istumisen haitoista. Onko sinulla esimerkiksi ollut vaikea sopeutua etätyöhön? Voit kertoa myös ratkaisuista ongelmiin.
        </span>

        <CommentArea />
      </div>
      <footer className = "footer">
      </footer>
    </div>
  );
}

export default Etusivu;