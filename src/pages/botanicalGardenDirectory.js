import ContainerWithHeader from "../components/containerWithHeader";
import DirectoryCard from "../components/directoryCard";

export default function BotanicalGardenDirectory() { 
    return (
        <ContainerWithHeader >
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
