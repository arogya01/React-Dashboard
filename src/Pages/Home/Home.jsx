import React from 'react'
import { Chart } from '../../Components/Chart/Chart';
import { FeaturedInfo } from '../../Components/FeaturedInfo/FeaturedInfo';
import './Home.css';
import {userData} from '../../data';
import { WidgetSm } from '../../Components/WidgetSm/WidgetSm';
import { WidgetLg } from '../../Components/WidgetLg/WidgetLg';
 
export const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} dataKey="Active User" grid title="User Analytics"/>
            <div className="homeWidgets">
              <WidgetSm />
              <WidgetLg/>
             </div>
        </div> 
    )
}
