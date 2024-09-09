import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./home.scss";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";

export default function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
}
