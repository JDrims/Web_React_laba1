import clsx from "clsx";
import classes from "./ArticleCard.module.css";
import React from "react";

function ArticleCard() {
  const cards = [
    {
      img: "/article_img1.svg",
      title: "Disease detection, check up in the laboratory",
      text: "In this case, the role of the health laboratory is very important to do a disease detection...",
    },
    {
      img: "/article_img2.svg",
      title: "Herbal medicines that are safe for consumption",
      text: "Herbal medicine is very widely used at this time because of its very good for your health...",
    },
    {
      img: "/article_img3.svg",
      title: "Natural care for healthy facial skin",
      text: "A healthy lifestyle should start from now and also for your skin health. There are some...",
    },
    {
      img: "/article_img3.svg",
      title: "text",
      text: "text",
    },
  ];

  const viewitem = 3;
  const [show, setShow] = React.useState(false);
  const onClick = () => setShow(!show);

  return (
    <>
      <div className={classes.block_element_bg}></div>
      <div className={classes.block_articlecard}>
        <div className={classes.block_articlecard_content}>
          <div className={classes.block_articlecard_title}>
            Check out our latest article
          </div>
          <div className={classes.block_rectangle3}></div>
          <div className={classes.block_articlecard_list}>
            {cards.map((item, index) =>
              show ? (
                <>
                  <div className={classes.block_card}>
                    <img
                      className={classes.block_card_img}
                      src={item.img}
                      alt=""
                    />
                    <div className={classes.block_card_title}>{item.title}</div>
                    <div className={classes.block_card_text}>{item.text}</div>
                    <button className={classes.block_card_btn}>
                      Read more
                      <img
                        className={classes.block_card_vector}
                        src="/Frame.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </>
              ) : index < viewitem ? (
                <>
                  <div className={classes.block_card}>
                    <img
                      className={classes.block_card_img}
                      src={item.img}
                      alt=""
                    />
                    <div className={classes.block_card_title}>{item.title}</div>
                    <div className={classes.block_card_text}>{item.text}</div>
                    <button className={classes.block_card_btn}>
                      Read more
                      <img
                        className={classes.block_card_vector}
                        src="/Frame.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </>
              ) : null
            )}
          </div>
          <button
            className={clsx(classes.block_articlecard_btn, classes.non_select)}
            onClick={onClick}
          >
            {show ? <>Hidden</> : <>View all</>}
          </button>
        </div>
      </div>
    </>
  );
}

export default ArticleCard;
