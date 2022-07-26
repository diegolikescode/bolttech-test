import styled from "styled-components";

/**
 *  TB: TOP BAR
 *  TD: TASK DETAILS
 *  PL: PROJECT LIST
 *  TL: TASK LIST
 * */

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 300px auto 430px;
  grid-template-rows: auto auto;

  grid-template-areas:
    "TB TB TB"
    "PL TL TD";

  height: 100vh;
`;
