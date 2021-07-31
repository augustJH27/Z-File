import { useEffect, useRef } from 'react'
import { Button, useClipboard, VStack } from '@chakra-ui/react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

import { logout } from '../../../redux/actions/auth';
import { clearMessage } from '../../../redux/actions/message';
import { history } from '../../../helpers/history';

export default function Actions() {
  const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); //clear message when changing location
        });
    })

    const LogOut = () => {
        dispatch(logout());
    };

  const value = ''
  const { hasCopied } = useClipboard(value)

  const profileUrl = useRef(null)

  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus()
      profileUrl.current.select()
    }
  })

  return (
    <div>
    <VStack py={8} px={5} spacing={3}>
      <h1><strong>Welcome, {user && user.email}</strong></h1>
      <h1>Nama Lengkap: </h1>
      <h1>Alamat email: {user && user.email}</h1>
      <h1>User ID: {user && user.id}</h1>
      <Button w="full" variant="outline" color="brand.white" bg="brand.lime">
        <Link to='/beranda' onClick={LogOut}>
        Keluar
        </Link>
      </Button>
      <Button variant="outline" color="brand.grey" bg="brand.white">
        <Link to='/userpage' onClick={LogOut}>
        Kembali ke halaman utama
        </Link>
      </Button>
    </VStack>
    </div>
  )
}
