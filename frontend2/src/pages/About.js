import React,{useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Image1 from '../images/aboutusimg1.jpg'
import Image2 from '../images/aboutusimg2.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const imgstyle={
    maxWidth:'100%',
}

export default function About(){
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    return <Grid container spacing={2} style={{paddingTop:'90px',paddingRight:'20%',paddingLeft:'20%'}}>
        <Grid item xs={12} data-aos="fade-right" ><Typography variant='h2' component='p'>About IIPE</Typography></Grid>
        <Grid item xs={12} md={6} data-aos="fade-right"><img style={imgstyle} src={Image1} alt='iipeimg1'/></Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
        <Typography variant='body1'>Indian Institute of Petroleum and Energy (IIPE), is a Petroleum University
         established in 2016, in Visakhapatnam, Andhra Pradesh. 
         IIPE is offering undergraduate courses in Petroleum and Chemical Engineering. 
         Recently the Parliament has passed Indian Institute of Petroleum and Energy Bill, 2017 which has declared the 
         institute as an institution of National Importance.The university
          has been allotted 210 acres (85 ha) of land in Vangali Village, near Sabbavaram mandal, Vishakhapatnam. IIPE has
         collaborated with oil majors like HPCL, IOCL, ONGC, GAIL, OIL, OIDB, BPCL, and the Ministry of 
         Industry and Commerce and with an academic mentorship from IIT-Kharagpur till 2019.
         As of now the maximum capacity for each course is 60 seats.</Typography>
        </Grid>
        <Grid item xs={12}><Typography variant='body1'>
        The Minister of State (I/C) for Petroleum & Natural Gas, Shri Dharmendra Pradhan launched the website of Indian
         Institute of Petroleum & Energy (IIPE), Visakhapatnam on 27 May 2016.It is established under Andhra
        Pradesh Reorganization Act, 2014 under the aegis of Ministry of Petroleum and Natural
        Gas, Government of India.
        A strong need for setting up a domain specific Institute recognizing the challenges
        to meet the quantitative gap in supply of skilled manpower for the industry as well as for
        research in emerging areas like Shell Gas, Coal Bed Methane, Gas Hydrates, Renewable
        Energy and Gas etc. has been felt. Also considering the rapid innovations and
        developments of new technology in the energy sector, the IIPE is expected to keep pace
        with new developments with enough room to grow. Considering all this, Visakhapatnam is 
        felt as the right location for setting up IIPE.
        </Typography></Grid>
        <Grid item xs={12} md={6}>
        <Typography variant='body1' data-aos="fade-right">
        Petroleum engineering is the branch of engineering with primary focus 
        on exploration and production of oil & gas. The objective of the programme is to prepare graduates for 
        professional practice in industry in the field of petroleum engineering technology with emphasis on upstream activities 
        that encompass exploration, reservoir and production. The programme intends to create technical professionals who are fit 
        to take on engineering responsibilities across the entire value-chain in the Oil & Gas Industry a specialization that has 
        seen growing demand in the recent years. The programme is designed to develop skills and understanding in the fundamental 
        aspects of petroleum engineering and apply best global 
        practices in the oil & gas sector fields of natural gas processing, gas transportation and gas utilization techniques.
        Whereas Chemical Engineering aims to develop competent chemical engineers with specific emphasis on industry centric talent requirements. 
        The programme plans to expose the students to the fundamentals of Chemical Engineering and instill innovative thinking to solve the 
        problems related to energy, environment, etc. This programme intends to create professionals who can fit in well in a dynamic sector 
        where they come across various technological advancements. 
        During the course, emphasis will be laid to foster student's ability to deal with complex problems in multidisciplinary situations.
        </Typography>
        </Grid>
        <Grid item xs={12} data-aos="fade-left" md={6}><img style={imgstyle} src={Image2} alt='iipeimg2'/></Grid>
        <Grid item xs={12}><Typography variant='h3' data-aos="fade-right" component='p'>Admission Criteria</Typography></Grid>
        <Grid item xs={12} style={{marginBottom:'60px'}}>
            <ul>
                <li><Typography variant='body1'>A candidate should have cleared JEE Advanced to seek admission in IIPE.</Typography></li>
                <li><Typography variant='body1'>Along with IITs and RGIPT, IIPE takes admissions on the basis of ranks in JEE Advanced.</Typography></li>
                <li><Typography variant='body1'>The candidate should have 75% minimum aggregate 
                marks (70% in case of SC/ST/Physical Disability) in class 12th or equivalent.</Typography></li>
            </ul>
        </Grid>
    </Grid>
}