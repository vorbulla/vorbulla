import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";
import { MdMailOutline } from "react-icons/md";
const NavigationWrapper = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      line-height: 80px;
      margin-left: 25px;

      a {
        color: ${(props) => props.color};

        &:hover {
          text-decoration: none;
          color: ${(props) => props.color};
        }
      }
    }
  }
`;

export default function Navigation({ color }) {
  return (
    <NavigationWrapper color={color}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/solutions">Solutions</Link>
        </li>
        <li>
          <Link href="/company">Company</Link>
        </li>
        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>

        <Button
          component={Link}
          href="/contact"
          style={{
            marginLeft: 30,
            borderWidth: 2,
            textDecoration: "none",
            borderColor: color,
            color: color,
          }}
          color="primary"
          variant="outlined"
          disableElevation
          endIcon={<MdMailOutline></MdMailOutline>}
        >
          Get in touch
        </Button>
      </ul>
    </NavigationWrapper>
  );
}
