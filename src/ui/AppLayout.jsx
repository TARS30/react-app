import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow: auto;
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto auto;
  grid-template-columns: 26rem 1fr;
  @media (max-width: 768px) {
    grid-template-columns: auto;
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
