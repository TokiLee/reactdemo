import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
                <FooterLink to='/'>Filler Link</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>Annika</SocialLogo>
              <WebsiteRights>
                Annika © {new Date().getFullYear()} ALl rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
