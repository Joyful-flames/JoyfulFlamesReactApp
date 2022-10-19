import "./directoryCard.css";
import { Link } from "react-router-dom";

/**
 * This component is used to render the botanical Garden page's header
 *
 * @param  {string} title - the title of the Directory
 * @param  {string[]} icons - the icon of the Directory
 */

export default function DirectoryCard({ title, icons, choosedSpecie }) {
    return (
        <div className="directoryCard">
            <h2 className="directoryCardTitle">{title}</h2>
            <hr className="derectoryCardLine"></hr>
            <div className="icons">
                {icons.map((item) =>
                    choosedSpecie === item ? (
                        <div key={item} className="choosed-icon">
                            <div key={item} className="icon">
                                <Link to={`/showDetails/${item}`} state={{title, icons}}>
                                    <img
                                        src={
                                            "/images/specieIcon/" +
                                            item +
                                            ".png"
                                        }
                                        alt="icon"
                                    ></img>
                                </Link>
                            </div>
                            <div className="choosed-icon-image">
                                <img src="/images/icons/polygon.png"></img>
                            </div>
                        </div>
                    ) : (
                        <div key={item} className="icon">
                            <Link to={`/showDetails/${item}`} state={{title, icons}}>
                                <img
                                    src={"/images/specieIcon/" + item + ".png"}
                                    alt="icon"
                                ></img>
                            </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
