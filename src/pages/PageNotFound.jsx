import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import styled from "styled-components";

const StyledPageNotFound = styled.main`
  display: flex;
  height: 100vh;
  padding: 4.8rem;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
`;

const Box = styled.div`
  /* box */
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
