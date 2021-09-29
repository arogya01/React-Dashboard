import "./WidgetLg.css";
import Profile from '../../Assets/Profile.png';

export const WidgetLg = () => {

  const Button = ({type})=>{
    return <button className={"widgetLgButton " + type }>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <div className="widgetLgContainer">
        <div className="customerInfoWrapper grid-column-item">
        <div className="columnHeading">
          <h3>Customers</h3>
        </div>
        <div className="customerInfoContainer ">
          <img src={Profile} alt="CustomerImg" className="customerImg" />
          <p className="customerName">Arogya B.</p>
        </div>
        <div className="customerInfoContainer">
          <img src={Profile} alt="CustomerImg" className="customerImg" />
          <p className="customerName">Arogya B.</p>
        </div>
        <div className="customerInfoContainer">
          <img src={Profile} alt="CustomerImg" className="customerImg" />
          <p className="customerName">Arogya B.</p>
        </div>
        <div className="customerInfoContainer">
          <img src={Profile} alt="CustomerImg" className="customerImg" />
          <p className="customerName">Arogya B.</p>
        </div>
      </div>


      <div className="dateInfoWrapper grid-column-item">
      <div className="columnHeading">
          <h3>Date</h3>
        </div>
        <div className="dateContainer">
          <p className="dateInfo">2 Jun 2021</p>
        </div>
        <div className="dateContainer">
          <p className="dateInfo">2 Jun 2021</p>
        </div>
        <div className="dateContainer">
          <p className="dateInfo">2 Jun 2021</p>
        </div>
        <div className="dateContainer">
          <p className="dateInfo">2 Jun 2021</p>
        </div>
      </div>


      <div className="dateInfoWrapper grid-column-item">
      <div className="columnHeading">
          <h3>Amount</h3>
        </div>
        <div className="amtContainer">
          <p className="amtInfo">$122.00</p>
        </div>
        <div className="amtContainer">
          <p className="amtInfo">$122.00</p>
        </div>
        <div className="amtContainer">
          <p className="amtInfo">$122.00</p>
        </div>
        <div className="amtContainer">
          <p className="amtInfo">$122.00</p>
        </div>
        </div>
        
      <div className="statusInfoWrapper grid-column-item">
      <div className="columnHeading">
          <h3>Status</h3>
        </div>

        <div className="statusContainer">
          <Button type='Declined' />
        </div>
        <div className="statusContainer">
          <Button type='Approved' />
        </div>
        <div className="statusContainer">
          <Button type='Pending' />
        </div>
        <div className="statusContainer">
          <Button type='Declined' />
        </div>


      </div>

      </div>
    </div>
  );
};
