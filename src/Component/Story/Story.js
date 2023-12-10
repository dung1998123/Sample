// Story.js
import React from 'react';
import './Story.css';
import story1 from "../../images/story/1.jpg"
import story2 from "../../images/story/3.jpg"
import story3 from "../../images/story/2.jpg"
import bg from "../../images/story/shape.png"

const Story = () => {
  return (
    <section id="story" className="story_content">
      <h4>Câu chuyện tình yêu</h4>
      <h2>Ngọt ngào đầy lãng mạn</h2>
      <div class="wpo-story-wrapper">
        <div class="wpo-story-item">
          <div class="wpo-story-img-wrap">
            <img class="wpo-story-img" src={story1} alt=""></img>
            {/* <img class="wpo-story-bg" src={bg} alt=""></img> */}
          </div>
        </div>
        <div class="wpo-story-content">
          <h2>Lần đầu gặp mặt</h2> <p></p>
          <span>Một ngày mùa xuân</span>
          <p>Họ đã gặp nhau trong một lớp học Tiếng Anh. Khi ấy Cô là trợ giảng, Anh là học viên. Kể từ đó, dây tơ hồng định mệnh vô hình đã buộc họ với nhau mà chẳng một ai hay.</p>
        </div>
      </div>
      <div class="wpo-story-wrapper">
          <div class="wpo-story-content2">
            <h2>Lời tỏ tình</h2> <p></p>
            <span>25/07/2017</span>
            <p>Vào một cuộc hẹn không thể bình thường hơn giữa hai người, cùng nhau ăn tối và dạo quanh Hồ Tây, Hà Nội. Cùng vào ngày hôm đó Anh đã ngỏ lời muốn Cô trở thành “bạn gái”, dây tơ hồng cứ thế siết chặt hơn, hai người nhẹ nhàng bước vào một mối quan hệ chính thức. </p>
          </div>
          <div class="wpo-story-item">
            <div class="wpo-story-img-wrap">
              <img class="wpo-story-img2" src={story2} alt=""></img>
              {/* <img class="wpo-story-bg" src={bg} alt=""></img> */}
            </div>
          </div>
      </div>
      <div class="wpo-story-wrapper">
        <div class="wpo-story-item">
          <div class="wpo-story-img-wrap">
            <img class="wpo-story-img" src={story3} alt=""></img>
            {/* <img class="wpo-story-bg" src={bg} alt=""></img> */}
          </div>
        </div>
        <div class="wpo-story-content">
          <h2>Cầu hôn</h2> <p></p>
          <span>24/12/2022</span>
          <p>Đủ nắng hoa sẽ nở, đủ yêu thương hạnh phúc sẽ đong đầy.  Sau hơn 5 năm bên nhau, Anh đã bí mật chuẩn bị một màn cầu hôn bất ngờ cho người con gái. Cô said Yes, chiếc nhẫn lấp lánh được Anh đeo lên tay Cô, một trang mới bắt đầu.</p>
        </div>
      </div>
    </section>
  );
};

export default Story;