import ContainerWithHeader from "../components/containerWithHeader";
import DirectoryCard from "../components/directoryCard";
import PropertyBar from '../components/propertyBar'
import './botanicalGrardenDetail.css'
export default function BotanicalGardenDirectory() {
    return (<ContainerWithHeader>
        <DirectoryCard title={'Moss & Grass'} icons={["1.png", "2.png"]} sepieId={1}></DirectoryCard>
        <h2 className="PropertyBarTitle">Forest Red Gum</h2>
        <PropertyBar specieId='1'></PropertyBar>
    </ContainerWithHeader>)
}