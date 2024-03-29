import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { SideMenu } from "../SideMenu";

export const MainLayaout = () => {

  return (
    <>
      <Layout>
        <SideMenu />
        <Outlet />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  font-family: ${theme.fonts.mainFont};
  color: ${theme.colors.mainFont};
  display: flex;
  min-height: 100vh;
`;

