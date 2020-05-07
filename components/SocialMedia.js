import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
const SocialMediaWrapper = styled.div`
  margin-bottom: 30px;
  text-align: center;
  a {
    font-size: 22px;
    margin-right: 20px;
    margin-left: 20px;
    display: inline-block;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    color: #000;

    &:hover {
      color: #000;
      -webkit-transform: translateY(-5px);
      transform: translateY(-5px);
    }
  }
`;

export default function SocialMedia() {
  return (
    <SocialMediaWrapper>
      <a target="_blank" href="#">
        <FaFacebookF></FaFacebookF>
      </a>
      <a target="_blank" href="#">
        <FaInstagram></FaInstagram>
      </a>

      <a target="_blank" href="#">
        <FaLinkedinIn></FaLinkedinIn>
      </a>
      <a target="_blank" href="#">
        <FaGithub></FaGithub>
      </a>
      <a target="_blank" href="#">
        <FaBehance></FaBehance>
      </a>
      <a target="_blank" href="#">
        <FaDribbble></FaDribbble>
      </a>
    </SocialMediaWrapper>
  );
}
