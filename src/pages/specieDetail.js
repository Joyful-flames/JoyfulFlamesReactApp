import DirectoryCard from "../components/directoryCard";
import ContainerWithHeader from "../components/containerWithHeader";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
    getSpecieGenericName,
    getCommonName,
    getNumberOfStages,
    getInformation,
} from "../util/utils";
import "./speiceDetail.css";
import PropertyBar from "../components/propertyBar";

export default function SpeiceDetail() {
    const { specieId } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    function backHandler() {
        navigate("/");
    }

    const stages = getNumberOfStages(specieId);

    return (
        <ContainerWithHeader
            title="Botanical Garden"
            leftLinkHandler={backHandler}
        >
            <DirectoryCard
                title={state["title"]}
                icons={state["icons"]}
                choosedSpecie={specieId}
            />
            <h1 className="specie-detail-common-name">
                {getCommonName(specieId)}
            </h1>
            <PropertyBar specieId={specieId}></PropertyBar>

            <div className="specie-detail-stages">
                <div className="specie-detail-stage">
                    <img
                        src={`/images/specieStage/${
                            stages >= 1 ? specieId + "-1" : "None"
                        }.png`}
                        alt="stage 1"
                    />
                    <p>Stage 1</p>
                </div>
                <img
                    className="specie-detail-arrow"
                    src="/images/icons/stageArrow.png"
                    alt="stage cross"
                ></img>
                <div className="specie-detail-stage">
                    <img
                        src={`/images/specieStage/${
                            stages >= 2 ? specieId + "-2" : "None"
                        }.png`}
                        alt="stage 2"
                    />
                    <p>Stage 2</p>
                </div>
                <img
                    className="specie-detail-arrow"
                    src="/images/icons/stageArrow.png"
                    alt="stage cross"
                ></img>
                <div className="specie-detail-stage">
                <img src={`/images/specieStage/${stages>=3?specieId+"-3":"None"}.png`} alt="stage 3" />
                    <p>Stage 3</p>
                </div>
            </div>

            <div className="specie-detail-scientific-name">
                <h1 className="specie-detail-title">Scientific Name</h1>
                <h1 className="content">{getSpecieGenericName(specieId)}</h1>
            </div>

            <img className="image" src="/images/specieImage/${specieID}.png"></img>

            <div className="specie-detail-introduction">
                <p className="specie-detail-description">
                    {getInformation(specieId)[0]}
                </p>
            </div>

            <div className="specie-detail-distribution">
                <h1 className="specie-detail-title">Distribution</h1>
                <p className="specie-detail-description">
                    {getInformation(specieId)[1]}
                </p>
            </div>

            <div className="specie-detail-climate">
                <h1 className="specie-detail-title">Suitable Climate</h1>
                <p className="specie-detail-description">
                    {getInformation(specieId)[2]}
                </p>
            </div>

            <div className="specie-detail-protection">
                <h1 className="specie-detail-title">Protection</h1>
                <p className="specie-detail-description">
                    {getInformation(specieId)[3]}
                </p>
            </div>

            <div className="specie-detail-animal-habitat">
                <h1 className="specie-detail-title">Animal Habitat</h1>
                <p className="specie-detail-description">
                    {getInformation(specieId)[4]}
                </p>
            </div>
        </ContainerWithHeader>
    );
}
