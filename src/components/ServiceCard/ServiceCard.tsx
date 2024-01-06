import clsx from "clsx";
import classes from "./ServiceCard.module.css";
import React from "react";

function ServiceCard() {
  const cards = [
    {
      img: "/service1.svg",
      title: "Search doctor",
      text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      img: "/service2.svg",
      title: "Online pharmacy",
      text: "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      img: "/service3.svg",
      title: "Consultation",
      text: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      img: "/service4.svg",
      title: "Details info",
      text: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      img: "/service5.svg",
      title: "Emergency care",
      text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      img: "/service6.svg",
      title: "Tracking",
      text: "Track and save your medical history and health data",
    },
    {
      img: "/service3.svg",
      title: "text1",
      text: "text2",
    },
    {
      img: "/service5.svg",
      title: "text21",
      text: "text22",
    },
  ];

  const viewitem = 6;
  const [show, setShow] = React.useState(false);
  const onClick = () => setShow(!show);

  return (
    <>
      <div className={classes.block_service}>
        <div className={classes.block_servicecard_content}>
          <div className={classes.block_service_title}>Our services</div>
          <div className={classes.block_service_rectangle}></div>
          <div className={classes.block_service_text}>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </div>
        </div>
        <div className={classes.block_servicecard_list}>
          {cards.map((item, index) =>
            show ? (
              <>
                <div className={classes.block_card}>
                  <div className={classes.block_card_imgblock}>
                    <img src={item.img} alt="" />
                  </div>
                  <div className={classes.block_servicecard_title}>
                    {item.title}
                  </div>
                  <div className={classes.block_servicecard_text}>
                    {item.text}
                  </div>
                </div>
              </>
            ) : index < viewitem ? (
              <>
                <div className={classes.block_card}>
                  <div className={classes.block_card_imgblock}>
                    <img src={item.img} alt="" />
                  </div>
                  <div className={classes.block_servicecard_title}>
                    {item.title}
                  </div>
                  <div className={classes.block_servicecard_text}>
                    {item.text}
                  </div>
                </div>
              </>
            ) : null
          )}
        </div>
        <button
          className={clsx(classes.service_block_btn, classes.non_select)}
          onClick={onClick}
        >
          {show ? <>Hidden</> : <>View all</>}
        </button>
      </div>
    </>
  );
}

export default ServiceCard;
