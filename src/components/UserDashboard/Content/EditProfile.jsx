import {
  Avatar,
  AvatarBadge,
  Badge,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  ModalOverlay,
  useDisclosure,
  FormControl, FormLabel, Grid, Input, Button } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// import CheckButton from 'react-validation/build/button';
import { update } from '../../../redux/actions/auth';
import 'bootstrap/dist/css/bootstrap.min.css';


const UpdateProfile = (props) => {
  const [userProfile, setUserProfile] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileImage = useRef(null)

  const openChooseImage = () => {
    profileImage.current.click()
  }

  const changeProfileImage = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const selected = event.target.files[0]

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => setUserProfile(reader.result)
      return reader.readAsDataURL(selected)
    }
    onOpen()
  }


  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  const { isLoggedIn, user } = useSelector(state => state.auth);
  console.log(user, 'bitch')
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeFullName = (e) => {
    const fullName = e.target.value;
    setFullName(fullName);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    setLoading(true);

    // form.current.validateAll();

    
      dispatch(update(email, fullName, user.id))
        .then((response) => {
          return response
          // props.history.push('/userpage');
        })
        .catch(() => {
          setLoading(false);
        });
    // } else {
    //   setLoading(false);
    // }
      }


  console.log(isLoggedIn, 'testing')
  // if (isLoggedIn) {
  //   return <Redirect to='/userpage' />;
  // }


  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <Avatar
    size="2xl"
    name=""
    cursor="pointer"
    onClick={openChooseImage}
    src={userProfile ? userProfile : ''}
  > 
    <AvatarBadge >
      <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
        />
      </svg>
    </AvatarBadge>
  </Avatar>
  <input
    hidden
    type="file"
    ref={profileImage}
    onChange={changeProfileImage}
  />
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Something went wrong</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>File not supported!</Text>
        <HStack mt={1}>
          <Text color="brand.green" fontSize="sm">
            Supported types:
          </Text>
          <Badge colorScheme="green">PNG</Badge>
          <Badge colorScheme="green">JPG</Badge>
          <Badge colorScheme="green">JPEG</Badge>
        </HStack>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
      <FormControl id="firstName">
        <FormLabel>Nama Lengkap</FormLabel>
        <Input 
        focusBorderColor="brand.green" 
        type="text" 
        value={fullName}
        onChange={onChangeFullName}
        placeholder="(ex: Adrian Martadinata)"
        required
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Alamat Email</FormLabel>
        <Input
          focusBorderColor="brand.green"
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="(ex: aaa@mail.com)"
          required
        />
      </FormControl>
        <Button 
        onClick={handleUpdate}
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

        {/* <CheckButton style={{ display: 'none'}} ref={checkBtn} /> */}
    </Grid>
  )
}

export default UpdateProfile;