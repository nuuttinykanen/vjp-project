import React from 'react';
import { CommentArea } from '../components/comment/CommentArea';
import './keskustelu.css';

function Keskustelu() {
  return (
    <div className='keskustelu'>
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

export default Keskustelu;