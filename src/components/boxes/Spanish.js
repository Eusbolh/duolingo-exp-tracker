import React from 'react';
import Divider from '@material-ui/core/Divider';
import Usa from './../../assets/flags/usa.png';
import France from './../../assets/flags/france.png';
import NL from './../../assets/flags/netherlands.png';
import Spain24 from './../../assets/flags/spain24.png';

const Spanish = () => {
  return (
    <div className="section">
      <div className="box">
        <div className="title spain">
          <img src={Spain24} className="icon-title" alt="" />
          Spanish
        </div>
        <Divider />
        <div className="content">
          <div className="element">
            <div className="language">
              <img src={Usa} className="icon" alt="" />
              English:
            </div>
            <div className="xp">
              200xp
            </div>
          </div>
          <div className="element">
            <div className="language">
              <img src={France} className="icon" alt="" />
              French:
            </div>
            <div className="xp">
              300xp
            </div>
          </div>
          <div className="element">
            <div className="language">
              <img src={NL} className="icon" alt="" />
              Dutch:
            </div>
            <div className="xp">
              10xp
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spanish;
