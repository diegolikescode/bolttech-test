import styled from "styled-components";

export const Container = styled.div`
  grid-area: PL;

  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--tertiary);
  height: 100vh;
  width: 300px;
  color: var(--white);
`;

export const Header = styled.div`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: inherit;
  color: var(--white);
  font-weight: bold;
  font-size: 25px;
`;

export const ProjectsContainer = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--tertiary);
  height: 100vh;
  width: 200px;
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: inherit;
  margin-right: 15px;
`;

export const AddProjectButton = styled.button`
  height: 25px;
  width: 108px;
  border-radius: 20px;
  color: var(--white);
  font-size: 16px;
  background-color: var(--nice-purple);

  :hover {
    cursor: pointer;
    transition-duration: 0.2s;
    background-color: var(--dark-purple);
    font-weight: bold;
  }
`;
