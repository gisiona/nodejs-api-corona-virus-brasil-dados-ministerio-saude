import React, { useState, useEffect, useCallback } from "react"
import { FaGithub } from "react-icons/fa";

import logo from "../../static/logo.png";
import theme from "../assets/themes/main";

import { getAllInformationsAboutSP } from "../services/corona-analytic";

import SEO from "../components/SEO";
import ContUp from "../components/CountUp";
import { Container, Header, Title, Logo, Informations, Footer, Link } from "./styles";

const Home = () => {
  const [state, setState] = useState({ cases: 0, deaths: 0, suspects: 0, refuses: 0 });

  const memoizedGetAllInformationsAboutSP = useCallback(async () => {
    const data = await getAllInformationsAboutSP();
    setState(data);
  }, []);

  useEffect(() => {
    memoizedGetAllInformationsAboutSP();
  }, [memoizedGetAllInformationsAboutSP]);

  return (
    <>
      <SEO />
      <Container>
        <Header>
          <Logo src={logo} />
          <Title>Coronavírus - Covid-19 - São Paulo (SP)</Title>
        </Header>
        <Informations>
          <ContUp label="Suspeitos" end={state.suspects} />
          <ContUp label="Confirmados" end={state.cases} />
          <ContUp label="Mortos" isHighlighted end={state.deaths} />
        </Informations>
        <Footer>
          <Link href="https://github.com/Gisiona/nodejs-api-corona-virus-brasil-dados-ministerio-saude" target="_blank">
            <FaGithub fill={theme.colors.accent} size={30} />
          </Link>
        </Footer>
      </Container>
    </>
  );
}

export default Home;
