import clsx from "clsx";
import classes from "./Header.module.css";
import img1 from "../../assets/header illustration 1.svg";

function Header() {
  return (
    <>
      <header>
        <div className={classes.logo}>
          <div className={classes.logo_ellipse}>
            <div
              className={clsx(classes.logo_ellipse_text, classes.non_select)}
            >
              T
            </div>
          </div>
          <div className={clsx(classes.logo_text, classes.non_select)}>
            HealthCare
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a className={classes.active_page} href="">
                Home
              </a>
            </li>
            <li>
              <a href="">Find a doctor</a>
            </li>
            <li>
              <a href="">Apps</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.block1}>
        <div className={classes.block1_texts}>
          <div className={classes.block1_texts_title}>
            Virtual healthcare for you
          </div>
          <div className={classes.block1_texts_text}>
            Our service provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </div>
          <button
            className={clsx(classes.block1_texts_btn, classes.non_select)}
          >
            Consult today
          </button>
        </div>
        <img src={img1} className={classes.block1_texts_img} alt="" />
      </div>
    </>
  );
}

export default Header;
