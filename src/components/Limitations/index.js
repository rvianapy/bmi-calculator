import styles from "./styles.module.css";

import LimitationCard from "../LimitationCard/index";

import Gender from "../../assets/images/icon-gender.svg";
import Age from "../../assets/images/icon-age.svg";
import Muscle from "../../assets/images/icon-muscle.svg";
import Pregnancy from "../../assets/images/icon-pregnancy.svg";
import Race from "../../assets/images/icon-race.svg";

function Limitations() {
  const limitationProps = [
    {
      title: "Gender",
      text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
      title: "Age",
      text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    },
    {
      title: "Muscle",
      text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
      title: "Pregnancy",
      text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    },
    {
      title: "Race",
      text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    },
  ];

  return (
    <section className={styles.limitationsContainer}>
      <div className={styles.limitationsTopContainer}>
        <div className={styles.limitationsTitleContent}>
          <h2 className="heading-l">Limitations of BMI</h2>
          <p className="body-m">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <LimitationCard
          id="gender"
          image={Gender}
          title={limitationProps[0].title}
          text={limitationProps[0].text}
        />
      </div>

      <div className={styles.limitationsMiddleContainer}>
        <LimitationCard
          id="age"
          image={Age}
          title={limitationProps[1].title}
          text={limitationProps[1].text}
        />
        <LimitationCard
          id="muscle"
          image={Muscle}
          title={limitationProps[2].title}
          text={limitationProps[2].text}
        />
      </div>

      <div className={styles.limitationsBottomContainer}>
        <LimitationCard
          id="pregnancy"
          image={Pregnancy}
          title={limitationProps[3].title}
          text={limitationProps[3].text}
        />
        <LimitationCard
          id="race"
          image={Race}
          title={limitationProps[4].title}
          text={limitationProps[4].text}
        />
      </div>
    </section>
  );
}

export default Limitations;
