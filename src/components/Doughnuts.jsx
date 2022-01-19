import React,{useState,useEffect,useContext} from 'react'
import { Line ,Doughnut} from "react-chartjs-2";
import { Context } from '../context/Store';
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
        labels: ['attended','completed','ended',],
        datasets: [
            {
                label: 'attended',
                data: [datadough.active,datadough.completed,datadough.ended],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                'rgba(232,211,6,1)',
                'rgba(54,162,235,1)',
                'rgba(153,102,255,1)' ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
    
        ]
    }
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Doughnut Chart',
                color:'blue',
                font: {
                    size:34
                },
                padding:{
                    top:30,
                    bottom:30
                },
                responsive:true,
                animation:{
                    animateScale: true,
                               }
            }
        }
    
    }
    console.log(datadough);
    return (
        <Container>
            al doughnuts
            <Doughnut
                data={data}
                // datasets
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