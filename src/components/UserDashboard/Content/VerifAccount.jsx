import { FormControl, FormLabel, Grid, Input, Button, Checkbox} from '@chakra-ui/react';
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { verify } from '../../../redux/actions/auth';
import 'bootstrap/dist/css/bootstrap.min.css';


const AccountSetting = (props) => {

  const [IdNum, setIdNum] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [bornPlace, setBornPlace] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [loading, setLoading] = useState(false);

  const { isLoggedIn, user } = useSelector(state => state.auth);
  console.log(user, 'go');
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeIdNum = (e) => {
    const IdNum = e.target.value;
    setIdNum(IdNum);
  };

  const onChangeBirthDate = (e) => {
    const birthDate = e.target.value;
    setBirthDate(birthDate);
  };

  const onChangeBornPlace = (e) => {
    const bornPlace = e.target.value;
    setBornPlace(bornPlace);
  };

  const onChangeExpiryDate = (e) => {
    const expiryDate = e.target.value;
    setExpiryDate(expiryDate);
  };

  const handleVerify = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(verify(IdNum, birthDate, bornPlace, expiryDate, user.id))
      .then((response) => {
        return response
      })
      .catch(() => {
        setLoading(false);
      });

  }

  console.log(isLoggedIn, 'donate')


  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="IdNum">
        <FormLabel>NIK</FormLabel>
        <Input 
        focusBorderColor="brand.green" 
        type="text"
        value={IdNum}
        onChange={onChangeIdNum}
        placeholder="KTP harus memiliki 16 digits"
        required />
      </FormControl>
      <FormControl id="birthDate">
        <FormLabel>Tanggal Lahir</FormLabel>
        <Input
          focusBorderColor="brand.green"
          type="text"
          value={birthDate}
          onChange={onChangeBirthDate}
          placeholder="(Format: YYYYmmDD)"
          required />
      </FormControl>
      <FormControl id="bornPlace">
        <FormLabel>Tempat Lahir</FormLabel>
        <Input
          focusBorderColor="brand.green"
          type="text"
          value={bornPlace}
          onChange={onChangeBornPlace}
          placeholder="(ex: Lombok)"
          required />
      </FormControl>
      <FormControl id="expirydate">
        <FormLabel>Tanggal Kedaluarsa KTP</FormLabel>
        <Input
          focusBorderColor="brand.green"
          type="text"
          value={expiryDate}
          onChange={onChangeExpiryDate}
          placeholder="(Format: YYYYmmDD)"
          required />
      </FormControl>
      <Checkbox size="md" colorScheme="green">
        Silakan centang jika Anda sudah memiliki E-KTP
      </Checkbox>
        <Button
        onClick={handleVerify}
        disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>Update</span>
          </Button>

          {message && (
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          )}
    </Grid>
  )
}

export default AccountSetting;