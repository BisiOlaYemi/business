/* eslint-disable react/no-unescaped-entities */
import {
  TbDiscountCheck,
  HiSpeakerphone,
  GrResources,
  MdOutlineAutoGraph,
  FaRunning,
} from "../icons/icons";

const homepageSideBarLinks = [
  {
    text: "Why Placio",
    icon: <TbDiscountCheck className="w-6 h-6" />,
    url: "/whyplacio",
    extraLinks: [
      { text: "Places ", url: "/places" },
      { text: "Events ", url: "/events" },
      { text: "People ", url: "/people" },
    ],
  },
  {
    text: "Advertise",
    icon: <HiSpeakerphone className="w-6 h-6" />,
    url: "/advertise",
    extraLinks: [
      { text: "Places ", url: "/places" },
      { text: "Events ", url: "/events" },
      { text: "People ", url: "/people" },
    ],
  },
  {
    text: "Insights",
    icon: <MdOutlineAutoGraph className="w-6 h-6" />,
    url: "/insights",
    extraLinks: [
      { text: "Places ", url: "/places" },
      { text: "Events ", url: "/events" },
      { text: "People ", url: "/people" },
    ],
  },
  {
    text: "Resources",
    icon: <GrResources className="w-6 h-6" />,
    url: "resources",
    extraLinks: [
      { text: "Blog ", url: "/blog" },
      { text: "Placio Ai ", url: "/PlacioAi" },
    ],
  },
  {
    text: "Getting Started",
    icon: <FaRunning className="w-6 h-6" />,
    url: "/gettingstarted",
    extraLinks: [
      { text: "Places ", url: "/places" },
      { text: "Events ", url: "/events" },
      { text: "People ", url: "/people" },
    ],
  },
];

export default homepageSideBarLinks;
