import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';


export default function MessageCard(props) {
  return (
      <Card>
        <Grid container spacing={1}>
            <Grid item xs={1}>
                <Box
                    sx={{
                        width: 0.3,
                        height: 1,
                        backgroundColor: props.color,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <CardContent>
                    <Typography>
                        <label>{props.label}</label>
                    </Typography>
                    <hr/> 
                    <Typography variant="body2">
                        <label>審查日期:</label>
                        <font>{props.date}</font>
                        {"\u00A0 \u00A0 \u00A0"}
                        <label>{props.aduit+`結果`}:</label>
                        <font  color={props.color}>{props.result}</font>
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" color="success" startIcon={<ArticleIcon />}>
                    查閱審查詳情
                </Button>
                <Button variant="outlined" color="success" startIcon={<ArticleIcon />}>
                    查閱ADR
                </Button>   
            </Grid>
        </Grid>
      </Card>
  )
}
