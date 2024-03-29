import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import SectionWrapper from "./service.style";
import { openModal, closeModal } from "@redq/reuse-modal";
import Button from "common/components/Button";
import NextImage from "common/components/NextImage";
import { SERVICE_ITEMS } from "common/data/SaasClassic";
import Event1 from "common/assets/image/booklet/event-1.jpg";
import Event2 from "common/assets/image/booklet/event-2.jpg";
import Event3 from "common/assets/image/booklet/event-3.jpg";
import Event5 from "common/assets/image/booklet/event-5.jpg";
import Event6 from "common/assets/image/booklet/event-6.jpg";
import Event7 from "common/assets/image/booklet/event-7.jpg";
import Event8 from "common/assets/image/booklet/event-8.jpg";
import Event9 from "common/assets/image/booklet/event-9.jpg";
import Event10 from "common/assets/image/booklet/event-10.jpg";
import Event11 from "common/assets/image/booklet/event-11.jpg";
import Event12 from "common/assets/image/booklet/event-12.jpg";
import Event13 from "common/assets/image/booklet/event-13.jpg";
import Event14 from "common/assets/image/booklet/event-14.jpg";
import Event15 from "common/assets/image/booklet/event-15.jpg";
import Coin from "common/assets/image/saasClassic/inventional-1.png";

const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
const EventOne = () => <NextImage src={Event1} alt="Event - 1" />;
const EventTwo = () => <NextImage src={Event2} alt="Event - 2" />;
const EventThree = () => <NextImage src={Event3} alt="Event - 3" />;
const EventFive = () => <NextImage src={Event5} alt="Event - 5" />;
const EventSix = () => <NextImage src={Event6} alt="Event - 6" />;
const EventSeven = () => <NextImage src={Event7} alt="Event - 7" />;
const EventEight = () => <NextImage src={Event8} alt="Event - 8" />;
const EventNine = () => <NextImage src={Event9} alt="Event - 9" />;
const EventTen = () => <NextImage src={Event10} alt="Event - 10" />;
const EventEleven = () => <NextImage src={Event11} alt="Event - 11" />;
const EventTwelve = () => <NextImage src={Event12} alt="Event - 12" />;
const EventThirteen = () => <NextImage src={Event13} alt="Event - 13" />;
const EventFourteen = () => <NextImage src={Event14} alt="Event - 14 " />;
const EventFifteen = () => <NextImage src={Event15} alt="Event - 15 " />;

