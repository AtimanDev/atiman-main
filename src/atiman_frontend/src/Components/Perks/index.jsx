import './perks.css';
import Card from '../Card';
import CardData from '../../Data/CardData';
function Perks(){
  return (
    <section className="perks__section">
      <div className="perks__card__container">
        <div className="perks__text">
          <h1>About ATIMAN</h1>
          <p>
          Our Mission, Vision, and the Story Behind Our Center.
          </p>
        </div>
        {CardData.map((item, index) =>  <Card key={`${item.heading1 + index}`} data={item} index={index} />)}
      </div>
    </section>
  );
};
export default Perks;