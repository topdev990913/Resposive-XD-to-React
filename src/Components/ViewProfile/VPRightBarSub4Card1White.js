import React from "react";
import "./ViewProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VPRightBarSub4CardLogo1 from '../../assets/Path 666-white.png';
import VPRightBarSub4CardLogo2 from '../../assets/Path 672.png';
const VPRightBarSub4Card1White = () => {
    return (
        <div className="VPRightBarSub4Card_out">
            <img src={VPRightBarSub4CardLogo1} alt="VPRightBarSub4CardLogo1" className="VPRightBarSub4CardLogo1" />
            <img src={VPRightBarSub4CardLogo2} alt="VPRightBarSub4CardLogo2" className="VPRightBarSub4CardLogo2" />
            <div className="VPRightBarSub4Card_1_white">
                %62
            </div>
            <div className="VPRightBarSub4Card_2_1_white">
                Over - Under
            </div>
        </div>
    );
};
export default VPRightBarSub4Card1White;