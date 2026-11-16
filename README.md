# 에버돈 온라인

탑뷰 판타지 RPG의 개인 모험과 실제 공유 월드. 게임 수치·장비·기술·확률·가격·문구의 원본은 `game-db.js`입니다.

## Cloudflare 자동 배포

기존 Git 연결 Worker `tactics`를 그대로 사용합니다.

- 주소: https://tactics.kjmalswo-804.workers.dev
- `main` 푸시 → Cloudflare Workers Builds → Wrangler → 프런트엔드 Assets와 백엔드 Worker 동시 배포.
- `wrangler.jsonc`의 custom build가 `node build-cloudflare.cjs`를 실행합니다. 별도의 Python 설치나 외부 데이터베이스 연결은 필요하지 않습니다.
- `WORLD` 바인딩은 `EverdawnWorld` Durable Object를 가리킵니다. `everdawn-world-v1` migration으로 SQLite 저장소를 생성합니다. 기존 migration 태그를 수정하거나 삭제하지 마세요.
- 클라이언트는 같은 주소의 `/api/v1/*`를 사용합니다. 실시간 이동·월드 상태는 인증 쿠키를 사용하는 WebSocket으로 전달합니다.
- 계정·캐릭터·길드·거래·우편·지역 상태는 Durable Object SQLite에 저장됩니다. 재배포해도 저장 키와 namespace를 유지하면 진행이 보존됩니다.
- 공개 서버는 서명되지 않은 개인 저장 이관을 기본 차단합니다. 기존 개인 저장은 브라우저에 그대로 남습니다. 개인 서버에서 이관이 필요할 때만 `ALLOW_LEGACY_IMPORT=1`을 설정하세요. 이관 장비는 귀속되고 온라인 주화·성과는 새로 시작합니다.

배포 완료 여부는 GitHub 커밋의 **Workers Builds: tactics** 체크와 `/api/v1/health`에서 확인합니다. `backend`가 `durable-object-sqlite`, `transport`가 `websocket`이면 서버 버전입니다.

```sh
npm ci
npm run deploy
```

직접 배포할 때만 Wrangler 계정 인증이 필요합니다. Git 연결 자동 배포는 기존 Cloudflare Builds 연결을 사용하므로 저장소에 API 토큰을 넣지 않습니다.

## 로컬 실행

Node 24 이상이면 별도 서버 패키지 설치 없이 실행할 수 있습니다.

```sh
npm start
```

브라우저에서 `http://localhost:8080`으로 접속합니다. `data/everdawn.sqlite`가 생성됩니다. 다른 기기에서 플레이하려면 실행한 컴퓨터의 LAN 주소를 사용하세요. Docker는 `docker compose up --build`로 실행하며 `everdawn-data` 볼륨에 저장합니다.

Cloudflare와 같은 런타임을 로컬에서 확인하려면:

```sh
npm ci
npm run dev:cloudflare
```

Wrangler 로컬 저장과 실제 서비스 저장은 분리됩니다. 개인 HTML만 열면 개인 모험을 플레이하며 온라인은 서버 주소에서 접속합니다.

## 게임 시스템

- 64명 동시 접속 상한, 채널당 지역별 32명. 지역 정원에 따라 채널을 나누며 파티는 같은 채널로 합류합니다. 실제 플레이어만 표시하며 접속자를 흉내 내는 봇은 없습니다.
- 일반 파티 4인, 공격대 8인. 공동 레이드 3종은 최소 2명과 방어·공격 역할을 요구합니다. 지원 기술은 근처 동료에게 실제 회복·보호막·강화를 적용합니다.
- 몬스터 체력·위치·장치·자원은 지역에서 공유합니다. 적을 처치한 참여자와 근처 파티원이 보상을 나눠 받습니다. 적은 한 번만 움직이고 한 번만 죽음 보상을 지급합니다.
- 길드 공동 목표·기금·성장 가호, 지역 대화, 거래소, 개인 거래, 우편을 제공합니다.
- 서버 획득 미귀속 장비를 거래할 수 있습니다. 등록·제안 시 물품과 주화를 보관하고 SQLite transaction으로 확정합니다. 제안이 바뀌면 양쪽 확인이 초기화됩니다. 서버 중단 시 미완료 거래는 우편으로 반환합니다.
- 장비 206종, 기술 144개, 속성 5개, 세트 8종, 무기 각인 5종. 전직은 기존처럼 한 계열의 1차→2차→3차 경로만 투자할 수 있습니다.
- 레벨 상한 50 이후 숙련 100단계가 누적됩니다. 장비 수집·34개 업적·일간/주간 원정 수첩·정령 소환은 재접속과 재배포 후에도 유지됩니다.
- 정령 소환은 게임 보상인 별 조각만 소비합니다. 일반 78%, 희귀 20%, 전설 2%, 50회 이내 전설 보장입니다. 중복은 가루로 바뀝니다.
- PvP는 양쪽이 수락하는 훈련 결투입니다. 기본 수치를 정규화하고 전직·기술 선택은 유지합니다. 패배 시 장비·경험치·금화는 잃지 않습니다.

## 개발·검증

```sh
npm run check:game
npm run check:online
npm run check:net
npm run check:cloudflare
```

`check:cloudflare`는 실행 중인 로컬 Wrangler 서버만 대상으로 합니다. 테스트 계정을 실제 서비스에 만들지 않습니다. 검증은 짧은 전투 판정과 API 요청만 사용하며 브라우저 자동화·전체 게임 자동 플레이를 수행하지 않습니다.

온라인 이동은 입력 순번과 처리 시간 확인을 사용합니다. `rpg-netcode.js`가 서버 미처리 입력만 재적용하고 표시 오차를 부드럽게 보정합니다. 이전 접속의 입력·응답은 무시하며 파티·레이드의 실제 인스턴스는 재접속 후에도 이어집니다. 프로토콜이 바뀐 업데이트 후에는 새로고침하고 다시 접속하세요.

`rpg-engine.js`는 공통 전투·성장 엔진입니다. `server/`의 공유 월드·경제 규칙은 Node와 Worker 양쪽에서 재사용합니다. `build-cloudflare.cjs`가 Worker용 함수 모듈을 생성하므로 생성 파일을 직접 편집하지 마세요. `cloudflare/store.mjs`와 `server/store.cjs`는 동일한 저장 계약을 각각 Durable Object SQLite와 Node SQLite에 연결합니다.

현재는 하나의 권위 월드와 SQLite transaction을 사용하는 소규모 MMORPG 프로토타입입니다. 수천 명 규모의 샤딩·분산 매칭·운영 관리 도구는 구현 범위에 포함되지 않습니다. 정원과 전투·경제·확률 계수는 DB에서 조정합니다.
