import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow: auto;
  @media (max-width: 768px) {
    @media (max-width: 768px) {
      grid-template-columns: auto;
    }
    padding-top: 80px;
  }
`;

const StyledAppLayout = styled.div`
  position: relative;

  display: grid;
  height: 100%;
  grid-template-rows: auto auto;
  grid-template-columns: 24rem 1fr;
  html.menu-open & {
    height: 100vh;
    overflow-y: hidden;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div`
  gap: 3.2rem;
  display: flex;
  margin: 0 auto;
  max-width: 120rem;
  flex-direction: column;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
