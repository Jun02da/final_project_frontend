import MyPage from "../../src/mypage"
import Footer from "./Layout/footer"
import * as React from "react";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea } from '@mui/material';
import axios from "axios";


export default function Bookmark() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    //user 테이블에서 프로필 사진과 닉네임 가져오기
    axios.get("http://192.168.0.209:8090/user/all").then((response) => {
      const Udata = response.data;
      setUserData(Udata); // userData의 데이터 구조를 user 테이블의 데이터 구조로 변경
      console.log(userData)
    });
  }, []);


    return (
        <div>
            <MyPage />
              <div>
                <p style={{textAlign:"center"}}>나를 팔로우 하는 사람들</p>
              </div>
                <Grid container spacing={4} style={{margin: 10, padding: '200px', marginTop: -130}}>
                  {userData.map((userData, index) => (
                    <Grid item xs={10} sm={10} md={2} key={index}>
                      <Card sx={{ maxWidth: 200 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="120"
                            image={userData.proImage}
                            alt="qwerty"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {userData.nickname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {userData.introduce}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                
            <Footer />
        </div>
    )
}
