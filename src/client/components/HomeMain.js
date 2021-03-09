import React from 'react';
import '../stylesheets/HomePage.css'
import Container from '@material-ui/core/Container';
import HillImage from '../images/hill.jpg'


const HomeMain = () => {
    return (
        <Container id="HomeContent">
            <div id="HomeMainContainer"></div>
            <div id="HomeMainImage"><img src={HillImage} alt="depicting people picking up trash"></img></div>


            <div id="homeMainPara"><p>
                Looking for a way to give back to your community? Organizing a neighborhood cleanup is a great way to do just that while also making your neighborhood a better place to live. For a community cleanup to be successful, it must be well-planned. From picking the right project to recruiting enough volunteers, putting together an effective event takes effort.
            </p>
               
            </div>


        </Container>


    )

};
export default HomeMain