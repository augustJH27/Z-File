import React from "react";
import styled from "styled-components";
import Input from "./Input";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src='' alt="" />
      </LogoWrapper>
      <Form>
        <h3>Masuk</h3>
        <Input type="email" placeholder="Masukkan alamat e-mail" />
        <Input type="password" placeholder="Masukkan kata sandi" />
        <button>Masuk</button>
      </Form>
      <div>
        <h4>
          Belum mempunyai akun? <span><Link to='/daftar'>Daftar Sekarang</Link></span>
        </h4>
      </div>
    </Container>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #fff;
    margin-bottom: 2rem;
  }

  button {
    /* width: 75%; */
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1.5rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #007965;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #fff;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  /* min-width: 400px; */
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  background: transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #fff;
      cursor: pointer;
    }
  }
`;

export default Sidebar;
