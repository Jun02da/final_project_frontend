import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>GitHub 바로가기 :</span>
        </div>

        <div>
          <a
            href="https://github.com/yjhan713/project"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />P h o P o
              </h6>
              <p>사진작가를 위한 포트폴리오 서비스</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">참여자</h6>
              <div style={{ float: "left", marginRight: 20 }}>
                <p>
                  <a>김준영</a>
                </p>
                <p>
                  <a>김영준</a>
                </p>
                <p>
                  <a>도요한</a>
                </p>
                <p>
                  <a>오준영</a>
                </p>
              </div>
              <div>
                <p>
                  <a>임현지</a>
                </p>
                <p>
                  <a>한용재</a>
                </p>
                <p>
                  <a>황상범</a>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">사용되는 기술</h6>
              <p>
                <a>React</a>
              </p>
              <p>
                <a>AWS S3</a>
              </p>
              <p>
                <a>Spring boot</a>
              </p>
              <p>
                <a>Apexchart</a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kosmo 2강의실
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Kosmo@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                02-321-4567
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
