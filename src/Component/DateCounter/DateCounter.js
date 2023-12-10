import React, { useEffect, useRef, useState  } from 'react';
import Shape1 from "../../images/slider/shape.png";
import Shape2 from "../../images/slider/shape2.png";
import "./DateCounter.css"

const DateCounter = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    
      useEffect(() => {
        const calculateTimeLeft = () => {
          const targetDate = new Date('2023-12-16'); // Ngày đích đến
          const now = new Date().getTime();
          const difference = targetDate - now;
    
          if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
          } else {
            // Nếu ngày đích đã qua, bạn có thể thực hiện một hành động khác ở đây
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        };
    
        const interval = setInterval(calculateTimeLeft, 1000);
    
        return () => clearInterval(interval);
      }, []);
    return (
    <div className='dc-container'>
        <h2 className='dc-header'>
            <span className='shape-1'>
                <img src={Shape1}></img>
            </span>
            Thái & Bằng
            <span className='shape-2'>
                <img src={Shape2}></img>
            </span>
        </h2>
        <p>Lễ báo hỷ diễn ra vào ngày 16 tháng 12 năm 2023</p>
        <div className='countdown'>
        <h2>{timeLeft.days}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {timeLeft.hours} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {timeLeft.minutes} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {timeLeft.seconds} 
        </h2>
        <p/>
        <h2>
            Ngày&nbsp;&nbsp;&nbsp;&nbsp; Giờ&nbsp;&nbsp;&nbsp;&nbsp; Phút&nbsp;&nbsp;&nbsp;&nbsp; Giây
        </h2>
      </div>
      </div>
    );
  };
  
export default DateCounter;