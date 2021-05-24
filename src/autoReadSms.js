export function autoReadSMS(cb) {
    // used AbortController with setTimeout so that WebOTP API (Autoread sms) will get disabled after 1min
    const controller = new AbortController();
    setTimeout(() => {
        controller.abort();
    }, 60 * 1000 * 2);

    async function main() {
        console.log("main is called");
        if ("OTPCredential" in window) {
            try {
                if (navigator.credentials) {
                    console.log("inside credentials");
                    try {
                        await navigator.credentials
                            .get({ signal: controller.signal, otp: { transport: ["sms"] } })
                            .then((content) => {
                                if (content) {
                                    alert(content);
                                    console.log("content", content);
                                    cb(content.code);
                                }
                            })
                            .catch((e) => {
                                console.log("error in then content");
                                console.log(e.message);
                                console.log(e.response);h
                            });
                    } catch (e) {
                        console.log("error in catch");
                        return;
                    }
                }
            } catch (err) {
                console.log("error in credentials");
                console.log(err);
            }
        }
    }

    main();
}
