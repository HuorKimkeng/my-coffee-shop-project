import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box-one">
        <div className="up-footer-box-one">
          <div className="logo-img">
            <div className="sm-logo">
              <img src="/logo.png"></img>
            </div>
          </div>
          <div className="text-name">
            <p>The Coffee Shop</p>
          </div>
        </div>
        <div className="down-footer-box-one">
          <p>
            A coffee shop is a cosy retreat where the aroma of freshly brewed
            coffee fills the air, inviting patrons to unwind and savoir moments
            of tranquillity.
          </p>
        </div>
      </div>
      <div className="footer-box-two">
        <div className="follow-us">
          <p>Follow us </p>
        </div>
        <div className="socail-medai">
          <div className="facebook">
            <div className="fb-icon">
              <div className="fb-icon-img">
                <img src="/icon/Facebook.png"></img>
              </div>
            </div>
            <div className="fb-text">
              <p>ហួ៚ គីមកេង៚</p>
            </div>
          </div>

          <div className="facebook">
            <div className="fb-icon">
              <div className="fb-icon-img">
                <img src="/icon/Telegram-removebg-preview.png"></img>
              </div>
            </div>
            <div className="fb-text">
              <p>0967573913</p>
            </div>
          </div>

          <div className="facebook">
            <div className="fb-icon">
              <div className="fb-icon-img">
                <img src="/icon/instagram-removebg-preview.png"></img>
              </div>
            </div>
            <div className="fb-text">
              <p>hour_kimkeng</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-box-three">
        <div className="box-three-left">
          <div className="QRcode">
            <div className="QRcode-img">
              <img src="/icon/qr-code-image.png"></img>
            </div>
            <div className="qr-text">
              <p>Tea Shop App</p>
            </div>
          </div>
        </div>
        <div className="box-three-right">
          <div className="sm-box-three-right">
            <div className="sm-box-up">
              <div className="sm-box-up-img">
                <img src="/icon/play-store-removebg-preview.png"></img>
              </div>
              <div className="sm-box-up-text">
                <p>Play Store</p>
              </div>
            </div>
            <div className="sm-box-down">
              <div className="sm-box-down-img">
                <img src="/icon/app-store-removebg-preview.png"></img>
              </div>
              <div className="sm-box-down-text">
                <p>App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
