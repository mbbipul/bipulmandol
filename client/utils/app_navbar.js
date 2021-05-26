import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import DeviceHubOutlinedIcon from '@material-ui/icons/DeviceHubOutlined';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import CastForEducationOutlinedIcon from '@material-ui/icons/CastForEducationOutlined';
import {  yellow } from '@material-ui/core/colors';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';

const color = yellow;

const leftNavItem = [
    {
        name: "Home",
        icon: <HomeOutlinedIcon style={{ color: color[500] }} />,
        link: "/"
    },
    {
        name: "About",
        icon: <VerifiedUserOutlinedIcon style={{ color: color[500] }} />,
        link: "/about"
    },
    {
        name: "Services",
        icon: <BusinessCenterOutlinedIcon style={{ color: color[500] }} />,
        link: "/about"
    },
    {
        name: "Experience",
        icon: <CastForEducationOutlinedIcon style={{ color: color[500] }} />,
        link: "/experience"
    },
    {
        name: "Projects",
        icon: <LayersOutlinedIcon style={{ color: color[500] }} />,
        link: "/projects"
    },
    {
        name: "Skills",
        icon: <DeviceHubOutlinedIcon style={{ color: color[500] }} />,
        link: "/skills"
    },
    {
        name: "Achievement",
        icon: <WbIncandescentOutlinedIcon style={{ color: color[500] }} />,
        link: "/achievement"
    },
    {
        name: "Education",
        icon: <SchoolOutlinedIcon style={{ color: color[500] }} />,
        link: "/education"
    },
    {
        name: "Contact",
        icon: <ForumOutlinedIcon style={{ color: color[500] }} />,
        link: "/contact"
    },
    {
        name: "Blog",
        icon: <PostAddOutlinedIcon style={{ color: color[500] }} />,
        link: "/blog"
    },
    {
        name: "Resume",
        icon: <ContactMailOutlinedIcon style={{ color: color[500] }} />,
        link: "/resume"
    }
];

export { 
    leftNavItem,
}