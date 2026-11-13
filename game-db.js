// Editable JSON-compatible game database. Runtime logic belongs in index.html.
window.GAME_DB = {
  "meta": {
    "version": "6.0",
    "title": "계약의 링",
    "subtitle": "한 명의 투사, 나만의 전술",
    "description": "한 투사와 계약하고 성장시키는 1대1 실시간 전술 대전. 직접 조작 대신 작전과 대응을 지휘합니다."
  },
  "world": {
    "title": "총성 대신, 결투",
    "body": "정전 협약 이후 도시는 전력 배급권을 1대1 결투로 결정한다. 당신은 한 명의 계약 투사를 맡아 지역 리그에서 연맹 챔피언까지 오른다.",
    "rule": "투사는 스스로 움직이고 싸운다. 당신은 빌드와 작전, 전술 전환을 결정한다."
  },
  "palette": {
    "bg": "#edf0ed",
    "panel": "#ffffff",
    "ink": "#192a32",
    "muted": "#65767b",
    "line": "#d9e1dd",
    "accent": "#187d73",
    "gold": "#bd762d",
    "danger": "#c44f46",
    "strike": "#d57d4c",
    "grapple": "#428a83",
    "counter": "#7377b7",
    "arena": "#14242e",
    "arenaFloor": "#28424b",
    "arenaLine": "#607b7e",
    "player": "#79dcc2",
    "enemy": "#efa68c",
    "arenaLight": "#33545d",
    "ringBase": "#101b24",
    "ringRim": "#6f8d8d",
    "ringPost": "#b1c4c1",
    "shadow": "#101c24aa",
    "boot": "#172833",
    "outline": "#14242d",
    "skin": "#c8bca9",
    "hitFlash": "#edf3de",
    "actionLabel": "#101e2bdb",
    "labelInk": "#e6eee8"
  },
  "config": {
    "saveVersion": 6,
    "storageKey": "tactics.duel.v6",
    "legacyKey": "scrapwake.campaign.v3",
    "prefsKey": "tactics.duel.prefs.v6",
    "saveInterval": 4,
    "hudInterval": 0.1,
    "maxFrame": 0.1,
    "step": 0.025,
    "defaultSeed": "contract-ring",
    "coinCap": 999999,
    "historyLimit": 24,
    "nameLength": 14,
    "maxDt": 0.04,
    "random": {
      "offset": 2166136261,
      "prime": 16777619,
      "multiplier": 1664525,
      "increment": 1013904223,
      "modulus": 4294967296
    },
    "toastMs": 2600,
    "milliseconds": 1000,
    "secondsPerMinute": 60,
    "startRound": 1,
    "rounds": 2,
    "roundSeconds": 45,
    "ringRadius": 4.8,
    "bodyRadius": 0.33,
    "startDistance": 3.8,
    "moveTolerance": 0.14,
    "moveDrain": 1.35,
    "activeRegen": 0.18,
    "movingRegen": 0.55,
    "guardRecoveryDelay": 1.7,
    "guardRegenInBlock": 0.5,
    "guardBreakTime": 1.65,
    "guardBreakStamina": 12,
    "guardVulnerability": 1.2,
    "blockFraction": 0.72,
    "blockGuardCost": 1,
    "blockStaminaCost": 0.12,
    "dodgeBase": 0.14,
    "dodgeCost": 3.2,
    "grabDodgeBonus": 0.11,
    "grabGuardBonus": 1.14,
    "grabStaminaDamage": 13,
    "minimumDamage": 1,
    "hitChanceMin": 0.18,
    "hitChanceMax": 0.96,
    "rangeTolerance": 0.12,
    "lowStamina": 0.28,
    "emptyStamina": 0.06,
    "fatigueAccuracy": 0.18,
    "fatigueDamage": 0.22,
    "fatigueSpeed": 0.42,
    "counterChance": 0.61,
    "counterReadBonus": 0.13,
    "counterStamina": 3,
    "counterFocus": 14,
    "whiffFocus": 7,
    "blockFocus": 3,
    "dodgeFocus": 8,
    "damageFocus": 0.35,
    "feintFocus": 10,
    "feintStaminaDamage": 7,
    "feintExposeTime": 1.25,
    "feintAccuracy": 0.12,
    "feintBase": 0.66,
    "feintCounterBonus": 0.2,
    "feintBlockBonus": 0.1,
    "readMemory": 7,
    "readRepeat": 2,
    "readPerRepeat": 0.025,
    "maxReadBonus": 0.12,
    "grabStun": 0.65,
    "decisionInterval": 0.18,
    "missWait": 0.3,
    "edgeRatio": 0.82,
    "edgeGrabBonus": 1.15,
    "pivotWeight": 0.85,
    "cutoffWeight": 0.2,
    "ruleCooldown": 4,
    "manualPriority": 7,
    "tacticLag": 1.15,
    "minTacticLag": 0.35,
    "changeCooldown": 1.8,
    "aiReview": 6.5,
    "aiInitialDelay": 4,
    "focusCost": 60,
    "focusCooldown": 8,
    "cornerStamina": 0.45,
    "cornerGuard": 0.5,
    "judgingControl": 0.05,
    "judgingThrow": 3,
    "drawMargin": 2,
    "challengeLevelStep": 2,
    "challengeMaxLevel": 40,
    "dprCap": 1.75,
    "defaultSpeed": 1,
    "sceneHitFlash": 0.18,
    "sceneEffectLife": 0.55,
    "sceneFloatLife": 1.1,
    "sceneShakeDecay": 16,
    "sceneHitShake": 2,
    "sceneBreakShake": 7,
    "textDigits": 1,
    "counterConsume": 0.45,
    "judgeDamageWeight": 1,
    "firstFightFocus": 20,
    "maxRules": 3,
    "reportMoments": 4,
    "eventLimit": 60,
    "traitNoticeTime": 2.2,
    "movingAttackSpeed": 0.65,
    "exhaustWait": 0.55,
    "actionRangeExtra": 0.2,
    "maxEvasion": 0.65,
    "blockMinLeak": 0.12,
    "lowHpTrigger": 0.35,
    "lowGuardHint": 0.3,
    "coinFlip": 0.5,
    "percent": 100,
    "audioMinGain": 0.001,
    "visibleLog": 3,
    "flashSeconds": 2.3,
    "migrationKey": "tactics.duel.migrated.v6"
  },
  "progression": {
    "ranks": [
      {
        "id": "rank_1",
        "name": "이등병",
        "minLevel": 1
      },
      {
        "id": "rank_2",
        "name": "일등병",
        "minLevel": 2
      },
      {
        "id": "rank_3",
        "name": "상등병",
        "minLevel": 3
      },
      {
        "id": "rank_4",
        "name": "병장",
        "minLevel": 4
      },
      {
        "id": "rank_5",
        "name": "하사",
        "minLevel": 5
      },
      {
        "id": "rank_6",
        "name": "중사",
        "minLevel": 7
      },
      {
        "id": "rank_7",
        "name": "상사",
        "minLevel": 9
      },
      {
        "id": "rank_8",
        "name": "원사",
        "minLevel": 11
      },
      {
        "id": "rank_9",
        "name": "소위",
        "minLevel": 13
      },
      {
        "id": "rank_10",
        "name": "중위",
        "minLevel": 15
      },
      {
        "id": "rank_11",
        "name": "대위",
        "minLevel": 17
      },
      {
        "id": "rank_12",
        "name": "소령",
        "minLevel": 19
      },
      {
        "id": "rank_13",
        "name": "중령",
        "minLevel": 22
      },
      {
        "id": "rank_14",
        "name": "대령",
        "minLevel": 25
      },
      {
        "id": "rank_15",
        "name": "준장",
        "minLevel": 28
      },
      {
        "id": "rank_16",
        "name": "소장",
        "minLevel": 32
      },
      {
        "id": "rank_17",
        "name": "중장",
        "minLevel": 36
      },
      {
        "id": "rank_18",
        "name": "대장",
        "minLevel": 40
      }
    ],
    "startLevel": 1,
    "maxLevel": 40,
    "xpBase": 36,
    "xpGrowth": 12,
    "pointsStart": 4,
    "pointsPerLevel": 2,
    "startCoins": 75,
    "startModules": [
      "breath",
      "pad"
    ],
    "startLoadout": [
      "breath",
      "pad",
      null
    ],
    "slots": 3,
    "talentSlots": 2,
    "startTalents": [
      "steady"
    ],
    "legacyCoinCap": 250,
    "legacyLevelCap": 40,
    "trainingMax": 12,
    "trainingCostStep": 4,
    "winXp": 42,
    "lossXp": 26,
    "drawXp": 30,
    "winCoins": 34,
    "lossCoins": 18,
    "drawCoins": 24,
    "firstXp": 18,
    "firstCoins": 25,
    "repeatFactor": 0.7,
    "challengeBonus": 5,
    "growth": [
      {
        "stat": "hp",
        "op": "multiply",
        "value": 1.006
      },
      {
        "stat": "power",
        "op": "multiply",
        "value": 1.004
      }
    ]
  },
  "baseStats": {
    "hp": 174,
    "stamina": 106,
    "guard": 88,
    "power": 1,
    "speed": 2.35,
    "reach": 2.15,
    "grabReach": 1.08,
    "accuracy": 0.82,
    "evasion": 0.11,
    "armor": 0.05,
    "staminaRegen": 7.2,
    "guardRegen": 7,
    "counterPower": 1,
    "grabPower": 1,
    "guardDamage": 1,
    "feintPower": 1,
    "staminaCost": 1,
    "attackSpeed": 1,
    "moveCost": 1,
    "tacticLag": 1,
    "focusGain": 1,
    "focusMax": 100,
    "blockBonus": 0,
    "counterChance": 0,
    "grabAccuracy": 0,
    "readBonus": 0,
    "lowHpPower": 0
  },
  "styles": {
    "strike": {
      "name": "타격",
      "icon": "✦",
      "color": "#d57d4c",
      "beats": "grapple",
      "weak": "counter",
      "description": "긴 거리의 타격으로 제압의 진입을 끊습니다."
    },
    "grapple": {
      "name": "제압",
      "icon": "⬡",
      "color": "#428a83",
      "beats": "counter",
      "weak": "strike",
      "description": "붙어서 잡기로 반격과 가드를 무너뜨립니다."
    },
    "counter": {
      "name": "반격",
      "icon": "◇",
      "color": "#7377b7",
      "beats": "strike",
      "weak": "grapple",
      "description": "타격의 빈틈을 읽어 효율적으로 되받아칩니다."
    }
  },
  "matchups": {
    "strike": {
      "strike": 1,
      "grapple": 1.08,
      "counter": 0.93
    },
    "grapple": {
      "strike": 0.93,
      "grapple": 1,
      "counter": 1.08
    },
    "counter": {
      "strike": 1.08,
      "grapple": 0.93,
      "counter": 1
    }
  },
  "characters": [
    {
      "id": "jin",
      "name": "진",
      "epithet": "거리의 타격가",
      "style": "strike",
      "strength": "사거리 · 회피",
      "weakness": "붙잡히면 약함",
      "story": "외곽 도시의 호위병. 빈틈 없는 거리로 배급권을 되찾으려 한다.",
      "color": "#db9760",
      "accent": "#ffe0a0",
      "portrait": "visor",
      "build": "간격을 지켜 견제하거나, 체력을 보완해 근거리 타격가로 키울 수 있습니다.",
      "stats": {
        "hp": 164,
        "stamina": 104,
        "guard": 76,
        "speed": 2.55,
        "reach": 2.75,
        "evasion": 0.14,
        "armor": 0.03
      },
      "moves": {
        "strike": [
          "long_jab",
          "long_kick"
        ],
        "grab": [
          "grab"
        ],
        "counter": [
          "counter"
        ],
        "feint": [
          "feint"
        ]
      },
      "trait": "spacing",
      "default": "keepout"
    },
    {
      "id": "taeo",
      "name": "태오",
      "epithet": "연속 타격가",
      "style": "strike",
      "strength": "연타 · 순간 화력",
      "weakness": "기력 소모 · 반격 노출",
      "story": "하층 정비공 출신의 투사. 직접 고친 프레임으로 상위 리그에 도전한다.",
      "color": "#b76551",
      "accent": "#ffc79d",
      "portrait": "crest",
      "build": "연타를 극대화하거나, 속임수와 기력 회복으로 빈틈을 줄일 수 있습니다.",
      "stats": {
        "hp": 176,
        "stamina": 112,
        "guard": 82,
        "speed": 2.4,
        "reach": 2.05,
        "power": 1.04
      },
      "moves": {
        "strike": [
          "jab",
          "flurry"
        ],
        "grab": [
          "grab"
        ],
        "counter": [
          "counter"
        ],
        "feint": [
          "feint"
        ]
      },
      "trait": "rhythm",
      "default": "pressure"
    },
    {
      "id": "garam",
      "name": "가람",
      "epithet": "압박 제압가",
      "style": "grapple",
      "strength": "내구 · 잡기 · 외곽 압박",
      "weakness": "추격 속도 · 긴 거리",
      "story": "정전 부대의 전직 선봉. 결투가 다시 전쟁이 되지 않도록 싸운다.",
      "color": "#4e968e",
      "accent": "#b2e2c4",
      "portrait": "heavy",
      "build": "장갑으로 버티며 몰아붙이거나, 기동 장비로 추격 약점을 보완할 수 있습니다.",
      "stats": {
        "hp": 202,
        "stamina": 112,
        "guard": 104,
        "speed": 1.9,
        "reach": 1.85,
        "power": 1.02,
        "evasion": 0.05,
        "armor": 0.11,
        "grabPower": 1.17
      },
      "moves": {
        "strike": [
          "pressure_jab"
        ],
        "grab": [
          "body_lock"
        ],
        "counter": [
          "counter"
        ],
        "feint": [
          "feint"
        ]
      },
      "trait": "corner",
      "default": "clinch"
    },
    {
      "id": "yuna",
      "name": "유나",
      "epithet": "기동 제압가",
      "style": "grapple",
      "strength": "속임수 · 진입 · 전환",
      "weakness": "낮은 내구 · 정면 교환",
      "story": "폐쇄 구역의 운송원. 누구에게도 붙잡히지 않던 발로 상대를 넘어뜨린다.",
      "color": "#439ba0",
      "accent": "#c4efe4",
      "portrait": "swept",
      "build": "속임수 뒤의 잡기를 노리거나, 가드를 보강해 안정적인 제압가로 키울 수 있습니다.",
      "stats": {
        "hp": 160,
        "stamina": 112,
        "guard": 76,
        "speed": 2.75,
        "reach": 2.05,
        "evasion": 0.17,
        "armor": 0.025,
        "grabPower": 1.08,
        "feintPower": 1.08
      },
      "moves": {
        "strike": [
          "jab"
        ],
        "grab": [
          "sweep"
        ],
        "counter": [
          "counter"
        ],
        "feint": [
          "feint"
        ]
      },
      "trait": "entry",
      "default": "trick"
    },
    {
      "id": "sion",
      "name": "시온",
      "epithet": "읽는 반격가",
      "style": "counter",
      "strength": "패턴 분석 · 반격 피해",
      "weakness": "잡기 · 먼저 여는 공격",
      "story": "연맹 기록관의 견습. 상대의 습관을 읽어 자기 답을 만든다.",
      "color": "#8580bd",
      "accent": "#d8d2ff",
      "portrait": "hood",
      "build": "반격에 집중하거나, 타격과 사거리를 보완해 능동적으로 싸울 수 있습니다.",
      "stats": {
        "hp": 168,
        "stamina": 102,
        "guard": 84,
        "speed": 2.45,
        "reach": 2.5,
        "evasion": 0.14,
        "accuracy": 0.86,
        "counterPower": 1.15
      },
      "moves": {
        "strike": [
          "touch"
        ],
        "grab": [
          "grab"
        ],
        "counter": [
          "precise_counter"
        ],
        "feint": [
          "feint"
        ]
      },
      "trait": "reader",
      "default": "read"
    },
    {
      "id": "mira",
      "name": "미라",
      "epithet": "방어 반격가",
      "style": "counter",
      "strength": "가드 · 지구전 · 되받기",
      "weakness": "빠른 추격 · 잡기",
      "story": "배급소를 지키던 방어 담당. 상대의 힘을 견디고 그대로 돌려준다.",
      "color": "#6c82a6",
      "accent": "#c9def1",
      "portrait": "round",
      "build": "가드 반격을 극대화하거나, 잡기와 기동성을 보완해 먼저 압박할 수 있습니다.",
      "stats": {
        "hp": 190,
        "stamina": 110,
        "guard": 114,
        "speed": 2.05,
        "reach": 2.2,
        "evasion": 0.08,
        "armor": 0.09,
        "counterPower": 1.06,
        "guardRegen": 8.5
      },
      "moves": {
        "strike": [
          "touch"
        ],
        "grab": [
          "grab"
        ],
        "counter": [
          "guard_counter"
        ],
        "feint": [
          "feint"
        ]
      },
      "trait": "reservoir",
      "default": "shell"
    }
  ],
  "moves": {
    "jab": {
      "name": "짧은 타격",
      "type": "strike",
      "startup": 0.34,
      "hits": [
        0
      ],
      "recovery": 0.46,
      "cost": 6,
      "damage": 13,
      "guard": 12,
      "reach": 1,
      "accuracy": 0.03,
      "weight": 3,
      "animation": "punch"
    },
    "long_jab": {
      "name": "거리 찌르기",
      "type": "strike",
      "startup": 0.36,
      "hits": [
        0
      ],
      "recovery": 0.5,
      "cost": 7,
      "damage": 14,
      "guard": 11,
      "reach": 1,
      "accuracy": 0.04,
      "weight": 3,
      "animation": "punch"
    },
    "long_kick": {
      "name": "관통 차기",
      "type": "strike",
      "startup": 0.68,
      "hits": [
        0
      ],
      "recovery": 0.66,
      "cost": 13,
      "damage": 25,
      "guard": 22,
      "reach": 1.08,
      "accuracy": -0.03,
      "weight": 1,
      "animation": "kick"
    },
    "flurry": {
      "name": "삼연격",
      "type": "strike",
      "startup": 0.4,
      "hits": [
        0,
        0.17,
        0.34
      ],
      "recovery": 0.59,
      "cost": 17,
      "damage": 9,
      "guard": 7,
      "reach": 1,
      "accuracy": 0.015,
      "weight": 2,
      "animation": "flurry"
    },
    "pressure_jab": {
      "name": "밀어붙이기",
      "type": "strike",
      "startup": 0.44,
      "hits": [
        0
      ],
      "recovery": 0.53,
      "cost": 8,
      "damage": 15,
      "guard": 19,
      "reach": 1,
      "accuracy": 0,
      "weight": 1,
      "animation": "punch"
    },
    "touch": {
      "name": "탐색 타격",
      "type": "strike",
      "startup": 0.35,
      "hits": [
        0
      ],
      "recovery": 0.6,
      "cost": 6,
      "damage": 11,
      "guard": 12,
      "reach": 1,
      "accuracy": 0.05,
      "weight": 1,
      "animation": "punch"
    },
    "grab": {
      "name": "붙잡아 넘기기",
      "type": "grab",
      "startup": 0.56,
      "hits": [
        0
      ],
      "recovery": 0.8,
      "cost": 13,
      "damage": 21,
      "guard": 6,
      "reach": 1,
      "accuracy": -0.05,
      "weight": 1,
      "animation": "grab"
    },
    "body_lock": {
      "name": "쇄도 제압",
      "type": "grab",
      "startup": 0.58,
      "hits": [
        0
      ],
      "recovery": 0.78,
      "cost": 14,
      "damage": 24,
      "guard": 9,
      "reach": 1.12,
      "accuracy": -0.02,
      "weight": 1,
      "animation": "grab"
    },
    "sweep": {
      "name": "전환 태클",
      "type": "grab",
      "startup": 0.45,
      "hits": [
        0
      ],
      "recovery": 0.64,
      "cost": 12,
      "damage": 22,
      "guard": 6,
      "reach": 1.08,
      "accuracy": 0,
      "weight": 1,
      "animation": "sweep"
    },
    "counter": {
      "name": "반격 대기",
      "type": "counter",
      "startup": 0.12,
      "hits": [],
      "window": 0.9,
      "recovery": 0.35,
      "cost": 6,
      "damage": 23,
      "guard": 18,
      "reach": 1.04,
      "accuracy": 0.05,
      "weight": 1,
      "animation": "counter"
    },
    "precise_counter": {
      "name": "읽고 정타",
      "type": "counter",
      "startup": 0.08,
      "hits": [],
      "window": 1.1,
      "recovery": 0.35,
      "cost": 6,
      "damage": 25,
      "guard": 20,
      "reach": 1.06,
      "accuracy": 0.08,
      "weight": 1,
      "animation": "counter"
    },
    "guard_counter": {
      "name": "흘림 반격",
      "type": "counter",
      "startup": 0.12,
      "hits": [],
      "window": 1,
      "recovery": 0.32,
      "cost": 5,
      "damage": 24,
      "guard": 22,
      "reach": 1.04,
      "accuracy": 0.04,
      "weight": 1,
      "animation": "counter"
    },
    "feint": {
      "name": "속임수",
      "type": "feint",
      "startup": 0.28,
      "hits": [
        0
      ],
      "recovery": 0.33,
      "cost": 5,
      "damage": 0,
      "guard": 0,
      "reach": 1.15,
      "accuracy": 0,
      "weight": 1,
      "animation": "feint"
    }
  },
  "options": {
    "range": [
      {
        "id": "far",
        "name": "거리 유지",
        "short": "멀리",
        "factor": 0.94,
        "offset": 0.03
      },
      {
        "id": "mid",
        "name": "교환 거리",
        "short": "중간",
        "factor": 0.7,
        "offset": 0
      },
      {
        "id": "close",
        "name": "붙기",
        "short": "근접",
        "factor": 0,
        "offset": 0.84
      }
    ],
    "pace": [
      {
        "id": "calm",
        "name": "회복",
        "speed": 0.72,
        "rate": 0.66,
        "cost": 0.82,
        "regen": 1.65,
        "power": 0.92
      },
      {
        "id": "steady",
        "name": "균형",
        "speed": 1,
        "rate": 1,
        "cost": 1,
        "regen": 1,
        "power": 1
      },
      {
        "id": "burst",
        "name": "몰아치기",
        "speed": 1.14,
        "rate": 1.22,
        "cost": 1.3,
        "regen": 0.8,
        "power": 1.09
      }
    ],
    "intent": [
      {
        "id": "strike",
        "name": "타격",
        "weights": {
          "strike": 0.73,
          "grab": 0.06,
          "counter": 0.05,
          "feint": 0.16
        }
      },
      {
        "id": "grab",
        "name": "잡기",
        "weights": {
          "strike": 0.13,
          "grab": 0.65,
          "counter": 0.04,
          "feint": 0.18
        }
      },
      {
        "id": "counter",
        "name": "반격",
        "weights": {
          "strike": 0.16,
          "grab": 0.03,
          "counter": 0.74,
          "feint": 0.07
        }
      },
      {
        "id": "feint",
        "name": "속임수",
        "weights": {
          "strike": 0.3,
          "grab": 0.14,
          "counter": 0.06,
          "feint": 0.5
        }
      }
    ],
    "defense": [
      {
        "id": "block",
        "name": "막기"
      },
      {
        "id": "evade",
        "name": "피하기"
      }
    ]
  },
  "presets": [
    {
      "id": "keepout",
      "name": "거리 견제",
      "plan": {
        "range": "far",
        "pace": "steady",
        "intent": "strike",
        "defense": "evade"
      }
    },
    {
      "id": "pressure",
      "name": "연타 압박",
      "plan": {
        "range": "mid",
        "pace": "burst",
        "intent": "strike",
        "defense": "block"
      }
    },
    {
      "id": "clinch",
      "name": "붙어서 제압",
      "plan": {
        "range": "close",
        "pace": "steady",
        "intent": "grab",
        "defense": "block"
      }
    },
    {
      "id": "trick",
      "name": "속임수 진입",
      "plan": {
        "range": "close",
        "pace": "steady",
        "intent": "feint",
        "defense": "evade"
      }
    },
    {
      "id": "read",
      "name": "타격 받아치기",
      "plan": {
        "range": "mid",
        "pace": "steady",
        "intent": "counter",
        "defense": "evade"
      }
    },
    {
      "id": "shell",
      "name": "가드 반격",
      "plan": {
        "range": "mid",
        "pace": "calm",
        "intent": "counter",
        "defense": "block"
      }
    },
    {
      "id": "rest",
      "name": "거리 벌려 회복",
      "plan": {
        "range": "far",
        "pace": "calm",
        "intent": "counter",
        "defense": "evade"
      }
    },
    {
      "id": "break",
      "name": "가드 흔들기",
      "plan": {
        "range": "mid",
        "pace": "steady",
        "intent": "feint",
        "defense": "evade"
      }
    },
    {
      "id": "finish",
      "name": "빈틈 몰아치기",
      "plan": {
        "range": "close",
        "pace": "burst",
        "intent": "strike",
        "defense": "block"
      }
    }
  ],
  "conditions": [
    {
      "id": "low_stamina",
      "name": "내 기력 30% 미만",
      "source": "self",
      "metric": "staminaRatio",
      "op": "lt",
      "value": 0.3
    },
    {
      "id": "foe_tired",
      "name": "상대 기력 25% 미만",
      "source": "foe",
      "metric": "staminaRatio",
      "op": "lt",
      "value": 0.25
    },
    {
      "id": "foe_guard",
      "name": "상대 가드 25% 미만",
      "source": "foe",
      "metric": "guardRatio",
      "op": "lt",
      "value": 0.25
    },
    {
      "id": "low_guard",
      "name": "내 가드 25% 미만",
      "source": "self",
      "metric": "guardRatio",
      "op": "lt",
      "value": 0.25
    },
    {
      "id": "repeat_strike",
      "name": "상대 타격 2회 반복",
      "source": "foe",
      "metric": "repeatStrike",
      "op": "gte",
      "value": 2
    },
    {
      "id": "repeat_counter",
      "name": "상대 반격 2회 반복",
      "source": "foe",
      "metric": "repeatCounter",
      "op": "gte",
      "value": 2
    },
    {
      "id": "repeat_grab",
      "name": "상대 잡기 2회 반복",
      "source": "foe",
      "metric": "repeatGrab",
      "op": "gte",
      "value": 2
    },
    {
      "id": "foe_edge",
      "name": "상대가 외곽에 몰림",
      "source": "foe",
      "metric": "edgeRatio",
      "op": "gt",
      "value": 0.82
    },
    {
      "id": "self_edge",
      "name": "내가 외곽에 몰림",
      "source": "self",
      "metric": "edgeRatio",
      "op": "gt",
      "value": 0.82
    },
    {
      "id": "close",
      "name": "상대가 1.2m 안으로 접근",
      "source": "self",
      "metric": "distance",
      "op": "lt",
      "value": 1.2
    }
  ],
  "defaultRules": [
    {
      "condition": "low_stamina",
      "preset": "rest",
      "enabled": true
    },
    {
      "condition": "foe_tired",
      "preset": "finish",
      "enabled": true
    },
    {
      "condition": "repeat_counter",
      "preset": "clinch",
      "enabled": false
    }
  ],
  "focusActions": [
    {
      "id": "drive",
      "name": "돌파",
      "description": "5초간 가드 피해 +40%, 잡기·타격 피해 +15%. 기력 소모도 증가.",
      "duration": 5,
      "stats": [
        {
          "stat": "guardDamage",
          "op": "multiply",
          "value": 1.4
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.15
        },
        {
          "stat": "staminaCost",
          "op": "multiply",
          "value": 1.15
        }
      ]
    },
    {
      "id": "read",
      "name": "간파",
      "description": "5초간 회피 +12%p, 반격 피해 +25%. 잡기는 여전히 위협.",
      "duration": 5,
      "stats": [
        {
          "stat": "evasion",
          "op": "add",
          "value": 0.12
        },
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.25
        }
      ]
    },
    {
      "id": "breathe",
      "name": "재정비",
      "description": "기력 28과 가드 24를 즉시 회복. 체력은 회복하지 않음.",
      "duration": 0,
      "resources": {
        "stamina": 28,
        "guard": 24
      },
      "stats": []
    }
  ],
  "statuses": {
    "spacing": {
      "name": "간격 확보",
      "duration": 2,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "accuracy",
          "op": "add",
          "value": 0.05
        }
      ]
    },
    "rhythm": {
      "name": "연타 리듬",
      "duration": 5,
      "maxStacks": 3,
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.045
        }
      ]
    },
    "corner": {
      "name": "외곽 제압",
      "duration": 1.8,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "guardDamage",
          "op": "multiply",
          "value": 1.15
        }
      ]
    },
    "entry": {
      "name": "진입 기회",
      "duration": 3,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "grabAccuracy",
          "op": "add",
          "value": 0.13
        },
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    "reading": {
      "name": "패턴 읽음",
      "duration": 6,
      "maxStacks": 3,
      "stats": [
        {
          "stat": "counterChance",
          "op": "add",
          "value": 0.035
        }
      ]
    },
    "stored": {
      "name": "받아낸 힘",
      "duration": 7,
      "maxStacks": 4,
      "stats": [
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.055
        }
      ]
    },
    "last_stand": {
      "name": "마지막 집중",
      "duration": 4,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "staminaRegen",
          "op": "multiply",
          "value": 1.25
        }
      ]
    }
  },
  "traits": {
    "spacing": {
      "name": "간격의 보상",
      "description": "긴 거리에서 공격을 시작하면 잠시 명중률이 오르고 집중을 얻습니다.",
      "hooks": [
        {
          "trigger": "onStartAttack",
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "spacing"
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 4
            }
          ],
          "when": [
            {
              "metric": "distance",
              "op": "gt",
              "value": 2.1
            }
          ],
          "cooldown": 2.5
        }
      ]
    },
    "rhythm": {
      "name": "연타의 리듬",
      "description": "타격 적중마다 피해가 최대 3단계 증가. 빗나가면 초기화됩니다.",
      "hooks": [
        {
          "trigger": "onHit",
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "rhythm"
            }
          ],
          "when": [
            {
              "metric": "attackStrike",
              "op": "eq",
              "value": 1
            }
          ],
          "cooldown": 0
        },
        {
          "trigger": "onMiss",
          "effects": [
            {
              "op": "clear",
              "target": "self",
              "id": "rhythm"
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    },
    "corner": {
      "name": "도망갈 곳 없음",
      "description": "상대를 외곽에 몰면 잡기와 가드 피해가 증가합니다.",
      "hooks": [
        {
          "trigger": "onStartAttack",
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "corner"
            }
          ],
          "when": [
            {
              "metric": "foeEdge",
              "op": "gt",
              "value": 0.8
            }
          ],
          "cooldown": 1
        }
      ]
    },
    "entry": {
      "name": "진입의 틈",
      "description": "회피·속임수 성공 뒤 잡기의 명중과 피해가 증가합니다.",
      "hooks": [
        {
          "trigger": "onDodge",
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "entry"
            }
          ],
          "when": [],
          "cooldown": 0
        },
        {
          "trigger": "onFeint",
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "entry"
            }
          ],
          "when": [],
          "cooldown": 0
        },
        {
          "trigger": "onGrabHit",
          "effects": [
            {
              "op": "clear",
              "target": "self",
              "id": "entry"
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    },
    "reader": {
      "name": "습관 분석",
      "description": "상대가 같은 행동을 반복하면 반격 성공률이 쌓입니다.",
      "hooks": [
        {
          "trigger": "onFoeRepeat",
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "reading"
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    },
    "reservoir": {
      "name": "받아낸 힘",
      "description": "가드로 막을 때마다 반격 피해가 쌓이고, 반격 적중 시 소모됩니다.",
      "hooks": [
        {
          "trigger": "onBlock",
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "stored"
            },
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 2
            }
          ],
          "when": [],
          "cooldown": 0
        },
        {
          "trigger": "onCounterHit",
          "effects": [
            {
              "op": "clear",
              "target": "self",
              "id": "stored"
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    },
    "cooling": {
      "name": "긴급 호흡",
      "description": "기력이 25% 아래면 14를 회복. 16초마다 발동합니다.",
      "hooks": [
        {
          "trigger": "onLowStamina",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 14
            }
          ],
          "when": [],
          "cooldown": 16
        }
      ]
    },
    "resolve": {
      "name": "역전 집중",
      "description": "체력 35% 아래에서 4초간 화력과 기력 회복 증가. 16초마다 발동.",
      "hooks": [
        {
          "trigger": "onLowHp",
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "last_stand"
            }
          ],
          "when": [],
          "cooldown": 16
        }
      ]
    },
    "calm": {
      "name": "침착한 회피",
      "description": "회피 성공 시 기력 2 회복, 집중 3 추가 획득.",
      "hooks": [
        {
          "trigger": "onDodge",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 2
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 3
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    },
    "breacher": {
      "name": "붕괴 추격",
      "description": "상대 가드 붕괴 시 기력 10 회복, 집중 8 획득.",
      "hooks": [
        {
          "trigger": "onBreak",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 10
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 8
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    }
  },
  "training": [
    {
      "id": "power",
      "name": "근력",
      "description": "타격·잡기 피해와 가드 압박",
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.022
        },
        {
          "stat": "guardDamage",
          "op": "multiply",
          "value": 1.015
        }
      ]
    },
    {
      "id": "agility",
      "name": "민첩",
      "description": "이동 속도와 회피, 공격 전환",
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.018
        },
        {
          "stat": "evasion",
          "op": "add",
          "value": 0.006
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 1.008
        }
      ]
    },
    {
      "id": "endurance",
      "name": "지구력",
      "description": "체력과 기력, 기력 회복",
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.034
        },
        {
          "stat": "stamina",
          "op": "multiply",
          "value": 1.02
        },
        {
          "stat": "staminaRegen",
          "op": "multiply",
          "value": 1.016
        }
      ]
    },
    {
      "id": "technique",
      "name": "기술",
      "description": "명중과 잡기, 속임수",
      "stats": [
        {
          "stat": "accuracy",
          "op": "add",
          "value": 0.006
        },
        {
          "stat": "grabAccuracy",
          "op": "add",
          "value": 0.005
        },
        {
          "stat": "feintPower",
          "op": "multiply",
          "value": 1.018
        }
      ]
    }
  ],
  "modules": [
    {
      "id": "pad",
      "name": "기본 충격 패드",
      "description": "내구를 늘리는 안정적인 선택.",
      "cost": 30,
      "upgradeCost": 21,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.06
        }
      ]
    },
    {
      "id": "breath",
      "name": "호흡 보조기",
      "description": "기력 회복을 높여 긴 교환에 대비.",
      "cost": 35,
      "upgradeCost": 24,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "staminaRegen",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    {
      "id": "reach",
      "name": "연장 손목",
      "description": "사거리를 늘리지만 가드가 줄어듦.",
      "cost": 55,
      "upgradeCost": 38,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "reach",
          "op": "add",
          "value": 0.22
        },
        {
          "stat": "guard",
          "op": "multiply",
          "value": 0.94
        }
      ]
    },
    {
      "id": "weight",
      "name": "중량 주먹",
      "description": "화력 증가. 공격 준비가 느려짐.",
      "cost": 60,
      "upgradeCost": 42,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.14
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 0.91
        }
      ]
    },
    {
      "id": "ankle",
      "name": "발목 추진기",
      "description": "빠른 발. 이동 기력 소모 증가.",
      "cost": 55,
      "upgradeCost": 38,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.18
        },
        {
          "stat": "moveCost",
          "op": "multiply",
          "value": 1.15
        }
      ]
    },
    {
      "id": "deceive",
      "name": "교란 회로",
      "description": "속임수 강화. 직접 화력 감소.",
      "cost": 50,
      "upgradeCost": 35,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "feintPower",
          "op": "multiply",
          "value": 1.24
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.96
        }
      ]
    },
    {
      "id": "lung",
      "name": "보조 폐",
      "description": "기력 여유와 회복을 확보.",
      "cost": 65,
      "upgradeCost": 46,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "stamina",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "staminaRegen",
          "op": "multiply",
          "value": 1.15
        }
      ]
    },
    {
      "id": "hardguard",
      "name": "강성 가드",
      "description": "가드를 늘리지만 발이 느려짐.",
      "cost": 60,
      "upgradeCost": 42,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "guard",
          "op": "multiply",
          "value": 1.23
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.94
        }
      ]
    },
    {
      "id": "parry",
      "name": "흘림 가드",
      "description": "가드 효율과 반격 성공률 강화.",
      "cost": 65,
      "upgradeCost": 46,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "blockBonus",
          "op": "add",
          "value": 0.08
        },
        {
          "stat": "counterChance",
          "op": "add",
          "value": 0.045
        }
      ]
    },
    {
      "id": "grip",
      "name": "제압 그립",
      "description": "잡기의 명중과 피해 강화.",
      "cost": 60,
      "upgradeCost": 42,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "grabAccuracy",
          "op": "add",
          "value": 0.07
        },
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.13
        }
      ]
    },
    {
      "id": "breaker",
      "name": "돌파 프레임",
      "description": "가드 압박 증가. 체력 감소.",
      "cost": 60,
      "upgradeCost": 42,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "guardDamage",
          "op": "multiply",
          "value": 1.28
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.94
        }
      ]
    },
    {
      "id": "neural",
      "name": "신경 압축기",
      "description": "전술 지연 감소, 집중 획득 증가.",
      "cost": 65,
      "upgradeCost": 46,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "tacticLag",
          "op": "multiply",
          "value": 0.65
        },
        {
          "stat": "focusGain",
          "op": "multiply",
          "value": 1.14
        }
      ]
    },
    {
      "id": "reader",
      "name": "습관 추적기",
      "description": "반복 행동에 대한 분석·반격 강화.",
      "cost": 55,
      "upgradeCost": 38,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "readBonus",
          "op": "add",
          "value": 0.045
        },
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.09
        }
      ]
    },
    {
      "id": "anchor",
      "name": "중심 안정기",
      "description": "장갑·가드 회복. 이동 속도 감소.",
      "cost": 55,
      "upgradeCost": 38,
      "upgradeGrowth": 1.6,
      "maxRank": 3,
      "stats": [
        {
          "stat": "armor",
          "op": "add",
          "value": 0.025
        },
        {
          "stat": "guardRegen",
          "op": "multiply",
          "value": 1.15
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.96
        }
      ]
    }
  ],
  "talents": [
    {
      "id": "steady",
      "name": "기초 호흡",
      "description": "기력 회복 +8%.",
      "level": 1,
      "stats": [
        {
          "stat": "staminaRegen",
          "op": "multiply",
          "value": 1.08
        }
      ]
    },
    {
      "id": "precision",
      "name": "정확한 첫 수",
      "description": "명중 +4%p.",
      "level": 1,
      "stats": [
        {
          "stat": "accuracy",
          "op": "add",
          "value": 0.04
        }
      ]
    },
    {
      "id": "cooling",
      "name": "긴급 호흡",
      "description": "기력이 25% 아래면 14를 회복. 16초마다 발동합니다.",
      "level": 2,
      "trait": "cooling",
      "stats": []
    },
    {
      "id": "resolve",
      "name": "역전 집중",
      "description": "체력 35% 아래에서 4초간 화력과 기력 회복 증가. 16초마다 발동.",
      "level": 3,
      "trait": "resolve",
      "stats": []
    },
    {
      "id": "calm",
      "name": "침착한 회피",
      "description": "회피 성공 시 기력 2 회복, 집중 3 추가 획득.",
      "level": 2,
      "trait": "calm",
      "stats": []
    },
    {
      "id": "breacher",
      "name": "붕괴 추격",
      "description": "상대 가드 붕괴 시 기력 10 회복, 집중 8 획득.",
      "level": 3,
      "trait": "breacher",
      "stats": []
    },
    {
      "id": "jin_specialist",
      "name": "진의 숙련",
      "description": "고유 강점을 강화하는 전문화.",
      "level": 4,
      "character": "jin",
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    {
      "id": "jin_balanced",
      "name": "진의 균형",
      "description": "약점을 보완하는 다른 길.",
      "level": 4,
      "character": "jin",
      "stats": [
        {
          "stat": "guard",
          "op": "multiply",
          "value": 1.13
        }
      ]
    },
    {
      "id": "taeo_specialist",
      "name": "태오의 숙련",
      "description": "고유 강점을 강화하는 전문화.",
      "level": 4,
      "character": "taeo",
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    {
      "id": "taeo_balanced",
      "name": "태오의 균형",
      "description": "약점을 보완하는 다른 길.",
      "level": 4,
      "character": "taeo",
      "stats": [
        {
          "stat": "guard",
          "op": "multiply",
          "value": 1.13
        }
      ]
    },
    {
      "id": "garam_specialist",
      "name": "가람의 숙련",
      "description": "고유 강점을 강화하는 전문화.",
      "level": 4,
      "character": "garam",
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    {
      "id": "garam_balanced",
      "name": "가람의 균형",
      "description": "약점을 보완하는 다른 길.",
      "level": 4,
      "character": "garam",
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.13
        }
      ]
    },
    {
      "id": "yuna_specialist",
      "name": "유나의 숙련",
      "description": "고유 강점을 강화하는 전문화.",
      "level": 4,
      "character": "yuna",
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    {
      "id": "yuna_balanced",
      "name": "유나의 균형",
      "description": "약점을 보완하는 다른 길.",
      "level": 4,
      "character": "yuna",
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.13
        }
      ]
    },
    {
      "id": "sion_specialist",
      "name": "시온의 숙련",
      "description": "고유 강점을 강화하는 전문화.",
      "level": 4,
      "character": "sion",
      "stats": [
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    {
      "id": "sion_balanced",
      "name": "시온의 균형",
      "description": "약점을 보완하는 다른 길.",
      "level": 4,
      "character": "sion",
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.13
        }
      ]
    },
    {
      "id": "mira_specialist",
      "name": "미라의 숙련",
      "description": "고유 강점을 강화하는 전문화.",
      "level": 4,
      "character": "mira",
      "stats": [
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    {
      "id": "mira_balanced",
      "name": "미라의 균형",
      "description": "약점을 보완하는 다른 길.",
      "level": 4,
      "character": "mira",
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.13
        }
      ]
    }
  ],
  "rivals": [
    {
      "id": "rival_1",
      "character": "garam",
      "level": 1,
      "ai": "steady",
      "name": "지역 예선",
      "preset": "clinch",
      "rewardBonus": 0,
      "modules": [],
      "talents": [
        "steady"
      ]
    },
    {
      "id": "rival_2",
      "character": "jin",
      "level": 2,
      "ai": "steady",
      "name": "긴 거리의 벽",
      "preset": "keepout",
      "rewardBonus": 2,
      "modules": [],
      "talents": [
        "steady"
      ]
    },
    {
      "id": "rival_3",
      "character": "mira",
      "level": 3,
      "ai": "reader",
      "name": "굳은 가드",
      "preset": "shell",
      "rewardBonus": 4,
      "modules": [],
      "talents": [
        "steady"
      ]
    },
    {
      "id": "rival_4",
      "character": "yuna",
      "level": 4,
      "ai": "trick",
      "name": "전환의 함정",
      "preset": "trick",
      "rewardBonus": 6,
      "modules": [
        "breath"
      ],
      "talents": [
        "steady"
      ]
    },
    {
      "id": "rival_5",
      "character": "taeo",
      "level": 5,
      "ai": "rush",
      "name": "연속 압박",
      "preset": "pressure",
      "rewardBonus": 8,
      "modules": [
        "breath"
      ],
      "talents": [
        "steady"
      ]
    },
    {
      "id": "rival_6",
      "character": "sion",
      "level": 6,
      "ai": "reader",
      "name": "습관을 읽는 상대",
      "preset": "read",
      "rewardBonus": 10,
      "modules": [
        "breath"
      ],
      "talents": [
        "steady",
        "precision"
      ]
    },
    {
      "id": "rival_7",
      "character": "garam",
      "level": 8,
      "ai": "rush",
      "name": "중앙 리그 · 제압",
      "preset": "clinch",
      "rewardBonus": 12,
      "modules": [
        "breath",
        "pad"
      ],
      "talents": [
        "steady",
        "precision"
      ]
    },
    {
      "id": "rival_8",
      "character": "jin",
      "level": 10,
      "ai": "reader",
      "name": "중앙 리그 · 거리",
      "preset": "keepout",
      "rewardBonus": 14,
      "modules": [
        "breath",
        "pad"
      ],
      "talents": [
        "steady",
        "precision"
      ]
    },
    {
      "id": "rival_9",
      "character": "mira",
      "level": 12,
      "ai": "steady",
      "name": "준결승 · 방어",
      "preset": "shell",
      "rewardBonus": 16,
      "modules": [
        "breath",
        "pad"
      ],
      "talents": [
        "steady",
        "precision"
      ]
    },
    {
      "id": "rival_10",
      "character": "taeo",
      "level": 14,
      "ai": "trick",
      "name": "준결승 · 공세",
      "preset": "pressure",
      "rewardBonus": 18,
      "modules": [
        "breath",
        "pad",
        "reader"
      ],
      "talents": [
        "steady",
        "precision"
      ]
    },
    {
      "id": "rival_11",
      "character": "yuna",
      "level": 17,
      "ai": "trick",
      "name": "결승 진출전",
      "preset": "trick",
      "rewardBonus": 20,
      "modules": [
        "breath",
        "pad",
        "reader"
      ],
      "talents": [
        "steady",
        "precision"
      ]
    },
    {
      "id": "rival_12",
      "character": "sion",
      "level": 20,
      "ai": "reader",
      "name": "연맹 챔피언전",
      "preset": "read",
      "rewardBonus": 22,
      "modules": [
        "breath",
        "pad",
        "reader"
      ],
      "talents": [
        "steady",
        "precision"
      ]
    }
  ],
  "ai": {
    "profiles": {
      "steady": {
        "name": "안정형",
        "adapt": 0.42,
        "recoverAt": 0.25,
        "focusAt": 0.3,
        "aggression": 0.4
      },
      "rush": {
        "name": "공세형",
        "adapt": 0.28,
        "recoverAt": 0.15,
        "focusAt": 0.23,
        "aggression": 0.75
      },
      "reader": {
        "name": "분석형",
        "adapt": 0.78,
        "recoverAt": 0.34,
        "focusAt": 0.4,
        "aggression": 0.3
      },
      "trick": {
        "name": "전환형",
        "adapt": 0.62,
        "recoverAt": 0.25,
        "focusAt": 0.34,
        "aggression": 0.5
      }
    },
    "responses": {
      "strike": "read",
      "counter": "clinch",
      "grab": "keepout",
      "feint": "pressure"
    },
    "openers": {
      "steady": "keepout",
      "rush": "pressure",
      "reader": "read",
      "trick": "trick"
    }
  },
  "ui": {
    "title": "계약의 링",
    "yourFighter": "내 투사",
    "selectCharacter": "한 명의 투사와 계약하세요",
    "choose": "이 투사와 계약",
    "chooseNote": "선택한 투사를 계속 육성합니다. 대전마다 바뀌지 않습니다.",
    "callsign": "호출명",
    "callsignPlaceholder": "나의 호출명",
    "home": "라커룸",
    "fight": "대전",
    "training": "성장",
    "build": "빌드",
    "book": "작전서",
    "records": "기록",
    "nextRival": "다음 상대",
    "aiBout": "AI 1대1 대전",
    "prepare": "대전 준비",
    "start": "경기 시작",
    "back": "돌아가기",
    "rank": "계급",
    "coins": "코인",
    "points": "훈련 포인트",
    "xp": "경험",
    "nextRank": "다음 계급",
    "maxRank": "최고 계급",
    "wins": "승",
    "losses": "패",
    "draws": "무",
    "matchupGood": "유리한 상성",
    "matchupBad": "불리한 상성",
    "matchupEven": "같은 계열",
    "matchupNote": "기본 피해 차이는 작습니다. 거리·기력·잡기·속임수로 상성을 뒤집을 수 있습니다.",
    "strength": "강점",
    "weakness": "약점",
    "trait": "고유 특성",
    "scout": "상대 분석",
    "initialPlan": "시작 전술",
    "autoBook": "조건별 자동 대응",
    "manualNote": "수동 지시는 7초간 작전서보다 우선합니다.",
    "ruleSlots": "위에서부터 먼저 맞는 조건 하나만 실행합니다.",
    "addRule": "대응 추가",
    "savePlan": "현재 전술 저장",
    "preset": "작전 프리셋",
    "custom": "내 작전",
    "current": "현재",
    "draft": "변경할 전술",
    "range": "거리",
    "pace": "속도",
    "intent": "노림수",
    "defense": "방어",
    "apply": "전술 적용",
    "pending": "전환 중",
    "manual": "수동 지시 우선",
    "auto": "작전서 대응",
    "pause": "정지",
    "resume": "계속",
    "speed": "속도",
    "round": "라운드",
    "corner": "코너 정비",
    "nextRound": "다음 라운드",
    "hp": "체력",
    "stamina": "기력",
    "guard": "가드",
    "focus": "집중",
    "useFocus": "집중 사용 · 60",
    "focusAvailable": "집중 사용 가능",
    "opponent": "상대",
    "distance": "간격",
    "observed": "관찰한 행동",
    "noPattern": "아직 패턴을 관찰 중",
    "fatigued": "기력 부족",
    "broken": "가드 붕괴",
    "exposed": "속임수에 노출",
    "normal": "안정",
    "edge": "외곽에 몰림",
    "hintFatigue": "기력이 낮습니다. 회복 속도로 전환하거나 집중 재정비를 고려하세요.",
    "hintFoeTired": "상대 기력이 낮습니다. 압박할 기회입니다.",
    "hintGuard": "상대 가드가 약합니다. 타격을 이어가면 붕괴를 노릴 수 있습니다.",
    "hintGrab": "상대가 잡기를 반복합니다. 거리를 벌리거나 피하기로 대응하세요.",
    "hintCounter": "상대가 반격을 기다립니다. 잡기·속임수로 흔들 수 있습니다.",
    "hintDefault": "거리와 기력을 보며 전술을 바꾸세요. 공격·이동은 투사가 실행합니다.",
    "resultWin": "승리",
    "resultLoss": "패배",
    "resultDraw": "무승부",
    "ko": "KO",
    "decision": "판정",
    "surrender": "기권",
    "reward": "경기 보상",
    "damage": "피해량",
    "counters": "반격 성공",
    "throws": "잡기 성공",
    "breaks": "가드 붕괴",
    "bestMoment": "경기의 전환점",
    "rematch": "재대결",
    "nextMatch": "다음 상대 준비",
    "spendPoints": "훈련 포인트 사용",
    "gain": "획득",
    "kept": "투사·훈련·장비·특성은 결과와 관계없이 유지됩니다.",
    "gear": "장비 · 3칸",
    "talents": "특성 · 2칸",
    "owned": "보유",
    "buy": "구입",
    "equip": "장착",
    "unequip": "해제",
    "upgrade": "강화",
    "maxed": "최대 강화",
    "cost": "비용",
    "level": "강화",
    "unlock": "개방 조건",
    "train": "훈련",
    "respec": "훈련 재분배",
    "respecNote": "배분한 포인트를 전부 돌려받습니다. 비용은 없습니다.",
    "equipped": "장착 중",
    "unavailable": "재료 부족",
    "emptySlot": "빈 장비칸",
    "chooseSlot": "장착할 칸",
    "talentSlot": "장착할 특성칸",
    "save": "저장 내보내기",
    "load": "저장 불러오기",
    "newGame": "새 계약",
    "newTitle": "새 투사와 계약할까요?",
    "newBody": "현재 투사의 성장과 진행을 초기화합니다. 먼저 저장을 내보낼 수 있습니다.",
    "confirmReset": "초기화하고 선택",
    "cancel": "취소",
    "settings": "설정",
    "sound": "효과음",
    "reduced": "효과 줄이기",
    "fullscreen": "전체 화면",
    "db": "DB 편집",
    "dbHelp": "계급·투사·상성·기술·장비·AI·조건·문구는 game-db.js에서 편집합니다.",
    "dbExport": "game-db.js 내려받기",
    "htmlExport": "단일 HTML 내려받기",
    "validate": "DB 검사",
    "valid": "DB 검사 통과",
    "exportName": "계약의_링_저장.json",
    "htmlName": "계약의_링.html",
    "dbName": "game-db.js",
    "champion": "연맹 챔피언 · 도전자전",
    "challenge": "도전자전",
    "rules": "승부 규칙",
    "rulesBody": "2라운드 × 45초. 체력 0이면 KO. 시간 종료 시 가한 피해·제압·중앙 점유로 판정합니다.",
    "saveSuccess": "진행을 저장했습니다.",
    "loadSuccess": "저장을 불러왔습니다.",
    "invalidSave": "저장 파일을 확인하세요.",
    "profileLocked": "계약한 투사는 새 계약 전까지 유지됩니다.",
    "legacy": "이전 계급과 자원을 새 계약에 이어받았습니다.",
    "first": "첫 승리 추가 보상",
    "habitRange": "선호 거리",
    "habitPace": "선호 속도",
    "habitIntent": "주로 노리는 것",
    "status": "상태",
    "selectStyle": "타격 → 제압 → 반격 → 타격",
    "profileName": "호출명 수정",
    "saveName": "호출명 저장",
    "ruleIf": "조건",
    "ruleThen": "전환할 작전",
    "enabled": "사용",
    "remove": "삭제",
    "up": "위로",
    "down": "아래로",
    "bookSaved": "작전서를 저장했습니다.",
    "storePreset": "프리셋 저장",
    "planName": "작전 이름",
    "planSaved": "내 작전에 저장했습니다.",
    "activeTrait": "발동 특성",
    "historyEmpty": "첫 경기를 시작하세요.",
    "noPoints": "훈련 포인트가 부족합니다.",
    "notReady": "이 대전은 아직 열리지 않았습니다.",
    "lockedTalent": "아직 개방되지 않은 특성입니다.",
    "surrenderAsk": "이 경기를 기권할까요?",
    "surrenderBody": "패배로 기록됩니다. 지금까지의 성장과 장비는 유지됩니다.",
    "characterLevel": "성장 단계",
    "pointsReturn": "포인트를 다시 배분할 수 있습니다.",
    "empty": "없음",
    "finishBout": "진행 중인 경기를 먼저 마치세요.",
    "changeWaiting": "전환 정리 중",
    "focusNotReady": "집중이 부족하거나 재사용 대기 중입니다.",
    "readyApply": "변경은 전술 지연 후 적용됩니다.",
    "seconds": "초",
    "meters": "m",
    "manualOnly": "자동 대응 꺼짐",
    "wait": "대기",
    "arenaLabel": "투사들이 자동으로 이동하고 싸우는 1대1 링. 거리·속도·노림수·방어를 조정하세요.",
    "fullscreenHint": "전체 화면은 지원되는 브라우저에서 사용할 수 있습니다.",
    "legacyChoose": "이전 계급과 자원을 이어받을 투사를 선택하세요.",
    "background": "투사의 배경",
    "challengeTier": "도전자전 {tier}"
  },
  "messages": {
    "queued": "{who} 전술 전환 예약",
    "applied": "{who}: {plan}",
    "rule": "{who} 작전서 · {condition} → {plan}",
    "adapt": "상대가 {plan} 전술로 바꿉니다",
    "counter": "{who} 반격 성공",
    "dodge": "{who} 회피",
    "whiff": "{who} 공격이 닿지 않음",
    "guardBreak": "{who} 가드 붕괴",
    "feint": "{who} 속임수 성공",
    "grab": "{who} 잡기 성공",
    "focus": "{who} 집중 · {name}",
    "trait": "{who} · {name}",
    "round": "{round}라운드 시작",
    "ko": "{who} KO",
    "promote": "{rank} 진급",
    "purchased": "{name} 구입",
    "upgraded": "{name} 강화",
    "equipped": "{name} 장착",
    "newRival": "다음 상대 개방",
    "noCoins": "코인이 부족합니다."
  },
  "draw": {
    "font": "system-ui, sans-serif",
    "ringScale": 0.38,
    "ringY": 0.55,
    "ringPerspective": 0.48,
    "fighterHeight": 95,
    "fighterScale": 0.85,
    "head": 13,
    "shoulder": 22,
    "hip": 13,
    "leg": 33,
    "arm": 25,
    "glove": 9,
    "boot": 8,
    "line": 3,
    "nameFont": 13,
    "floatFont": 20,
    "statusFont": 11,
    "labelOffset": 112,
    "cameraEase": 5,
    "shadowWidth": 24,
    "shadowHeight": 8,
    "floorRings": 3,
    "ropeHeight": 20,
    "crowdRows": 3,
    "crowdCount": 20,
    "crowdSpacing": 42,
    "damageRise": 24,
    "effectSize": 36,
    "portraitSize": 220,
    "hitTilt": 0.24,
    "breathRate": 3.2,
    "breathAmount": 1.1,
    "shakeRate": 47,
    "circleSegments": 48,
    "particleSize": 3,
    "roundDigits": 0,
    "fallbackWidth": 750,
    "fallbackHeight": 440,
    "ringVerticalScale": 0.47,
    "half": 0.5,
    "crowdAlpha": 0.22,
    "crowdY": 0.12,
    "crowdGap": 12,
    "crowdHead": 4,
    "crowdBody": 17,
    "crowdStroke": 7,
    "platformDepth": 16,
    "rim": 8,
    "floorMarkAlpha": 0.2,
    "floorMarkSize": 27,
    "posts": 8,
    "postWidth": 4,
    "postCap": 4,
    "edgeRing": 29,
    "edgeWidth": 2,
    "minFighterScale": 0.64,
    "maxFighterScale": 1.05,
    "fighterScaleDivisor": 440,
    "animationLead": 0.12,
    "animationSpan": 0.4,
    "flurryRate": 25,
    "stunTilt": 0.35,
    "hipRaise": 12,
    "torsoHeight": 34,
    "neck": 7,
    "stepRate": 8,
    "stepDistance": 7,
    "legWidth": 12,
    "bootAngle": 8,
    "kickLength": 40,
    "kickLift": 0.45,
    "armorOverhang": 4,
    "chestWidth": 13,
    "chestOffset": 10,
    "chestLine": 4,
    "beltGap": 6,
    "punchLength": 46,
    "grabLength": 30,
    "feintLength": 18,
    "guardHandY": 12,
    "looseHandY": 17,
    "elbow": 9,
    "elbowDrop": 17,
    "backHandX": 3,
    "frontHandX": 26,
    "armWidth": 11,
    "punchLift": 0.2,
    "neckWidth": 12,
    "headTall": 2,
    "helmetExtra": 2,
    "helmetHeight": 17,
    "visorWidth": 10,
    "visorY": 1,
    "visorHeight": 5,
    "crestHeight": 13,
    "crestWidth": 7,
    "hoodExtra": 4,
    "hoodLine": 5,
    "labelGap": 30,
    "actionWidth": 112,
    "actionHeight": 24,
    "traitY": 27,
    "statusY": 44,
    "impactHeight": 73,
    "counterLine": 6,
    "effectStart": 0.1,
    "breakLine": 6,
    "effectLine": 3,
    "feintDash": [
      4,
      5
    ],
    "floatHeight": 110
  },
  "sounds": {
    "hit": {
      "frequency": 130,
      "end": 60,
      "duration": 0.07,
      "gain": 0.06,
      "type": "triangle"
    },
    "counter": {
      "frequency": 340,
      "end": 180,
      "duration": 0.13,
      "gain": 0.06,
      "type": "square"
    },
    "break": {
      "frequency": 95,
      "end": 30,
      "duration": 0.2,
      "gain": 0.07,
      "type": "sawtooth"
    },
    "reward": {
      "frequency": 520,
      "end": 1100,
      "duration": 0.3,
      "gain": 0.05,
      "type": "sine"
    },
    "apply": {
      "frequency": 300,
      "end": 450,
      "duration": 0.07,
      "gain": 0.025,
      "type": "sine"
    }
  },
  "statLabels": {
    "hp": "체력",
    "stamina": "최대 기력",
    "guard": "가드",
    "power": "화력",
    "speed": "기동",
    "reach": "타격 거리",
    "accuracy": "명중",
    "evasion": "회피",
    "armor": "피해 감소",
    "staminaRegen": "기력 회복",
    "guardRegen": "가드 회복",
    "counterPower": "반격 피해",
    "grabPower": "잡기 피해",
    "guardDamage": "가드 압박",
    "feintPower": "속임수",
    "staminaCost": "공격 기력 비용",
    "attackSpeed": "공격 속도",
    "moveCost": "이동 기력 비용",
    "tacticLag": "전술 전환 지연",
    "focusGain": "집중 획득",
    "focusMax": "최대 집중",
    "blockBonus": "가드 효율",
    "counterChance": "반격 성공",
    "grabAccuracy": "잡기 명중",
    "readBonus": "반복 분석"
  },
  "_docs": {
    "editing": "game-db.js가 유일한 콘텐츠 원본입니다. characters/styles/matchups/moves/options/presets/conditions/traits/statuses/modules/talents/rivals에서 수정합니다. 엔진은 index.html에 있습니다.",
    "career": "한 투사를 계약하고 영구 육성합니다. 진행은 tactics.duel.v6에 저장하며, 이전 해상전 저장은 삭제하지 않습니다. 계급명은 progression.ranks에서 수정합니다.",
    "combat": "직접 이동·공격 입력이 없는 실시간 전술 시뮬레이션. 전술 지연, 기력, 거리, 가드, 반격·잡기·속임수, 조건 작전서와 집중이 상호작용합니다."
  },
  "enemyTraining": {
    "strike": {
      "power": 0.25,
      "agility": 0.18,
      "endurance": 0.25,
      "technique": 0.18
    },
    "grapple": {
      "power": 0.25,
      "agility": 0.18,
      "endurance": 0.25,
      "technique": 0.18
    },
    "counter": {
      "power": 0.25,
      "agility": 0.18,
      "endurance": 0.25,
      "technique": 0.18
    }
  },
  "statCaps": {
    "accuracy": {
      "min": 0.4,
      "max": 0.96
    },
    "evasion": {
      "min": 0,
      "max": 0.48
    },
    "armor": {
      "min": 0,
      "max": 0.35
    },
    "counterChance": {
      "min": 0,
      "max": 0.25
    },
    "blockBonus": {
      "min": 0,
      "max": 0.18
    }
  },
  "reportEvents": [
    "counter",
    "guardBreak",
    "grab",
    "feint",
    "focus",
    "rule",
    "adapt"
  ],
  "tabs": [
    {
      "id": "fight",
      "label": "fight"
    },
    {
      "id": "training",
      "label": "training"
    },
    {
      "id": "build",
      "label": "build"
    },
    {
      "id": "book",
      "label": "book"
    },
    {
      "id": "records",
      "label": "records"
    }
  ],
  "summaryStats": [
    "hp",
    "power",
    "reach",
    "speed",
    "staminaRegen",
    "guard"
  ],
  "scoutStats": [
    "hp",
    "reach",
    "speed",
    "guard"
  ],
  "percentStats": [
    "accuracy",
    "evasion",
    "armor",
    "blockBonus",
    "counterChance",
    "grabAccuracy",
    "readBonus"
  ],
  "multiplierStats": [
    "power",
    "counterPower",
    "grabPower",
    "guardDamage",
    "feintPower",
    "staminaCost",
    "attackSpeed",
    "moveCost",
    "tacticLag",
    "focusGain"
  ],
  "speeds": [
    {
      "label": "0.5×",
      "value": 0.5
    },
    {
      "label": "1×",
      "value": 1
    },
    {
      "label": "2×",
      "value": 2
    }
  ],
  "visibleEvents": [
    "counter",
    "guardBreak",
    "grab",
    "feint",
    "focus",
    "rule",
    "adapt",
    "trait",
    "applied"
  ],
  "flashEvents": [
    "counter",
    "guardBreak",
    "grab",
    "focus",
    "rule",
    "adapt"
  ],
  "customPresetDefaults": [
    {
      "id": "slot_1",
      "name": "내 작전 1",
      "preset": null
    },
    {
      "id": "slot_2",
      "name": "내 작전 2",
      "preset": "rest"
    },
    {
      "id": "slot_3",
      "name": "내 작전 3",
      "preset": "finish"
    }
  ]
};
