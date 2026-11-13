// Game content database. Edit the JSON-compatible object below; keep logic in index.html.
window.GAME_DB = {
  "_docs": {
    "title": "밀물의 설계자 · 콘텐츠 DB",
    "editing": "game-db.js의 window.GAME_DB 객체만 편집하면 수치·직업·기술·적·지형·장비·항로·전투를 추가/수정/삭제할 수 있습니다. 엔진은 콘텐츠 ID를 분기하지 않습니다. 배열의 id와 참조는 고유해야 합니다.",
    "abilitySchema": "abilities: {id,name,description,icon,color,cost,target,range,empty?,maxUses?,effects:[{op,...}]}. target=self|cell|enemy|row. range=-1은 무제한. effects의 op=move|damage|pull|push|shift|shield|trap|energy|heal. value, distance, direction, radius 등을 지정합니다.",
    "relicSchema": "relics: {id,name,description,icon,stats:{damageBonus,...},hooks:[{event,limit,effects}]}. event=shift|kill|turnStart|battleStart. limit은 턴당 발동 수(-1=무제한). effect의 target=player 지정 가능.",
    "enemySchema": "enemies 키에 새 적을 추가한 뒤 encounters.spawns에서 참조합니다. pattern=point|cross|ray|row|ring. patternParams.radius, damage, hp, move, preferredRange, xp로 행동을 구성합니다.",
    "terrainSchema": "terrain 키에 색상, 이름, enter/turnStart 효과 배열을 지정합니다. 효과 대상은 해당 칸의 유닛입니다. perTurn=true는 같은 유닛에게 턴당 1회 적용합니다.",
    "encounterSchema": "encounters의 배열 길이가 총 전투 수입니다. spawns=[{type,x,y}], terrain=[{type,x,y}], playerStart={x,y}, rewards는 rewards DB를 참조합니다.",
    "effectsExample": {
      "id": "example",
      "name": "쌍방 압력",
      "description": "적에게 피해를 주고 밀어냅니다.",
      "icon": "attack",
      "color": "#a3e6cf",
      "cost": 1,
      "target": "enemy",
      "range": 2,
      "effects": [
        {
          "op": "damage",
          "value": 3,
          "scale": "damageBonus"
        },
        {
          "op": "push",
          "distance": 1
        }
      ]
    },
    "numericPolicy": "밸런스 수치·콘텐츠·초깃값·맵·보상·난수 설정은 이 DB에 둡니다. 엔진의 0/1은 배열 인덱스·상태 초기화·격자 알고리즘 등 구조적 상수입니다.",
    "resolution": [
      "플레이어 행동(되돌리기 가능)",
      "생존한 적이 예고된 좌표에 순서대로 공격(아군 피해 가능)",
      "예고된 자연 조류가 한 행을 순환 이동",
      "생존한 적이 접근하고 지형 효과 발동",
      "압력 피해 → 보호막 감소 → 에너지 회복 → 새로운 적 의도 공개"
    ],
    "uiSchema": "ui에는 화면 문구·벡터 아이콘·색상·저장 설정이 있습니다. abilities.cardTemplate의 {range},{damage},{shield},{pull},{push},{trap},{energy}는 현재 빌드 효과를 반영해 자동 표시됩니다. 아이콘은 ui.icons의 키를 참조합니다.",
    "files": {
      "game-db.js": "게임 데이터의 유일한 원본. JSON 형식 객체만 관리하며 실행 로직을 추가하지 않습니다.",
      "index.html": "화면과 게임 엔진. game-db.js를 먼저 동기 로드하고 window.GAME_DB를 참조합니다.",
      "standaloneExport": "콘텐츠 DB의 HTML 내려받기는 현재 데이터를 포함한 오프라인 단일 실행본을 만듭니다. 저장소 데이터 수정은 game-db.js에 반영합니다."
    }
  },
  "config": {
    "version": 1,
    "saveVersion": 1,
    "width": 7,
    "height": 6,
    "title": "밀물의 설계자",
    "subtitle": "떠도는 도시, 고정된 조준점. 판을 움직여 운명을 바꾸세요.",
    "defaultSeed": "TIDE-073",
    "defaultClass": "architect",
    "defaultTerrain": "deck",
    "startStage": 0,
    "startTurn": 1,
    "startLevel": 1,
    "startXp": 0,
    "startShield": 0,
    "energyCap": 7,
    "maxHistory": 24,
    "maxLogs": 35,
    "xpBase": 8,
    "xpGrowth": 4,
    "levelHp": 3,
    "levelHeal": 3,
    "levelDamageInterval": 3,
    "levelDamageBonus": 1,
    "shieldDecay": 2,
    "pressureStart": 8,
    "pressureDamage": 1,
    "pressureGrowth": 1,
    "battleHeal": 4,
    "rewardChoices": 3,
    "routeChoices": 2,
    "baseStats": {
      "damageBonus": 0,
      "pullBonus": 0,
      "shieldBonus": 0,
      "trapBonus": 0,
      "maxEnergyBonus": 0,
      "movementBonus": 0,
      "rangeBonus": 0
    },
    "tideDirections": [
      -1,
      1
    ],
    "tideRowSequence": [
      0,
      2,
      5,
      1,
      4,
      3
    ],
    "entityPrefix": "e",
    "logKinds": [
      "info",
      "good",
      "bad",
      "system"
    ],
    "routeEnemyHpMultiplier": 1,
    "routeEnemyDamageBonus": 0,
    "seedHash": {
      "offset": 2166136261,
      "prime": 16777619
    },
    "rng": {
      "a": 1664525,
      "c": 1013904223,
      "m": 4294967296
    },
    "enemyIntentScale": 1,
    "enemyFriendlyFireScale": 1,
    "trapDefaultOwner": "player",
    "endTurnLabel": "조류를 넘긴다",
    "rewardHeal": 7,
    "rewardXp": 6,
    "rewardHp": 4,
    "routeHeal": 6,
    "routeXp": 5,
    "tideDistance": 1
  },
  "classes": [
    {
      "id": "architect",
      "name": "조류 설계자",
      "tag": "위치 조작 · 연쇄 공격",
      "description": "적의 포격을 옮겨 담는 도시의 항해사. 갈고리로 사선을 엮습니다.",
      "icon": "shift",
      "color": "#83e6d1",
      "hp": 27,
      "energy": 3,
      "stats": {
        "pullBonus": 0
      },
      "startingActions": [
        "move",
        "strike",
        "shiftLeft",
        "shiftRight",
        "guard",
        "harpoon"
      ],
      "startingRelics": [
        "slipstream"
      ]
    },
    {
      "id": "saboteur",
      "name": "잔향 공병",
      "tag": "함정 · 유도 · 폭발",
      "description": "지나간 자리에 파동을 남기는 해체 기술자. 적의 접근이 곧 기회입니다.",
      "icon": "trap",
      "color": "#e7b675",
      "hp": 24,
      "energy": 3,
      "stats": {
        "trapBonus": 1
      },
      "startingActions": [
        "move",
        "strike",
        "shiftLeft",
        "shiftRight",
        "guard",
        "mine"
      ],
      "startingRelics": [
        "capacitor"
      ]
    },
    {
      "id": "duelist",
      "name": "방파제 결투가",
      "tag": "밀치기 · 방어 · 압박",
      "description": "위험한 사선 안으로 걸어 들어가는 항구의 수호자. 지형을 무기로 씁니다.",
      "icon": "shield",
      "color": "#aeb6ff",
      "hp": 32,
      "energy": 3,
      "stats": {
        "shieldBonus": 1
      },
      "startingActions": [
        "move",
        "strike",
        "shiftLeft",
        "shiftRight",
        "guard",
        "ram"
      ],
      "startingRelics": [
        "armor"
      ]
    }
  ],
  "terrain": {
    "deck": {
      "name": "부유 갑판",
      "description": "안전한 이동 공간. 조류와 함께 순환합니다.",
      "icon": "water",
      "color": "#1b343a"
    },
    "charge": {
      "name": "축전 부표",
      "description": "밟으면 에너지 +1. 같은 부표는 한 턴에 한 번만 충전합니다.",
      "icon": "energy",
      "color": "#467b65",
      "perTurn": true,
      "playerOnly": true,
      "enter": [
        {
          "op": "energy",
          "value": 1
        }
      ]
    },
    "spike": {
      "name": "파열 산호",
      "description": "진입한 유닛에게 피해 2. 밀치기·갈고리로 적을 유도하세요.",
      "icon": "reef",
      "color": "#735046",
      "perTurn": false,
      "enter": [
        {
          "op": "damage",
          "value": 2
        }
      ]
    },
    "cover": {
      "name": "방벽 부유물",
      "description": "턴 시작 시 이 칸의 유닛은 보호막 +2.",
      "icon": "shield",
      "color": "#3c5f74",
      "turnStart": [
        {
          "op": "shield",
          "value": 2
        }
      ]
    }
  },
  "abilities": [
    {
      "id": "move",
      "name": "갑판 도약",
      "short": "이동",
      "description": "빈 칸으로 최대 2칸 이동. 이동 경로의 산호와 함정은 피하고, 도착 칸 효과만 받습니다.",
      "icon": "move",
      "color": "#88d7ce",
      "cost": 1,
      "target": "cell",
      "range": 2,
      "rangeScale": "movementBonus",
      "empty": true,
      "effects": [
        {
          "op": "move"
        }
      ],
      "cardTemplate": "빈 칸으로 최대 {range}칸 도약"
    },
    {
      "id": "strike",
      "name": "공명 타격",
      "short": "타격",
      "description": "인접한 적에게 피해 4. 피해 보너스가 적용됩니다.",
      "icon": "attack",
      "color": "#eac18a",
      "cost": 1,
      "target": "enemy",
      "range": 1,
      "effects": [
        {
          "op": "damage",
          "value": 4,
          "scale": "damageBonus"
        }
      ],
      "cardTemplate": "인접한 적에게 피해 {damage}"
    },
    {
      "id": "shiftLeft",
      "name": "서쪽 조류",
      "short": "조류 ←",
      "description": "선택한 행 전체를 왼쪽으로 1칸 순환. 유닛·바닥·함정이 함께 이동하지만 적 조준점은 고정됩니다.",
      "icon": "left",
      "color": "#8bd9c2",
      "cost": 1,
      "target": "row",
      "range": -1,
      "effects": [
        {
          "op": "shift",
          "direction": -1,
          "distance": 1
        }
      ],
      "cardTemplate": "원하는 줄을 왼쪽으로 {shift}칸"
    },
    {
      "id": "shiftRight",
      "name": "동쪽 조류",
      "short": "조류 →",
      "description": "선택한 행 전체를 오른쪽으로 1칸 순환. 유닛·바닥·함정이 함께 이동하지만 적 조준점은 고정됩니다.",
      "icon": "right",
      "color": "#8bd9c2",
      "cost": 1,
      "target": "row",
      "range": -1,
      "effects": [
        {
          "op": "shift",
          "direction": 1,
          "distance": 1
        }
      ],
      "cardTemplate": "원하는 줄을 오른쪽으로 {shift}칸"
    },
    {
      "id": "guard",
      "name": "방파 방벽",
      "short": "방벽",
      "description": "보호막 4 획득. 보호막은 피해를 먼저 흡수하며 매 턴 2 감소합니다.",
      "icon": "shield",
      "color": "#9eacdf",
      "cost": 1,
      "target": "self",
      "range": 0,
      "effects": [
        {
          "op": "shield",
          "value": 4,
          "scale": "shieldBonus",
          "target": "player"
        }
      ],
      "cardTemplate": "보호막 {shield} 획득 · 즉시 사용"
    },
    {
      "id": "harpoon",
      "name": "중력 갈고리",
      "short": "갈고리",
      "description": "3칸 내 적에게 피해 1 후 내 방향으로 2칸 당깁니다. 이동 경로의 산호와 함정이 발동합니다.",
      "icon": "hook",
      "color": "#b2cfeb",
      "cost": 1,
      "target": "enemy",
      "range": 3,
      "effects": [
        {
          "op": "damage",
          "value": 1,
          "scale": "damageBonus"
        },
        {
          "op": "pull",
          "distance": 2,
          "scale": "pullBonus"
        }
      ],
      "cardTemplate": "사거리 {range} · 피해 {damage} + {pull}칸 당김"
    },
    {
      "id": "mine",
      "name": "잔향 기뢰",
      "short": "기뢰",
      "description": "3칸 내 빈 칸에 피해 5 기뢰 설치. 먼저 진입한 유닛에게 발동하며 함께 이동하는 바닥에 고정됩니다.",
      "icon": "trap",
      "color": "#e1b48c",
      "cost": 1,
      "target": "cell",
      "range": 3,
      "empty": true,
      "noTrap": true,
      "effects": [
        {
          "op": "trap",
          "value": 5,
          "scale": "trapBonus",
          "radius": 0
        }
      ],
      "cardTemplate": "사거리 {range} · 피해 {trap} 기뢰"
    },
    {
      "id": "ram",
      "name": "쇄파 돌격",
      "short": "밀치기",
      "description": "인접한 적에게 피해 2 후 2칸 밀어냅니다. 산호와 기뢰를 적극 활용하세요.",
      "icon": "right",
      "color": "#d3b3a4",
      "cost": 1,
      "target": "enemy",
      "range": 1,
      "effects": [
        {
          "op": "damage",
          "value": 2,
          "scale": "damageBonus"
        },
        {
          "op": "push",
          "distance": 2
        }
      ],
      "cardTemplate": "피해 {damage} + {push}칸 밀치기"
    },
    {
      "id": "snipe",
      "name": "위상 관통",
      "short": "관통",
      "description": "4칸 내 적에게 피해 7. 보호막을 무시합니다. 에너지 2 소모.",
      "icon": "crosshair",
      "color": "#d1a8ed",
      "cost": 2,
      "target": "enemy",
      "range": 4,
      "effects": [
        {
          "op": "damage",
          "value": 7,
          "scale": "damageBonus",
          "pierce": true
        }
      ],
      "cardTemplate": "사거리 {range} · 방어 관통 피해 {damage}"
    },
    {
      "id": "overclock",
      "name": "금지된 과충전",
      "short": "과충전",
      "description": "체력을 3 잃고 에너지 2 획득. 한 턴에 한 번. 체력 비용은 보호막을 무시합니다.",
      "icon": "energy",
      "color": "#eea68f",
      "cost": 0,
      "target": "self",
      "range": 0,
      "maxUses": 1,
      "minHp": 4,
      "effects": [
        {
          "op": "damage",
          "value": 3,
          "target": "player",
          "pierce": true
        },
        {
          "op": "energy",
          "value": 2,
          "target": "player"
        }
      ],
      "cardTemplate": "체력 {damage} → 행동력 {energy}"
    },
    {
      "id": "blink",
      "name": "비상 도선",
      "short": "도선",
      "description": "4칸 내 빈 칸으로 이동한 뒤 보호막 2. 에너지 2 소모.",
      "icon": "move",
      "color": "#afcce7",
      "cost": 2,
      "target": "cell",
      "range": 4,
      "empty": true,
      "effects": [
        {
          "op": "move"
        },
        {
          "op": "shield",
          "value": 2,
          "target": "player"
        }
      ],
      "cardTemplate": "{range}칸 이동 + 보호막 {shield}"
    },
    {
      "id": "wave",
      "name": "원형 파동",
      "short": "파동",
      "description": "자신 주변 1칸의 모든 적에게 피해 3. 상하좌우 적을 동시에 공격합니다.",
      "icon": "crosshair",
      "color": "#d2bce5",
      "cost": 2,
      "target": "self",
      "range": 0,
      "effects": [
        {
          "op": "damage",
          "value": 3,
          "scale": "damageBonus",
          "selector": "enemies",
          "radius": 1
        }
      ],
      "cardTemplate": "인접한 모든 적에게 피해 {damage}"
    }
  ],
  "enemies": {
    "sentry": {
      "name": "직선 감시기",
      "description": "현재 플레이어 방향의 직선 전체를 사격합니다.",
      "icon": "gunner",
      "color": "#ecb482",
      "hp": 7,
      "damage": 3,
      "move": 1,
      "preferredRange": 3,
      "pattern": "ray",
      "patternParams": {
        "radius": 0
      },
      "xp": 4
    },
    "needle": {
      "name": "추적 바늘",
      "description": "플레이어가 서 있던 한 칸을 찌릅니다.",
      "icon": "charger",
      "color": "#e88f8b",
      "hp": 5,
      "damage": 3,
      "move": 2,
      "preferredRange": 1,
      "pattern": "point",
      "patternParams": {
        "radius": 0
      },
      "xp": 3
    },
    "mortar": {
      "name": "십자 포격수",
      "description": "조준한 칸과 상하좌우를 폭격합니다.",
      "icon": "crosshair",
      "color": "#dfa3bd",
      "hp": 9,
      "damage": 3,
      "move": 1,
      "preferredRange": 3,
      "pattern": "cross",
      "patternParams": {
        "radius": 1
      },
      "xp": 5
    },
    "sweeper": {
      "name": "수평 절단기",
      "description": "플레이어가 있는 행 전체를 공격합니다. 다른 행으로 피하세요.",
      "icon": "shift",
      "color": "#b3a7e7",
      "hp": 8,
      "damage": 2,
      "move": 1,
      "preferredRange": 2,
      "pattern": "row",
      "patternParams": {
        "radius": 0
      },
      "xp": 5
    },
    "warden": {
      "name": "닻의 심장",
      "description": "도시를 묶은 기계. 넓은 십자 공격과 두꺼운 보호막을 가집니다.",
      "icon": "boss",
      "color": "#e6ba7f",
      "hp": 22,
      "shield": 3,
      "damage": 4,
      "move": 1,
      "preferredRange": 2,
      "pattern": "cross",
      "patternParams": {
        "radius": 2
      },
      "xp": 10
    }
  },
  "relics": [
    {
      "id": "slipstream",
      "name": "미끄럼 베어링",
      "description": "매 턴 첫 수동 조류 이동 후 보호막 +2.",
      "icon": "shift",
      "hooks": [
        {
          "event": "shift",
          "limit": 1,
          "effects": [
            {
              "op": "shield",
              "value": 2,
              "target": "player"
            }
          ]
        }
      ]
    },
    {
      "id": "capacitor",
      "name": "차폐 축전기",
      "description": "매 턴 첫 적 처치 시 에너지 +1.",
      "icon": "energy",
      "hooks": [
        {
          "event": "kill",
          "limit": 1,
          "effects": [
            {
              "op": "energy",
              "value": 1,
              "target": "player"
            }
          ]
        }
      ]
    },
    {
      "id": "armor",
      "name": "진주 갑피",
      "description": "방벽 기술의 보호막 +2.",
      "icon": "shield",
      "stats": {
        "shieldBonus": 2
      }
    },
    {
      "id": "edge",
      "name": "균열 증폭기",
      "description": "직접 공격 피해 +1. 타격·갈고리·관통·파동에 모두 적용.",
      "icon": "attack",
      "stats": {
        "damageBonus": 1
      }
    },
    {
      "id": "coil",
      "name": "예비 조류 코일",
      "description": "매 턴 최대 에너지 +1.",
      "icon": "energy",
      "stats": {
        "maxEnergyBonus": 1
      }
    },
    {
      "id": "tether",
      "name": "장거리 계류삭",
      "description": "갈고리 당기는 거리 +1.",
      "icon": "hook",
      "stats": {
        "pullBonus": 1
      }
    },
    {
      "id": "detonator",
      "name": "이중 공명핵",
      "description": "설치하는 기뢰 피해 +3.",
      "icon": "trap",
      "stats": {
        "trapBonus": 3
      }
    },
    {
      "id": "sails",
      "name": "접이식 보조돛",
      "description": "갑판 도약 이동 거리 +1.",
      "icon": "move",
      "stats": {
        "movementBonus": 1
      }
    },
    {
      "id": "recycler",
      "name": "잔해 재생기",
      "description": "매 턴 첫 적 처치 시 체력 +2.",
      "icon": "repair",
      "hooks": [
        {
          "event": "kill",
          "limit": 1,
          "effects": [
            {
              "op": "heal",
              "value": 2,
              "target": "player"
            }
          ]
        }
      ]
    },
    {
      "id": "undertow",
      "name": "역류 터빈",
      "description": "매 턴 첫 수동 조류 이동의 에너지 1 회복.",
      "icon": "shift",
      "hooks": [
        {
          "event": "shift",
          "limit": 1,
          "effects": [
            {
              "op": "energy",
              "value": 1,
              "target": "player"
            }
          ]
        }
      ]
    }
  ],
  "rewards": [
    {
      "id": "repair",
      "kind": "heal",
      "title": "항구 응급 수리",
      "description": "체력 7 회복. 이미 건강하다면 다른 보상이 유리합니다.",
      "icon": "repair",
      "value": 7
    },
    {
      "id": "hull",
      "kind": "maxHp",
      "title": "확장 부유 선체",
      "description": "최대 체력 +4, 체력 +4.",
      "icon": "shield",
      "value": 4
    },
    {
      "id": "experience",
      "kind": "xp",
      "title": "도시의 기억",
      "description": "경험치 +6. 레벨업 시 최대 체력과 체력 +3.",
      "icon": "reef",
      "value": 6
    },
    {
      "id": "learn-harpoon",
      "kind": "ability",
      "ref": "harpoon"
    },
    {
      "id": "learn-mine",
      "kind": "ability",
      "ref": "mine"
    },
    {
      "id": "learn-ram",
      "kind": "ability",
      "ref": "ram"
    },
    {
      "id": "learn-snipe",
      "kind": "ability",
      "ref": "snipe"
    },
    {
      "id": "learn-overclock",
      "kind": "ability",
      "ref": "overclock"
    },
    {
      "id": "learn-blink",
      "kind": "ability",
      "ref": "blink"
    },
    {
      "id": "learn-wave",
      "kind": "ability",
      "ref": "wave"
    },
    {
      "id": "relic-edge",
      "kind": "relic",
      "ref": "edge"
    },
    {
      "id": "relic-coil",
      "kind": "relic",
      "ref": "coil"
    },
    {
      "id": "relic-tether",
      "kind": "relic",
      "ref": "tether"
    },
    {
      "id": "relic-detonator",
      "kind": "relic",
      "ref": "detonator"
    },
    {
      "id": "relic-sails",
      "kind": "relic",
      "ref": "sails"
    },
    {
      "id": "relic-recycler",
      "kind": "relic",
      "ref": "recycler"
    },
    {
      "id": "relic-undertow",
      "kind": "relic",
      "ref": "undertow"
    },
    {
      "id": "relic-armor",
      "kind": "relic",
      "ref": "armor"
    },
    {
      "id": "relic-capacitor",
      "kind": "relic",
      "ref": "capacitor"
    },
    {
      "id": "relic-slipstream",
      "kind": "relic",
      "ref": "slipstream"
    }
  ],
  "routes": [
    {
      "id": "calm",
      "title": "고요한 수로",
      "description": "전투 진입 시 체력 6 회복. 적은 표준 능력치.",
      "icon": "water",
      "color": "#94d4c0",
      "enemyHpMultiplier": 1,
      "enemyDamageBonus": 0,
      "effects": [
        {
          "op": "heal",
          "value": 6,
          "target": "player"
        }
      ]
    },
    {
      "id": "storm",
      "title": "폭풍의 잔해",
      "description": "적 체력 +25%, 공격 +1. 진입 시 경험치 5와 무작위 장비를 획득.",
      "icon": "energy",
      "color": "#dfb382",
      "enemyHpMultiplier": 1.25,
      "enemyDamageBonus": 1,
      "bonusRelics": 1,
      "xp": 5,
      "effects": []
    },
    {
      "id": "current",
      "title": "축전소 우회로",
      "description": "다음 전투에 축전 부표 2개 추가. 체력 3 회복.",
      "icon": "crosshair",
      "color": "#b9b1e1",
      "enemyHpMultiplier": 1,
      "enemyDamageBonus": 0,
      "addTerrain": {
        "type": "charge",
        "count": 2
      },
      "effects": [
        {
          "op": "heal",
          "value": 3,
          "target": "player"
        }
      ]
    }
  ],
  "encounters": [
    {
      "id": "harbor",
      "name": "침묵의 부두",
      "subtitle": "첫 번째 해방 · 조준점을 훔치다",
      "playerStart": {
        "x": 3,
        "y": 4
      },
      "spawns": [
        {
          "type": "sentry",
          "x": 3,
          "y": 1
        },
        {
          "type": "needle",
          "x": 2,
          "y": 4
        }
      ],
      "terrain": [
        {
          "type": "spike",
          "x": 4,
          "y": 2
        },
        {
          "type": "charge",
          "x": 2,
          "y": 3
        },
        {
          "type": "cover",
          "x": 5,
          "y": 4
        }
      ],
      "tip": "동쪽 조류로 내 행을 밀어보세요. 바늘이 내 조준점으로 밀려 들어갑니다."
    },
    {
      "id": "canal",
      "name": "유리 운하",
      "subtitle": "두 번째 해방 · 흐름을 엮다",
      "playerStart": {
        "x": 3,
        "y": 4
      },
      "spawns": [
        {
          "type": "mortar",
          "x": 3,
          "y": 1
        },
        {
          "type": "needle",
          "x": 1,
          "y": 3
        },
        {
          "type": "sentry",
          "x": 5,
          "y": 2
        }
      ],
      "terrain": [
        {
          "type": "spike",
          "x": 2,
          "y": 2
        },
        {
          "type": "spike",
          "x": 4,
          "y": 3
        },
        {
          "type": "charge",
          "x": 1,
          "y": 4
        },
        {
          "type": "cover",
          "x": 5,
          "y": 4
        }
      ],
      "tip": "갈고리와 밀치기는 산호를 발동시킵니다. 십자 포격의 빈틈을 읽으세요."
    },
    {
      "id": "foundry",
      "name": "뒤집힌 조선소",
      "subtitle": "세 번째 해방 · 수평선의 균열",
      "playerStart": {
        "x": 3,
        "y": 5
      },
      "spawns": [
        {
          "type": "sweeper",
          "x": 1,
          "y": 1
        },
        {
          "type": "mortar",
          "x": 5,
          "y": 1
        },
        {
          "type": "needle",
          "x": 2,
          "y": 3
        },
        {
          "type": "needle",
          "x": 4,
          "y": 3
        }
      ],
      "terrain": [
        {
          "type": "spike",
          "x": 2,
          "y": 2
        },
        {
          "type": "spike",
          "x": 4,
          "y": 2
        },
        {
          "type": "charge",
          "x": 3,
          "y": 3
        },
        {
          "type": "cover",
          "x": 1,
          "y": 4
        },
        {
          "type": "cover",
          "x": 5,
          "y": 4
        }
      ],
      "tip": "수평 절단기는 행 전체를 베어냅니다. 좌우 조류만으로 피할 수는 없습니다."
    },
    {
      "id": "spire",
      "name": "역류 관측탑",
      "subtitle": "네 번째 해방 · 사선을 교차하다",
      "playerStart": {
        "x": 3,
        "y": 4
      },
      "spawns": [
        {
          "type": "sentry",
          "x": 1,
          "y": 1
        },
        {
          "type": "sentry",
          "x": 5,
          "y": 1
        },
        {
          "type": "sweeper",
          "x": 3,
          "y": 0
        },
        {
          "type": "mortar",
          "x": 3,
          "y": 2
        }
      ],
      "terrain": [
        {
          "type": "spike",
          "x": 2,
          "y": 3
        },
        {
          "type": "spike",
          "x": 4,
          "y": 3
        },
        {
          "type": "charge",
          "x": 0,
          "y": 4
        },
        {
          "type": "charge",
          "x": 6,
          "y": 4
        },
        {
          "type": "cover",
          "x": 3,
          "y": 5
        }
      ],
      "tip": "보호막은 여러 공격에 함께 소모됩니다. 먼저 죽일 적과 피할 사선을 선택하세요."
    },
    {
      "id": "heart",
      "name": "도시의 닻",
      "subtitle": "마지막 해방 · 고정된 운명을 끊다",
      "playerStart": {
        "x": 3,
        "y": 5
      },
      "spawns": [
        {
          "type": "warden",
          "x": 3,
          "y": 1
        },
        {
          "type": "sentry",
          "x": 1,
          "y": 1
        },
        {
          "type": "sweeper",
          "x": 5,
          "y": 1
        },
        {
          "type": "needle",
          "x": 1,
          "y": 3
        },
        {
          "type": "needle",
          "x": 5,
          "y": 3
        }
      ],
      "terrain": [
        {
          "type": "spike",
          "x": 2,
          "y": 2
        },
        {
          "type": "spike",
          "x": 4,
          "y": 2
        },
        {
          "type": "charge",
          "x": 2,
          "y": 4
        },
        {
          "type": "charge",
          "x": 4,
          "y": 4
        },
        {
          "type": "cover",
          "x": 3,
          "y": 3
        }
      ],
      "tip": "닻의 심장도 자신의 포격에 피해를 입습니다. 지금까지 만든 빌드로 도시를 해방하세요."
    }
  ],
  "labels": {
    "player": "항해사",
    "right": "오른쪽",
    "left": "왼쪽",
    "patterns": {
      "point": "정점 타격",
      "cross": "십자 포격",
      "ray": "직선 사격",
      "row": "수평 절단",
      "ring": "외곽 포격"
    }
  },
  "messages": {
    "valid": "선택 가능",
    "classMissing": "항해사 데이터를 찾을 수 없습니다.",
    "runCreated": "출항했습니다. 적의 조준점은 조류 이동 후에도 고정됩니다.",
    "notBattle": "전투 중에만 사용할 수 있습니다.",
    "energyShort": "에너지가 부족합니다.",
    "usedUp": "이번 턴 사용 횟수를 모두 소모했습니다.",
    "hpShort": "과충전 비용을 지불할 체력이 부족합니다.",
    "unknownAction": "기술을 찾을 수 없습니다.",
    "outside": "보드 안의 칸을 선택하세요.",
    "outOfRange": "기술 사거리 밖입니다.",
    "occupied": "빈 칸을 선택하세요.",
    "trapExists": "이미 기뢰가 설치된 칸입니다.",
    "needEnemy": "적이 있는 칸을 선택하세요.",
    "cannotUndo": "되돌릴 행동이 없습니다. 턴을 넘기면 이전 행동을 되돌릴 수 없습니다.",
    "undone": "마지막 행동을 되돌렸습니다.",
    "actionDone": "{name} 실행.",
    "turnDone": "적의 포격과 자연 조류가 지나갔습니다.",
    "notReward": "지금은 보상 선택 단계가 아닙니다.",
    "unknownReward": "보상을 찾을 수 없습니다.",
    "rewardDone": "성장을 선택했습니다. 다음 항로를 고르세요.",
    "notRoute": "지금은 항로 선택 단계가 아닙니다.",
    "unknownRoute": "항로를 찾을 수 없습니다.",
    "routeDone": "다음 해역에 도착했습니다.",
    "invalidSave": "현재 DB와 호환되는 올바른 저장 파일이 아닙니다.",
    "loaded": "저장된 항해를 불러왔습니다.",
    "levelUp": "레벨 {level}! 최대 체력과 체력 +{hp}.",
    "damage": "{unit}: 피해 {value} · 보호막 흡수 {shield}.",
    "kill": "{unit} 해체. 경험치를 회수했습니다.",
    "trapTrigger": "{unit}이(가) 잔향 기뢰를 밟았습니다.",
    "shift": "{row}행을 {direction}으로 순환 이동했습니다. 조준점은 유지됩니다.",
    "learnTitle": "기술 습득 · {name}",
    "lost": "항해가 멈췄습니다. 새 빌드로 다시 출항할 수 있습니다.",
    "won": "도시를 묶은 마지막 닻이 끊어졌습니다. 밀물이 당신의 편입니다.",
    "battleWon": "해역 해방! 긴급 수리로 체력 {heal} 회복. 성장 보상 하나를 선택하세요.",
    "battleStart": "{name} 진입. 적의 공격은 표시된 좌표에 고정됩니다.",
    "rowName": "{row}행",
    "cellName": "({x}, {y})",
    "actionPreview": "{action} → {target}",
    "actionUsed": "{name} 실행.",
    "enemyAttack": "{name} · {pattern} 실행.",
    "pressure": "해역 압력으로 체력 {value} 손실. 오래 머물수록 압력이 커집니다.",
    "rewardChosen": "성장 선택: {name}.",
    "bonusRelic": "폭풍의 잔해에서 {name} 획득.",
    "intentDescription": "{name} · {pattern}: 표시된 {cells}칸에 피해 {damage}. 적도 맞습니다."
  },
  "ui": {
    "brand": {
      "title": "밀물의 설계자",
      "english": "TIDEBREAKER",
      "tagline": "도시를 움직여, 운명을 비틀다.",
      "version": "TACTICAL ROGUELITE · PROTOTYPE 01"
    },
    "theme": {
      "bg": "#0a161d",
      "panel": "#101f28",
      "line": "#29414b",
      "ink": "#e2eae9",
      "muted": "#8da8b1",
      "accent": "#a7efd9",
      "gold": "#f2ca83",
      "danger": "#f18a7d",
      "blue": "#88b8de"
    },
    "settings": {
      "storageKey": "tidebreaker.run.v1",
      "metaKey": "tidebreaker.meta.v1",
      "seedPrefix": "TIDE",
      "seedMax": 999999,
      "toastMs": 3000,
      "logLimit": 5,
      "cardShortLimit": 42,
      "coordinateStart": 65,
      "maxSeedLength": 40,
      "screenShotWidth": 1440
    },
    "text": {
      "operation": "원정 작전",
      "stage": "해역",
      "turn": "턴",
      "hp": "내구도",
      "shield": "보호막",
      "energy": "행동력",
      "level": "등급",
      "xp": "경험",
      "build": "장착한 설계",
      "emptyBuild": "아직 모듈이 없습니다. 전투 후 새로운 설계를 선택하세요.",
      "actions": "이번 수를 설계하세요",
      "actionSub": "행동을 고르고 바다 위의 칸을 선택하세요.",
      "intent": "적의 다음 수",
      "intentSub": "턴 종료 시 위에서부터 실행",
      "journal": "항해 기록",
      "boardEyebrow": "LIVE TACTICAL CHART",
      "boardTitle": "침수 도시 · 전술 지도",
      "forecast": "다음 조류",
      "shift": "줄 이동",
      "wrap": "양 끝은 연결됩니다",
      "danger": "공격 예고",
      "target": "사용 가능",
      "tile": "지형",
      "enemy": "적",
      "you": "설계자",
      "noEnemies": "이 해역의 위협이 사라졌습니다.",
      "endTurn": "턴 종료",
      "endSub": "적의 작전 실행 → 다음 턴",
      "undo": "한 수 되돌리기",
      "undoShort": "되돌리기",
      "help": "플레이 가이드",
      "db": "콘텐츠 DB",
      "save": "저장 내보내기",
      "load": "저장 불러오기",
      "newRun": "새 원정",
      "close": "닫기",
      "cancel": "취소",
      "start": "원정 시작",
      "continue": "작전 계속하기",
      "seed": "원정 코드",
      "seedPlaceholder": "같은 코드는 같은 해역을 만듭니다",
      "introEyebrow": "TURN THE TIDE",
      "introTitle": "이 도시의 지형이\n당신의 무기다.",
      "introBody": "물에 잠긴 도시, 적들은 이미 방아쇠를 당겼다. 당신은 마지막 조류 설계자. 적의 수를 읽고, 도시의 한 줄을 움직여 포격의 주인을 바꿔라.",
      "chooseClass": "시작 설계 선택",
      "coreRule": "적의 조준점은 그대로. 바닥과 유닛만 이동.",
      "rewardEyebrow": "SALVAGE & EVOLVE",
      "rewardTitle": "승리의 잔해에서, 다음 설계를.",
      "rewardBody": "이번 원정에 적용할 보상 하나를 선택하세요. 서로 다른 효과를 연결하면 새로운 전술이 됩니다.",
      "routeEyebrow": "CHOOSE YOUR CURRENT",
      "routeTitle": "다음 해역을 고르세요.",
      "routeBody": "위험과 보상을 살피고, 지금의 빌드에 맞는 항로를 선택하세요.",
      "wonEyebrow": "THE CITY REMEMBERS",
      "wonTitle": "도시가 다시 떠오릅니다.",
      "wonBody": "마지막 포대를 멈췄습니다. 이번 원정의 설계가 도시를 구했습니다.",
      "lostEyebrow": "A LESSON IN THE DEEP",
      "lostTitle": "파도는 설계도를 남긴다.",
      "lostBody": "원정은 끝났지만 다음 수는 달라질 수 있습니다. 다른 설계와 항로로 다시 도전해보세요.",
      "kills": "격파",
      "damage": "가한 피해",
      "turns": "경과 턴",
      "redirects": "유도 명중",
      "newConfirmTitle": "새로운 조류를 설계할까요?",
      "newConfirmBody": "현재 원정의 진행은 새 원정으로 교체됩니다. 필요하면 먼저 저장을 내보내세요.",
      "dbEyebrow": "DATA-DRIVEN DESIGN",
      "dbTitle": "모든 설계는 데이터에서.",
      "dbBody": "캐릭터·스킬·적·지형·보상·밸런스는 별도 game-db.js의 window.GAME_DB 객체에서 관리합니다. 저장소에서는 이 파일만 수정하면 게임에 반영됩니다. 아래 편집기는 수정된 데이터를 포함한 단일 HTML 실행본을 내려받습니다.",
      "dbValidate": "DB 검증",
      "dbDownload": "수정한 HTML 내려받기",
      "dbReset": "원본으로 되돌리기",
      "dbOkay": "DB 구조와 참조가 유효합니다.",
      "dbHelp": "새 스킬은 abilities에 효과 데이터를 추가하고, classes.startingActions 또는 rewards에 연결하세요. 엔진에 등록된 효과 연산자를 조합할 수 있습니다. 자세한 규칙은 DB의 _docs를 확인하세요.",
      "saved": "원정 저장 파일을 내보냈습니다.",
      "loaded": "저장된 원정을 복원했습니다.",
      "invalidSave": "이 게임의 올바른 저장 파일이 아닙니다.",
      "saveUnavailable": "브라우저 자동 저장을 사용할 수 없습니다. 저장 내보내기를 이용하세요.",
      "restored": "진행 중이던 원정을 이어갑니다.",
      "selected": "선택됨",
      "passive": "패시브",
      "selfTarget": "즉시 사용",
      "cost": "행동력",
      "free": "무료",
      "selectHint": "카드 선택 → 대상 칸 선택 · Space 턴 종료 · Z 되돌리기 · Esc 선택 해제",
      "keyboard": "단축키",
      "boardHint": "빨간 칸은 턴 종료 시 공격받습니다. 적을 그 칸에 밀어 넣어보세요.",
      "dangerTotal": "예상 피해",
      "noDanger": "포격 예고 없음",
      "fileName": "밀물의_설계자.html",
      "saveName": "밀물의_설계자_저장.json",
      "dbInvalid": "DB를 확인해주세요.",
      "actionFailed": "지금은 이 행동을 할 수 없습니다.",
      "confirmEnd": "공격 예고를 확인하고 턴을 종료합니다.",
      "status": "상태",
      "order": "공격 순서",
      "remaining": "남은 횟수",
      "snapshot": "작전 예측",
      "enemyOrder": "적의 공격은 표시 순서대로 진행됩니다. 먼저 격파된 적의 공격은 취소됩니다.",
      "campaign": "원정 진행",
      "helpEyebrow": "READ · REARRANGE · REVERSE",
      "helpTitle": "강한 적에게, 더 영리한 한 수.",
      "helpFooter": "완벽한 반격을 찾을 때까지 한 수 되돌리기를 사용하세요. 턴을 종료한 뒤에는 되돌릴 수 없습니다.",
      "summary": "원정 결과",
      "choose": "선택하기",
      "seedLabel": "SEED",
      "moduleCount": "모듈",
      "objectives": "작전 목표",
      "objectiveBody": "모든 적을 격파하고 다음 해역으로 전진하세요. 마지막 해역의 적을 무너뜨리면 승리합니다.",
      "noSelection": "지도 위의 위험을 읽고 행동 카드를 선택하세요.",
      "apEmpty": "행동력을 모두 사용했습니다. 적의 작전을 확인하고 턴을 종료하세요.",
      "loadTitle": "저장 JSON 불러오기",
      "dbNote": "내려받은 파일을 다시 열면 수정된 DB가 적용됩니다. DB 변경 시 기존 저장은 사용하지 않는 것을 권장합니다.",
      "terrainLegend": "파란 지형을 활용하고 붉은 사선을 피하세요.",
      "nextCurrent": "조류는 턴 종료 시 작동합니다.",
      "noHistory": "이번 턴의 첫 수입니다.",
      "pressure": "장기전 경보",
      "moduleEmpty": "첫 전투에서 나만의 빌드를 시작하세요.",
      "op": "OPERATION",
      "stageOf": "/",
      "attack": "공격",
      "seedCopied": "원정 코드가 복사되었습니다.",
      "download": "HTML 받기",
      "forecastPrefix": "턴 종료 예측",
      "forecastDamage": "최대 내구도 피해",
      "forecastFriendly": "오사 가능",
      "forecastPressure": "수압 피해",
      "forecastNote": "사선 기준 상한입니다. 먼저 격파된 적의 공격이 취소되면 실제 피해는 줄어듭니다."
    },
    "tutorial": [
      {
        "step": "01",
        "title": "적의 수를 읽는다",
        "body": "빨간 사선은 적이 조준한 칸입니다. 오른쪽 작전 목록에 마우스를 올리면 각 적의 공격 범위를 확인할 수 있습니다.",
        "icon": "eye"
      },
      {
        "step": "02",
        "title": "도시의 한 줄을 비튼다",
        "body": "조류 행동을 선택하고 원하는 줄을 누르세요. 그 줄의 바닥·함정·모든 유닛이 함께 이동합니다. 줄 끝은 반대편과 연결됩니다.",
        "icon": "shift"
      },
      {
        "step": "03",
        "title": "적의 공격을 돌려준다",
        "body": "조준점은 움직이지 않습니다. 적을 다른 적의 공격 칸에 놓고 턴을 종료하면 포격을 역이용할 수 있습니다.",
        "icon": "crosshair"
      },
      {
        "step": "04",
        "title": "당신만의 설계를 만든다",
        "body": "직접 공격, 밀고 당기기, 함정, 보호막을 조합하세요. 전투마다 보상을 선택하고 다른 항로를 탐색하며 빌드를 성장시킵니다.",
        "icon": "module"
      }
    ],
    "icons": {
      "logo": "\u003cpath d='M3 15l5-8 5 8 5-8 3 8M3 20h18M8 3v4m10-4v4'/>",
      "eye": "\u003cpath d='M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z'/>\u003ccircle cx='12' cy='12' r='3'/>",
      "shift": "\u003cpath d='M3 8h17m-4-4 4 4-4 4M21 16H4m4-4-4 4 4 4'/>",
      "left": "\u003cpath d='M20 12H4m6-6-6 6 6 6'/>",
      "right": "\u003cpath d='M4 12h16m-6-6 6 6-6 6'/>",
      "move": "\u003cpath d='m14 3 7 7-7 7M21 10H9a6 6 0 0 0-6 6v5'/>",
      "crosshair": "\u003ccircle cx='12' cy='12' r='7'/>\u003cpath d='M12 2v5m0 10v5M2 12h5m10 0h5'/>",
      "attack": "\u003cpath d='m5 19 14-14 2-2v5L8 21m-4-7 6 6M3 21l3-3'/>",
      "hook": "\u003cpath d='M6 3v12a6 6 0 0 0 12 0v-5l-4 4m4-4 3 4'/>",
      "shield": "\u003cpath d='m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z'/>\u003cpath d='m8 12 3 3 5-6'/>",
      "trap": "\u003cpath d='m3 17 4-7 5 7 5-7 4 7M3 21h18M12 2v5m-6-3 2 3m10-3-2 3'/>",
      "module": "\u003cpath d='m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5'/>",
      "energy": "\u003cpath d='m14 2-9 12h6l-1 8 9-12h-6l1-8Z'/>",
      "heart": "\u003cpath d='M12 21 3 12a6 6 0 0 1 9-8 6 6 0 0 1 9 8l-9 9Z'/>",
      "undo": "\u003cpath d='M8 4 3 9l5 5M3 9h11a7 7 0 0 1 0 14'/>",
      "help": "\u003ccircle cx='12' cy='12' r='9'/>\u003cpath d='M9 9a3 3 0 1 1 4 3c-1 .5-1 1-1 2m0 3h.01'/>",
      "db": "\u003cellipse cx='12' cy='5' rx='8' ry='3'/>\u003cpath d='M4 5v7c0 4 16 4 16 0V5M4 12v7c0 4 16 4 16 0v-7'/>",
      "download": "\u003cpath d='M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5'/>",
      "upload": "\u003cpath d='M12 16V4m-5 5 5-5 5 5M4 16v5h16v-5'/>",
      "flag": "\u003cpath d='M5 22V3m0 0h14l-3 5 3 5H5'/>",
      "close": "\u003cpath d='m6 6 12 12M6 18 18 6'/>",
      "play": "\u003cpath d='m8 4 13 8-13 8V4Z'/>",
      "player": "\u003cpath d='m12 2 8 10-8 10L4 12 12 2Z'/>\u003cpath d='m8 12 4-4 4 4-4 4-4-4Z'/>",
      "enemy": "\u003cpath d='m5 4 7 4 7-4 2 12-9 5-9-5L5 4Z'/>\u003cpath d='m7 12 3 2m7-2-3 2'/>",
      "gunner": "\u003cpath d='M4 8h16v10H4zM8 8V4h8v4m-4 5v9M1 12h3m16 0h3'/>",
      "sniper": "\u003cpath d='m12 2 10 10-10 10L2 12 12 2Z'/>\u003ccircle cx='12' cy='12' r='3'/>",
      "charger": "\u003cpath d='m12 2 9 18-9-5-9 5 9-18Zm0 0v13'/>",
      "boss": "\u003cpath d='m2 6 5 4 5-7 5 7 5-4-3 14H5L2 6Z'/>\u003cpath d='M8 15h8'/>",
      "water": "\u003cpath d='M2 10c3-4 5 4 8 0s5 4 8 0 4 0 4 0M2 17c3-4 5 4 8 0s5 4 8 0'/>",
      "reef": "\u003cpath d='M12 21V4m0 8L5 8V4m7 13 7-5V7M5 8 2 6m17 6 3-4'/>",
      "fire": "\u003cpath d='M12 2c3 8 9 9 7 15-2 7-15 6-15-1 0-4 3-7 5-10 0 5 3 6 3-4Z'/>",
      "repair": "\u003cpath d='M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z'/>",
      "chevron": "\u003cpath d='m9 5 7 7-7 7'/>",
      "star": "\u003cpath d='m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1 3-6Z'/>",
      "clock": "\u003ccircle cx='12' cy='12' r='9'/>\u003cpath d='M12 6v7l4 2'/>",
      "anchor": "\u003ccircle cx='12' cy='5' r='3'/>\u003cpath d='M12 8v14M5 12H2a10 10 0 0 0 20 0h-3M7 11h10'/>",
      "sound": "\u003cpath d='m11 4-6 5H2v6h3l6 5V4Zm4 4c4 2 4 6 0 8m3-11c6 4 6 10 0 14'/>"
    }
  }
};
