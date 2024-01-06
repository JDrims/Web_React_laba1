import clsx from "clsx";
import classes from "./Footer.module.css";
import "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <div className={classes.block_footer}>
          <div className={classes.block_description}>
              <div className={classes.logo}>
                <div className={classes.logo_ellipse}>
                  <div
                    className={clsx(
                      classes.logo_ellipse_text,
                      classes.non_select
                    )}
                  >
                    T
                  </div>
                </div>
                <div className={clsx(classes.logo_text, classes.non_select)}>
                  HealthCare
                </div>
              </div>
              <div className={classes.footer_text1}>
                HealthCare provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </div>
              <div className={classes.footer_text2}>
                ©HealthCare PTY LTD 2023. All rights reserved
              </div>
            </div>
          <div className={classes.footer_block_nav}>
              <a href="" className={classes.footer_title}>
                Company
              </a>
              <a href="" className={classes.footer_text3}>
                About
              </a>
              <a href="" className={classes.footer_text3}>
                Testimonials
              </a>
              <a href="" className={classes.footer_text3}>
                Find a doctor
              </a>
              <a href="" className={classes.footer_text3}>
                Apps
              </a>
          </div>
          <div className={classes.footer_block_nav}>
              <a href="" className={classes.footer_title}>
                Region
              </a>
              <a href="" className={classes.footer_text3}>
                Indonesia
              </a>
              <a href="" className={classes.footer_text3}>
                Singapore
              </a>
              <a href="" className={classes.footer_text3}>
                Hongkong
              </a>
              <a href="" className={classes.footer_text3}>
                Canada
              </a>
          </div>
          <div className={classes.footer_block_nav}>
              <a href="" className={classes.footer_title}>
                Help
              </a>
              <a href="" className={classes.footer_text3}>
                Help center
              </a>
              <a href="" className={classes.footer_text3}>
                Contact support
              </a>
              <a href="" className={classes.footer_text3}>
                Instructions
              </a>
              <a href="" className={classes.footer_text3}>
                How it works
              </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
