import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getDetails } from "../helpers/getDetails";

import React from "react";

export const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("Instructions");
  let params = useParams();

  const fetchDetails = async () => {
    const findRecipe = await getDetails(params.name);
    setDetails(findRecipe);
    console.log(findRecipe)
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <>
      <DetailWrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt="" />
        </div>
        <Info>
          <Button
            className={activeTab === "Instructions" ? "active" : ""}
            onClick={() => setActiveTab("Instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "Ingredients" ? "active" : ""}
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </Button>
          {activeTab==='Instructions' && (
              <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
              </div>
          ) }
          {activeTab==='Ingredients'&&(
              <ul>
                {details.extendedIngredients?.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                )) }
              </ul>
          )}

        </Info>
      </DetailWrapper>
    </>
  );
};
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  boder: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;
