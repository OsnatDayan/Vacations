import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { actions } from '../fetch-calls';
import { SecondNavBar } from './SecondNavBar';

export function Report() {
    const [role, setRole] = useState<number>(1);
    const [vacationArr, setvacationArr] = useState<any>([]);
    let t = actions.getToken();
    useEffect(() => {
        actions.fetchWithoutData(actions.END_POINTS.getVacation, actions.methods.GET).then(res => setRole(res.role))
    }, [])
    useEffect(() => {
        actions.fetchWithoutData(actions.END_POINTS.retport, actions.methods.GET).then(res => setvacationArr(res));
    }
        , [])
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const options = { responsive: true, plugins: { legend: { position: 'top' as const, }, title: { display: true, text: 'VACATION FOLLOWRS', }, }, };
    const labels: any = [];
    const data2: any = [];
    vacationArr.forEach((element: any) => {
        labels.push(element.destination);
        data2.push(element.followers);
    });
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data2,
                backgroundColor: 'rgba(255, 99, 132,0.5)',
            },]
    };

    return (
        <>

            {role == 1 && t !== "" ? <>
                <SecondNavBar />
                <Bar options={options} data={data} />
            </> : <>
                {t == '' ? window.location.replace('http://localhost:3000') :
                    window.location.replace('http://localhost:3000/MyVacationList')
                }
            </>}

        </>
    )
}