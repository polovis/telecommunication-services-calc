import React from "react";

// Assets
import classes from "./Title.module.scss";

const Title = () => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Title}>
        Witamy na stronie cennika naszych usług telekomunikacyjnych.
      </div>
      <div className={classes.Subtitle}>
        W celu sprawdzenia aktualnej oferty prosimy o wybranie roku oraz
        zaznaczenie interesujących Państwa usług.
      </div>
    </div>
  );
};

export default Title;
