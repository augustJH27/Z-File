import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import EditProfile from './EditProfile';
import CheckPoint from './CheckPoint';
import VerifAccount from './VerifAccount'

const Content = () => {
  const tabs = ['Edit Profil', 'Verifikasi Akun','CheckPoint']

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Tabs>
        <TabList px={5}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.green"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.green' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <EditProfile />
          </TabPanel>
          <TabPanel>
            <VerifAccount />
          </TabPanel>
          <TabPanel>
            <CheckPoint />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Content
