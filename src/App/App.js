import Header from '../Components/Common/Header';
import Footer from "../Components/Common/Footer";
import ReportHeader from '../Components/Common/ReportHeader'
import ReportDetails from "../Components/Common/ReportDetails";
import ReportSummary from "../Components/Common/ReportSummary";
import ReportDeptSummary from "../Components/Common/ReportDeptSummary";
import { Container, Row, Col } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Header />
      <Container className="p-0 border-bottom-1 mb-4">
        <Row>
          <Col>
            <section className="section section-main section-box">
              <ReportHeader />
              <ReportSummary />
              <ReportDetails />
              <ReportDeptSummary />

            </section>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>

);
}

export default App;
