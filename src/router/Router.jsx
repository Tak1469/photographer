import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from "styled-components";

import { About } from "../component/pages/About";
import { Home } from "../component/pages/Home";
import { Portfolio } from "../component/pages/Portfolio";
import { MainLayaout } from "../component/template/layout/MainLayout";
import { theme } from "../theme/theme";

export const Router = () => {
  const location = useLocation();

  const [pageAnimate, setPageAnimate] = useState();

  return (
    <>
      <GroupContainer component="div" >
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames="page"
          in={location.pathname !== location.previousPathname}
        >
          <Routes>
            <Route path="/" element={<MainLayaout />}>
              <Route index element={<Home />} onClick={() => setPageAnimate(!pageAnimate)} />
              <Route path="/portfolio" element={<Portfolio />} onClick={() => setPageAnimate(!pageAnimate)} />
              <Route path="/about" element={<About />} onClick={() => setPageAnimate(!pageAnimate)} />
            </Route>
          </Routes>
        </CSSTransition>
      </GroupContainer>
    </>
  );
}
const GroupContainer = styled(TransitionGroup)`
  .page-enter {
    display: block;
    opacity: 0;
    transform:  translateX(1000px);
  }
  
  .page-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity  500ms ease, transform  500ms ease;
  }
  
  .page-exit {
    opacity: 0;
    transform: translateX(0);
  }
  
  .page-exit-active {
    display: none;
    opacity: 0;
    transform: translateX(0);
    transition: opacity  500ms ease, transform  500ms ease;
  }

  `;