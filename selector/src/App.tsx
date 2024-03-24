

import React ,{ useState,useEffect }from 'react';

import './App.css';

function App() {
  
  const Menu = [
    {
      category : "ko",
      value : "순두부찌개"
    },
    {
      category : "ko",
      value : "부대찌개"
    },
    {
      category : "ko",
      value : "김치찌개"
    },
    {
      category : "ko",
      value : "된장찌개"
    },
    {
      category : "ko",
      value : "비지찌개"
    },
    {
      category : "ko",
      value : "동태탕"
    },
    {
      category : "ko",
      value : "갈비찜"
    },
    {
      category : "ko",
      value : "닭볶음탕"
    },
    {
      category : "ko",
      value : "갈비탕"
    },
    {
      category: 'ko',
      value: '막국수'
    },
    {
      category: 'ko',
      value: '닭갈비'
    },
    {
      category: 'ko',
      value: '곰탕'
    },
    {
      category : "ko",
      value : "아귀찜"
    },
    {
      category : "ko",
      value : "삼계탕"
    },
    {
      category : "ko",
      value : "수육"
    },
    {
      category : "ko",
      value : "월남쌈"
    },
    {
      category : "ko",
      value : "찜닭"
    },
    {
      category : "ko",
      value : "떡볶이"
    },
    {
      category : "ko",
      value : "비빔밥"
    },
    {
      category : "ko",
      value : "제육덮밥"
    },
    {
      category : "ko",
      value : "카레"
    },
    {
      category : "ko",
      value : "김치볶음밥"
    },
    {
      category : "ko",
      value : "오징어덮밥"
    },
    {
      category : "ko",
      value : "짜장밥"
    },
    {
      category : "ko",
      value : "간장밥"
    },
    {
      category : "ko",
      value : "육개장"
    },
    {
      category : "ko",
      value : "떡국"
    },
    {
      category : "ko",
      value : "미역국"
    },
    {
      category : "ko",
      value : "콩나물국"
    },
    {
      category : "ko",
      value : "무국"
    },
    {
      category : "ko",
      value : "두부김치"
    },
    {
      category : "ko",
      value : "골뱅이"
    },
    {
      category : "ko",
      value : "어묵탕"
    },
    {
      category : "ko",
      value : "순대볶음"
    },
    {
      category : "ko",
      value : "순대국밥"
    },
    {
      category : "ko",
      value : "칼국수"
    },
    {
      category : "ko",
      value : "잔치국수"
    },
    {
      category : "ko",
      value : "김밥"
    },
    {
      category : "ko",
      value : "참치마요"
    },
    {
      category : "ko",
      value : "두루치기"
    },
    {
      category : "ko",
      value : "불고기"
    },
    {
      category : "ko",
      value : "삼겹살"
    },
    {
      category : "ko",
      value : "대창덮밥"
    },
    {
      category : "ko",
      value : "오리구이"
    },
    {
      category : "ko",
      value : "도시락"
    },
    {
      category : "ko",
      value : "삼각김밥"
    },
    {
      category : "ko",
      value : "라면"
    },

    {
      category : "ko",
      value : "계란말이"
    },
    {
      category : "ko",
      value : "계란찜"
    },
    {
      category : "ko",
      value : "추어탕"
    },
    {
      category : "ko",
      value : "죽"
    },
    {
      category : "ko",
      value : "잡채"
    },
    {
      category : "ko",
      value : "해장국"
    },
    {
      category : "ko",
      value : "쌈밥"
    },

    {
      category : "jp",
      value : "규동"
    },
    {
      category : "jp",
      value : "우동"
    },
    {
      category : "jp",
      value : "소바"
    },
    {
      category : "jp",
      value : "가츠동"
    },
    {
      category : "jp",
      value : "연어덮밥"
    },
    {
      category : "jp",
      value : "돈까스"
    },
    {
      category : "jp",
      value : "오코노미야끼"
    },
    {
      category : "jp",
      value : "하이라이스"
    },
    {
      category: 'jp',
      value: '텐동'
    },
    {
      category: 'jp',
      value: '일식 돈까스'
    },
    {
      category: 'jp',
      value: '우동'
    },
    {
      category: 'jp',
      value: '사시미'
    },
    
    {
      category : "jp",
      value : "라멘"
    },
    {
      category : "jp",
      value : "초밥"
    },
    {
      category : "jp",
      value : "유부초밥"
    },
    {
      category: 'jp',
      value: '카레라이스'
    },

    {
      category : "ch",
      value : "깐풍기"
    },
    {
      category : "ch",
      value : "만두"
    },
    {
      category : "ch",
      value : "짜장면"
    },
    {
      category : "ch",
      value : "짬뽕"
    },
    {
      category : "ch",
      value : "차돌짬뽕"
    },
    {
      category : "ch",
      value : "동파육"
    },
    {
      category : "ch",
      value : "마파두부"
    },
    {
      category : "ch",
      value : "고추잡채"
    },
    {
      category : "ch",
      value : "마라탕"
    },
    {
      category : "ch",
      value : "마라샹궈"
    },
    {
      category : "ch",
      value : "꿔바로우"
    },

    {
      category : "wt",
      value : "라자냐"
    },
    {
      category : "wt",
      value : "그라탕"
    },
    {
      category : "wt",
      value : "스파게티"
    },
    {
      category : "wt",
      value : "리조토"
    },
    {
      category : "wt",
      value : "토스트"
    },
    {
      category : "wt",
      value : "햄버거"
    },
    {
      category : "wt",
      value : "핫도그"
    },
    {
      category : "wt",
      value : "치킨"
    },
    {
      category: 'wt',
      value: '그릴드치즈'
    },
    {
      category: 'wt',
      value: '스프링롤'
    },
    {
      category: 'wt',
      value: '크림스프'
    },
    {
      category: 'wt',
      value: '타코'
    },
    {
      category: 'wt',
      value: '리브아이'
    },
    {
      category : "wt",
      value : "바베큐"
    },
    {
      category : "wt",
      value : "맥엔치즈"
    },
    {
      category : "wt",
      value : "에그 베네딕트"
    },
    {
      category : "wt",
      value : "케밥"
    },
    {
      category : "wt",
      value : "브리또"
    },
    {
      category : "wt",
      value : "파스타"
    },
    {
      category : "wt",
      value : "샐러드"
    },
    {
      category : "wt",
      value : "빵"
    },
    {
      category : "wt",
      value : "햄버거"
    },
    {
      category : "wt",
      value : "피자"
    },
    {
      category : "wt",
      value : "샌드위치"
    },
    {
      category : "wt",
      value : "시리얼"
    },

    {
      category : "d",
      value : "마카롱"
    },
    {
      category : "d",
      value : "초콜릿"
    },
    {
      category : "d",
      value : "아이스크림"
    },
    {
      category : "d",
      value : "호떡"
    },
    {
      category : "d",
      value : "빙수"
    },
    {
      category : "d",
      value : "과자"
    },
    {
      category : "d",
      value : "떡"
    },
    {
      category : "d",
      value : "떡꼬치"
    },
    {
      category : "d",
      value : "에그타르트"
    },
    {
      category : "d",
      value : "사탕"
    },
    {
      category: 'd',
      value: '머랭쿠키'
    },
    {
      category: 'd',
      value: '바닐라 푸딩'
    },
    {
      category: 'd',
      value: '초콜릿 푸딩'
    },
    {
      category: 'd',
      value: '카라멜 푸딩'
    },
    {
      category: 'd',
      value: '과일 푸딩'
    },
    {
      category: 'd',
      value: '커스터드 푸딩'
    },
    {
      category: 'd',
      value: '레몬 푸딩'
    },
    {
      category: 'd',
      value: '탕후루'
    },
    {
      category: 'd',
      value: '바닐라 아이스크림'
    },
    {
      category: 'd',
      value: '초콜릿 아이스크림'
    },
    {
      category: 'd',
      value: '딸기 아이스크림'
    },
    {
      category: 'd',
      value: '민트 초콜릿 칩 아이스크림'
    },
    {
      category: 'd',
      value: '쿠키 앤 크림 아이스크림'
    },
    {
      category: 'd',
      value: '망고 아이스크림'
    },
    {
      category: 'd',
      value: '크로와상'
    },
    {
      category: 'd',
      value: '마카롱'
    },
    {
      category: 'd',
      value: '에클레어'
    },
    {
      category: 'd',
      value: '초코렛 케이크'
    },
    {
      category: 'd',
      value: '치즈케이크'
    },
    {
      category: 'd',
      value: '레드벨벳 케이크'
    },
    {
      category: 'd',
      value: '딸기 케이크'
    },
    {
      category: 'd',
      value: '카라멜 케이크'
    },
    {
      category: 'd',
      value: '티라미수'
    }

  ];

  const [chooseCategory, setCategory] = useState('all');
  const [selectItem, setItem] =  useState('');

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 실행되는 코드
    console.log('Component mounted');
    ChangeItem('all');
    
  }, []);

  const ChangeItem = (type: string) => {

    setCategory(type);

    // 클릭된 버튼의 id를 통해 해당 버튼을 선택
    const clickedButton = document.getElementById(type) as HTMLElement;;

    // 모든 ChooseButton 클래스를 가진 버튼의 색상을 원래대로 초기화
    const buttons = Array.from(document.getElementsByClassName('ChooseButton')) as HTMLElement[];
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = 'rgb(13, 187, 106)';
    }

    // 클릭된 버튼의 색상을 red로 변경
    clickedButton.style.backgroundColor = 'rgb(56, 253, 155)';
  };

  
  const RandMenu = () => {
    let result: any;

    if (chooseCategory !== 'all') {
      const filterData = Menu.filter(item => item.category.includes(chooseCategory));

      const randomNum = getRandomInt(filterData.length);
      result = filterData[randomNum];
    } else {
      const randomNum = getRandomInt(Menu.length);
      result = Menu[randomNum];
    }

    setItem( '[' +result.value + ']');

    
  };

  // 랜덤 숫자 반환
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  

  return (
    <div className='App'>
      <div className='TopMenu'>
        <div className='TopMenuTitle'>
          먹자먹자 아무거나 먹자
        </div>
      </div>
      <div className='SelectorMain'>

        <div style={{height :'50%', marginTop:'5%'}}>

          
          <button className='ChooseButton' id="ko" onClick={() => ChangeItem('ko')}>한식</button>
          <button className='ChooseButton' id="jp" onClick={() => ChangeItem('jp')}>일식</button>
          <button className='ChooseButton' id="ch" onClick={() => ChangeItem('ch')}>중식</button>
          <button className='ChooseButton' id="wt" onClick={() => ChangeItem('wt')}>양식</button>
          <button className='ChooseButton' id="d" onClick={() => ChangeItem('d')}>디저트</button>
          <button className='ChooseButton' id="all" onClick={() => ChangeItem('all')}>전체</button>


        </div>

        <div style={{ height: '10%', marginTop: '7%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <a onClick={() => RandMenu()}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              오늘의 메뉴는 {selectItem}
          </a>

        </div>
        
      </div>
    </div>
  );
}

export default App;
