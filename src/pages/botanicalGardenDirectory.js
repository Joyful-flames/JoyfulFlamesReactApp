import { Link } from "react-router-dom";
import ContainerWithHeader from "../components/containerWithHeader";
import DirectoryCard from "../components/directoryCard";
import {specieDirectory} from '../data/constant'


export default function BotanicalGardenDirectory() {
  return (
    <ContainerWithHeader title='Botanical Garden'>
        {/* {specieDirectory.map(item=><DirectoryCard title={item.title} icons={item.icons} ></DirectoryCard>)} */}
      <DirectoryCard
        title="Moss & Grass"
        icons={[
          "1",
          "2",
        ]}
        
      ></DirectoryCard>
      <DirectoryCard
        title="Bush"
        icons={[
          "3",
          "4",
          '5'
        ]}
      ></DirectoryCard>
      <DirectoryCard
        title="Wood"
        icons={[
          "6",
          "7",
          '8'
        ]}
      ></DirectoryCard>
    </ContainerWithHeader>
  );
}
