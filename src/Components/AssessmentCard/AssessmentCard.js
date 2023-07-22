import React from 'react';
import sty from './AssessmentCard.module.css'; // Import the module CSS
import {
  AssessmentIcon,
  CalendarIcon,
  ShareLinkIcon,
  ThreeDotsIcon,
} from '../../assets/icons/icons';

const AssessmentCard = ({ mode = 1 }) => {
  return (
    <div className={sty.assessmentCard}>
      <ThreeDotsIcon className={sty.dots} />
      <div className={sty.assignHead}>
        <AssessmentIcon /> {/* Render the assessment icon */}
        <div className={sty.titleData}>
          <p>Math Assessment</p> {/* Title of the assessment */}
          <div className={sty.subData}>
            <p className={sty.subTitle}>Job</p>
            {/* Subtitle for the assessment */}
            <CalendarIcon /> {/* Render the calendar icon */}
            <p className={sty.date}>20 Apr 2023</p>
            {/* Date */}
          </div>
        </div>
      </div>
      <div className={sty.assignFooter}>
        <div className={sty.footerValue}>
          {/* Duration value */}
          <div className={sty.val}>
            <p>00</p>
            <p>Duration</p>
          </div>
          {/* Questions value */}
          <div className={sty.val}>
            <p>00</p>
            <p>Questions</p>
          </div>
        </div>
        <div className={sty.footer}>
          <div className={sty.sharelink}>
            <ShareLinkIcon className={sty.shareIcon} />
            Share
          </div>
          <div className={sty.nameIcons}>
            {' '}
            {/* To Display Multiple forms of Icons  */}
            <p className={sty.nameIcon}>LP</p>
            {(mode === 2 || mode === 3) && (
              <p className={`${sty.nameIcon} ${sty.two}`}>LP</p>
            )}
            {mode === 3 && <p className={`${sty.nameIcon} ${sty.three}`}>LP</p>}
          </div>
          {mode === 3 && <p>+324</p>}
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
