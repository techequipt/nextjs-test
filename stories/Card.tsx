/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { BsFillGearFill, BsGearFill } from "react-icons/bs";

type ThemeProps = {
  theme?: {
    colors: {
      background: string;
      text: string;
    };
  };
};

const StyledCard = styled.div<ThemeProps>`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #cccccf;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.background};
  padding: 17px 22px;
  /* color: #160f2c; */
  color: ${({ theme }) => theme.colors.text};

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 568px) {
    flex-direction: column;
  }
`;

const StyledInfo = styled.div`
  display: flex;

  .card-image {
    margin: 0px 12px;
    width: 142px;
    height: auto;
  }

  .card-container {
    margin-left: 21px;
    padding: 1px;
    max-width: 400px;

    .title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .excerpt {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .description {
      font-size: 16px;
      color: #9793a1;
    }

    @media only screen and (max-width: 400px) {
      margin-left: 0px;
    }
  }

  @media only screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledProcess = styled.div`
  margin: 2px 18px;
  width: 21%;

  .progress-text {
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-bottom: 12px;
    font-size: 18px;

    & .icon {
      margin-right: 9px;
    }
  }

  .progress-bar {
    background-color: #bbbabf;
    width: 100%;
    height: 7px;
    padding: 2px;
    border-radius: 50px;
    margin-bottom: 20px;

    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & .progress-bar-circle {
      background-color: #ffb96a;
      width: 50%;
      height: 100%;
      margin: -1px;
      padding: 2px;
      border-radius: inherit;

      /* flex */
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    @media only screen and (max-width: 400px) {
      align-items: center;
    }
  }

  .status-details {
    tr {
      td {
        font-weight: 600;
      }
      & td:last-of-type {
        padding-left: 40px;
        color: #bbbac1;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    width: 100%;
    margin: 18px 0;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 18px 0;
  }

  @media only screen and (max-width: 568px) {
    width: 100%;
    margin: 18px 0;
  }
`;

export const Card = () => {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledInfo>
        <div className="card-header">
          <img className="card-image" src="/graphic.svg" alt="Test" />
        </div>
        <div className="card-container">
          <div className="title">Pipeline Name</div>
          <div className="excerpt">Your pipeline is being configured</div>
          <div className="description">
            The build process can take up to two hours. We will send you an
            email when setup is complete.
          </div>
        </div>
      </StyledInfo>
      <StyledProcess>
        <div className="progress">
          <div className="progress-text">
            {theme === "light" ? (
              <BsFillGearFill color="#160F2C" className="icon" />
            ) : (
              <BsGearFill className="icon" />
            )}
            In Progress
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-bar-circle" />
            </div>
          </div>
        </div>
        <table className="status-details">
          <tr className="status">
            <td>Status: </td>
            <td>Building</td>
          </tr>
          <tr className="time-remaining">
            <td>Time remaining: </td>
            <td>1 hour</td>
          </tr>
        </table>
      </StyledProcess>
    </StyledCard>
  );
};
