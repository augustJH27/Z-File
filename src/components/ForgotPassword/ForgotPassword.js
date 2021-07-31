import React, { useState, useRef } from 'react';
import './Forgot.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from 'validator';
import { forget } from '../../redux/actions/auth';
import { clearMessage } from '../../redux/actions/message';
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from 'react';
import Nav from "../Nav/nav"

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Kolom tidak boleh kosong!
      </div>
    );
  }
};

const validNewEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Email Anda tidak valid!
      </div>
    );
  }
};

const validNewPassword = (value) => {
  if (value.length < 6 || value.lenght > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Password baru tidak boleh kurang dari 6 karakter
      </div>
    );
  }
};

const validConfirmNewPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Password baru tidak boleh kurang dari 6 karakter
      </div>
    )
  }
}

const ForgetPassword = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeNewEmail = (e) => {
    const newEmail = e.target.value;
    setNewEmail(newEmail);
  };

  const onChangeNewPassword = (e) => {
    const newPassword = e.target.value;
    setNewPassword(newPassword);
  };

  const onChangeConfirmNewPassword = (e) => {
    const confirmNewPassword = e.target.value;
    setConfirmNewPassword(confirmNewPassword);
  };

  const handleReset = (e) => {
    e.preventDefault();

    console.log('resethere');

    setSuccessful(false);

    form.current.validateAll();

    console.log(checkBtn.current.context._errors.length, 'reset')
    if (checkBtn.current.context._errors.length === 0) {
      console.log('berhasil');
      dispatch(forget(newEmail, newPassword, confirmNewPassword))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
      console.log('done')
    }
  };


  return (
    <Fragment>
      <Nav />
      <div className="forgot-background">
        <div className="login-container">
          <div className="wrapper">
            <div className="title"><span>Reset Kata Sandi</span></div>

            <Form onSubmit={handleReset} ref={form}>
              {!successful && (
                <div>
                  <div className="row">
                    <label htmlFor="email">Alamat e-mail</label>
                    <Input
                      type="text"
                      placeholder="Masukkan alamat e-mail"
                      name="email"
                      value={newEmail}
                      onChange={onChangeNewEmail}
                      validations={[required, validNewEmail]}
                    />
                  </div>

                  <div className="row">
                    <label htmlFor="password">Kata sandi baru</label>
                    <Input
                      type="password"
                      placeholder="Buat kata sandi baru"
                      name="password"
                      value={newPassword}
                      onChange={onChangeNewPassword}
                      validations={[required, validNewPassword]}
                    />
                  </div>

                  <div className="row">
                    <label htmlFor="confirm-password">Konfirmasi kata sandi baru</label>
                    <Input
                      type="password"
                      placeholder="Ketik ulang kata sandi baru"
                      name="password"
                      value={confirmNewPassword}
                      onChange={onChangeConfirmNewPassword}
                      validations={[required, validConfirmNewPassword]}
                    />
                  </div>

                  <div className="row button">
                    <button className="btn-reg-page">
                      <span>Reset kata sandi</span>
                    </button>
                  </div>
                </div>
              )}

              {message && (

                <div className={successful ? "alert alert-success" : "alert alert-danger"}
                  role="alert">
                  {message}</div>
              )}

              <CheckButton style={{ display: 'none' }} ref={checkBtn} />

              <div className="signup-link">
                Berhasil ganti password? <span onClick={() => dispatch(clearMessage())}><Link to='/masuk'>Masuk di sini</Link></span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgetPassword;