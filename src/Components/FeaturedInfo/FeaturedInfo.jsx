import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featureTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,435</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownward/></span>
        </div>

        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,435</span>
            <span className="featuredMoneyRate">-1.4 <ArrowDownward/></span>
        </div>

        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,235</span>
            <span className="featuredMoneyRate">+2.4 <ArrowUpward/></span>
        </div>

        <span className="featuredSub">Compared to last month</span>
      </div>

      
    </div>
  );
};
