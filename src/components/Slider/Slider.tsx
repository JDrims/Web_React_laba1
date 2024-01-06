import clsx from "clsx";
import classes from "./Slider.module.css";
import img1 from "../../assets/illustration sec02 1.svg";
import img2 from "../../assets/illustration sec03 1.svg";
import img3 from "../../assets/Vector.svg";
import img4 from "../../assets/image_logo.svg";

function Slider() {
  return (
    <>
      <div className={classes.block2}>
        <img className={classes.block2_texts_img} src={img1} alt="" />
        <div className={classes.block2_texts}>
          <div className={classes.block2_texts_title}>
            Leading healthcare providers
          </div>
          <div className={classes.block2_texts_rectangle}></div>
          <div className={classes.block2_texts_text}>
            We provides progressive, and affordable healthcare, accessible on
            mobile and online for everyone. To us, it’s not just work. We take
            pride in the solutions we deliver
          </div>
          <button
            className={clsx(classes.block2_texts_btn, classes.non_select)}
          >
            Learn more
          </button>
        </div>
      </div>
      <div className={classes.block3}>
        <div className={classes.block3_texts}>
          <div className={classes.block3_texts_title}>
            Download our mobile apps
          </div>
          <div className={classes.block3_texts_rectangle}></div>
          <div className={classes.block3_texts_text}>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </div>
          <button
            className={clsx(classes.block3_texts_btn, classes.non_select)}
          >
            Download
            <img className={classes.vector} src={img3} alt="" />
          </button>
        </div>
        <img className={classes.block3_texts_img} src={img2} alt="" />
      </div>
      <div className={classes.block4}>
        <div className={classes.block_slider}>
          <div className={classes.block_slider_content}>
            <div className={classes.block_slider_top}>
              <div className={classes.block_slider_title}>
                What our customer are saying
              </div>
              <div className={classes.block_rectangle2}></div>
            </div>
            <div className={classes.block_slider_bottom}>
              <div className={classes.block_slider_left}>
                <div>
                  <img
                    className={clsx(
                      classes.block_slider_logo,
                      classes.non_select
                    )}
                    src={img4}
                    alt=""
                  />
                </div>
                <div className={classes.block_slider_logo_text}>
                  <div className={classes.block_slider_logo_text1}>
                    Edward Newgate
                  </div>
                  <div className={classes.block_slider_logo_text2}>
                    Founder Circle
                  </div>
                </div>
              </div>
              <div className={classes.block_slider_right}>
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </div>
            </div>
          </div>
        </div>
        <div className={classes.block_slider_nav}>
          <div className={classes.block_slider_nav_content}>
            <button
              className={clsx(
                classes.block_slider_btn_left,
                classes.block_slider_frame_noslid
              )}
            ></button>
            <div className={classes.block_slider_ellipses}>
              <button
                className={clsx(
                  classes.block_slider_ellipse_btn,
                  classes.block_slider_ellipse_btn_active
                )}
              ></button>
              <button
                className={clsx(
                  classes.block_slider_ellipse_btn,
                  classes.block_slider_ellipse_btn_noactive
                )}
              ></button>
              <button
                className={clsx(
                  classes.block_slider_ellipse_btn,
                  classes.block_slider_ellipse_btn_noactive
                )}
              ></button>
              <button
                className={clsx(
                  classes.block_slider_ellipse_btn,
                  classes.block_slider_ellipse_btn_noactive
                )}
              ></button>
            </div>
            <button
              className={clsx(
                classes.block_slider_btn_right,
                classes.block_slider_frame_slid
              )}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
