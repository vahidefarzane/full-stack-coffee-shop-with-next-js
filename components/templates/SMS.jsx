const Sms = ({ hideOtpForm }) => {
  return (
    <>
      <div className="sms_wrapper">
        <p>کد تایید</p>
        <span className="sms_code-title">
          لطفاً کد تأیید ارسال شده را تایپ کنید
        </span>
        <span className="sms_number">09921558293</span>
        <input className="sms_input" type="text" />
        <button style={{ marginTop: "1rem" }} className="sms_btn">
          ثبت کد تایید
        </button>
        <p className="sms_send-again-code">ارسال مجدد کد یکبار مصرف</p>
      </div>
      <p onClick={hideOtpForm} className="sms_redirect-home-btn">
        لغو
      </p>
    </>
  );
};

export default Sms;
