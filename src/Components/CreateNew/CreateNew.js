import React from 'react';
import sty from './CreateNew.module.css'; // Import the module CSS
import { ArrowDownIcon, CrossIcon } from '../../assets/icons/icons';

// Some sample skills for demonstration purposes
const skills = ['UI/UX and Design', 'No of Question', 'Web Development'];

const CreateNew = ({ modalToggle, handleModalClose }) => {
  return (
    <div className={`${sty.createNew} ${modalToggle ? sty.open : sty.close}`}>
      <div className={sty.modal}>
        {/* Header section */}
        <div className={sty.modalHead}>
          <h3>Create New Assessment</h3>

          <CrossIcon
            className={sty.headIcon}
            onClick={() => handleModalClose()}
          />
        </div>
        {/* Main content section */}
        <div className={sty.modalData}>
          {/* Input box for the name of the assessment */}
          <div className={sty.inputBox}>
            <div className={sty.label}>Name of Assessment</div>
            <input placeholder="Type Here" className={sty.input} />
          </div>
          {/* Input box for the purpose of the assessment */}
          <div className={sty.inputBox}>
            <div className={sty.label}>Purpose of the test is</div>
            <div className={sty.input}>
              <p>Select</p>
              <ArrowDownIcon />
            </div>
          </div>
          {/* Input box for the description of the assessment */}
          <div className={sty.inputBox}>
            <div className={sty.label}>Description</div>
            <div className={sty.input}>
              <p>Select</p>
              <ArrowDownIcon />
            </div>
          </div>
          {/* Input box for skills */}
          <div className={sty.inputBox}>
            <div className={sty.label}>Skills</div>
            <div className={sty.skillInput}>
              {/* Mapping through the skills array */}
              {skills.map((skill, index) => (
                <div className={sty.skills} key={index}>
                  <p>{skill}</p>
                  {/* Cross icon for removing a skill */}
                  <CrossIcon className={sty.skillCross} />
                </div>
              ))}
            </div>
            <input
              placeholder="Type Here"
              className={`${sty.input} ${sty.input}`}
            />
          </div>
          {/* Input box for the duration of the assessment */}
          <div className={sty.inputBox}>
            <div className={sty.label}>Duration of Assessment</div>
            <input placeholder="HH:MM:SS" className={sty.input} />
          </div>
        </div>
        {/* Save button */}
        <button className={sty.saveBtn}>Save</button>
      </div>
    </div>
  );
};

export default CreateNew;
