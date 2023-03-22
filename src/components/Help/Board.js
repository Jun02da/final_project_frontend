import BoardList from "./Board/BoardList";
import Header from "../Layout/HelpHeader.js";
import Footer from "../Layout/footer.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Pagenation from "./Board/BoardPagination.js";

function Board() {
  // 임시 하드코딩 데이터
  const list = [
    {
      id: 1,
      title: "유럽파로 첫 대표팀 소집 오현규 '흥민이 형의 대단함 느껴요'",
      createdAt: "2023.03.21",
      name: "홍길동",
      content:
        "(파주=연합뉴스) 최송아 기자 = 유럽파가 되고 나서 처음으로 축구 대표팀 소집 훈련에 들어온 공격수 오현규(셀틱)는 대선배 손흥민(토트넘)의 대단함을 실감했다며 혀를 내둘렀다오현규는 21일 파주 국가대표트레이닝센터NFC에서 취재진을 만나 시차 적응하면서 대표팀에 들어온 게 처음이라 새로운 기분이라고 소감을 밝혔다.지난해 카타르 월드컵 때 최종 엔트리에는 들지 못했으나 예비 선수로 카타르에 동행했던 오현규는 위르겐 클린스만독일 감독 체제의 첫 대표팀에 포함돼 전날 합류했다.월드컵 이후 올해 1월 스코틀랜드 명문 셀틱에 입단해 유럽파가 된 그는 전날 오후 인천국제공항에 도착하자마자 파주 NFC로 이동해 훈련을 소화했다.소속팀에서 경기를 치른 뒤 곧장 장거리 비행을 거쳐 대표팀에 들어오는 과정이 아직은 그에게 낯선 일이다.오현규는 저는 고작 한 번 했는데도 이렇게 힘든데, 손흥민이 형은 몇 년째 하고 계시지 않나며 새삼 형이 정말 대단하다는 걸 다시 느꼈다며 웃었다.이어 해외 경험이 있는 형들에게 시차 적응에 관해서 물어보기도 했다. 잘 자는 게 중요하다고 하시더라며 노하우를 통해 저도 빨리 시차 적응할 수 있게 하겠다고 말했다.이달 초 스코틀랜드 무대 데뷔골을 넣었던 그는 대표팀 합류 직전인 19일 오전 하이버니언과의 리그 경기에서 다이빙 헤더로 결승 골을 터뜨려 셀틱의 3-1 역전승을 이끌었다",
    },
    {
      id: 2,
      title: "제목입니다 (2)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 2",
    },
    {
      id: 3,
      title: "제목입니다 (3)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 3",
    },
    {
      id: 4,
      title: "제목입니다 (4)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 4",
    },
    {
      id: 5,
      title: "제목입니다 (5)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 5",
    },
    {
      id: 6,
      title: "제목입니다 (6)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 6",
    },
    {
      id: 7,
      title: "제목입니다 (7)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 7",
    },
    {
      id: 8,
      title: "제목입니다 (8)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 8",
    },
    {
      id: 9,
      title: "제목입니다 (9)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 9",
    },
    {
      id: 10,
      title: "제목입니다 (10)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 10",
    },
    {
      id: 11,
      title: "제목입니다 (11)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 11",
    },
    {
      id: 12,
      title: "제목입니다 (12)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 12",
    },
    {
      id: 13,
      title: "제목입니다 (13)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 13",
    },
    {
      id: 14,
      title: "제목입니다 (14)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 14",
    },
    {
      id: 15,
      title: "제목입니다 (15)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 15",
    },
    {
      id: 16,
      title: "제목입니다 (16)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 16",
    },
    {
      id: 17,
      title: "제목입니다 (17)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 17",
    },
    {
      id: 18,
      title: "제목입니다 (18)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 18",
    },
    {
      id: 19,
      title: "제목입니다 (19)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 19",
    },
    {
      id: 20,
      title: "제목입니다 (20)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 20",
    },
    {
      id: 21,
      title: "제목입니다 (21)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 21",
    },
    {
      id: 22,
      title: "제목입니다 (22)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 22",
    },
    {
      id: 23,
      title: "제목입니다 (23)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 23",
    },
    {
      id: 24,
      title: "제목입니다 (24)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 24",
    },
    {
      id: 25,
      title: "제목입니다 (25)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 25",
    },
    {
      id: 26,
      title: "제목입니다 (26)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 26",
    },
    {
      id: 27,
      title: "제목입니다 (27)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 27",
    },
    {
      id: 28,
      title: "제목입니다 (28)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 28",
    },
    {
      id: 29,
      title: "제목입니다 (29)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 29",
    },
    {
      id: 30,
      title: "제목입니다 (30)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 30",
    },
    {
      id: 31,
      title: "제목입니다 (31)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 31",
    },
    {
      id: 32,
      title: "제목입니다 (32)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 32",
    },
    {
      id: 33,
      title: "제목입니다 (33)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 33",
    },
    {
      id: 34,
      title: "제목입니다 (34)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 34",
    },
    {
      id: 35,
      title: "제목입니다 (35)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 35",
    },
    {
      id: 36,
      title: "제목입니다 (36)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 36",
    },
    {
      id: 37,
      title: "제목입니다 (37)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 37",
    },
    {
      id: 38,
      title: "제목입니다 (38)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 38",
    },
    {
      id: 39,
      title: "제목입니다 (39)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 39",
    },
    {
      id: 40,
      title: "제목입니다 (40)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 40",
    },
    {
      id: 41,
      title: "제목입니다 (41)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 41",
    },
    {
      id: 42,
      title: "제목입니다 (42)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 42",
    },
    {
      id: 43,
      title: "제목입니다 (43)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 43",
    },
    {
      id: 44,
      title: "제목입니다 (44)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 44",
    },
    {
      id: 45,
      title: "제목입니다 (45)",
      createdAt: "2021.06.30",
      name: "홍길동",
      content: "내용 45",
    },
  ];
  const movePage = useNavigate();

  function goBoardEdit() {
    movePage("/BoardEdit");
  }
  // 데이터 부분
  const [contentInfo, setContentInfo] = useState([]);

  useEffect(() => {
    setContentInfo(list);
  }, []);
  // 페이징 부분
  const [page, setPage] = useState(1); //페이지
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };
  return (
    <div>
      <Header />
      <div id="BoardContentDiv">
        <button id="BoardWriteButton" onClick={goBoardEdit}>
          글쓰기
        </button>
        <div className="BoardContentHeader">
          <span className="BoardContentHeaderId">번호</span>
          <span className="BoardContentHeaderTitle">제목</span>
          <span className="BoardContentHeaderCreateAt">작성일</span>
          <span className="BoardContentHeaderName">글쓴이</span>
        </div>
        <hr />
        <BoardList items={postsData(contentInfo)} />
        <Pagenation
          limit={limit}
          page={page}
          totalPosts={contentInfo.length}
          setPage={setPage}
        />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Board;
