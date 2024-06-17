import { BillProvider } from "./context/BillContext";

import Bill from "./components/Bill";
import People from "./components/People";
import Reset from "./components/Reset";
import Tips from "./components/Tips";
import TipOutput from "./components/TipOutput";
import Title from "./components/Title";
import TotalOutput from "./components/TotalOutput";
import FlexPage from "./ui/FlexPage";
import DataList from "./ui/DataList";
import SummaryList from "./ui/SummaryList";
import Container from "./ui/Container";
import Attribution from "./ui/Attribution";

export default function App() {
  return (
    <FlexPage>
      <Title />
      <Container>
        <BillProvider>
          <DataList>
            <Bill />
            <Tips />
            <People />
          </DataList>
          <SummaryList>
            <TipOutput />
            <TotalOutput />
            <Reset />
          </SummaryList>
        </BillProvider>
      </Container>
      <Attribution />
    </FlexPage>
  );
}
