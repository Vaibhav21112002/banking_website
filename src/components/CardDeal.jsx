import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a better deal
                    <br className="sm:block hidden" /> in a few easy steps
                </h2>
                <p
                    className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}
                >
                    Donec suscipit dignissim nisi quis malesuada. Quisque
                    vehicula ultrices nulla ut aliquet. Nunc sed sapien vitae mi
                    tempor sodales sit am
                </p>
                <Button styles="mt-10" />
            </div>
            <div className={layout.sectionImg}>
                <img
                    src={card}
                    alt="card"
                    className="w-[100%] h-[100%] relative z-[5]"
                />
                <div className="absoulte z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absoulte z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
            </div>
        </section>
    );
};

export default CardDeal;
