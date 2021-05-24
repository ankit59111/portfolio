import React from 'react';
import OtpInput from 'react-otp-input';

const VerifyInputWrapper = (props) => {
    const {otp,handleOtpChange} = props;
    return (
        <div>
            <OtpInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={4}
                separator={<span>&nbsp;</span>}
                containerStyle="verifyOtpCont__otpCont"
                isInputNum
                shouldAutoFocus
            />
        </div>
    )
}

export {VerifyInputWrapper}