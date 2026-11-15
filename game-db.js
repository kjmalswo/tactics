// Editable JSON-compatible game database. Runtime logic belongs in index.html.
window.GAME_DB = {
  "meta": {
    "version": "8.0",
    "title": "계약의 링",
    "subtitle": "서약 아래 모인 투사들의 결투",
    "description": "한 투사와 계약하고 성장시키는 1대1 실시간 전술 대전. 직접 조작 대신 작전과 대응을 지휘합니다."
  },
  "world": {
    "title": "검 대신, 서약으로",
    "body": "오랜 전쟁 뒤 왕국과 자유도시는 항로의 통행권과 분쟁을 서약 결투로 해결한다. 당신은 한 투사와 계약해 길드의 작은 시합에서 연맹의 왕좌까지 오른다.",
    "rule": "투사는 스스로 움직이고 싸운다. 당신은 빌드와 작전, 전술 전환을 결정한다."
  },
  "palette": {
    "bg": "#191611",
    "panel": "#eadfc5",
    "ink": "#30261c",
    "muted": "#665744",
    "line": "#c5af82",
    "accent": "#6e3931",
    "gold": "#775525",
    "danger": "#963d32",
    "strike": "#a76642",
    "grapple": "#536c57",
    "counter": "#6f647e",
    "arena": "#171a16",
    "arenaFloor": "#77715c",
    "arenaLine": "#a09676",
    "player": "#b4c59c",
    "enemy": "#d2a282",
    "arenaLight": "#34382a",
    "ringBase": "#252820",
    "ringRim": "#a58c55",
    "ringPost": "#594c32",
    "shadow": "#12140fbb",
    "boot": "#302c25",
    "outline": "#24251e",
    "skin": "#d2b48d",
    "hitFlash": "#ffedc3",
    "actionLabel": "#252219ee",
    "labelInk": "#f2e3bf"
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
    "manualPriority": 9999,
    "tacticLag": 0.42,
    "minTacticLag": 0.35,
    "changeCooldown": 0.65,
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
    "migrationKey": "tactics.duel.migrated.v6",
    "cornerSeconds": 2.8,
    "signatureCost": 60,
    "signatureMinStaminaRatio": 0.2,
    "signatureArmDelay": 0.2,
    "signatureNoticeSeconds": 1.5,
    "followupSeconds": 2.4,
    "commandVisualSeconds": 2.5,
    "motionLead": 0.65,
    "stepWindupFraction": 0.7,
    "signatureCooldown": 4,
    "throwAnimationSeconds": 0.65,
    "comboNoticeSeconds": 1.4,
    "hitHoldSeconds": 0.025,
    "signatureHitHold": 0.07,
    "moveTraceLife": 0.35,
    "signatureBaseFocus": 20,
    "statusPrefixLength": 7,
    "minStepDuration": 0.05,
    "signatureReactGrace": 0.12,
    "signatureKey": "Digit4",
    "damageMergeTime": 0.24,
    "signatureHoldLimit": 2.8
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
      "color": "#a87543",
      "accent": "#e8c88a",
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
      "default": "keepout",
      "commands": {
        "attack": {
          "name": "긴 차기로 압박",
          "hint": "전진하며 긴 차기로 가드를 압박",
          "plan": {
            "range": "mid",
            "pace": "steady",
            "intent": "strike",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.73,
            "grab": 0.06,
            "counter": 0.05,
            "feint": 0.16
          }
        },
        "bait": {
          "name": "헛치게 만든다",
          "hint": "한 발 빠진 뒤 긴 차기로 응징",
          "plan": {
            "range": "far",
            "pace": "steady",
            "intent": "counter",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.2,
            "grab": 0.05,
            "counter": 0.3,
            "feint": 0.45
          }
        },
        "recover": {
          "name": "간격 리셋",
          "hint": "뒤로 빠지며 기력 회복",
          "plan": {
            "range": "far",
            "pace": "calm",
            "intent": "counter",
            "defense": "block"
          },
          "weights": {
            "strike": 0.16,
            "grab": 0.03,
            "counter": 0.74,
            "feint": 0.07
          }
        }
      },
      "signature": {
        "move": "signature_jin",
        "name": "백스텝 관통차기",
        "hint": "거리 확보 뒤 길게 뻗는 결정타",
        "meter": "간격",
        "seekRange": 0.9,
        "waitForStrike": false
      },
      "identity": {
        "kind": "range",
        "threshold": 2.1,
        "ready": "긴 거리 확보",
        "waiting": "접근을 떼어내기"
      },
      "visual": {
        "stance": "elusive",
        "height": 1.08,
        "width": 0.85,
        "glove": 0.88,
        "legs": 1.13,
        "lean": -0.08,
        "equipment": "scarf",
        "mark": "diagonal",
        "pose": "kick",
        "face": "visor"
      },
      "defaultCall": "attack",
      "followups": [
        {
          "trigger": "onDodge",
          "move": "long_kick",
          "name": "회피 → 관통차기",
          "cooldown": 3.5
        }
      ],
      "chargeTrait": "charge_jin"
    },
    {
      "id": "taeo",
      "name": "태오",
      "epithet": "연속 타격가",
      "style": "strike",
      "strength": "연타 · 순간 화력",
      "weakness": "기력 소모 · 반격 노출",
      "story": "하층 대장간의 도제 출신. 직접 벼린 갑주를 입고 연맹의 상위 결투에 도전한다.",
      "color": "#904b3d",
      "accent": "#deb082",
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
      "default": "pressure",
      "commands": {
        "attack": {
          "name": "연타 몰아치기",
          "hint": "연타를 이어 가드를 무너뜨림",
          "plan": {
            "range": "mid",
            "pace": "burst",
            "intent": "strike",
            "defense": "block"
          },
          "weights": {
            "strike": 0.73,
            "grab": 0.06,
            "counter": 0.05,
            "feint": 0.16
          }
        },
        "bait": {
          "name": "박자 흔들기",
          "hint": "속임수 뒤 연타로 연결",
          "plan": {
            "range": "mid",
            "pace": "steady",
            "intent": "feint",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.3,
            "grab": 0.14,
            "counter": 0.06,
            "feint": 0.5
          }
        },
        "recover": {
          "name": "호흡 되찾기",
          "hint": "교환을 끊고 기력 회복",
          "plan": {
            "range": "far",
            "pace": "calm",
            "intent": "counter",
            "defense": "block"
          },
          "weights": {
            "strike": 0.16,
            "grab": 0.03,
            "counter": 0.74,
            "feint": 0.07
          }
        }
      },
      "signature": {
        "move": "signature_taeo",
        "name": "오연 폭주",
        "hint": "다섯 번의 연타. 반격에 끊길 수 있음",
        "meter": "리듬",
        "seekRange": 0.9,
        "waitForStrike": false
      },
      "identity": {
        "kind": "stacks",
        "status": "rhythm",
        "max": 3,
        "ready": "연타 리듬"
      },
      "visual": {
        "stance": "boxer",
        "height": 0.96,
        "width": 1.08,
        "glove": 1.65,
        "legs": 0.95,
        "lean": 0.08,
        "equipment": "gauntlets",
        "mark": "fists",
        "pose": "punch",
        "face": "open"
      },
      "defaultCall": "attack",
      "followups": [
        {
          "trigger": "onHit",
          "move": "flurry",
          "name": "적중 → 삼연격",
          "cooldown": 4.2,
          "when": [
            {
              "metric": "status_rhythm",
              "op": "gte",
              "value": 2
            }
          ]
        }
      ],
      "chargeTrait": "charge_taeo"
    },
    {
      "id": "garam",
      "name": "가람",
      "epithet": "압박 제압가",
      "style": "grapple",
      "strength": "내구 · 잡기 · 외곽 압박",
      "weakness": "추격 속도 · 긴 거리",
      "story": "서약 수비대의 전직 선봉. 작은 결투가 다시 큰 전쟁이 되지 않도록 싸운다.",
      "color": "#5c7051",
      "accent": "#c7c698",
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
      "default": "clinch",
      "commands": {
        "attack": {
          "name": "붙어서 제압",
          "hint": "막으며 접근해 붙잡아 넘김",
          "plan": {
            "range": "close",
            "pace": "steady",
            "intent": "grab",
            "defense": "block"
          },
          "weights": {
            "strike": 0.13,
            "grab": 0.65,
            "counter": 0.04,
            "feint": 0.18
          }
        },
        "bait": {
          "name": "진입 받아내기",
          "hint": "공격을 버티고 잡기로 전환",
          "plan": {
            "range": "mid",
            "pace": "steady",
            "intent": "strike",
            "defense": "block"
          },
          "weights": {
            "strike": 0.73,
            "grab": 0.06,
            "counter": 0.05,
            "feint": 0.16
          }
        },
        "recover": {
          "name": "중심 빼며 재정비",
          "hint": "거리를 두고 피하며 기력 회복",
          "plan": {
            "range": "mid",
            "pace": "calm",
            "intent": "counter",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.16,
            "grab": 0.03,
            "counter": 0.74,
            "feint": 0.07
          }
        }
      },
      "signature": {
        "move": "signature_garam",
        "name": "대지 내려찍기",
        "hint": "가드를 무시하는 강한 잡기. 먼저 붙어야 함",
        "meter": "압박",
        "seekRange": 0.9,
        "waitForStrike": false
      },
      "identity": {
        "kind": "foeEdge",
        "ready": "외곽 압박"
      },
      "visual": {
        "stance": "heavy",
        "height": 1.08,
        "width": 1.38,
        "glove": 1.42,
        "legs": 0.98,
        "lean": 0.07,
        "equipment": "frame",
        "mark": "square",
        "pose": "grab",
        "face": "jaw"
      },
      "defaultCall": "attack",
      "followups": [
        {
          "trigger": "onBlock",
          "move": "body_lock",
          "name": "막기 → 제압",
          "cooldown": 4.5
        },
        {
          "trigger": "onHit",
          "move": "body_lock",
          "name": "외곽 압박 → 잡기",
          "cooldown": 4.5,
          "when": [
            {
              "metric": "foeEdge",
              "op": "gt",
              "value": 0.65
            }
          ]
        }
      ],
      "chargeTrait": "charge_garam"
    },
    {
      "id": "yuna",
      "name": "유나",
      "epithet": "기동 제압가",
      "style": "grapple",
      "strength": "속임수 · 진입 · 전환",
      "weakness": "낮은 내구 · 정면 교환",
      "story": "봉쇄된 항구의 밀사. 누구에게도 붙잡히지 않던 발로 상대를 넘어뜨린다.",
      "color": "#557f76",
      "accent": "#c5d4a7",
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
      "default": "trick",
      "commands": {
        "attack": {
          "name": "속이고 넘어뜨리기",
          "hint": "속임수가 통하면 즉시 태클",
          "plan": {
            "range": "close",
            "pace": "steady",
            "intent": "feint",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.3,
            "grab": 0.14,
            "counter": 0.06,
            "feint": 0.5
          }
        },
        "bait": {
          "name": "피하고 파고들기",
          "hint": "회피 뒤 틈으로 태클 진입",
          "plan": {
            "range": "mid",
            "pace": "steady",
            "intent": "counter",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.16,
            "grab": 0.03,
            "counter": 0.74,
            "feint": 0.07
          }
        },
        "recover": {
          "name": "빠져나오기",
          "hint": "옆으로 이탈하며 기력 회복",
          "plan": {
            "range": "far",
            "pace": "calm",
            "intent": "feint",
            "defense": "block"
          },
          "weights": {
            "strike": 0.3,
            "grab": 0.14,
            "counter": 0.06,
            "feint": 0.5
          }
        }
      },
      "signature": {
        "move": "signature_yuna",
        "name": "잔상 태클",
        "hint": "속임수 동작 뒤 낮게 파고드는 태클",
        "meter": "기만",
        "seekRange": 0.9,
        "waitForStrike": false
      },
      "identity": {
        "kind": "stacks",
        "status": "entry",
        "max": 1,
        "ready": "태클 기회",
        "waiting": "회피·속임수로 틈 만들기"
      },
      "visual": {
        "stance": "low",
        "height": 0.93,
        "width": 0.82,
        "glove": 0.91,
        "legs": 1.06,
        "lean": 0.16,
        "equipment": "ribbons",
        "mark": "sweep",
        "pose": "sweep",
        "face": "mono"
      },
      "defaultCall": "attack",
      "followups": [
        {
          "trigger": "onFeint",
          "move": "sweep",
          "name": "속임수 → 태클",
          "cooldown": 2.8
        },
        {
          "trigger": "onDodge",
          "move": "sweep",
          "name": "회피 → 태클",
          "cooldown": 3.5
        }
      ],
      "chargeTrait": "charge_yuna"
    },
    {
      "id": "sion",
      "name": "시온",
      "epithet": "읽는 반격가",
      "style": "counter",
      "strength": "패턴 분석 · 반격 피해",
      "weakness": "잡기 · 먼저 여는 공격",
      "story": "연맹 기록관의 견습. 상대의 습관을 읽어 자기 답을 만든다.",
      "color": "#746580",
      "accent": "#d3c6ad",
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
      "default": "read",
      "commands": {
        "attack": {
          "name": "허점 찌르기",
          "hint": "상대의 회복 동작을 짧게 응징",
          "plan": {
            "range": "close",
            "pace": "steady",
            "intent": "strike",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.5,
            "grab": 0.25,
            "counter": 0.05,
            "feint": 0.2
          }
        },
        "bait": {
          "name": "타격 받아치기",
          "hint": "반복 타격을 읽어 정타 반격",
          "plan": {
            "range": "mid",
            "pace": "steady",
            "intent": "counter",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.16,
            "grab": 0.03,
            "counter": 0.74,
            "feint": 0.07
          }
        },
        "recover": {
          "name": "흐름 다시 읽기",
          "hint": "간격을 벌리고 기력 회복",
          "plan": {
            "range": "far",
            "pace": "calm",
            "intent": "counter",
            "defense": "block"
          },
          "weights": {
            "strike": 0.16,
            "grab": 0.03,
            "counter": 0.74,
            "feint": 0.07
          }
        }
      },
      "signature": {
        "move": "signature_sion",
        "name": "찰나의 정타",
        "hint": "상대 타격이 시작될 때 강한 반격",
        "meter": "간파",
        "seekRange": 0.9,
        "waitForStrike": true
      },
      "identity": {
        "kind": "stacks",
        "status": "reading",
        "max": 3,
        "ready": "습관 간파"
      },
      "visual": {
        "stance": "precise",
        "height": 1.04,
        "width": 0.86,
        "glove": 0.95,
        "legs": 1.02,
        "lean": -0.03,
        "equipment": "halo",
        "mark": "eye",
        "pose": "counter",
        "face": "hood"
      },
      "defaultCall": "bait",
      "followups": [
        {
          "trigger": "onCounterHit",
          "move": "read_punish",
          "name": "반격 → 정타",
          "cooldown": 3
        },
        {
          "trigger": "onFoeWhiff",
          "move": "read_punish",
          "name": "헛공격 → 응징",
          "cooldown": 3.5
        }
      ],
      "chargeTrait": "charge_sion"
    },
    {
      "id": "mira",
      "name": "미라",
      "epithet": "방어 반격가",
      "style": "counter",
      "strength": "가드 · 지구전 · 되받기",
      "weakness": "빠른 추격 · 잡기",
      "story": "배급소를 지키던 방어 담당. 상대의 힘을 견디고 그대로 돌려준다.",
      "color": "#5f7385",
      "accent": "#d0ccb0",
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
      "default": "shell",
      "commands": {
        "attack": {
          "name": "철벽 전진",
          "hint": "막으며 전진해 힘을 축적",
          "plan": {
            "range": "close",
            "pace": "steady",
            "intent": "strike",
            "defense": "block"
          },
          "weights": {
            "strike": 0.5,
            "grab": 0.3,
            "counter": 0.05,
            "feint": 0.15
          }
        },
        "bait": {
          "name": "방패 흘려치기",
          "hint": "공격을 흘리고 축적한 힘으로 반격",
          "plan": {
            "range": "mid",
            "pace": "steady",
            "intent": "counter",
            "defense": "evade"
          },
          "weights": {
            "strike": 0.16,
            "grab": 0.03,
            "counter": 0.74,
            "feint": 0.07
          }
        },
        "recover": {
          "name": "방벽 재정비",
          "hint": "기력과 가드가 회복될 틈을 확보",
          "plan": {
            "range": "far",
            "pace": "calm",
            "intent": "counter",
            "defense": "block"
          },
          "weights": {
            "strike": 0.16,
            "grab": 0.03,
            "counter": 0.74,
            "feint": 0.07
          }
        }
      },
      "signature": {
        "move": "signature_mira",
        "name": "방벽 해방",
        "hint": "축적한 힘을 큰 가드 파괴 타격으로 방출",
        "meter": "축적",
        "seekRange": 0.9,
        "waitForStrike": false
      },
      "identity": {
        "kind": "stacks",
        "status": "stored",
        "max": 4,
        "ready": "받아낸 힘"
      },
      "visual": {
        "stance": "fortress",
        "height": 1,
        "width": 1.22,
        "glove": 1.25,
        "legs": 0.96,
        "lean": 0.03,
        "equipment": "shields",
        "mark": "circle",
        "pose": "guard",
        "face": "glass"
      },
      "defaultCall": "bait",
      "followups": [
        {
          "trigger": "onBlock",
          "move": "guard_counter",
          "name": "축적 → 반격",
          "cooldown": 4,
          "when": [
            {
              "metric": "status_stored",
              "op": "gte",
              "value": 3
            }
          ]
        }
      ],
      "chargeTrait": "charge_mira"
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
      "animation": "kick",
      "visual": "lance"
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
      "animation": "flurry",
      "visual": "barrage"
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
      "animation": "punch",
      "visual": "heavy"
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
      "animation": "grab",
      "visual": "slam"
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
      "animation": "sweep",
      "visual": "mirage"
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
      "animation": "counter",
      "visual": "riposte"
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
      "animation": "counter",
      "visual": "shield"
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
    },
    "read_punish": {
      "name": "빈틈 정타",
      "type": "strike",
      "startup": 0.18,
      "hits": [
        0
      ],
      "recovery": 0.4,
      "cost": 7,
      "damage": 17,
      "guard": 12,
      "reach": 1.12,
      "accuracy": 0.05,
      "weight": 1,
      "animation": "riposte",
      "visual": "riposte"
    },
    "signature_jin": {
      "name": "백스텝 관통차기",
      "type": "strike",
      "startup": 0.46,
      "hits": [
        0
      ],
      "recovery": 0.65,
      "cost": 16,
      "damage": 37,
      "guard": 32,
      "reach": 1.13,
      "accuracy": -0.03,
      "weight": 1,
      "animation": "backkick",
      "visual": "lance",
      "step": -0.32,
      "id": "signature_jin",
      "signature": true
    },
    "signature_taeo": {
      "name": "오연 폭주",
      "type": "strike",
      "startup": 0.3,
      "hits": [
        0,
        0.11,
        0.22,
        0.33,
        0.44
      ],
      "recovery": 0.6,
      "cost": 24,
      "damage": 10,
      "guard": 9,
      "reach": 1,
      "accuracy": 0.015,
      "weight": 1,
      "animation": "barrage",
      "visual": "barrage",
      "step": 0.15,
      "id": "signature_taeo",
      "signature": true
    },
    "signature_garam": {
      "name": "대지 내려찍기",
      "type": "grab",
      "startup": 0.62,
      "hits": [
        0
      ],
      "recovery": 0.82,
      "cost": 21,
      "damage": 41,
      "guard": 20,
      "reach": 1.14,
      "accuracy": -0.02,
      "weight": 1,
      "animation": "powerthrow",
      "visual": "slam",
      "step": 0.18,
      "id": "signature_garam",
      "signature": true
    },
    "signature_yuna": {
      "name": "잔상 태클",
      "type": "grab",
      "startup": 0.28,
      "hits": [
        0,
        0.26
      ],
      "recovery": 0.65,
      "cost": 19,
      "damage": 34,
      "guard": 13,
      "reach": 1.22,
      "accuracy": 0,
      "weight": 1,
      "animation": "mirage",
      "stages": [
        {
          "type": "feint",
          "damage": 0
        },
        {
          "type": "grab",
          "damage": 34
        }
      ],
      "visual": "mirage",
      "step": 0.35,
      "id": "signature_yuna",
      "signature": true
    },
    "signature_sion": {
      "name": "찰나의 정타",
      "type": "counter",
      "startup": 0.05,
      "hits": [],
      "window": 1.45,
      "recovery": 0.42,
      "cost": 12,
      "damage": 41,
      "guard": 32,
      "reach": 1.12,
      "accuracy": 0.08,
      "weight": 1,
      "animation": "riposte",
      "visual": "riposte",
      "id": "signature_sion",
      "signature": true
    },
    "signature_mira": {
      "name": "방벽 해방",
      "type": "strike",
      "startup": 0.48,
      "hits": [
        0
      ],
      "recovery": 0.7,
      "cost": 16,
      "damage": 34,
      "guard": 44,
      "reach": 1.04,
      "accuracy": 0.05,
      "weight": 1,
      "animation": "shieldburst",
      "visual": "shield",
      "step": 0.12,
      "counterScale": true,
      "id": "signature_mira",
      "signature": true,
      "consumeStatuses": [
        "stored"
      ]
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
    },
    "charge_jin": {
      "name": "간격",
      "description": "거리 확보 뒤 길게 뻗는 결정타",
      "hooks": [
        {
          "trigger": "onHit",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 8
            }
          ],
          "when": [
            {
              "metric": "distance",
              "op": "gt",
              "value": 2.05
            }
          ],
          "cooldown": 0
        },
        {
          "trigger": "onDodge",
          "effects": [
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
    },
    "charge_taeo": {
      "name": "리듬",
      "description": "다섯 번의 연타. 반격에 끊길 수 있음",
      "hooks": [
        {
          "trigger": "onHit",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 6
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
        }
      ]
    },
    "charge_garam": {
      "name": "압박",
      "description": "가드를 무시하는 강한 잡기. 먼저 붙어야 함",
      "hooks": [
        {
          "trigger": "onBlock",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 5
            }
          ],
          "when": [],
          "cooldown": 0
        },
        {
          "trigger": "onGrabHit",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 13
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    },
    "charge_yuna": {
      "name": "기만",
      "description": "속임수 동작 뒤 낮게 파고드는 태클",
      "hooks": [
        {
          "trigger": "onFeint",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 11
            }
          ],
          "when": [],
          "cooldown": 0
        },
        {
          "trigger": "onDodge",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 10
            }
          ],
          "when": [],
          "cooldown": 0
        },
        {
          "trigger": "onGrabHit",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 9
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    },
    "charge_sion": {
      "name": "간파",
      "description": "상대 타격이 시작될 때 강한 반격",
      "hooks": [
        {
          "trigger": "onFoeRepeat",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 6
            }
          ],
          "when": [],
          "cooldown": 0
        },
        {
          "trigger": "onCounterHit",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 12
            }
          ],
          "when": [],
          "cooldown": 0
        }
      ]
    },
    "charge_mira": {
      "name": "축적",
      "description": "축적한 힘을 큰 가드 파괴 타격으로 방출",
      "hooks": [
        {
          "trigger": "onBlock",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 6
            }
          ],
          "when": [],
          "cooldown": 0
        },
        {
          "trigger": "onCounterHit",
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 10
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
      "name": "누비 갑옷",
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
      "name": "호흡의 부적",
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
      "name": "사슬 손목갑",
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
      "name": "중철 건틀릿",
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
      "name": "순풍 장화",
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
      "name": "잔영 망토",
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
      "name": "활력 부적",
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
      "name": "강철 완갑",
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
      "name": "흘림 손목띠",
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
      "name": "제압 장갑",
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
      "name": "파성 완갑",
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
      "name": "결단 인장",
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
      "name": "통찰의 렌즈",
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
      "name": "수호 각반",
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
    "chooseNote": "한 투사를 선택해 계속 성장시킵니다. 바로 경기를 시작할 수 있습니다.",
    "callsign": "호출명",
    "callsignPlaceholder": "나의 호출명",
    "home": "길드 회관",
    "fight": "결투",
    "training": "수련",
    "build": "무장",
    "book": "작전서",
    "records": "결투 기록",
    "nextRival": "다음 상대",
    "aiBout": "AI 투사와의 결투",
    "prepare": "결투장 입장",
    "start": "결투 시작",
    "back": "돌아가기",
    "rank": "계급",
    "coins": "금화",
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
    "corner": "휴식",
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
    "reward": "결투 보상",
    "damage": "피해량",
    "counters": "반격 성공",
    "throws": "잡기 성공",
    "breaks": "가드 붕괴",
    "bestMoment": "경기의 전환점",
    "rematch": "재대결",
    "nextMatch": "다음 결투",
    "spendPoints": "훈련 포인트 사용",
    "gain": "획득",
    "kept": "투사·훈련·장비·특성은 결과와 관계없이 유지됩니다.",
    "gear": "무장 · 3칸",
    "talents": "재능 · 2칸",
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
    "fullscreen": "화면 최대화",
    "db": "DB 편집",
    "dbHelp": "색상·글꼴·문양은 theme, 결투장 표현은 palette/draw에서 편집합니다. 투사·기술·장비·문구도 이 DB에서 관리합니다.",
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
    "profileName": "호칭 변경",
    "saveName": "호칭 저장",
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
    "arenaLabel": "스스로 싸우는 두 투사. 공세·유인·회복 지시와 캐릭터 결정기로 승부를 조정합니다.",
    "fullscreenHint": "전체 화면은 지원되는 브라우저에서 사용할 수 있습니다.",
    "legacyChoose": "이전 계급과 자원을 이어받을 투사를 선택하세요.",
    "background": "투사의 이야기",
    "challengeTier": "도전자전 {tier}",
    "directFight": "결투장 입장",
    "signature": "결정기",
    "signatureReady": "결정기 준비 완료",
    "signatureArm": "승부처 지시",
    "signatureSeeking": "틈을 만드는 중",
    "signatureWaitRange": "사거리에 들어가는 중",
    "signatureWaitStamina": "기력을 모으는 중",
    "signatureWaitAttack": "상대 타격을 기다림",
    "signatureCancel": "준비 취소",
    "coach": "경기 중에는 세 지시만 선택하세요",
    "coachHint": "투사가 자기 방식으로 실행합니다. 결정기는 틈을 보고 사용합니다.",
    "coachCurrent": "지금 실행 중",
    "coachPending": "지시 전달 중",
    "characterIdentity": "내 투사의 리듬",
    "identityActive": "특성 발동",
    "flowApproach": "파고드는 중",
    "flowRetreat": "간격을 벌리는 중",
    "flowRecover": "기력 회복 중",
    "flowCounter": "반격을 기다리는 중",
    "flowHold": "내 거리 유지",
    "flowSignature": "결정기 진입",
    "flowFollowup": "연계 기술 준비",
    "leagueTable": "리그 상대 보기",
    "optionalBuild": "육성과 장비는 경기 사이에 바꿀 수 있습니다.",
    "iconicMove": "대표 기술",
    "signatureCost": "집중 {cost}",
    "hotkeys": "1 공세 · 2 유인 · 3 회복 · 4 결정기",
    "cornerAuto": "곧 다음 라운드",
    "combatGuide": "상대와 기력을 보고 흐름을 바꾸세요",
    "next": "다음",
    "keepFighter": "투사·성장·장비는 그대로 이어집니다.",
    "rankShort": "계급",
    "strengthShort": "잘하는 것",
    "weaknessShort": "주의할 것",
    "basicAI": "1대1 결투 · AI",
    "recordButton": "결투 기록",
    "backToRing": "결투로 복귀",
    "signatureBlocked": "집중이 부족하거나 재사용 대기 중입니다.",
    "fighterStats": "투사 수치 보기",
    "watchFor": "상대의 승부수",
    "coachShort": "지시는 짧게. 실행은 투사의 방식으로.",
    "hintRecoverActive": "회복 중에는 공격 빈도가 줄어듭니다."
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
    "noCoins": "코인이 부족합니다.",
    "command": "{who} · {name}",
    "followup": "{who} · {name}",
    "signatureArmed": "{who} · {name} 준비",
    "signatureUsed": "{who} · {name}!",
    "signatureCancelled": "결정기 준비 취소",
    "signatureBlocked": "지금은 결정기를 준비할 수 없습니다."
  },
  "draw": {
    "font": "\"Noto Serif KR\", \"Nanum Myeongjo\", \"Batang\", \"AppleMyungjo\", Georgia, serif",
    "ringScale": 0.4,
    "ringY": 0.58,
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
    "nameFont": 14,
    "floatFont": 22,
    "statusFont": 12,
    "labelOffset": 112,
    "cameraEase": 5,
    "shadowWidth": 27,
    "shadowHeight": 8,
    "floorRings": 3,
    "ropeHeight": 23,
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
    "ringVerticalScale": 0.42,
    "half": 0.5,
    "crowdAlpha": 0.16,
    "crowdY": 0.12,
    "crowdGap": 12,
    "crowdHead": 4,
    "crowdBody": 17,
    "crowdStroke": 7,
    "platformDepth": 20,
    "rim": 8,
    "floorMarkAlpha": 0.13,
    "floorMarkSize": 26,
    "posts": 8,
    "postWidth": 5,
    "postCap": 4,
    "edgeRing": 29,
    "edgeWidth": 2,
    "minFighterScale": 0.64,
    "maxFighterScale": 1.22,
    "fighterScaleDivisor": 420,
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
    "actionWidth": 152,
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
    "floatHeight": 110,
    "identityBodyAlpha": 0.14,
    "trailAlpha": 0.16,
    "motionArrowWidth": 2,
    "motionArrowSize": 7,
    "motionLineDash": [
      7,
      7
    ],
    "rangeArcAlpha": 0.35,
    "rangeLine": 1.5,
    "rangeLabelOffset": 15,
    "impactHalo": 1.3,
    "signatureBannerWidth": 320,
    "signatureBannerHeight": 55,
    "signatureTitleSize": 20,
    "signatureSubSize": 11,
    "signatureBannerY": 36,
    "signatureFlashAlpha": 0.16,
    "signatureSparks": 8,
    "signatureRays": 48,
    "markerRadius": 9,
    "traceThickness": 12,
    "guardShieldRadius": 19,
    "guardShieldAlpha": 0.5,
    "gauntletPlate": 18,
    "backFrameWidth": 64,
    "backFrameHeight": 42,
    "scarfLength": 50,
    "ribbonLength": 60,
    "haloRadius": 20,
    "haloAlpha": 0.55,
    "stanceArmDrop": 10,
    "stanceCrouch": 10,
    "directionArrowLife": 2.5,
    "poseThrowTilt": 1.1,
    "poseThrowLift": 35,
    "poseImpactSquash": 0.6,
    "specialPunchScale": 1.25,
    "specialKickScale": 1.2,
    "sweepKickScale": 0.75,
    "stanceStrideScale": 0.4,
    "trailIntervals": [
      0.08,
      0.16,
      0.24
    ],
    "sigBannerAlphaTime": 0.2,
    "identityPips": 4,
    "portraitGlove": 15,
    "portraitLean": 22,
    "portraitHead": 25,
    "portraitHeadTall": 1.12,
    "landedPoseTime": 0.28,
    "armedRing": 32,
    "armedLine": 2,
    "shieldPipRadius": 29,
    "shieldPipY": 13,
    "shieldPipSize": 3,
    "trailHead": 75,
    "trailBody": 30,
    "backFrameTop": 8,
    "frameStripe": 7,
    "ribbonSpeed": 7,
    "ribbonSway": 15,
    "ribbonDrop": 34,
    "ribbonWidth": 12,
    "gauntletBorder": 4,
    "shieldBorder": 3,
    "frontShieldScale": 0.8,
    "haloLine": 2,
    "arrowWing": 0.6,
    "lanceLine": 5,
    "slamRingScale": 1.8,
    "slamLine": 5,
    "barrageLines": 5,
    "barrageGap": 9,
    "barrageLine": 3,
    "sweepImpactHeight": 24,
    "mirageLine": 5,
    "shieldBurstAlpha": 0.25,
    "bannerMargin": 30,
    "bannerStripe": 5,
    "bannerTitleY": 22,
    "bannerSubY": 42,
    "teamRing": 29,
    "teamRingLine": 2,
    "eyeGap": 3,
    "eyeLine": 2,
    "eyeBrow": 1,
    "mouthY": 9,
    "monoRadius": 5,
    "glassGap": 3,
    "glassLine": 2,
    "fantasyArchWidth": 0.17,
    "fantasyArchHeight": 0.58,
    "fantasyArchY": 0.08,
    "fantasyArchX": [
      0.11,
      0.89
    ],
    "fantasyArchLine": 10,
    "fantasyBannerWidth": 42,
    "fantasyBannerHeight": 91,
    "fantasyBannerY": 0.06,
    "fantasyBannerX": [
      0.27,
      0.73
    ],
    "fantasyBannerMark": 14,
    "fantasyTorchX": [
      0.045,
      0.955
    ],
    "fantasyTorchY": 0.47,
    "fantasyTorchSize": 10,
    "fantasyTorchGlow": 78,
    "fantasyTorchGlowAlpha": 0.16,
    "fantasyFlameSway": 2.5,
    "fantasyStoneSegments": 20,
    "fantasyStoneBand": 0.88,
    "fantasyStoneLine": 1.4,
    "fantasyInset": 0.94,
    "fantasyRopeAlpha": 0.6,
    "fantasyChainLine": 1.8,
    "fantasyLightAlpha": 0.42,
    "fantasyLightRadius": 0.72,
    "fantasyStarPoints": 8,
    "fantasySealRadius": 25,
    "fantasySealAlpha": 0.2,
    "fantasySigInset": 4,
    "fantasySigLine": 1.1,
    "fantasySigCorner": 10,
    "fantasyTextOutline": 3,
    "fantasyLightY": 0.26,
    "fantasyArchShoulder": 0.45,
    "fantasyArchCurve": 0.1,
    "fantasyBannerFraction": 0.27,
    "fantasyBannerTail": 12,
    "fantasyBannerLine": 1.3,
    "fantasyBannerRod": 6,
    "fantasyBannerRodLine": 3,
    "fantasyBannerEmblemY": 0.43,
    "fantasyFlameRate": 4,
    "fantasyTorchStem": 32,
    "fantasyTorchStemWidth": 6,
    "fantasyTorchBowlLine": 4,
    "fantasyFlameHeight": 2.2,
    "fantasyCoreWidth": 0.45,
    "fantasyInnerBand": 0.33,
    "fantasyMiddleBand": 0.66,
    "fantasySealInner": 0.46,
    "fantasyFloorTitleY": 0.58
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
    },
    "signature": {
      "frequency": 160,
      "end": 50,
      "duration": 0.28,
      "gain": 0.075,
      "type": "sawtooth"
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
    "combat": "직접 이동·공격 입력이 없는 실시간 전술 시뮬레이션. 전술 지연, 기력, 거리, 가드, 반격·잡기·속임수, 조건 작전서와 집중이 상호작용합니다.",
    "coaching": "coaching와 characters[].commands: 필수 사전 설정 없는 세 경기 지시. 캐릭터별 계획·연계·결정기는 characters[].followups/signature와 moves에 있습니다. 준비 작전서 데이터는 호환용으로 보존하며 기본 경기에서는 실행하지 않습니다.",
    "identity": "characters[].visual은 체형·장비·자세, identity는 고유 상태 표시, chargeTrait는 결정기 게이지 획득 조건입니다. 대표 동작·연계·지시 결과가 화면에서 연결되게 유지합니다.",
    "theme": "theme.colors/fonts/icons/labels는 중세 판타지 UI 테마의 단일 원본입니다. palette는 대비와 전투 색상, draw의 fantasy*는 석조 결투장·깃발·횃불 표현입니다. 화면 배치는 CSS 구조로 관리하며 전투 규칙과 저장 키는 바꾸지 않습니다."
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
    "signatureUsed",
    "followup",
    "counter",
    "guardBreak",
    "grab"
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
    "command",
    "followup",
    "signatureUsed",
    "guardBreak",
    "counter",
    "grab"
  ],
  "flashEvents": [
    "command",
    "followup",
    "signatureUsed",
    "guardBreak",
    "counter",
    "grab",
    "signatureArmed"
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
  ],
  "coaching": [
    {
      "id": "attack",
      "name": "공세",
      "glyph": "↗",
      "key": "Digit1"
    },
    {
      "id": "bait",
      "name": "유인",
      "glyph": "↶",
      "key": "Digit2"
    },
    {
      "id": "recover",
      "name": "회복",
      "glyph": "◌",
      "key": "Digit3"
    }
  ],
  "coachResponses": {
    "strike": "bait",
    "counter": "attack",
    "grab": "attack",
    "feint": "attack"
  },
  "commandReports": {
    "attack": "명중 {hits} · 가드 피해 {guardDamage}",
    "bait": "회피 {dodges} · 반격 {counters}",
    "recover": "기력 +{stamina} · 가드 +{guard}"
  },
  "theme": {
    "fonts": {
      "body": "\"Noto Sans KR\", \"Malgun Gothic\", \"Apple SD Gothic Neo\", system-ui, sans-serif",
      "display": "\"Noto Serif KR\", \"Nanum Myeongjo\", \"Batang\", \"AppleMyungjo\", Georgia, serif"
    },
    "colors": {
      "paper": "#eadfc5",
      "paperLight": "#f4ead5",
      "paperShade": "#dbc9a3",
      "paperEdge": "#c4aa77",
      "wood": "#30271d",
      "woodLight": "#463727",
      "woodDeep": "#1a1712",
      "brass": "#a98b52",
      "brassLight": "#d9c18b",
      "brassDark": "#6f552c",
      "ivory": "#f3e7ca",
      "oxblood": "#6e3931",
      "oxbloodLight": "#84473a",
      "olive": "#4b5c44",
      "iron": "#687568",
      "deepInk": "#2b241b",
      "shadowColor": "#080705",
      "hpFill": "#944d3e",
      "staminaFill": "#b08a43",
      "guardFill": "#708078",
      "stoneDark": "#464938",
      "stoneJoint": "#5b5b47",
      "stoneTop": "#9d9276",
      "torch": "#f1c078",
      "torchCore": "#fff0bd",
      "bannerCloth": "#573a2d",
      "bannerTrim": "#baa16d"
    },
    "icons": {
      "brand": "\u003ccircle cx='12' cy='12' r='9'/>\u003cpath d='m12 5 3 7-3 7-3-7 3-7Zm-8 7h4m8 0h4'/>",
      "attack": "\u003cpath d='m6 20 3-6L19 3l2 2L10 16l-4 4Zm1-7 5 5M4 22l3-3M6 4l3 2m-4 2 2 1'/>",
      "bait": "\u003cpath d='M19 3C8 2 3 10 7 17l-3 4 7-6c7 1 10-5 8-12ZM7 17l9-10M10 13l5 1m-2-4 1-4'/>",
      "recover": "\u003cpath d='M12 3v18M10 18C3 18 2 13 4 9c5 0 8 4 6 9Zm4-5c-1-6 2-10 7-10 1 5-1 10-7 10ZM7 6l2 2m7 10 3-3'/>",
      "signature": "\u003cpath d='m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1 3-6Z'/>\u003ccircle cx='12' cy='12' r='3'/>",
      "settings": "\u003cpath d='m9 3 3-1 3 1 1 3 3 1 2 3-1 3-3 1-1 3-3 2-3-1-1-3-3-1-2-3 1-3 3-1 1-3Z'/>\u003ccircle cx='12' cy='11' r='3'/>",
      "fullscreen": "\u003cpath d='M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5'/>",
      "pause": "\u003cpath d='M8 4v16m8-16v16'/>",
      "close": "\u003cpath d='m6 6 12 12M18 6 6 18'/>",
      "home": "\u003cpath d='M3 11 12 3l9 8v10H3V11Zm6 10v-7h6v7M7 9h10'/>",
      "resume": "\u003cpath d='m8 4 12 8-12 8V4Z'/>",
      "save": "\u003cpath d='M4 3h14l3 3v15H3V3h1Zm3 0v6h10V3M7 21v-8h10v8'/>",
      "load": "\u003cpath d='M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5'/>",
      "scroll": "\u003cpath d='M6 3h13v14a4 4 0 0 1-4 4H5a3 3 0 0 1-3-3h12a3 3 0 0 0 3 3M6 3a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3Zm3 4h5m-5 4h5'/>",
      "rename": "\u003cpath d='m4 17 1 4 4-1L21 8l-5-5L4 17Zm10-12 5 5M4 17l5 3'/>",
      "moon": "\u003cpath d='M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12Z'/>",
      "sound": "\u003cpath d='m3 9 5 0 5-5v16l-5-5H3V9Zm13-2a7 7 0 0 1 0 10m3-13a11 11 0 0 1 0 16'/>",
      "training": "\u003cpath d='m4 20 6-6m4-4 6-6M7 3l14 14-4 4L3 7l4-4Z'/>",
      "gear": "\u003cpath d='M7 3 3 7l3 5 3-2v11h6V10l3 2 3-5-4-4-5 3-5-3Z'/>",
      "fight": "\u003cpath d='m4 3 17 18M20 3 3 20M3 3l5 1-4 4-1-5Zm18 0-5 1 4 4 1-5Z'/>",
      "coins": "\u003cellipse cx='12' cy='12' rx='8' ry='9'/>\u003cpath d='m12 7 3 5-3 5-3-5 3-5Z'/>",
      "rank": "\u003cpath d='m12 3 3 6 6 1-5 5 1 6-5-3-5 3 1-6-5-5 6-1 3-6Z'/>",
      "chevron": "\u003cpath d='m9 5 7 7-7 7'/>"
    },
    "labels": {
      "settingsView": "화면과 소리",
      "settingsArchive": "기록 보관함",
      "settingsIdentity": "투사 관리",
      "settingsAdvanced": "고급 설정",
      "contentEditor": "콘텐츠 편집",
      "resetCaption": "현재 계약을 끝내고 새 투사와 계약합니다.",
      "commandTitle": "전술 지시",
      "arenaTitle": "서약의 결투장",
      "coinLabel": "금화",
      "rankLabel": "계급",
      "closeLabel": "닫기"
    }
  }
};
