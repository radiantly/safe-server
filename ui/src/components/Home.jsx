import { GoArrowRight } from "react-icons/go";
import { BsChevronDoubleDown } from "react-icons/bs";
import NavBar from "./NavBar";
import styles from "../css/Home.module.css";
import ServerCard from "./ServerCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "../utils.js";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    gsap.to("." + styles.scrollWrap, {
      scrollTrigger: {
        trigger: "." + styles.header,
        toggleActions: "play pause resume reverse",
      },
      opacity: 0,
    });

    const serverCards = gsap.utils.toArray(`.${styles.cards} > div`);
    horizontalLoop(serverCards, { repeat: -1, paused: false });
  });

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <NavBar />
        <div className={styles.thriller}>
          <div className={styles.content}>
            <div className={styles.desc}>
              AI-powered server
              <br />
              monitoring and
              <br />
              management
            </div>
            <div className={styles.tagline}>
              Health checks. Server hardening.
              <br />
              Resource usage alerts. Never been easier.
            </div>
            <a href="#tryitout" className={styles.demo}>
              <div>See a demo</div>
              <GoArrowRight className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.scrollWrap}>
          <div>Scroll to learn more</div>
          <BsChevronDoubleDown className={styles.icon} />
        </div>
      </div>
      <div className={styles.ataglance}>
        <div className={styles.header}>Your servers at a glance</div>
        <div className={styles.cards}>
          <ServerCard
            name="Dev-UDPQuiz VPS"
            image="ubuntu"
            ramTot={2}
            ram={1.1}
            cpu={77}
          />
          <ServerCard
            name="Dev-Snap Server"
            image="redhat"
            ramTot={64}
            ram={14}
            cpu={10}
          />
          <ServerCard
            name="Production V-1"
            image="arch"
            ramTot={64}
            ram={33}
            cpu={23}
          />
          <ServerCard
            name="Debian NAS"
            image="debian"
            ramTot={16}
            ram={3}
            cpu={79}
          />
          <ServerCard
            name="testvps"
            image="pop"
            ramTot={16}
            ram={15}
            cpu={95}
            alertCount={2}
          />
          <ServerCard
            name="CLOUD WORKSPACE"
            image="windows"
            ramTot={32}
            ram={7}
            cpu={3}
          />
        </div>
      </div>
      <div className={styles.tryitout}>
        <div id="tryitout" className={styles.tryheader}>
          Try it out
        </div>
        <div className={styles.explanation}>
          Use the credentials{" "}
          <span className={styles.code}>demo@safeserver.tech</span> with the
          password <span className={styles.code}>DemoDemo1</span> to see the
          dashboard. Note that the service is still in beta and is being worked
          upon.
        </div>
        <a className={styles.demo} href="/auth/login">
          <div>Sign in now</div>
          <GoArrowRight className={styles.icon} />
        </a>
      </div>
      <div className={styles.footer}>
        &copy;2024 Safe Server. All Rights Reserved. Deployed on&nbsp;
        <a href="https://choreo.dev" target="_blank">
          Choreo
        </a>
        .
      </div>
    </div>
  );
}

export default Home;
