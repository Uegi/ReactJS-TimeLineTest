import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MessageCard from '../MessageCard';

export default function TimeLine() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <MessageCard color='#2e7d32' label="成案" date="2022/08/03" aduit="自查" result="通過"/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <MessageCard color='#d32f2f' label="圓桌審查" date="2022/08/03" aduit="審查" result="未通過"/>
            <MessageCard color='#d32f2f' label="圓桌審查" date="2022/08/03" aduit="審查" result="未通過"/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='info'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <MessageCard color='#0288d1' label="架構師投票" date="2022/08/03" aduit="審查" result="審查中"/>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot/>
        </TimelineSeparator>
        <TimelineContent>
            <MessageCard color='#bdbdbd' label="應用架構審查Pre-ARB" date="2022/08/03" aduit="審查" result="未通行"/>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
