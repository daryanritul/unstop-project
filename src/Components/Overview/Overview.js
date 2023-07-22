import React from 'react';
import sty from './Overview.module.css'; // Import the module CSS

import {
  CaptivePortalIcon,
  ShareLinkIcon,
  UserIcon,
  ViewAgendaIcon,
} from '../../assets/icons/icons';

const Overview = ({ toggle }) => {
  return (
    <div className={`${sty.overview} ${toggle ? sty.open : sty.close}`}>
      {/* Total Assessment Overview Card */}
      <div className={`${sty.detailsCard} ${sty.ovr1}`}>
        <p>Total Assessment</p>
        <div className={sty.detail}>
          <ViewAgendaIcon className={sty.detailIcon} />
          <div className={sty.values}>
            <h2>34</h2>
          </div>
        </div>
      </div>

      {/* Candidates Overview Card */}
      <div className={`${sty.detailsCard} ${sty.ovr2}`}>
        <p>Candidates</p>
        <div className={sty.detail}>
          <UserIcon className={sty.detailIcon} />
          <div className={sty.values}>
            <h2>
              11,456 <p className={sty.subvalue}>+89</p>
            </h2>
            <p>Total Candidate</p>
          </div>
          <div className={sty.divider}></div>
          <div className={sty.values}>
            <h2>
              114 <p className={sty.subvalue}>+89</p>
            </h2>
            <p>Who Attempted</p>
          </div>
        </div>
      </div>

      {/* Candidates Source Overview Card */}
      <div className={`${sty.detailsCard} ${sty.ovr3}`}>
        <p>Candidates Source</p>
        <div className={sty.detail}>
          <CaptivePortalIcon className={sty.detailIcon} />
          <div className={sty.values}>
            <h2>
              11,000 <p className={sty.subvalue}>+89</p>
            </h2>
            <p>Email</p>
          </div>
          <div className={sty.divider}></div>
          <div className={sty.values}>
            <h2>
              145 <p className={sty.subvalue}>+89</p>
            </h2>
            <p>Social Share</p>
          </div>
          <div className={sty.divider}></div>
          <div className={sty.values}>
            <h2>
              145 <p className={sty.subvalue}>+89</p>
            </h2>
            <p>Unique Link</p>
          </div>
        </div>
      </div>

      {/* Total Purpose Overview Card */}
      <div className={`${sty.detailsCard} ${sty.ovr4}`}>
        <p>Total Purpose</p>
        <div className={sty.detail}>
          <ShareLinkIcon className={sty.detailIcon} />
          <div className={sty.values}>
            <h2>34</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
