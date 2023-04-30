import React from "react";
import "react-dropdown/style.css";
import styled from "styled-components";

import { lecture } from "../../../Data/dataDocument";

const Document = () => {

  return (
    <SExercise>
      <div className="head">
        <h5>Document</h5>
      </div>
      <div className="documentbtn">
        <box-icon name="search" size="md"></box-icon>
        <input placeholder="Search..." />
        <button>Upload Document</button>
      </div>

      <div className="detail">
        {lecture.map((item, index) => {
          return (
            <div className="documentcontent" key={index}>
              <box-icon name="slider-alt" size="md"></box-icon>
              <a href={item.link}>{item.name}</a>
              <span>{item.date}</span>
              {item.date === "01/08/2021" ||
              item.date === "08/08/2021" ||
              item.date === "15/08/2021" ? (
                <box-icon
                  size="md"
                  style={{
                    marginLeft: "50px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                  }}
                  name="check-circle"
                ></box-icon>
              ) : (
                <box-icon
                  size="md"
                  style={{
                    marginLeft: "50px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                  }}
                  name="x-circle"
                ></box-icon>
              )}
            </div>
          );
        })}
      </div>
    </SExercise>
  );
};

export default Document;

const SExercise = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .head {
    margin-left: -2.2%;
    height: 70px;
    background-color: white;
    border: 2px solid gainsboro;
    /* text-align: center; */
    h5 {
      line-height: 70px;
      margin-left: 38%;
      font-weight: bolder;
    }
  }
  .documentbtn {
    width: 70%;
    margin-left: 7%;
    display: flex;
    gap: 1rem;
    box-icon {
      position: absolute;
      margin-left: 20px;
      margin-top: 20px;
    }
    input {
      width: 77%;
      padding-left: 70px;
      height: 70px;
      font-size: 20px;
      border: 0;
      border-radius: 10px;
      border: 1px solid gainsboro;
    }
    input:hover {
      border: 1px solid black;
    }

    button {
        border-radius: 10px;
        font-size: 20px;
        background-color: #6284ff;
        color: white;
        border: 0;
        padding: 0 10px;
      }
      button:hover {
        background-color: #0000aa;
      }
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .documentcontent {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      margin-left: 7%;
      width: 66.5%;
      display: flex;
      gap: 1rem;
      height: 80px;
      border-radius: 10px;
      background-color: white;
      align-items: center;
      border: 1px solid gainsboro;
      box-icon {
        margin-left: 20px;
      }
      a {
        font-size: 20px;
        color: blue;
        text-decoration: none;
      }
      span {
        font-size: 15px;
        margin-left: 60%;
      }
    }
  }
`;