const ServiceSection = ({ secTitleWrapper, secHeading }) => {
  // modal handler
  const EventModal1 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventOne,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal2 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventTwo,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal3 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventThree,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal5 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventFive,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal6 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventSix,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal7 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventSeven,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  const EventModal8 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventEight,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal9 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventNine,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal10 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventTen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal11 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventEleven,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal12 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventTwelve,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal13 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventThirteen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal14 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventFourteen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  const EventModal15 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
        },
      },
      component: EventFifteen,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };

  return (
    <SectionWrapper id="event_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Heading
            {...secHeading}
            content=" EVENT SCHEDULE
            "
          />
        </Box>
        <Box>
          <div className="prime-cta" style={{ marginTop: "-40px" }}>
            <Link href="https://click.triton-series.com/Coin-Rivet-Invitational">
              <a target="_blank">
                <NextImage
                  className="img-cta"
                  style={{ cursor: "pointer" }}
                  src={Coin}
                  alt="Event - 1"
                />
              </a>
            </Link>
          </div>
        </Box>
        <Box>
          <div className="prime-cta">
            <Link href="https://click.triton-series.com/Coin-Rivet-Invitational">
              <a target="_blank">
                <Button
                  title="COIN RIVET INVITATIONAL HOMEPAGE"
                  className="primary-cta"
                />
              </a>
            </Link>
          </div>
        </Box>
        <Box className="non-desktop">
          <table className="tble">
            <thead>
              <tr>
                <th>
                  <h5>Time</h5>
                </th>
                <th>
                  <h5>Date</h5>
                </th>
                <th>
                  <h5>Day</h5>
                </th>
                <th>
                  <h5>Event</h5>
                </th>
                <th>
                  <h5>Buy-in</h5>
                </th>
                <th>
                  <h5>Stack</h5>
                </th>
                <th>
                  <h5>Level Time</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 PM</td>
                <td>
                  Monday <br /> 5 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal1} style={{ cursor: "pointer" }}>
                  #1 NLH - 8 Handed
                </td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Tuesday <br /> 6 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal1} style={{ cursor: "pointer" }}>
                  #1 NLH - 8 Handed
                </td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Tuesday <br /> 6 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal2} style={{ cursor: "pointer" }}>
                  #2 NLH - 6 Handed
                </td>
                <td>$30,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Wednesday <br /> 7 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal2} style={{ cursor: "pointer" }}>
                  #2 NLH - 6 Handed
                </td>
                <td>$30,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Wednesday <br /> 7 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal3} style={{ cursor: "pointer" }}>
                  #3 NLH - 6 Handed
                </td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Thursday <br /> 8 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal3} style={{ cursor: "pointer" }}>
                  #3 NLH - 6 Handed
                </td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Thursday <br /> 8 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal5} style={{ cursor: "pointer" }}>
                  #5 NLH - 8 Handed
                </td>
                <td>$75,000</td>
                <td>200,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Friday <br /> 9 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal5} style={{ cursor: "pointer" }}>
                  #5 NLH - 8 Handed
                </td>
                <td>$75,000</td>
                <td>200,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Saturday <br /> 10 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal6} style={{ cursor: "pointer" }}>
                  #6 NLH - Coin Rivet Invitational
                </td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>2 PM</td>
                <td>
                  Saturday <br /> 10 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal15} style={{ cursor: "pointer" }}>
                  #15 NLH - 8 HANDED
                </td>
                <td>$20,000</td>
                <td>200,000</td>
                <td>25 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Sunday <br /> 11 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal6} style={{ cursor: "pointer" }}>
                  #6 NLH - Coin Rivet Invitational
                </td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Sunday <br /> 11 Sep, 2022
                </td>
                <td>FT</td>
                <td onClick={EventModal15} style={{ cursor: "pointer" }}>
                  #15 NLH - 8 HANDED
                </td>
                <td>$20,000</td>
                <td>200,000</td>
                <td>25 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Sunday <br /> 11 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal7} style={{ cursor: "pointer" }}>
                  #7 Pot Limit Omaha
                </td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Monday <br /> 12 Sep, 2022
                </td>
                <td>FT</td>
                <td onClick={EventModal6} style={{ cursor: "pointer" }}>
                  #6 NLH - Coin Rivet Invitational
                </td>
                <td>$200,000</td>
                <td>300,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Monday <br /> 12 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal7} style={{ cursor: "pointer" }}>
                  #7 Pot Limit Omaha
                </td>
                <td>$25,000</td>
                <td>200,000</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Monday <br /> 12 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal8} style={{ cursor: "pointer" }}>
                  #8 NLH - Main Event
                </td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Tuesday <br /> 13 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal8} style={{ cursor: "pointer" }}>
                  #8 NLH - Main Event
                </td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Tuesday <br /> 13 Sep, 2022
                </td>
                <td>SINGLE</td>
                <td onClick={EventModal9} style={{ cursor: "pointer" }}>
                  #9 NLH 8-Handed TURBO
                </td>
                <td>$50,000</td>
                <td>200,000</td>
                <td>20 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Wednesday <br /> 14 Sep, 2022
                </td>
                <td>FT</td>
                <td onClick={EventModal8} style={{ cursor: "pointer" }}>
                  #8 NLH - Main Event
                </td>
                <td>$100,000</td>
                <td>250,000</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Wednesday <br /> 14 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal10} style={{ cursor: "pointer" }}>
                  #10 Short Deck Ante-Only
                </td>
                <td>$30,000</td>
                <td>100,000 x3</td>
                <td>35 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Thursday <br /> 15 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal10} style={{ cursor: "pointer" }}>
                  #10 Short Deck Ante-Only
                </td>
                <td>$30,000</td>
                <td>100,000 x3</td>
                <td>35 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Thursday <br /> 15 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal11} style={{ cursor: "pointer" }}>
                  #11 SD Ante-Only - 1 Bullet (PL PF)
                </td>
                <td>$40,000</td>
                <td>400,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Friday <br /> 16 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal11} style={{ cursor: "pointer" }}>
                  #11 SD Ante-Only - 1 Bullet (PL PF)
                </td>
                <td>$40,000</td>
                <td>400,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Friday <br /> 16 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal12} style={{ cursor: "pointer" }}>
                  #12 SD Ante-Only - 1 Bullet
                </td>
                <td>$50,000</td>
                <td>400,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Saturday <br /> 17 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal12} style={{ cursor: "pointer" }}>
                  #12 SD Ante-Only - 1 Bullet
                </td>
                <td>$50,000</td>
                <td>400,000</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>5 PM</td>
                <td>
                  Saturday <br /> 17 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal13} style={{ cursor: "pointer" }}>
                  #13 SD - Main Event
                </td>
                <td>$100,000</td>
                <td>100,000 x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Sunday <br /> 18 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal13} style={{ cursor: "pointer" }}>
                  #13 SD - Main Event
                </td>
                <td>$100,000</td>
                <td>100,000 x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>5 PM</td>
                <td>
                  Sunday <br /> 18 Sep, 2022
                </td>
                <td>1</td>
                <td onClick={EventModal14} style={{ cursor: "pointer" }}>
                  #14 Short Deck Ante-Only
                </td>
                <td>$25,000</td>
                <td>100,000 x3</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Monday <br /> 19 Sep, 2022
                </td>
                <td>FT</td>
                <td onClick={EventModal13} style={{ cursor: "pointer" }}>
                  #13 SD - Main Event
                </td>
                <td>$100,000</td>
                <td>100,000 x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Monday <br /> 19 Sep, 2022
                </td>
                <td>2</td>
                <td onClick={EventModal14} style={{ cursor: "pointer" }}>
                  #14 Short Deck Ante-Only
                </td>
                <td>$25,000</td>
                <td>100,000 x3</td>
                <td>30 Min</td>
              </tr>
            </tbody>
          </table>
        </Box>

        <Box className="non-mobile">
          <table>
            <thead>
              <tr>
                <th>
                  <h5>Time</h5>
                </th>
                <th>
                  <h5>Date</h5>
                </th>
                <th>
                  <h5>Day</h5>
                </th>
                <th>
                  <h5>Event</h5>
                </th>
                <th>
                  <h5>Buy-in</h5>
                </th>
                <th>
                  <h5>Stack</h5>
                </th>
                <th>
                  <h5>Level Time</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 PM</td>
                <td>
                  Mon <br /> 5 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal1} style={{ cursor: "pointer" }}>
                  #1 NLH - 8 Handed
                </td>
                <td>$25K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Tue <br /> 6 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal1} style={{ cursor: "pointer" }}>
                  #1 NLH - 8 Handed
                </td>
                <td>$25K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Tue <br /> 6 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal2} style={{ cursor: "pointer" }}>
                  #2 NLH - 6 Handed
                </td>
                <td>$30K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Wed <br /> 7 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal2} style={{ cursor: "pointer" }}>
                  #2 NLH - 6 Handed
                </td>
                <td>$30K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Wed <br /> 7 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal3} style={{ cursor: "pointer" }}>
                  #3 NLH - 6 Handed
                </td>
                <td>$50K</td>
                <td>200K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Thu <br /> 8 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal3} style={{ cursor: "pointer" }}>
                  #3 NLH - 6 Handed
                </td>
                <td>$50K</td>
                <td>200K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Thu <br /> 8 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal5} style={{ cursor: "pointer" }}>
                  #5 NLH - 8 Handed
                </td>
                <td>$75K</td>
                <td>200K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Fri <br /> 9 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal5} style={{ cursor: "pointer" }}>
                  #5 NLH - 8 Handed
                </td>
                <td>$75K</td>
                <td>200K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>2 PM</td>
                <td>
                  Sat <br /> 10 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal6} style={{ cursor: "pointer" }}>
                  #6 NLH - Coin Rivet Invitational
                </td>
                <td>$200K</td>
                <td>300K</td>
                <td>50 Min </td>
              </tr>

              <tr>
                <td>4 PM</td>
                <td>
                  Sat <br /> 10 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal15} style={{ cursor: "pointer" }}>
                  #6 NLH - 8 HANDED
                </td>
                <td>$20K</td>
                <td>200K</td>
                <td>25 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Sun <br /> 11 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal6} style={{ cursor: "pointer" }}>
                  #6 NLH - Coin Rivet Invitational
                </td>
                <td>$200K</td>
                <td>300K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  SUN <br /> 11 Sep
                </td>
                <td>FT</td>
                <td onClick={EventModal15} style={{ cursor: "pointer" }}>
                  #6 NLH - 8 HANDED
                </td>
                <td>$20K</td>
                <td>200K</td>
                <td>25 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Sun <br /> 11 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal7} style={{ cursor: "pointer" }}>
                  #7 Pot Limit Omaha
                </td>
                <td>$25K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Mon <br /> 12 Sep
                </td>
                <td>FT</td>
                <td onClick={EventModal6} style={{ cursor: "pointer" }}>
                  #6 NLH - Coin Rivet Invitational
                </td>
                <td>$200K</td>
                <td>300K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Mon <br /> 12 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal7} style={{ cursor: "pointer" }}>
                  #7 Pot Limit Omaha
                </td>
                <td>$25K</td>
                <td>200K</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Mon <br /> 12 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal8} style={{ cursor: "pointer" }}>
                  #8 NLH - Main Event
                </td>
                <td>$100K</td>
                <td>250K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Tue <br /> 13 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal8} style={{ cursor: "pointer" }}>
                  #8 NLH - Main Event
                </td>
                <td>$100K</td>
                <td>250K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Tue <br /> 13 Sep
                </td>
                <td>SINGLE</td>
                <td onClick={EventModal9} style={{ cursor: "pointer" }}>
                  #9 NLH 8-Handed TURBO
                </td>
                <td>$50K</td>
                <td>200K</td>
                <td>20 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Wed <br /> 14 Sep
                </td>
                <td>FT</td>
                <td onClick={EventModal8} style={{ cursor: "pointer" }}>
                  #8 NLH - Main Event
                </td>
                <td>$100K</td>
                <td>250K</td>
                <td>50 Min </td>
              </tr>
              <tr>
                <td>4 PM</td>
                <td>
                  Wed <br /> 14 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal10} style={{ cursor: "pointer" }}>
                  #10 Short Deck Ante-Only
                </td>
                <td>$30K</td>
                <td>100K x3</td>
                <td>35 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Thu <br /> 15 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal10} style={{ cursor: "pointer" }}>
                  #10 Short Deck Ante-Only
                </td>
                <td>$30K</td>
                <td>100K x3</td>
                <td>35 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Thu <br /> 15 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal11} style={{ cursor: "pointer" }}>
                  #11 SD Ante-Only - 1 Bullet (PL PF)
                </td>
                <td>$40K</td>
                <td>400K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Fri <br /> 16 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal11} style={{ cursor: "pointer" }}>
                  #11 SD Ante-Only - 1 Bullet (PL PF)
                </td>
                <td>$40K</td>
                <td>400K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Fri <br /> 16 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal12} style={{ cursor: "pointer" }}>
                  #12 SD Ante-Only - 1 Bullet
                </td>
                <td>$50K</td>
                <td>400K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Sat <br /> 17 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal12} style={{ cursor: "pointer" }}>
                  #12 SD Ante-Only - 1 Bullet
                </td>
                <td>$50K</td>
                <td>400K</td>
                <td>40 Min </td>
              </tr>
              <tr>
                <td>5 PM</td>
                <td>
                  Sat <br /> 17 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal13} style={{ cursor: "pointer" }}>
                  #13 SD - Main Event
                </td>
                <td>$100K</td>
                <td>100K x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Sun <br /> 18 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal13} style={{ cursor: "pointer" }}>
                  #13 SD - Main Event
                </td>
                <td>$100K</td>
                <td>100K x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>5 PM</td>
                <td>
                  Sun <br /> 18 Sep
                </td>
                <td>1</td>
                <td onClick={EventModal14} style={{ cursor: "pointer" }}>
                  #14 Short Deck Ante-Only
                </td>
                <td>$25K</td>
                <td>100K x3</td>
                <td>30 Min </td>
              </tr>
              <tr>
                <td>1 PM</td>
                <td>
                  Mon <br /> 19 Sep
                </td>
                <td>FT</td>
                <td onClick={EventModal13} style={{ cursor: "pointer" }}>
                  #13 SD - Main Event
                </td>
                <td>$100K</td>
                <td>100K x3</td>
                <td>45 Min </td>
              </tr>
              <tr>
                <td>3 PM</td>
                <td>
                  Mon <br /> 19 Sep
                </td>
                <td>2</td>
                <td onClick={EventModal14} style={{ cursor: "pointer" }}>
                  #14 Short Deck Ante-Only
                </td>
                <td>$25K</td>
                <td>100K x3</td>
                <td>30 Min</td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box>
          <div className="prime-cta">
            <Link href="https://cdn.triton-series.com/wp-content/uploads/2019/12/26184726/Cyprus-Booklet-TOURNAMENT-SCHEDULE.pdf">
              <a>
                <Button
                  title="DOWNLOAD TOURNAMENT STRUCTURES"
                  className="primary-cta"
                />
              </a>
            </Link>
          </div>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object,
};

ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "80px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#EBA800",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
  Row: {
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    ml: ["0", "-15px", "-20px", "-35px", "-35px"],
    mr: ["0", "-15px", "-20px", "-35px", "-35px"],
  },
  Col: {
    pl: ["15px", "15px", "25x", "35px", "35px"],
    pr: ["15px", "15px", "25px", "35px", "35px"],
    mb: "40px",
  },
  serviceTitleStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "17px"],
    fontWeight: "500",
    color: "#ff4361",
    mb: 0,
  },
  secDes: {
    fontSize: ["14px", "15px", "16px"],
    color: "#5d646d",
    lineHeight: "1.875",
    mt: "30px",
    ml: "auto",
    mr: "auto",
    width: "470px",
    maxWidth: "100%",
    textAlign: "center",
  },
};

export default ServiceSection;
