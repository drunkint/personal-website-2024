import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Maintenance from "../components/Home/Maintenance/Maintenance";
import AboutGrace from "../components/Home/AboutGrace/AboutGrace";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowMe, setShowMe] = useState(true);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const isStartAnimationOn = false;
  const delta = -2;
  
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);


  useEffect(() => {
    setInterval(() => {
      setShowElement(true);
    }, 800);
  }, []);

  const meta = {
    title: "Angus Lee | 李旭紳 👉 I build digital solutions 💪",
    description: `Hi, I'm Angus Lee / Hsu Shen Lee / 李旭紳. I'm a computer science student in the University of Toronto, currently interning as a full stack software developer at IBM.`,
    image: "/img/cover-page.jpg",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://www.angusleehs.me/`} />
        <link rel="canonical" href={`https://www.angusleehs.me/`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Angus Lee / Hsu Shen Lee / 李旭紳" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <link rel="icon" type="image/ico" sizes="16x16" href="https://www.angusleehs.me/favicon.ico"></link>
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
      </Head>
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
          <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} delta={delta} />
          <MyName finishedLoading={context.sharedState.finishedLoading} delta={delta} />
          <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} delta={delta} />
          {ShowElement ? <AboutMe ref={aboutRef} /> : <></>}
          {/* {ShowElement ? <AboutGrace ref={aboutRef} /> : <></>} */}
          {ShowElement ? <WhereIHaveWorked /> : <></>}
          {ShowElement ? <SomethingIveBuilt /> : <></>}
          {ShowElement ? <GetInTouch /> : <></>}
          {ShowElement ? <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} />: <></>}
          {!isProd && <ScreenSizeDetector />}
        </div>
    </>
  );
}
