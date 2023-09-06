import DataTable from "./components/DataTable.jsx";
import Header from "./components/Header.jsx";
import GlobalStyle from "./style/GlobalStyle.js";
import investmentsData from "./data/investmentsData.json"
function App() {
  console.log(investmentsData)
  const investmentsFundsArray = investmentsData.investments;
  const reportsData = investmentsData.reports
  

  return (
    <>
      <GlobalStyle />
      <Header />
      {investmentsFundsArray.map(
        element => (
          <DataTable 
          id = {element.id}
          name = {element.description}
          key = {element.id}
          reports = {reportsData}
          />
        )
      )}
      
    </>


  );
}

export default App;
