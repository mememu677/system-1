/* 폰트 임포트 (고딕+고스펑크용) */
@import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap');

body {
  background-color: #111;
  color: #fff;
  font-family: 'Noto Sans', Arial, sans-serif;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 0.3s, color 0.3s, font-family 0.2s;
}

.container {
  width: 100%;
  max-width: 370px;
  text-align: center;
  padding: 24px 8px 24px 8px;
  border-radius: 18px;
  box-sizing: border-box;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 22px;
  font-weight: bold;
  letter-spacing: 1px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: stretch;
}

.buttons button,
.buttons a {
  font-size: 1rem;
  padding: 12px 0;
  border: none;
  border-radius: 10px;
  background: #232323;
  color: #fff;
  text-decoration: none;
  margin: 0;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.buttons button:hover,
.buttons a:hover {
  background: #444;
}

@media (max-width: 600px) {
  .container {
    padding: 16px 2vw;
    max-width: 98vw;
    border-radius: 0;
  }
  h1 {
    font-size: 1.1rem;
  }
}

/* ---- 온결(기본, 고딕) ---- */
body.ongyeol {
  background-color: #111;
  color: #fff;
  font-family: 'Noto Sans', Arial, sans-serif;
}

/* ---- 선율(연보라, 고스펑크) ---- */
body.seonyul {
  background-color: #111;
  color: #b39ddb;
  /* 여러 고딕/고스펑크 폰트 순서대로 우선 적용 */
  font-family: 'Grenze Gotisch', 'UnifrakturCook', 'Creepster', 'Rock Salt', Arial, sans-serif;
  letter-spacing: 0.5px;
}
