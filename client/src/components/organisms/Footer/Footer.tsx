import { PropsWithChildren } from "react";
import Styles from "./Footer.module.scss";

import logoEU from "../../../assets/imgs/EN_co_fundedvertical_RGB_POS_multi_bluetext.png";
import logo from "../../../assets/imgs/Logo_Color.png";
import { Copyright } from "../Copyright/Copyright";
import { Flex } from "../../atoms/Flex/Flex";
import { Link, useNavigate } from "react-router-dom";

type FooterProps = {};

export const Footer = ({}: PropsWithChildren<FooterProps>) => {
  const navigate = useNavigate();

  return (
    <footer>
      <Flex
        vertical
        gap={30}
        className={Styles.Footer}
        justify="center"
        align="center"
      >
        <Flex justify="space-between" className={Styles.socialMediasContainer}>
          <img
            src={logo}
            alt="Data space for smart cities logo"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          />
          <div>
            <div className={Styles.links}>
              <ul>
                <li>
                  <Link to={"https://www.ds4sscc.eu/home"} target="_blank">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://www.ds4sscc.eu/about/the-project"}
                    target="_blank"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://www.ds4sscc.eu/about-open-call"}
                    target="_blank"
                  >
                    Open Call
                  </Link>
                </li>
                <li>
                  <Link to={"https://www.ds4sscc.eu/pilots"} target="_blank">
                    Pilots
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to={"https://www.ds4sscc.eu/stakeholderforum"}
                    target="_blank"
                  >
                    Stakeholder Forum
                  </Link>
                </li>
                <li>
                  <Link to={"https://inventory.ds4sscc.eu/"} target="_blank">
                    Blueprint
                  </Link>
                </li>
                <li>
                  <Link to={"https://www.ds4sscc.eu/updates"} target="_blank">
                    News
                  </Link>
                </li>
                <li>
                  <Link to={"https://www.ds4sscc.eu/contact"} target="_blank">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Flex className={Styles.socialMedias} gap={"medium"}>
            <Link to={"http://twitter.com/ds4sscc"} target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>
            </Link>
            <Link
              to={"https://www.linkedin.com/company/ds4sscc"}
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </Link>
            <Link
              to={"https://www.youtube.com/channel/UCzzf4Ivfh1Tz8Ztd-WHKt2A"}
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className={Styles.FooterDescription}
        align="center"
        vertical
        gap={"small"}
      >
        <Flex align="center" gap={"large"}>
          <img src={logoEU} alt={"EU Funded"} />
          <p>
            DS4SSCC–DEP is funded by the European Union Digital Europe Work
            Programme 2021-2022 under Grant Agreement No. 101123342. Views and
            opinions expressed are however those of the author(s) only and do
            not necessarily reflect those of the European Union or the European
            Commission. Neither the European Union nor the European Commission
            can be held responsible for them
          </p>
        </Flex>
        <Copyright />
      </Flex>
      {/* <div className={Styles.Footer}>
        <div className={Styles.right}>
          <ul>
            <li>
              <a href="https://www.ds4sscc.eu/">ABOUT</a>
            </li>
            <li>
              <a href="https://www.ds4sscc.eu/partners">PARTNERS</a>
            </li>
            <li>
              <a href="https://www.ds4sscc.eu/news">NEWS</a>
            </li>
            <li>
              <a href="https://www.ds4sscc.eu/contact">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div> */}
    </footer>
  );
};
