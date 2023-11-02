import React, { useState, useEffect } from 'react';
import './screen1-3.css';
import 'bootstrap/dist/css/bootstrap.css';
import diaryBox from '../../images/diarybox.png';
import readYourDiaryAPI from '../../service/diary/readYourDiaryAPI';
import { useParams } from "react-router-dom";

function Screen1n3() {

  const {yourID} = useParams();

  const [diaryData, setDiaryData] = useState({
    id: '',
    content: '',
    time: '',
  });


  readYourDiaryAPI(setDiaryData, yourID);

    const handleModalScroll = (event) => {
      event.stopPropagation();
    };

   
  return (
    <div className="center-container">
      <div className="image-container">
        <img src={diaryBox} alt="DiaryBox" />
      </div>
      <div className='text-container'>
        <label className='datewritten'>{diaryData.time}</label>
            <div className="scrollable-content" onWheel={handleModalScroll}>
                <label className='contents'>
                    {diaryData.content}
                </label>
            </div>
        <label className='diarywriter'>w. {diaryData.id}</label>
      </div>
    </div>
  );
}

export default Screen1n3;
