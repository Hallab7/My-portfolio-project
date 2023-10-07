import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faStackOverflow,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faWhatsapp,
    url: "http://wa.me/+2349017912829",
  },
  {
    icon: faGithub,
    url: "https://github.com/Hallab7",
  },
  {
    icon: faLinkedin,
    url: "https://ng.linkedin.com/in/habeeb-ibrahim-861545255",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/ibrahim.habeebolawale",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com/official_hallab?igshid=YzU1NGVlODEzOA==",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={10}>
              {
                socials.map((social ) =>
                <a href={social.url} key={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>)
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>

              <a href="#contactme" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
