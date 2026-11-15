// Editable JSON-compatible game database. Runtime logic belongs in index.html.
window.GAME_DB = {
  "meta": {
    "version": "9.0",
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
    "grabGuardBonus": 1.2,
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
    "counterChance": 0.78,
    "counterReadBonus": 0.06,
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
    "tacticLag": 0.9,
    "minTacticLag": 0.28,
    "changeCooldown": 1.0,
    "aiReview": 5.2,
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
    "startCoins": 140,
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
    "lowHpPower": 0,
    "strikePower": 1
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
    },
    "gear_spacing": {
      "name": "추격의 간격",
      "duration": 3,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "reach",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.12
        }
      ]
    },
    "gear_opening": {
      "name": "잔영의 틈",
      "duration": 2.4,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.18
        },
        {
          "stat": "strikePower",
          "op": "multiply",
          "value": 1.18
        }
      ]
    },
    "gear_shield": {
      "name": "서약 축적",
      "duration": 6,
      "maxStacks": 3,
      "stats": [
        {
          "stat": "guardDamage",
          "op": "multiply",
          "value": 1.08
        }
      ]
    },
    "gear_siege": {
      "name": "붕괴 추격",
      "duration": 3,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.2
        }
      ]
    },
    "res_hunt": {
      "name": "추격 공명",
      "duration": 3,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "staminaCost",
          "op": "multiply",
          "value": 0.88
        }
      ]
    },
    "res_iron": {
      "name": "철벽 공명",
      "duration": 3,
      "maxStacks": 1,
      "stats": [
        {
          "stat": "armor",
          "op": "add",
          "value": 0.07
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
    },
    "gear_pad": {
      "name": "성채 누비갑옷",
      "description": "가드 성공 → 가드 5 회복 · 재발동 3.5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBlock",
          "when": [],
          "cooldown": 3.5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 5
            }
          ]
        }
      ]
    },
    "gear_pad_bastion": {
      "name": "성채",
      "description": "가드 성공 → 가드 7 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBlock",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_pad_bastion_master": {
      "name": "성채 · 완성",
      "description": "가드 성공 → 가드 12 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBlock",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_pad_duelist": {
      "name": "결투가",
      "description": "회피 성공 → 기력 7 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onDodge",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_pad_duelist_master": {
      "name": "결투가 · 완성",
      "description": "회피 성공 → 기력 12 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onDodge",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_breath": {
      "name": "성자의 숨결",
      "description": "기력 28% 미만 → 기력 12 회복 · 재발동 14초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onLowStamina",
          "when": [],
          "cooldown": 14,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_breath_endless": {
      "name": "불굴",
      "description": "기력 28% 미만 → 기력 10 회복 / 집중 8 획득 · 재발동 12초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onLowStamina",
          "when": [],
          "cooldown": 12,
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
          ]
        }
      ]
    },
    "gear_breath_endless_master": {
      "name": "불굴 · 완성",
      "description": "기력 28% 미만 → 기력 16 회복 / 집중 13 획득 · 재발동 12초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onLowStamina",
          "when": [],
          "cooldown": 12,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 16
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 13
            }
          ]
        }
      ]
    },
    "gear_breath_leap": {
      "name": "도약",
      "description": "회피 성공 → 기력 5 회복 / 집중 7 획득 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onDodge",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 5
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_breath_leap_master": {
      "name": "도약 · 완성",
      "description": "회피 성공 → 기력 8 회복 / 집중 12 획득 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onDodge",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 8
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_reach": {
      "name": "매사냥꾼 사슬갑",
      "description": "상대 헛침 → 3초간 타격 거리·기동 +12% · 재발동 3.5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeWhiff",
          "when": [],
          "cooldown": 3.5,
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "gear_spacing"
            }
          ]
        }
      ]
    },
    "gear_reach_spear": {
      "name": "창끝",
      "description": "적중 → 집중 6 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onHit",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 6
            }
          ]
        }
      ]
    },
    "gear_reach_spear_master": {
      "name": "창끝 · 완성",
      "description": "적중 → 집중 10 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onHit",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 10
            }
          ]
        }
      ]
    },
    "gear_reach_reel": {
      "name": "거두기",
      "description": "잡기 적중 → 기력 7 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onGrabHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_reach_reel_master": {
      "name": "거두기 · 완성",
      "description": "잡기 적중 → 기력 12 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onGrabHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_weight": {
      "name": "파성 건틀릿",
      "description": "가드 붕괴 유발 → 집중 14 획득 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 14
            }
          ]
        }
      ]
    },
    "gear_weight_crack": {
      "name": "균열",
      "description": "적중 → 상대 가드 5 감소 · 재발동 2.5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onHit",
          "when": [],
          "cooldown": 2.5,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "guard",
              "value": -5
            }
          ]
        }
      ]
    },
    "gear_weight_crack_master": {
      "name": "균열 · 완성",
      "description": "적중 → 상대 가드 8 감소 · 재발동 2.5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onHit",
          "when": [],
          "cooldown": 2.5,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "guard",
              "value": -8
            }
          ]
        }
      ]
    },
    "gear_weight_execution": {
      "name": "일격",
      "description": "상성 파훼 성공 → 집중 12 획득 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_weight_execution_master": {
      "name": "일격 · 완성",
      "description": "상성 파훼 성공 → 집중 20 획득 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 20
            }
          ]
        }
      ]
    },
    "gear_ankle": {
      "name": "바람 사냥 장화",
      "description": "회피 성공 → 집중 6 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onDodge",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 6
            }
          ]
        }
      ]
    },
    "gear_ankle_pursuit": {
      "name": "추격",
      "description": "상대 헛침 → 기력 7 회복 · 재발동 3.5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeWhiff",
          "when": [],
          "cooldown": 3.5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_ankle_pursuit_master": {
      "name": "추격 · 완성",
      "description": "상대 헛침 → 기력 12 회복 · 재발동 3.5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeWhiff",
          "when": [],
          "cooldown": 3.5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_ankle_wander": {
      "name": "유랑",
      "description": "회피 성공 → 기력 7 회복 / 가드 4 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onDodge",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 7
            },
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 4
            }
          ]
        }
      ]
    },
    "gear_ankle_wander_master": {
      "name": "유랑 · 완성",
      "description": "회피 성공 → 기력 12 회복 / 가드 7 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onDodge",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 12
            },
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_deceive": {
      "name": "잔영 망토",
      "description": "속임수 성공 → 2.4초간 타격·잡기 피해 +18% · 재발동 2초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFeint",
          "when": [],
          "cooldown": 2,
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "gear_opening"
            }
          ]
        }
      ]
    },
    "gear_deceive_illusion": {
      "name": "허상",
      "description": "속임수 성공 → 상대 가드 10 감소 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFeint",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "guard",
              "value": -10
            }
          ]
        }
      ]
    },
    "gear_deceive_illusion_master": {
      "name": "허상 · 완성",
      "description": "속임수 성공 → 상대 가드 16 감소 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFeint",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "guard",
              "value": -16
            }
          ]
        }
      ]
    },
    "gear_deceive_ambush": {
      "name": "암습",
      "description": "속임수 성공 → 집중 10 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFeint",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 10
            }
          ]
        }
      ]
    },
    "gear_deceive_ambush_master": {
      "name": "암습 · 완성",
      "description": "속임수 성공 → 집중 16 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFeint",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 16
            }
          ]
        }
      ]
    },
    "gear_lung": {
      "name": "불씨 심장석",
      "description": "적중 → 기력 2 회복 · 재발동 2초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onHit",
          "when": [],
          "cooldown": 2,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 2
            }
          ]
        }
      ]
    },
    "gear_lung_burn": {
      "name": "연소",
      "description": "적중 → 집중 4 획득 · 재발동 2초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onHit",
          "when": [],
          "cooldown": 2,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 4
            }
          ]
        }
      ]
    },
    "gear_lung_burn_master": {
      "name": "연소 · 완성",
      "description": "적중 → 집중 7 획득 · 재발동 2초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onHit",
          "when": [],
          "cooldown": 2,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_lung_ember": {
      "name": "잔불",
      "description": "체력 35% 미만 → 기력 14 회복 / 가드 10 회복 · 재발동 16초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onLowHp",
          "when": [],
          "cooldown": 16,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 14
            },
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 10
            }
          ]
        }
      ]
    },
    "gear_lung_ember_master": {
      "name": "잔불 · 완성",
      "description": "체력 35% 미만 → 기력 23 회복 / 가드 16 회복 · 재발동 16초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onLowHp",
          "when": [],
          "cooldown": 16,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 23
            },
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 16
            }
          ]
        }
      ]
    },
    "gear_hardguard": {
      "name": "서약의 방패",
      "description": "가드 성공 → 가드 압박 +8%씩 최대 3회 축적 · 6초 유지 · 재발동 1초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBlock",
          "when": [],
          "cooldown": 1,
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "gear_shield"
            }
          ]
        }
      ]
    },
    "gear_hardguard_echo": {
      "name": "반향",
      "description": "반격 성공 → 가드 12 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onCounterHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_hardguard_echo_master": {
      "name": "반향 · 완성",
      "description": "반격 성공 → 가드 20 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onCounterHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 20
            }
          ]
        }
      ]
    },
    "gear_hardguard_siege": {
      "name": "압성",
      "description": "가드 붕괴 유발 → 집중 14 획득 · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 14
            }
          ]
        }
      ]
    },
    "gear_hardguard_siege_master": {
      "name": "압성 · 완성",
      "description": "가드 붕괴 유발 → 집중 23 획득 · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 23
            }
          ]
        }
      ]
    },
    "gear_parry": {
      "name": "흘림 손목띠",
      "description": "반격 성공 → 기력 7 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onCounterHit",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_parry_read": {
      "name": "판독",
      "description": "상대 행동 반복 → 집중 6 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeRepeat",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 6
            }
          ]
        }
      ]
    },
    "gear_parry_read_master": {
      "name": "판독 · 완성",
      "description": "상대 행동 반복 → 집중 10 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeRepeat",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 10
            }
          ]
        }
      ]
    },
    "gear_parry_reverse": {
      "name": "반전",
      "description": "잡기 적중 → 집중 12 획득 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onGrabHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 12
            }
          ]
        }
      ]
    },
    "gear_parry_reverse_master": {
      "name": "반전 · 완성",
      "description": "잡기 적중 → 집중 20 획득 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onGrabHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 20
            }
          ]
        }
      ]
    },
    "gear_grip": {
      "name": "거인의 매듭장갑",
      "description": "잡기 적중 → 상대 기력 7 감소 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onGrabHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "stamina",
              "value": -7
            }
          ]
        }
      ]
    },
    "gear_grip_crush": {
      "name": "압착",
      "description": "잡기 적중 → 상대 가드 8 감소 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onGrabHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "guard",
              "value": -8
            }
          ]
        }
      ]
    },
    "gear_grip_crush_master": {
      "name": "압착 · 완성",
      "description": "잡기 적중 → 상대 가드 13 감소 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onGrabHit",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "guard",
              "value": -13
            }
          ]
        }
      ]
    },
    "gear_grip_catch": {
      "name": "사냥",
      "description": "상성 파훼 성공 → 기력 10 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 10
            }
          ]
        }
      ]
    },
    "gear_grip_catch_master": {
      "name": "사냥 · 완성",
      "description": "상성 파훼 성공 → 기력 16 회복 · 재발동 4초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 4,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 16
            }
          ]
        }
      ]
    },
    "gear_breaker": {
      "name": "공성 인장",
      "description": "가드 붕괴 유발 → 3초간 화력 +20% · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "gear_siege"
            }
          ]
        }
      ]
    },
    "gear_breaker_rupture": {
      "name": "파열",
      "description": "가드 붕괴 유발 → 상대 기력 18 감소 · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "stamina",
              "value": -18
            }
          ]
        }
      ]
    },
    "gear_breaker_rupture_master": {
      "name": "파열 · 완성",
      "description": "가드 붕괴 유발 → 상대 기력 30 감소 · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "resource",
              "target": "foe",
              "key": "stamina",
              "value": -30
            }
          ]
        }
      ]
    },
    "gear_breaker_plunder": {
      "name": "약탈",
      "description": "가드 붕괴 유발 → 기력 15 회복 / 집중 10 획득 · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 15
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 10
            }
          ]
        }
      ]
    },
    "gear_breaker_plunder_master": {
      "name": "약탈 · 완성",
      "description": "가드 붕괴 유발 → 기력 25 회복 / 집중 16 획득 · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 25
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 16
            }
          ]
        }
      ]
    },
    "gear_neural": {
      "name": "전장의 맹세",
      "description": "상성 파훼 성공 → 집중 8 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 8
            }
          ]
        }
      ]
    },
    "gear_neural_resolve": {
      "name": "결단",
      "description": "상성 파훼 성공 → 집중 10 획득 / 기력 5 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 10
            },
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 5
            }
          ]
        }
      ]
    },
    "gear_neural_resolve_master": {
      "name": "결단 · 완성",
      "description": "상성 파훼 성공 → 집중 16 획득 / 기력 8 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 16
            },
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 8
            }
          ]
        }
      ]
    },
    "gear_neural_foresee": {
      "name": "예견",
      "description": "상대 행동 반복 → 가드 8 회복 / 집중 4 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeRepeat",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 8
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 4
            }
          ]
        }
      ]
    },
    "gear_neural_foresee_master": {
      "name": "예견 · 완성",
      "description": "상대 행동 반복 → 가드 13 회복 / 집중 7 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeRepeat",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 13
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_reader": {
      "name": "용의 눈 렌즈",
      "description": "상대 행동 반복 → 집중 4 획득 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeRepeat",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 4
            }
          ]
        }
      ]
    },
    "gear_reader_punish": {
      "name": "응징",
      "description": "상대 헛침 → 집중 8 획득 · 재발동 3.5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeWhiff",
          "when": [],
          "cooldown": 3.5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 8
            }
          ]
        }
      ]
    },
    "gear_reader_punish_master": {
      "name": "응징 · 완성",
      "description": "상대 헛침 → 집중 13 획득 · 재발동 3.5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeWhiff",
          "when": [],
          "cooldown": 3.5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 13
            }
          ]
        }
      ]
    },
    "gear_reader_answer": {
      "name": "대응",
      "description": "상성 파훼 성공 → 가드 10 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 10
            }
          ]
        }
      ]
    },
    "gear_reader_answer_master": {
      "name": "대응 · 완성",
      "description": "상성 파훼 성공 → 가드 16 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 16
            }
          ]
        }
      ]
    },
    "gear_anchor": {
      "name": "성벽 각반",
      "description": "가드 성공 → 기력 3 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBlock",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 3
            }
          ]
        }
      ]
    },
    "gear_anchor_fort": {
      "name": "요새",
      "description": "가드 성공 → 집중 6 획득 / 가드 4 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBlock",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 6
            },
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 4
            }
          ]
        }
      ]
    },
    "gear_anchor_fort_master": {
      "name": "요새 · 완성",
      "description": "가드 성공 → 집중 10 획득 / 가드 7 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBlock",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 10
            },
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 7
            }
          ]
        }
      ]
    },
    "gear_anchor_revenge": {
      "name": "역습",
      "description": "반격 성공 → 기력 8 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onCounterHit",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 8
            }
          ]
        }
      ]
    },
    "gear_anchor_revenge_master": {
      "name": "역습 · 완성",
      "description": "반격 성공 → 기력 13 회복 · 재발동 3초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onCounterHit",
          "when": [],
          "cooldown": 3,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 13
            }
          ]
        }
      ]
    },
    "resonance_assault": {
      "name": "공성 공명",
      "description": "가드 붕괴 유발 → 기력 14 회복 · 집중 12 획득 · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBreak",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "stamina",
              "value": 14
            },
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 12
            }
          ]
        }
      ]
    },
    "resonance_hunt": {
      "name": "추격 공명",
      "description": "상대 헛침 → 3초간 이동 속도 +20% · 공격 기력 비용 -12% · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onFoeWhiff",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "res_hunt"
            }
          ]
        }
      ]
    },
    "resonance_bulwark": {
      "name": "수호 공명",
      "description": "가드 성공 → 3초간 피해 감소 +7%p · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onBlock",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "status",
              "target": "self",
              "id": "res_iron"
            }
          ]
        }
      ]
    },
    "resonance_insight": {
      "name": "통찰 공명",
      "description": "상성 파훼 성공 → 집중 16 획득 · 가드 10 회복 · 재발동 5초",
      "source": "equipment",
      "hooks": [
        {
          "trigger": "onTacticWin",
          "when": [],
          "cooldown": 5,
          "effects": [
            {
              "op": "resource",
              "target": "self",
              "key": "focus",
              "value": 16
            },
            {
              "op": "resource",
              "target": "self",
              "key": "guard",
              "value": 10
            }
          ]
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
      "name": "성채 누비갑옷",
      "category": "bulwark",
      "sigil": "bulwark",
      "description": "수비를 버티는 대신 발이 무거워집니다.",
      "cost": 45,
      "upgradeCost": 32,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "hp",
          "op": "multiply",
          "value": 1.18
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.9
        }
      ],
      "trait": "gear_pad",
      "forges": [
        {
          "id": "bastion",
          "name": "성채",
          "description": "가드를 끝까지 유지하는 중갑 특화.",
          "stats": [
            {
              "stat": "guard",
              "op": "multiply",
              "value": 1.2
            },
            {
              "stat": "moveCost",
              "op": "multiply",
              "value": 1.12
            }
          ],
          "trait": "gear_pad_bastion",
          "mastery": {
            "stats": [
              {
                "stat": "hp",
                "op": "multiply",
                "value": 1.1
              }
            ],
            "trait": "gear_pad_bastion_master"
          }
        },
        {
          "id": "duelist",
          "name": "결투가",
          "description": "무게를 덜어 회피 전투로 전환합니다.",
          "stats": [
            {
              "stat": "speed",
              "op": "multiply",
              "value": 1.12
            },
            {
              "stat": "hp",
              "op": "multiply",
              "value": 0.96
            }
          ],
          "trait": "gear_pad_duelist",
          "mastery": {
            "stats": [
              {
                "stat": "evasion",
                "op": "add",
                "value": 0.04
              }
            ],
            "trait": "gear_pad_duelist_master"
          }
        }
      ]
    },
    {
      "id": "breath",
      "name": "성자의 숨결",
      "category": "insight",
      "sigil": "insight",
      "description": "교환을 오래 이어가지만 한 방은 약해집니다.",
      "cost": 45,
      "upgradeCost": 34,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "stamina",
          "op": "multiply",
          "value": 1.16
        },
        {
          "stat": "staminaRegen",
          "op": "multiply",
          "value": 1.24
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.9
        }
      ],
      "trait": "gear_breath",
      "forges": [
        {
          "id": "endless",
          "name": "불굴",
          "description": "긴 싸움의 기력 고갈을 막습니다.",
          "stats": [
            {
              "stat": "staminaRegen",
              "op": "multiply",
              "value": 1.18
            },
            {
              "stat": "power",
              "op": "multiply",
              "value": 0.95
            }
          ],
          "trait": "gear_breath_endless",
          "mastery": {
            "stats": [
              {
                "stat": "stamina",
                "op": "multiply",
                "value": 1.12
              }
            ],
            "trait": "gear_breath_endless_master"
          }
        },
        {
          "id": "leap",
          "name": "도약",
          "description": "회피를 다음 공세의 연료로 씁니다.",
          "stats": [
            {
              "stat": "speed",
              "op": "multiply",
              "value": 1.12
            },
            {
              "stat": "guard",
              "op": "multiply",
              "value": 0.9
            }
          ],
          "trait": "gear_breath_leap",
          "mastery": {
            "stats": [
              {
                "stat": "staminaCost",
                "op": "multiply",
                "value": 0.91
              }
            ],
            "trait": "gear_breath_leap_master"
          }
        }
      ]
    },
    {
      "id": "reach",
      "name": "매사냥꾼 사슬갑",
      "category": "hunt",
      "sigil": "hunt",
      "description": "긴 타격을 얻지만 근접 가드와 잡기가 약해집니다.",
      "cost": 65,
      "upgradeCost": 45,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "reach",
          "op": "add",
          "value": 0.35
        },
        {
          "stat": "grabReach",
          "op": "add",
          "value": -0.08
        },
        {
          "stat": "guard",
          "op": "multiply",
          "value": 0.85
        }
      ],
      "trait": "gear_reach",
      "forges": [
        {
          "id": "spear",
          "name": "창끝",
          "description": "안전 거리에서 타격 화력을 키웁니다.",
          "stats": [
            {
              "stat": "strikePower",
              "op": "multiply",
              "value": 1.15
            },
            {
              "stat": "guard",
              "op": "multiply",
              "value": 0.92
            }
          ],
          "trait": "gear_reach_spear",
          "mastery": {
            "stats": [
              {
                "stat": "reach",
                "op": "add",
                "value": 0.12
              }
            ],
            "trait": "gear_reach_spear_master"
          }
        },
        {
          "id": "reel",
          "name": "거두기",
          "description": "긴 타격 뒤 잡기로 파고듭니다.",
          "stats": [
            {
              "stat": "grabReach",
              "op": "add",
              "value": 0.28
            },
            {
              "stat": "strikePower",
              "op": "multiply",
              "value": 0.93
            }
          ],
          "trait": "gear_reach_reel",
          "mastery": {
            "stats": [
              {
                "stat": "grabPower",
                "op": "multiply",
                "value": 1.12
              }
            ],
            "trait": "gear_reach_reel_master"
          }
        }
      ]
    },
    {
      "id": "weight",
      "name": "파성 건틀릿",
      "category": "assault",
      "sigil": "assault",
      "description": "강한 정타를 얻지만 준비 동작이 느려집니다.",
      "cost": 65,
      "upgradeCost": 46,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.25
        },
        {
          "stat": "attackSpeed",
          "op": "multiply",
          "value": 0.86
        }
      ],
      "trait": "gear_weight",
      "forges": [
        {
          "id": "crack",
          "name": "균열",
          "description": "연속 압박으로 방패를 깨뜨립니다.",
          "stats": [
            {
              "stat": "guardDamage",
              "op": "multiply",
              "value": 1.28
            },
            {
              "stat": "speed",
              "op": "multiply",
              "value": 0.93
            }
          ],
          "trait": "gear_weight_crack",
          "mastery": {
            "stats": [
              {
                "stat": "guardDamage",
                "op": "multiply",
                "value": 1.15
              }
            ],
            "trait": "gear_weight_crack_master"
          }
        },
        {
          "id": "execution",
          "name": "일격",
          "description": "상성 승리를 강력한 한 방으로 바꿉니다.",
          "stats": [
            {
              "stat": "strikePower",
              "op": "multiply",
              "value": 1.2
            },
            {
              "stat": "staminaCost",
              "op": "multiply",
              "value": 1.12
            }
          ],
          "trait": "gear_weight_execution",
          "mastery": {
            "stats": [
              {
                "stat": "accuracy",
                "op": "add",
                "value": 0.04
              }
            ],
            "trait": "gear_weight_execution_master"
          }
        }
      ]
    },
    {
      "id": "ankle",
      "name": "바람 사냥 장화",
      "category": "hunt",
      "sigil": "hunt",
      "description": "간격을 지배하지만 오래 달리면 기력이 샙니다.",
      "cost": 60,
      "upgradeCost": 43,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.28
        },
        {
          "stat": "moveCost",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "guard",
          "op": "multiply",
          "value": 0.9
        }
      ],
      "trait": "gear_ankle",
      "forges": [
        {
          "id": "pursuit",
          "name": "추격",
          "description": "상대 헛침을 따라가 공격으로 잇습니다.",
          "stats": [
            {
              "stat": "reach",
              "op": "add",
              "value": 0.2
            },
            {
              "stat": "hp",
              "op": "multiply",
              "value": 0.94
            }
          ],
          "trait": "gear_ankle_pursuit",
          "mastery": {
            "stats": [
              {
                "stat": "power",
                "op": "multiply",
                "value": 1.1
              }
            ],
            "trait": "gear_ankle_pursuit_master"
          }
        },
        {
          "id": "wander",
          "name": "유랑",
          "description": "회피 성공으로 계속 움직입니다.",
          "stats": [
            {
              "stat": "evasion",
              "op": "add",
              "value": 0.07
            },
            {
              "stat": "power",
              "op": "multiply",
              "value": 0.94
            }
          ],
          "trait": "gear_ankle_wander",
          "mastery": {
            "stats": [
              {
                "stat": "staminaRegen",
                "op": "multiply",
                "value": 1.18
              }
            ],
            "trait": "gear_ankle_wander_master"
          }
        }
      ]
    },
    {
      "id": "deceive",
      "name": "잔영 망토",
      "category": "insight",
      "sigil": "insight",
      "description": "속임수에 성공해야 약한 정타를 보상받습니다.",
      "cost": 60,
      "upgradeCost": 42,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "feintPower",
          "op": "multiply",
          "value": 1.4
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.88
        }
      ],
      "trait": "gear_deceive",
      "forges": [
        {
          "id": "illusion",
          "name": "허상",
          "description": "가드를 흔들어 다음 공격을 엽니다.",
          "stats": [
            {
              "stat": "feintPower",
              "op": "multiply",
              "value": 1.22
            },
            {
              "stat": "guard",
              "op": "multiply",
              "value": 0.92
            }
          ],
          "trait": "gear_deceive_illusion",
          "mastery": {
            "stats": [
              {
                "stat": "feintPower",
                "op": "multiply",
                "value": 1.13
              }
            ],
            "trait": "gear_deceive_illusion_master"
          }
        },
        {
          "id": "ambush",
          "name": "암습",
          "description": "속임수 뒤 잡기 결정기를 준비합니다.",
          "stats": [
            {
              "stat": "grabPower",
              "op": "multiply",
              "value": 1.2
            },
            {
              "stat": "staminaCost",
              "op": "multiply",
              "value": 1.08
            }
          ],
          "trait": "gear_deceive_ambush",
          "mastery": {
            "stats": [
              {
                "stat": "grabAccuracy",
                "op": "add",
                "value": 0.06
              }
            ],
            "trait": "gear_deceive_ambush_master"
          }
        }
      ]
    },
    {
      "id": "lung",
      "name": "불씨 심장석",
      "category": "assault",
      "sigil": "assault",
      "description": "연속 공격을 돕지만 피해를 더 받습니다.",
      "cost": 65,
      "upgradeCost": 44,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "stamina",
          "op": "multiply",
          "value": 1.25
        },
        {
          "stat": "staminaRegen",
          "op": "multiply",
          "value": 1.12
        },
        {
          "stat": "armor",
          "op": "add",
          "value": -0.025
        }
      ],
      "trait": "gear_lung",
      "forges": [
        {
          "id": "burn",
          "name": "연소",
          "description": "빠르게 공격해 집중을 모읍니다.",
          "stats": [
            {
              "stat": "attackSpeed",
              "op": "multiply",
              "value": 1.14
            },
            {
              "stat": "staminaCost",
              "op": "multiply",
              "value": 1.1
            }
          ],
          "trait": "gear_lung_burn",
          "mastery": {
            "stats": [
              {
                "stat": "strikePower",
                "op": "multiply",
                "value": 1.12
              }
            ],
            "trait": "gear_lung_burn_master"
          }
        },
        {
          "id": "ember",
          "name": "잔불",
          "description": "위기에서 버티며 다시 교환합니다.",
          "stats": [
            {
              "stat": "hp",
              "op": "multiply",
              "value": 1.1
            },
            {
              "stat": "speed",
              "op": "multiply",
              "value": 0.96
            }
          ],
          "trait": "gear_lung_ember",
          "mastery": {
            "stats": [
              {
                "stat": "armor",
                "op": "add",
                "value": 0.035
              }
            ],
            "trait": "gear_lung_ember_master"
          }
        }
      ]
    },
    {
      "id": "hardguard",
      "name": "서약의 방패",
      "category": "bulwark",
      "sigil": "bulwark",
      "description": "단단한 가드를 얻지만 잡기 진입을 피하기 어렵습니다.",
      "cost": 65,
      "upgradeCost": 45,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "guard",
          "op": "multiply",
          "value": 1.35
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.88
        }
      ],
      "trait": "gear_hardguard",
      "forges": [
        {
          "id": "echo",
          "name": "반향",
          "description": "막은 뒤 반격으로 되돌려줍니다.",
          "stats": [
            {
              "stat": "counterPower",
              "op": "multiply",
              "value": 1.2
            },
            {
              "stat": "grabPower",
              "op": "multiply",
              "value": 0.9
            }
          ],
          "trait": "gear_hardguard_echo",
          "mastery": {
            "stats": [
              {
                "stat": "counterChance",
                "op": "add",
                "value": 0.05
              }
            ],
            "trait": "gear_hardguard_echo_master"
          }
        },
        {
          "id": "siege",
          "name": "압성",
          "description": "버티며 상대 가드를 먼저 무너뜨립니다.",
          "stats": [
            {
              "stat": "guardDamage",
              "op": "multiply",
              "value": 1.22
            },
            {
              "stat": "staminaCost",
              "op": "multiply",
              "value": 1.1
            }
          ],
          "trait": "gear_hardguard_siege",
          "mastery": {
            "stats": [
              {
                "stat": "guardRegen",
                "op": "multiply",
                "value": 1.2
              }
            ],
            "trait": "gear_hardguard_siege_master"
          }
        }
      ]
    },
    {
      "id": "parry",
      "name": "흘림 손목띠",
      "category": "insight",
      "sigil": "insight",
      "description": "타격 반격에 강해지지만 잡기 화력을 잃습니다.",
      "cost": 65,
      "upgradeCost": 45,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "counterChance",
          "op": "add",
          "value": 0.1
        },
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.16
        },
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 0.8
        }
      ],
      "trait": "gear_parry",
      "forges": [
        {
          "id": "read",
          "name": "판독",
          "description": "같은 공격을 반복하는 상대를 노립니다.",
          "stats": [
            {
              "stat": "readBonus",
              "op": "add",
              "value": 0.07
            },
            {
              "stat": "hp",
              "op": "multiply",
              "value": 0.95
            }
          ],
          "trait": "gear_parry_read",
          "mastery": {
            "stats": [
              {
                "stat": "counterPower",
                "op": "multiply",
                "value": 1.12
              }
            ],
            "trait": "gear_parry_read_master"
          }
        },
        {
          "id": "reverse",
          "name": "반전",
          "description": "반격을 경계하는 상대를 잡기로 낚습니다.",
          "stats": [
            {
              "stat": "grabAccuracy",
              "op": "add",
              "value": 0.12
            },
            {
              "stat": "counterPower",
              "op": "multiply",
              "value": 0.92
            }
          ],
          "trait": "gear_parry_reverse",
          "mastery": {
            "stats": [
              {
                "stat": "grabPower",
                "op": "multiply",
                "value": 1.18
              }
            ],
            "trait": "gear_parry_reverse_master"
          }
        }
      ]
    },
    {
      "id": "grip",
      "name": "거인의 매듭장갑",
      "category": "assault",
      "sigil": "assault",
      "description": "강력한 잡기 대신 타격 거리를 포기합니다.",
      "cost": 65,
      "upgradeCost": 45,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.28
        },
        {
          "stat": "grabAccuracy",
          "op": "add",
          "value": 0.08
        },
        {
          "stat": "reach",
          "op": "add",
          "value": -0.22
        }
      ],
      "trait": "gear_grip",
      "forges": [
        {
          "id": "crush",
          "name": "압착",
          "description": "가까이 붙어 가드와 기력을 함께 뺏습니다.",
          "stats": [
            {
              "stat": "grabPower",
              "op": "multiply",
              "value": 1.2
            },
            {
              "stat": "attackSpeed",
              "op": "multiply",
              "value": 0.94
            }
          ],
          "trait": "gear_grip_crush",
          "mastery": {
            "stats": [
              {
                "stat": "grabReach",
                "op": "add",
                "value": 0.14
              }
            ],
            "trait": "gear_grip_crush_master"
          }
        },
        {
          "id": "catch",
          "name": "사냥",
          "description": "반격 대기를 잡아 다음 공격을 잇습니다.",
          "stats": [
            {
              "stat": "grabReach",
              "op": "add",
              "value": 0.28
            },
            {
              "stat": "power",
              "op": "multiply",
              "value": 0.95
            }
          ],
          "trait": "gear_grip_catch",
          "mastery": {
            "stats": [
              {
                "stat": "speed",
                "op": "multiply",
                "value": 1.1
              }
            ],
            "trait": "gear_grip_catch_master"
          }
        }
      ]
    },
    {
      "id": "breaker",
      "name": "공성 인장",
      "category": "assault",
      "sigil": "assault",
      "description": "가드를 빠르게 깨지만 체력이 낮아집니다.",
      "cost": 65,
      "upgradeCost": 46,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "guardDamage",
          "op": "multiply",
          "value": 1.45
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.88
        }
      ],
      "trait": "gear_breaker",
      "forges": [
        {
          "id": "rupture",
          "name": "파열",
          "description": "붕괴 뒤 상대의 기력까지 끊습니다.",
          "stats": [
            {
              "stat": "power",
              "op": "multiply",
              "value": 1.12
            },
            {
              "stat": "guard",
              "op": "multiply",
              "value": 0.88
            }
          ],
          "trait": "gear_breaker_rupture",
          "mastery": {
            "stats": [
              {
                "stat": "guardDamage",
                "op": "multiply",
                "value": 1.17
              }
            ],
            "trait": "gear_breaker_rupture_master"
          }
        },
        {
          "id": "plunder",
          "name": "약탈",
          "description": "방패를 부수며 자신의 기력을 채웁니다.",
          "stats": [
            {
              "stat": "staminaCost",
              "op": "multiply",
              "value": 0.9
            },
            {
              "stat": "counterPower",
              "op": "multiply",
              "value": 0.9
            }
          ],
          "trait": "gear_breaker_plunder",
          "mastery": {
            "stats": [
              {
                "stat": "focusGain",
                "op": "multiply",
                "value": 1.16
              }
            ],
            "trait": "gear_breaker_plunder_master"
          }
        }
      ]
    },
    {
      "id": "neural",
      "name": "전장의 맹세",
      "category": "insight",
      "sigil": "insight",
      "description": "전술 전환과 결정기가 빨라지지만 맷집이 약해집니다.",
      "cost": 65,
      "upgradeCost": 44,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "tacticLag",
          "op": "multiply",
          "value": 0.55
        },
        {
          "stat": "focusGain",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "hp",
          "op": "multiply",
          "value": 0.9
        }
      ],
      "trait": "gear_neural",
      "forges": [
        {
          "id": "resolve",
          "name": "결단",
          "description": "빠른 전환으로 상대의 수를 덮습니다.",
          "stats": [
            {
              "stat": "attackSpeed",
              "op": "multiply",
              "value": 1.1
            },
            {
              "stat": "moveCost",
              "op": "multiply",
              "value": 1.15
            }
          ],
          "trait": "gear_neural_resolve",
          "mastery": {
            "stats": [
              {
                "stat": "speed",
                "op": "multiply",
                "value": 1.1
              }
            ],
            "trait": "gear_neural_resolve_master"
          }
        },
        {
          "id": "foresee",
          "name": "예견",
          "description": "반복 습관을 읽고 수비를 복구합니다.",
          "stats": [
            {
              "stat": "readBonus",
              "op": "add",
              "value": 0.055
            },
            {
              "stat": "power",
              "op": "multiply",
              "value": 0.95
            }
          ],
          "trait": "gear_neural_foresee",
          "mastery": {
            "stats": [
              {
                "stat": "counterChance",
                "op": "add",
                "value": 0.04
              }
            ],
            "trait": "gear_neural_foresee_master"
          }
        }
      ]
    },
    {
      "id": "reader",
      "name": "용의 눈 렌즈",
      "category": "insight",
      "sigil": "insight",
      "description": "습관을 읽는 반격을 강화하지만 잡기 명중이 낮아집니다.",
      "cost": 60,
      "upgradeCost": 43,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "readBonus",
          "op": "add",
          "value": 0.09
        },
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.18
        },
        {
          "stat": "grabAccuracy",
          "op": "add",
          "value": -0.08
        }
      ],
      "trait": "gear_reader",
      "forges": [
        {
          "id": "punish",
          "name": "응징",
          "description": "상대의 헛친 타격을 추격합니다.",
          "stats": [
            {
              "stat": "strikePower",
              "op": "multiply",
              "value": 1.16
            },
            {
              "stat": "speed",
              "op": "multiply",
              "value": 0.95
            }
          ],
          "trait": "gear_reader_punish",
          "mastery": {
            "stats": [
              {
                "stat": "reach",
                "op": "add",
                "value": 0.16
              }
            ],
            "trait": "gear_reader_punish_master"
          }
        },
        {
          "id": "answer",
          "name": "대응",
          "description": "정확한 파훼로 가드를 유지합니다.",
          "stats": [
            {
              "stat": "tacticLag",
              "op": "multiply",
              "value": 0.72
            },
            {
              "stat": "guard",
              "op": "multiply",
              "value": 0.94
            }
          ],
          "trait": "gear_reader_answer",
          "mastery": {
            "stats": [
              {
                "stat": "evasion",
                "op": "add",
                "value": 0.04
              }
            ],
            "trait": "gear_reader_answer_master"
          }
        }
      ]
    },
    {
      "id": "anchor",
      "name": "성벽 각반",
      "category": "bulwark",
      "sigil": "bulwark",
      "description": "피해를 견디지만 거리 싸움에서 느려집니다.",
      "cost": 60,
      "upgradeCost": 43,
      "upgradeGrowth": 2.15,
      "maxRank": 3,
      "stats": [
        {
          "stat": "armor",
          "op": "add",
          "value": 0.075
        },
        {
          "stat": "guardRegen",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "speed",
          "op": "multiply",
          "value": 0.84
        }
      ],
      "trait": "gear_anchor",
      "forges": [
        {
          "id": "fort",
          "name": "요새",
          "description": "수비 성공으로 결정기를 준비합니다.",
          "stats": [
            {
              "stat": "guard",
              "op": "multiply",
              "value": 1.2
            },
            {
              "stat": "power",
              "op": "multiply",
              "value": 0.93
            }
          ],
          "trait": "gear_anchor_fort",
          "mastery": {
            "stats": [
              {
                "stat": "hp",
                "op": "multiply",
                "value": 1.1
              }
            ],
            "trait": "gear_anchor_fort_master"
          }
        },
        {
          "id": "revenge",
          "name": "역습",
          "description": "강한 반격으로 다시 공세를 가져옵니다.",
          "stats": [
            {
              "stat": "counterPower",
              "op": "multiply",
              "value": 1.2
            },
            {
              "stat": "guardRegen",
              "op": "multiply",
              "value": 0.92
            }
          ],
          "trait": "gear_anchor_revenge",
          "mastery": {
            "stats": [
              {
                "stat": "counterChance",
                "op": "add",
                "value": 0.05
              }
            ],
            "trait": "gear_anchor_revenge_master"
          }
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
      "description": "주력 피해를 크게 높이지만 다른 공격의 피해가 줄어듭니다.",
      "level": 4,
      "character": "jin",
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 0.88
        }
      ]
    },
    {
      "id": "jin_balanced",
      "name": "진의 균형",
      "description": "약점을 보완하는 대신 주력 화력을 조금 줄입니다.",
      "level": 4,
      "character": "jin",
      "stats": [
        {
          "stat": "guard",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.95
        }
      ]
    },
    {
      "id": "taeo_specialist",
      "name": "태오의 숙련",
      "description": "주력 피해를 크게 높이지만 다른 공격의 피해가 줄어듭니다.",
      "level": 4,
      "character": "taeo",
      "stats": [
        {
          "stat": "power",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 0.88
        }
      ]
    },
    {
      "id": "taeo_balanced",
      "name": "태오의 균형",
      "description": "약점을 보완하는 대신 주력 화력을 조금 줄입니다.",
      "level": 4,
      "character": "taeo",
      "stats": [
        {
          "stat": "guard",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.95
        }
      ]
    },
    {
      "id": "garam_specialist",
      "name": "가람의 숙련",
      "description": "주력 피해를 크게 높이지만 다른 공격의 피해가 줄어듭니다.",
      "level": 4,
      "character": "garam",
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "strikePower",
          "op": "multiply",
          "value": 0.88
        }
      ]
    },
    {
      "id": "garam_balanced",
      "name": "가람의 균형",
      "description": "약점을 보완하는 대신 주력 화력을 조금 줄입니다.",
      "level": 4,
      "character": "garam",
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.95
        }
      ]
    },
    {
      "id": "yuna_specialist",
      "name": "유나의 숙련",
      "description": "주력 피해를 크게 높이지만 다른 공격의 피해가 줄어듭니다.",
      "level": 4,
      "character": "yuna",
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "strikePower",
          "op": "multiply",
          "value": 0.88
        }
      ]
    },
    {
      "id": "yuna_balanced",
      "name": "유나의 균형",
      "description": "약점을 보완하는 대신 주력 화력을 조금 줄입니다.",
      "level": 4,
      "character": "yuna",
      "stats": [
        {
          "stat": "speed",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.95
        }
      ]
    },
    {
      "id": "sion_specialist",
      "name": "시온의 숙련",
      "description": "주력 피해를 크게 높이지만 다른 공격의 피해가 줄어듭니다.",
      "level": 4,
      "character": "sion",
      "stats": [
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "strikePower",
          "op": "multiply",
          "value": 0.88
        }
      ]
    },
    {
      "id": "sion_balanced",
      "name": "시온의 균형",
      "description": "약점을 보완하는 대신 주력 화력을 조금 줄입니다.",
      "level": 4,
      "character": "sion",
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.95
        }
      ]
    },
    {
      "id": "mira_specialist",
      "name": "미라의 숙련",
      "description": "주력 피해를 크게 높이지만 다른 공격의 피해가 줄어듭니다.",
      "level": 4,
      "character": "mira",
      "stats": [
        {
          "stat": "counterPower",
          "op": "multiply",
          "value": 1.2
        },
        {
          "stat": "strikePower",
          "op": "multiply",
          "value": 0.88
        }
      ]
    },
    {
      "id": "mira_balanced",
      "name": "미라의 균형",
      "description": "약점을 보완하는 대신 주력 화력을 조금 줄입니다.",
      "level": 4,
      "character": "mira",
      "stats": [
        {
          "stat": "grabPower",
          "op": "multiply",
          "value": 1.13
        },
        {
          "stat": "power",
          "op": "multiply",
          "value": 0.95
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
      ],
      "tactics": {
        "focus": "grab",
        "range": "auto",
        "defense": "block"
      },
      "sequence": [
        "grab",
        "grab",
        "strike"
      ],
      "scout": {
        "habit": "붙어서 잡기를 반복합니다.",
        "weakness": "잡기를 준비할 때 긴 타격으로 먼저 끊으세요."
      }
    },
    {
      "id": "rival_2",
      "character": "jin",
      "level": 2,
      "ai": "steady",
      "name": "긴 거리의 벽",
      "preset": "keepout",
      "rewardBonus": 2,
      "modules": [
        {
          "id": "reach",
          "rank": 1,
          "forge": "spear"
        }
      ],
      "talents": [
        "steady"
      ],
      "tactics": {
        "focus": "strike",
        "range": "auto",
        "defense": "evade"
      },
      "sequence": [
        "strike",
        "strike",
        "counter"
      ],
      "scout": {
        "habit": "긴 타격을 두 번 누른 뒤 반격을 섞습니다.",
        "weakness": "타격을 반격한 뒤, 대기가 길어지면 잡기로 전환하세요."
      }
    },
    {
      "id": "rival_3",
      "character": "mira",
      "level": 3,
      "ai": "reader",
      "name": "굳은 가드",
      "preset": "shell",
      "rewardBonus": 4,
      "modules": [
        {
          "id": "hardguard",
          "rank": 1,
          "forge": "echo"
        }
      ],
      "talents": [
        "steady"
      ],
      "tactics": {
        "focus": "counter",
        "range": "auto",
        "defense": "block"
      },
      "sequence": [
        "counter",
        "counter",
        "strike"
      ],
      "scout": {
        "habit": "가드와 반격으로 체력을 지킵니다.",
        "weakness": "잡기는 가드와 반격을 모두 무시합니다."
      }
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
        {
          "id": "deceive",
          "rank": 1,
          "forge": "illusion"
        }
      ],
      "talents": [
        "steady"
      ],
      "tactics": {
        "focus": "grab",
        "range": "auto",
        "defense": "evade"
      },
      "sequence": [
        "grab",
        "counter",
        "grab"
      ],
      "scout": {
        "habit": "속임수 뒤 빠르게 태클을 노립니다.",
        "weakness": "긴 간격에서 타격하고, 회피 중에는 기력을 남기세요."
      }
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
        {
          "id": "weight",
          "rank": 1,
          "forge": "crack"
        }
      ],
      "talents": [
        "steady"
      ],
      "tactics": {
        "focus": "strike",
        "range": "auto",
        "defense": "evade"
      },
      "sequence": [
        "strike",
        "strike",
        "grab"
      ],
      "scout": {
        "habit": "연타로 가드를 깎다가 잡기로 바꿉니다.",
        "weakness": "연타는 반격으로 끊고 잡기 전환 때 거리를 벌리세요."
      }
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
        {
          "id": "parry",
          "rank": 1,
          "forge": "read"
        }
      ],
      "talents": [
        "steady",
        "precision"
      ],
      "tactics": {
        "focus": "counter",
        "range": "auto",
        "defense": "evade"
      },
      "sequence": [
        "counter",
        "grab",
        "counter"
      ],
      "scout": {
        "habit": "반복 행동을 읽어 대응을 바꿉니다.",
        "weakness": "한 노림수에 머물지 말고 실제 전환을 확인하세요."
      }
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
        {
          "id": "grip",
          "rank": 2,
          "forge": "crush"
        },
        {
          "id": "pad",
          "rank": 2,
          "forge": "bastion"
        }
      ],
      "talents": [
        "steady",
        "precision"
      ],
      "tactics": {
        "focus": "grab",
        "range": "auto",
        "defense": "block"
      },
      "sequence": [
        "grab",
        "strike",
        "grab"
      ],
      "scout": {
        "habit": "공세를 유지하며 외곽으로 몰아붙입니다.",
        "weakness": "가드만 믿지 말고 타격으로 진입을 끊으세요."
      }
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
        {
          "id": "reach",
          "rank": 2,
          "forge": "spear"
        },
        {
          "id": "ankle",
          "rank": 2,
          "forge": "pursuit"
        }
      ],
      "talents": [
        "steady",
        "precision"
      ],
      "tactics": {
        "focus": "strike",
        "range": "auto",
        "defense": "evade"
      },
      "sequence": [
        "strike",
        "counter",
        "strike"
      ],
      "scout": {
        "habit": "사거리 끝에서 헛친 공격을 추격합니다.",
        "weakness": "반격 간격을 맞추거나 밀착해 잡기를 노리세요."
      }
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
        {
          "id": "hardguard",
          "rank": 2,
          "forge": "echo"
        },
        {
          "id": "anchor",
          "rank": 2,
          "forge": "fort"
        }
      ],
      "talents": [
        "steady",
        "precision"
      ],
      "tactics": {
        "focus": "counter",
        "range": "auto",
        "defense": "block"
      },
      "sequence": [
        "counter",
        "strike",
        "counter"
      ],
      "scout": {
        "habit": "수호 장비로 긴 교환을 버팁니다.",
        "weakness": "잡기로 가드를 우회하고 회복할 틈을 끊으세요."
      }
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
        {
          "id": "weight",
          "rank": 2,
          "forge": "crack"
        },
        {
          "id": "breaker",
          "rank": 2,
          "forge": "rupture"
        }
      ],
      "talents": [
        "steady",
        "precision"
      ],
      "tactics": {
        "focus": "strike",
        "range": "auto",
        "defense": "evade"
      },
      "sequence": [
        "strike",
        "grab",
        "strike"
      ],
      "scout": {
        "habit": "공성 장비로 가드를 파괴합니다.",
        "weakness": "회피·반격으로 정타를 줄이고 기력 소모를 유도하세요."
      }
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
        {
          "id": "deceive",
          "rank": 2,
          "forge": "illusion"
        },
        {
          "id": "ankle",
          "rank": 2,
          "forge": "pursuit"
        },
        {
          "id": "grip",
          "rank": 2,
          "forge": "crush"
        }
      ],
      "talents": [
        "steady",
        "precision"
      ],
      "tactics": {
        "focus": "grab",
        "range": "auto",
        "defense": "evade"
      },
      "sequence": [
        "grab",
        "counter",
        "strike"
      ],
      "scout": {
        "habit": "진입과 회피를 번갈아 결정기를 준비합니다.",
        "weakness": "타격으로 진입을 막고 회피가 이어질 때 회복하세요."
      }
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
        {
          "id": "parry",
          "rank": 2,
          "forge": "read"
        },
        {
          "id": "reader",
          "rank": 2,
          "forge": "punish"
        },
        {
          "id": "neural",
          "rank": 2,
          "forge": "resolve"
        }
      ],
      "talents": [
        "steady",
        "precision"
      ],
      "tactics": {
        "focus": "counter",
        "range": "auto",
        "defense": "evade"
      },
      "sequence": [
        "counter",
        "strike",
        "grab"
      ],
      "scout": {
        "habit": "상황에 따라 세 노림수를 모두 전환합니다.",
        "weakness": "예고된 노림수와 최근 기술을 함께 읽으세요."
      }
    }
  ],
  "ai": {
    "profiles": {
      "steady": {
        "name": "안정형",
        "adapt": 0.42,
        "recoverAt": 0.25,
        "focusAt": 0.3,
        "aggression": 0.4,
        "baitChance": 0.15
      },
      "rush": {
        "name": "공세형",
        "adapt": 0.28,
        "recoverAt": 0.15,
        "focusAt": 0.23,
        "aggression": 0.75,
        "baitChance": 0.1
      },
      "reader": {
        "name": "분석형",
        "adapt": 0.78,
        "recoverAt": 0.34,
        "focusAt": 0.4,
        "aggression": 0.3,
        "baitChance": 0.25
      },
      "trick": {
        "name": "전환형",
        "adapt": 0.62,
        "recoverAt": 0.25,
        "focusAt": 0.34,
        "aggression": 0.5,
        "baitChance": 0.45
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
    "training": "수련소",
    "build": "무장 공방",
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
    "hintFatigue": "기력이 낮습니다. 회복 지시로 교환을 끊으세요.",
    "hintFoeTired": "상대 기력이 낮습니다. 압박할 기회입니다.",
    "hintGuard": "상대 가드가 약합니다. 타격을 이어가면 붕괴를 노릴 수 있습니다.",
    "hintGrab": "잡기 진입을 타격으로 끊거나 긴 간격으로 대응하세요.",
    "hintCounter": "반격 대기에는 잡기 또는 유인 지시가 유리합니다.",
    "hintDefault": "상대의 노림수와 간격을 읽고 대응하세요.",
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
    "gear": "장비 작업대",
    "talents": "재능 · 2칸",
    "owned": "보유",
    "buy": "구입",
    "equip": "장착",
    "unequip": "해제",
    "upgrade": "특화 강화",
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
    "rulesBody": "타격은 잡기 준비를 끊고, 잡기는 반격과 가드를 무너뜨리며, 반격은 타격을 받아칩니다. 사거리·기력·속임수로 불리한 노림수도 뒤집을 수 있습니다.",
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
    "pointsReturn": "필요한 능력에 투자하세요. 재분배는 무료입니다.",
    "empty": "미보유",
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
    "coachShort": "노림수와 거리·수비는 따로 조정할 수 있습니다.",
    "hintRecoverActive": "회복 중에는 공격 빈도가 줄어듭니다.",
    "dashboardTitle": "다음 결투를 준비하세요",
    "dashboardSub": "상대를 읽고, 무장을 맞추고, 결투에서 증명하세요.",
    "dashboardHero": "나의 투사",
    "dashboardBuild": "출전 무장",
    "dashboardPlan": "출전 전술",
    "scoutTitle": "상대 분석",
    "scoutHabit": "주로 쓰는 수",
    "scoutWeak": "파훼할 틈",
    "scoutGear": "상대 무장",
    "noFoeGear": "장비 없이 출전",
    "counterApply": "대응 전술 적용",
    "counterApplied": "상대의 첫 노림수에 맞췄습니다. 전환을 계속 확인하세요.",
    "battleReady": "바로 결투",
    "planOptional": "기본 전술로 바로 출전할 수 있습니다.",
    "planLocked": "진행 중인 결투에서 조정하세요.",
    "tacticalTitle": "전술 조정",
    "focusTitle": "공격 목표",
    "focusSub": "상대의 현재 수에 맞춰 노림수를 바꿉니다.",
    "rangeTitle": "간격",
    "defenseTitle": "수비",
    "advancedTactics": "거리·수비 조정",
    "applyTactics": "전술 적용",
    "tacticalApplied": "전술을 조정했습니다.",
    "tacticsNow": "현재 노림수",
    "foePlan": "상대 노림수",
    "foeChanging": "전환 예고",
    "recentMoves": "최근 기술",
    "rpsTitle": "노림수 상성",
    "rpsHint": "타격 → 잡기 → 반격 → 타격",
    "rpsEmpty": "기회를 만들어 먼저 유효타를 넣으세요.",
    "rpsWins": "상성 판정",
    "counterHint": "대응",
    "rangeAuto": "노림수에 맞춤",
    "planDefault": "권장 간격",
    "clashGuard": "가드 무시",
    "feintName": "속임수",
    "counterWhiff": "반격 헛침",
    "workshopTitle": "하나를 얻고, 하나를 감수하세요",
    "workshopSub": "고유 효과와 부작용을 조합하고 특화 방향을 고르세요.",
    "workshopEquipment": "장비",
    "workshopTalents": "재능",
    "equippedTitle": "현재 장착",
    "slotSelect": "이 칸에 교체",
    "selectedSlot": "교체할 칸",
    "replaceItem": "교체 대상",
    "selectItem": "장비를 선택하세요",
    "itemBenefit": "얻는 것",
    "itemCost": "감수할 것",
    "itemPassive": "고유 발동 효과",
    "itemUsage": "전투에서의 역할",
    "buyEquip": "구입·장착",
    "equipSelected": "선택한 칸에 장착",
    "ownedItem": "보유 장비",
    "equippedItem": "장착 중",
    "forgeTitle": "특화 방향",
    "forgeChoose": "특화 선택",
    "forgeRechoose": "이 특화로 변경",
    "forgeFree": "특화 변경은 결투 사이에 무료입니다.",
    "forgeUpgrade": "특화 강화",
    "forgeMaster": "완성 강화",
    "forgeMasterPreview": "완성 시 추가 효과",
    "forgeMastered": "완성 장비",
    "forgeRank": "제작 단계",
    "forgeLocked": "먼저 장비를 구입하세요.",
    "forgeChooseFirst": "특화 방향을 먼저 선택하세요.",
    "buySuccess": "장비를 구입하고 장착했습니다.",
    "forgeSuccess": "장비를 특화했습니다.",
    "reforgeSuccess": "특화 방향을 변경했습니다.",
    "forgeMasterSuccess": "장비를 완성했습니다.",
    "compareTitle": "교체 후 변화",
    "compareNone": "현재 장착과 같습니다.",
    "compareUnequipped": "빈 슬롯에 추가합니다.",
    "compareSlot": "선택한 슬롯과 비교",
    "resonanceTitle": "장비 공명",
    "resonanceActive": "발동 중",
    "resonanceInactive": "같은 문장 2개 장착 시 발동",
    "sigil": "문장",
    "buildSaveTitle": "저장한 무장",
    "buildSave": "현재 무장 저장",
    "buildApply": "불러오기",
    "buildEmpty": "저장된 무장 없음",
    "buildSaved": "현재 무장을 저장했습니다.",
    "buildApplied": "저장한 무장을 적용했습니다.",
    "buildBusy": "결투 중에는 무장을 바꿀 수 없습니다.",
    "buildProfile": "무장 성향",
    "buildWeak": "교체는 무료 · 장비는 소모되지 않습니다.",
    "talentHeading": "전투 재능",
    "talentSub": "두 가지 재능으로 부족한 부분을 보완하거나 강점을 밀어주세요.",
    "trainingTitle": "성장 방향을 정하세요",
    "trainingPoints": "사용 가능한 수련점",
    "trainingCurrent": "투자한 수련",
    "trainingGain": "다음 수련 효과",
    "ledger": "결투 기록",
    "dashboardProgress": "리그 진행",
    "winsProgress": "격파",
    "noCoins": "금화가 부족합니다. 결투 보상으로 마련하세요.",
    "invalidForge": "올바른 특화 방향을 선택하세요.",
    "invalidBuild": "사용할 수 없는 무장입니다.",
    "statDelta": "능력 변화",
    "procLabel": "장비 발동",
    "liveTactics": "거리·수비",
    "clashDamage": "파훼 피해",
    "neutral": "변화 없음",
    "tacticSignal": "지시 전달 중",
    "buildStatsTitle": "현재 전투 능력",
    "rankBudget": "계급 · 성장",
    "previewBranch": "이 특화의 이득과 손해",
    "closeCompare": "비교 닫기",
    "learnRps": "상성 보기",
    "counterResolve": "반격 성공 시 공격을 끊습니다.",
    "ownedCount": "보유",
    "workshopBack": "결투 준비로",
    "tacticPending": "변경 대기",
    "rpsExplain": "상성은 실제 기술이 맞물릴 때 발동합니다. 장비·사거리·기력과 속임수가 결과를 바꿉니다.",
    "buyOnly": "구입만 하기",
    "nextReward": "첫 격파 보상",
    "itemTierLabel": "제작",
    "clearSlot": "장착 해제",
    "savedBuildHint": "무장·특화·재능·출전 전술을 함께 저장합니다.",
    "emptyBuildName": "무장",
    "forgeOnEquip": "효과 비교는 선택한 슬롯에 장착했을 때 기준입니다.",
    "startingGear": "기본 무장",
    "percentPoint": "%p",
    "percentUnit": "%",
    "statArrow": "→",
    "equipmentSources": "무장·공명 효과",
    "buildTradeoff": "강점과 약점을 함께 확인하세요.",
    "currentSlot": "교체 슬롯",
    "currentTactics": "출전 설정",
    "gearDetail": "장비 상세",
    "gainLabel": "강화되는 능력",
    "lossLabel": "약해지는 능력",
    "noTradeoff": "추가 부작용 없음",
    "newItem": "신규 장비",
    "masterAdditional": "완성 시 추가 능력",
    "upgradeCompare": "현재 → 강화 후",
    "trainingNav": "능력 투자·재분배",
    "fightNav": "상대 분석·결투",
    "buildNav": "장비·특화·재능",
    "clashWaiting": "기술이 맞물릴 때 파훼 판정",
    "currentBuildName": "현재 무장",
    "focusKeyTitle": "노림수",
    "investedPoints": "투자",
    "rankNameLabel": "계급",
    "procs": "장비 발동",
    "clashes": "상성 파훼",
    "tacticsPaused": "선택 후 적용하면 결투가 이어집니다.",
    "forgeSummary": "장비의 기본 효과에 특화가 더해집니다.",
    "forgeMasterHint": "기본 효과와 특화는 유지하고, 아래 능력·발동 효과로 강화됩니다.",
    "rpsGuardHint": "잡기는 가드를 무시 · 유인은 반격 대기를 흔듦",
    "focusEffective": "유리한 상대",
    "focusVulnerable": "주의할 상대",
    "statsBefore": "현재",
    "statsAfter": "교체 후",
    "coinsUnit": "금화",
    "savingBuilds": "결투 사이에 자유롭게 교체할 수 있습니다.",
    "unlockTip": "승패와 관계없이 보상을 얻습니다.",
    "leagueCaption": "승리하면 다음 상대가 열립니다.",
    "buyLocked": "장착·강화는 결투가 끝난 뒤 가능합니다.",
    "readiness": "준비 완료",
    "trainIncrease": "투자",
    "editBuild": "공방으로",
    "emptyTalent": "재능 없음",
    "masterEffect": "강화된 발동 효과",
    "itemNoneGain": "별도 수치 증가 없음",
    "procHistory": "발동 기록",
    "tacticsHeroDefault": "투사의 기본 전술",
    "forgeStagePrefix": "제작 단계",
    "noGearEffect": "장비를 장착하면 고유 효과가 추가됩니다.",
    "locked": "미개방",
    "clashMine": "성공",
    "clashFoe": "당함",
    "foeGearDetails": "무장 효과 확인",
    "resonanceGain": "새 공명 발동",
    "resonanceLoss": "공명 해제",
    "inBattle": "결투 진행 중"
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
    "signatureBlocked": "지금은 결정기를 준비할 수 없습니다.",
    "tacticWin": "{who} · {name}",
    "planAdjusted": "{who} · {focus} / {range} / {defense}",
    "gearProc": "{who} · {name}",
    "counterWhiff": "{who} · 반격의 빈틈"
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
    "fantasyFloorTitleY": 0.58,
    "tacticalLabelY": 20,
    "tacticalLabelWidth": 102,
    "tacticalLabelHeight": 23,
    "tacticalFont": 11,
    "tacticalLabelPad": 4
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
    "power": "전체 피해",
    "speed": "이동 속도",
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
    "readBonus": "반복 분석",
    "strikePower": "타격 피해",
    "grabReach": "잡기 거리",
    "lowHpPower": "위기 화력"
  },
  "_docs": {
    "editing": "game-db.js가 유일한 콘텐츠 원본입니다. characters/styles/matchups/moves/options/presets/conditions/traits/statuses/modules/talents/rivals에서 수정합니다. 엔진은 index.html에 있습니다.",
    "career": "한 투사를 계약하고 영구 육성합니다. 진행은 tactics.duel.v6에 저장하며, 이전 해상전 저장은 삭제하지 않습니다. 계급명은 progression.ranks에서 수정합니다.",
    "combat": "직접 이동·공격 입력이 없는 실시간 전술 시뮬레이션. 전술 지연, 기력, 거리, 가드, 반격·잡기·속임수, 조건 작전서와 집중이 상호작용합니다.",
    "coaching": "coaching와 characters[].commands: 필수 사전 설정 없는 세 경기 지시. 캐릭터별 계획·연계·결정기는 characters[].followups/signature와 moves에 있습니다. 준비 작전서 데이터는 호환용으로 보존하며 기본 경기에서는 실행하지 않습니다.",
    "identity": "characters[].visual은 체형·장비·자세, identity는 고유 상태 표시, chargeTrait는 결정기 게이지 획득 조건입니다. 대표 동작·연계·지시 결과가 화면에서 연결되게 유지합니다.",
    "theme": "theme.colors/fonts/icons/labels는 중세 판타지 UI 테마의 단일 원본입니다. palette는 대비와 전투 색상, draw의 fantasy*는 석조 결투장·깃발·횃불 표현입니다. 화면 배치는 CSS 구조로 관리하며 전투 규칙과 저장 키는 바꾸지 않습니다.",
    "forge": "modules의 기본 stats·trait는 한 번 적용합니다. 특화 단계부터 forges[].stats와 trait, 완성 단계에는 mastery.stats와 대체 trait가 추가됩니다. 문장 2개로 forge.resonances 발동. 장비 ID·v6 저장 키 유지.",
    "tactics": "tactics.focuses의 실제 기술 상성과 clashes가 판정 원본입니다. 노림수·간격·수비는 독립 조정하고 공세·유인·회복은 실행 속도와 기만을 조정합니다. 인공 지능은 rivals[].sequence와 최근 기술을 읽습니다."
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
    "tacticWin",
    "signatureUsed",
    "followup",
    "counter",
    "guardBreak",
    "grab"
  ],
  "tabs": [
    {
      "id": "fight",
      "label": "fight",
      "icon": "fight",
      "hint": "fightNav"
    },
    {
      "id": "build",
      "label": "build",
      "icon": "anvil",
      "hint": "buildNav"
    },
    {
      "id": "training",
      "label": "training",
      "icon": "training",
      "hint": "trainingNav"
    }
  ],
  "summaryStats": [
    "hp",
    "strikePower",
    "grabPower",
    "counterPower",
    "staminaRegen",
    "speed"
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
    "focusGain",
    "strikePower"
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
    "tacticWin",
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
      "brand": "<circle cx='12' cy='12' r='9'/><path d='m12 5 3 7-3 7-3-7 3-7Zm-8 7h4m8 0h4'/>",
      "attack": "<path d='m6 20 3-6L19 3l2 2L10 16l-4 4Zm1-7 5 5M4 22l3-3M6 4l3 2m-4 2 2 1'/>",
      "bait": "<path d='M19 3C8 2 3 10 7 17l-3 4 7-6c7 1 10-5 8-12ZM7 17l9-10M10 13l5 1m-2-4 1-4'/>",
      "recover": "<path d='M12 3v18M10 18C3 18 2 13 4 9c5 0 8 4 6 9Zm4-5c-1-6 2-10 7-10 1 5-1 10-7 10ZM7 6l2 2m7 10 3-3'/>",
      "signature": "<path d='m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1 3-6Z'/><circle cx='12' cy='12' r='3'/>",
      "settings": "<path d='m9 3 3-1 3 1 1 3 3 1 2 3-1 3-3 1-1 3-3 2-3-1-1-3-3-1-2-3 1-3 3-1 1-3Z'/><circle cx='12' cy='11' r='3'/>",
      "fullscreen": "<path d='M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5'/>",
      "pause": "<path d='M8 4v16m8-16v16'/>",
      "close": "<path d='m6 6 12 12M18 6 6 18'/>",
      "home": "<path d='M3 11 12 3l9 8v10H3V11Zm6 10v-7h6v7M7 9h10'/>",
      "resume": "<path d='m8 4 12 8-12 8V4Z'/>",
      "save": "<path d='M4 3h14l3 3v15H3V3h1Zm3 0v6h10V3M7 21v-8h10v8'/>",
      "load": "<path d='M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5'/>",
      "scroll": "<path d='M6 3h13v14a4 4 0 0 1-4 4H5a3 3 0 0 1-3-3h12a3 3 0 0 0 3 3M6 3a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3Zm3 4h5m-5 4h5'/>",
      "rename": "<path d='m4 17 1 4 4-1L21 8l-5-5L4 17Zm10-12 5 5M4 17l5 3'/>",
      "moon": "<path d='M20 15A9 9 0 0 1 9 3a9 9 0 1 0 11 12Z'/>",
      "sound": "<path d='m3 9 5 0 5-5v16l-5-5H3V9Zm13-2a7 7 0 0 1 0 10m3-13a11 11 0 0 1 0 16'/>",
      "training": "<path d='m4 20 6-6m4-4 6-6M7 3l14 14-4 4L3 7l4-4Z'/>",
      "gear": "<path d='M7 3 3 7l3 5 3-2v11h6V10l3 2 3-5-4-4-5 3-5-3Z'/>",
      "fight": "<path d='m4 3 17 18M20 3 3 20M3 3l5 1-4 4-1-5Zm18 0-5 1 4 4 1-5Z'/>",
      "coins": "<ellipse cx='12' cy='12' rx='8' ry='9'/><path d='m12 7 3 5-3 5-3-5 3-5Z'/>",
      "rank": "<path d='m12 3 3 6 6 1-5 5 1 6-5-3-5 3 1-6-5-5 6-1 3-6Z'/>",
      "chevron": "<path d='m9 5 7 7-7 7'/>",
      "grip": "<path d=\"M6 12V9a2 2 0 0 1 4 0v2-6a2 2 0 0 1 4 0v6-4a2 2 0 0 1 4 0v6l2-2 2 2-5 7H9l-5-6z\"/>",
      "shield": "<path d=\"m12 3 8 3v6c0 5-8 9-8 9S4 17 4 12V6z\"/><path d=\"m8 12 3 3 5-6\"/>",
      "anvil": "<path d=\"M3 6h18l-4 6h-5l-2 3v4h7v2H4v-2h4v-4l-3-3H3z\"/>",
      "compare": "<path d=\"M8 3v18M16 3v18M3 8h10M11 16h10m-6-4-4 4 4 4M9 4l4 4-4 4\"/>"
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
  },
  "statDirections": {
    "staminaCost": -1,
    "moveCost": -1,
    "tacticLag": -1
  },
  "forge": {
    "rankNames": [
      "기본",
      "특화",
      "완성"
    ],
    "buildSlots": 3,
    "buildNames": [
      "무장 I",
      "무장 II",
      "무장 III"
    ],
    "deltaEpsilon": 0.0001,
    "deltaLimit": 6,
    "categories": [
      {
        "id": "all",
        "name": "전체",
        "icon": "gear"
      },
      {
        "id": "owned",
        "name": "보유",
        "icon": "save"
      },
      {
        "id": "assault",
        "name": "공성",
        "icon": "attack"
      },
      {
        "id": "hunt",
        "name": "추격",
        "icon": "bait"
      },
      {
        "id": "bulwark",
        "name": "수호",
        "icon": "recover"
      },
      {
        "id": "insight",
        "name": "통찰",
        "icon": "signature"
      }
    ],
    "resonances": [
      {
        "id": "assault",
        "name": "공성",
        "required": 2,
        "trait": "resonance_assault",
        "description": "가드 붕괴 유발 → 기력 14 회복 · 집중 12 획득 · 재발동 5초"
      },
      {
        "id": "hunt",
        "name": "추격",
        "required": 2,
        "trait": "resonance_hunt",
        "description": "상대 헛침 → 3초간 이동 속도 +20% · 공격 기력 비용 -12% · 재발동 5초"
      },
      {
        "id": "bulwark",
        "name": "수호",
        "required": 2,
        "trait": "resonance_bulwark",
        "description": "가드 성공 → 3초간 피해 감소 +7%p · 재발동 5초"
      },
      {
        "id": "insight",
        "name": "통찰",
        "required": 2,
        "trait": "resonance_insight",
        "description": "상성 파훼 성공 → 집중 16 획득 · 가드 10 회복 · 재발동 5초"
      }
    ],
    "previewStats": [
      "hp",
      "strikePower",
      "grabPower",
      "counterPower",
      "reach",
      "grabReach",
      "attackSpeed",
      "speed",
      "staminaRegen",
      "guard",
      "accuracy",
      "evasion",
      "armor",
      "guardDamage",
      "staminaCost",
      "moveCost",
      "tacticLag",
      "focusGain"
    ],
    "specializeRank": 2,
    "masterRank": 3,
    "mobileBreakpoint": 760
  },
  "tactics": {
    "focuses": [
      {
        "id": "strike",
        "name": "타격",
        "icon": "attack",
        "color": "#a76642",
        "beats": "grab",
        "weak": "counter",
        "range": "far",
        "weights": {
          "strike": 0.82,
          "grab": 0.06,
          "counter": 0,
          "feint": 0.12
        },
        "short": "잡기 진입 차단",
        "description": "잡기 준비를 타격으로 끊습니다. 기다리는 반격에는 취약합니다.",
        "counterPlan": {
          "focus": "counter",
          "range": "auto",
          "defense": "evade"
        }
      },
      {
        "id": "grab",
        "name": "잡기",
        "icon": "grip",
        "color": "#536c57",
        "beats": "counter",
        "weak": "strike",
        "range": "close",
        "weights": {
          "strike": 0.1,
          "grab": 0.8,
          "counter": 0,
          "feint": 0.1
        },
        "short": "반격·가드 제압",
        "description": "반격 대기와 가드를 무시합니다. 접근 중 타격에 끊길 수 있습니다.",
        "counterPlan": {
          "focus": "strike",
          "range": "far",
          "defense": "evade"
        }
      },
      {
        "id": "counter",
        "name": "반격",
        "icon": "shield",
        "color": "#6f647e",
        "beats": "strike",
        "weak": "grab",
        "range": "mid",
        "weights": {
          "strike": 0.1,
          "grab": 0,
          "counter": 0.78,
          "feint": 0.12
        },
        "short": "타격 받아치기",
        "description": "타격을 받아쳐 끊습니다. 잡기와 속임수에는 빈틈을 드러냅니다.",
        "counterPlan": {
          "focus": "grab",
          "range": "close",
          "defense": "block"
        }
      }
    ],
    "ranges": [
      {
        "id": "auto",
        "name": "자동 간격",
        "description": "타격은 길게, 잡기는 밀착, 반격은 교환 거리."
      },
      {
        "id": "far",
        "name": "긴 간격",
        "description": "타격·회복에 유리. 잡기는 접근한 적만 노립니다."
      },
      {
        "id": "mid",
        "name": "교환 거리",
        "description": "공격을 주고받는 간격. 반격을 맞추기 쉽습니다."
      },
      {
        "id": "close",
        "name": "밀착",
        "description": "잡기가 닿는 거리. 타격과 가드 붕괴에 주의."
      }
    ],
    "defenses": [
      {
        "id": "auto",
        "name": "투사 기본 수비",
        "description": "지시와 투사의 성격에 맞춰 수비합니다."
      },
      {
        "id": "block",
        "name": "가드",
        "description": "타격 피해를 줄입니다. 잡기는 가드를 무시합니다."
      },
      {
        "id": "evade",
        "name": "회피",
        "description": "기력을 써 피합니다. 공격 준비 중에는 회피율이 낮아집니다."
      }
    ],
    "styleFocus": {
      "strike": "strike",
      "grapple": "grab",
      "counter": "counter"
    },
    "focusBlend": 0.82,
    "baitFeintShare": 0.46,
    "recoverAttackChance": 0.2,
    "recoverWait": 0.55,
    "grabInterruptGrace": 0.15,
    "commitEvadeScale": 0.45,
    "commitBlockScale": 0.58,
    "counterMissExposure": 0.65,
    "clashFocus": 12,
    "clashNotice": 3.5,
    "clashCooldown": 0.7,
    "historyVisible": 4,
    "clashes": {
      "strike": {
        "beats": "grab",
        "power": 1.28,
        "expose": 1.0,
        "interrupt": 0.5,
        "name": "진입 차단"
      },
      "grab": {
        "beats": "counter",
        "power": 1.3,
        "expose": 1.1,
        "interrupt": 0.5,
        "name": "반격 제압"
      },
      "counter": {
        "beats": "strike",
        "power": 1.12,
        "expose": 0.8,
        "interrupt": 0.5,
        "name": "타격 받아치기"
      }
    },
    "callDescriptions": {
      "attack": "주력 공격 · 기력 소모↑",
      "bait": "속임수로 빈틈 유도",
      "recover": "공격↓ · 기력 회복↑"
    },
    "defaults": {
      "range": "auto",
      "defense": "auto"
    },
    "exposedPower": 1.18,
    "phaseLabels": {
      "strike": "타격 준비",
      "grab": "잡기 진입",
      "counter": "반격 대기",
      "feint": "속임수"
    }
  },
  "statDisplayProducts": {
    "strikePower": [
      "power",
      "strikePower"
    ],
    "grabPower": [
      "power",
      "grabPower"
    ],
    "counterPower": [
      "power",
      "counterPower"
    ]
  }
};
