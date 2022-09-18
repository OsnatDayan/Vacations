import { useState, useEffect } from "react";
import { actions } from "../fetch-calls";
import { SecondNavBar } from "./SecondNavBar";
import { VacationCard } from "./VacationCard";

export function VacationList(props: any) {
    const [vacationArr, setvacationArr] = useState<any>([]);
    const [role, setRole] = useState<number>(-1);
    useEffect(() => {
        actions.fetchWithoutData(actions.END_POINTS.getVacation, actions.methods.GET).then(res => {
            setRole(res.role);
            actions.fetchWithoutData(`${actions.END_POINTS.getUserVacations}/${res.uid}`, actions.methods.GET).then(res => {
                setvacationArr(res);
            }
            )
        })
    }, []);

    return (
        <>
            {sessionStorage.getItem('token') !== '' ? <>
                <div className="row">
                    <SecondNavBar role={role} />
                    {vacationArr.map((v: any, i: number) =>
                        <VacationCard role={role} key={i} follow={v.follow} id={v.id} descriprion={v.descriprion} destination={v.destination}
                            picture={v.picture} start_date={v.start_date} end_date={v.end_date} price={v.price}
                            follwers={v.followers} />

                    )
                    }

                </div>

            </> : <>
                {window.location.replace('http://localhost:3000')} </>}
        </>
    )
}
