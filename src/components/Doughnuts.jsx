import React,{useState,useEffect,useContext} from 'react'
import { Doughnut } from "react-chartjs-2";
import { Context } from './context/Store';
import axios from 'axios'
import { Chart, registerables, ArcElement } from "chart.js";
import styled from 'styled-components'

const Doughnuts = () => {
    Chart.register(...registerables);
    Chart.register(ArcElement);
    const {state,dispatch}=useContext(Context)
    const [datadough,setDatadough]=useState({})
    useEffect(()=>{
        const accessToken = state.userdata.accessToken;

        axios.get("http://saaskit.tegain.com/api/dashboard/pie-chart/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setDatadough(res.data.data)
      })
    },[])
    const data = {
        labels: ['active','completed','ended'],
        datasets: [
            {
                label: 'example',
                data: [datadough.active,datadough.completed,datadough.ended],
                borderColor: ['rgba(255,206,86,0.2)'],
                cutout:200,
                backgroundColor: ['rgb(46, 212, 117)',
                'rgb(255, 185, 70)',
                'rgb(247, 104, 91)', ],
            }
        ]
    }

    const options = {
       
        plugins: {
           
            title: {
                display: true,
                text: '60%',
                color:'blue',
                font: {
                    size:44
                },
                padding:{
                    top:50,
                    bottom:30
                },
                
                
                responsive:true,
                animation:{
                    animateScale: true,
                               }
            },
        }
    }
    console.log(datadough);
    return (
        <Container>
            <Doughnut
                data={data}
                options={{
                responsive: true,
                maintainAspectRatio: true,
                
        }}
        options={options} />
        </Container>
    )
}

export default Doughnuts
const Container = styled.div`
    width:600px;
`