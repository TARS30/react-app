import Row from "../ui/Row";
import Heading from "../ui/Heading";
import styled from "styled-components";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";

const Div = styled.div`
  @media (max-width: 768px) {
   display: flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   width: 100%;
  }
`;

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Div>
          <Heading as="h1">Dashboard</Heading>
          <DashboardFilter />
        </Div>
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
