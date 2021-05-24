import React, { useEffect, useState } from "react";
import { autoReadSMS } from "./autoReadSms";
import { VerifyInputWrapper } from "./VerifyInputWrapper";

export default function ReadOtp() {
    const [otp, setOtp] = useState("");

    useEffect(() => {
        autoReadSMS(setOtp);
    }, []);

    const handleOtpChange = (value) => {
        setOtp(value);
        if (value.length === 4) {
            alert("otp verified successfully");
        }
    };

    return (
        <div className="App">
            <h1>Hello Otp Testing</h1>

            <VerifyInputWrapper otp={otp} handleOtpChange={handleOtpChange} />
        </div>
    );
}
