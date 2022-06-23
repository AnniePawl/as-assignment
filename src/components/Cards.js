// import AthleteData from "../athletes.json";
import AthleteData from "../athletes.js";
// importing js file instead of json in this particular case b/c need a dynamic reference to image locations for card backgrounds and .json file doesn't support import statements
import Card from "./Card";
import "./cards.scss";

export default function Cards() {
  return (
    <div className="cards-container">
      <div className="cards">
        {AthleteData.map((data, key) => {
          return (
            <div
              key={key}
              style={{
                backgroundImage: `url(${data.bgUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Card
                key={key}
                name={data.name}
                date={data.date}
                link={data.link}
              />
            </div>
          );
        })}
      </div>
      <h2 className="load-more">Load More Athletes</h2>
    </div>
  );
}
