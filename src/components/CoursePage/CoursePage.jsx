import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
    const [lectureNumber,setLectureNumber] = useState(0)

    

    const lectures=[{
        _id:'1',
        title:'sample1',
        description: 'sampagakle',
        video:{
            url: 'ajflsgsdfgsdgkaj'
        },
        _id:'2',
        title:'sample2',
        description: 'sampklddge',
        video:{
            url: '4567ghjk'
        },
        _id:'3',
        title:'sample3',
        description: 'sasgasmpkle',
        video:{
            url: 'ajflsgagkaj'
        },}
    ]
  return <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
  {lectures && lectures.length > 0 ? (
    <>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>

        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${
            lectures[lectureNumber].title
          }`}
        />

        <Heading m="4" children="Description" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>

      <VStack>
        {lectures.map((element, index) => (
          <button
          onClick={()=>setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </>
  ) : (
    <Heading children="No Lectures" />
  )}
</Grid>
}

export default CoursePage