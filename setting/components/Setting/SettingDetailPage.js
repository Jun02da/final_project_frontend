import { Route } from "react-router-dom";
import { SettingLayout } from "./SettingLayout.js";
import ApexCharts from "../Charts/ApexCharts.js";
import setting_logo from "../../image/setting_logo03.png";
// 레이아웃
const PageTemplate = ({ children }) => (
  <div>
    <SettingLayout />
    {children}
    <hr />
    <div>
      <p>바닥 글</p>
    </div>
  </div>
);
// 임시 home 화면
export const Home = () => (
  <div>
    <img src={setting_logo} width={300} />
  </div>
);
// not found 페이지
export const Whoops404 = ({ location }) => (
  <div>
    <h1>Resource not found at '{location.pathname}'</h1>
  </div>
);
// 레이아웃안에서 페이지 변경
export const Page_A = ({ match }) => (
  <PageTemplate>
    <section>
      <Route exact path="/Page_A/a" component={Page_A_a} />
      <Route path="/Page_A/b" component={Page_A_b} />
      <Route path="/Page_A/c" component={Page_A_c} />
      <Route path="/Page_A/d" component={Page_A_d} />
    </section>
  </PageTemplate>
);
export const Page_B = () => (
  <PageTemplate>
    <section>
      <Route exact path="/Page_B/a" component={Page_B_a} />
      <Route path="/Page_B/b" component={Page_B_b} />
      <Route path="/Page_B/c" component={Page_B_c} />
      <Route path="/Page_B/d" component={Page_B_d} />
    </section>
  </PageTemplate>
);
export const Page_C = () => (
  <PageTemplate>
    <section>
      <Route exact path="/Page_C/a" component={Page_C_a} />
      <Route path="/Page_C/b" component={Page_C_b} />
      <Route path="/Page_C/c" component={Page_C_c} />
      <Route path="/Page_C/d" component={Page_C_d} />
    </section>
  </PageTemplate>
);
export const Page_D = () => (
  <PageTemplate>
    <section>
      <Route exact path="/Page_D/a" component={Page_D_a} />
      <Route path="/Page_D/b" component={Page_D_b} />
      <Route path="/Page_D/c" component={Page_D_c} />
      <Route path="/Page_D/d" component={Page_D_d} />
    </section>
  </PageTemplate>
);
// 세부내용 페이지
export const Page_A_a = () => (
  <section>
    <h3>통계</h3>
    <hr />
    <ApexCharts />
  </section>
);
export const Page_A_b = () => (
  <section>
    <h1>쿠키 정책</h1>
    <hr />
    <h2>쿠키의 정의</h2>
    <p>
      쿠키는 귀하의 컴퓨터나 모바일 기기에 설치되어 사용자의 브라우저나 기기를
      식별할 수 있는 문자열이 담긴 작은 텍스트 파일입니다. 당사는 제품, 서비스
      및 광고를 제공하고, 보호하고, 이해하기 위해 쿠키, 픽셀 및 로컬 스토리지
      같은 기술을 사용할 수 있습니다.
    </p>
    <h2>쿠키의 용도</h2>
    <p>
      사이트 또는 서비스에서 쿠키 및 기타 기술을 사용하여 귀하의 컴퓨터 또는
      기기가 이전에 해당 사이트 또는 서비스를 방문했는지를 알 수 있습니다. 이후
      이러한 기술을 사용하여 제품, 서비스 및 광고를 제공하고, 사이트 또는
      서비스의 이용 현황을 파악하며, 귀하가 페이지를 효율적으로 이동할 수 있게
      해주고, 사용자의 기본 설정을 기억하며, 사용자의 전반적인 서비스 경험을
      개선할 수 있습니다. 쿠키는 귀하가 온라인에서 접하는 마케팅 정보가 귀하 및
      귀하의 관심사와 관련성이 높은지를 확인할 때도 도움이 될 수 있습니다.
    </p>
  </section>
);
export const Page_A_c = () => (
  <section>
    <h1>약관 및 법적 고지사항</h1>
    <hr />
    <h2>PhoPo 서비스</h2>
    <p>
      저희는 회원님에게 PhoPo 서비스를 제공하는 것에 동의합니다. 서비스에는
      저희가 PhoPo의 사명을 실현하기 위해 제공하는 모든 PhoPo 제품, 기능, 앱,
      서비스, 기술 및 소프트웨어가 포함됩니다. 회원님이 관심 있는 사람들과
      항목을 더 가까이 접할 수 있도록 저희의 서비스는 다음과 같은 부분으로
      구성됩니다.
    </p>
  </section>
);
export const Page_A_d = () => (
  <section>
    <h1>커뮤니티 결제 약관</h1>
    <hr />
    <h2>1. 결제하기</h2>
    <p>
      1. 결제 자격 증명입니다. 회원님은 Meta 제품을 통해 결제할 때 유효한 결제
      자격 증명을 제공하는 데 동의합니다. 회원님이 결제 자격 증명을 계정에
      추가하면(아래 2조 참조) 저희는 회원님이 Meta 제품을 통해 결제 기능을
      사용하여 거래를 시작할 수 있도록 허용합니다.
    </p>
    <p>
      2. 가격. 구매 가격은 세금, 수수료, 배송료를 포함할 수 있으며 이들에 대한
      지급 의무는 회원님에게 있으므로 거래의 세부 사항에 유의하세요.
    </p>
  </section>
);
export const Page_B_a = () => (
  <section>
    <h3>Page_B_a</h3>
  </section>
);
export const Page_B_b = () => (
  <section>
    <h3>Page_B_b</h3>
  </section>
);
export const Page_B_c = () => (
  <section>
    <h3>Page_B_c</h3>
  </section>
);
export const Page_B_d = () => (
  <section>
    <h3>Page_B_d</h3>
  </section>
);
export const Page_C_a = () => (
  <section>
    <h3>Page_C_a</h3>
  </section>
);
export const Page_C_b = () => (
  <section>
    <h3>Page_C_b</h3>
  </section>
);
export const Page_C_c = () => (
  <section>
    <h3>Page_C_c</h3>
  </section>
);
export const Page_C_d = () => (
  <section>
    <h3>Page_C_d</h3>
  </section>
);
export const Page_D_a = () => (
  <section>
    <h3>약관 및 법적 고지사항</h3>
    <hr />
    <p>PhoPo에 오신 것을 환영합니다!</p>
    <p>
      저희가 명시적으로 별도의 약관(본 약관이 아님)이 적용된다고 밝히지 않는 한
      본 이용 약관(또는 '약관')이 회원님의 PhoPo 사용에 적용되며 아래 설명된
      PhoPo 서비스('서비스')에 대한 정보를 제공합니다. 회원님이 PhoPo 계정을
      만들거나 PhoPo을 이용하는 경우, 회원님은 본 약관에 동의하는 것으로
      간주됩니다. Meta 서비스 약관은 이 서비스에 적용되지 않습니다.
    </p>
    <p>
      PhoPo 서비스는 Meta Platforms, Inc.에서 회원님에게 제공하는 Meta 제품 중
      하나입니다. 따라서 본 이용 약관은 회원님과 Meta Platforms, Inc. 사이의
      계약에 해당됩니다.
    </p>
  </section>
);
export const Page_D_b = () => (
  <section>
    <h1>쿠키 정책</h1>
    <hr />
    <h2>쿠키의 정의</h2>
    <p>
      쿠키는 귀하의 컴퓨터나 모바일 기기에 설치되어 사용자의 브라우저나 기기를
      식별할 수 있는 문자열이 담긴 작은 텍스트 파일입니다. 당사는 제품, 서비스
      및 광고를 제공하고, 보호하고, 이해하기 위해 쿠키, 픽셀 및 로컬 스토리지
      같은 기술을 사용할 수 있습니다.
    </p>
    <h2>쿠키의 용도</h2>
    <p>
      사이트 또는 서비스에서 쿠키 및 기타 기술을 사용하여 귀하의 컴퓨터 또는
      기기가 이전에 해당 사이트 또는 서비스를 방문했는지를 알 수 있습니다. 이후
      이러한 기술을 사용하여 제품, 서비스 및 광고를 제공하고, 사이트 또는
      서비스의 이용 현황을 파악하며, 귀하가 페이지를 효율적으로 이동할 수 있게
      해주고, 사용자의 기본 설정을 기억하며, 사용자의 전반적인 서비스 경험을
      개선할 수 있습니다. 쿠키는 귀하가 온라인에서 접하는 마케팅 정보가 귀하 및
      귀하의 관심사와 관련성이 높은지를 확인할 때도 도움이 될 수 있습니다.
    </p>
  </section>
);
export const Page_D_c = () => (
  <section>
    <h1>전기통신사업법(TBA)에 정의된 불법 촬영물 및 기타 콘텐츠</h1>
    <hr />
    <p>
      한국 전기통신사업법 제22조의5의 불법촬영물등에 해당하는 콘텐츠를 본
      신고양식을 이용해 신고할 수 있습니다. 본 신고는 전기통신사업법에 따른
      불법촬영물등에 관한 신고로 한국에서만 가능합니다.
    </p>
    <p>
      PhoPo의 커뮤니티 규정을 위반한다고 생각되는 기타 유형의 콘텐츠는 다른
      적절한 채널을 통해 신고해야 합니다. 이러한 유형의 콘텐츠를 신고하는 방법에
      대한 자세한 내용은 고객센터를 참조하세요.
    </p>
  </section>
);
export const Page_D_d = () => (
  <section>
    <h1>회원님의 약속</h1>
    <hr />
    <p>
      서비스 제공에 대한 저희의 약속에 대해 회원님은 다음과 같이 약속을 해주셔야
      합니다.
    </p>
    <p>
      PhoPo을 이용할 수 있는 주체. 저희는 PhoPo 서비스가 가능한 개방적이고
      포괄적인 서비스가 되기를 원하지만, 또한 본 서비스가 안전하고, 보안성을
      갖추며, 법을 준수하는 서비스가 되기를 원합니다. 따라서 회원님이 PhoPo
      커뮤니티에 참여하려면 몇 가지 제한 사항을 준수해야 합니다.
    </p>
  </section>
);
