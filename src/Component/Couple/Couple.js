// Couple.js

import React from 'react';
import './Couple.css';
import Girl from "../../images/couple/img-1.jpg"
import Boy from "../../images/couple/img-2.jpg"
import Shape from "../../images/couple/shape.png"

const Couple = () => {
  return (
    <div className='couple'>
        <div className='couple-left'>
            <img src={Girl} alt="Girl" />
            <h2>Phương Thoa</h2>
            <p>
            Cô gái năng động trẻ trung, luôn hết mình trong công việc cũng như những bữa tiệc, phát thanh viên trong mọi cuộc vui. Để rồi số phận đưa đẩy cô đến với chàng trai hoàn toàn trái ngược.
            </p>
        </div>
        <div className="couple-center">
            <img src={Shape}></img>
        </div>
        <div className='couple-right'>
            <img src={Boy} alt="Boy" />
            <h2>Tiến Hạnh</h2>
            <p>
            Như một sự tương phản, chàng trai tính cách mặc kệ thiên hạ, như có một rào cản vô hình chặn mọi sự tiếp cận. Mọi thứ chỉ được thay đổi khi cô gái đến và phá vỡ được nó.
            </p>
        </div>
    </div>
  );
};

export default Couple;
