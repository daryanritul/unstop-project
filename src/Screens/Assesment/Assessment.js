import React, { useState } from 'react';
import sty from './Assessment.module.css'; // Import the module CSS
import Overview from '../../Components/Overview/Overview';
import AssessmentCard from '../../Components/AssessmentCard/AssessmentCard.js';
import CreateNew from '../../Components/CreateNew/CreateNew';

import {
  AddIcon,
  BarChartIcon,
  FilterIcon,
  SearchIcon,
  SegmentIcon,
} from '../../assets/icons/icons';

const Assessment = ({ setMenu }) => {
  // State variables for handling modal and overview toggle
  const [overviewToggle, setOverviewToggle] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);

  // Function to handle opening the modal
  const handleModalOpen = () => {
    setModalToggle(true);
    document.body.classList.add('body-overflow-hidden'); // Add class to prevent body scrolling
  };

  // Function to handle closing the modal
  const handleModalClose = () => {
    setModalToggle(false);
    document.body.classList.remove('body-overflow-hidden'); // Remove class to re-enable body scrolling
  };

  return (
    <div className={sty.assessment}>
      {/* Render the CreateNew component and pass modalToggle and handleModalClose */}
      <CreateNew
        modalToggle={modalToggle}
        handleModalClose={handleModalClose}
      />

      <div className={sty.header}>
        <div className={sty.menuToggle} onClick={() => setMenu(true)}>
          <SegmentIcon className={sty.menuToggleIcon} />
        </div>
        <h3>Assessment</h3>
        <p className={sty.headNav}>My Assessments</p>
      </div>

      <div className={sty.mobileNav}>
        <p>My assessment</p>
        <p className={sty.unactive}>Unstop Assessment</p>
      </div>

      <p className={`${sty.title} ${sty.mobile}`}>Assessments Overview</p>

      {/* Render the Overview component and pass the overviewToggle */}
      <Overview toggle={overviewToggle} />

      <div className={sty.filterBox}>
        <p className={sty.title}>My Assessment</p>
        <div className={sty.iconBox}>
          <SearchIcon className={sty.filterIcons} />
          <FilterIcon className={sty.filterIcons} />
          <BarChartIcon
            className={sty.filterIcons}
            onClick={() => setOverviewToggle(!overviewToggle)} // Toggle the Overview on clicking the BarChartIcon
          />
        </div>
      </div>

      <div className={sty.assessmentBox}>
        {/* Component for adding a new assessment */}
        <div className={sty.newAssessment} onClick={() => handleModalOpen()}>
          <div className={sty.newAddIcon}>
            <AddIcon />
          </div>
          <h3>New Assessment</h3>
          <p>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>

        {/* Render multiple AssessmentCard components with different modes for Displays*/}
        <AssessmentCard />
        <AssessmentCard mode={2} />
        <AssessmentCard mode={2} />
        <AssessmentCard mode={3} />
        <AssessmentCard mode={3} />
        <AssessmentCard mode={2} />
        <AssessmentCard mode={3} />
        <AssessmentCard mode={3} />
      </div>
    </div>
  );
};

export default Assessment;
